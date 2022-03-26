import clientPromise from "../../lib/mongodb";
import { getSession } from "next-auth/react";

/**
 * API call to get & post current-orders for the current user.
 * @param {*} req : request
 * @param {*} res : response
 */
export default async function handler(req, res) {
  // setup db connection
  const client = await clientPromise;
  const db = client.db(process.env.DB);

  //  get user session
  const session = await getSession({ req });

  // add order number
  const bodyObject = JSON.parse(req.body);
  const counter = await db
    .collection("counters")
    .findOneAndUpdate(
      {},
      { $inc: { seq_value: 1 } },
      { returnNewDocument: true, upsert: true }
    );
  bodyObject["orderNumber"] = await counter.value.seq_value;
  bodyObject["users"] = session;

  // create new order in the DB
  const newPost = await db
    .collection(`${session.user.email + "-current-orders"}`)
    .insertOne(await bodyObject);

  // send email confirmation
  const userInfo = {
    name: session.user.name,
    email: session.user.email,
    orderNumber: await newPost.ops[0].orderNumber,
  };
  await fetch(
    `${process.env.URL_START}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/order-confirmation`,
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    }
  ).catch((error) => {
    console.error("Error:", error);
  });
  res.json(newPost.ops[0]);
}
