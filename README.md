# prime_solo_express

Create a basic node application using `npm init`.
Create a file containing the JavaScript for running your server. This can be called `server.js` or something else. Remeber that this is the filename you will pass to node to start your server. 

Install the Express library using `npm install express --save`.

Set up a basic route to serve an `index.html` file on the `/` path. Also set up static file serving using `express.static` using a folder called "public". Put a client side JavaScript file named `scripts.js` in your static folder and a style sheet named `styles.css`. Add a script tag referencing your script your index.html file. Also add a link to your style sheet.

Next, make a folder called "modules". Copy your three module files from the `prime_peer_nd_00` assignment into this folder and require them in your `server.js` file.

Set up a new route for GET requests to "/balance" that will use the required files to send a random account balance to the client. Use `$.ajax` to display this on the page. 

Add a button that will make an Ajax call to the server, and display the new random balance on the page.

Style things using your css file.

## HARD MODE

Also animate the data on the page using jquery animate libraries.

## PRO MODE 

Add a form to your page that allows a user to configure the minimum and maximum values that the random module will use to calculate a random value. 
