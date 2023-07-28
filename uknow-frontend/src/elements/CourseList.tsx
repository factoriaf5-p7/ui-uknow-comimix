import { useCourseData } from "../hooks/useQuery-CourseData";


export const CourseList = () => {
  const { isLoading, isError, courseList } = useCourseData();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>An error has occurred while retrieving the data.</div>;
  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courseList && courseList.map((course) => (
          <li key={course._id}>
            Name: {course.name} | Price: {course.price} | Difficulty:{" "}
            {course.difficulty} | Topic: {course.topic} | Description: {course.description} | Rating: {course.average}
          </li>
        ))}
      </ul>
    </div>
  );
}
