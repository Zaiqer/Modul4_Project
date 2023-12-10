export const saveMoviesToServer = async (movies) => {
    const apiUrl = 'https://acb-api.algoritmika.org/api/movies/list';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ movies }),
    };
  
    return fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error('Error saving movies:', error);
      });
  };
  