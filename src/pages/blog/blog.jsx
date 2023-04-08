import { Link, useLocation} from 'react-router-dom';
import './blog.scss';

const Blog = () => {
	const {pathname}= useLocation();
	return (
		<main >
			<section className='blog'>
			<article>
				<Link to={`${pathname}/tic-tac-toe`}>Tic Tac Toe</Link>
				<p>April 8, 2023</p>
			</article>
			</section>
		</main>
	)
}

export default Blog; 