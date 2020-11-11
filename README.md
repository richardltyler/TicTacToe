---
# TicTacToe
###### Challenge a friend!
---
## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Authors](#authors)

## Introduction
The primary goal of TicTacToe is for users to be able to play a few rounds of the classic game, Tic Tac Toe, with a friend. ([Project Specs](https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html)).

---

## Features
* [Start a Game](#Start-a-Game)
* [Claim Your Space](#Claim-YourSpace)
* [End the Game](#End-the-Game)
* [Local Storage](#Local-Storage)

#### Start a Game
When you open the page or when a game is completed, a game automatically starts. To solve the age old "who goes first" controversy, first turn is chosen at random every time a new game starts. 
<p align = "center">
<img src="https://media.giphy.com/media/diYc2a7VsFfuePE7cI/giphy.gif"></p>
</p>

  <details>
    <summary>Under the Hood</summary>
    Using window.onLoad, a game is immediately created. This instantiates our player class twice and instantiates our game class with our new player instances as player 1 and player 2. The first current player is decided with a method of the game class that randomly assigns one of the players as current player. 
  </details>


#### Claim Your Space
Once the game has started, the current player's token will be displayed across the top of the page. The current player can click on an empty space, and their token will appear. 
<p align = "center">
<img src="https://media.giphy.com/media/TTwWqkr5JqkQcA3AQX/giphy.gif">
</p>

  <details>
    <summary>Under the Hood</summary>
    The screen's game board displays the game board property of the game instance. So, when the current player clicks on a space, their token is added to the game board property of the game instance which changes the information being displayed. A player can only insert their token into the game board property and complete their turn if that game board property space is empty, so a player may not click on a space that is already displaying a token. 
  </details>
  
#### End the Game
The game ends when a player wins or the game is a tie. A player wins by claiming three spaces in a row. The page will then display the winner, and their win count is updated on the screen in their respective space. A game is tied when all of the spaces are filled, but neither player has won. The page will then display that the game is a tie, and the game counts will not increase. Once, the game has ended, another game will automatically start. 
<p align = "center">
<img src="https://media.giphy.com/media/d8U4icnNUwF2nahWbK/giphy.gif">
<img src="https://media.giphy.com/media/Txg9ZntMH8yFQitpJX/giphy.gif">
</p>

  <details>
    <summary>Under the Hood</summary>
    After each turn has ended, the code checks for the game to have ended by either winning or losing. A set of game board indeces have been listed in the game class as winning conditions. When the code checks for the game to end, it looks for each of those indeces to include the current player's token. If the player did not win, then it looks for any open spaces. If the player did not win, and there are no open spaces then the game is a draw. When the game ends, a new game will start after a 2 second timeout. 
  </details>

#### Local Storage
If the players want to close the game and come back to it later, they can still keep track of their total wins. They do not restart when the page is reloaded.
<p align = "center">
</p>

  <details>
    <summary>Under the Hood</summary>
    When a player wins a game, the game board is saved to the winning player. That game board is then sent to local storage. When the player class is instantiated at the beginning of each game, their wins propertys are updated with the wins stored in local storage. 
  </details>
  
---
  
## Future Iterations
 In the next iteration we hope to add:
  * Local storage to make current game hold across refreshes
  * Animations for game outcomes
  * Window alerts when player tries to click on an occupied space 
  
---
  
## Reflection
  * In the beginning, this project posed an overwhelming challenge to my understanding of the DOM and Data Model. However, after putting some of the pieces together, I now see a distinct difference between the two and the importance of keeping them seperate. 
  * I tried to create this project using only my current knowledge/skill-level whenever possible. Figuring out how to win/tie the game and display on the DOM from the Data Model with only my current knowledge was very satisfying. 
  * The challenge that I did not meet was for the gameboard to persist across refreshes. If given more time, that would be the first thing I do. 

---
  
## Technologies
JS, HTML, & CSS

## Authors
<table>
    <tr>
        <td> Richard Tyler <a href="https://github.com/richardltyler">GH</td>
    </tr>
 <td><img src="https://avatars3.githubusercontent.com/u/70095063?s=460&u=39c274f1a2fbb88cc013de61aa8307596a988255&v=4" alt="Mr. Tyler"
 width="150" height="auto" /></td>
</table>
