DROP TABLE IF EXISTS video_games;
DROP TABLE IF EXISTS game_console;

CREATE TABLE video_games (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    genre TEXT,
    rating SMALLINT
);

CREATE TABLE game_console (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    console_company TEXT
);