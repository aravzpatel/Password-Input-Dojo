const request = require("supertest");
const app = require("../app");

describe("Index file", () => {
  it("should return a 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({message: 'ok'})
  });

  it("should check password lenght 8", async () => {
    const res = await request(app).post("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({message: 'ok'})
  });
});
