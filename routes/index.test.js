const request = require("supertest");
const app = require("../app");

describe("Index file", () => {
  it("should return a 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({message: 'ok'})
  });

  it("should check password lenght 8", async () => {
    const res = await request(app).post("/").send({
      'password': 'Mike'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({status:false,message: "Password must be at least 8 characters"})
  });

  it("password should have atleast 2 digits", async () => {
    const res = await request(app).post("/").send({
      'password': 'MikeTyson'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({status:false,message: "The password must contain at least 2 numbers"})
  });

});
