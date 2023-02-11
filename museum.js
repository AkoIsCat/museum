const $prevButton = document.querySelector(".prev");
const $nextButton = document.querySelector(".next");
const $carousel = document.querySelector(".carousel");
const $button_1 = document.querySelector(".button_1");
const $button_2 = document.querySelector(".button_2");
const $button_3 = document.querySelector(".button_3");
const $button_4 = document.querySelector(".button_4");
const $button_5 = document.querySelector(".button_5");
const $button_6 = document.querySelector(".button_6");
const $button_7 = document.querySelector(".button_7");
const $button_8 = document.querySelector(".button_8");
const $button_9 = document.querySelector(".button_9");
const $button_10 = document.querySelector(".button_10");
const $button_11 = document.querySelector(".button_11");
const $button_12 = document.querySelector(".button_12");
const $check = document.querySelector(".control");
const $play = document.querySelector(".play");

let index = 1;

let firstItemClone = $carousel.firstElementChild.cloneNode();
let lastItemClone = $carousel.lastElementChild.cloneNode();

$carousel.prepend(lastItemClone);
$carousel.appendChild(firstItemClone);

$button_1.addEventListener("click", () => {
  index = 1;
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
});

$button_2.addEventListener("click", () => {
  index = 2;
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
});

$button_3.addEventListener("click", () => {
  index = 3;
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
});

$button_4.addEventListener("click", () => {
  index = 4;
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
  // if (index === 4) {
  //   $button_4.style.backgroundColor = "red";
  // }
});

$button_5.addEventListener("click", () => {
  index = 5;
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
});

$button_6.addEventListener("click", () => {
  index = 6;
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
});

$button_7.addEventListener("click", () => {
  index = 7;
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
});

$button_8.addEventListener("click", () => {
  index = 8;
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
});

$button_9.addEventListener("click", () => {
  index = 9;
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
});

$button_10.addEventListener("click", () => {
  index = 10;
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
});

$button_11.addEventListener("click", () => {
  index = 11;
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
});

$button_12.addEventListener("click", () => {
  index = 12;
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
});

$prevButton.addEventListener("click", () => {
  if (index === 1) {
    setTimeout(function () {
      $carousel.style.transition = "0s";
      $carousel.style.transform = `translate3d(-${1500 * 12}px, 0, 0)`;
      // console.log("1200");
      // console.log(index);
      index = 12;
      // console.log(index);
    }, 1200);
  }

  if (index <= 12) {
    $carousel.style.transition = "1.2s";
  }

  index -= 1;
  // console.log(index);

  $carousel.style.transform = `translate3d(-${1500 * index + 1}px, 0, 0)`;
});

$nextButton.addEventListener("click", () => {
  if (index === 13) {
    setTimeout(function () {
      $carousel.style.transition = "0s";
      $carousel.style.transform = `translate3d(-${1500 * 1}px, 0, 0)`;
      // console.log("1200");
      // console.log(index, "index0");
      index = 1;
      // console.log(index);
    }, 1200);
  }

  if (index >= 0) {
    $carousel.style.transition = "1.2s";
  }

  // console.log("next");
  index += 1;
  // console.log(index);

  $carousel.style.transform = `translate3d(-${1500 * (index - 1)}px, 0, 0)`;
});

const autoSlide = () => {
  $carousel.style.transform = `translate3d(-${1500 * index}px, 0, 0)`;
  index++;
  if (index > 13) {
    setTimeout(function () {
      $carousel.style.transition = "0s";
      $carousel.style.transform = `translate3d(-${1500 * 1}px, 0, 0)`;
    }, 3800);
    index = 1;
  }
  if (index >= 0 && index <= 13) {
    $carousel.style.transition = "1.2s";
  }
};

let intervalId;
let PlayFlag = false;
let playFlag_section = false;

if (!PlayFlag) {
  // console.log("play");
  intervalId = setInterval(autoSlide, 4000);
}

$check.addEventListener("click", () => {
  if (!PlayFlag) {
    $check.textContent = "▶";
    PlayFlag = true;
    console.log(PlayFlag);
    clearInterval(intervalId);
    // console.log("play");
  } else if (PlayFlag) {
    PlayFlag = false;
    $check.textContent = "II";
    console.log(PlayFlag);
    intervalId = setInterval(autoSlide, 4000);
  }
});

// section 캐러셀

const $carousel_ex = document.querySelector(".carousel-ex");
const $carousel_item = document.querySelectorAll(".carousel-item");
const carouselWidth = 315;
const carouselMargin = 70;
const $section_prevBtn = document.querySelector(".section_prev");
const $section_nextBtn = document.querySelector(".section_next");
let currentIdx = 10;
let carouselCount = $carousel_item.length;

let section_intervalId;

makeClone();

function makeClone() {
  for (let i = 0; i < carouselCount; i++) {
    // a.cloneNode() => a만 클론, a.cloneNode(true) => a의 자식까지 클론
    let cloneSlide = $carousel_item[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    //a.appendChild(b)
    $carousel_ex.appendChild(cloneSlide);
    // $carousel_ex.prepend(cloneSlide);
  }
  for (let i = carouselCount - 1; i >= 0; i--) {
    // console.log(carouselCount);
    let cloneSlide = $carousel_item[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    // a.prepend(b)
    $carousel_ex.prepend(cloneSlide);
  }
  // updateWidth();
  setInitialPos();
  setTimeout(() => {
    $carousel_ex.classList.add("animated");
  }, 100);
}

function setInitialPos() {
  let initialTrnaslateValue = -(carouselWidth + carouselMargin) * carouselCount;
  $carousel_ex.style.transform = `translate(${initialTrnaslateValue}px)`;
}

$section_nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
  console.log(currentIdx);
});

$section_prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

function moveSlide(num) {
  $carousel_ex.style.transform = `translateX(${
    -num * (carouselWidth + carouselMargin)
  }px)`;
  currentIdx = num;
  // console.log(currentIdx, carouselCount);
  if (currentIdx - carouselCount === 10 || currentIdx - carouselCount === -10) {
    setTimeout(() => {
      $carousel_ex.classList.remove("animated");
      $carousel_ex.style.transform = setInitialPos();
      currentIdx = 10;
    }, 700);
    setTimeout(() => {
      $carousel_ex.classList.add("animated");
    }, 800);
  }
}

const autoSlide2 = () => {
  // console.log("move");
  moveSlide(currentIdx + 1);
};

if (!playFlag_section) {
  // console.log("play-section");
  section_intervalId = setInterval(autoSlide2, 3800);
}

$play.addEventListener("click", () => {
  if (!playFlag_section) {
    $play.textContent = "▶";
    playFlag_section = true;
    clearInterval(section_intervalId);
  } else if (playFlag_section) {
    playFlag_section = false;
    $play.textContent = "II";
    section_intervalId = setInterval(autoSlide2, 4000);
  }
});

// 알립니다 캐러셀

const $three_carousel = document.querySelector(".three_carousel");
const $three_play = document.querySelector(".squre");
const $first = document.querySelector(".firstBtn");
const $second = document.querySelector(".secondBtn");
const $third = document.querySelector(".thirdBtn");

const three_firstItemClone = $three_carousel.firstElementChild.cloneNode();
const three_lastItemClone = $three_carousel.lastElementChild.cloneNode();
let three_carouselIdx = 1;
let three_carouselWidth = 686;
let three_carouselMargin = 0;

$three_carousel.prepend(three_lastItemClone);
$three_carousel.appendChild(three_firstItemClone);

let playFlag_three = false;

const autoSlide3 = () => {
  $three_carousel.style.transform = `translateX(-${
    (three_carouselWidth + three_carouselMargin) * three_carouselIdx
  }px)`;
  three_carouselIdx++;
  if (three_carouselIdx > 4) {
    setTimeout(function () {
      $three_carousel.style.transition = "0s";
      $three_carousel.style.transform = `translateX(-${
        (three_carouselWidth + three_carouselMargin) * three_carouselIdx
      }px)`;
    }, 3800);
    three_carouselIdx = 1;
  }
  if (three_carouselIdx >= 0 && three_carouselIdx <= 4) {
    $three_carousel.style.transition = "1.2s";
  }
};

let threeIntervalId;

if (!PlayFlag) {
  threeIntervalId = setInterval(autoSlide3, 4000);
}

$three_play.addEventListener("click", () => {
  if (!playFlag_three) {
    $three_play.textContent = "▶";
    playFlag_three = true;
    clearInterval(threeIntervalId);
  } else if (playFlag_three) {
    playFlag_three = false;
    $three_play.textContent = "II";
    section_intervalId = setInterval(autoSlide3, 4000);
  }
});

$three_carousel.style.transform = `translateX(-${
  (three_carouselWidth + three_carouselMargin) * three_carouselIdx
}px)`;

$first.addEventListener("click", () => {
  three_carouselIdx = 1;
  $three_carousel.style.transform = `translateX(-${
    (three_carouselWidth + three_carouselMargin) * three_carouselIdx
  }px)`;
});

$second.addEventListener("click", () => {
  three_carouselIdx = 2;
  $three_carousel.style.transform = `translateX(-${
    (three_carouselWidth + three_carouselMargin) * three_carouselIdx
  }px)`;
});

$third.addEventListener("click", () => {
  three_carouselIdx = 3;
  $three_carousel.style.transform = `translateX(-${
    (three_carouselWidth + three_carouselMargin) * three_carouselIdx
  }px)`;
});

// 행사 캐러셀

const $event_carousel = document.querySelector(".event_carousel");
const $event_carousel_item = document.querySelectorAll(".event_carousel_item");
const $event_left = document.querySelector(".event_left");
const $event_right = document.querySelector(".event_right");
const eventIdx = document.querySelector(".event_idx");
let event_carouselIdx = 1;
let event_carouselWidth = 300;

$event_carousel.prepend($event_carousel_item[1]);
$event_carousel.appendChild($event_carousel_item[0]);

$event_carousel.style.transform = `translateX(-${
  event_carouselWidth * three_carouselIdx
}px)`;

makeClone2();

function makeClone2() {
  let cloneSlide = $event_carousel_item[0].cloneNode(true);
  let cloneSlide2 = $event_carousel_item[1].cloneNode(true);

  cloneSlide.classList.add("clone");
  cloneSlide2.classList.add("clone");

  $event_carousel.prepend(cloneSlide);
  $event_carousel.appendChild(cloneSlide2);
}

$event_left.addEventListener("click", () => {
  if (event_carouselIdx === 1) {
    setTimeout(() => {
      $event_carousel.classList.remove("animated");
      $event_carousel.style.transform = `translate3d(-${
        event_carouselWidth * 2
      }px, 0, 0)`;
      event_carouselIdx = 2;
    }, 900);

    setTimeout(() => {
      $event_carousel.classList.add("animated");
    }, 1000);
  }

  event_carouselIdx--;

  $event_carousel.style.transform = `translate3d(-${
    event_carouselWidth * event_carouselIdx
  }px, 0, 0)`;
});

$event_right.addEventListener("click", () => {
  if (event_carouselIdx === 2) {
    eventIdx.textContent = `1 / 2`;
    setTimeout(() => {
      $event_carousel.classList.remove("animated");
      $event_carousel.style.transform = `translate3d(-${
        event_carouselWidth * 1
      }px, 0, 0)`;
      event_carouselIdx = 1;
    }, 900);

    setTimeout(() => {
      $event_carousel.classList.add("animated");
    }, 1000);
  } else {
    eventIdx.textContent = `2 / 2`;
  }

  event_carouselIdx++;

  $event_carousel.style.transform = `translate3d(-${
    event_carouselWidth * event_carouselIdx
  }px, 0, 0)`;
});

// 온라인 캐러셀

const $online_carousel = document.querySelector(".online_carousel");
const $online_carousel_item = document.querySelectorAll(
  ".online_carousel_item"
);
const $online_left = document.querySelector(".online_left");
const $online_right = document.querySelector(".online_right");
let online_carouselIdx = 4;
let online_carouselWidth = 680;
let online_carouselCount = $online_carousel_item.length;
const $online_idx = document.querySelector(".online_idx");

$online_carousel.style.transform = `translateX(-${online_carouselWidth * 4}px)`;

makeClone3();

function makeClone3() {
  for (let i = 0; i < online_carouselCount; i++) {
    let cloneSlide = $online_carousel_item[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    $online_carousel.appendChild(cloneSlide);
  }
  for (let i = online_carouselCount - 1; i >= 0; i--) {
    let cloneSlide = $online_carousel_item[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    $online_carousel.prepend(cloneSlide);
  }
  setTimeout(() => {
    $online_carousel.classList.add("animated");
  }, 100);
}

function moveSlide2(num) {
  $online_carousel.style.transform = `translateX(${
    -num * online_carouselWidth
  }px)`;
  online_carouselIdx = num;
  if (
    online_carouselIdx - online_carouselCount === 4 ||
    online_carouselIdx - online_carouselCount === -4
  ) {
    setTimeout(() => {
      $online_carousel.classList.remove("animated");
      $online_carousel.style.transform = `translateX(-${
        online_carouselWidth * 4
      }px)`;
      online_carouselIdx = 4;
    }, 900);
    setTimeout(() => {
      $online_carousel.classList.add("animated");
    }, 1000);
  }
}

$online_left.addEventListener("click", () => {
  moveSlide2(online_carouselIdx - 1);

  switch (online_carouselIdx) {
    case 0:
      $online_idx.textContent = "1 / 4";
      break;
    case 1:
      $online_idx.textContent = "2 / 4";
      break;
    case 2:
      $online_idx.textContent = "3 / 4";
      break;
    case 3:
      $online_idx.textContent = "4 / 4";
      break;
    case 4:
      $online_idx.textContent = "1 / 4";
      break;
    case 5:
      $online_idx.textContent = "2 / 4";
      break;
    case 6:
      $online_idx.textContent = "3 / 4";
      break;
    case 7:
      $online_idx.textContent = "4 / 4";
      break;
    case 8:
      $online_idx.textContent = "1 / 4";
      break;
    case 9:
      $online_idx.textContent = "1 / 4";
      break;
    case 10:
      $online_idx.textContent = "2 / 4";
      break;
    case 11:
      $online_idx.textContent = "3 / 4";
      break;
    case 12:
      $online_idx.textContent = "4 / 4";
      break;
  }
});

$online_right.addEventListener("click", () => {
  moveSlide2(online_carouselIdx + 1);

  switch (online_carouselIdx) {
    case 0:
      $online_idx.textContent = "1 / 4";
      break;
    case 1:
      $online_idx.textContent = "2 / 4";
      break;
    case 2:
      $online_idx.textContent = "3 / 4";
      break;
    case 3:
      $online_idx.textContent = "4 / 4";
      break;
    case 4:
      $online_idx.textContent = "1 / 4";
      break;
    case 5:
      $online_idx.textContent = "2 / 4";
      break;
    case 6:
      $online_idx.textContent = "3 / 4";
      break;
    case 7:
      $online_idx.textContent = "4 / 4";
      break;
    case 8:
      $online_idx.textContent = "1 / 4";
      break;
    case 9:
      $online_idx.textContent = "1 / 4";
      break;
    case 10:
      $online_idx.textContent = "2 / 4";
      break;
    case 11:
      $online_idx.textContent = "3 / 4";
      break;
    case 12:
      $online_idx.textContent = "4 / 4";
      break;
  }
});

// 알립니다 공지사항 이벤트

const $notice_btn_wrap = document.querySelector(".notice_contentsBtn");
const $notice_btn = document.querySelectorAll(".notice_btn");
let prevTargetEl = $notice_btn[0];

const $notice_content = document.querySelector(".notice_content");
const $notice_tab = document.querySelectorAll(".notice_tab");
let prevTargetTab = $notice_tab[0];
let currentTargetTab;

$notice_btn_wrap.addEventListener("click", (event) => {
  let targetEl = event.target;

  if (!targetEl.classList.contains("notice_btn")) {
    return;
  }

  if (targetEl === prevTargetEl) {
    return;
  }

  if (targetEl.classList.contains("call")) {
    currentTargetTab = $notice_tab[0];
    removeAndAdd(currentTargetTab, prevTargetTab);
  } else if (targetEl.classList.contains("test")) {
    currentTargetTab = $notice_tab[1];
    removeAndAdd(currentTargetTab, prevTargetTab);
  } else if (targetEl.classList.contains("employ")) {
    currentTargetTab = $notice_tab[2];
    removeAndAdd(currentTargetTab, prevTargetTab);
  } else {
    currentTargetTab = $notice_tab[3];
    removeAndAdd(currentTargetTab, prevTargetTab);
  }
  targetEl.classList.add("selected");
  prevTargetEl.classList.remove("selected");

  prevTargetEl = targetEl;
  prevTargetTab = currentTargetTab;
});

const removeAndAdd = (currentTargetTab, prevTargetTab) => {
  currentTargetTab.classList.remove("hidden");
  prevTargetTab.classList.add("hidden");
};

const $topBtn = document.querySelector(".topBtn");

$topBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// 네비게이션 하위 메뉴 드롭다운
/*
const $nav_dropDown = document.querySelector(".left");
const $nav_subMenu = document.querySelector(".sub-menu");
const $nav_underMenu = document.querySelector(".under-menu");

let over = false;

$nav_dropDown.addEventListener("mouseover", () => {
  over = true;
  $nav_subMenu.classList.add("show");
});

$nav_underMenu.addEventListener("mouseover", () => {
  over = true;
  // $nav_subMenu.classList.add("show");
  // console.log("over");
});

$nav_subMenu.addEventListener("mouseout", () => {
  over = false;
  // console.log(over);
  console.log($nav_subMenu.parentNode);
  if (!over) {
    setTimeout(() => {
      console.log("remove show");
      $nav_subMenu.classList.remove("show");
    }, 500);
  }
  console.log("out");
});
*/

const $dropDown_w = document.querySelector(".dropDown-w");
const $sub_menu = document.querySelector(".sub-menu");
const $under_menu = document.querySelectorAll(".under-menu");

const $left = document.querySelector(".left");

let prevElement = null;
let subMenu;

$left.addEventListener("mouseover", (event) => {
  let element = event.target;

  if (subMenu) {
    subMenu.classList.remove("show");
  }

  while (!element.classList.contains("dropDown-w")) {
    element = element.parentNode;

    if (element.nodeName == "BODY") {
      element = null;
      return;
    }
  }
  subMenu = element.children[0];
  subMenu.classList.add("show");
});

if (!subMenu) {
  $left.addEventListener("mouseout", () => {
    if (subMenu) {
      subMenu.classList.remove("show");
    }
  });
}

for (let i = 0; i < $under_menu.length - 1; i++) {
  $under_menu[i].addEventListener("mouseout", () => {
    subMenu.classList.remove("show");
  });
}
