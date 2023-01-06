// const mysql = require('mysql2');
// import { createConnection } from 'mysql2';
import mysql = require('mysql2/promise');

const connectToDB = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'moviesdb',
    password: 'MYS3CR3TP4SS',
    // host: process.env.DB_HOST,
    // user: process.env.DB_USERNAME,
    // database: process.env.DB_NAME,
    // password: process.env.DB_PASSWORD,
  });
  return connection;
};

const Seed = () => {
  const seed = [
    {
      title: 'Toy Story',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Toy Story 2',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Toy Story 3',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Toy Story 4',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Up',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Power Rangers',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'The Shawshank Redemption',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'The Godfather',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'The Godfather Part II',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'The Godfather Part III',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'The Dark Knight',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Angry Men',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Pulp Fiction',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Forrest Gump',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Fight Club',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'The Matrix',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Se7en',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Seven Samurai',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Inception',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'Interestellar',
      review: 'Greate movie',
      score: 4,
    },
    {
      title: 'GoodFellas',
      review: 'Greate movie',
      score: 4,
    },
  ];

  return seed;
};

const insertToDB = async () => {
  const connection = await connectToDB();
  const seed = Seed();
  seed.forEach(async (element) => {
    const { title, review, score } = element;
    await connection.execute(
      `INSERT INTO movies (title, review, score) VALUES ('${title}', '${review}', ${score} )`,
    );
  });
  connection.end();
};

const main = async () => {
  await insertToDB();
  setTimeout(() => {
    console.log('Seed ran succesfully');
    process.exit(0);
  }, 500);
};

main();
