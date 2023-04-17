import Card from "react-bootstrap/Card";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';

export default function Que3() {
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
      const res = await axios.post(`${process.env.REACT_APP_API}/que3`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1000);
      } else if (res.data === "correct") {
        toast.success("Answer is correct");

        navigate("/dashboard/que4");
      }
    } catch (error) {
      console.log(error);
      toast.error("Network error");
    }
  };

  return (
    <div className="container mt-3">
      <Card style={{ width: "auto" }}>
        <Card.Body>
          <Card.Title>Puzzle-3</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle>
          <Card.Text>
           

            <div className="fs-2">
              <i>
                 The main execution point of a computer program  has a message , find it!!
              </i>
            </div>
             
             <div className="d-flex flex-col mt-3">
             <div className="mx-5">
              <Link  to = "https://res.cloudinary.com/dsxyzdqvo/image/upload/v1681652829/Dual_Ball-1s-200px_sfczxh.gif" target="_blank" style={{textDecoration: "none"}}  className="mt-3"><i>Hidden</i></Link>
            </div>

            <div>
              <Link to = "https://drive.google.com/file/d/1kZDN8snWPAZa3eI7cbx3uVfm6lOeFImv/view?usp=sharing" target="_blank" style={{textDecoration: "none"}}  className="mt-3"><i>Hidden</i></Link>
            </div>
             </div>
          </Card.Text>
        </Card.Body>
      </Card>

      

      {/* <div>
        <h3 className="mt-3">Hint</h3>
        <p className="fs-4">
          <i>Take Some Danger Task </i>
        </p>
        <p className="fs-4">
          <i> Open in NotePad </i>
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
            <i>Take Some Danger Task </i>
          </p>
          <p className="fs-4">
            <i> Open in NotePad </i>
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
