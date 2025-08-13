let messages = global.messages || [];
global.messages = messages;

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET') {
    return res.status(200).json(messages);
  }

  res.status(405).json({ error: 'Method not allowed' });
}
