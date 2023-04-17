import Card from "react-bootstrap/Card";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Que6() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const answer = e.target.answer.value;

    if (answer === "") {
      toast.error("Please enter your answer");
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/que6`, {
        answer: answer,
      });

      if (res.data === "wrong") {
        toast.error("Answer is wrong");
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1000);
      } else if (res.data === "correct") {
        toast.success("Answer is correct");

        navigate("/dashboard/que7");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  return (
    <div className="container mt-3">
      <Card style={{ width: "auto" }}>
        <Card.Body>
          <Card.Title>Puzzle-6</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Statement</Card.Subtitle>
          <Card.Text>
           
            <div className="fs-3">
              <i>
              We have encrypted the flag using a very simple and easy algorithm........Capture the flag and advance further.
              </i>
            </div>

            <div>
              <div>
              <Link style={{textDecoration: "none"}} to = "https://res.cloudinary.com/dsxyzdqvo/image/upload/v1681657089/download_nb1ndh.png" target = "_blank">ϱɒl⅃</Link>
              <Link className="mx-3" style={{textDecoration: "none"}} to = "https://res.cloudinary.com/dsxyzdqvo/image/upload/v1681657907/panda_iqegvb.webp" target = "_blank">MirrorɿoɿɿiM</Link>
              </div>
            </div>


          </Card.Text>
        </Card.Body>
      </Card>

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
