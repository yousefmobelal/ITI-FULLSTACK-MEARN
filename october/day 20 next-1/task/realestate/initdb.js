import sql from "better-sqlite3";
const db = sql("statistics.db");

const dummyStatistics = [
  {
    title: "Happy Customers",
    value: 200,
  },
  {
    title: "Properties For Clients",
    value: 10000,
  },
  {
    title: "Years of Experience",
    value: 16,
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS statistics (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       title TEXT NOT NULL UNIQUE,
       value INTEGER NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO statistics VALUES (
         null,
         @title,
         @value
      )
   `);

  for (const statistc of dummyStatistics) {
    stmt.run(statistc);
  }
}

initData();
