import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AddPost from './components/AddPost/AddPost';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/HomePage';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import ShowOne from './components/ShowOne/ShowOne';
// import Navlogin from './components/NavbarLogin/Navlogin'

function App() {
  return (
    <div className="App">
      
      <Navbar />
      {/* <Navlogin /> */}
      <Routes>
      < Route path= "/" element={<HomePage />} />
      < Route path= "/question/:id" element={<ShowOne />} />
      < Route path= "/add-question" element={<AddPost />} />
      < Route path= "/login" element={<Login />} />
      < Route path= "/signup" element={<SignUp />} />
      </Routes>
      <ShowOne />
      <Footer />
      
    </div>
  );
}

export default App;
