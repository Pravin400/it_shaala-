import { useState } from "react";

function ProfileUpdater() {
  const [profile, setProfile] = useState({ name: "John", age: 25 });

  function increaseAge() {
    setProfile({ ...profile, age: profile.age + 1 });
  }

  return (
    <>
      <h2>Name: {profile.name}</h2>
      <h2>Age: {profile.age}</h2>
      <button onClick={increaseAge}>Increase Age</button>
    </>
  );
}

export default ProfileUpdater;
