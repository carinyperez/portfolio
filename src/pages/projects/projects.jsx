import smartSun from '../../assets/smart-sun.png';
import microLend from '../../assets/micro_lend.png';
import pomo from '../../assets/pomo.gif';

const Projects = () => {
	return (
		<>
		<section>
			<p>This is a hand-picked list of side projects, that have turned out, in my opinion to be not that bad</p>
		</section>
		<section>
			<h1>Smart Sun</h1>
			<img src={smartSun} alt='smart sun application' onClick={function() {
				window.open('https://github.com/carinyperez/smart_sun')
			}}></img>
			<p>Smart Sun is a sun exposure and vitamin D tracker integrated with Particle's iot device. Based on the user's location it fetches weather data todetermine the best time to go outside.</p>
		</section>
		<section>
			<h1>Micro Lend</h1>
			<img src={microLend} alt='micro lend application' onClick={() => window.open('https://github.com/carinyperez/microLend')}></img>
			<p>MicroLend is a crowdfunded microloans platform. It bridges the gap between finance and social good by connecting disadvantaged borrowers with lenders and mentors.</p>
			<p></p>
		</section>
		<section>
			<h1>Pomo</h1>
			<img src={pomo} onClick={() => window.open('https://mypomo.netlify.app/')}></img>
			<p>Pomo is uniquely designed to meet the needs of young students and educators. It uses the science-backed Pomodoro technique, Pomo helps students manage their time by breaking down assigned tasks into manageable intervals.</p>
		</section>
		</>
		
	)
}

export default Projects; 

