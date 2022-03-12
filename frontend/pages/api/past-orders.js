import clientPromise from "../../lib/mongodb";

/**
 * API call to get & post past-orders for the current user.
 * @param {*} req : request
 * @param {*} res : response
 */
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.DB);
  switch (req.method) {
    case "POST":
      const bodyObject = JSON.parse(req.body);
      const newPost = await db.collection("past-orders").insertOne(bodyObject);
      res.json(newPost.ops[0]);
      break;
    case "GET":
      const orders = await db.collection("past-orders").find({}).toArray();
      res.json(orders);
      break;
  }
}
