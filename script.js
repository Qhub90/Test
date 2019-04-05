const fs = require('fs');

fs.readFile("./hello.txt", (err, data) => {
    if (err) {
        throw err
    }
    console.log(data.toString())    
})

// APPEND

// fs.appendFile("./hello.txt", " We are just testing", err => {
//     if(err) {
//         throw err
//     }
// })

// WRITE
// fs.writeFile("bye.txt", "Sad to ssee you go", err => {
//     if (err){
//         console.log(err);
        
//     }
// })

// DELETE
fs.unlink("./bye.txt", err => {
    if (err) {
        console.log(err);
        
    }
    console.log('Inception');
})