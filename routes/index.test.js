const request = require("supertest");
const app = require("../app");

describe("Index file", () => {
  it("should return a 200", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({message: 'ok'})
  });

  it("The password is not 8 characters long", async () => {
    const res = await request(app).post("/validate-password").send({password: 'John$12'});
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('Password must be at least 8 characters')
  });

  it("The password must contain at least 2 numbers", async () => {
    const res = await request(app).post("/validate-password").send({password: 'Johnaarav!1'});
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('Password must contain at least 2 numbers')
  });

  it("The password is not 8 characters long and does not contain at least 2 numbers", async () => {
    const res = await request(app).post("/validate-password").send({password: 'John#1'});
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('Password must be at least 8 characters\nPassword must contain at least 2 numbers')
  });

  it("The password must contain at least one capital letter", async () => {
    const res = await request(app).post("/validate-password").send({password: 'john@12doe'});
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('Password must contain at least one capital letter')
  });
  
  it("The password must contain at least one special character", async () => {
    const res = await request(app).post("/validate-password").send({password: 'John12doe'});
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toEqual('Password must contain at least one special character')
  });
  

});
