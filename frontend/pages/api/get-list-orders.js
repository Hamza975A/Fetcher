import clientPromise from "../../lib/mongodb";

/**
 * API call to get & post current-orders for the current user.
 * @param {*} req : request
 * @param {*} res : response
 */
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.DB);
  const email = req.body.email;
  const orders = await db.collection(email).find({}).toArray();
  res.json(await orders);
}
