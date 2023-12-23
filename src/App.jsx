

import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ForgotPassword1 from './pages/ForgotPassword1'
import SignUp from './pages/SignUp'
import FirebaseAuthDetails from './FirebaseAuthDetials'
import Profile from './pages/Profile'
import Home from './pages/Home'
import About from './pages/About'
import FileUpload from "./pages/FileUpload"
function App() {


  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/1" element={<FirebaseAuthDetails/>}/>
      <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route path="/forgotpassword1" element={<ForgotPassword1/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/fileupload" element={<FileUpload/>}/>
      {/* <FirebaseAuthDetails/>
      <ForgotPassword/>
      <ForgotPassword1/>
      <SignUp/> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
