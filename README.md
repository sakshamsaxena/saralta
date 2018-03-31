# Saralta

Saralta (Hindi for \"ease\") is an online portal where any user can upload their official documents for easy viewing, management, and comes handy in applying directly for various Official Government purposes.

## Installation

* #### Prerequisites

1. [Node.js](https://nodejs.org/en/download/)
2. [MongoDB](https://docs.mongodb.com/manual/installation/)
3. `mongod` service running in your shell/background.
4. [Nodemon](https://www.npmjs.com/package/nodemon) for live reloading

* #### Installing

Once you've cloned this/your forked repo, follow the steps below.

```
npm install
mongoimport --db saralta --drop --collection forms --file samples/forms.json
mongoimport --db saralta --drop --collection users --file samples/users.json
nodemon index.js
```

For Demonstration purpose, there is only **one user** available who is not explicity authenticated.

Browse to [locahost:3000](locahost:3000) to view the basic app. 

## Functionality Achieved

* A RESTful and scalable backend written in Node.js.
* Careful Error Handling in Forms API.
* Through Validation in Forms API.
* Layered Architecture to reduce redundancy and enhance design.
* Neat code linting and checks kept in place with Grunt plugins.
* Basic Document Submission Works.

## Functionality Pending

* Authentication Middleware
* User Registration/Login
* Front End for Quick Access API
* Pending Tests in Mocha
* Some Structure in Front End