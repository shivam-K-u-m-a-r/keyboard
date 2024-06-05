var numberOfKeys = document.querySelectorAll(".keys").length;

for (i = 0; i<numberOfKeys; i++) {
    document.querySelectorAll(".keys")[i].addEventListener("click", function() {
        var keyInnerHTMl = this.innerHTML;

        makeSound(keyInnerHTMl);
    });
}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

});

function makeSound(key) {


    switch (key) {
        case "w":
            var keyOne = new Audio('./Audio/key01.mp3');
            keyOne.play();
            break;
        
        case "a":
            var keyTwo = new Audio('./Audio/key02.mp3');
            keyTwo.play();
            break;

        case "s":
            var keyThree = new Audio('./Audio/key03.mp3');
            keyThree.play();
            break;
        
        case "d":
            var keyFour = new Audio('./Audio/key04.mp3');
            keyFour.play();
            break;

        case "j":
            var keyFive = new Audio('./Audio/key05.mp3');
            keyFive.play();
            break;

        case "k":
            var keySix = new Audio('./Audio/key06.mp3');
            keySix.play();
            break;

        case "l":
            var keySeven = new Audio('./Audio/key07.mp3');
            keySeven.play();
            break;

        case "q":
            var keyEight = new Audio('./Audio/key08.mp3');
            keyEight.play();
            break;

        case "e":
            var keyNine = new Audio('./Audio/key09.mp3');
            keyNine.play();
            break;

        case "r":
            var keyTen = new Audio('./Audio/key10.mp3');
            keyTen.play();
            break;

        case "t":
            var keyEleven = new Audio('./Audio/key11.mp3');
            keyEleven.play();
            break;


        case "u":
            var keyTwelve = new Audio('./Audio/key12.mp3');
            keyTwelve.play();
            break;

        case "i":
            var keyThirteen = new Audio('./Audio/key13.mp3');
            keyThirteen.play();
            break;
        
        case "o":
            var keyFourteen = new Audio('./Audio/key14.mp3');
            keyFourteen.play();
            break;

        case "p":
            var keyFifteen = new Audio('./Audio/key15.mp3');
            keyFifteen.play();
            break;

        case "f":
            var keySixteen = new Audio('./Audio/key16.mp3');
            keySixteen.play();
            break;

        case "g":
            var keySeventeen = new Audio('./Audio/key17.mp3');
            keySeventeen.play();
            break;

        case "h":
            var keyEighteen = new Audio('./Audio/key18.mp3');
            keyEighteen.play();
            break;

        case "l":
            var keyNinteen = new Audio('./Audio/key19.mp3');
            keyNinteen.play();
            break;

        case "[":
            var keyTwenty = new Audio('./Audio/key20.mp3');
            keyTwenty.play();
            break;

        case ";":
            var keyTwentyOne = new Audio('./Audio/key21.mp3');
            keyTwentyOne.play();
            break;

        case "b":
            var keyTwentyTwo = new Audio('./Audio/key22.mp3');
            keyTwentyTwo.play();
            break;

        case "n":
            var keyTwentyThree = new Audio('./Audio/key23.mp3');
            keyTwentyThree.play();
            break;

        case "m":
            var keyTwentyFour = new Audio('./Audio/key24.mp3');
            keyTwentyFour.play();
            break;
        default: console.log(buttonInnerHTMl);
        break;
    }
};
