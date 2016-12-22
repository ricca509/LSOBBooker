import { getAvailability } from './lsobDataFetcher.js';
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3001;

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/availability', async (req, res) => {
  const availability = await getAvailability();
  res.json(availability);
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`)
});
