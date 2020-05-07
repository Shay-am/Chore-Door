let doorImage1 = document.getElementById("door1");
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

let doorImage2 = document.getElementById("door2");
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";

let doorImage3 = document.getElementById("door3");
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let numClosedDoors = 3;

let openDoor1;
let openDoor2;
let openDoor3;

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let startButton = document.getElementById('start');

let currentlyPlaying = true;

//sprawdzenie czy ktos kliknal na Chorebot
const isBot = (door) => {
    if(door.src === botDoorPath) {
        return true;
    }else return false;
}



//blokuje ponowne klikniecie na drzwi
const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    }else return true;
}

// rozgrywka
const playDoor = (door) => {
    numClosedDoors--;
    if(numClosedDoors === 0) {
        gameover('win');
    }else if(isBot(door)) {
        gameover();
    }
}


// losuje ktore drzwi sa pierwsze otwarte
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);

     if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;

     }else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
     }else {
         openDoor3 = botDoorPath;
         openDoor2 = beachDoorPath;
         openDoor1 = spaceDoorPath;

    }

}





// klikniecia na drzwi
doorImage1.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}
doorImage2.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  
  }
}
doorImage3.onclick = () => {
    if(currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
    if(!currentlyPlaying){
        startRound();
    }
}

const startRound = () => {
    numClosedDoors =3;
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    startButton.innerHTML = 'Powodzenia';
    currentlyPlaying = true;
    randomChoreDoorGenerator();

}

//po otwarciu wszystkich drzwi
const gameover = (status) => {
    if(status === 'win') {
        startButton.innerHTML = 'Wygrales! Jeszcze raz ?'
    }else {
      startButton.innerHTML = 'Game over! jeszcze raz?';
  }
    currentlyPlaying = false;
}
//wywolanie funkcji od od 1 do 3 drzwi
startRound();