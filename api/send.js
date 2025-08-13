import { messages } from './messages.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'POST') {
    const { name, text } = req.body;
    if (name && text) {
      messages.push({ name, text });
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ error: 'Nama dan pesan wajib diisi' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
