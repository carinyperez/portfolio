import './homepage.scss';
import useAxios from '../../hooks/useAxios';

const HomePage = () => {
    const {data, error } = useAxios('https://api.api-ninjas.com/v1/quotes?category=happiness');
    return (
        <main>
        <section>
            {error &&  <p>{error}</p>}
        </section>
        {data && 
        <section>
          <p>{data[0].quote}</p>
          <p>{data[0].author}</p>
        </section>
        }
         </main>
    )
}

export default HomePage; 

