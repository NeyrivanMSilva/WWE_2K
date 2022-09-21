import logo from './logo.svg';
import './App.css';
import AddPlayer from './pages/ppvs/addPpv.jsx';
import ListofPpvs from './pages/ppvs/listofPpvs';
import AddTeamTraining from './pages/teamTraining/addTeamTraining';
import AddPpv from './pages/ppvs/addPpv.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
 
function App() {
  return (
    <>
 <BrowserRouter>
      <Routes>
   
  {/*       <Route path="/" element={<AddPlayer/>} /> */}
        <Route path="/ppvs" element={<ListofPpvs/>} />
        <Route path="/addppv" element={<AddPpv/>} />
      </Routes>
      </BrowserRouter>
 

 
    </>
  );
}

export default App;
