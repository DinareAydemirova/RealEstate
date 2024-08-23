import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userProvider";
import { IoMdMail } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user, token, decode } = useContext(UserContext);
  const [profile, setProfile] = useState(user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullName: profile?.fullName || "",
    email: profile?.email || "",
  });

  useEffect(() => {
    if (!user && token) {
      const fetchProfile = async () => {
        try {
          const response = await fetch("/api/users/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          if (response.ok) {
            setProfile(data);
            setFormData({
              fullName: data.fullName,
              email: data.email,
            });
          } else {
            throw new Error(data.message);
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [token, user]);

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const names = fullName.split(" ");
    const initials = names.map((name) => name.charAt(0).toUpperCase());
    return initials.join("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setProfile(data);
        setEditMode(false);
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://media.architecturaldigest.com/photos/61b0ce48dccdb75fa170f8f7/16:9/w_2560%2Cc_limit/PurpleCherry_Williams_0012.jpg")',
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            />
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          ></div>
        </section>
        <section className="relative py-36" data-aos="fade-up">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      {profile.profileImage ? (
                        <img
                          src={profile.profileImage}
                          alt="Profile"
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      ) : (
                        <div className="shadow-xl rounded-full h-24 w-24 flex items-center justify-center text-white text-4xl bg-cyan-700 absolute -m-16 -ml-20 lg:-ml-16">
                          {getInitials(profile.fullName)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  {editMode ? (
                    <form onSubmit={handleUpdate}>
                      <div className="mb-2">
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-4">
                        <button
                          type="submit"
                          className="bg-sky-700 hover:bg-sky-800 text-white py-1 px-3 rounded"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditMode(false)}
                          className="ml-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <div
                        className="mb-2 text-blueGray-600 mt-10 flex justify-center items-center gap-2"
                        onClick={() => setEditMode((prev) => !prev)}
                        style={{ cursor: "pointer" }}
                      >
                        <FaEdit />
                        <p>Update your profile</p>
                      </div>
                      <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        {profile.fullName}
                      </h3>
                      <div className="mb-2 text-blueGray-600 mt-10">
                        <IoMdMail className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                        Email - {profile.email}
                      </div>
                      <div className="mb-2 text-blueGray-600">
                        <IoPerson className="fas fa-university mr-2 text-lg text-blueGray-400" />
                        Role - {profile.role}
                      </div>

                      <div className="mb-7">
                        <Link
                          to={profile.role === "Admin" ? "/admin" : "/"}
                          className="bg-sky-700 hover:bg-sky-800 text-white py-0.5 px-2 rounded"
                        >
                          {profile.role === "Admin" ? "Admin Panel" : "Home"}
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </>
  );
};

export default Profile;
