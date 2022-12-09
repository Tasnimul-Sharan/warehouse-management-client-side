import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "./SocialLogin/SocialLogin";
import "./Login.css";

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
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading || sending) {
    return <Loading />;
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    if (email !== password) {
      setError("Please Enter an Valid Email or Password");
    }
    await signInWithEmailAndPassword(email, password);

    const { data } = await axios.post(
      "https://warehouse-management-server-side-six.vercel.app/login",
      {
        email,
      }
    );
    console.log(data);
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
            type="password"
            placeholder="Password"
          />
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
      <SocialLogin />
    </div>
  );
};

export default Login;
