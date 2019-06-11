# App.js

The file `app.js` file within your project was created automatically when you used Express to generate So dar, you haven't touched this file within the course, but it is important to understand the parts. NOte that there will be some parts that you will learn more about in later lessons, so don't flip out if the shit doesn't make any sense right now.

First, lok at the lines of code that use `require`:
```js
var createError = require('http-errors')
```
The above line is requiring the `http-errors` modle available through `npm`. It is set tot a varaiable `createError` so it is easily accessible later in the file. This odule allows for easy creation of HTTP errors.

```js
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
```
The two lines above are requiring the `index.js` and `users.js` files within the routes folder. THis allows the contents of the ose files to be available within the `app.js` file.
