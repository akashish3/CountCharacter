# Character Counter and Dark Mode Toggle

This project provides a simple web interface for counting characters and words in a text input, selecting characters, and toggling between light and dark modes.

## Features

- **Character Count:** Displays the number of characters in the input text.
- **Word Count:** Displays the number of words in the input text.
- **Selected Character Count:** Displays the number of selected characters in the input text.
- **Warning:** Shows a warning message if the character count exceeds 200.
- **Dark Mode Toggle:** Allows users to switch between light and dark modes.

## Getting Started

Follow the instructions below to set up and run the project.

### Prerequisites

Ensure you have a web browser and text editor installed on your computer.

### Installation

1. Clone the repository or download the project files.
2. Open the project directory in your text editor.

### Usage

1. Open `index.html` in your web browser.
2. Enter text in the provided textarea.
3. Observe the character count, word count, and selected character count.
4. Click the "Toggle Dark Mode" button to switch between light and dark modes.

## Project Structure

- `index.html` - The main HTML file that sets up the structure of the web page.
- `style.css` - The CSS file that defines the styles for the web page.
- `script.js` - The JavaScript file that adds functionality to the web page.

## Code Overview

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>

<body>
    <div class="container">
        <div class="box">
            <h2>Character Count</h2>
            <label for="input-text">Enter your text:</label><br><br>
            <textarea id="input-text" placeholder="Type Text...." maxlength="200"></textarea>
            <p>Character count: <span id="count">0</span></p>
            <p>Word count: <span id="word-count">0</span></p>
            <p>Selected Character count: <span id="selected-count">0</span></p>
            <p id="warning" style="display:none;">Character limit exceeded!</p>
            <button id="toggle-dark-mode">Toggle Dark Mode</button>
        </div>
    </div>
</body>
</html>
