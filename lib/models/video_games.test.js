const fs = require('fs');
const Game = require('./video_games');
const pool = require('../utils/pool');

describe('Game model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('should add new video game into the database', async() => {
    const newVideoGame = await Game.insert({
      name: 'Call of Duty',
      genre: 'Shooter',
      rating: 5
    });

    const { rows } = await pool.query('SELECT * FROM video_games WHERE id=$1', [newVideoGame.id]);

    expect(rows[0]).toEqual({
      id: newVideoGame.id,
      name: 'Call of Duty',
      genre: 'Shooter',
      rating: 5
    });
  });
});
