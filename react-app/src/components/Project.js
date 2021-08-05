import React from 'react';
import '../App.css';
import me from '../images/me.jpg';
import coding_quiz from '../images/coding-quiz.PNG';
import sports_app from '../images/baseball-r-us.png';
import hotel_coding from '../images/hotel-coding.PNG';
import spacedogs from '../images/spacedogs.PNG';
import weather_tracker from '../images/weather-tracker.PNG';


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

function Project() {
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
                <img id="me" className="bordered" src={me} alt="Maxwell Stickels"/>
                <div style={divSizes.medium}></div>
            </section>
            <section>
                <h2 id="works">Published Works</h2>
                <hr/>
                <div style={divSizes.large}></div> 
                <section id="main-work" className="bordered">
                    <a href="https://maxwellstickels.github.io/coding-quiz/">
                        <img className="work-img" src={coding_quiz} alt="Coding Quiz"/>
                    <div id="work-title">
                        <h3>Coding Quiz!</h3>
                        <p>Built with HTML/CSS/Javascript</p>
                    </div>
                    </a>
                </section>
                <section id="small-works">
                    <section className="bordered small-work">
                        <a href="https://maxwellstickels.github.io/sports-app/">
                            <img className="work-img" src={sports_app} alt="Baseball 'R' Us"/>
                        </a>
                    </section>
                    <section className="bordered small-work">
                        <a href="https://maxwellstickels.github.io/weather-tracker">
                            <img className="work-img" src={weather_tracker} alt="The Weather Tracker"/>
                        </a>
                    </section>
                    <section className="bordered small-work">
                        <a href="https://hotel-coding.herokuapp.com/">
                            <img className="work-img" src={hotel_coding} alt="Hotel Coding"/>
                        </a>
                    </section>
                    <section className="bordered small-work">
                        <a href="https://scratch.mit.edu/projects/493323101/">
                            <img className="work-img" src={spacedogs} alt="Too Many Space Dogs"/>
                        </a>
                    </section>
                    <section className="bordered small-work">
                        <a href="https://scratch.mit.edu/projects/493323101/">
                            <img className="work-img" src={spacedogs} alt="Too Many Space Dogs"/>
                        </a>
                    </section>
                    <section className="bordered small-work">
                        <a href="https://scratch.mit.edu/projects/493323101/">
                            <img className="work-img" src={spacedogs} alt="Too Many Space Dogs"/>
                        </a>
                    </section>
                </section>
                <div style={divSizes.small}></div>
            </section>
            <div style={divSizes.large}></div>
            <section>
                <h2 id="contact">Contact Me</h2>
                <hr/>
                <article className="article-text">
                    <form action="/action_page.php">
                        <label for="contact-name"><i>Name: </i></label>
                        <input id="contact-name" className="contact-input"></input>
                        <br/>
                        <label for="contact-name"><i>Email: </i></label>
                        <input id="contact-email" className="contact-input"></input>
                        <br/>
                        <label for="contact-name"><i>Message: </i></label>
                        <input id="contact-text" className="contact-input"></input>
                        <br/>
                        <button id="contact-submit">Submit</button>
                    </form>
                </article>
                <div style={divSizes.medium}></div>
            </section>
        </main>
    )
}

export default Project;