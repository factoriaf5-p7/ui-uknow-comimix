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

export default function CourseList() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["courses"],
    queryFn: async (): Promise<CourseData[]> => {
      try {
        const response = await fetch(
          "http://localhost:3000/courses/order-courses-price"
        );
        const data = await response.json();
        return data.data;
      } catch (error) {
        throw new Error("Failed to fetch course data");
      }
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError)
    return <div>An error has occurred while retriving the data.</div>;

  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {data.map((course) => (
          <li key={course._id}>
            Name: {course.name} | Price: {course.price} | Difficulty:{" "}
            {course.difficulty} | Topic: {course.topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
