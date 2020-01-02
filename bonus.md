
# Bonus exercises

## "Site visitor" counter

Back in the last century, before we had nice things, websites manually kept track of how many times a page was visited.

You're going to simulate that with JavaScript :)

In your `index.js`, create a variable called `counter` whose initial value is `0`.

Each time there is a new request, increment `counter`.

Send back a response that includes the value of `counter`.

## Counting links

You'll create a node http server that will send back HTML.

In the body of the HTML, there will be a single anchor tag.

The first time you visit the site at `http://localhost:3000/`, the anchor tag will look like this:

```html
<a href="/0">0</a>
```

When you click that link, you will go to a page with this anchor tag:

```html
<a href="/1">1</a>
```

If you decide to manually type in a number in the address bar (e.g., `http://localhost:3000/42`), you will go to a page with this anchor tag:

```html
<a href="/43">43</a>
```


## Contacts, revisited

Modify the contacts code from the exercises/demo: https://github.com/radishmouse/http-exercises/tree/demo

When the user visits `/contact`, it shows a list of the names of the contacts (do not include the phone or email information).

Each name should link to that person's index in the array.

For example, one of the linked names would be formatted like so:

```html
<a href="/contact/3">Bob Loblaw</a>
```

When the user visits that link, it should show the full contact information (name, phone, email) for that individual contact.

That page should also show the `header.html`, `nav.html`, and `footer.html`.

It might also be useful to show a `Back to contacts list` link.


## Ultra bonus: Make an API request...from the backend

This one also builds on the exercise/demo code: https://github.com/radishmouse/http-exercises/tree/demo


Add a "/joke" link to the `nav.html`

When the user visits that page, it should show a random chuck norris joke from the "dev" category. (https://api.chucknorris.io/jokes/random?category=dev)

To retrieve the joke information, you will need to read about, install, and use one of the following modules:

- https://www.npmjs.com/package/request
- https://www.npmjs.com/package/axios

## Ultra-ultra bonus: madlib with chuck norris joke

Allow the user to go an address like `/joke/oakley`.

Show them a chuck norris joke, but replace chuck norris' name with the one in the URL.
