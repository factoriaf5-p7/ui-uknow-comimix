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

interface Props {
  userId: string;
}

function DashboardTab(props: Props) {
  const { isLogged, user } = useContext(AuthContext);
  const navigate = useNavigate();
  // if(!isLogged) navigate('/login');

  const { userId } = props;
  const createdCourses = useCreatedCourses('64c7a7ccbb9cc787c92592f9');
  createdCourses.listType = 'Created';
  const boughtCourses = useBoughtCourses('64c7a7ccbb9cc787c92592f9');
  boughtCourses.listType = 'Bought';

    const [value, setValue] = useState(0);

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        console.log(newValue)
        setValue(newValue);
    }

  return (
    <>
      <Box sx={{ border: '1px solid red', marginTop: '80px' }}>
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