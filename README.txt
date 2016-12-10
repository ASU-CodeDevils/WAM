--------------WHACK-A-MOLE README--------------
Functional Notes
12/8/16

1. Players must enter their name before starting new game.
2. Players start with default fist hammer.  This is stored in the player's hammer array as hammers[0].  Players start with a score of 0.
3. The Board contains a double char array.  Each boardArray[i][j] indicates a hole.  Board is initialized as all empty holes indicated by the char 'e'.  The method putMoleInHole(int h, int w) changes the char from 'e' to 'm' to indicate the presence of a mole.  The state of any hole is found by using the method getState(int h, int w).
4. Moles are initialized with their speed from the level in which they are created.  The Hammer class needs to be finalized before full whacking methods can be determined.  As of 12/8, the moles have a total of 14 hit points, which are divided among the head, body, and butt of the mole: Head == 8pts, Body == 4pts, Butt == 2pts.  The hit points are reduced by the hammer power for each body part.  Points should only be awarded for final whacking.  We will need to review the algorithm for determining hammer power.  Moles will move from their hole to another hole if not sufficiently whacked on the head in time.
5. Levels: will be initialized by the Controller with its various attributes.  It creates an array of Moles that may be used by the controller to populate the board depending on the level requirements.
6. Controller will create a new game object that will handle the logic for instantiating levels and managing the moles, the board, and the player's score.  As of 12/8, this still needs to be written.