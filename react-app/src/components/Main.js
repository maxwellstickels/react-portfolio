import React from 'react';
import '../App.css';

const divSizes = {
    small: {
        height: "5px"
    },
    medium: {
        height: "20px"
    },
    large: {
        height: "30px"
    },
};

function Main() {
    return (
        <main>
            <section className="paragraphs">
                <h2 id="about-me">About Me</h2>
                <hr/>
                <article className="article-text">
                    <p>
                        I have lived in the small town of Valley Springs, CA all of my life. My interest in computers started at a very young age, with me creating tiny VBS files on my computer and using Inspect Element to mess around with the design of popular websites.
                    </p>
                    <p>
                        I served as a Webmaster for my highschool for 3 years, handling all the front-end aspects of the school's website through Google Sites.
                    </p>
                    <p>
                        Currently I am taking a break from studying Computer Science at the California Institute of Technology. While there, I picked up several programming languages - mainly C/C++, Java, Python, and OCaml.
                    </p>
                </article>
                <img id="me" className="bordered" src={"images/me.jpg"} alt="Maxwell Stickels"/>
                <div style={divSizes.medium}></div>
            </section>
            <section>
                <h2 id="works">Published Works</h2>
                <hr/>
                <div style={divSizes.large}></div> 
                <section id="main-work" className="bordered">
                    <a href="https://maxwellstickels.github.io/coding-quiz/">
                        <img className="work-img" src={"images/coding-quiz.PNG"} alt="Coding Quiz"/>
                    <div id="work-title">
                        <h3>Coding Quiz!</h3>
                        <p>Built with HTML/CSS/Javascript</p>
                    </div>
                    </a>
                </section>
                <section id="small-works">
                    <section className="bordered small-work">
                        <a href="https://maxwellstickels.github.io/sports-app/">
                            <img className="work-img" src={"images/baseball-r-us.png"} alt="Baseball 'R' Us"/>
                        </a>
                    </section>
                    <section className="bordered small-work">
                        <a href="https://maxwellstickels.github.io/weather-tracker">
                            <img className="work-img" src={"images/weather-tracker.PNG"} alt="The Weather Tracker"/>
                        </a>
                    </section>
                    <section className="bordered small-work">
                        <a href="https://hotel-coding.herokuapp.com/">
                            <img className="work-img" src={"images/hotel-coding.PNG"} alt="Hotel Coding"/>
                        </a>
                    </section>
                    <section className="bordered small-work">
                        <a href="https://scratch.mit.edu/projects/493323101/">
                            <img className="work-img" src={"images/spacedogs.PNG"} alt="Too Many Space Dogs"/>
                        </a>
                    </section>
                    <section className="bordered small-work">
                        <a href="https://scratch.mit.edu/projects/493323101/">
                            <img className="work-img" src={"images/spacedogs.PNG"} alt="Too Many Space Dogs"/>
                        </a>
                    </section>
                    <section className="bordered small-work">
                        <a href="https://scratch.mit.edu/projects/493323101/">
                            <img className="work-img" src={"images/spacedogs.PNG"} alt="Too Many Space Dogs"/>
                        </a>
                    </section>
                </section>
                <div style={divSizes.small}></div>
            </section>
            <div style={divSizes.large}></div>
            <section>
                <h2 id="contact">Contact Info</h2>
                <hr/>
                <article className="article-text">
                    <ul id="contact-list">
                        <li>Email Address: <a href="mailto:maxwellstickels@gmail.com">maxwellstickels@gmail.com</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/maxwell-stickels-43b40419a/">https://www.linkedin.com/in/maxwell-stickels-43b40419a/</a></li>
                        <li>GitHub: <a href="https://github.com/maxwellstickels/">https://github.com/maxwellstickels/</a></li>
                        <li>Resume: <a href="https://drive.google.com/file/d/1XgG6wcjMYNNVyKoblEBpW4D_75Hxv0VN/view?usp=sharing">via Google Drive</a></li>
                    </ul>
                </article>
                <div style={divSizes.medium}></div>
            </section>
        </main>
    )
}

export default Main;