const pool = require('../utils/pool');

class gameConsole {
    id;
    name;
    console_company;


    constructor(game_console) {
      this.id = game_console.id;
      this.name = game_console.name;
      this.console_company = game_console.console_company;
    }

    static async insert(game_console){
      const { rows } = await pool.query(
        'INSERT INTO game_console (name, console_company) VALUES($1, $2) RETURNING *', [game_console.name, game_console.console_company]
      );

      return rows[0];
    }
}

module.exports = gameConsole;