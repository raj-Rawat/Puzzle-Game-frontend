import Card from "react-bootstrap/Card";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';

export default function Que7() {
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
      const res = await axios.post(`${process.env.REACT_APP_API}/que7`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      } else if (res.data === "correct") {
        toast.success("Congratulations! You have completed the game. Redirecting to score page in 5 seconds")

        setTimeout(function () {
        navigate("/score/user");
        }, 5000);

      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  return (
    <div className="container mt-3">
      <Card style={{ width: "auto" }}>
        <Card.Body>
          <Card.Title>Puzzle-7</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle>
          <Card.Text>
           
          <div className="fs-5">
              <i>
              <div className="fs-5">
              Tom, our favourite cat went to his nana's house and so was missing his frenemy Jerry.
              One day he decided to write a letter full of meaningless anagrams to jerry in his own secret language.
              Help Jerry to extract the important content from the letter.......
               </div>
              </i>
               </div>
            
          </Card.Text>
        </Card.Body>
      </Card>

      {/* <Button className="mt-3"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        msg 
      </Button> */}
       
      <div className="mt-2 mx-2">
      <Link
        className="mt-3"
        style={{ cursor: "pointer", textDecoration: "none" }}  
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        message
      </Link>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          // //// / // //// \/ \\/\ //\\ ///\ //// /\\ \/\ //// // \/\ /\\ \/ // /\\ \/ / /\\ //// /\\ / \/\ // //// /\\ / \/\ // //// \/\ / ///\ //// ///\ /\ \/\/ \/\\ /\ \/\\ \\/\ //\ \\/\ /\ //\ \/\ //// //// //// //\ //// //\ //// //// //\ //// //// \/\ //\ //// //// //\ \/\ //// //\ //// //\ //// \/\ //\ //// \/\ //\ //// //// \/\ //\ //// \/\ //\ //// \/\ //\ /\ /\ /\// //\ //// //// //\ \/\ //// //// \/\ //// \/\ ///\ //// ///\ //// /\\\ //\\ /\// /\// //\\ \/\/ \\/\ \/\/ /\\/ /\ //\/ /\/\ \// \// // /// \/\\ \/\\ /// \/\ // \/\ // \/\/ \//\ //\\ //\\ \\/\ \\/\ //\\ \\/\ //// / \/\ //// \\/\ //\ //\\ \\/\ //\ //\ //\\ //\ //\\ /\// //\\ /\\/ /\ //\\ /\\\ /\/ /\// /\\\ //\\ /\// /\\\ \/ //\\ //\\ \/ //// \/\ \/ \\/ \/ \\/ /\\\ \/\ \//\ // /// /\/\ \/\/ ///\ \\/\ /\\/ /\// //\\ \/ /\ /\/ //\/ / /\\ \\// /\/\ \/// /\/\ \\/ \\// \// \\// / / \/// \\/ //// \// \\\/ / //// //\/ / //\/ //\/ / //// /\\\ /\/ /\\\ /\\\ //\ /\\ / / \/\ \/// / \/\ \//\ \/\/ /\ \/\/ \\/\ \\/\ //\\ \/\/ \\/\ \/\ //// /\\\ / // /\/\ // \/\ \\/ / //// \/\ \/ //// /\\\ //\\ / //// \/\/ //\\ ///\ //// \\/ ///\ //// / \\/ //// \/\ // \/\ //\ // \/\ // / \/\ //\ // //\\ \/\/ //\\ \/\/ //// \/\ // //// / \/\/ //// \/\/ \/\/ / \/\ // //\ //\\ \/\/ /\\\ // \//\ / //// //\ \/\ //\ / \/\/ // \/\ //\ // / \/\ \/\/ // //\ // / \/\ // //\\ //\\ \/\\ \\/\ \\/\ //\ \\/\ / //\ \/\\ //// //\ // \/\ // //\ /\\\ \/\ /\\\ // //// \//\ //// \/\ \/// \/\ //// \/// //\ /\/ \/\ /\/ //\ \/// //\/ / //\/ /\\\ /\/ /\\/ //\/ /\\\ //\/ /\\/ /\\\ /\\/ /\\\ //\\ /\/ /\\\ \//\ /\\ \//\ /\\ /\// /// \/// \/\\ // \\/ \\/ \/\\ \/ /\/\ \\/ \/\\ // \\// /\\ \/\\ // \\// \/ \/\\ // \\// // /\\ \/\\ // \\// \/\\ // \\// \/\\ \\// \/\\ // /\\ \\// /\/\ \\// \/// \/ \/\\ \/// \\// \/\\ \/// \/ \\// \/// \/ \/\\ \\// \/// \/ \/\\ \/// \/ \\// \/\\ \/// \\// \/\\ \/\\ \/// /\/\ \\// \/ \/\\ \/ \\// \/// \/\\ \\// \/ \/// \/ /\\ //// \/\ \//\ //// \//\ //\ /\ \/\/ \/\ \/\/ /\ \/\/ //\ /\ // // ///\ // /\ //// // /\\ \/\ /\\ // //// /\\ \/ \/\ /\\ //\ /\\ \/\ //// /\\ \/\ //\ /\\ \/ \/\/ /\ \/\/ //\\ \/\/ //\\ \/\/ \/\/ \/\/ /\ \/\/ /\ \\/\ /\ /\// //\ \/\ //// //\ \/\ /\/ //\ \//\ //\ /\/\ /\/\ /\/\ /\/\ /\/\ //\ \\\/ / ///\ /// /\ \/\ \\/\ /\/ \// \// \/\/ /// / \\/\ \\\/ /\/ \/\\ /\ \/\ \/ /\ /\// /\// \/\/ /\/\ /\/\ /\/\ /\/\ /\/\ \/// //// \/\ //\ /\/ \/\ //// /\/ //\ /\\\ /\\\ \/\ //// //\ \/// \/// //\ //// \//\ ///\ \/// ///\ ///\ //// ///\ ///\ //// /\ //\\ /\/ //\\ /\ /\ /\/ //\\ /\ /\/ /\ /\/ /\\\ //\\ /\ \//\ //\\ \/\/ /\ \//\ ///\ ///\ \/\ \//\ //\ \//\ //// //\ /\\ \/\ // //// // //// //\ /\\ //// \/// //\ \/// \/\ \/// //\ \/\ \/// \//\ //\ \//\ \/\ //\ // /\ \/\/ // \/\/ \/\ \/\/ /\ /\\\ //\\ /\ \//\ /\\/ \//\ /\\/ /\/ //\\ /\/ \//\ /\\/ //// //// //// //// //// //// //// //\ \/\ //// //\ \/\ /\\\ //\\ \//\ /\/ \/ /\\\ \/ /\\\ \// ///\ \// //// ///\ //\/ /\ //\/ //\\ /\/ \//\ /\\\ \/\/ \/\/ /\// \/\/ \/\/ \//\ /\// \/\/ \//\ \/\/ \//\ //\\ \/\/ /\ // /// \\// \/\\ \/// \/\\ \/\\ \/\\ // // //// \/\ ///\ //// \/// \/\ ///\ \/// \\/ //// ///\ /\ \/\/ /\ // \/\/ /\ //\\ \\/\ \\/\ // \/\\ //// // // // \\// //// ///\ //// \/\ \\/ \/// ///\ \/// \\/ ///\ //// //// ///\ //// /\\ /\\ //// \/\ /\\\ /\/ /\ ///\ /\/ /\\\ //\\ \//\ /\ \/\/ \/\/ /\ \//\ ///\ //\ \/\/ \//\ //// \/\/ /\\ //// \/\\ \/// \\// \/// \/// \\// \/\\ \/ \\/ \/ \\/ //// \/ \/ \/// //// \/// \/// \\/ //// \/// //\ //// //// //\ //// //// \/\ //// //\ \\\/ /\ /\\\ //\\ /\/ /\\\ \/ /\ //\ \//\ /\ \/\ \//\ /\\\ /\\ ///\ \/\/ ///\ \/\/ //// //// \/\\ \/// // \/// // \/// \\// \///
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
