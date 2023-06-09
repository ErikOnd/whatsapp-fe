import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/reg.css";
import googleBtn from "../images/google-btn.svg";
import facebookBtn from "../images/facebook-btn.svg";
import regImage from "../assets/Registration_image.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { postUserAction, postUserImageAction } from "../actions";
import { useAppDispatch } from "../hooks/hooks";
import { useNavigate } from "react-router";
// import { toast } from "react-toastify";

let newUserId: string;

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [fileForUserPicture, setFileForUserPicture] = useState<File | null>(
    null
  );
  const uploadUserPicture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      setFileForUserPicture(files[0]);
    } else {
      setFileForUserPicture(null);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    let newUser = await dispatch(postUserAction(user));

    newUserId = newUser.id._id;
    if (fileForUserPicture) {
      await dispatch(postUserImageAction(newUserId, fileForUserPicture));
      // toast("User registered. Login to continue! 💪", { autoClose: 1000 });
      alert("User registered. Login to continue!");
      navigate("/");
    }
  };

  return (
    <div className="reg">
      <Container fluid>
        <Row>
          <Col xs={12} md={4} lg={4} className="pl-0">
            <div>
              <img src={regImage} alt="reg" className="regimg" />
            </div>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <div className="upper-sign-in text-right">
              <span> have an account?</span>
              <Link to={`/`} className="signUp-link">
                {" "}
                Sign in!
              </Link>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center bottom-form">
              <div>
                <h2 className="text-center mt-5 text-bold start">
                  Get satrted with WhatsApp
                </h2>
              </div>
              <p>Getting started is easy</p>
              <div className="d-flex justify-content-center">
                <a
                  onClick={(e) => e.stopPropagation()}
                  href={`${process.env.REACT_APP_BE_URL}/users/googleLogin`}
                >
                  {" "}
                  <img
                    src={googleBtn}
                    alt="google button"
                    className="mr-3 cursor-pointer"
                  />
                </a>
                <img
                  src={facebookBtn}
                  alt="facebook button"
                  className="cursor-pointer"
                />
              </div>

              <div
                className="d-flex justify-content-center mt-3"
                style={{ gap: "10px" }}
              >
                <div className="left"></div>
                <div>Or contiune with</div>
                <div className="left"> </div>
              </div>

              <div className="register-form">
                <Form>
                  <div className="form-content">
                    <Row>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            placeholder="Your Name *"
                            className="form-control"
                            value={user.username}
                            onChange={(e) => {
                              setUser({
                                ...user,
                                username: e.target.value,
                              });
                            }}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Control
                            type="text"
                            placeholder="Email *"
                            className="form-control"
                            value={user.email}
                            onChange={(e) => {
                              setUser({
                                ...user,
                                email: e.target.value,
                              });
                            }}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Control
                            type="password"
                            placeholder="Your Password *"
                            className="form-control"
                            value={user.password}
                            onChange={(e) => {
                              setUser({
                                ...user,
                                password: e.target.value,
                              });
                            }}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Control
                            type="password"
                            placeholder="Confirm Password *"
                            className="form-control"
                          />
                        </Form.Group>
                      </Col>
                      {/* <Form.File
                        id="custom-file-translate-scss"
                        label="choose a picture"
                        lang="en"
                        custom
                        style={{ borderRadius: "20px", marginInline: "15px" }}
                        onChange={uploadUserPicture}
                      />{" "} */}
                      <Form.Group className="mb-3">
                        <Form.Control
                          className="inputs"
                          type="file"
                          onChange={uploadUserPicture}
                        />
                      </Form.Group>
                    </Row>

                    <Button
                      variant="success"
                      type="submit"
                      className="btnSubmit mt-5 "
                      onClick={handleSubmit}
                    >
                      Create Account
                    </Button>
                  </div>
                </Form>
              </div>
              <p className="text-muted text-center">
                By continuing you indicate that you read and agreed to the
                Trerms of Use
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Registration;
