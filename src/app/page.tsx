
import Image from 'next/image';

 const Main = () => {
  return (
    <main>
      <section className="hero-section" id="home">
        <div className="container">
          <div className="hero-inner d-flex">
            <div className="col-left">
              <span className="sub-heading">Hello, I am</span>
              <h1 className="heading">
                M.
                <span>Hasan</span>        
                 <br /> Baig 
              </h1>
              <h4 className="heading2">FullStack engineer</h4>
              <p className="paragraph">
              Elevating Web Development Excellence with Next.js and Tailwind CSS Mastery - A Full Stack Maestro Crafting Dynamic, Performant, and Aesthetically Pleasing Digital Experiences for the Modern Era.
              </p>
              <div className="btn-blk">
                <a className="btn btn-blue" href='https://www.linkedin.com/in/muhammadhasanbaig/'>Lets Talk</a>
                  <a className="btn btn-black" href='https://github.com/hasan912?tab=repositories'>View projects</a>
              </div>
              <div className="social">
                <ul>
                  <li className="social-icon">
                    <a href="https://www.instagram.com/muhammed_hasan_baig/">
                      <Image src="/feather_instagram.svg" width={30} height={30} alt="instagram" />
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="https://www.linkedin.com/in/muhammadhasanbaig/">
                      <Image src="/feather_linkedin.svg" width={30} height={30} alt="linkedin" />
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="https://github.com/hasan912">
                      <Image src="/feather_github.svg" width={30} height={30} alt="github" />
                    </a>
                  </li>
                  <li className="social-icon">
                    <a href="https://dribbble.com/m_hasan_baig">
                      <Image src="/feather_dribbble.svg" width={30} height={30} alt="dribble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-right">
              <Image className="image-main" src="/john.svg" alt="user image" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>
  
    {/* Feature */}
      <section className="features">
        <div className="container">
          <div className="features-inner d-grid">
            <div className="feature-item d-flex">
              <div className="icon d-flex color1">
                <Image src="/experience.svg" alt="experience" width={50} height={50} />
              </div>
              <div>
                <h3>33</h3>
                <p>All Over Projects</p>
              </div>
            </div>
            <div className="feature-item d-flex">
              <div className="icon d-flex color2">
                <Image src="/happy-clients.svg" alt="happy clients" width={50} height={50} />
              </div>
              <div>
                <h3>11+</h3>
                <p>Typescript Project</p>
              </div>
            </div>
            <div className="feature-item d-flex">
              <div className="icon d-flex color3">
                <Image src="/projects-completed.svg" alt="projects completed" width={50} height={50} />
              </div>
              <div>
                <h3>15+</h3>
                <p>HTML,CSS,Javascript Project</p>
              </div>
            </div>
            <div className="feature-item d-flex">
              <div className="icon d-flex color4">
                <Image src="/awards-won.svg" alt="awards won" width={50} height={50} />
              </div>
              <div>
                <h3>2+</h3>
                <p>Next.JS Project</p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* about */}
      <section className="about ptb-100" id="about">
      <div className="container">
        <div className="about-inner d-flex">
          <div className="about-col-left">
            <Image src="/about.jpg" alt="about" width={500} height={500} />
          </div>
          <div className="about-col-right">
            <h2 className="about-heading">About me</h2>
            <h3 className="about2">Hello, My Name Muhammad Hasan Baig FullStack engineer </h3>
            <p className="about3">
            a dynamic full-stack web developer specializing in the advanced technologies of Next.js and Tailwind CSS With a passion for crafting cutting edge web solutions he seamlessly merges creativity and functionality to deliver unparalleled user experiences Hasan expertise extends across the entire web development spectrum from frontend design to backend implementation His mastery of Next js a React framework coupled with the versatility of Tailwind CSS empowers him to build responsive and visually stunning applications Hasan is dedicated to pushing the boundaries of web development consistently staying ahead in the rapidly evolving digital landscape
            </p>
            <div className="about-btn-blk">
              <a href="https://www.linkedin.com/in/muhammadhasanbaig/" className="btn btn-blue about-btn">
                Contact ME 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* experience */}
 <section className="experience ptb-100">
      <div className="container">
        <h2>Experienced in </h2>
        <div className="experience-inner d-grid">
          {/* item */}
          <div className="progressbar-item">
            <div className="progressbar-content d-flex">
              <h3>Next.JS</h3>
              <h4>95%</h4>
            </div>
            <div className="progressbar-bg">
              <div className="progressbar-size" style={{ width: '95%' }}></div>
            </div>
          </div>
          {/* item */}
          <div className="progressbar-item">
            <div className="progressbar-content d-flex">
              <h3>Tailwind CSS</h3>
              <h4>90%</h4>
            </div>
            <div className="progressbar-bg">
              <div className="progressbar-size" style={{ width: '90%' }}></div>
            </div>
          </div>
          {/* item */}
          <div className="progressbar-item">
            <div className="progressbar-content d-flex">
              <h3>Node.JS</h3>
              <h4>85%</h4>
            </div>
            <div className="progressbar-bg">
              <div className="progressbar-size" style={{ width: '85%' }}></div>
            </div>
          </div>
          {/* item */}
          <div className="progressbar-item">
            <div className="progressbar-content d-flex">
              <h3>JavaScript</h3>
              <h4>83%</h4>
            </div>
            <div className="progressbar-bg">
              <div className="progressbar-size" style={{ width: '83%' }}></div>
            </div>
          </div>
          {/* item */}
          <div className="progressbar-item">
            <div className="progressbar-content d-flex">
              <h3>TypeScript</h3>
              <h4>87%</h4>
            </div>
            <div className="progressbar-bg">
              <div className="progressbar-size" style={{ width: '87%' }}></div>
            </div>
          </div>
          {/* item */}
          <div className="progressbar-item">
            <div className="progressbar-content d-flex">
              <h3>HTML</h3>
              <h4>98%</h4>
            </div>
            <div className="progressbar-bg">
              <div className="progressbar-size" style={{ width: '98%' }}></div>
            </div>
          </div>
          {/* item */}
          <div className="progressbar-item">
            <div className="progressbar-content d-flex">
              <h3>Python</h3>
              <h4>48%</h4>
            </div>
            <div className="progressbar-bg">
              <div className="progressbar-size" style={{ width: '48%' }}></div>
            </div>
          </div>
          {/* item */}
          <div className="progressbar-item">
            <div className="progressbar-content d-flex">
              <h3>Canva</h3>
              <h4>76%</h4>
            </div>
            <div className="progressbar-bg">
              <div className="progressbar-size" style={{ width: '76%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* service*/}
    <section className="services ptb-100" id="services">
      <div className="container">
        <h2>What I offer</h2>
        <div className="services-inner d-grid">
          {/* item */}
          <div className="services-block">
            <div className="service-icon color1 d-flex">
              <Image src="/ui-design.svg" alt="ui design" width={50} height={50} />
            </div>
            <h3>Portfolio Website</h3>
            <p>Create a personal portfolio website to showcase your skills and projects using Next.js, Tailwind CSS, and HTML.</p>
          </div>
          {/* item */}
          <div className="services-block">
            <div className="service-icon color2 d-flex">
              <Image src="/web-dev.svg" alt="ui design" width={50} height={50} />
            </div>
            <h3>Full Stack Web Development</h3>
            <p>Use Next.js and Node.js to build robust and scalable web applications. Next.js on the frontend and Node.js on the backend can create a seamless full-stack experience.</p>
          </div>
          {/* item */}
          <div className="services-block">
            <div className="service-icon color3 d-flex">
              <Image src="/illustration.svg" alt="ui design" width={50} height={50} />
            </div>
            <h3>Quiz App</h3>
            <p>Develop an interactive quiz application with a diverse set of questions. Use Next.js for the frontend and Node.js for the backend to handle quiz logic.</p>
          </div>
          {/* item */}
          <div className="services-block">
            <div className="service-icon color4 d-flex">
              <Image src="/seo.svg" alt="ui design" width={50} height={50} />
            </div>
            <h3>Styling with Tailwind CSS</h3>
            <p>Leverage the utility-first approach of Tailwind CSS for efficient and responsive styling</p>
          </div>
          {/* item */}
          <div className="services-block">
            <div className="service-icon color5 d-flex">
              <Image src="/content-writing.svg" alt="ui design" width={50} height={50} />
            </div>
            <h3>Database Integration</h3>
            <p>Integrate databases (MongoDB, MySQL, etc.) with Node.js to store and retrieve data for your applications.</p>
          </div>
          {/* item */}
          <div className="services-block">
            <div className="service-icon color6 d-flex">
              <Image src="/youtube.svg" alt="ui design" width={50} height={50} />
            </div>
            <h3>E-commerce Platform</h3>
            <p>Develop a full-fledged e-commerce website using Next.js for the frontend and Node.js for the backend. Integrate payment gateways, implement user authentication, and showcase products dynamically.</p>
          </div>
        </div>
      </div>
    </section>
    {/* CTA */}
    <section className="cta">
      <div className="container">
        <div className="cta-inner d-flex">
          <div className="cta-content">
            <h3>Have a project in mind?</h3>
            <p> Get FREE consultation now! </p>
          </div>
          <a href="https://www.linkedin.com/in/muhammadhasanbaig/" className="btn btn-default">Contact now</a>
        </div>
      </div>
    </section>
    {/* project */}
    <section className="projects ptb-100" id="portfolio">
      <div className="container">
        <h2>Recent Projects</h2>
        <div className="projects-inner d-grid">
          {/* item */}
          <div className="project-item">
            <div className="project-image">
              <Image src="/1.png" width={100} height={100} alt="project image" />
            </div>
            <div className="project-content">
              <h3>Landing page</h3>
              <div className="project-view d-flex">
                <span>UI Design</span>
                <a href="javascript:void(0)" className="btn-view">View </a>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="project-item">
            <div className="project-image">
              <Image src="/2.png" width={100} height={100} alt="project image" />
            </div>
            <div className="project-content">
              <h3>Web Development</h3>
              <div className="project-view d-flex">
                <span>Full Stack</span>
                <a href="javascript:void(0)" className="btn-view">View </a>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="project-item">
            <div className="project-image">
              <Image src="/3.png" width={100} height={100} alt="project image" />
            </div>
            <div className="project-content">
              <h3>Node.JS</h3>
              <div className="project-view d-flex">
                <span>Chatter-Box</span>
                <a href="https://github.com/hasan912/Chatter-Box" className="btn-view">View </a>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="project-item">
            <div className="project-image">
              <Image src="/1.png" width={100} height={100} alt="project image" />
            </div>
            <div className="project-content">
              <h3>Node.JS</h3>
              <div className="project-view d-flex">
                <span>Quiz-Engage-Hub</span>
                <a href="https://github.com/hasan912/Quiz-Engage-Hub" className="btn-view">View </a>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="project-item">
            <div className="project-image">
              <Image src="/2.png" width={100} height={100} alt="project image" />
            </div>
            <div className="project-content">
              <h3>Node.JS</h3>
              <div className="project-view d-flex">
                <span>Arena-Fuel-Challenge console interactive game</span>
                <a href="https://github.com/hasan912/Arena-Fuel-Challenge" className="btn-view">View </a>
              </div>
            </div>
          </div>
          {/* item */}
          <div className="project-item">
            <div className="project-image">
              <Image src="/3.png" width={100} height={100} alt="project image" />
            </div>
            <div className="project-content">
              <h3>Node.JS</h3>
              <div className="project-view d-flex">
                <span>Console-Interactive-Banking-System</span>
                <a href="https://github.com/hasan912/Console-Interactive-Banking-System" className="btn-view">View </a>
              </div>
            </div>
          </div>
          {/* Repeat the structure for other project items */}
        </div>
        <div className="view-more-block">
          <a href="#" className="btn btn-outline">View more</a>
        </div>
      </div>
    </section>
   
    {/* contact me */}
    <section className="contact ptb-100" id="contact">
        <div className="container">
          <h2>Contact me</h2>
          <form id="basic-form">
            <div className="contact-inner d-flex">
              <div className="input-block form-item">
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="input-block form-item">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
              <div className="input-block form-item">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="input-block form-item">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" required />
              </div>

              <div className="textarea form-item">
                <label htmlFor="message">Your message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <div className="submit-btn form-item">
                <button type="submit" className="btn btn-blue">
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main
  


