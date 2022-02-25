// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * Default API route provided by Next.js.
 * @param {*} req
 * @param {*} res
 */
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
