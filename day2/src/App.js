import { BrowserRouter, Route ,Routes} from "react-router-dom";
import StudentDetails from "./Components/StudentDetails";
import Home from "./Components/Home";
import Header from "./Components/Header";

import Profile from "./Components/profile";
import Error from "./Components/error";

import "./Style.css";

// style={{border:'6px solid black',margin:'60px',marginLeft:'250px',width:1000,height:600}}
function App(){
    return (
        <div>
  
      <BrowserRouter>
      <div  className="head">
            <Header/>
            </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        
        <Route path="/students/:id" element={<StudentDetails/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
        </div>
    )
}

export default App;