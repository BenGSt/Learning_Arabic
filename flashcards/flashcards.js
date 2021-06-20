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
var card2 = new Card("<img src=\"images/Animal/جناح.jpg\">", "جناح")
var card3 = new Card("<img src=\"images/Animal/حصان.png\">", "حصان")
var card4 = new Card("<img src=\"images/Animal/حيوان.png\">", "حيوان")
var card5 = new Card("<img src=\"images/Animal/خنزير.jpg\">", "خنزير")
var card6 = new Card("<img src=\"images/Animal/دجاج.jpg\">", "دجاج")
var card7 = new Card("<img src=\"images/Animal/سمكة.jpg\">", "سمكة")
var card8 = new Card("<img src=\"images/Animal/طئر_طير.jpg\">", "طئر_طير")
var card9 = new Card("<img src=\"images/Animal/عصفور.png\">", "عصفور")
var card10 = new Card("<img src=\"images/Animal/فأر.jpg\">", "فأر")
var card11 = new Card("<img src=\"images/Animal/قِطّ_هِرّ_بَسّ .jpg\">", "قِطّ_هِرّ_بَسّ ")
var card12 = new Card("<img src=\"images/Animal/كلب.jpg\">", "كلب")
var card13 = new Card("<img src=\"images/Clothing\">", "Clothing")
var card14 = new Card("<img src=\"images/Clothing/أحذية.jpg\">", "أحذية")
var card15 = new Card("<img src=\"images/Clothing/بدلة.jpg\">", "بدلة")
var card16 = new Card("<img src=\"images/Clothing/بقعة.jpg\">", "بقعة")
var card17 = new Card("<img src=\"images/Clothing/بنطلون.jpg\">", "بنطلون")
var card18 = new Card("<img src=\"images/Clothing/تنورة.jpg\">", "تنورة")
var card19 = new Card("<img src=\"images/Clothing/تي-شيرت.jpg\">", "تي-شيرت")
var card20 = new Card("<img src=\"images/Clothing/جيب-القميص.jpg\">", "جيب-القميص")
var card21 = new Card("<img src=\"images/Clothing/فستان.jpg\">", "فستان")
var card22 = new Card("<img src=\"images/Clothing/قبعة.jpg\">", "قبعة")
var card23 = new Card("<img src=\"images/Clothing/قميص.jpg\">", "قميص")
var card24 = new Card("<img src=\"images/Clothing/ملابس.jpg\">", "ملابس")
var card25 = new Card("<img src=\"images/Location\">", "Location")
var card26 = new Card("<img src=\"images/Location/أرض.jpg\">", "أرض")
var card27 = new Card("<img src=\"images/Location/الفضاء-الخارجي.jpg\">", "الفضاء-الخارجي")
var card28 = new Card("<img src=\"images/Location/بلدة.jpg\">", "بلدة")
var card29 = new Card("<img src=\"images/Location/بناية.jpeg\">", "بناية")
var card30 = new Card("<img src=\"images/Location/جامعة.jpg\">", "جامعة")
var card31 = new Card("<img src=\"images/Location/جسر_كوبري.jpg\">", "جسر_كوبري")
var card32 = new Card("<img src=\"images/Location/حانة_بار.jpg\">", "حانة_بار")
var card33 = new Card("<img src=\"images/Location/دكان_حانوت.jpg\">", "دكان_حانوت")
var card34 = new Card("<img src=\"images/Location/دولة.jpg\">", "دولة")
var card35 = new Card("<img src=\"images/Location/سكة_حديد.jpg\">", "سكة_حديد")
var card36 = new Card("<img src=\"images/Location/سوق.jpg\">", "سوق")
var card37 = new Card("<img src=\"images/Location/شارع.jpg\">", "شارع")
var card38 = new Card("<img src=\"images/Location/شقه.png\">", "شقه")
var card39 = new Card("<img src=\"images/Location/طريق.jpg\">", "طريق")
var card40 = new Card("<img src=\"images/Location/غرفة.png\">", "غرفة")
var card41 = new Card("<img src=\"images/Location/فندق_أوتيل_خان.jpg\">", "فندق_أوتيل_خان")
var card42 = new Card("<img src=\"images/Location/كنيسة.jfif\">", "كنيسة")
var card43 = new Card("<img src=\"images/Location/محطة-القطار.jpg\">", "محطة-القطار")
var card44 = new Card("<img src=\"images/Location/محكمة.png\">", "محكمة")
var card45 = new Card("<img src=\"images/Location/مخيم.jpg\">", "مخيم")
var card46 = new Card("<img src=\"images/Location/مدرسة.jpg\">", "مدرسة")
var card47 = new Card("<img src=\"images/Location/مدينة.jpg\">", "مدينة")
var card48 = new Card("<img src=\"images/Location/مزرعة.jpg\">", "مزرعة")
var card49 = new Card("<img src=\"images/Location/مستشفى.jpeg\">", "مستشفى")
var card50 = new Card("<img src=\"images/Location/مسرح.png\">", "مسرح")
var card51 = new Card("<img src=\"images/Location/مصرف_بنك.jpg\">", "مصرف_بنك")
var card52 = new Card("<img src=\"images/Location/مطار.jpg\">", "مطار")
var card53 = new Card("<img src=\"images/Location/مطعم.jpg\">", "مطعم")
var card54 = new Card("<img src=\"images/Location/مكتب.jpg\">", "مكتب")
var card55 = new Card("<img src=\"images/Location/مكتبة.jpg\">", "مكتبة")
var card56 = new Card("<img src=\"images/Location/منتزه.jpg\">", "منتزه")
var card57 = new Card("<img src=\"images/Location/منزل_بيت_دار_مسكن.jpg\">", "منزل_بيت_دار_مسكن")
var card58 = new Card("<img src=\"images/Location/موقع_مكان.jpg\">", "موقع_مكان")
var card59 = new Card("<img src=\"images/Location/ناد_ليلي.jpg\">", "ناد_ليلي")
var card60 = new Card("<img src=\"images/Transportation\">", "Transportation")
var card61 = new Card("<img src=\"images/Transportation/إطار-العجلة.jpg\">", "إطار-العجلة")
var card62 = new Card("<img src=\"images/Transportation/تذكرة.jpg\">", "تذكرة")
var card63 = new Card("<img src=\"images/Transportation/حافلة_ أتوبيس_ باص.jpg\">", "حافلة_ أتوبيس_ باص")
var card64 = new Card("<img src=\"images/Transportation/دراجة هوائية.png\">", "دراجة هوائية")
var card65 = new Card("<img src=\"images/Transportation/سفينة.jpg\">", "سفينة")
var card66 = new Card("<img src=\"images/Transportation/سيارة.jpg\">", "سيارة")
var card67 = new Card("<img src=\"images/Transportation/شاحنة.jpg\">", "شاحنة")
var card68 = new Card("<img src=\"images/Transportation/طائرة.jpg\">", "طائرة")
var card69 = new Card("<img src=\"images/Transportation/قارب.jpg\">", "قارب")
var card70 = new Card("<img src=\"images/Transportation/قطار.jpg\">", "قطار")
var card71 = new Card("<img src=\"images/Transportation/محرك.jpg\">", "محرك")
var card72 = new Card("<img src=\"images/Transportation/نقل_مواصلات.png\">", "نقل_مواصلات")
var card73 = new Card("<img src=\"images/Transportation/وقود.jpg\">", "وقود")

var myCards = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13,card14,card15,card16,card17,card18,card19,card20,card21,card22,card23,card24,card25,card26,card27,card28,card29,card30,card31,card32,card33,card34,card35,card36,card37,card38,card39,card40,card41,card42,card43,card44,card45,card46,card47,card48,card49,card50,card51,card52,card53,card54,card55,card56,card57,card58,card59,card60,card61,card62,card63,card64,card65,card66,card67,card68,card69,card70,card71,card72,card73];
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
