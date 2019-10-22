const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');


/// TESTING
/// tests for crud functions


/// checking r of crud - read
///router.get




//// checking c of crud - create
///router.post




///checking u of crud  - update
///router.put





/// checking d of crud - delete it ... omg that 📷 is sooo baddd deelllete iiitttttt !!
//router.delete


// describe("DELETE /candies/:id", () => {
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