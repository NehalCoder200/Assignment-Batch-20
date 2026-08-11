import React from 'react'

const card = (props) => {

    console.log(props);
    let {img ,title,text,durationMonths} = props

    return <div className="content">

        <img src={img} alt="" />
        <div className="contentText">
            <h3>{title}</h3>
            <p style={{ color: "gray" }}>{text}</p>

            <div className="contentBtn">
                <div>
                    <button>Enroll Now</button>
                </div>

                <div className="courseMonth">
                    <p>Duration</p>
                    <p>{durationMonths}</p>
                </div>

            </div>

        </div>
    </div>

}

export default card