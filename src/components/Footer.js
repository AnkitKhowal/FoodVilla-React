import { useContext } from "react";
import UserContext from"../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext);

    return <h1 className="p-5 m-2 bg-pink-50">© Copyright 2023-2033 All rights reserved. Developed by https://github.com/AnkitKhowal. {user.name} - {user.email}</h1>;
};
export default Footer;