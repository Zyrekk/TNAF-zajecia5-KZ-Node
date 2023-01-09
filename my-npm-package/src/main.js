const cookieAccountText = document.querySelector('#cookieAccount');
const cookieButtonImage = document.querySelector('#cookieButton');
const cookiePerSecText = document.querySelector('#cookiesPerSecond');
const cookiePerClickText = document.querySelector('#cookiesPerClick');

const cookieUpgradeButton1Text = document.querySelector('#cookieUpgrade1');
const buttonUpgrade1 = document.querySelector('#button1');
const cookieUpgrade1Cost = document.querySelector('#cookieUpgrade1Cost');
const cookieUpgrade1PredictedValueText=document.querySelector('#cookieUpgrade1PredictedValue')

const cookieUpgradeButton2Text = document.querySelector('#cookieUpgrade2');
const buttonUpgrade2 = document.querySelector('#button2');
const cookieUpgrade2Cost = document.querySelector('#cookieUpgrade2Cost');
const cookieUpgrade2PredictedValueText=document.querySelector('#cookieUpgrade2PredictedValue')

const cookieUpgradeButton3Text = document.querySelector('#cookieUpgrade3');
const buttonUpgrade3 = document.querySelector('#button3');
const cookieUpgrade3Cost = document.querySelector('#cookieUpgrade3Cost');
const cookieUpgrade3PredictedValueText=document.querySelector('#cookieUpgrade3PredictedValue')

const cookieUpgradeButton4Text = document.querySelector('#cookieUpgrade4');
const buttonUpgrade4 = document.querySelector('#button4');
const cookieUpgrade4Cost = document.querySelector('#cookieUpgrade4Cost');
const cookieUpgrade4PredictedValueText=document.querySelector('#cookieUpgrade4PredictedValue')

const cookieUpgradeButton5Text = document.querySelector('#cookieUpgrade5');
const buttonUpgrade5 = document.querySelector('#button5');
const cookieUpgrade5Cost = document.querySelector('#cookieUpgrade5Cost');
const cookieUpgrade5PredictedValueText=document.querySelector('#cookieUpgrade5PredictedValue')

let cookieAccount = 0.0;
let cookiePerSecValue = 0.0;
let cookiePerClickValue = 1.0;
let upgradeArray = [0, 0, 0, 0, 0];
let perSecValues = [0, 0, 0, 0, 0];
let perClickValues = [0.0, 0.0, 0.0, 0.0, 0.0, 1.0];
let perSec = [0.1, 1, 5, 10, 100];
let costs = [10, 15, 1000, 5000, 100000];
buttonUpgrade2.style.backgroundColor = '#E83F6F';
cookieUpgrade1Cost.innerText = costs[0];
cookieUpgrade2Cost.innerText = costs[1];
cookieUpgrade3Cost.innerText = costs[2];
cookieUpgrade4Cost.innerText = costs[3];
cookieUpgrade5Cost.innerText = costs[4];
cookiePerClickText.innerText = cookiePerClickValue.toFixed(1);

function display() {
    cookieAccountText.innerText = cookieAccount.toFixed(1);
}

function cookieIteration() {
    cookieAccount += cookiePerClickValue;
}

function cookiePerSecAdding() {
    cookieAccount += cookiePerSecValue;
}

function setAvailable() {
    if (cookieAccount < costs.at(0)) {
        buttonUpgrade1.style.backgroundColor = '#E83F6F';
    } else {
        buttonUpgrade1.style.backgroundColor = '#7C7C7C';
    }
    if (cookieAccount < costs.at(1)) {
        buttonUpgrade2.style.backgroundColor = '#E83F6F';
    } else {
        buttonUpgrade2.style.backgroundColor = '#7C7C7C';
    }
    if (cookieAccount < costs.at(2)) {
        buttonUpgrade3.style.backgroundColor = '#E83F6F';
    } else {
        buttonUpgrade3.style.backgroundColor = '#7C7C7C';
    }
    if (cookieAccount < costs.at(3)) {
        buttonUpgrade4.style.backgroundColor = '#E83F6F';
    } else {
        buttonUpgrade4.style.backgroundColor = '#7C7C7C';
    }
    if (cookieAccount < costs.at(4)) {
        buttonUpgrade5.style.backgroundColor = '#E83F6F';
    } else {
        buttonUpgrade5.style.backgroundColor = '#7C7C7C';
    }
}

function setPerSecValue() {
    let sum = 0.0;
    for (i = 0; i < 5; i++) {
        sum += perSecValues[i];
    }
    cookiePerSecValue = parseFloat(sum.toFixed(2));
}

function setPerClickValue() {
    let sum = 0.0;
    for (i = 0; i < 6; i++) {
        sum += perClickValues[i];
    }
    cookiePerClickValue = parseFloat(sum.toFixed(2));
}

setInterval(function () {
    setAvailable();
    cookiePerSecAdding();
    display();
}, 1000);

setInterval(function () {
    setAvailable();
}, 10);

cookieButtonImage.addEventListener('click', () => {
    cookieIteration();
    display();
});

buttonUpgrade1.addEventListener('click', () => {
    if (cookieAccount >= costs.at(0)) {
        upgradeArray[0] += 1;
        perSecValues[0] += parseFloat(perSec[0].toFixed(2));
        perSecValues[0]=parseFloat(perSecValues[0].toFixed(2));
        perClickValues[0] = parseFloat((perSecValues[0] * 1.2).toFixed(2));
        setPerSecValue();
        setPerClickValue()
        cookieAccount -= costs.at(0);
        cookieUpgradeButton1Text.innerText = perSecValues[0];
        let cost = costs.at(0) + (0.3 * costs.at(0))
        costs[0] = parseFloat(cost.toFixed(1));
        cookieUpgrade1Cost.innerText = costs.at(0);
        cookiePerSecText.innerText = cookiePerSecValue;
        cookiePerClickText.innerText = cookiePerClickValue;
    }
});

buttonUpgrade1.addEventListener('mouseover',()=>{
    if(cookieAccount<costs.at(0)){
        buttonUpgrade1.style.backgroundColor='#E83F6F';
        buttonUpgrade1.style.transform='scale(100%)';
    }
    else{
        buttonUpgrade1.style.backgroundColor='#7C7C7C';
        buttonUpgrade1.style.transform='scale(110%)';
    }
})

buttonUpgrade1.addEventListener('mouseout',()=>{
    if(cookieAccount<costs.at(0)){
        buttonUpgrade1.style.backgroundColor='#E83F6F';
    }
    else{
        buttonUpgrade1.style.backgroundColor='#7C7C7C';
    }
    buttonUpgrade1.style.transform='scale(100%)';
})

buttonUpgrade2.addEventListener('click', () => {
    if (cookieAccount >= costs.at(1)) {
        upgradeArray[1] += 1;
        perSecValues[1] += parseFloat(perSec[1].toFixed(2));
        perSecValues[1]=parseFloat(perSecValues[1].toFixed(2));
        perClickValues[1] = parseFloat((perSecValues[1] * 1.2).toFixed(2));
        setPerSecValue();
        setPerClickValue()
        cookieAccount -= costs.at(1);
        cookieUpgradeButton2Text.innerText = perSecValues[1];
        let cost = costs.at(1) + (0.3 * costs.at(1))
        costs[1] = parseFloat(cost.toFixed(1));
        cookieUpgrade2Cost.innerText = costs.at(1);
        cookiePerSecText.innerText = cookiePerSecValue;
        cookiePerClickText.innerText = cookiePerClickValue;
    }
});

buttonUpgrade2.addEventListener('mouseover',()=>{
    if(cookieAccount<costs.at(1)){
        buttonUpgrade2.style.backgroundColor='#E83F6F';
        buttonUpgrade2.style.transform='scale(100%)';
    }
    else{
        buttonUpgrade2.style.backgroundColor='#7C7C7C';
        buttonUpgrade2.style.transform='scale(110%)';
    }
})

buttonUpgrade2.addEventListener('mouseout',()=>{
    if(cookieAccount<costs.at(1)){
        buttonUpgrade2.style.backgroundColor='#E83F6F';
    }
    else{
        buttonUpgrade2.style.backgroundColor='#7C7C7C';
    }
    buttonUpgrade2.style.transform='scale(100%)';
})

buttonUpgrade3.addEventListener('click', () => {
    if (cookieAccount >= costs.at(2)) {
        upgradeArray[2] += 1;
        perSecValues[2] += parseFloat(perSec[2].toFixed(2));
        perSecValues[2]=parseFloat(perSecValues[2].toFixed(2));
        perClickValues[2] = parseFloat((perSecValues[2] * 1.2).toFixed(2));
        setPerSecValue();
        setPerClickValue()
        cookieAccount -= costs.at(2);
        cookieUpgradeButton3Text.innerText = perSecValues[2];
        let cost = costs.at(2) + (0.3 * costs.at(2))
        costs[2] = parseFloat(cost.toFixed(1));
        cookieUpgrade3Cost.innerText = costs.at(2);
        cookiePerSecText.innerText = cookiePerSecValue;
        cookiePerClickText.innerText = cookiePerClickValue;
    }
});

buttonUpgrade3.addEventListener('mouseover',()=>{
    if(cookieAccount<costs.at(2)){
        buttonUpgrade3.style.backgroundColor='#E83F6F';
        buttonUpgrade3.style.transform='scale(100%)';
    }
    else{
        buttonUpgrade3.style.backgroundColor='#7C7C7C';
        buttonUpgrade3.style.transform='scale(110%)';
    }
})

buttonUpgrade3.addEventListener('mouseout',()=>{
    if(cookieAccount<costs.at(2)){
        buttonUpgrade3.style.backgroundColor='#E83F6F';
    }
    else{
        buttonUpgrade3.style.backgroundColor='#7C7C7C';
    }
    buttonUpgrade3.style.transform='scale(100%)';
})

buttonUpgrade4.addEventListener('click', () => {
    if (cookieAccount >= costs.at(3)) {
        upgradeArray[3] += 1;
        perSecValues[3] += parseFloat(perSec[3].toFixed(2));
        perSecValues[3]=parseFloat(perSecValues[3].toFixed(2));
        perClickValues[3] = parseFloat((perSecValues[3] * 1.2).toFixed(2));
        setPerSecValue();
        setPerClickValue()
        cookieAccount -= costs.at(3);
        cookieUpgradeButton4Text.innerText = perSecValues[3];
        let cost = costs.at(3) + (0.3 * costs.at(3))
        costs[3] = parseFloat(cost.toFixed(1));
        cookieUpgrade4Cost.innerText = costs.at(3);
        cookiePerSecText.innerText = cookiePerSecValue;
        cookiePerClickText.innerText = cookiePerClickValue;
    }
});

buttonUpgrade4.addEventListener('mouseover',()=>{
    if(cookieAccount<costs.at(3)){
        buttonUpgrade4.style.backgroundColor='#E83F6F';
        buttonUpgrade4.style.transform='scale(100%)';
    }
    else{
        buttonUpgrade4.style.backgroundColor='#7C7C7C';
        buttonUpgrade4.style.transform='scale(110%)';
    }
})

buttonUpgrade4.addEventListener('mouseout',()=>{
    if(cookieAccount<costs.at(3)){
        buttonUpgrade4.style.backgroundColor='#E83F6F';
    }
    else{
        buttonUpgrade4.style.backgroundColor='#7C7C7C';
    }
    buttonUpgrade4.style.transform='scale(100%)';
})

buttonUpgrade5.addEventListener('click', () => {
    if (cookieAccount >= costs.at(4)) {
        upgradeArray[4] += 1;
        perSecValues[4] += parseFloat(perSec[4].toFixed(2));
        perSecValues[4]=parseFloat(perSecValues[4].toFixed(2));
        perClickValues[4] = parseFloat((perSecValues[4] * 1.2).toFixed(2));
        setPerSecValue();
        setPerClickValue()
        cookieAccount -= costs.at(4);
        cookieUpgradeButton5Text.innerText = perSecValues[4];
        let cost = costs.at(4) + (0.3 * costs.at(4))
        costs[4] = parseFloat(cost.toFixed(1));
        cookieUpgrade5Cost.innerText = costs.at(4);
        cookiePerSecText.innerText = cookiePerSecValue;
        cookiePerClickText.innerText = cookiePerClickValue;
    }
});

buttonUpgrade5.addEventListener('mouseover',()=>{
    if(cookieAccount<costs.at(4)){
        buttonUpgrade5.style.backgroundColor='#E83F6F';
        buttonUpgrade5.style.transform='scale(100%)';
    }
    else{
        buttonUpgrade5.style.backgroundColor='#7C7C7C';
        buttonUpgrade5.style.transform='scale(110%)';
    }
})

buttonUpgrade5.addEventListener('mouseout',()=>{
    if(cookieAccount<costs.at(4)){
        buttonUpgrade5.style.backgroundColor='#E83F6F';
    }
    else{
        buttonUpgrade5.style.backgroundColor='#7C7C7C';
    }
    buttonUpgrade5.style.transform='scale(100%)';
})