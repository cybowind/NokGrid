# NokGrid

Using NodeJS - Express server with React - Redux solution for viewing, sorting, and filtering big amount of data in a grid efficiently. This project uses the AG Grid community library to fulfill the challenge.

The root folder has two subfolders: client and server. The server folder serves mock data with 5000 records. The client app uses the AG Grid to render the data and allows sorting and filtering of the data through the interface. AG Grid is designed to handle large data sets and comes with sorting and filtering functionalities.

To run the project, first open a terminal for the server and:

    cd server
    node server.js
The console will respond with the following:

> Listening on port 5000
>{ 
> id: 1,
> operation: 1633, 
> scope: 'C', 
> timestamp: '2021-10-16T16:42:31Z', 
> status: 'Interrupted' 
> }

This means that the server has successfully read in the data and is ready to serve it. 

Now open a second terminal and:

    cd client
    npm install
    npm start
This will launch the client on port 3000. (Port 3000 is assumed so change the reference in server.js if using another port is used.)

