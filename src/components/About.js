const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* Profile Image */}
        <div className="image">
          <img src="images/profile-photo.png" alt="Profile Photo" />
        </div>

        {/* Description */}
        <div className="desc">
        <p>
  Hi! I'm <strong>Oussama Bardich</strong>, a full-stack developer with a passion for both <strong>backend</strong> and <strong>frontend</strong> tech. I build backend solutions with <strong>PHP (Laravel)</strong>, <strong>C# (.NET)</strong>, and mobile apps with <strong>Kotlin (Jetpack Compose)</strong>. For the frontend, I create interactive UIs using <strong>React</strong>, <strong>Vue.js</strong>, and <strong>Angular</strong>.
  <br/><br/>
  I have extensive experience working with databases such as <strong>MySQL</strong>, <strong>SQL Server</strong>, and <strong>MongoDB</strong>, and I’m proficient in <strong>UI/UX</strong> design, leveraging tools like <strong>CSS</strong>, <strong>Bootstrap</strong>, and <strong>Tailwind</strong> to deliver intuitive and visually appealing user interfaces. Additionally, 
  <br/><br/>
  Always learning and pushing myself to grow, I’m ready to build something great with you!
</p>




          {/* Info List */}
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 23
              </li>
              <li>
                <strong>Residence:</strong> Morocco
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> Marrakech, Morocco
              </li>
              <li>
                <strong>E-mail:</strong> oussama.m.bardich@gmail.com
              </li>
            </ul>
          </div>

          {/* Download CV Button */}
          <div className="bts">
            <a href="#" className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>

        <div className="clear" />
      </div>
    </div>
  );
};

export default About;
