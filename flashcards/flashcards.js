 // to create this file run from flashcards dir
 
 // echo "$(cat flashcards.js_top ; find images -type f |awk 'BEGIN { FS = "/" }; {OFS=","; print  $0, $NF }'|sed 's/\.[[:alpha:]]*$//'| awk -F , '{ printf "var card" NR-1 " = new Card(\"<img src=\\\""$1"\\\">\", \""$2"\")\n"} END{printf "\nvar myCards = ["; for (i = 0; i <NR-1 ; i++) printf "card"i",";printf "card"NR-1"];\n"}' ; cat flashcards.js_bottom)" > flashcards.js
 
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
var card0 = new Card("<img src=\"images/Animal/بقرة.jpg\">", "بقرة")
var card1 = new Card("<img src=\"images/Animal/جناح.jpg\">", "جناح")
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
var card12 = new Card("<img src=\"images/Art/آلات-موسيقيّة_أدوات-موسيقية.jpg\">", "آلات-موسيقيّة_أدوات-موسيقية")
var card13 = new Card("<img src=\"images/Art/أغنية.png\">", "أغنية")
var card14 = new Card("<img src=\"images/Art/فن.png\">", "فن")
var card15 = new Card("<img src=\"images/Art/فِلْم.jpeg\">", "فِلْم")
var card16 = new Card("<img src=\"images/Art/لوحة_رسم.jpg\">", "لوحة_رسم")
var card17 = new Card("<img src=\"images/Art/موسيقى.jfif\">", "موسيقى")
var card18 = new Card("<img src=\"images/Art/نحت_تمثال.png\">", "نحت_تمثال")
var card19 = new Card("<img src=\"images/Beverages/بيرة_جعة.jfif\">", "بيرة_جعة")
var card20 = new Card("<img src=\"images/Beverages/حليب.png\">", "حليب")
var card21 = new Card("<img src=\"images/Beverages/شَاي.jpg\">", "شَاي")
var card22 = new Card("<img src=\"images/Beverages/عَصِير.jpg\">", "عَصِير")
var card23 = new Card("<img src=\"images/Beverages/قهوة.jpg\">", "قهوة")
var card24 = new Card("<img src=\"images/Beverages/لحم-بقر.png\">", "لحم-بقر")
var card25 = new Card("<img src=\"images/Beverages/ماء_(مَيِّة).png\">", "ماء_(مَيِّة)")
var card26 = new Card("<img src=\"images/Beverages/مشروب.jpg\">", "مشروب")
var card27 = new Card("<img src=\"images/Beverages/نبيذ_خمر.png\">", "نبيذ_خمر")
var card28 = new Card("<img src=\"images/Body/أنف_مُنْخَار_خشم.jfif\">", "أنف_مُنْخَار_خشم")
var card29 = new Card("<img src=\"images/Body/أُذُن_(دَان_وِدِن).jpg\">", "أُذُن_(دَان_وِدِن)")
var card30 = new Card("<img src=\"images/Body/إصبع-قدم.jpg\">", "إصبع-قدم")
var card31 = new Card("<img src=\"images/Body/اصبع-اليد.jpg\">", "اصبع-اليد")
var card32 = new Card("<img src=\"images/Body/جِسْم_بدن.jpg\">", "جِسْم_بدن")
var card33 = new Card("<img src=\"images/Body/جِلْد_بَشَرَة.png\">", "جِلْد_بَشَرَة")
var card34 = new Card("<img src=\"images/Body/دَمّ.jpg\">", "دَمّ")
var card35 = new Card("<img src=\"images/Body/دَمْعَة.jpg\">", "دَمْعَة")
var card36 = new Card("<img src=\"images/Body/ذْرَاع.jpg\">", "ذْرَاع")
var card37 = new Card("<img src=\"images/Body/رأس.jpg\">", "رأس")
var card38 = new Card("<img src=\"images/Body/رقبه_عنق.jpg\">", "رقبه_عنق")
var card39 = new Card("<img src=\"images/Body/رُكْبَة.jpg\">", "رُكْبَة")
var card40 = new Card("<img src=\"images/Body/ساق_(إِجْر)\">", "ساق_(إِجْر)")
var card41 = new Card("<img src=\"images/Body/سن.jfif\">", "سن")
var card42 = new Card("<img src=\"images/Body/شعر_شعرة.jpg\">", "شعر_شعرة")
var card43 = new Card("<img src=\"images/Body/شفة.jpg\">", "شفة")
var card44 = new Card("<img src=\"images/Body/صُوت.jfif\">", "صُوت")
var card45 = new Card("<img src=\"images/Body/ظَهْر.jpg\">", "ظَهْر")
var card46 = new Card("<img src=\"images/Body/عين.jpg\">", "عين")
var card47 = new Card("<img src=\"images/Body/عَرَق.jpg\">", "عَرَق")
var card48 = new Card("<img src=\"images/Body/عَظْم.jpg\">", "عَظْم")
var card49 = new Card("<img src=\"images/Body/فم.jfif\">", "فم")
var card50 = new Card("<img src=\"images/Body/قدم_(إِجْر).jpeg\">", "قدم_(إِجْر)")
var card51 = new Card("<img src=\"images/Body/قَلْب.jpg\">", "قَلْب")
var card52 = new Card("<img src=\"images/Body/كَتِف_كِتْف.jpg\">", "كَتِف_كِتْف")
var card53 = new Card("<img src=\"images/Body/لحية_ذقن.jpg\">", "لحية_ذقن")
var card54 = new Card("<img src=\"images/Body/لِسَان.jpg\">", "لِسَان")
var card55 = new Card("<img src=\"images/Body/مَرَض.jpg\">", "مَرَض")
var card56 = new Card("<img src=\"images/Body/مُخّ‎_دِمَاغ.jpg\">", "مُخّ‎_دِمَاغ")
var card57 = new Card("<img src=\"images/Body/وجه_وشّ.jfif\">", "وجه_وشّ")
var card58 = new Card("<img src=\"images/Body/يد_كف_(إيد).jfif\">", "يد_كف_(إيد)")
var card59 = new Card("<img src=\"images/Clothing/أحذية_(كُنْدَرَة).jpg\">", "أحذية_(كُنْدَرَة)")
var card60 = new Card("<img src=\"images/Clothing/بدلة.jpg\">", "بدلة")
var card61 = new Card("<img src=\"images/Clothing/بقعة.jpg\">", "بقعة")
var card62 = new Card("<img src=\"images/Clothing/بنطلون.jpg\">", "بنطلون")
var card63 = new Card("<img src=\"images/Clothing/تنورة.jpg\">", "تنورة")
var card64 = new Card("<img src=\"images/Clothing/تي-شيرت.jpg\">", "تي-شيرت")
var card65 = new Card("<img src=\"images/Clothing/جيب-القميص.jpg\">", "جيب-القميص")
var card66 = new Card("<img src=\"images/Clothing/فستان.jpg\">", "فستان")
var card67 = new Card("<img src=\"images/Clothing/قبعة_(طاقيّة).jpg\">", "قبعة_(طاقيّة)")
var card68 = new Card("<img src=\"images/Clothing/قميص.jpg\">", "قميص")
var card69 = new Card("<img src=\"images/Clothing/ملابس.jpg\">", "ملابس")
var card70 = new Card("<img src=\"images/Color/أبيض.jpg\">", "أبيض")
var card71 = new Card("<img src=\"images/Color/أحمر.jpg\">", "أحمر")
var card72 = new Card("<img src=\"images/Color/أخضر.jpg\">", "أخضر")
var card73 = new Card("<img src=\"images/Color/أزرق.jpg\">", "أزرق")
var card74 = new Card("<img src=\"images/Color/أسود.jpg\">", "أسود")
var card75 = new Card("<img src=\"images/Color/أصفر.jpg\">", "أصفر")
var card76 = new Card("<img src=\"images/Color/الالوان_لون.jpg\">", "الالوان_لون")
var card77 = new Card("<img src=\"images/Color/برتقالي.jpg\">", "برتقالي")
var card78 = new Card("<img src=\"images/Color/بنى_أسمر.jpg\">", "بنى_أسمر")
var card79 = new Card("<img src=\"images/Color/رمادي.jpg\">", "رمادي")
var card80 = new Card("<img src=\"images/Color/وردي.jpg\">", "وردي")
var card81 = new Card("<img src=\"images/Electronics/برنامج-الحاسب.jpg\">", "برنامج-الحاسب")
var card82 = new Card("<img src=\"images/Electronics/تلفاز_تِلْفِزْيُون.jpg\">", "تلفاز_تِلْفِزْيُون")
var card83 = new Card("<img src=\"images/Electronics/حاسوب-محمول.jpg\">", "حاسوب-محمول")
var card84 = new Card("<img src=\"images/Electronics/حاسوب.jpg\">", "حاسوب")
var card85 = new Card("<img src=\"images/Electronics/ساعة-رقمية.jpg\">", "ساعة-رقمية")
var card86 = new Card("<img src=\"images/Electronics/شاشة.jpg\">", "شاشة")
var card87 = new Card("<img src=\"images/Electronics/شبكة-الاتصال.jpg\">", "شبكة-الاتصال")
var card88 = new Card("<img src=\"images/Electronics/كامرة.png\">", "كامرة")
var card89 = new Card("<img src=\"images/Electronics/لَمْبَة_مِصْبَاح.png\">", "لَمْبَة_مِصْبَاح")
var card90 = new Card("<img src=\"images/Electronics/مِذْيَاع_راديو.jpg\">", "مِذْيَاع_راديو")
var card91 = new Card("<img src=\"images/Electronics/مِرْوَحَة_(هَوَّاي).jpg\">", "مِرْوَحَة_(هَوَّاي)")
var card92 = new Card("<img src=\"images/Electronics/هاتف-ذكي_هاتف-خلوي.jpg\">", "هاتف-ذكي_هاتف-خلوي")
var card93 = new Card("<img src=\"images/Food/أرز_(رُزّ).png\">", "أرز_(رُزّ)")
var card94 = new Card("<img src=\"images/Food/بذرة.png\">", "بذرة")
var card95 = new Card("<img src=\"images/Food/برتقال_بردقان.png\">", "برتقال_بردقان")
var card96 = new Card("<img src=\"images/Food/بيضة.jpg\">", "بيضة")
var card97 = new Card("<img src=\"images/Food/تفاح.jpg\">", "تفاح")
var card98 = new Card("<img src=\"images/Food/جبنة_جبن.jpg\">", "جبنة_جبن")
var card99 = new Card("<img src=\"images/Food/خبز.jpg\">", "خبز")
var card100 = new Card("<img src=\"images/Food/دجاج-محمر.jpeg\">", "دجاج-محمر")
var card101 = new Card("<img src=\"images/Food/ذرة.jpg\">", "ذرة")
var card102 = new Card("<img src=\"images/Food/زيت.jpg\">", "زيت")
var card103 = new Card("<img src=\"images/Food/سكر.jpg\">", "سكر")
var card104 = new Card("<img src=\"images/Food/سكين_(سِكِّينِة).png\">", "سكين_(سِكِّينِة)")
var card105 = new Card("<img src=\"images/Food/شوكة.png\">", "شوكة")
var card106 = new Card("<img src=\"images/Food/صحن.jpg\">", "صحن")
var card107 = new Card("<img src=\"images/Food/طعام_غذاء_قوت_(أَكْل).jpg\">", "طعام_غذاء_قوت_(أَكْل)")
var card108 = new Card("<img src=\"images/Food/غداء.png\">", "غداء")
var card109 = new Card("<img src=\"images/Food/كعك_كَعْكِة_كيك_(جَاتُو).png\">", "كعك_كَعْكِة_كيك_(جَاتُو)")
var card110 = new Card("<img src=\"images/Food/كوب_كأس_(كُبَّايِة).jpg\">", "كوب_كأس_(كُبَّايِة)")
var card111 = new Card("<img src=\"images/Food/ليمون_حامض.jpg\">", "ليمون_حامض")
var card112 = new Card("<img src=\"images/Food/ملح.jpg\">", "ملح")
var card113 = new Card("<img src=\"images/Food/ملعقة_(مَعْلَقَة).png\">", "ملعقة_(مَعْلَقَة)")
var card114 = new Card("<img src=\"images/Food/مُوز.jpg\">", "مُوز")
var card115 = new Card("<img src=\"images/Food/وجبة-افطار_افطار_فطور.jpg\">", "وجبة-افطار_افطار_فطور")
var card116 = new Card("<img src=\"images/Food/وجبة-عشاء_عشاء.jpg\">", "وجبة-عشاء_عشاء")
var card117 = new Card("<img src=\"images/Home/أداة.jpg\">", "أداة")
var card118 = new Card("<img src=\"images/Home/أرضية_أرض.jpg\">", "أرضية_أرض")
var card119 = new Card("<img src=\"images/Home/إبرة.jpg\">", "إبرة")
var card120 = new Card("<img src=\"images/Home/باب.jpg\">", "باب")
var card121 = new Card("<img src=\"images/Home/بطاقة.jpg\">", "بطاقة")
var card122 = new Card("<img src=\"images/Home/تصوير_صُورَة.jpg\">", "تصوير_صُورَة")
var card123 = new Card("<img src=\"images/Home/حائط_جدار.jpg\">", "حائط_جدار")
var card124 = new Card("<img src=\"images/Home/حديقة_جنينة.jpg\">", "حديقة_جنينة")
var card125 = new Card("<img src=\"images/Home/حقيبة_(شنطة).jpg\">", "حقيبة_(شنطة)")
var card126 = new Card("<img src=\"images/Home/حلم_منام_رؤيا.jpg\">", "حلم_منام_رؤيا")
var card127 = new Card("<img src=\"images/Home/حمام-سباحة_بركة-السباحة.jpg\">", "حمام-سباحة_بركة-السباحة")
var card128 = new Card("<img src=\"images/Home/حَمَّام_مرحاض_تواليت_منافع.jpg\">", "حَمَّام_مرحاض_تواليت_منافع")
var card129 = new Card("<img src=\"images/Home/خاتم.jpg\">", "خاتم")
var card130 = new Card("<img src=\"images/Home/رسالة_(كتاب).jpg\">", "رسالة_(كتاب)")
var card131 = new Card("<img src=\"images/Home/ساحة.jpg\">", "ساحة")
var card132 = new Card("<img src=\"images/Home/سرير_حشية_(تَخْت_فراس_فَرْشِة).png\">", "سرير_حشية_(تَخْت_فراس_فَرْشِة)")
var card133 = new Card("<img src=\"images/Home/سطح.jpg\">", "سطح")
var card134 = new Card("<img src=\"images/Home/سقف.jpg\">", "سقف")
var card135 = new Card("<img src=\"images/Home/صابون_(صابونة).jpg\">", "صابون_(صابونة)")
var card136 = new Card("<img src=\"images/Home/صَفْحَة.jpg\">", "صَفْحَة")
var card137 = new Card("<img src=\"images/Home/طاولة_منضدة_ترابيزة_سفرة.jfif\">", "طاولة_منضدة_ترابيزة_سفرة")
var card138 = new Card("<img src=\"images/Home/طلاء_دهان.jpg\">", "طلاء_دهان")
var card139 = new Card("<img src=\"images/Home/علبة_صندوق_(عِلْبِة).jpg\">", "علبة_صندوق_(عِلْبِة)")
var card140 = new Card("<img src=\"images/Home/غرفة-نوم.jpg\">", "غرفة-نوم")
var card141 = new Card("<img src=\"images/Home/قفل.jpg\">", "قفل")
var card142 = new Card("<img src=\"images/Home/قلم-جاف_(قلم).jpg\">", "قلم-جاف_(قلم)")
var card143 = new Card("<img src=\"images/Home/قلم-رصاص.jpg\">", "قلم-رصاص")
var card144 = new Card("<img src=\"images/Home/كيس.jpg\">", "كيس")
var card145 = new Card("<img src=\"images/Home/كُرْسِي.jpg\">", "كُرْسِي")
var card146 = new Card("<img src=\"images/Home/كْتَاب.jpg\">", "كْتَاب")
var card147 = new Card("<img src=\"images/Home/مطبخ.jfif\">", "مطبخ")
var card148 = new Card("<img src=\"images/Home/مُفْتَاح.jpg\">", "مُفْتَاح")
var card149 = new Card("<img src=\"images/Home/نافذة_شباك.jpg\">", "نافذة_شباك")
var card150 = new Card("<img src=\"images/Home/هاتف.jpg\">", "هاتف")
var card151 = new Card("<img src=\"images/Home/هدية.jpg\">", "هدية")
var card152 = new Card("<img src=\"images/Home/ورق.jpg\">", "ورق")
var card153 = new Card("<img src=\"images/Home/ورقة_ملاحظة.jpg\">", "ورقة_ملاحظة")
var card154 = new Card("<img src=\"images/Job/جيش_عسكرية.jpeg\">", "جيش_عسكرية")
var card155 = new Card("<img src=\"images/Job/جُنْدِي.jpg\">", "جُنْدِي")
var card156 = new Card("<img src=\"images/Job/سكرتير_أمين_وزير.png\">", "سكرتير_أمين_وزير")
var card157 = new Card("<img src=\"images/Job/شرطة_(بُولِيس).jfif\">", "شرطة_(بُولِيس)")
var card158 = new Card("<img src=\"images/Job/شُغْل_عَمَل_مهنه.jfif\">", "شُغْل_عَمَل_مهنه")
var card159 = new Card("<img src=\"images/Job/صحافي_مراسل_(اعلامي).png\">", "صحافي_مراسل_(اعلامي)")
var card160 = new Card("<img src=\"images/Job/طبيب_حكيم_(دكتور).png\">", "طبيب_حكيم_(دكتور)")
var card161 = new Card("<img src=\"images/Job/طَالِب_تلميذ.png\">", "طَالِب_تلميذ")
var card162 = new Card("<img src=\"images/Job/فنان.jpg\">", "فنان")
var card163 = new Card("<img src=\"images/Job/مؤلف_كَاتِب_أَدِيب.jpg\">", "مؤلف_كَاتِب_أَدِيب")
var card164 = new Card("<img src=\"images/Job/مريض.png\">", "مريض")
var card165 = new Card("<img src=\"images/Job/ممثل.jpg\">", "ممثل")
var card166 = new Card("<img src=\"images/Job/مُحَامِي.png\">", "مُحَامِي")
var card167 = new Card("<img src=\"images/Job/مُدِير.png\">", "مُدِير")
var card168 = new Card("<img src=\"images/Job/مْعَلِّم_أستاذ.png\">", "مْعَلِّم_أستاذ")
var card169 = new Card("<img src=\"images/Job/نَادِل_(سفرجي).png\">", "نَادِل_(سفرجي)")
var card170 = new Card("<img src=\"images/Location/أرض.jpg\">", "أرض")
var card171 = new Card("<img src=\"images/Location/الفضاء-الخارجي.jpg\">", "الفضاء-الخارجي")
var card172 = new Card("<img src=\"images/Location/بلدة.jpg\">", "بلدة")
var card173 = new Card("<img src=\"images/Location/بناية.jpeg\">", "بناية")
var card174 = new Card("<img src=\"images/Location/جامعة.jpg\">", "جامعة")
var card175 = new Card("<img src=\"images/Location/جسر_كوبري.jpg\">", "جسر_كوبري")
var card176 = new Card("<img src=\"images/Location/حانة_بار.jpg\">", "حانة_بار")
var card177 = new Card("<img src=\"images/Location/دكان_حانوت.jpg\">", "دكان_حانوت")
var card178 = new Card("<img src=\"images/Location/دولة.jpg\">", "دولة")
var card179 = new Card("<img src=\"images/Location/سكة_حديد.jpg\">", "سكة_حديد")
var card180 = new Card("<img src=\"images/Location/سوق.jpg\">", "سوق")
var card181 = new Card("<img src=\"images/Location/شارع.jpg\">", "شارع")
var card182 = new Card("<img src=\"images/Location/شقه.png\">", "شقه")
var card183 = new Card("<img src=\"images/Location/طريق.jpg\">", "طريق")
var card184 = new Card("<img src=\"images/Location/غرفة.png\">", "غرفة")
var card185 = new Card("<img src=\"images/Location/فندق_أوتيل_خان.jpg\">", "فندق_أوتيل_خان")
var card186 = new Card("<img src=\"images/Location/كنيسة.jfif\">", "كنيسة")
var card187 = new Card("<img src=\"images/Location/محطة-القطار.jpg\">", "محطة-القطار")
var card188 = new Card("<img src=\"images/Location/محكمة.png\">", "محكمة")
var card189 = new Card("<img src=\"images/Location/مخيم.jpg\">", "مخيم")
var card190 = new Card("<img src=\"images/Location/مدرسة.jpg\">", "مدرسة")
var card191 = new Card("<img src=\"images/Location/مدينة.jpg\">", "مدينة")
var card192 = new Card("<img src=\"images/Location/مزرعة.jpg\">", "مزرعة")
var card193 = new Card("<img src=\"images/Location/مستشفى.jpeg\">", "مستشفى")
var card194 = new Card("<img src=\"images/Location/مسرح.png\">", "مسرح")
var card195 = new Card("<img src=\"images/Location/مصرف_بنك.jpg\">", "مصرف_بنك")
var card196 = new Card("<img src=\"images/Location/مطار.jpg\">", "مطار")
var card197 = new Card("<img src=\"images/Location/مطعم.jpg\">", "مطعم")
var card198 = new Card("<img src=\"images/Location/مكتب.jpg\">", "مكتب")
var card199 = new Card("<img src=\"images/Location/مكتبة.jpg\">", "مكتبة")
var card200 = new Card("<img src=\"images/Location/منتزه.jpg\">", "منتزه")
var card201 = new Card("<img src=\"images/Location/منزل_بيت_دار_مسكن.jpg\">", "منزل_بيت_دار_مسكن")
var card202 = new Card("<img src=\"images/Location/موقع_مكان.jpg\">", "موقع_مكان")
var card203 = new Card("<img src=\"images/Location/ناد_ليلي.jpg\">", "ناد_ليلي")
var card204 = new Card("<img src=\"images/Nature/العالمية_(عَالَم_دنيا).jpg\">", "العالمية_(عَالَم_دنيا)")
var card205 = new Card("<img src=\"images/Nature/بَحَر.jpg\">", "بَحَر")
var card206 = new Card("<img src=\"images/Nature/تربة_(تْرَاب).jpg\">", "تربة_(تْرَاب)")
var card207 = new Card("<img src=\"images/Nature/ثَلْج.jfif\">", "ثَلْج")
var card208 = new Card("<img src=\"images/Nature/جبل.jpg\">", "جبل")
var card209 = new Card("<img src=\"images/Nature/رِيح.jpg\">", "رِيح")
var card210 = new Card("<img src=\"images/Nature/سَمَا.jpg\">", "سَمَا")
var card211 = new Card("<img src=\"images/Nature/شَجَرَة.jpg\">", "شَجَرَة")
var card212 = new Card("<img src=\"images/Nature/شَمْس.jpg\">", "شَمْس")
var card213 = new Card("<img src=\"images/Nature/غَابَة.jpg\">", "غَابَة")
var card214 = new Card("<img src=\"images/Nature/قَمَر.jpg\">", "قَمَر")
var card215 = new Card("<img src=\"images/Nature/كَوْكَب الأَرْض.jpg\">", "كَوْكَب الأَرْض")
var card216 = new Card("<img src=\"images/Nature/مَطَر_(شِتَى).jpeg\">", "مَطَر_(شِتَى)")
var card217 = new Card("<img src=\"images/Nature/مُحِيط_المحيطات.jpg\">", "مُحِيط_المحيطات")
var card218 = new Card("<img src=\"images/Nature/نَبَات_(نبتة).jpg\">", "نَبَات_(نبتة)")
var card219 = new Card("<img src=\"images/Nature/نَهْر.jpg\">", "نَهْر")
var card220 = new Card("<img src=\"images/People/أب_والد.png\">", "أب_والد")
var card221 = new Card("<img src=\"images/People/أم_والدة.png\">", "أم_والدة")
var card222 = new Card("<img src=\"images/People/إنسان_بشر_بني-آدم.jpg\">", "إنسان_بشر_بني-آدم")
var card223 = new Card("<img src=\"images/People/ابن.jpg\">", "ابن")
var card224 = new Card("<img src=\"images/People/ابنة.jpg\">", "ابنة")
var card225 = new Card("<img src=\"images/People/الآباء_الوالدان_الوالدون.png\">", "الآباء_الوالدان_الوالدون")
var card226 = new Card("<img src=\"images/People/الأبوين.png\">", "الأبوين")
var card227 = new Card("<img src=\"images/People/العاهل=_ملك_سلطان_أمير_خليفة.png\">", "العاهل=_ملك_سلطان_أمير_خليفة")
var card228 = new Card("<img src=\"images/People/امرأة_نساء.png\">", "امرأة_نساء")
var card229 = new Card("<img src=\"images/People/بنت_صبية_فتاة.jpg\">", "بنت_صبية_فتاة")
var card230 = new Card("<img src=\"images/People/جار.jfif\">", "جار")
var card231 = new Card("<img src=\"images/People/جد.png\">", "جد")
var card232 = new Card("<img src=\"images/People/جدة.png\">", "جدة")
var card233 = new Card("<img src=\"images/People/جمهور.jfif\">", "جمهور")
var card234 = new Card("<img src=\"images/People/رجل.png\">", "رجل")
var card235 = new Card("<img src=\"images/People/رَئِيس.jpg\">", "رَئِيس")
var card236 = new Card("<img src=\"images/People/زوج.png\">", "زوج")
var card237 = new Card("<img src=\"images/People/زوجة.png\">", "زوجة")
var card238 = new Card("<img src=\"images/People/شخص.jfif\">", "شخص")
var card239 = new Card("<img src=\"images/People/شقيق_اخ.png\">", "شقيق_اخ")
var card240 = new Card("<img src=\"images/People/شقيقة_اخت.png\">", "شقيقة_اخت")
var card241 = new Card("<img src=\"images/People/صديق_رفيق_(صَاحِب).jfif\">", "صديق_رفيق_(صَاحِب)")
var card242 = new Card("<img src=\"images/People/ضحية.png\">", "ضحية")
var card243 = new Card("<img src=\"images/People/طفل.png\">", "طفل")
var card244 = new Card("<img src=\"images/People/عائلة_عيلة_أسرة.jpg\">", "عائلة_عيلة_أسرة")
var card245 = new Card("<img src=\"images/People/لَاعِب_لَعِيب.jpg\">", "لَاعِب_لَعِيب")
var card246 = new Card("<img src=\"images/People/مشجع.jpg\">", "مشجع")
var card247 = new Card("<img src=\"images/People/وَلَد_صبي_فتى.jpg\">", "وَلَد_صبي_فتى")
var card248 = new Card("<img src=\"images/Society/(فلوس_مَصَارِي)_مال.jpg\">", "(فلوس_مَصَارِي)_مال")
var card249 = new Card("<img src=\"images/Society/الطاقة-الخضراء.jpg\">", "الطاقة-الخضراء")
var card250 = new Card("<img src=\"images/Society/انتخاب_انتخابات.jpg\">", "انتخاب_انتخابات")
var card251 = new Card("<img src=\"images/Society/بندقية_(بارودة).jpg\">", "بندقية_(بارودة)")
var card252 = new Card("<img src=\"images/Society/جحيم_ جهنم.jpg\">", "جحيم_ جهنم")
var card253 = new Card("<img src=\"images/Society/جريدة_صحيفة.jpg\">", "جريدة_صحيفة")
var card254 = new Card("<img src=\"images/Society/جنة.jpg\">", "جنة")
var card255 = new Card("<img src=\"images/Society/جنس.png\">", "جنس")
var card256 = new Card("<img src=\"images/Society/حرب.jpg\">", "حرب")
var card257 = new Card("<img src=\"images/Society/دواء_طب.png\">", "دواء_طب")
var card258 = new Card("<img src=\"images/Society/دين.jpg\">", "دين")
var card259 = new Card("<img src=\"images/Society/رياضة.jpg\">", "رياضة")
var card260 = new Card("<img src=\"images/Society/سباق.jpg\">", "سباق")
var card261 = new Card("<img src=\"images/Society/سجن_حبس_محبس.jpg\">", "سجن_حبس_محبس")
var card262 = new Card("<img src=\"images/Society/سلام.jfif\">", "سلام")
var card263 = new Card("<img src=\"images/Society/سم.jfif\">", "سم")
var card264 = new Card("<img src=\"images/Society/سِعْر.png\">", "سِعْر")
var card265 = new Card("<img src=\"images/Society/طلب-زواج.png\">", "طلب-زواج")
var card266 = new Card("<img src=\"images/Society/عرس.jpg\">", "عرس")
var card267 = new Card("<img src=\"images/Society/عقد.jpg\">", "عقد")
var card268 = new Card("<img src=\"images/Society/علوم.jpg\">", "علوم")
var card269 = new Card("<img src=\"images/Society/عنصر_عرق.jpg\">", "عنصر_عرق")
var card270 = new Card("<img src=\"images/Society/فاتورة_(حساب).png\">", "فاتورة_(حساب)")
var card271 = new Card("<img src=\"images/Society/فَرِيق_مَجْمُوعَة_(فرقة).png\">", "فَرِيق_مَجْمُوعَة_(فرقة)")
var card272 = new Card("<img src=\"images/Society/قتل.jfif\">", "قتل")
var card273 = new Card("<img src=\"images/Society/كرة.png\">", "كرة")
var card274 = new Card("<img src=\"images/Society/لافتة.jpg\">", "لافتة")
var card275 = new Card("<img src=\"images/Society/لعبة.jpg\">", "لعبة")
var card276 = new Card("<img src=\"images/Society/مجلة.png\">", "مجلة")
var card277 = new Card("<img src=\"images/Society/مخدّرات.jpg\">", "مخدّرات")
var card278 = new Card("<img src=\"images/Society/مسدس.jpg\">", "مسدس")
var card279 = new Card("<img src=\"images/Society/موت.jpg\">", "موت")
var card280 = new Card("<img src=\"images/Society/مُبَارَاة.png\">", "مُبَارَاة")
var card281 = new Card("<img src=\"images/Society/هجوم_مهاجمة_مداهمة_حملة.jpg\">", "هجوم_مهاجمة_مداهمة_حملة")
var card282 = new Card("<img src=\"images/Transportation/إطار-العجلة.jpg\">", "إطار-العجلة")
var card283 = new Card("<img src=\"images/Transportation/تذكرة.jpg\">", "تذكرة")
var card284 = new Card("<img src=\"images/Transportation/حافلة_ أتوبيس_ باص.jpg\">", "حافلة_ أتوبيس_ باص")
var card285 = new Card("<img src=\"images/Transportation/دراجة هوائية.png\">", "دراجة هوائية")
var card286 = new Card("<img src=\"images/Transportation/سفينة.jpg\">", "سفينة")
var card287 = new Card("<img src=\"images/Transportation/سيارة.jpg\">", "سيارة")
var card288 = new Card("<img src=\"images/Transportation/شاحنة.jpg\">", "شاحنة")
var card289 = new Card("<img src=\"images/Transportation/طائرة.jpg\">", "طائرة")
var card290 = new Card("<img src=\"images/Transportation/قارب.jpg\">", "قارب")
var card291 = new Card("<img src=\"images/Transportation/قطار.jpg\">", "قطار")
var card292 = new Card("<img src=\"images/Transportation/محرك.jpg\">", "محرك")
var card293 = new Card("<img src=\"images/Transportation/نقل_مواصلات.png\">", "نقل_مواصلات")
var card294 = new Card("<img src=\"images/Transportation/وقود.jpg\">", "وقود")

var myCards = [card0,card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12,card13,card14,card15,card16,card17,card18,card19,card20,card21,card22,card23,card24,card25,card26,card27,card28,card29,card30,card31,card32,card33,card34,card35,card36,card37,card38,card39,card40,card41,card42,card43,card44,card45,card46,card47,card48,card49,card50,card51,card52,card53,card54,card55,card56,card57,card58,card59,card60,card61,card62,card63,card64,card65,card66,card67,card68,card69,card70,card71,card72,card73,card74,card75,card76,card77,card78,card79,card80,card81,card82,card83,card84,card85,card86,card87,card88,card89,card90,card91,card92,card93,card94,card95,card96,card97,card98,card99,card100,card101,card102,card103,card104,card105,card106,card107,card108,card109,card110,card111,card112,card113,card114,card115,card116,card117,card118,card119,card120,card121,card122,card123,card124,card125,card126,card127,card128,card129,card130,card131,card132,card133,card134,card135,card136,card137,card138,card139,card140,card141,card142,card143,card144,card145,card146,card147,card148,card149,card150,card151,card152,card153,card154,card155,card156,card157,card158,card159,card160,card161,card162,card163,card164,card165,card166,card167,card168,card169,card170,card171,card172,card173,card174,card175,card176,card177,card178,card179,card180,card181,card182,card183,card184,card185,card186,card187,card188,card189,card190,card191,card192,card193,card194,card195,card196,card197,card198,card199,card200,card201,card202,card203,card204,card205,card206,card207,card208,card209,card210,card211,card212,card213,card214,card215,card216,card217,card218,card219,card220,card221,card222,card223,card224,card225,card226,card227,card228,card229,card230,card231,card232,card233,card234,card235,card236,card237,card238,card239,card240,card241,card242,card243,card244,card245,card246,card247,card248,card249,card250,card251,card252,card253,card254,card255,card256,card257,card258,card259,card260,card261,card262,card263,card264,card265,card266,card267,card268,card269,card270,card271,card272,card273,card274,card275,card276,card277,card278,card279,card280,card281,card282,card283,card284,card285,card286,card287,card288,card289,card290,card291,card292,card293,card294];
var cardIndex = 0;

front.innerHTML = myCards[0].term;
back.innerHTML = myCards[0].definition;
back.style.visibility = "hidden";


function shuffleCards() {
  shuffle(myCards);
  cardIndex = 0;
}


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
