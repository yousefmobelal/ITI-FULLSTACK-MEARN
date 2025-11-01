let request = require("request");
describe("test server", () => {
    let server;
    let data = {}
    beforeAll((done) => {
        server = require("../app.js");
        request.get("http://localhost:2000", (err, res, body) => {
            data.status = res.statusCode;
            data.body = body
            done()
        })
    })
    afterAll(()=>{
        server.close()
    })

    it("test status code",()=>{
        expect(data.status).toEqual(200)
    })
})