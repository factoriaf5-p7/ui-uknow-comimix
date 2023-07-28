
import ContentDetail from '../elements/Content';

import useOneCourseData from '../hooks/useOneCourseData';

export const Course = () => {
  const { isLoading, isError, oneCourse } = useOneCourseData();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching data.</p>;
  }

  return (
    <div>
      {oneCourse ? (
        <ContentDetail oneCourse={oneCourse} />
      ) : (
        <p>No data found for the specified course.</p>
      )}
    </div>
  );
};
