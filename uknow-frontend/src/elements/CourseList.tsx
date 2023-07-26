import { useQuery } from "@tanstack/react-query";

interface CourseData {
  _id: string;
  name: string;
  price: number;
  topic: string;
  difficulty: string;
  tags: string[];
  bought: boolean;
  content: string;
  create_date: string;
  update_date: string;
}

async function getCourseData(): Promise<CourseData[]> {
  const response = await fetch(
    "http://localhost:3000/courses/average"
   
  );
  const data = await response.json();

  console.log(data);
  return data.data;
} 

/* async function getCourseData(): Promise<CourseData[]> {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const response = await fetch("http://localhost:3000/courses/order-courses-price");
        const data = await response.json();
        resolve(data.data);
      }, 3000); // 3-second delay
    });
  }  */

export default function CourseList() {
  const { isLoading, isError, data, error } = useQuery({
   queryKey:["courses"],
   queryFn: getCourseData
});

if (isLoading) return <div>Loading...</div>;

  if (isError)
    return (
      <div>An error has occurred: {error?.toString() || "Unknown error"}</div>
    );


  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {data.map((course) => (
          <li key={course._id}>
            Name: {course.name} | Price:{" "}
            {course.price} | Difficulty: {course.difficulty} |{" "}
            Topic: {course.topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
