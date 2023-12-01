export const exerciseOptions = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '9a37ce8db0msha9eac5d705dd977p1fdc47jsn5cef367dc4ec',
    // process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      
      
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9a37ce8db0msha9eac5d705dd977p1fdc47jsn5cef367dc4ec',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async ( url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}