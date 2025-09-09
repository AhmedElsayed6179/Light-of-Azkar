// Data for adhkar (remembrances) for each section
const morningAdhkar = [
  { text: "لا إله إلا الله وحده...", reward: "10 حسنات" },
  { text: "سبحان الله وبحمده...", reward: "غفران الخطايا" },
  { text: "الحمد لله", reward: "تكفير السيئات" },
  { text: "اللهم صل على محمد", reward: "أجر عظيم" },
  { text: "الله أكبر", reward: "حسنات ومغفرة" },
  { text: "أعوذ بكلمات الله", reward: "حماية من الشر" },
  { text: "رب اغفر لي", reward: "المغفرة" },
  { text: "اللهم أنت السلام", reward: "السلام الشامل" },
  { text: "حسبي الله", reward: "حسبة الله" },
  { text: "اللهم فك أسري", reward: "الفرج" },
  { text: "سبحان الله العظيم", reward: "الهيبة" },
  { text: "اللهم إلي أشكو", reward: "الإنشراح" },
  { text: "اللهم إني أعوذ بك", reward: "عصمة" },
  { text: "رب أوزعني", reward: "خير الدنيا والآخرة" },
  { text: "الحمد لله رب العالمين", reward: "تكفير الذنوب" },
  { text: "لا إله إلا الواحد القدوس", reward: "الحسنات" },
  { text: "اللهم اجعل لي طريقًا", reward: "الرشد" },
  { text: "اللهم إنك عفو", reward: "العفو" },
  { text: "سبحان الله والحمد لله", reward: "الأجر الوفير" },
  { text: "أستغفر الله", reward: "المغفرة الكاملة" },
  { text: "اللهم أنت التواب", reward: "التوبة" },
  { text: "ربي أسألك حسن الختام", reward: "حسن العاقبة" },
  { text: "لا قوة إلا بالله", reward: "القوة الإلهية" },
  { text: "اللهم أعني ولا تعن علي", reward: "النصر" },
  { text: "اللهم أنت ربي", reward: "العبدية الخالصة" },
];

const eveningAdhkar = [
  { text: "أعوذ بكلمات الله التامات...", reward: "حماية كاملة" },
  { text: "بسم الله الذي لا يضر...", reward: "حفظ من كل سوء" },
  { text: "اللهم إني أسلام منصبي", reward: "السلامة" },
  {
    text: "سبحان الله والحمد لله، ولا إله إلا الله، والله أكبر",
    reward: "الأجر العظيم",
  },
  { text: "أمسينا وأمسى الملك لله", reward: "التنويع في الذكر" },
  { text: "اللهم أنت ربنا", reward: "الربوبية" },
  { text: "رب أعوذ بك من وسوسة الشيطان", reward: "الحماية من الوسوسة" },
  { text: "اللهم إني أعوذ برضاك", reward: "الرضا" },
  { text: "اللهم صل على محمد وعلى آل محمد", reward: "الصلاة على النبي" },
  { text: "اللهم أعدد مستوري", reward: "الكشف النافع" },
  {
    text: "لا إله إلا أنت سبحانك إني كنت من الظالمين",
    reward: "التوبة والعبادة",
  },
  { text: "اللهم أغفر لي ذنبي", reward: "المغفرة الخاصة" },
  { text: "اللهم أجرني من النار", reward: "النجاة" },
  { text: "رب اغفر وارحمنا", reward: "الرحمة" },
  { text: "لا حول ولا قوة إلا بالله", reward: "الاعتماد الكامل" },
  { text: "اللهم أصلح قلبي", reward: "الإصلاح الروحي" },
  { text: "اللهم آتني في الدنيا حسنة", reward: "الحسنة في الدنيا" },
  { text: "رب اشرح لي صدري", reward: "الإنشراح" },
  { text: "اللهم لا تسلب مني آمني", reward: "الحماية من الذل" },
  { text: "اللهم إني أعوذ بك من الفجور", reward: "الحماية من الفجور" },
  { text: "اللهم أغفر لي ولوالدي", reward: "المغفرة الشاملة" },
  { text: "اللهم أنت السلام ومنك السلام", reward: "السلام الإلهي" },
  { text: "اللهم اجعل القرآن ربع قلبي", reward: "السكينة" },
  { text: "اللهم أنت الرحمن تعاليت", reward: "الرحمة" },
  { text: "اللهم إني أسألك العلم النافع", reward: "العلوم النافعة" },
  { text: "اللهم أهلني لما أحببت", reward: "الإعطاء والحب" },
  { text: "اللهم أنت السميع البصير", reward: "معرفة الله" },
];

const foodAdhkar = [
  { text: "بسم الله الرحمن الرحيم", reward: "بركة في الطعام" },
  { text: "الحمد لله الذي أطعمني هذا الطعام", reward: "شكر الله" },
  { text: "اللهم بارك لنا فيما رزقتنا", reward: "بركة في الرزق" },
  {
    text: "الحمد لله الذي أطعم وسقى، وسوغه وجعل له مخرجًا",
    reward: "حمد النعمة",
  },
  {
    text: "اللهم أطعم من أطعمني، واسق من سقاني",
    reward: "دعاء لمن قدّم الطعام",
  },
  { text: "اللهم اجعل هذا الطعام قوة لنا على طاعتك", reward: "عون على الطاعة" },
  { text: "اللهم أطعم الجائعين وارزق المحرومين", reward: "رحمة بالآخرين" },
];

const travelAdhkar = [
  { text: "اللهم أنت الصاحب في السفر", reward: "حفظ في السفر" },
  { text: "اللهم إني أعوذ بك من وعثاء السفر", reward: "راحة في السفر" },
  { text: "سبحان الذي سخر لنا هذا وما كنا له مقرنين", reward: "شكر الله" },
  {
    text: "اللهم هوِّن علينا سفرنا هذا واطوِ عنا بعده",
    reward: "تيسير الطريق",
  },
  {
    text: "اللهم إني أعوذ بك من كآبة المنظر وسوء المنقلب",
    reward: "سلامة العودة",
  },
  { text: "اللهم احفظنا من كل سوء في سفرنا هذا", reward: "سلامة الطريق" },
  { text: "اللهم ارزقنا رفقةً صالحةً وخيرًا في كل خطوة", reward: "رفقة طيبة" },
];

const prayerAdhkar = [
  { text: "اللهم اجعل صلاتي نورًا", reward: "نور في الصلاة" },
  { text: "اللهم تقبل صلاتي", reward: "قبول الصلاة" },
  { text: "اللهم اجعلني من التوابين", reward: "توبة مقبولة" },
  { text: "اللهم اجعل قلبي خاشعًا، ولساني ذاكرًا", reward: "خشوع وذكر" },
  { text: "رب اجعلني مقيم الصلاة ومن ذريتي", reward: "صلاح الذرية" },
  { text: "اللهم اجعل صلاتي شفيعة لي يوم ألقاك", reward: "شفاعة الصلاة" },
  { text: "اللهم ارزقني حب الصلاة ولذتها", reward: "حب العبادة" },
];

const sleepAdhkar = [
  { text: "باسمك اللهم أموت وأحيا", reward: "حفظ أثناء النوم" },
  { text: "اللهم قني عذابك يوم تبعث عبادك", reward: "حماية من العذاب" },
  { text: "اللهم أسلمت نفسي إليك", reward: "سلامة النفس" },
  { text: "اللهم باسمك وضعت جنبي وبك أرفعه", reward: "حفظ من كل سوء" },
  {
    text: "اللهم إن أمسكت نفسي فارحمها، وإن أرسلتها فاحفظها",
    reward: "مغفرة ورحمة",
  },
  {
    text: "سبحان الله 33، الحمد لله 33، الله أكبر 34",
    reward: "ذكر عظيم قبل النوم",
  },
  {
    text: "اللهم اجعل نومي راحة لجسدي وقوة لعبادتك",
    reward: "راحة وقوة للطاعة",
  },
];

const homeAdhkar = [
  { text: "اللهم اجعل هذا البيت آمناً مطمئناً", reward: "أمان البيت" },
  { text: "اللهم بارك لنا في أهل هذا البيت", reward: "بركة في الأسرة" },
  { text: "اللهم اجعلنا من أهل الجنة", reward: "جنة الفردوس" },
  { text: "أعوذ بكلمات الله التامات من شر ما خلق", reward: "حماية من الشرور" },
  {
    text: "اللهم إني أسألك خير المولج وخير المخرج",
    reward: "بركة الدخول والخروج",
  },
  {
    text: "بسم الله ولجنا وبسم الله خرجنا وعلى ربنا توكلنا",
    reward: "حفظ عند الدخول والخروج",
  },
  { text: "اللهم اجعل بيتنا عامرًا بذكرك وطاعتك", reward: "سكينة وطاعة" },
];

// State variables for each section
let morningIndex = parseInt(localStorage.getItem("morningIndex") || 0);
let morningRepeat = parseInt(localStorage.getItem("morningRepeat") || 0);

let eveningIndex = parseInt(localStorage.getItem("eveningIndex") || 0);
let eveningRepeat = parseInt(localStorage.getItem("eveningRepeat") || 0);

let foodIndex = parseInt(localStorage.getItem("foodIndex") || 0);
let foodRepeat = parseInt(localStorage.getItem("foodRepeat") || 0);

let travelIndex = parseInt(localStorage.getItem("travelIndex") || 0);
let travelRepeat = parseInt(localStorage.getItem("travelRepeat") || 0);

let prayerIndex = parseInt(localStorage.getItem("prayerIndex") || 0);
let prayerRepeat = parseInt(localStorage.getItem("prayerRepeat") || 0);

let sleepIndex = parseInt(localStorage.getItem("sleepIndex") || 0);
let sleepRepeat = parseInt(localStorage.getItem("sleepRepeat") || 0);

let homeIndex = parseInt(localStorage.getItem("homeIndex") || 0);
let homeRepeat = parseInt(localStorage.getItem("homeRepeat") || 0);

let tasbihCount = parseInt(localStorage.getItem("tasbihCount") || 0);

// Function to load adhkar data into the UI
function loadAdhkar(
  section,
  data,
  index,
  repeat,
  textId,
  repeatId,
  rewardId,
  progressId
) {
  const current = data[index];
  document.getElementById(textId).textContent = current.text;
  document.getElementById(repeatId).textContent = repeat + 1;
  document.getElementById(rewardId).textContent = current.reward;
  document.getElementById(progressId).value = ((index + 1) / data.length) * 100;
}

// Initial load for all sections
loadAdhkar(
  "morning",
  morningAdhkar,
  morningIndex,
  morningRepeat,
  "morning-text",
  "morning-repeat-count",
  "morning-reward",
  "morning-progress"
);
loadAdhkar(
  "evening",
  eveningAdhkar,
  eveningIndex,
  eveningRepeat,
  "evening-text",
  "evening-repeat-count",
  "evening-reward",
  "evening-progress"
);
loadAdhkar(
  "food",
  foodAdhkar,
  foodIndex,
  foodRepeat,
  "food-text",
  "food-repeat-count",
  "food-reward",
  "food-progress"
);
loadAdhkar(
  "travel",
  travelAdhkar,
  travelIndex,
  travelRepeat,
  "travel-text",
  "travel-repeat-count",
  "travel-reward",
  "travel-progress"
);
loadAdhkar(
  "prayer",
  prayerAdhkar,
  prayerIndex,
  prayerRepeat,
  "prayer-text",
  "prayer-repeat-count",
  "prayer-reward",
  "prayer-progress"
);
loadAdhkar(
  "sleep",
  sleepAdhkar,
  sleepIndex,
  sleepRepeat,
  "sleep-text",
  "sleep-repeat-count",
  "sleep-reward",
  "sleep-progress"
);
loadAdhkar(
  "home",
  homeAdhkar,
  homeIndex,
  homeRepeat,
  "home-text",
  "home-repeat-count",
  "home-reward",
  "home-progress"
);

document.getElementById("tasbih-count").textContent = tasbihCount;

// Set initial tasbih count display
function incrementRepeat(section) {
  switch (section) {
    case "morning":
      morningRepeat++;
      if (morningRepeat >= 3) {
        morningRepeat = 0;
        morningIndex = (morningIndex + 1) % morningAdhkar.length;
      }
      localStorage.setItem("morningRepeat", morningRepeat);
      localStorage.setItem("morningIndex", morningIndex);
      loadAdhkar(
        "morning",
        morningAdhkar,
        morningIndex,
        morningRepeat,
        "morning-text",
        "morning-repeat-count",
        "morning-reward",
        "morning-progress"
      );
      break;
    case "evening":
      eveningRepeat++;
      if (eveningRepeat >= 3) {
        eveningRepeat = 0;
        eveningIndex = (eveningIndex + 1) % eveningAdhkar.length;
      }
      localStorage.setItem("eveningRepeat", eveningRepeat);
      localStorage.setItem("eveningIndex", eveningIndex);
      loadAdhkar(
        "evening",
        eveningAdhkar,
        eveningIndex,
        eveningRepeat,
        "evening-text",
        "evening-repeat-count",
        "evening-reward",
        "evening-progress"
      );
      break;
    case "food":
      foodRepeat++;
      if (foodRepeat >= 3) {
        foodRepeat = 0;
        foodIndex = (foodIndex + 1) % foodAdhkar.length;
      }
      localStorage.setItem("foodRepeat", foodRepeat);
      localStorage.setItem("foodIndex", foodIndex);
      loadAdhkar(
        "food",
        foodAdhkar,
        foodIndex,
        foodRepeat,
        "food-text",
        "food-repeat-count",
        "food-reward",
        "food-progress"
      );
      break;
    case "travel":
      travelRepeat++;
      if (travelRepeat >= 3) {
        travelRepeat = 0;
        travelIndex = (travelIndex + 1) % travelAdhkar.length;
      }
      localStorage.setItem("travelRepeat", travelRepeat);
      localStorage.setItem("travelIndex", travelIndex);
      loadAdhkar(
        "travel",
        travelAdhkar,
        travelIndex,
        travelRepeat,
        "travel-text",
        "travel-repeat-count",
        "travel-reward",
        "travel-progress"
      );
      break;
    case "prayer":
      prayerRepeat++;
      if (prayerRepeat >= 3) {
        prayerRepeat = 0;
        prayerIndex = (prayerIndex + 1) % prayerAdhkar.length;
      }
      localStorage.setItem("prayerRepeat", prayerRepeat);
      localStorage.setItem("prayerIndex", prayerIndex);
      loadAdhkar(
        "prayer",
        prayerAdhkar,
        prayerIndex,
        prayerRepeat,
        "prayer-text",
        "prayer-repeat-count",
        "prayer-reward",
        "prayer-progress"
      );
      break;
    case "sleep":
      sleepRepeat++;
      if (sleepRepeat >= 3) {
        sleepRepeat = 0;
        sleepIndex = (sleepIndex + 1) % sleepAdhkar.length;
      }
      localStorage.setItem("sleepRepeat", sleepRepeat);
      localStorage.setItem("sleepIndex", sleepIndex);
      loadAdhkar(
        "sleep",
        sleepAdhkar,
        sleepIndex,
        sleepRepeat,
        "sleep-text",
        "sleep-repeat-count",
        "sleep-reward",
        "sleep-progress"
      );
      break;
    case "home":
      homeRepeat++;
      if (homeRepeat >= 3) {
        homeRepeat = 0;
        homeIndex = (homeIndex + 1) % homeAdhkar.length;
      }
      localStorage.setItem("homeRepeat", homeRepeat);
      localStorage.setItem("homeIndex", homeIndex);
      loadAdhkar(
        "home",
        homeAdhkar,
        homeIndex,
        homeRepeat,
        "home-text",
        "home-repeat-count",
        "home-reward",
        "home-progress"
      );
      break;
  }
}

// Functions to navigate to previous adhkar and reset repeat count
function prevAdhkar(section) {
  switch (section) {
    case "morning":
      morningRepeat = 0;
      morningIndex =
        (morningIndex - 1 + morningAdhkar.length) % morningAdhkar.length;
      localStorage.setItem("morningRepeat", morningRepeat);
      localStorage.setItem("morningIndex", morningIndex);
      loadAdhkar(
        "morning",
        morningAdhkar,
        morningIndex,
        morningRepeat,
        "morning-text",
        "morning-repeat-count",
        "morning-reward",
        "morning-progress"
      );
      break;
    case "evening":
      eveningRepeat = 0;
      eveningIndex =
        (eveningIndex - 1 + eveningAdhkar.length) % eveningAdhkar.length;
      localStorage.setItem("eveningRepeat", eveningRepeat);
      localStorage.setItem("eveningIndex", eveningIndex);
      loadAdhkar(
        "evening",
        eveningAdhkar,
        eveningIndex,
        eveningRepeat,
        "evening-text",
        "evening-repeat-count",
        "evening-reward",
        "evening-progress"
      );
      break;
    case "food":
      foodRepeat = 0;
      foodIndex = (foodIndex - 1 + foodAdhkar.length) % foodAdhkar.length;
      localStorage.setItem("foodRepeat", foodRepeat);
      localStorage.setItem("foodIndex", foodIndex);
      loadAdhkar(
        "food",
        foodAdhkar,
        foodIndex,
        foodRepeat,
        "food-text",
        "food-repeat-count",
        "food-reward",
        "food-progress"
      );
      break;
    case "travel":
      travelRepeat = 0;
      travelIndex =
        (travelIndex - 1 + travelAdhkar.length) % travelAdhkar.length;
      localStorage.setItem("travelRepeat", travelRepeat);
      localStorage.setItem("travelIndex", travelIndex);
      loadAdhkar(
        "travel",
        travelAdhkar,
        travelIndex,
        travelRepeat,
        "travel-text",
        "travel-repeat-count",
        "travel-reward",
        "travel-progress"
      );
      break;
    case "prayer":
      prayerRepeat = 0;
      prayerIndex =
        (prayerIndex - 1 + prayerAdhkar.length) % prayerAdhkar.length;
      localStorage.setItem("prayerRepeat", prayerRepeat);
      localStorage.setItem("prayerIndex", prayerIndex);
      loadAdhkar(
        "prayer",
        prayerAdhkar,
        prayerIndex,
        prayerRepeat,
        "prayer-text",
        "prayer-repeat-count",
        "prayer-reward",
        "prayer-progress"
      );
      break;
    case "sleep":
      sleepRepeat = 0;
      sleepIndex = (sleepIndex - 1 + sleepAdhkar.length) % sleepAdhkar.length;
      localStorage.setItem("sleepRepeat", sleepRepeat);
      localStorage.setItem("sleepIndex", sleepIndex);
      loadAdhkar(
        "sleep",
        sleepAdhkar,
        sleepIndex,
        sleepRepeat,
        "sleep-text",
        "sleep-repeat-count",
        "sleep-reward",
        "sleep-progress"
      );
      break;
    case "home":
      homeRepeat = 0;
      homeIndex = (homeIndex - 1 + homeAdhkar.length) % homeAdhkar.length;
      localStorage.setItem("homeRepeat", homeRepeat);
      localStorage.setItem("homeIndex", homeIndex);
      loadAdhkar(
        "home",
        homeAdhkar,
        homeIndex,
        homeRepeat,
        "home-text",
        "home-repeat-count",
        "home-reward",
        "home-progress"
      );
      break;
  }
}

function nextAdhkar(section) {
  switch (section) {
    case "morning":
      morningRepeat = 0;
      morningIndex = (morningIndex + 1) % morningAdhkar.length;
      localStorage.setItem("morningRepeat", morningRepeat);
      localStorage.setItem("morningIndex", morningIndex);
      loadAdhkar(
        "morning",
        morningAdhkar,
        morningIndex,
        morningRepeat,
        "morning-text",
        "morning-repeat-count",
        "morning-reward",
        "morning-progress"
      );
      break;
    case "evening":
      eveningRepeat = 0;
      eveningIndex = (eveningIndex + 1) % eveningAdhkar.length;
      localStorage.setItem("eveningRepeat", eveningRepeat);
      localStorage.setItem("eveningIndex", eveningIndex);
      loadAdhkar(
        "evening",
        eveningAdhkar,
        eveningIndex,
        eveningRepeat,
        "evening-text",
        "evening-repeat-count",
        "evening-reward",
        "evening-progress"
      );
      break;
    case "food":
      foodRepeat = 0;
      foodIndex = (foodIndex + 1) % foodAdhkar.length;
      localStorage.setItem("foodRepeat", foodRepeat);
      localStorage.setItem("foodIndex", foodIndex);
      loadAdhkar(
        "food",
        foodAdhkar,
        foodIndex,
        foodRepeat,
        "food-text",
        "food-repeat-count",
        "food-reward",
        "food-progress"
      );
      break;
    case "travel":
      travelRepeat = 0;
      travelIndex = (travelIndex + 1) % travelAdhkar.length;
      localStorage.setItem("travelRepeat", travelRepeat);
      localStorage.setItem("travelIndex", travelIndex);
      loadAdhkar(
        "travel",
        travelAdhkar,
        travelIndex,
        travelRepeat,
        "travel-text",
        "travel-repeat-count",
        "travel-reward",
        "travel-progress"
      );
      break;
    case "prayer":
      prayerRepeat = 0;
      prayerIndex = (prayerIndex + 1) % prayerAdhkar.length;
      localStorage.setItem("prayerRepeat", prayerRepeat);
      localStorage.setItem("prayerIndex", prayerIndex);
      loadAdhkar(
        "prayer",
        prayerAdhkar,
        prayerIndex,
        prayerRepeat,
        "prayer-text",
        "prayer-repeat-count",
        "prayer-reward",
        "prayer-progress"
      );
      break;
    case "sleep":
      sleepRepeat = 0;
      sleepIndex = (sleepIndex + 1) % sleepAdhkar.length;
      localStorage.setItem("sleepRepeat", sleepRepeat);
      localStorage.setItem("sleepIndex", sleepIndex);
      loadAdhkar(
        "sleep",
        sleepAdhkar,
        sleepIndex,
        sleepRepeat,
        "sleep-text",
        "sleep-repeat-count",
        "sleep-reward",
        "sleep-progress"
      );
      break;
    case "home":
      homeRepeat = 0;
      homeIndex = (homeIndex + 1) % homeAdhkar.length;
      localStorage.setItem("homeRepeat", homeRepeat);
      localStorage.setItem("homeIndex", homeIndex);
      loadAdhkar(
        "home",
        homeAdhkar,
        homeIndex,
        homeRepeat,
        "home-text",
        "home-repeat-count",
        "home-reward",
        "home-progress"
      );
      break;
  }
}

// Initial load for all sections
loadAdhkar(
  "morning",
  morningAdhkar,
  morningIndex,
  morningRepeat,
  "morning-text",
  "morning-repeat-count",
  "morning-reward",
  "morning-progress"
);
loadAdhkar(
  "evening",
  eveningAdhkar,
  eveningIndex,
  eveningRepeat,
  "evening-text",
  "evening-repeat-count",
  "evening-reward",
  "evening-progress"
);
loadAdhkar(
  "food",
  foodAdhkar,
  foodIndex,
  foodRepeat,
  "food-text",
  "food-repeat-count",
  "food-reward",
  "food-progress"
);
loadAdhkar(
  "travel",
  travelAdhkar,
  travelIndex,
  travelRepeat,
  "travel-text",
  "travel-repeat-count",
  "travel-reward",
  "travel-progress"
);
loadAdhkar(
  "prayer",
  prayerAdhkar,
  prayerIndex,
  prayerRepeat,
  "prayer-text",
  "prayer-repeat-count",
  "prayer-reward",
  "prayer-progress"
);
loadAdhkar(
  "sleep",
  sleepAdhkar,
  sleepIndex,
  sleepRepeat,
  "sleep-text",
  "sleep-repeat-count",
  "sleep-reward",
  "sleep-progress"
);
loadAdhkar(
  "home",
  homeAdhkar,
  homeIndex,
  homeRepeat,
  "home-text",
  "home-repeat-count",
  "home-reward",
  "home-progress"
);

// Load digital counter for Tasbih
document.getElementById("tasbih-count").textContent = tasbihCount;

// Example of adding a Tasbih button
document.getElementById("increment-tasbih").addEventListener("click", () => {
  tasbihCount++;
  localStorage.setItem("tasbihCount", tasbihCount);
  document.getElementById("tasbih-count").textContent = tasbihCount;
});

document.getElementById("reset-tasbih").addEventListener("click", () => {
  tasbihCount = 0;
  localStorage.setItem("tasbihCount", tasbihCount);
  document.getElementById("tasbih-count").textContent = tasbihCount;
});

const sections = [
  "morning",
  "evening",
  "food",
  "travel",
  "prayer",
  "sleep",
  "home",
];

// Add event listeners for previous, repeat, and next buttons for each section
sections.forEach((section) => {
  const prevBtn = document.getElementById(`prev-${section}`);
  const repeatBtn = document.getElementById(`repeat-${section}`);
  const nextBtn = document.getElementById(`next-${section}`);

  if (prevBtn) prevBtn.addEventListener("click", () => prevAdhkar(section));
  if (repeatBtn)
    repeatBtn.addEventListener("click", () => incrementRepeat(section));
  if (nextBtn) nextBtn.addEventListener("click", () => nextAdhkar(section));
});

// Navbar toggle for mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }
});