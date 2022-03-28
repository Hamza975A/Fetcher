import clientPromise from "../../lib/mongodb";
import { ObjectID } from "mongodb";

/**
 * This function marks the given order for the given user as delivered and moves it from current to past orders.
 * Also sends an email confirmation to the user.
 * @param {*} req : request
 * @param {*} res : response
 */
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.DB);
  const id = req.body.id;
  const email = req.body.email;
  const objectID = new ObjectID(id);

  // delete the order and save it temporarily
  const deletedOrder = await db
    .collection(`${email + "-current-orders"}`)
    .findOneAndDelete({ _id: objectID });

  // send delivery email
  const userInfo = {
    name: await deletedOrder.value.users.user.name,
    email: await deletedOrder.value.users.user.email,
    orderNumber: await deletedOrder.value.orderNumber,
  };
  await fetch(
    `${process.env.URL_START}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/delivery-confirmation`,
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

  // add delivered timestamp
  const time = new Date().toLocaleString("en-US", {
    timeZone: "America/Regina",
  });
  deletedOrder.value["timestampDelivered"] = time.toString();

  // put the recently deleted order to past-orders collection
  const pastOrder = await db
    .collection(`${email + "-past-orders"}`)
    .insertOne(await deletedOrder.value);
  res.json(await pastOrder);
}
