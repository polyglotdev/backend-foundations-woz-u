# Back-End Foundations with JavaScript

**Overview**

The Back-End foundations with JS course is intended to teach students the fundamentals of back end development. You will learn how endpoints use HTTP to communicate over the web along with how to create an API, which will responf to ay requess over the web. YOU will learn how to authenticate users, work with data in a database, debug and application to locate errors and interact with 3rd party APIs when working on a project. 😃

## Why Back-End??
Back-End development, or server side development, is a software development focused on communication between the outside world and the database. Actions, such as signing into a social media account, streaming music, or seaching for a quert in a search engine rely on the Back-End of an application to respond to the different requests. The Back-End consists of a server, that both recieves and responds to requests through code and a database to store data(see figure 1-1 below). This is contrasted with the Front-End, in which the user interacts with, and relies on the Back-End to power the application.

<div>
	<img src="./backend-architecture.png" />
	<h4>Figure 1-1: Back-End architecture</h4>
</div>

# Node and Express
## Node
> "As an asynchronus event-driven JavaScript runtime, Node is designed to build scalable network applications."
> [Nodejs.org](https://www.nodejs.org)

Node is a environrment that runs JavaScriptcode on the server-side. The job of a web server is to listen to requests from the outside 🗺 and respond back as instructed by the engineer. For instance, a client may ask for an image from the server, and the server may respond back with the image. it allows engineers to develop what happens when certain requests are made. A module is a component of Node whichoffers a ery specific set of functionality. In this course, the HTTP module will be the main source of interaction between the web server and the user.

## Express
Express.js better known as just **Express**, is a web application framework for Node.js. Built by TJ Holowaychuk in 2010, it has grown to becie the standard of development when working with Node. Express has since been acquired by IBM in September 2015 and was moved under the stewardship of the Node.js Foundation incubator in January of 2016. Express is a lightweight web application framework that helps developers produce code quickly and remain organized. Node by iteself was not intended to be used for websites, but Express adds this capability without overriding the feature-packed Node platform.
> "Express is a minimal and flexiable Node.js web application framework that provides a robusr set of features for we and mobile applications"-
> [express.js](https://expressjs.com)

Express is currently the most popular framework built on top of Node, which heps organize server-side code into a MVC 🛠. It provides JavaScript engineers witht he necessary tools to build applications quickly and securely. Express provides may javascript capabilities that make it an essential part of the Node development and allow it to stand out amoung other frameworks. From simple database connections to security modules and HTTP requests, Express has been a respectable framework since it was picked up in the dev community.

Now, analyze how eah part of the Back-End operates by mocking a user signing into their email. When a URL is entered into the client web browser, a request is sent to the email server. The email server will then see the request, which in the case is to log in and execute the appropriate action by the engineer in the corresponding Express route.
