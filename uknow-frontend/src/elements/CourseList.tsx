import { useQuery } from "@tanstack/react-query";
import CourseData from "../interfaces/course.interface";


export default function CourseList() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["courses"],
    queryFn: async (): Promise<CourseData[]> => {
      try {
        const response = await fetch(
          "http://localhost:3000/courses/average"
        );
        const data = await response.json();
        console.log(data.data);
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
            {course.difficulty} | Topic: {course.topic} | Description: {course.description} | Rating: {course.average}
          </li>
        ))}
      </ul>
    </div>
  );
}
