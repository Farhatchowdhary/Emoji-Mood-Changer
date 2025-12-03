const emoji = document.querySelector(".emoji");
const changeMood = document.getElementById("changeMood");

const emojis = [
  "😔",
  "😒",
  "😘",
  "😁",
  "😂",
  "😍",
  "😊",
  "🤣",
  "😎",
  "😙",
  "🥰",
  "🤩",
  "🫥",
  "🤔",
  "😐",
  "🫡",
  "😏",
  "🙄",
  "😮",
  "😪",
  "🤐",
  "😒",
];
let currentIndex = 0;

changeMood.addEventListener("click", () => {
  emoji.textContent = emojis[currentIndex];
  currentIndex = (currentIndex + 1) % emojis.length;
});
