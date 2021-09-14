import './homepage.styles.scss'; 
import microLend from '../../assets/micro_lend.png'; 
import smartSun from '../../assets/smart-sun.png'; 
import pomo from '../../assets/pomo.gif'; 
import loanGuardian from '../../assets/loan-guardian.png'; 


const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='homepage-header'>
                <h1>I'm Cariny Perez
                    <br/>
                    a
                    <span> full-stack developer</span> 
                    </h1>
                <h2>I develop client and server software</h2>
            </div>
            <div className='homepage-images'>
                <div className='project1'>
                <img src={smartSun} alt='smart sun' onClick={() => 
                    window.open('https://smart-sun-app.herokuapp.com/')}></img>
                    <h1 onClick={() => 
                    window.open('https://smart-sun-app.herokuapp.com/')}>Smart Sun</h1>
                    <p>Smart Sun is a sun exposure and vitamin D tracker integrated with Particle's iot device. 
                    Based on the user's location it fetches weather data todetermine the best time to go outside.
                    </p>
                </div>
                <div className='project2'>
                <img src={loanGuardian} alt='loan guardian' onClick={() => 
                    window.open('https://loanguardian.herokuapp.com/')}></img>
                    <h1 onClick={() => 
                    window.open('https://loanguardian.herokuapp.com/')}>Loan Guardian</h1>
                    <p>Loan guardian aims to streamline the process of getting a loan by allowing borrowers to upload signed documents online.
                     It leverages the Typing DNA api to verify a borrower's identity online.</p>
                </div>
                <div className='project3'>
                    <img src={pomo} alt='pomo' onClick={() => 
                    window.open('https://mypomo.netlify.app/')}></img>
                    <h1 onClick={() => 
                    window.open('https://mypomo.netlify.app/')}>Pomo</h1>
                    <p>Pomo is uniquely designed to meet the needs of young students and educators. 
                        It uses the science-backed Pomodoro technique, Pomo helps students manage their time by breaking down assigned tasks into manageable intervals.</p>
                </div>
                <div className='project4'>
                    <img src={microLend} alt='micro lend' onClick={() => 
                    window.open('https://micro-loan.herokuapp.com/')}></img>
                    <h1 onClick={() => 
                    window.open('https://micro-loan.herokuapp.com/')}>microLend</h1>
                    <p>MicroLend is a crowdfunded microloans platform. It bridges the gap between finance and social good by
                    connecting disadvantaged borrowers with lenders and mentors.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage; 

