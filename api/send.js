let messages = global.messages || [];
global.messages = messages;

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { user, text } = req.body;
    if (!user || !text) return res.status(400).json({ error: 'User & text wajib diisi' });

    messages.push({ user, text, time: Date.now() });
    return res.status(200).json({ success: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
      }
