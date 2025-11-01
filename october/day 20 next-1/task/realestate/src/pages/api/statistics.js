import sql from "better-sqlite3";

export default async function handler(req, res) {
  try {
    const db = sql("statistics.db");
    // .all for fetching data
    // .run for inserting data
    const data = db.prepare("SELECT * FROM statistics").all();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to load statistics" });
  }
}
