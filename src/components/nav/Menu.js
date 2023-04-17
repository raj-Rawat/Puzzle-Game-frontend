import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  // hooks
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ ...auth, token: null, user: null });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3" to="/">
            Puzzle-Game
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>

            {auth?.user ? (
              <div className="d-flex navbar-nav ">
                <Link
                  className="nav-item nav-link "
                  to={`/score/${auth?.user?.role === 1 ? "admin" : "user"}`}
                >
                  {auth?.user?.role === 1 ? "Leaderboard" : "Your Score"}
                </Link>

                <a className=" nav-item nav-link ">
                  {" "}
                  {auth?.user?.username?.toUpperCase()}
                </a>

                <button className="btn btn-outline-light me-2" onClick={logout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="d-flex navbar-nav ">
                <Link className="nav-item nav-link " to="/login">
                  Login
                </Link>

                <Link className="nav-item nav-link " to="/register">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
