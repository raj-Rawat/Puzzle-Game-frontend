import axios from "axios";
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";

export default function Dashboard() {
 
  const [score, setScore] = useState(0);

  const getUser = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/score/user`);
      setScore(res.data.score);
      console.log(res.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []); 


 const navigate = useNavigate();
  return (

    <>
   
      <Card className=" container d-flex mt-3" style={{ width: "auto" }}>
        <Card.Body>
          <Card.Title className="fw-bold justify-content center text-center">Instructions</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
          </Card.Subtitle>
          <Card.Text className="mt-3 container " style={{fontSize:"1.3rem"}}>
           <p>1. Read and follow each clue carefully to discover the location of the next clue.</p>
           <p>2. Each clue may require different problem-solving techniques and may lead you to different sources such as texts, videos, 3D animations, games, links or anything else.</p>
            <p>3. Keep track of the clues and the sources used to solve them.</p>
           <p>4.  Pay attention to the details and clues hidden in each source as they may be lead to the dead ends.</p>
            <p>5. The final clue will lead you to the treasure. Once you reach the end of the game, you will have the opportunity to reflect on your soft skills and how you approached the challenges presented in the game.</p>
            Remember, the game is designed to assess your soft skills, so enjoy the adventure and challenge yourself. Good luck!
          </Card.Text>
        </Card.Body>
      </Card>
      
      <div class="d-grid gap-2 col-1 mx-auto mt-3">
      <button onClick={e => (
        e.preventDefault(),
        
        (async () => {
          
          try {
            const que = score + 1;

            if(que === 8){
              
              navigate('/score/user');
            }
            else
            navigate(`/dashboard/que${que}`);
          } catch (error) {
            console.log(error);
          }

        })()

        
        
      )} class="btn btn-dark" type="button"> {score==0 ? "Start" : score===7 ? "See Score": "Resume"}  </button>
      </div>
      </>      
  
  );
}

