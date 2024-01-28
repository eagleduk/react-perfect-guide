import { data } from "../meets";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { meetupId } = req.query;
    const meet = data.filter((d) => d.id === meetupId);
    return res.status(200).json({ data: meet });
  }
}
