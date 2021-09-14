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
                <img src={smartSun} alt='smart sun'></img>
                    <h1>Smart Sun</h1>
                    <p>Smart Sun is a sun exposure and vitamin D tracker integrated with Particle's iot device. 
                    Based on the user's location it fetches weather data todetermine the best time to go outside.
                    </p>
                </div>
                <div className='project2'>
                <img src={loanGuardian} alt='micro lend'></img>
                    <h1>Loan Guardian</h1>
                    <p>Loan guardian aims to streamline the process of getting a loan by allowing borrowers to upload signed documents online.
                     It leverages the Typing DNA api to verify a borrower's identity online.</p>
                </div>
                <div className='project3'>
                    <img src={pomo} alt='pomo'></img>
                    <h1>Pomo</h1>
                    <p>Pomo is uniquely designed to meet the needs of young students and educators. 
                        It uses the science-backed Pomodoro technique, Pomo helps students manage their time by breaking down assigned tasks into manageable intervals.</p>
                </div>
                <div className='project4'>
                    <img src={microLend} alt='micro lend'></img>
                    <h1>microLend</h1>
                    <p>MicroLend is a crowdfunded microloans platform. It bridges the gap between finance and social good by
                    connecting disadvantaged borrowers with lenders and mentors.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage; 

