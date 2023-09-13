import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profileData, setProfileData] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const getProfile = async () => {
      if (user) {
        try {
          const { data } = await axios.get(
            `https://warehouse-management-server-side-six.vercel.app/profile?email=${user?.email}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          );
          setProfileData(data);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      }
    };
    getProfile();
  }, [user]);

  return (
    <div className="profile-section">
      <Card>
        <Card.Header>
          <h3 className="mb-0">Profile Information</h3>
        </Card.Header>
        {profileData.map((profile) => (
          <Card.Body className="shadow-lg" key={profile._id}>
            <Row>
              <Col md={4} className="text-center">
                <img
                  src={profile?.image}
                  alt="Profile"
                  className="img-fluid w-75 rounded-circle profile-image"
                />
              </Col>
              <Col md={8}>
                <h4>Name: {profile.name}</h4>
                <p>Email: {profile.email}</p>
                <p>Education: {profile.education}</p>
                <p>Location: {profile.location}</p>
                <p>Phone Number: {profile.phoneNumber}</p>
                <p>Profile Link: {profile.profileLink}</p>
                <Link to="/dashboard">
                  <Button variant="primary">Edit Profile</Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        ))}
      </Card>
    </div>
  );
};

export default Profile;
