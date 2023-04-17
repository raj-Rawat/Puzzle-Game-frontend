import React from 'react'
import styles from './HomeStyle.module.css'
import { useAuth } from "../context/auth.js";
import { useNavigate } from 'react-router-dom';
function Home() {
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();
  return (
    <div className= {styles.home}>
        
        <div  className={styles.box}>
        <h1 className='text-bold' style={{color: "white"}}>Welcome to Puzzle-Game</h1>
        <h3 className='text-bold'  style={{color: "white"}}>Discover Your Soft Skills and Unleash Your Potential</h3>
           {auth?.user ? 
            <button className='btn btn-dark '
              style={{maxWidth: "120px"}}
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              Dashboard
            </button>
           : 
            <button className='btn btn-dark'
              style={{maxWidth: "120px"}}
              onClick={(e) => {
                e.preventDefault();
                navigate("/register");
              }}
            >
              Register
        </button>}
        </div>
    </div>
  )
}

export default Home