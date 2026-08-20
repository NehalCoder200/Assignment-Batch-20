import React from "react";


function Nav() { 
    return <>
      <div className="flex justify-between items-center h-[65px] p-4 shadow-md mb-5">
        <h1 className="font-bold text-3xl">Users</h1>

        <ul className="flex gap-[20px] font-semibold">
            <li >Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>

      </div>
    </>
}

export default Nav