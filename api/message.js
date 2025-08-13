import messages from "./_store";

export default function handler(req, res) {
    res.status(200).json(messages);
}
