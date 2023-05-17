import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Articles from "./Components/Articles.js";
import ArticlesDetails from "./Components/ArticlesDetails";



function App() {
  return (
    <div>  <BrowserRouter><Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<ArticlesDetails />} />
      
      
      </Routes></BrowserRouter>  </div>
  );
}

export default App;
