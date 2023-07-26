import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1>404 - NOT FOUND</h1>
        <h2><Link to='/'>Go Home</Link></h2>
    </div>
    
    )
}

export default NotFound