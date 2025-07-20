import React from "react";
import "./Profile.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import bannerLogo from "../../assets/images/Meubel House_Logos-05.webp";
import { useState } from "react";
const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [edit, setEdit] = useState(false);


  const handleEditFunction = ()=>{
    //API CALL
    setEdit(true)
  }
  return (
    <>
      <Header />
      <Banner image={bannerLogo} page="Profile" home="Home" para="Profile" />'
      <section className="profileSec">
        <div className="container">
          <div className="profileWrapper">
            
            <h2 className="createProfileHeading">
              {edit ? "Edit Profile" : "Create Profile"}
            </h2>

            <form className="profileForm">
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
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        email: e.target.value,
                      })
                    }
                    required
                    placeholder="mohsin.hashmi@gmail.com"
                  />
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
                  <button onClick={handleEditFunction} type="submit" className="submitBtn">
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
