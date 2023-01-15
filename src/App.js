import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Layout from './Layout';
import Home from "./components/Home/Home";
import Fav from "./components/Favourites/Fav"
import "./App.scss";
function App() {

  return (
  <div className="app">
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='fav' element={<Fav/>}/>
    </Route>
   </Routes>
  </div>
  );
}

export default App;
