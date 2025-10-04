# Installing Node.js with Express

## Verify installation

> “Let’s confirm that Node and npm were installed successfully.”

Open your Command Prompt (Windows) and type:

```bash
node -v
npm -v
```

> “If you see version numbers, congratulations! Node.js and npm are working.”

## Setting up a Node project

Step 1: Create a folder for your project

Step 2: Initialize a Node project

> “This command creates a `package.json` file, which stores information about our project and its dependencies.”

```bash
npm init -y
```

## Installing Express.js

Step 1: Install Express

```bash
npm install express
```

> “This command downloads Express from npm (Node Package Manager) and adds it to our project dependencies.”

Step 2: Create your main file

> “Let’s create our first server file called `server.js`.”

Inside your project folder, create a file named server.js and type this code:

```javascript
// app.js
const express = require("express");
const app = express();
const PORT = 3000;

// Create a simple route
app.get("/", (req, res) => {
  res.send("Hello, Express is working!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

## Run your server

Type this in your terminal:

```bash
node app.js
```

> “You should see a message:
> `Server is running at http://localhost:3000.`”

Now, open your browser and visit http://localhost:3000
— you’ll see the text “Hello, Express is working!”

[![meme](https://media.giphy.com/media/l2Sqj1vsFCSCs6k5G/giphy.gif)](https://media.giphy.com/media/l2Sqj1vsFCSCs6k5G/giphy.gif)
