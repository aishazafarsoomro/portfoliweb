export default async function handler(req, res) {
 /* if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body ?? {};
  if (!name || !email) {
    return res.status(400).json({ error: "name and email required" });
  }

  // Example: store or send email here.
  // For now we simulate async work (in real use: send via SMTP / third-party API)
  await new Promise((r) => setTimeout(r, 400));

  return res.status(200).json({ ok: true, received: { name, email } });*/
}
