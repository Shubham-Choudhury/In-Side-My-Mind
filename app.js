
const lifeTRUTH = document.getElementById('life_truth');
const newTruthButton = document.getElementById('change_truth');
const local_Life_Truth = life_truth;

function newTruth(){
    let randomNumber = Math.floor(Math.random() * local_Life_Truth.length);
    lifeTRUTH.innerHTML = local_Life_Truth[randomNumber];
    console.log(local_Life_Truth[randomNumber]);
}

newTruthButton.addEventListener('click', newTruth);

onload = newTruth;