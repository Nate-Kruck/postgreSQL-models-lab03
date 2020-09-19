const pool = require('../utils/pool');

class Game {
    name;
    genre;
    rating;

    constructor(game) {
      this.id = game.id;
      this.name = game.name;
      this.genre = game.genre;
      this.rating = game.rating;
    }

    static async insert(video_game) {
      const { rows } = await pool.query(
        'INSERT INTO video_games (name, genre, rating) VALUES ($1, $2, $3) RETURNING *',
        [video_game.name, video_game.genre, video_game.rating]
      );

      return new Game(rows[0]);
    }
}

module.exports = Game;
