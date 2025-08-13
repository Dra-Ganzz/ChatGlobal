import messages from "./_store";

export default function handler(req, res) {
    if (req.method === "POST") {
        const { name, text } = req.body;
        if (!name || !text) {
            return res.status(400).json({ error: "Name and text required" });
        }
        messages.push({ name, text });
        return res.status(200).json({ success: true });
    }
    res.status(405).json({ error: "Method not allowed" });
}
