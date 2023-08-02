import React from 'react'

function DashboardTab() {
  return (
    <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Cursos Creados" />
        <Tab label="Cursos Comprados" />
    </Tabs>
  )
}

export default DashboardTab