 # RPG CLI Game

Welcome to the **RPG CLI Game**, a simple yet engaging command-line-based role-playing game (RPG). Embark on an adventurous journey, explore the unknown, and create your own enemies – all from your terminal!

---

## Storyline

You awaken in a mysterious land with no memory of how you got there. The world around you is shrouded in fog, and whispers of ancient secrets fill the air. As you take your first steps, a faint voice echoes in your mind:

*"The fate of this realm lies in your hands, traveler. Will you rise to the challenge or let darkness consume all?"*

Your journey begins with nothing but your determination. Along the way, you will:

- Explore forgotten ruins and uncharted forests.
- Encounter strange characters, both friend and foe.
- Gather powerful artifacts to aid your quest.
- Face challenging enemies as you uncover the truth about this land and your purpose within it.

Every decision you make shapes the story. Will you become the hero this realm desperately needs, or will you forge your own path?

---

## Features
- **Character Creation**: Set your character’s name to personalize your adventure.
- **Dynamic Gameplay**: Customize and enhance the game with new features.
- **Exploration**: Discover mysterious locations and hidden surprises.
- **Stats Tracking**: View and manage your character’s health, level, and inventory.
- **Interactive Commands**: Use various commands to interact with the game world.
- **Colorful Gameplay**: Enhanced with chalk for a visually appealing experience in the terminal.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (comes with Node.js)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Link the game globally for easy access:
   ```bash
   npm link
   ```

   After linking, you can run the game with:
   ```bash
   rpg-game
   ```

---

## How to Play

1. Start the game:
   ```bash
   npm start
   ```
   Or, if linked globally:
   ```bash
   rpg-game
   ```

2. Enter your name when prompted.

3. Use the following commands to play:

   | Command   | Description                                      |
   |-----------|--------------------------------------------------|
   | `help`    | Displays a list of available commands.           |
   | `stats`   | Shows your current character stats.             |
   | `explore` | Explore the area for potential discoveries.      |
   | `quit`    | Exit the game.                                   |
   | `attack`    | Attack your enemy with a weapon.               |

4. Follow the prompts and enjoy your adventure!

---

## Game Mechanics

### **Player Stats**
Your character has the following attributes:
- **Name**: The name you assign during setup.
- **HP (Health Points)**: Indicates your character’s life.
- **Level**: Represents your progression in the game.

### **Dynamic Enemies** (Planned Feature)
- Design and implement your own enemy types.
- Add unique attributes such as health, damage, and rewards.
- Engage in battles to earn experience and treasures.

### **Battle System** (Planned Feature)
- Create custom battle logic using the `attack` command.
- Add interactive enemy behavior and attack counters.

---

## Example Gameplay

```plaintext
Welcome to the RPG CLI Game!
Let's start by entering your name.

> Enter your name: Alex
Hello, Alex! Your adventure begins now.

> help
Available commands: help, stats, explore, quit

> stats
Player Stats:
Name: Alex
HP: 100
Level: 1

> explore
You explore the area and find nothing... for now.

> attack
You swing your weapon and deal 10 damage.

> quit
Quitting the game.
Game Over! Thanks for playing.
```

---

## Contributing

This project is intentionally minimalistic to encourage contributions. We welcome:

1. **Adding Enemies**: Implement creative enemy types with unique behaviors.
2. **Expanding Commands**: Add new commands to enhance gameplay.
3. **Refining the Battle System**: Introduce dynamic combat mechanics.
4. **Improving Exploration**: Create interactive exploration scenarios.

### Steps to Contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b My-RPG/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature to My-RPG"
   ```
4. Push to the branch:
   ```bash
   git push origin My-RPG/new-feature
   ```
5. Open a pull request.

---

## Roadmap

Planned features for future updates:
- **Enhanced Enemy System**: Add diverse enemy types with unique abilities.
- **Inventory System**: Equip weapons, armor, and consumables.
- **Save/Load Game**: Introduce save and load functionality.
- **Random Events**: Incorporate dynamic events during exploration.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Chalk**: For making the terminal output colorful and engaging.
- **Node.js**: For powering the backend of this game.
- Everyone who contributes to making this project better!

---

Enjoy your adventure and start contributing!


