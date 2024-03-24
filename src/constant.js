const token = process.env.MY_BEARER_TOKEN;
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const movieListsLink = "https://api.themoviedb.org/3/movie/";
