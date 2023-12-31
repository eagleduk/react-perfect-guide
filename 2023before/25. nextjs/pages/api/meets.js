export const data = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    title: "meefffts11",
    address: "address1",
    description: "descriptions11112121",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    title: "meets2",
    address: "address2",
    description: "descriptions11112121",
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ data });
  } else if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    return res.status(201).json({ message: "Create New Meet" });
  }
}
