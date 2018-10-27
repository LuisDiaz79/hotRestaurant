# Development Phases

## Initial Instructions

Today you will be building a Node / Express based web applications for handling reservation requests.

Your application will be made up of two parts:
1) A front-end set of HTML/CSS/JS pages for entering and viewing data and
2) A back-end composed of Node/Express and basic JS for storing, updating, and relaying reservation data.

Spend the time necessary to map this application out. Consider the concepts we've covered in class so far:

* Servers
* Routing
* APIs
* AJAX (GET and POST Requests)

You should be referencing the code from the previous Star Wars application.

Feel encouraged to use the following application as a reference: <http://hot-restaurant-fsf.herokuapp.com/>

Note: We know this is a hard activity. We know you aren't yet comfortable with Node or Express. But push yourself. The best way to learn is to push through the discomfort and BUILD! Ask for help when you need it. We're here to help you through the process.

---------------------


## Phase I - For this first phase, aim to write out the pieces that will need to be programmed to create the functionality of your application. Try to break it into 6-7 pieces. THERE IS NO CODING AT THIS STEP. Instead make sure to talk out what will be required to build the application with your team.

* Create the front-end (visuals) for home page, reservation form, and reservation views.

* Create a basic server using Express.JS

* Connect with and seed the database

* Create a set of routes for getting and posting table data

* Create a set of routes for displaying the HTML pages

* Use jQuery to run AJAX calls to GET and POST data from users to the Express server

---------------------


## Phase II - For this second phase, aim to complete the following

* Backend Team:

Create a basic Express server.

Your server at this point should do the BARE MINIMUM. (Effectively, it should just say: "Listening at PORT 3000" when the command `node server.js` is run). Also add the `express.json` and `express.urlencoded` middleware.

* Frontend Team:

Create three HTML files one called home.html, another called tables.html, and another called reserve.html. Use dummy data and create pages similar to the one shown to you on the sample Hot Reservation webpage. These don't have to look exactly the same as the completed example, do the best you can in the allotted time.

All: If you finish early, begin thinking about how the Data, API, and Routes should look.

---------------------


## Phase III - For this third phase, aim to complete the following

* Backend Team:

Require the `connection.js` file into the `server.js` file. Seed the database.

Create API routes that query the database and return JSON to the client. Create two routes for now:

1. `api/tables`: returns all tables where `isWaiting` is `false`.

2. `api/waitlist`: returns all tables where `isWaiting` is `true`.

Test your API using Postman to verify this works.

* Frontend Team:

Temporarily join the backend team. Your task will be to create Express routes that display your HTML pages when a user visits the appropriate page. (i.e. if a user visits `localhost:3000/tables`... they should be shown the `table.html` page.)

If you finish early begin creating the code necessary to convert your form data into JSON objects.

---------------------


## Phase IV - For this fourth phase, aim to complete the following

* Backend Team:

Create a POST route for handling reservation requests (`POST "api/tables"`). It should be assumed that this route will receive JSON object on `req.body` that matches the table schema in the `schema.sql` file. Inside of the route, first query the database to count how many tables are seated (`isWaiting` is `false`), if there are 5 or more, set `req.body.isWaiting` to `true` and save it to the database. Otherwise set `req.body.isWaiting` to `false` and save it to the database. Remember to respond with the result of the last query to the client.

Test your API route using Postman while the front-end team is creating logic to submit the POST request.

* Frontend Team:

Create the necessary code on your `tables.html` page such that it can retrieve data from the Backend Team's API. In essence you will be creating an AJAX GET request to retrieve the data. Print the data retrieved from the database to the console.

Then create the necessary code on your `reserve.html` page such that it can send data to the Backend Team's API. In essence you will be creating an AJAX POST request to send the data. For now just have it POST a hard-coded object to the database, e.g.

```json
{
  "name": "Harry",
  "email": "hjpotter@hogwarts.edu",
  "phone": "731-198-0934"
}
```

All: This is the most challenging part of today's activity. Be persistent! You can do this!

---------------------


## Phase V - For the fifth and final phase, aim to complete the following

All:

Complete the front-end.

On the "reserve.html" page, wire up the form button to submit the input data to the tables creation route when clicked.

On the "tables.html" page, render each table retrieved from the database in the HTML.

### Bonus

Add a button and a route for clearing all tables from the database.

Inside of POST `/api/tables` route, after inserting the new table into the database, make a third MySQL query to retrieve the newly created table and send it back to the client as JSON. On the front-end, alert a different message depending on whether or not the new table is on the waitlist.

---------------------
