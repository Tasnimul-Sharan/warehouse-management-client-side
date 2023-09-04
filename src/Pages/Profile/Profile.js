import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";

const Profile = () => {
  const [profileData, setProfileData] = useState([{}]);
  //   const apiUrl = `https://warehouse-management-server-side-six.vercel.app/profile/${email}`;

  //   useEffect(() => {
  //     fetch(apiUrl)
  //       .then((response) => response.json())
  //       .then((data) => setProfileData(data))
  //       .catch((error) => console.error("Error fetching profile data: ", error));
  //   }, [apiUrl, email]);

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const getProfile = async (email) => {
      //   const email = user.user?.email;
      const { data } = await axios.get(
        `https://warehouse-management-server-side-six.vercel.app/profile?email=${email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setProfileData(data);
      console.log("API Response Data: ", data);
    };
    getProfile();
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="profile-section">
      <Card>
        <Card.Header>
          <h5>Profile Information</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={4}>
              <img
                src={profileData.image || "default-profile-image.jpg"}
                alt="Profile"
                className="img-fluid rounded-circle"
              />
            </Col>
            <Col md={8}>
              <h5>{user.displayName}</h5>
              <p>Email: {user.email}</p>
              <p>Education: {profileData.education}</p>
              <p>Location: {profileData.location}</p>
              <p>Phone Number: {profileData.phoneNumber}</p>
              <p>Profile Link: {profileData.profileLink}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
