import clientPromise from "../../lib/mongodb";
import { getSession } from "next-auth/react";

/**
 * API call to get & post current-orders for the current user.
 * @param {*} req : request
 * @param {*} res : response
 */
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.DB);
  const session = await getSession({ req });
  const bodyObject = JSON.parse(req.body);
  const newPost = await db
    .collection(`${session.user.email + "-current-orders"}`)
    .insertOne(bodyObject);
  res.json(newPost.ops[0]);
}
