import clientPromise from "../../lib/mongodb";
import { ObjectID } from "mongodb";

/**
 * This function marks the given order for the given user as delivered and moves it from current to past orders.
 * @param {*} req : request
 * @param {*} res : response
 */
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.DB);
  const id = req.body.id;
  const email = req.body.email;
  const objectID = new ObjectID(id);
  const deletedOrder = await db
    .collection(`${email + "-current-orders"}`)
    .findOneAndDelete({ _id: objectID });
  const pastOrder = await db
    .collection(`${email + "-past-orders"}`)
    .insertOne(await deletedOrder.value);
  res.json(await pastOrder);
}
