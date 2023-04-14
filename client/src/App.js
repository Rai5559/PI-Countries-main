import { Routes, Route,  useLocation } from 'react-router-dom';
import { Landing, Home, Detail, Form } from './utils/viewsExports';
import { NavBar} from './utils/componentsExports';

function App() {


  const {pathname} = useLocation();



  return (
    <div className="App">

      <div>
        {pathname !== '/' && <NavBar />}
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
