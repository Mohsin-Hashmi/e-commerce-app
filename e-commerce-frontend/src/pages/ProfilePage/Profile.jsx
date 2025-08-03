import React from "react";
import "./Profile.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import bannerLogo from "../../assets/images/Meubel House_Logos-05.webp";
import { useState } from "react";
import profileAPI from "../../services/profileAPI";
const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    phone: "",
  });
  const [edit, setEdit] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleFunction = async (e) => {
    //API CALL
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", profileData.name);
    formData.append("phone", profileData.phone);
    formData.append("profileImage", profileImage);
    const response = await profileAPI(formData)
    console.log("response of profile api: ", response);
  };
  return (
    <>
      <Header />
      <Banner image={bannerLogo} page="Profile" home="Home" para="Profile" />
      <section className="profileSec">
        <div className="container">
          <div className="profileWrapper">
            <h2 className="createProfileHeading">
              {edit ? "Edit Profile" : "Create Profile"}
            </h2>

            <form className="profileForm" onSubmit={handleFunction}>
              <>
                <div className="formGroup">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={profileData.name}
                    onChange={(e) =>
                      setProfileData({ ...profileData, name: e.target.value })
                    }
                    placeholder="Mohsin Hashmi"
                    required
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="profileImage">Profile Image</label>
                  <input
                    type="file"
                    id="profileImage"
                    name="profileImage"
                    accept="image/*"
                    onChange={(e) => setProfileImage(e.target.files[0])}
                    placeholder="Mohsin Hashmi"
                    required
                  />
                  {/* {profileImage && (
                    <img
                      src={URL.createObjectURL(profileImage)}
                      alt="Profile Preview"
                      style={{ width: "80px", marginTop: "8px" }}
                    />
                  )} */}
                </div>
                <div className="formGroup">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        phone: e.target.value,
                      })
                    }
                    required
                    placeholder="+1133434232"
                  />
                </div>
                {edit ? (
                  <button
                    onClick={handleEditFunction}
                    type="submit"
                    className="submitBtn"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <button type="submit" className="submitBtn">
                    Save Profile
                  </button>
                )}
              </>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
