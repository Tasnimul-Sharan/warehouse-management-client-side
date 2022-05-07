// import { async } from "@firebase/util";
// import { async } from "@firebase/util";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import "./Registation.css";

const Registation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  let location = useLocation();
  const from = location.state?.from?.pathName || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    console.error(error);
  }

  if (loading || sending || updating) {
    return <Loading />;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setError("Your password must be in 6 number or longer");
    }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    verifyEmail();
  };

  const verifyEmail = async () => {
    await sendEmailVerification();
    toast("Email verification Sent");
  };

  return (
    <div>
      <h1>Registation</h1>
      <Form
        className="container shadow-lg p-5 text-start form-group"
        onSubmit={handleRegister}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            // className="form-control"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            // className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="outline-primary w-100" type="submit">
          Submit
        </Button>
      </Form>
      <p className="m-3">
        Already have an account?
        <Link className="text-primary text-decoration-none" to="/login">
          Please Login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Registation;
