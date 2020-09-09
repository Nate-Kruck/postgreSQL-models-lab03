const fs = require('fs');
const gameConsole = require('./game_console');
const pool = require('../utils/pool');

describe('gameConsole Class', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('should add new game console to the game_console table', async() => {
    const playstation = await gameConsole.insert({
      name: 'playstation',
      console_company: 'sony'
    });

    const { rows } = await pool.query('SELECT * FROM game_console WHERE id=$1', [playstation.id]);

    expect(rows[0]).toEqual({
      id: playstation.id,
      name: 'playstation',
      console_company: 'sony'
    });

  });
});
