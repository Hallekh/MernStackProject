import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AddPost from './components/AddPost/AddPost';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home/HomePage';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
// import Navlogin from './components/NavbarLogin/Navlogin'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Navlogin /> */}
      <HomePage />
      <AddPost />
      <Login />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <SignUp />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
