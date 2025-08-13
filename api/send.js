let messages = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    // Ambil semua pesan
    res.status(200).json(messages);
  }
  else if (req.method === "POST") {
    // Simpan pesan baru
    const { name, text } = req.body;
    if (!name || !text) {
      return res.status(400).json({ error: "Name and text are required" });
    }
    messages.push({ name, text });
    res.status(200).json({ success: true });
  }
  else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
