import { Routes, Route,  useLocation } from 'react-router-dom';
import { Landing, Home, Detail, Form } from './utils/viewsExports';
import { NavBar} from './utils/componentsExports';
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getCountries, getActivities } from "./redux/actions";
import Activities from './views/Activities/Activities';
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3001";

function App() {


  const {pathname} = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCountries());
      dispatch(getActivities());
  }, [dispatch]);


  return (
    <div className="App">

      <div>
        {pathname === '/home' && <NavBar />}
      </div> 

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/activities" element={<Activities/>} />
      </Routes>
    </div>
  );
}

export default App;
