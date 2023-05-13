import { Link, useLocation} from 'react-router-dom';
import './blog.scss';

const Blog = () => {
	const {pathname}= useLocation();
	return (
		<main >
			<section className='blog'>
			<article>
				<Link to={`${pathname}/task-manager`}>Task Manager <span> April 8, 2023</span></Link>
			</article>
			<article>
				<Link to={`${pathname}/inventory-manager`}>Inventory Manager <span>April 15, 2023</span></Link>
			</article>
			<article>
				<Link to={`${pathname}/jobs-manager`}>Jobs Manager <span>May 1, 2023</span></Link>
			</article>
			</section>
		</main>
	)
}

export default Blog; 