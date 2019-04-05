const fs = require('fs');

// 1 - What floor does Santa end up on
// (--> goes up one floor
// )--> goes down one floor

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        
        const answer = directionsArray.reduce((acc, currentValue) =>{
            if (currentValue === "(") {
                return acc += 1;
            }else if (currentValue === ")") {
                return acc -= 1;
            }
        }, 0)
        console.timeEnd('santa-time');
        console.log('floor ',answer);
        
    })
}


question1();



// 2 - Where does santa first end up in the basement

function question2 () {
    fs.readFile('./santa.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        let counter = 0;
        let acc = 0;

        const answer = directionsArray.some((currentItem) =>{
            if (currentItem === "(") {
                 acc += 1;
            }else if (currentItem === ")") {
                 acc -= 1;
            }
            counter ++;
            return acc < 0
        })
        console.log('step ', counter);
        
    })
}

question2();
