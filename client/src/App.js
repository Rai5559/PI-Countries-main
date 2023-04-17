import { Routes, Route,  useLocation } from 'react-router-dom';
import { Landing, Home, Detail, Form } from './utils/viewsExports';
import { NavBar} from './utils/componentsExports';
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getCountries } from "./redux/actions";

function App() {


  const {pathname} = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
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
      </Routes>
    </div>
  );
}

export default App;
