# Modul4_Project
The application allows you to make a list of movies and share them with your friends.
The main part of the main page is occupied by the search form and the list of found movies. On the right side of the page is a list of selected movies.
The user searches for a movie, clicks the "Add to list" button, and the movie is added to the list of selected movies.
User can remove movie from selected movies list.
The user clicks the "Save List" button. The list is stored on the server and gets a unique id. Based on this id, a link like http://localhost:3000/list/<id> is generated. The link appears in place of the "Save List" button.
When you link, the name of the list and the related movies are displayed on a separate page. For each movie, a link to the corresponding IMDB page is listed.
