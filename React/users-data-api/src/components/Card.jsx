import React from "react";
import Home from "./Dashboard/Home";

let Card = ({ usersData }) => {
    console.log(usersData);

    return <>

            <div className="w-[350px] bg-white shadow-md ml-5 p-3 pl-6 pt-4 pb-4 rounded-xl ">
                <div className="flex justify-center mb-3">
                    <img className="w-[80px] h-[80px] " src={usersData.image} alt="" />
                </div>
                <h1 className="font-medium">Username: {usersData.username}</h1>
                <p className="font-medium mt-1">Phone: {usersData.phone}</p>
                <p className="font-medium mt-1">Email: {usersData.email}</p>
                <p className="font-medium">Address: {usersData.address.city}</p>
                <p className="font-medium">Gender: {usersData.gender}</p>
                <p className="font-medium mt-1">Date of Birth: {usersData.birthDate}</p>


            </div>
    </>
}

export default Card