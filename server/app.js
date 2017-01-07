import express from 'express';
import availabilityHandler from './handlers/availability';

const app = express();

const PORT = process.env.PORT || 3001;

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/availability/:eventId', availabilityHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`)
});
