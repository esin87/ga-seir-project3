const Cakes = require('');
const cake = require('');


// clear the database of all cheerups insert original seeds


Cakes.deleteMany({})
    .then(() => {
        console.log('old cheers gone sir');
        return Cakes.insertMany(cake);
        // create cheerup files from seeds
    })
    .then(() => {
        console.log(' ㋡ cake recpz 🎂 back to originals 💕');
        process.exit();
    });