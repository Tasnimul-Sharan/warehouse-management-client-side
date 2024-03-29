import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useToken from "../../../Hooks/useToken";
import google from "../../../images/google.png";
import { Form, Button, Image, InputGroup } from "react-bootstrap";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [token] = useToken(user || gUser);

  const navigate = useNavigate();

  let location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Hey ! Please check your email");
    } else {
      toast("Please Enter an Email");
    }
  };

  // if (user) {
  //   navigate(from, { replace: true });
  // }

  if (loading || gLoading || sending) {
    return <Loading />;
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    if (email !== password) {
      setError("Please Enter an Valid Email or Password");
    }
    await signInWithEmailAndPassword(email, password);

    const { data } = token;
    localStorage.setItem("accessToken", data.accessToken);
  };

  return (
    <div>
      <h1>Login</h1>
      <Form
        onSubmit={handleLogin}
        className="container shadow-lg p-5 w-50 form-group   text-start "
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <Button
            variant="link"
            className="password-toggle-button"
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button variant="outline-primary w-100" type="submit">
          Login
        </Button>
      </Form>
      <p className="m-3">
        <Link className="text-primary text-decoration-none" to="/registation">
          <Button variant="success">Create a new account</Button>
        </Link>
      </p>
      <p>
        Forget password?{" "}
        <Button
          className="text-decoration-none"
          variant="link"
          onClick={resetPassword}
        >
          Reset Password
        </Button>
      </p>
      {/* <SocialLogin /> */}
      <div>
        <button
          className="btn btn-outline-primary"
          onClick={() => signInWithGoogle()}
        >
          {" "}
          <img src={google} alt="" />
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
