const getCountriesFromApi = async () => {
	// let data = await fetch('https://restcountries.eu/rest/v2/all', {
	// 	method: 'GET',
	// });
	// let response = await data.json();
	// return response;
	return axios.get('https://restcountries.eu/rest/v2/all').then(response => {
		return response.data;
	});
};

export { getCountriesFromApi };
