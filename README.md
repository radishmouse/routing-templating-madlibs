
For each exercise, create a new node project (with `npm init -y`).
Make each project its own git repo.

Each exercise will require you to create an `http` server that responds to requests.

# Routing and Templating

The goal of these exercises is to use the value of `req.url`.

## Echo Server

Write an `http` server that sends a plain text response containing the value of `req.url`.

For example, if the address in the browser is `http://localhost:3000/hey-you`, the page should show the text `hey-you`.

Make sure to set the `Content-Type` to `text/plain`.

## Madlib

### Part 1

Write an `http` server that uses the value of `req.url` as part of a greeting.

For example, if the address in the browser is `http://localhost:3000/oakley`, the page should show the text `Hello, Oakley!`

As before, set the `Content-Type` correctly for plain text.

### Part 2

In your `index.js`, create an array of names that deserve an extra polite greeting.

If the value of `req.url` is `/oakley` and the array is `["Oakley", "Chris"]`, the page should show `How wonderfully splendid it is to be in your presence again, Oakley!. You look magnificent today!`

If the value of `req.url` is `/milla` (and the array is still `["Oakley", "Chris"]`), the page should show `Hello, Milla!`.

### Part 3

Instead of having an array of names that deserve special greetings, create an object like so:

```js
{
    "Oakley": "How wonderfully splendid it is to be in your presence again!",
    "Chris": "Oh hey...",
    "Milla": "Hello, "
}
```

Based on the value of `req.url`, send back the corresponding greeting from the object. If the name is not a key in the object, send back the standard `Hello, <name>!`





## Madlib from a file

### Part 1

Create a template named `madlib.html`. In it, create the skeleton of an HTML file, but in the `<body>` add the following:

```html
<h1>Hi there, ***NAME***!</h1>
```

You will use this template as part of the response.

When a request comes in, save the value of `req.url` to a variable.

Use `fs.readFile` to read your template. Convert it to a String and then use the `.replace()` method to replace `***NAME***` with the name in `req.url`.

Then, send back the resulting HTML text in the response (making sure to set the `Content-Type` accordingly).

For example, if the browser address is for `http://localhost:3000/oakley`, the web page should show an `<h1>Hi there, Oakley!</h1>`

### Part 2

Modify the `madlib.html` so that it has the following replaceable text:

```html
<h1>Hi there, ***NAME***! Welcome to ***PLACE***!</h1>
```

Update your server code so that it use the `.split()` method to get multiple values from `req.url`.

(Hint: pass the `/` character to `.split()`.)

For example, if the browser address is for `http://localhost:3000/oakley/digitalcrafts`, the web page should show an `<h1>Hi there, Oakley! Welcome to digitalcrafts!</h1>`

## Hacker Madlib

Allow the user to visit a URL like:

```
http://localhost:3000/adjective/noun/verb/noun
```

For each part of speech ("adjective", "noun", etc.), create a madlib using the values produced by `faker.hacker` functions.

Check https://github.com/marak/Faker.js/ for usage.

