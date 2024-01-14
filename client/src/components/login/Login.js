import React, { useEffect } from 'react'
import {app} from '../../config/firebaseconfig'
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Login.css'
export default function Login({setAuth}) {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const loginWithGoogle=async () =>{
        await signInWithPopup(firebaseAuth,provider).then((userCred)=>{
            if(userCred){
                setAuth(true);
                window.localStorage.setItem("auth","true");
                firebaseAuth.onAuthStateChanged((userCred)=>{
                    if(userCred){
                        userCred.getIdToken().then((token) => {
                            console.log(token);
                        })
                        navigate("/",{replace:true})
                    }else{
                        setAuth(false);
                        navigate("/login");
                    }
                  })
            }
        })
    }
    useEffect(()=>{
        if(window.localStorage.getItem("auth")==="true"){
            navigate("/",{replace:true})
        }
    },[])
  return (
    <div onClick={loginWithGoogle}>Login</div>
  )
}
