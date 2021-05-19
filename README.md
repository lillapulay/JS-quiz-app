# JavaScript Quiz App

Quiz application fetching data from the [Open Trivia Database API](https://opentdb.com/). 

The user can start a game, answer 10 questions and save their score to the localStorage.

### Notes
(<em>Some reminders for myself & what I learned/practiced/refreshed while building this app</em>)
- <em>!+Tab</em> creates an HTML template (VS Code)
- Practiced <em>[Emmet abbreviations](https://docs.emmet.io/)</em> while creating tags
- Used <em>[rem](https://css-tricks.com/rem-global-em-local/)</em> for responsive design
- Hover animation could be reused in SASS as a <em>mixin</em>
- `<p class="choice-text" data-number="1">Choice 1</p>` <br>
    `data-number` is used so we can differentiate between occurrences when querying by the class name
- Learned how to set up code snippets in VS Code, e.g. `getid` for `getElementById` - they really enhance workflow
- `console.log(choices)` - the output will be an <em>HTMLCollection</em> - `Array.from()` converts it into an array - inspecting this array reveals the <em>dataset</em> property, which contains the <em>data-number custom property</em> that we added to `choice-text`
- `availableQuestions = [...questions];` - the spread operator takes the <em>questions</em> array, spreads out each of its items and puts them into the <em>availableQuestions</em> array
- `Math.random()` - gives a decimal between 0 and 1
- `Math.random() * 3` - gives a decimal between 0 and 3
- `Math.floor(Math.random() * 3)` - rounds it into an integer between 0 and 3 (3 excluded)
- `e.preventDefault();` - in this case prevents the form from submitting
- <em>localStorage</em> - stores data in key-value pairs
    - `setItem`
    - `getItem`
- Built-in JS functions:
    - `splice()`
    - `sort()`
    - `map()`
- ES6 features
    - `let`, `const`
    - template literals
    - arrow functions
- JSON methods
    - `stringify()`
    - `parse()`
- `fetch()` API
    - `.then()` promises
    - `.catch()` error handling
- Basic CSS animation, flexbox
- Features:
    - Save score in the localStorage (and get data from there as well)
    - Progress bar using CSS and JavaScript
    - Spinning loader using CSS and JavaScript

### Planned updates
- (done) End screen - change text
- (done) Fetched data - fix HTML issues
- Highlight correct answer upon chosing a wrong one
- Quit button

### Credits
- [Tutorial source](https://www.udemy.com/course/build-a-quiz-app-with-html-css-and-javascript/)
