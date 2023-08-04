import DashboardCourseList from "./DashboardCourseList"
import { SyntheticEvent, useContext } from "react"
import { Tab } from "@mui/material"
import { Tabs } from "@mui/material"
import { useState } from "react"
import { Box } from "@mui/system"
import CustomTabPanel from "./CustomTabPanel"
import { useCreatedCourses } from "../../services/useCreatedCourses"
import { useBoughtCourses } from "../../services/useBoughtCourses"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

function DashboardTab() {
  const { isLogged, user } = useContext(AuthContext);
  const navigate = useNavigate();
  // if(!isLogged) navigate('/login');

  const createdCourses = useCreatedCourses(user._id);
  createdCourses.listType = 'Created';
  const boughtCourses = useBoughtCourses(user._id);
  boughtCourses.listType = 'Bought';

    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

  return (
    <>
      <Box sx={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '80px' }}>
          <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Cursos Comprados" />
              <Tab label="Cursos Creados" />
          </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DashboardCourseList prop={boughtCourses}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <DashboardCourseList prop={createdCourses}/>
      </CustomTabPanel>
    </>
  )
}

export default DashboardTab