const request = require("supertest");
const app = require("../app.js");

describe("Express server routes", () => {
  it("GET / should return 'hello world' and status 200", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("hello world");
  });

  it("GET /about should return a JSON object with status 200", async () => {
    const res = await request(app).get("/about");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "about page" });
  });

  it("GET / and /about together should both return 200", async () => {
    const [res1, res2] = await Promise.all([
      request(app).get("/"),
      request(app).get("/about"),
    ]);

    expect(res1.status).toBe(200);
    expect(res2.status).toBe(200);
  });
});
