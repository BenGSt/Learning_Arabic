function Card(term, definition) {
  this.term = term;
  this.definition = definition;
  //this.category = category;
}
var newDeck = [];
var newCard;
var front = document.getElementById("front");
var back = document.getElementById("back");
var flip = document.getElementById("flip");
var submit = document.getElementById("submit");
var clearDeck = document.getElementById("clearDeck");
var formFront, formBack;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// $.get('flashcards_info.txt', function(file) {

  // var table = file.split("/n").map(function (row) { return row.split(";"); });
  // var availableTags = table.map(function (row) { return row[0]; });


// console.log(availableTags);

// $(function() {
  // $("#search").autocomplete({
    // source: availableTags
  // });
// });

// }, 'text');

// function loadCards(file){
	// var deck = [];
	//read file
	// for line in file:
		// deck.push(Card(line[0],line[1]))
	// return deck;
		
// }



function slideIn() {
  $('#importExport').animate({ 'left': '10px' }, 500);

};
function slideOut() {
  $('#importExport').animate({ 'left': '-610px' }, 500);
};

//#to produce following block
//find images |awk 'BEGIN { FS = "/" } ; NR>1{OFS=","; print  $0, $NF }'|sed 's/\.[[:alpha:]]*$//'| awk '{FS=","; printf "var card" NR-1 " = new Card(\"<img src=\\\""$1"\\\">\", \""$2"\")\n"} END{printf "\nvar myCards = ["; for (i = 1; i <NR-1 ; i++) printf "card"i",";printf "card"NR-1"];\n"}'


var card1 = new Card("<img src=\"images/Animal/بقرة.jpg\">", "بقرة")
var card2 = new Card("<img src=\"images/Animal/حصان.png\">", "حصان")
var card3 = new Card("<img src=\"images/Animal/حيوان.png\">", "حيوان")
var card4 = new Card("<img src=\"images/Animal/خنزير.jpg\">", "خنزير")
var card5 = new Card("<img src=\"images/Animal/دجاج.jpg\">", "دجاج")
var card6 = new Card("<img src=\"images/Animal/سمكة.jpg\">", "سمكة")
var card7 = new Card("<img src=\"images/Animal/طئر_طير.jpg\">", "طئر_طير")
var card8 = new Card("<img src=\"images/Animal/عصفور.png\">", "عصفور")
var card9 = new Card("<img src=\"images/Animal/فأر.jpg\">", "فأر")
var card10 = new Card("<img src=\"images/Animal/قِطّ_هِرّ_بَسّ .jpg\">", "قِطّ_هِرّ_بَسّ ")
var card11 = new Card("<img src=\"images/Animal/كلب.jpg\">", "كلب")

var myCards = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11];
//var myCards = LoadCards("flashcards.txt");
var cardIndex = 0;

front.innerHTML = myCards[0].term;
back.innerHTML = myCards[0].definition;
back.style.visibility = "hidden";

function flash() {
  if (front.style.visibility != "hidden") {
    front.style.visibility = "hidden";
    back.style.visibility = "visible";
  } else {
    front.style.visibility = "visible";
    back.style.visibility = "hidden";

  }
}

function cardAdd(formFront, formBack) {
  function clearForm() {
    document.getElementById("newTerm").value = "";
    document.getElementById("newDef").value = "";
    document.getElementById("cardForm").reset();
  }

  function updatePlaceholder() {
    document.getElementById("newTerm").placeholder =
    "...another term?";
    document.getElementById("newDef").placeholder =
    "...and another definition?";
  }

  formFront = document.getElementById("newTerm");
  formBack = document.getElementById("newDef");
  if (
  formFront.value !== formBack.value &&
  formFront.value != "" &&
  formBack.value != "")
  {
    var newCard = new Card();
    newCard.term = formFront.value;
    newCard.definition = formBack.value;
    myCards.push(newCard);
    cardIndex = myCards.length - 1;
    clearForm();
    updatePlaceholder();
    front.innerHTML = myCards[cardIndex].term;
    back.innerHTML = myCards[cardIndex].definition;
    // back.style.visibility = "hidden";
  } else if (formFront.value == formBack.value) {
    alert('kinda defeats the purpose of a "flash" card doesn`t it?');
  } else if (
  formFront.value == null || formFront.value == "", formBack.value == null ||
  formBack.value == "", formFront.value == null ||
  formBack.value == null ||
  formFront.value == "" ||
  formBack.value == "")
  {
    alert("Fill out both sides of the card, ya dringus!");
  }
  document.getElementById("newTerm").focus();
}

function nextCard() {
  cardIndex = (cardIndex + 1) % myCards.length;
  front.innerHTML = myCards[cardIndex].term;
  back.innerHTML = myCards[cardIndex].definition;
}
function prevCard() {
  if (cardIndex > 0)
  cardIndex = cardIndex - 1;else
  if (cardIndex == 0) cardIndex = myCards.length - 1;
  front.innerHTML = myCards[cardIndex].term;
  back.innerHTML = myCards[cardIndex].definition;

}
function emptyDeck() {
  var confirmation = confirm("Are you sure you want to delete this entire deck?");
  if (confirmation) {
    myCards.splice(0, myCards.length);
    cardIndex = 0;
    front.innerHTML = "&nbsp;";
    back.innerHTML = "&nbsp;";
  }
  document.getElementById("newTerm").focus();
}

document.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 37) {
    prevCard();
  }
  if (event.keyCode == 39) {
    nextCard();
  }
  if (event.keyCode == 38 || event.keyCode == 40) {
    flash();
  }
  if (event.keyCode == 46) {
    emptyDeck();
  }
  // if (event.keyCode == 9 && !(document.activeElement == document.getElementById("newTerm")) {
  //     document.getElementById("newTerm");
  //     }
});
function cardSelect(myCards, cardIndex) {
  var selectCards = document.getElementById("selectCards");
  var options = selectCards.appendElement("");
  options.map(myCards.keys);
}
function download(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  pom.setAttribute('download', filename);

  if (document.createEvent) {
    var event = document.createEvent('MouseEvents');
    event.initEvent('click', true, true);
    pom.dispatchEvent(event);
  } else
  {
    pom.click();
  }
}
function download_deck() {
  let t = JSON.stringify(myCards, null, "\t");
  let t2 = myCards;
  let fn = "flashcards.json".toString();
  download(fn, t);
}

function upload_deck() {
  var files = document.getElementById('uploadDeck').files;
  console.log(files);
  if (files.length <= 0) {
    return false;
  }

  var fr = new FileReader();

  fr.onload = function (e) {
    var newDeck = [];
    // console.log(e);
    var result = JSON.parse(e.target.result);


    for (i = 0; i < result.length; i++) {if (window.CP.shouldStopExecution(0)) break;
      var newCard = new Card();
      let item = result[i];
      newCard.term = item["term"];
      newCard.definition = item["definition"];
      console.log("added card");
      console.log(JSON.stringify(newCard.term));
      newDeck.push(newCard);
    }
	
	//Ben added
	return newDeck;

    // console.log(JSON.stringify(newDeck, null, 2));
    window.CP.exitedLoop(0);var formatted = JSON.stringify(result, null, 2);
    console.log("Upload Result:\r\n" + formatted);
    myCards.splice(0, myCards.length, ...newDeck);
    console.log("Current Deck:\r\n");
    console.log(JSON.stringify(myCards));
    updateDeck();
    // document.getElementById('result').value = formatted;
  };
  fr.readAsText(files.item(0));

  // for (obj in fr.readAstext(files.item(0))) {
  //   newCard.term = obj["term"];
  //   newCard.definition == obj["definition"];
  //   console.log("added card!" + JSON.stringify(newCard.definition));
  // }


};
function updateDeck() {
  document.getElementById("front").innerHTML = myCards[cardIndex].term;
  document.getElementById("back").innerHTML = myCards[cardIndex].definition;

}
