import express from "express";

const app = express();

app.use(express.json({ limit: "1mb" }));

app.get("/", (_req, res) => {
  res.json({
    app: "MiChat",
    version: "0.7-beta",
    status: "online",
    message: "Servidor de prueba MiChat funcionando"
  });
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/pin/check", (req, res) => {
  const pin = String(req.body?.pin ?? "").trim();

  res.json({
    valid: /^[A-Za-z0-9]{6}$/.test(pin)
  });
});

const port = process.env.PORT || 10000;

app.listen(port, "0.0.0.0", () => {
  console.log(`MiChat server listening on port ${port}`);
});
