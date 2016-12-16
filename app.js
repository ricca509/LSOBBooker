import { getAvailability } from './lsobDataFetcher.js';
import express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/availability', async (req, res) => {
  const availability = await getAvailability();
  res.json(availability.map(av => ({
      date: av.date.format('MMMM Do YYYY'),
      availability: av.availability
    })));  

});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`)
});
