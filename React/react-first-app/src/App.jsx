import card from "./components/card"
import nav from "./components/nav"
import React from "react"

let cardObj = [
  {
    img: 'https://www.saylanimit.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsaylani-welfare%2Fimage%2Fupload%2Fv1764064506%2FSMIT%2FCourses%2FUIUXA.jpg&w=640&q=75',
    title: 'UI UX Design With AI',
    text: 'UI UX Design with AI',
    durationMonths: '4 months'
  },
  {
    img: 'https://www.saylanimit.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsaylani-welfare%2Fimage%2Fupload%2Fv1783313443%2FSMIT%2FCourses%2FVA.jpg&w=640&q=75',
    title: 'Video Animation',
    text: 'This 4-month Audio Video Editing & Animation with AI course',
    durationMonths: '5 months'
  },
  {
    img: 'https://www.saylanimit.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsaylani-welfare%2Fimage%2Fupload%2Fv1764064529%2FSMIT%2FCourses%2FDMA.jpg&w=640&q=75',
    title: 'Digital Marketing With AI',
    text: 'Digital Marketing with AI',
    durationMonths: '5 months'
  },
  {
    img: 'https://www.saylanimit.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsaylani-welfare%2Fimage%2Fupload%2Fv1764064487%2FSMIT%2FCourses%2FGDA.jpg&w=640&q=75',
    title: 'Graphic Designing With AI',
    text: 'Graphic Designing with AI Transform from a beginner into a commercial-ready Creative Directo',
    durationMonths: '6 months'
  }
]


function App() {
  return <>
    {nav()}
    <div className="mainCard">
      {cardObj.map((items) => {
       return card(items)
      })}
      {/* {card()}
      {card()}
      {card()} */}
    </div>
  </>
}

export default App