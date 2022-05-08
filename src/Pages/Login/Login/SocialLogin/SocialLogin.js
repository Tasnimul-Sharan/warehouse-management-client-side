import React from "react";
import auth from "../../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import google from "../../../../images/google.png";
import Loading from "../../../Shared/Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  let location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
    console.log(user);
  }

  if (loading) {
    return <Loading />;
  }

  return (
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
  );
};

export default SocialLogin;
