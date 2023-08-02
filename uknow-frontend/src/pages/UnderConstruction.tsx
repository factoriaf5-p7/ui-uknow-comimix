import { Link } from "react-router-dom"

const UnderConstruction = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1>Page Under Construction</h1>
        <p>This page is currently under construction. Check back later for more information.</p>
        <h2><Link to='/home'>Back Home</Link></h2>
      </div>
    );
  };
  
  export default UnderConstruction;