  import React, { useEffect, useState } from 'react';
import UserTable from './UserTable';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import PageNotFoundGIF from "../../images/pnf.jpg";


 export default function Leaderboard() {
    const [auth, setAuth] = useAuth();

  const [users, setUsers] = useState([]);

   const getUsers = async () => {
        
     try {

      const res = await axios.get(`${process.env.REACT_APP_API}/getAllUsers`);
      setUsers(res.data);
      console.log(res.data);
      
     } catch (error) {

      console.log(error);
      
      
     }
     
   };

    useEffect(() => {
    getUsers();
  }, []);


  // render UserTable component if user is admin else redirect to page not found

  return auth?.user?.role === 1 ? (
    <div className="container">
      <div className="py-4 text-center">
        <h1>Leaderboard</h1>
        <UserTable users={users} />
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center" style={{height: "90vh"}}>
      <img src={PageNotFoundGIF} alt="PageNotFound" style={{height: "100%", width:"80%"}}/>
    </div>
  );
}

  
 

