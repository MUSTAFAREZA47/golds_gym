export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.EXERCISE_RAPID_API_KEY,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    },
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.YOUTUBE_RAPID_API_KEY,
    },
}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data)
  return data;
};
