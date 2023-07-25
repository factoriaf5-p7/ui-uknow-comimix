import React, { useEffect, useState} from 'react'

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:3000/courses');
            const data = await response.json();
            setData(data.data);
        }

        getData();
    }, []);

  return (
    <div>
        {
            data.map(course => {
                return <p>{course.name}</p>
            })
        }
    </div>
  )
}

export default Home