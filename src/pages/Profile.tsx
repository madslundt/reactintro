import React, { useState } from "react";

import Input from "Components/Input";

const Profile = () => {
  const [firstName, setFirstName] = useState("Harry");
  const [lastName, setLastName] = useState("Potter");

  return (
    <div className="w-full my-4">
      <form>
        <div className="mb-4">
          <Input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.currentTarget.value)}
            placeholder="First name"
            label="First name"
          />
        </div>
        <div className="mb-4">
          <Input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.currentTarget.value)}
            placeholder="Last name"
            label="Last name"
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
