import clientPromise from "../../lib/mongodb";
import { ObjectID } from "mongodb";

/**
 * API call to get a specific order details.
 * @param {*} req : request with body of _id to fetch from db
 * @param {*} res : response to send info from db
 */
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.DB);
  const id = req.body.id;
  const email = req.body.email;
  const objectID = new ObjectID(id);
  const orders = await db.collection(email).findOne(objectID);
  res.json(await orders);
}
