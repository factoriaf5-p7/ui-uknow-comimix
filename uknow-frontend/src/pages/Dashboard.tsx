
import DashboardCourseList from '../components/elements/DashboardCourseList'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

function Dashboard() {
  return (
    <>
      <Navbar/>
      <DashboardCourseList />
      <Footer/>
    </>
  )
}

export default Dashboard