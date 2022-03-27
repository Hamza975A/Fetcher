import clientPromise from "../../lib/mongodb";

/**
 * API call to get & post current-orders for the driver.
 * @param {*} req : request
 * @param {*} res : response
 */
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.DB);
  const allCollections = await db.listCollections().toArray();
  const orders = [];
  for (let i = 0; i < allCollections.length; i++) {
    if (allCollections[i].name.includes("current-orders"))
      orders.push(
        await db.collection(allCollections[i].name).find({}).toArray()
      );
  }

  const result = [];
  for (let i = 0; i < orders.length; i++) {
    for (let k = 0; k < orders[i].length; k++) {
      result.push(orders[i][k]);
    }
  }
  res.json(result);
}
