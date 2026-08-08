function App() {
  return <div className="main">

    <div className="nav">
      <h2>SMIT</h2>

      <div className="nav-icons">
        <span>Home</span>
        <span>About</span>
        <span>Capmuses</span>
        <span>Check Result</span>
      </div>

      <button>Enroll Now</button>

    </div>

    <div className="content">

      <img src="https://www.saylanimit.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fsaylani-welfare%2Fimage%2Fupload%2Fv1764064506%2FSMIT%2FCourses%2FUIUXA.jpg&w=640&q=75" alt="" />
      <div className="contentText">
        <h3>UI UX Design With AI</h3>
        <p style={{color:"gray"}}>UI/UX Design with AI</p>

        <div className="contentBtn">
          <div>
          <button>Enroll Now</button>
          </div>

          <div className="courseMonth">
            <p>Duration</p>
            <p>4 months</p>
          </div>

        </div>

      </div>
    </div>


  </div>
}

export default App