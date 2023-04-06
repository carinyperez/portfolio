import './homepage.scss';
import useAxios from '../../hooks/useAxios';


const HomePage = () => {
    const {data, error } = useAxios('https://api.api-ninjas.com/v1/quotes?category=happiness');
    return (
        <>
        {error && <p className='error'>{error}</p>}
        </>
    )
}

export default HomePage; 

