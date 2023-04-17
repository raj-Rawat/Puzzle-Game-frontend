import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';

export default function Que5() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;

    if (answer === "") {
      toast.error("Please enter your answer");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/que5`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1000);
      } else if (res.data === "correct") {
        toast.success("Answer is correct");

        navigate("/dashboard/que6");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  return (
    <div style={{width:"auto"}} className="container mt-3">
      {/* <Card style={{ width: "38rem" }}>
        <Card.Body>
          <Card.Title>Puzzle-5</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle>
          <Card.Text>
            */}
            
            <div>
              <h1 className="fs-1">Puzzle-5</h1>
            </div>
           
            <p>
              <p className="fs-2">seeker alchemist</p>
            </p>
          
            <div className="fs-3">
              <i>
              Fullmetal alchemist and his brother have to find the way to get their real bodies back.
              They ask bug_apd to help them in digging the clue out of the given picture.Can you be 
              that seeker achemist for him?
              </i>
            </div>


{/* 
          </Card.Text>
        </Card.Body>
      </Card> */}

      <div className="img-fluid mt-4 " style={{ width: "auto" }} >
        <img src="https://res.cloudinary.com/dsxyzdqvo/image/upload/v1681655473/prob_image1_zkb3cd.jpg" target="_blank" alt="" />
      </div>

      {/* <div>
        <h3 className="mt-3">Hint</h3>
        <p className="fs-4">
          <i> Who is bug_apd??? search for him wherever it is required. </i>
        </p>
      </div> */}

     <div className="mt-2 mx-2">
      <Link
        className="mt-3 fs-4"
        style={{ cursor: "pointer", textDecoration: "none" , color: "black"  }}  
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Hint
      </Link>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text mx-2">
          <p className="fs-4">
            <i> Who is bug_apd??? search for him wherever it is required. </i>  
          </p>

        </div>
      </Collapse>

      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <label htmlFor="answer"></label>
          <input
            type="text"
            className="form-control mt-2 w-25 p-3"
            id="answer"
            placeholder="Enter your answer"
          />
        </div>
        <button type="submit" className="btn btn-dark mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
