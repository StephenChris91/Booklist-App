//window.onload = init;

function init() {
    const button = document.querySelector('#button').addEventListener('click', logger);
    //logger();
};

function logger(e) {
    //let targ = e.target;
    //console.log(targ);
    alert('This actually worked');
};
setTimeout(init, 5000);
let tick = true;
if (tick) {
    console.log('Tick');
    tick = false;
} else {
    console.log('Tock');
    tick = true;
}
clearInterval(setInterval(tick, 1000));

function drag() {
    const img = document.querySelector('.images');
    img.addEventListener('onmouseover', dragger)
    const dragger = function(img) {
        return img.style = "margin-top: 80px";
    }
    dragger()
};

drag();


drag()

// function declaration
function sayName() { //this is run first and stashed away before code runs
    const name = "Stephen Chris";
    console.log(name);
};

sayName();

//function expression 
const surname = function() { // this only runs at runtime
    const sname = 'Ogbonna Okechukwu';
    console.log(sname);
};
surname();

function cookFood() {
    return setTimeout(function() {
        console.log('the fire is actually on!')
    }, 2000);
};
cookFood();

function giveDose() {
    return setTimeout(function(dosage) {
        if (dosage > 0) {
            console.log('i gave the patient 4 doses of injection')
        }
    }, 3000);
}
console.log(giveDose('stephen'));


let secret = '007';

function getSecret() {
    secret = '008';

    function getValue() {

        return getValue;

    }
    return secret

};


console.log(getSecret());
//const ready = cookFood();
//setTimeout(ready, 3000);
//ready();

// passenger test

const passengers = [{ name: "Stephen Chris", paid: true },
    { name: "Stephen Chris", paid: true },
    { name: "Stephen Chris", paid: true },
    { name: "Stephen Chris", paid: true }
];

function checkNoFlyList(passenger, checkNoFlyList) {
    const checkNoFlyList = ['Dr, Evel', 'Stephen Chris'];
    for (let i = 0; i < passenger.length; i++) {
        for (let j = 0; j < checkNoFlyList.length; j++) {
            if (passenger[i] === checkNoFlyList[j]) {
                return false;
            } else {
                return true;
            }
        }
    };

};

function checkNotPaid(passenger) {
    for (let i = 0; i < passenger.length; i++) {
        if (!passenger[i].paid) {
            return false;
        }
        return true;
    }
}
// console.log(checkNoFlyList);
// console.log(checkNotPaid);