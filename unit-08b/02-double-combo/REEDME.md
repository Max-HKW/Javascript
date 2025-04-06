```md
# Queue Card Game - Code Flow

## Overview
This document describes the flow of the JavaScript card game implemented using a queue-based deck system.

## Code Structure
The code is structured into several classes:

1. **Queue**: Implements a simple FIFO queue.
2. **Card**: Base class for all playing cards.
3. **FireCard, IceCard, ThunderCard**: Special card types with unique effects.
4. **Player**: Represents a player in the game.
5. **Game**: Manages the game rounds and determines the winner.

## Flow Execution

### 1. Initializing the Game
- Two players are created (`Player` instances).
- Each player receives a deck of random cards (from `Card`, `FireCard`, `IceCard`, and `ThunderCard`).
- A `Game` instance is created, setting the maximum number of rounds.

### 2. Playing Rounds
- The game loops through rounds until:
  - The maximum number of rounds is reached.
  - One of the players runs out of cards.
- In each round:
  - Both players play a card (dequeued from their deck).
  - The cards' special effects are applied.
  - The card with higher remaining health wins the round.
  - The winning player gets a point.

### 3. Declaring the Winner
- Once the game ends, the number of rounds won by each player is compared.
- The player with the most victories is declared the winner.
- If both players have the same number of wins, the game is a draw.

## Example Execution
```
Alice plays Mage of Fire (Health: 20, Attack: 8, Defense: 2)
Bob plays Troll of Ice (Health: 25, Attack: 5, Defense: 4)
Mage of Fire uses Fire Blast on Troll of Ice, dealing 8 damage!
Troll of Ice uses Frost on Mage of Fire, reducing health by 4 and freezing it!
Bob wins the round!
...
The game is over! The winner is Bob.
```

## Conclusion
This simple queue-based card game demonstrates object-oriented programming concepts in JavaScript, including inheritance, method overriding, and encapsulation.
```

