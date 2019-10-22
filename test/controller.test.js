const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:3000");

/// TESTING
/// tests for crud functions

/// checking r of crud - read
///router.get

describe("Get /", () => {
    // it("Should be a page return 200 response", done => {
    // 	api
    // 		.get("/")
    // 		.set("Accept", "appliaction/json")
    // 		.end((error, response) => {
    // 			console.log(response.body);
    //             expect(response.body).to.be.an("array");
    //             done();
    // 		});
    // });

    it("should return an array of objects that position 0 has a field called 'url' ", done => {
        api
            .get("/")
            .set("Accept", "application/json", )
            .end((error, response) => {
                expect(response.body).to.have.property("url");
                done();
            });
    });
});

//  deep r of crud - read with attributes

describe("GET /titles/:title", () => {
    it("should return a dessert by name (title) with correct fields", done => {
        api
            .get("/titles/EZ-Brownies")
            .set("Accept", "application/json")
            .end((error, response) => {
                expect(response.body).to.have.property("_id");
                expect(response.body).to.have.property("title");
                expect(response.body).to.have.property("category");
                expect(response.body).to.have.property("description");
                done();
            });
    });
});

//// checking c of crud - create
///router.post

///checking u of crud  - update
///router.put

/// checking d of crud - delete it ... omg that 📷 is sooo baddd deelllete iiitttttt !!
//router.delete

// describe("DELETE /:id", () => {
//     before(done => {
//         api
//           .delete("/candies/:1")
//           .set("Accept", "application/json")
//           .end(done)
//       });
//       it("should remove a candy object from the collection candies ", done => {
//         api
//           .get("/candies")
//           .set("Accept", "application/json")
//           .end((error, response) => {
//             expect(response.body.length).to.equal(3);
//             done()
//           });
//       });
// });