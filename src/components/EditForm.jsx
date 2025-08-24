import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { BASE_URL } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";

function Editform({ user, setAlertMessage, setAlertStatus }) {
  const { firstName, lastName, age, about, imageUrl, gender, skills } = user;
  const dispatch = useDispatch();

  const [Name, setName] = useState(firstName || "");
  const [LastName, setLastName] = useState(lastName || "");
  const [Age, setAge] = useState(age || 0);
  const [Gender, setGender] = useState(gender || "");
  const [About, setAbout] = useState(about || "");
  const [Skills, setSkills] = useState(skills || []);
  const [image, setImage] = useState(imageUrl || "");

  async function handleSave() {
    try {
      const user = await fetch(BASE_URL + "/profile/edit", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: Name,
          lastName: LastName,
          age: Age,
          gender: Gender,
          about: About,
          skills: Skills,
          imageUrl: image,
        }),
        credentials: "include",
      });

      const result = await user.json();

      if (!user.ok) {
        // Backend sent error -> show error message
        throw new Error(result.message || "Error in updating profile!");
      }

      dispatch(addUser(result));
      setAlertStatus("alert-success");
      setAlertMessage("Profile updated Successfully!");
    } catch (error) {
      setAlertStatus("alert-error");
      setAlertMessage(error.message);
      console.error(error.message);
    }
  }

  return (
    <div className="flex justify-evenly">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-1">
        <legend className="fieldset-legend">Edit Profile</legend>

        <label className="label">First Name</label>
        <input
          type="text"
          className="input"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="label">Last Name</label>
        <input
          type="text"
          className="input"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label className="label">Age</label>
        <input
          className="input"
          type="number"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label className="label">Gender</label>
        <select
          className="input"
          type="text"
          value={Gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label className="label">About</label>
        <textarea
          className="input"
          type="text"
          rows={2}
          cols={40}
          placeholder=" Write something about yourself!"
          value={About}
          onChange={(e) => setAbout(e.target.value)}
        />

        <label className="label">Skills</label>
        <input
          className="input"
          type="text"
          value={Skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <label className="label">Image</label>
        <input
          className="input"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="btn btn-neutral mt-2" onClick={handleSave}>
          Save
        </button>
      </fieldset>
      <ProfileCard
        firstName={Name}
        lastName={LastName}
        age={Age}
        about={About}
        imageUrl={image}
        gender={Gender}
      />
    </div>
  );
}

export default Editform;
