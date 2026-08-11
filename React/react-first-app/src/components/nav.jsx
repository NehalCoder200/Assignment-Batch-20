import React from 'react'

let navbar = ['Home',"About",'Campuses','Check Result']

const nav = () => {
    return <div className="nav">
        <h2>SMIT</h2>

        <ul className="nav-icons">
            {navbar.map((items)=>{
            return <li>{items}</li>
            })}
        </ul>

        <button>Enroll Now</button>

    </div>

}

export default nav