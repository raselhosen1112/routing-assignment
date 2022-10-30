
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Component/Blogs/Blogs';
import Dashbord from './Component/Dashbord/Dashbord';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Review from './Component/Review/Review';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='home' element={<Home></Home>}></Route>
      <Route path='review' element={<Review> </Review>}></Route>
      <Route path='blogs' element={<Blogs></Blogs>}></Route>
      <Route path='dashbord' element={<Dashbord> </Dashbord>}></Route>
    </Routes>
 
    </div>
  );
}

export default App;
