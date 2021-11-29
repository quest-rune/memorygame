const numberofCards = 16;
const numberofMatches = numberofCards / 2;

function cardObject(i, halfNumber){
    this.cardID = i;
    this.img = "images/image"+halfNumber+".dib";
    this.cardSet = halfNumber;
    this.flipped = false;
    this.matched = false;
}

function listofcards(){
    var listofcards = []
    for (let i=0;i<numberofCards;i++){
        halfNumber = Math.floor(i / 2);
        listofcards.push(new cardObject(i, halfNumber));
    }
    shuffleArray(listofcards);
return numberofMatches, listofcards
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function resetMatched(array) {
    for (let i = 0; i < array.length; i++) {
       array[i].flipped = false;
       array[i].matched = false;

    }
}