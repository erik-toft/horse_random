const formEl = document.querySelector("#form");
const inputQuantityOneEl = document.querySelector("#inputQuantityOne");
const inputQuantityTwoEl = document.querySelector("#inputQuantityTwo")
const inputQuantityThreeEl = document.querySelector("#inputQuantityThree")
const inputQuantityFourEl = document.querySelector("#inputQuantityFour")
const inputQuantityFiveEl = document.querySelector("#inputQuantityFive")
const inputQuantitySixEl = document.querySelector("#inputQuantitySix")
const inputQuantitySevenEl = document.querySelector("#inputQuantitySeven")
const inputQuantity86El = document.querySelector("#inputQuantity86");
const inputNailEl = document.querySelector("#inputNail");
const renderSystemEl = document.querySelector("#renderSystem");

const totalRaces = [1, 2, 3, 4, 5, 6, 7];
const numberOfHorses = [2, 3, 4, 5];

const shuffleIndex = [...totalRaces]


let firstRace = [];
let secondRace = [];
let thirdRace = [];
let fourthRace = [];
let fifthRace = [];
let sixthRace = [];
let seventhRace = [];
let eightysixRace = [];

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const one = inputQuantityOneEl.value;
    const two = inputQuantityTwoEl.value;
    const three = inputQuantityThreeEl.value;
    const four = inputQuantityFourEl.value;
    const five = inputQuantityFiveEl.value;
    const six = inputQuantitySixEl.value;
    const seven = inputQuantitySevenEl.value;
    const eightysix = inputQuantity86El.value;

    if(eightysix !== undefined) {
        for(let i = 1; i <= eightysix; i++){
            eightysixRace.push(i);
        }
    }

    spreadNumbers(one, 1);
    spreadNumbers(two, 2);
    spreadNumbers(three, 3);
    spreadNumbers(four, 4);
    spreadNumbers(five, 5);
    spreadNumbers(six, 6);
    spreadNumbers(seven, 7);

});

const generateSystem = () => {
    
    //gör om till en funktion
    firstRace = getHorses(firstRace, 1);
    secondRace = getHorses(secondRace, 2);
    thirdRace =getHorses(thirdRace, 3);
    fourthRace = getHorses(fourthRace, 4);
    fifthRace = getHorses(fifthRace, 5);
    sixthRace = getHorses(sixthRace, 6);
    seventhRace =getHorses(seventhRace, 7);
    eightysixRace = getHorses(eightysixRace, 0);

    // const firstSpread = [...firstRace];
    // shuffleArray(firstSpread);
    // firstRace = firstSpread.splice(0, 6);
    // randomNumberOfHorses(firstRace);
    // findNails(firstRace, 1);

    // const secondSpread = [...secondRace];
    // shuffleArray(secondSpread);
    // secondRace = secondSpread.splice(0, 6);
    // randomNumberOfHorses(secondRace);
    // findNails(secondRace, 2);

    // const thirdSpread = [...thirdRace];
    // shuffleArray(thirdSpread);
    // thirdRace = thirdSpread.splice(0, 6);
    // randomNumberOfHorses(thirdRace);
    // findNails(thirdRace, 3);

    // const fourthSpread = [...fourthRace];
    // shuffleArray(fourthSpread);
    // fourthRace = fourthSpread.splice(0, 6);
    // randomNumberOfHorses(fourthRace);
    // findNails(fourthRace, 4);    

    // const fifthSpread = [...fifthRace];
    // shuffleArray(fifthSpread);
    // fifthRace = fifthSpread.splice(0, 6);
    // randomNumberOfHorses(fifthRace); 
    // findNails(fifthRace, 5);

    // const sixthSpread = [...sixthRace];
    // shuffleArray(sixthSpread);
    // sixthRace = sixthSpread.splice(0, 6);
    // randomNumberOfHorses(sixthRace); 
    // findNails(sixthRace, 6);

    // const seventhSpread = [...seventhRace];
    // shuffleArray(seventhSpread);
    // seventhRace = seventhSpread.splice(0, 6);
    // randomNumberOfHorses(seventhRace);
    // findNails(seventhRace, 7) 

    // const eightysixSpread = [...eightysixRace];
    // shuffleArray(eightysixSpread);
    // eightysixRace = eightysixSpread.splice(0, 6);
    // randomNumberOfHorses(eightysixRace);

    renderSystem();
}


const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

shuffleArray(shuffleIndex);

const renderSystem = () => {
    formEl.innerHTML = "";
    if(eightysixRace.length === 0) {
        renderSystemEl.innerHTML = `
        <div class="container mt-3">
            <div class="container">
                <h2 class="mb-4">ditt_<span class="v75-system">v75</span>_system:</h2>
                <div class="border mx-auto">
                    <div class="container ms-3 mt-3">
                        <p class="text-warning">lopp_1: <span class="p-3 text-light">${firstRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_2: <span class="p-3 text-light">${secondRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_3: <span class="p-3 text-light">${thirdRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_4: <span class="p-3 text-light">${fourthRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_5: <span class="p-3 text-light">${fifthRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_6: <span class="p-3 text-light">${sixthRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_7: <span class="p-3 text-light">${seventhRace.join(', ')}</span></p>
                    </div>
                </div>
            </div>
        </div>    
        <div class="text-center mt-4">
            <button type="submit" id="restart" class="btn btn-success text-center">tillbaka_</button>
        </div>
        <div class="container text-center mt-3 mb-5">
            <p>horse_random&copy 2024</p>
        </div>
        `
    } else {
        renderSystemEl.innerHTML = `
        <div class="container mt-3">
            <div class="container">
                <h2 class="mb-4">ditt_<span class="v86-system">v86</span>_system:</h2>
                <div class="border mx-auto">
                    <div class="container ms-3 mt-3">
                        <p class="text-warning">lopp_1: <span class="p-3 text-light">${firstRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_2: <span class="p-3 text-light">${secondRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_3: <span class="p-3 text-light">${thirdRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_4: <span class="p-3 text-light">${fourthRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_5: <span class="p-3 text-light">${fifthRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_6: <span class="p-3 text-light">${sixthRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_7: <span class="p-3 text-light">${seventhRace.join(', ')}</span></p>
                        <p class="text-warning">lopp_8: <span class="p-3 text-light">${eightysixRace.join(', ')}</span></p>
                    </div>
                </div>
            </div>
        </div>    
        <div class="text-center mt-4">
            <button type="submit" id="restart" class="btn btn-success text-center">tillbaka_</button>
        </div>
        <div class="container text-center mt-3 mb-5">
            <p>horse_random&copy 2024</p>
        </div>
        `
    }
   again();
}
const spreadNumbers = (num, raceNum) => {
    for(let i = 1; i <= num; i++){
        if(raceNum === 1) {
            firstRace.push(i);
        } else if (raceNum === 2) {
            secondRace.push(i);
        } else if (raceNum === 3) {
            thirdRace.push(i);
        } else if (raceNum === 4) {
            fourthRace.push(i);
        } else if (raceNum === 5) {
            fifthRace.push(i);
        } else if (raceNum === 6) {
            sixthRace.push(i);
        } else if (raceNum === 7) {
            seventhRace.push(i);
            if(i >= num){
                generateSystem();
            }
        }
    }
}

const randomNumberOfHorses = (arr) => {
    const roll = [...numberOfHorses];
    shuffleArray(roll);
    if(roll[0] === 2) {
        arr = arr.splice(0, 4);
        return arr;
    } else if(roll[0] === 3) {
        arr.splice(0, 3);
        return arr;
    } else if(roll[0] === 4) {
        arr.splice(0, 2);
        return;
    } else if(roll[0] === 5) {
        arr.pop();
        return;
    }
    
}

const getHorses = (arr, num) => {
    const spread = [...arr];
    shuffleArray(spread);
    arr = spread.splice(0, 6);
    randomNumberOfHorses(arr);
    if(num !== 0) {
        findNails(arr, num);
    }
    return arr; 
}

const findNails = (arr, num) => { 
    const inputNails = inputNailEl.value;
    const nails = shuffleIndex.slice(0, inputNails); 
    if(nails.includes(num)){
        while( arr.length > 1) {
            arr.pop();
        }
    } 
}



const again = () => {
    const restartEl = document.querySelector("#restart");
    restartEl.addEventListener("click", () => {
        window.location.reload();
    });
}