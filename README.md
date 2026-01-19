Movie Search

Create an application that allows users to search for movies by a keyword. Watch the demo video showing how the application works.

TMDB Movie Search Service

In this task, you will retrieve movie information from the TMDB service using HTTP requests.

Here is a video that shows how to register an application and obtain a personal access token.

⚠️ Do not store the access token directly in the code. Use the environment variable VITE_TMDB_TOKEN instead.

Useful documentation sections:

How to build a full image URL
How to add an access token to requests
Search movies by keyword
Adding the authorization token to Axios requests

To add the authorization token to an Axios request, include it in the request headers when calling Axios methods. Your Axios config object should look like this:

{
params: {
// your parameters
},
headers: {
Authorization: `Bearer yourToken`,
}
}

The backend response returns an object containing all the necessary information, including an array of movies. Each movie in the array is represented by an object with a large amount of data.

Below is an example of an interface for typing a single movie. Move it to the file src/types/movie.ts and use it in your components.

export interface Movie {
id: number;
poster_path: string;
backdrop_path: string;
title: string;
overview: string;
release_date: string;
vote_average: number;
}

Move the fetchMovies function for performing HTTP requests into a separate file src/services/movieService.ts. Type its parameters, the returned result, and the Axios response.

Components

In this task, you need to independently create and implement the logic for the following components.

Styles for all components are already created. Copy them from this repository:
https://github.com/goitacademy/react-movies-styles

After creating your components, copy the corresponding .module.css files into the appropriate folders in src/components.

Header with Search Form — SearchBar

The SearchBar component accepts one prop:

onSubmit — a function for passing the input value when the form is submitted.

The SearchBar component should render the following DOM structure:

<header className={styles.header}>
  <div className={styles.container}>
    <a
      className={styles.link}
      href="https://www.themoviedb.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by TMDB
    </a>
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movies..."
        autoFocus
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  </div>
</header>

Form handling must be implemented using Form Actions.

If the input field is empty when the form is submitted, show a notification informing the user that a search query must be entered:

Please enter your search query.

This validation is performed in the SearchBar component at the moment of form submission. Use the React Hot Toast library for notifications.

If the movie array returned by the request is empty, display the message:

No movies found for your request.

This check is performed in the App component while handling the HTTP request. Use React Hot Toast for notifications.

With each new search, the movie collection from the previous search must be cleared.

Movie Gallery — MovieGrid

The MovieGrid component is a list of movie cards. It accepts two props:

onSelect — a function to handle clicks on a movie card

movies — an array of movies

The component should render the following DOM structure:

<ul className={css.grid}>
  {/* List items with movies */}
  <li>
    <div className={css.card}>
      <img 
        className={css.image} 
        src="https://image.tmdb.org/t/p/w500/poster-path" 
        alt="movie title" 
        loading="lazy" 
      />
      <h2 className={css.title}>Movie title</h2>
    </div>
  </li>
</ul>

The gallery should be rendered only when there are loaded movies.

Loading Indicator — Loader

The Loader component should be displayed instead of the gallery while movies are being fetched. It should render the following DOM structure:

<p className={css.text}>Loading movies, please wait...</p>

Error Message — ErrorMessage

The ErrorMessage component should be rendered instead of the movie gallery when an HTTP request error occurs. It should render the following DOM structure:

<p className={css.text}>There was an error, please try again...</p>

Modal Window — MovieModal

When clicking on a movie image in the gallery, a modal window should open displaying additional movie information in a larger format. Create a MovieModal component for this purpose. It should be used in the App component and receive two props:

movie — a reference to the selected movie object

onClose — a function to close the modal window

The MovieModal component should render the following DOM structure:

<div className={css.backdrop} role="dialog" aria-modal="true">
  <div className={css.modal}>
    <button className={css.closeButton} aria-label="Close modal">
      &times;
    </button>
    <img
      src="https://image.tmdb.org/t/p/original/backdrop_path"
      alt="movie_title"
      className={css.image}
    />
    <div className={css.content}>
      <h2>movie_title</h2>
      <p>movie_overview</p>
      <p>
        <strong>Release Date:</strong> movie_release_date
      </p>
      <p>
        <strong>Rating:</strong> movie_vote_average/10
      </p>
    </div>
  </div>
</div>

The modal window must be created using createPortal so that it is rendered outside the main component tree. It should close when:

clicking the close (×) button,
pressing the ESC key,
clicking outside the modal window.
Use styles to disable page body scrolling while the modal is open.

When the modal closes, be sure to clean up everything that was added or changed when it opened. This includes:

clearing the selected movie state,
removing event listeners for the Escape key,
restoring page body scrolling.
