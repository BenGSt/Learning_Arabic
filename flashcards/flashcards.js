 // to create this file run from flashcards dir
 
 // echo "$(cat flashcards.js_top ; find images |awk 'BEGIN { FS = "/" } ; NR>1{OFS=","; print  $0, $NF }'|sed 's/\.[[:alpha:]]*$//'| awk '{FS=","; printf "var card" NR-1 " = new Card(\"<img src=\\\""$1"\\\">\", \""$2"\")\n"} END{printf "\nvar myCards = ["; for (i = 1; i <NR-1 ; i++) printf "card"i",";printf "card"NR-1"];\n"}' ; cat flashcards.js_bottom)" > flashcards.js
 
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
var card0 = new Card("<img src=\"images/Animal,Animal\">", "")
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
var card14 = new Card("<img src=\"images/Clothing/أحذية_(كُنْدَرَة).jpg\">", "أحذية_(كُنْدَرَة)")
var card15 = new Card("<img src=\"images/Clothing/بدلة.jpg\">", "بدلة")
var card16 = new Card("<img src=\"images/Clothing/بقعة.jpg\">", "بقعة")
var card17 = new Card("<img src=\"images/Clothing/بنطلون.jpg\">", "بنطلون")
var card18 = new Card("<img src=\"images/Clothing/تنورة.jpg\">", "تنورة")
var card19 = new Card("<img src=\"images/Clothing/تي-شيرت.jpg\">", "تي-شيرت")
var card20 = new Card("<img src=\"images/Clothing/جيب-القميص.jpg\">", "جيب-القميص")
var card21 = new Card("<img src=\"images/Clothing/فستان.jpg\">", "فستان")
var card22 = new Card("<img src=\"images/Clothing/قبعة_(طاقيّة).jpg\">", "قبعة_(طاقيّة)")
var card23 = new Card("<img src=\"images/Clothing/قميص.jpg\">", "قميص")
var card24 = new Card("<img src=\"images/Clothing/ملابس.jpg\">", "ملابس")
var card25 = new Card("<img src=\"images/Color\">", "Color")
var card26 = new Card("<img src=\"images/Color/أبيض.jpg\">", "أبيض")
var card27 = new Card("<img src=\"images/Color/أحمر.jpg\">", "أحمر")
var card28 = new Card("<img src=\"images/Color/أخضر.jpg\">", "أخضر")
var card29 = new Card("<img src=\"images/Color/أزرق.jpg\">", "أزرق")
var card30 = new Card("<img src=\"images/Color/أسود.jpg\">", "أسود")
var card31 = new Card("<img src=\"images/Color/أصفر.jpg\">", "أصفر")
var card32 = new Card("<img src=\"images/Color/الالوان_لون.jpg\">", "الالوان_لون")
var card33 = new Card("<img src=\"images/Color/برتقالي.jpg\">", "برتقالي")
var card34 = new Card("<img src=\"images/Color/بنى_أسمر.jpg\">", "بنى_أسمر")
var card35 = new Card("<img src=\"images/Color/رمادي.jpg\">", "رمادي")
var card36 = new Card("<img src=\"images/Color/وردي.jpg\">", "وردي")
var card37 = new Card("<img src=\"images/Job\">", "Job")
var card38 = new Card("<img src=\"images/Job/جيش_عسكرية.jpeg\">", "جيش_عسكرية")
var card39 = new Card("<img src=\"images/Job/جُنْدِي.jpg\">", "جُنْدِي")
var card40 = new Card("<img src=\"images/Job/سكرتير_أمين_وزير.png\">", "سكرتير_أمين_وزير")
var card41 = new Card("<img src=\"images/Job/شرطة_(بُولِيس).jfif\">", "شرطة_(بُولِيس)")
var card42 = new Card("<img src=\"images/Job/شُغْل_عَمَل_مهنه.jfif\">", "شُغْل_عَمَل_مهنه")
var card43 = new Card("<img src=\"images/Job/صحافي_مراسل_(اعلامي).png\">", "صحافي_مراسل_(اعلامي)")
var card44 = new Card("<img src=\"images/Job/طبيب_حكيم_(دكتور).png\">", "طبيب_حكيم_(دكتور)")
var card45 = new Card("<img src=\"images/Job/طَالِب.png\">", "طَالِب")
var card46 = new Card("<img src=\"images/Job/فنان.jpg\">", "فنان")
var card47 = new Card("<img src=\"images/Job/مؤلف_كَاتِب_أَدِيب.jpg\">", "مؤلف_كَاتِب_أَدِيب")
var card48 = new Card("<img src=\"images/Job/مريض.png\">", "مريض")
var card49 = new Card("<img src=\"images/Job/ممثل.jpg\">", "ممثل")
var card50 = new Card("<img src=\"images/Job/مُحَامِي.png\">", "مُحَامِي")
var card51 = new Card("<img src=\"images/Job/مُدِير.png\">", "مُدِير")
var card52 = new Card("<img src=\"images/Job/مْعَلِّم_أستاذ.png\">", "مْعَلِّم_أستاذ")
var card53 = new Card("<img src=\"images/Job/نَادِل_(سفرجي).png\">", "نَادِل_(سفرجي)")
var card54 = new Card("<img src=\"images/Location\">", "Location")
var card55 = new Card("<img src=\"images/Location/أرض.jpg\">", "أرض")
var card56 = new Card("<img src=\"images/Location/الفضاء-الخارجي.jpg\">", "الفضاء-الخارجي")
var card57 = new Card("<img src=\"images/Location/بلدة.jpg\">", "بلدة")
var card58 = new Card("<img src=\"images/Location/بناية.jpeg\">", "بناية")
var card59 = new Card("<img src=\"images/Location/جامعة.jpg\">", "جامعة")
var card60 = new Card("<img src=\"images/Location/جسر_كوبري.jpg\">", "جسر_كوبري")
var card61 = new Card("<img src=\"images/Location/حانة_بار.jpg\">", "حانة_بار")
var card62 = new Card("<img src=\"images/Location/دكان_حانوت.jpg\">", "دكان_حانوت")
var card63 = new Card("<img src=\"images/Location/دولة.jpg\">", "دولة")
var card64 = new Card("<img src=\"images/Location/سكة_حديد.jpg\">", "سكة_حديد")
var card65 = new Card("<img src=\"images/Location/سوق.jpg\">", "سوق")
var card66 = new Card("<img src=\"images/Location/شارع.jpg\">", "شارع")
var card67 = new Card("<img src=\"images/Location/شقه.png\">", "شقه")
var card68 = new Card("<img src=\"images/Location/طريق.jpg\">", "طريق")
var card69 = new Card("<img src=\"images/Location/غرفة.png\">", "غرفة")
var card70 = new Card("<img src=\"images/Location/فندق_أوتيل_خان.jpg\">", "فندق_أوتيل_خان")
var card71 = new Card("<img src=\"images/Location/كنيسة.jfif\">", "كنيسة")
var card72 = new Card("<img src=\"images/Location/محطة-القطار.jpg\">", "محطة-القطار")
var card73 = new Card("<img src=\"images/Location/محكمة.png\">", "محكمة")
var card74 = new Card("<img src=\"images/Location/مخيم.jpg\">", "مخيم")
var card75 = new Card("<img src=\"images/Location/مدرسة.jpg\">", "مدرسة")
var card76 = new Card("<img src=\"images/Location/مدينة.jpg\">", "مدينة")
var card77 = new Card("<img src=\"images/Location/مزرعة.jpg\">", "مزرعة")
var card78 = new Card("<img src=\"images/Location/مستشفى.jpeg\">", "مستشفى")
var card79 = new Card("<img src=\"images/Location/مسرح.png\">", "مسرح")
var card80 = new Card("<img src=\"images/Location/مصرف_بنك.jpg\">", "مصرف_بنك")
var card81 = new Card("<img src=\"images/Location/مطار.jpg\">", "مطار")
var card82 = new Card("<img src=\"images/Location/مطعم.jpg\">", "مطعم")
var card83 = new Card("<img src=\"images/Location/مكتب.jpg\">", "مكتب")
var card84 = new Card("<img src=\"images/Location/مكتبة.jpg\">", "مكتبة")
var card85 = new Card("<img src=\"images/Location/منتزه.jpg\">", "منتزه")
var card86 = new Card("<img src=\"images/Location/منزل_بيت_دار_مسكن.jpg\">", "منزل_بيت_دار_مسكن")
var card87 = new Card("<img src=\"images/Location/موقع_مكان.jpg\">", "موقع_مكان")
var card88 = new Card("<img src=\"images/Location/ناد_ليلي.jpg\">", "ناد_ليلي")
var card89 = new Card("<img src=\"images/People\">", "People")
var card90 = new Card("<img src=\"images/People/أب_والد.png\">", "أب_والد")
var card91 = new Card("<img src=\"images/People/أم_والدة.png\">", "أم_والدة")
var card92 = new Card("<img src=\"images/People/إنسان_بشر_بني-آدم.jpg\">", "إنسان_بشر_بني-آدم")
var card93 = new Card("<img src=\"images/People/ابن.jpg\">", "ابن")
var card94 = new Card("<img src=\"images/People/ابنة.jpg\">", "ابنة")
var card95 = new Card("<img src=\"images/People/الآباء_الوالدان_الوالدون.png\">", "الآباء_الوالدان_الوالدون")
var card96 = new Card("<img src=\"images/People/الأبوين.png\">", "الأبوين")
var card97 = new Card("<img src=\"images/People/العاهل=_ملك_سلطان_أمير_خليفة.png\">", "العاهل=_ملك_سلطان_أمير_خليفة")
var card98 = new Card("<img src=\"images/People/امرأة_نساء.png\">", "امرأة_نساء")
var card99 = new Card("<img src=\"images/People/بنت_صبية_فتاة.jpg\">", "بنت_صبية_فتاة")
var card100 = new Card("<img src=\"images/People/جار.jfif\">", "جار")
var card101 = new Card("<img src=\"images/People/جد.png\">", "جد")
var card102 = new Card("<img src=\"images/People/جدة.png\">", "جدة")
var card103 = new Card("<img src=\"images/People/جمهور.jfif\">", "جمهور")
var card104 = new Card("<img src=\"images/People/رجل.png\">", "رجل")
var card105 = new Card("<img src=\"images/People/رَئِيس.jpg\">", "رَئِيس")
var card106 = new Card("<img src=\"images/People/زوج.png\">", "زوج")
var card107 = new Card("<img src=\"images/People/زوجة.png\">", "زوجة")
var card108 = new Card("<img src=\"images/People/شخص.jfif\">", "شخص")
var card109 = new Card("<img src=\"images/People/شقيق_اخ.png\">", "شقيق_اخ")
var card110 = new Card("<img src=\"images/People/شقيقة_اخت.png\">", "شقيقة_اخت")
var card111 = new Card("<img src=\"images/People/صديق_رفيق_(صَاحِب).jfif\">", "صديق_رفيق_(صَاحِب)")
var card112 = new Card("<img src=\"images/People/ضحية.png\">", "ضحية")
var card113 = new Card("<img src=\"images/People/طفل.png\">", "طفل")
var card114 = new Card("<img src=\"images/People/عائلة_عيلة_أسرة.jpg\">", "عائلة_عيلة_أسرة")
var card115 = new Card("<img src=\"images/People/لَاعِب_لَعِيب.jpg\">", "لَاعِب_لَعِيب")
var card116 = new Card("<img src=\"images/People/مشجع.jpg\">", "مشجع")
var card117 = new Card("<img src=\"images/People/وَلَد_صبي_فتى.jpg\">", "وَلَد_صبي_فتى")
var card118 = new Card("<img src=\"images/Transportation\">", "Transportation")
var card119 = new Card("<img src=\"images/Transportation/إطار-العجلة.jpg\">", "إطار-العجلة")
var card120 = new Card("<img src=\"images/Transportation/تذكرة.jpg\">", "تذكرة")
var card121 = new Card("<img src=\"images/Transportation/حافلة_ أتوبيس_ باص.jpg\">", "حافلة_ أتوبيس_ باص")
var card122 = new Card("<img src=\"images/Transportation/دراجة هوائية.png\">", "دراجة هوائية")
var card123 = new Card("<img src=\"images/Transportation/سفينة.jpg\">", "سفينة")
var card124 = new Card("<img src=\"images/Transportation/سيارة.jpg\">", "سيارة")
var card125 = new Card("<img src=\"images/Transportation/شاحنة.jpg\">", "شاحنة")
var card126 = new Card("<img src=\"images/Transportation/طائرة.jpg\">", "طائرة")
var card127 = new Card("<img src=\"images/Transportation/قارب.jpg\">", "قارب")
var card128 = new Card("<img src=\"images/Transportation/قطار.jpg\">", "قطار")
var card129 = new Card("<img src=\"images/Transportation/محرك.jpg\">", "محرك")
var card130 = new Card("<img src=\"images/Transportation/نقل_مواصلات.png\">", "نقل_مواصلات")
var card131 = new Card("<img src=\"images/Transportation/وقود.jpg\">", "وقود")

var myCards = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13,card14,card15,card16,card17,card18,card19,card20,card21,card22,card23,card24,card25,card26,card27,card28,card29,card30,card31,card32,card33,card34,card35,card36,card37,card38,card39,card40,card41,card42,card43,card44,card45,card46,card47,card48,card49,card50,card51,card52,card53,card54,card55,card56,card57,card58,card59,card60,card61,card62,card63,card64,card65,card66,card67,card68,card69,card70,card71,card72,card73,card74,card75,card76,card77,card78,card79,card80,card81,card82,card83,card84,card85,card86,card87,card88,card89,card90,card91,card92,card93,card94,card95,card96,card97,card98,card99,card100,card101,card102,card103,card104,card105,card106,card107,card108,card109,card110,card111,card112,card113,card114,card115,card116,card117,card118,card119,card120,card121,card122,card123,card124,card125,card126,card127,card128,card129,card130,card131];
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
