import './about.styles.scss'; 
import profile from '../../assets/profile.jpg'; 


const About = () => {
    return (
        <div className='about'>
            <h1>About</h1>
            <p>I'm a 27 year old web developer from Salinas, California 
                now living in San Francisco. I am passionate, curious and driven.
                In my spare time you can find me hiking or doing Brazilain Jiu Jitsu. 
            </p>
            <img src={profile} alt='profile'></img>
            <h1>How I got here </h1>
            <p>I have an Economics degree from UC Berkeley. 
                I intended to major in Mathematics but it was too abstract for my liking.
                After college I did sales and marketing for a small real estate brokerage and operations for a 50 person startup. 
                <br/>
                <br/>
                Before I started doing web development, I was always curious about technology and building web applications.
                Even before I knew what an api was, I developed a real estate website using wordpress and godaddy. 
                Now I've been building web applications using Javascript, NodeJS, ReactJS, HTML and CSS. 
            </p>
        </div>
    )
}

export default About; 