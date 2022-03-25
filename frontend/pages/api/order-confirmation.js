import mail from "@sendgrid/mail";
mail.setApiKey(process.env.SENDGRID_KEY);

export default (req, res) => {
  const message = `
        Hello ${req.body.name},\r\n
        We have successfully received your order at fetcher.live.\r\n
        Your order number is ${req.body.orderNumber}.
    `;

  const data = {
    to: req.body.email,
    from: "contact@fetcher.live",
    subject: "New Order - Fetcher",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "Ok" });
};
