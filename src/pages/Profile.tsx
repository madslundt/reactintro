import React from 'react';

import Input from '../components/Input';

const Profile = () => {

    const firstName = "Harry";
    const lastName  = "Potter";

    return (
        <div className="w-full">
            <form>
                <div className="mb-4">
                    <Input className="my-4 border-black border rounded" type="text" value={firstName} placeholder="First name" label="First name" />
                </div>
                <div className="mb-4">
                    <Input className="my-4 border-black border rounded" type="text" value={lastName} placeholder="Last name" label="Last name" />
                </div>
            </form>
        </div>
    )
}


export default Profile;