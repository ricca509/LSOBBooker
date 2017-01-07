import { getAvailability } from '../lsobDataFetcher.js';

const availabilityHandler = async (req, res) => {
  const { eventId } = req.params;

  if (!eventId) { return res.status(500).json({ error: 'No service ID provided' }) }
  const availability = await getAvailability(eventId);
  res.json(availability);
}

export default availabilityHandler;
