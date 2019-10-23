const should = require("chai").should();
const expect = require("chai").expect;
const supertest = require("supertest");
const api = supertest("http://localhost:3000");

/// TESTING

//////////////////////////////////////////////////////
/// tests for crud functions
// cd into db in terminal and node cakeseed.js
//  each time before running tests to reset db data to original.
/// then check id's cause the flippin change each time you re-seed
//////////////////////////////////////////////////////

/// checking r of crud - read
///router.get
//  deep r of crud - read with attributes

// describe("GET /titles/:title", () => {
//     it("should return a dessert by name (title) with correct fields", done => {
//         api
//             .get("/titles/EZ-Brownies")
//             .set("Accept", "application/json")
//             .end((error, response) => {
//                 console.log(response.body.length);
//                 expect(response.body).to.have.property("_id");
//                 expect(response.body).to.have.property("title");
//                 expect(response.body).to.have.property("category");
//                 expect(response.body).to.have.property("description");
//                 done();
//             });
//     });
// });

//// checking c of crud - create - we have 14 files in our seed data - 2 per category
///router.post - works fine

// describe("POST / make a new one check check", () => {
//     before(done => {
//         api
//             .post("/create")
//             .set("Accept", "application/json")
//             .send({
//                 title: "Test-dessert-name",
//                 category: "Brownies",
//                 description: "Test-Brownies-testing",
//                 items: ["test test", "1 egg", "water", "oil"],
//                 steps: ["1. Preheat oven to 350", "2. test test 123 test"],
//                 image: "https://celebratingsweets.com/wp-content/uploads/2014/10/Homemade-Brownies-2.jpg",
//             })
//             .end(done);
//     });

//     it("should add a dessert object to the dessert db and return it", done => {
//         api
//             .get("/")
//             .set("Accept", "application/json")
//             .end((error, response) => {
//                 console.log(response.body.length);
//                 expect(response.body.length).to.equal(15);
//                 /// 15 is one more than seed data - works after node to reseed db/cakeseed.js
//                 done();
//             });
//     });
// });

/// can we get the new one we make - yes we can

// describe("GET /titles/:title", () => {
//     it("should return our new dessert by name (title) with all fields", done => {
//         api
//             .get("/titles/Test-dessert-name")
//             .set("Accept", "application/json")
//             .end((error, response) => {
//                 console.log(response.body);
//                 expect(response.body).to.have.property("_id");
//                 expect(response.body).to.have.property("title");
//                 expect(response.body).to.have.property("category");
//                 expect(response.body).to.have.property("description");
//                 expect(response.body).to.have.property("items");
//                 expect(response.body).to.have.property("steps");
//                 expect(response.body).to.have.property("image");
//                 done();
//             });
//     });
// });

///checking u of crud  - update
///router.put

/// checking d of crud - delete it ... omg that 📷 is sooo baddd deelllete iiitttttt !!
//router.delete by title

///
//   { items: [ 'brownie mix box', '1 egg', 'water', 'oil' ],
//   steps: [ '1. Preheat oven to 350', '2. follow box directions' ],
//   _id: '5daf2748aaeb3854dcc24dd8',
//   title: 'EZ-Brownies',
//   category: 'Brownies',
//   description: 'Brownies',
//   image: 'https://celebratingsweets.com/wp-content/uploads/2014/10/Homemade-Brownies-2.jpg',
//   __v: 0 }
//

// describe("DELETE /titles/:title", () => {
//     before(done => {
//         api
//             .delete("/titles/EZ-Brownies")
//             .set("Accept", "application/json")
//             .end(done);
//     });
//     it("should remove the brownie object from the dessert db ", done => {
//         api
//             .get("/")
//             .set("Accept", "application/json")
//             .end((error, response) => {
//                 expect(response.body.length).to.equal(14);
//                 // one less than above with add - change to 13 if create test commented out
//                 done();
//             });
//     });
// });

//// check get by category return 2 pies since only 2 in seed data

describe("GET /categories/:category", () => {
    it("should return our pie desserts length which is 2", done => {
        api
            .get("/categories/Pies")
            .set("Accept", "application/json")
            .end((error, response) => {
                console.log("check here for pie length");
                console.log(response.body.length);
                expect(response.body.length).to.equal(2);
                done();
            });
    });
});

// "_id": "5db0b4559e47abb20a5b453d",
// "title": "Paula Dean Pound Cake",
// "category": "Cakes",



///// test new routes
// show by ID - works via local host in chrome - 
//but gives 2000 ms timeout error when testing ...
/// when reseediong to remove the created one - new id's made by mongo / mongoose - 
///how to do by specific id since generated each time
/// stop reseeding and comment out create - it works - 


describe("GET /dessert/:id", () => {
    it("should return paula pound cake by id in case of same titles", done => {
        api
            .get("/dessert/5db0b4559e47abb20a5b453d")
            .set("Accept", "application/json")
            .end((error, response) => {
                console.log(response.body.title);
                expect(response.body).to.have.property("title");
                expect(response.body).to.have.property("category");
                expect(response.body).to.have.property("description");
                done();
            });
    });
});


// "_id": "5db0b09c97cbd7b17e7d03e9", - was working 
// "title": "Whipped Pie",
// "category": "Pies",
// "description": "great for faces and clowns",

// "_id": "5db0b4559e47abb20a5b453f", - current id - copying from local host json file
// "title": "Whipped Pie",
// "category": "Pies",



describe("GET /dessert/:id", () => {
    it("should return whip pie  by id in case of same titles", done => {
        api
            .get("/dessert/5db0b4559e47abb20a5b453f")
            .set("Accept", "application/json")
            .end((error, response) => {
                console.log(response.body.title);
                expect(response.body).to.have.property("title");
                expect(response.body).to.have.property("category");
                expect(response.body).to.have.property("description");
                done();
            });
    });
});



// delete by id
/// ids change when re-seed db - this should work thius time


// "_id": "5db0b4559e47abb20a5b4543",
// "title": "chocChip",
// "category": "Cookies",

describe("DELETE by flippin /:id", () => {
    before(done => {
        api
            .delete("/5db0b4559e47abb20a5b4543")
            .set("Accept", "application/json")
            .end(done);
    });
    it("should remove the old cookie object by id =( 5db0b4559e47abb20a5b4543 ) from the dessert db ", done => {
        api
            .get("/")
            .set("Accept", "application/json")
            .end((error, response) => {
                console.log(response.body.length);
                expect(response.body.length).to.equal(13);
                // one less than above with add - change to 13 if create test commented out
                done();
            });
    });
});