# The Incredibles - spybook

Our goal for this project was to build a clone of Facebook - 'spybook', specifically for the superhero community. Our aim was to create a fun but professional looking social media website. 

# Description

Our user story:

- Users can sign-up to the platform with their own display picture.
- Users can log in and sign out of the platform.
- Users can post their thoughts and share images with other spybook users.
- Usres can comment on their own and other user's posts.
- Users can like their own and other user's posts.

A significant part of this challenge was to familiarise ourselves with an existing codebase. We debugged the original codebase and implemented a number of new features, replicating some of Facebook's functionality, including posts, comments, likes and the ability to upload images.

# Technologies

Our application was written with JavaScript, CSS and JSX. Here's an overview of the technologies we used to build our application.

### **M** is for MongoDB
[MongoDB](https://www.mongodb.com/) is a _NoSQL_ database program that stores data in collections of JSON-like structures, rather than in tables. The application interracts with MongoDB using a tool called Mongoose.

### **E** is for Express
[Express](https://expressjs.com/) is the Javascript equivalent of Sinatra. The structure of this application will feel quite different to what you're used to but the principles are the same.

### **R** is for React
[React](https://reactjs.org/) is a hugely popular tool that is used to build engaging front ends. The basic principle is that the front end is split up into _components_, each of which _could_ include some logic, template structure (HTML) and styling (CSS).

### **N** is for Node
Java script was originally designed to run exclusively in browsers, such as Chrome. [Node](https://nodejs.org/en/) is a tool that allows you to run Javascript outside the browser and its invention made it possible to build full stack Javascript apps.

We also used...

- [Jest](https://jestjs.io/) for unit testing on the back end
- [Cypress](https://www.cypress.io/) for end-to-end testing and component testing, on the front end
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Firebase](https://firebase.google.com/) to store images in a remote database.
- [Heroku](https://www.heroku.com/) to deploy our application to the web.
- Bcrypt to encrypt user passwords.

# Future features

- Like other user's comments
- Private messaging
- Friend requests
- Profile pages
- Upload and share videos
- Start groups

# Project setup

1. Fork this repository
2. Clone your fork to your local machine
3. Install Node.js dependencies for both frontend and backend (API)
   ```
   ; cd api
   ; npm install
   ; cd ../frontend
   ; npm install
   ```

4. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
5. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

# Running the application

1. Start the server
   ```
   ; cd api
   ; JWT_SECRET=SUPER_SECRET npm start
   ```
2. Start the front end

  In a new terminal session...
  ```
  ; cd frontend
  ; npm start
  ```

You should now be able to open your browser and go to `http://localhost:3000/` which directs you to the hompeage, where you can sign-up or log in.

(Add heroku link here)

# The Incredibles team

This project was created by:

[Oliver Beck](https://github.com/Ollie-HB)
[Lauren Brabbin](https://github.com/laurenbrabbin)
[Pauline Davis](https://github.com/paulinejdavis)
[Na-Rae Kim](https://github.com/Nameo91)
[Tauqeer Shoaib](https://github.com/tauqeer92)
[Kate Usacova](https://github.com/kateusacova)

# How to contribute ❤

Follow the Project Setup / Running the application steps above to build upon our exsiting project. We welcome any and all contributions. 

