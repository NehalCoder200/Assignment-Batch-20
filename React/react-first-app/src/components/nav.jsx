import React, { useState } from 'react'

let navbar = ['Home', "About", 'Campuses', 'Check Result']

const nav = () => {

    // var count = 0;
    // let [count, setCount] = useState(0)


    // var countFn = () => {
    
    //     console.log('run fn', count,);
    
    //     // count++
    // }





    return <div className="nav">
        <h2>SMIT</h2>

        <ul className="nav-icons">
            {navbar.map((items) => {
                return <li>{items}</li>
            })}
        </ul>

        {/* <button onClick={() => setCount(count + 1)}>Enroll Now {count}</button> */}
        {/* <button onClick={countFn}>Enroll Now {count}</button> */}
        <button>Enroll Now </button>

    </div>

}

export default nav