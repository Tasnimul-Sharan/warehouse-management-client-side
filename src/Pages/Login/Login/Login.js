import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Hey ! Please check your email");
    } else {
      toast("Please Enter an Email");
    }
  };

  const navigate = useNavigate();

  let location = useLocation();
  const from = location.state?.from?.pathName || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading || sending) {
    return <Loading />;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    if (email !== password) {
      setError("Please Enter an Valid Email or Password");
    }
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleLogin} className="container w-50 text-start">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button variant="outline-primary" type="submit">
          Login
        </Button>
      </Form>
      <p>
        Don't have any account?
        <Link className="text-primary text-decoration-none" to="/registation">
          Please Register
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
      <ToastContainer />
      <SocialLogin />
    </div>
  );
};

export default Login;
