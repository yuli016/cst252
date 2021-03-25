// hangman.js
// Learning about how to object oriented design a game of hangman
// Author: Yulitsa Pantoja <ypantoja@csumb.edu>
// Source Credit: Wes Modes <wmodes@ucsc.edu>
// Created: March 2021
// License: Public Domain

  // Understand the Problem
    //Creating a Hangman game with 2 players.
    //One player will decide the word for game and the other player will guess
    //the letters to make the full word.
    //Guesser player will only have 6 tries to guess word
    //Each players will take turns doing each role.


    // Create the initially of the board set up and give role to players
    // Game Loop
    // Draw the board
    //Get letter to use from decider player
    // Get move from guessing player
    //guesser player select a letter from list
    // Check for validate selection
    // Check for win (or lose) condition
    // Switch players' role

////////////////////////////////////////////////////////////////////////////////
  //Pseudocode the High Level Approach
    //Setting up the game initially
      //Create the game board
      //create the players
      //give each role to players

      //Start the game Loop
        //Render the borad
        //ask player with decider role to type word
        //print the amount of space of the word choosen
        //ask player with guesser role to select a word from choice
        //if guesser player selects correct letter type in space
        //if guesser player selects incorrect letter draw one part of stickman
        //Continue this loop process until guesser player guesses correct or fails 6 times
        //If the game should end
        //Display the proper victory or lose message
        //stop the looping

        //Else
          //ask player to continue again with game
          //switch roles to the next players and keep looping

////////////////////////////////////////////////////////////////////////////////
  // Assign Actions to Objects//
    //Setting up the game initially [Hangman]
      // Create the game board [Board]
      // create the players [Player]
      // give each role to players [Player]

      //Start the game Loop [Hangman]
        //Render the borad [Board]
        //ask player with decider role to type word [Player]
        //print the amount of space of the word choosen [Board]
        //ask player with guesser role to select a word from choice [Player]
        //if guesser player selects correct letter print in space [Board]
        //if guesser player selects incorrect letter draw one part of stickman [Board]
        //Continue this loop process until guesser player guesses correct or fails 6 times [Board]
        //If the game should end [Hangman]
        //Display the proper victory or lose message
        //stop the looping

        // Else
        //ask player to continue again with game [Player]
        //switch roles to the next players and keep looping [Hangman]

////////////////////////////////////////////////////////////////////////////////
  // Make Javascript-ish Pseudocode
    //Controls to play Hangman
      //initiialize
        //set up the board
        //set up the players
        //assign the roles to each player

      //gameplay
        //loop infinitely
          //call the board rendering method
          //ask decider player to choose the word
          //ask for guesser player to select a letter from listing
          //if guesser player selects letter correct print letter in location
          //if guesser player selects letter incorrect draw one part of stickman body
          //break the loop if the game is over
          //ask to continue another gameplay
          //switch the roles for players

      //check_game_over
        //check for victory
        //check for Draw

      //check for victory
        //If board says current player's choosen all letters correctly
          //display a victory message "Victory"

      //check for lose
        //If board says current player's choosen all letters incorrectly 6 times
          //display a lose message "Lose"
