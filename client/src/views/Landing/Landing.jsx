
import { Link } from 'react-router-dom';


function Landing () {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to={'/home'}><button>Home</button></Link>
    </div>
  );
}

export default Landing;
