import { Link, useLocation} from 'react-router-dom';
import './blog.scss';

const Blog = () => {
	const {pathname}= useLocation();
	return (
		<main >
			<section className='blog'>
			<article>
				<Link to={`${pathname}/task-manager`}>Task Manager</Link>
				<span> April 8, 2023</span>
			</article>
			</section>
		</main>
	)
}

export default Blog; 