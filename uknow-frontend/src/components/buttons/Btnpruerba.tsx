
import { Link } from 'react-router-dom'
import { CourseData } from '../../interfaces/course.interface'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'

interface Btnprops{
course : CourseData
}
const Btnpruerba = ({course} : Btnprops) => {

    const {user} = useContext(AuthContext)
    const handleclick = () =>{
        console.log(user.bought_courses)
    }
  return (
    <Link onClick={handleclick} state={course} to={"/course"}>curso</Link>
  )
}

export default Btnpruerba