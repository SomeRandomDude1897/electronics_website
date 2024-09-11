function ChangeFeedback() {
  if (recent_feedback_change) {
    for (let i = 0; i < states.length; i += 1) {
      if (
        i == feedback_state &&
        feedback_signs[i].classList.contains("current-feedback-sign-off")
      ) {
        feedback_signs[i].classList.replace(
          "current-feedback-sign-off",
          "current-feedback-sign-on"
        );
      } else if (
        i != feedback_state &&
        feedback_signs[i].classList.contains("current-feedback-sign-on")
      ) {
        feedback_signs[i].classList.replace(
          "current-feedback-sign-on",
          "current-feedback-sign-off"
        );
      }
    }
    recent_feedback_change = false;
    portrait_obj.classList.remove("fade-in");
    portrait_obj.classList.add("fade-out");
    name_obj.classList.remove("fade-in");
    name_obj.classList.add("fade-out");
    position_obj.classList.remove("fade-in");
    position_obj.classList.add("fade-out");
    text_obj.classList.remove("fade-in");
    text_obj.classList.add("fade-out");
    setTimeout(() => {
      portrait_obj.src = states[feedback_state].image;
      name_obj.textContent = states[feedback_state].name;
      position_obj.textContent = states[feedback_state].position;
      text_obj.textContent = states[feedback_state].text;

      portrait_obj.classList.remove("fade-out");
      portrait_obj.classList.add("fade-in");
      name_obj.classList.remove("fade-out");
      name_obj.classList.add("fade-in");
      position_obj.classList.remove("fade-out");
      position_obj.classList.add("fade-in");
      text_obj.classList.remove("fade-out");
      text_obj.classList.add("fade-in");
    }, 500);
  }
}

let feedback_state = 0;
let recent_feedback_change = true;

const states = [
  {
    image: "lapteva.jpg",
    name: "Александра Лаптева",
    position: "Секретарь",
    text: "“Я просто в восторге от своего нового телефона XY-300! Этот аппарат сочетает в себе стиль, функциональность и высокотехнологичные возможности, что делает его идеальным спутником. Дизайн телефона просто завораживает: тонкий и легкий корпус, изогнутый экран и стильная цветовая гамма – все это создает великолепный внешний вид. Аккумулятор держит заряд на протяжении всего дня, что особенно важно для активной девушки, всегда в движении.”",
  },
  {
    image: "miku.jpg",
    name: "Мику Хатсуне",
    position: "Виртуальный певец",
    text: "“Мне очень нравится новый смартфон XY-300! Он такой лёгкий и удобный, идеально лежит в руке. Экран яркий, с отличной цветопередачей – мои концерты выглядят просто фантастически! А камера – просто мечта для всех, кто любит фотографировать. С этим телефоном можно легко создавать качественный контент, и мне нравится, как быстро всё работает. Батарея держит заряд весь день, так что я всегда на связи с вами, мои фанаты! XY-300 – это лучшее сочетание стиля и производительности.”",
  },
];

const portrait_obj = document.getElementById("feedback-image");
const name_obj = document.getElementById("feedback-name");
const position_obj = document.getElementById("feedback-position");
const text_obj = document.getElementById("feedback-textbox");

const forward_button = document.getElementById("forward-button");
const backward_button = document.getElementById("backward-button");

const feedback_signs = document.getElementsByClassName("current-feedback-sign");

setInterval(ChangeFeedback, 100);

for (let i = 0; i < states.length; i++) {
  feedback_signs[i].addEventListener("click", function () {
    feedback_state = i;
    recent_feedback_change = true;
  });
}

forward_button.addEventListener("click", function () {
  feedback_state = (feedback_state + 1) % states.length;
  recent_feedback_change = true;
});

backward_button.addEventListener("click", function () {
  feedback_state = (feedback_state - 1) % states.length;
  if (feedback_state < 0) {
    feedback_state = -feedback_state;
  }
  recent_feedback_change = true;
});
