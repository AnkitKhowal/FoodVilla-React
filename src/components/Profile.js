import { useState } from "react";

const Profile = (props) => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <div>
            This is My profile component
            <h1>FirstName : {props.firstName}</h1>
            <h1>LastName : {props.lastName}</h1>
            <h1>Count1 : {count1}</h1>
            <button onClick={() => {
                setCount1(1);
            }}>Set Count 1</button>
        </div>
    )
}

export default Profile;