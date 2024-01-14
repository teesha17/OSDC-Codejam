import React , {useState,useEffect} from "react";
import { app } from "./config/firebaseconfig.js";
import { getAuth } from "firebase/auth";
import { Route , Routes ,BrowserRouter, useNavigate,useLocation} from 'react-router-dom'
import Home from './components/home/Home.js'
import Player from './components/player/Player.js'
import Errorpage from './components/errorpage/Errorpage.js'
import Search from './components/search/Search.js'
import Library from './components/library/Library.js'
import Login from './components/login/Login.js'
import Loading from "./components/loading/Loading.js";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";
const Rout = () => {

  const firebaseAuth=getAuth(app);
  const navigate=useNavigate();
  
  const [auth,setAuth]=useState(false || window.localStorage.getItem("auth")==="true")
  useEffect(()=>{
    firebaseAuth.onAuthStateChanged((userCred)=>{
      if(userCred){
          userCred.getIdToken().then((token) => {
            console.log(token);
          })
      }else{
        setAuth(false);
        window.localStorage.setItem("auth","false");
        navigate("/login");
      }
    })
  },[])
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loading />
  }
  else {
    return (
      <>
      <Navbar/>
            <Routes location={location}>
            <Route path='/' element={ <Home /> } />
        <Route path='/search' element={ <Search /> } />
        <Route path='/library' element={ <Library/> } />
        <Route path='/player' element={ <Player/> } />
        <Route path='/login' element={ <Login setAuth={setAuth}/> } />
        <Route path='*' element={ <Errorpage /> } />
            </Routes>
            <Footer/>
      </>
    )
  }
}

export default Rout;





