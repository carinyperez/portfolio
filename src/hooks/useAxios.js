import { useState, useEffect } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_QUOTES_API_KEY;

const useAxios = (url) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(true);

	useEffect(() => {
		getData();
	}, [])

	const getData = async () => {
		try {
			const response = await axios(url, {
				headers: {
					'X-Api-Key': api_key
				},
			})
			setData(response.data)
		} catch (error) {
			setError(error.message)
		}
	}

	return { data, error };
}

export default useAxios; 