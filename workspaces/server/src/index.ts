import { APP_TITLE } from "@scribbr-assessment-full-stack/common";
import express from "express";
import { join } from "path";

const PORT = 3000;

const app = express();

// Serve static resources from the "public" folder (ex: when there are images to display)
app.use(express.static(join(__dirname, "../../client/public")));

// Serve the HTML page
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../../client/public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`${APP_TITLE}'s server listening at http://localhost:${PORT}`);
});
