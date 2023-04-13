import React from "react";
import PropTypes from "prop-types";



const Profile = (props) => {
   const handleName=()=>{
    alert(props.fullName);
   }
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <div>
        <img src={props.children} alt="Profile" style={{ width: "200px" }} />
      </div>
      <div>
        <h2>{props.fullName}</h2>
        <p>{props.bio}</p>
        <p>{props.profession}</p>
        <button onClick={() => handleName(props.fullName)}>click here</button>
      </div>
    </div>
  );
};


Profile.defaultProps = {
  fullName: "Zahmouli nizar",
  bio: "",
  profession: "web developer",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;

