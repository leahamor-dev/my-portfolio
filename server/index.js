const express = require('express');
const { connectToDb, getDb } = require('./db');
const cors = require('cors');
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
let db;

app.use(cors(corsOptions));

connectToDb((err) => {
  if (!err) {
    app.listen(5000, () => {
      console.log('app listening on port 5000');
    });

    db = getDb();
  }
});

app.get('/data', async (req, res) => {
  const collections = [
    'certifications',
    'education',
    'experiences',
    'languages',
    'projects',
    'skills',
  ];

  const result = await Promise.all(
    collections.map((dataType) => {
      let array = [];
      return db
        .collection(dataType)
        .find()
        .sort()
        .forEach((data) => {
          array.push(data);
        })
        .then(() => {
          return { [dataType]: array };
        })
        .catch(() =>
          res.status(500).json({ error: `Cound not fetch ${dataType} data` })
        );
    })
  ).then((res) => {
    const result = res.reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});

    return result;
  });

  res.status(200).json({ data: result });
});
