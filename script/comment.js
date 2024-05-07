let openCloseBtn = document.querySelector(".review-open-close-button");
let inputBtn = document.querySelector(".inputBtn");
let commentCount = document.querySelector(".count");
let reviewCard = document.querySelectorAll(".review-card");

// 댓글 수량 확인
let count = () => {
  for (let i = 0; i < reviewCard.length; i++) {
    commentCount.innerText = reviewCard.length;
  }
};

count();

// 댓글 애니메이션 버튼
openCloseBtn.addEventListener("click", () => {
  move();
});

// 댓글 등록 유효성 검사
inputBtn.addEventListener("click", () => {
  let userId = document.getElementById("userId");
  let userPassword = document.getElementById("userPassword");
  let comment = document.querySelector(".comment");
  let checkMsg = document.querySelector(".checkMsg");

  if (userId.value.length < 2) {
    checkMsg.innerText = "아이디는 2글자 이상 입력해주세요.";
    checkMsg.style.display = "block";
  } else if (userPassword.value.length < 6) {
    checkMsg.innerText = "비밀번호는 6자 이상 입력해주세요.";
    checkMsg.style.display = "block";
  } else if (comment.value === "") {
    checkMsg.innerText = "내용을 입력해주세요.";
    checkMsg.style.display = "block";
  } else {
    checkMsg.style.display = "none";
    alert("등록 완료");
    // userId.value = '';
    // userPassword.value = '';
    // comment.value = '';
  }
});

// 댓글 애니메이션
let move = () => {
  let button = document.querySelector(".review-open-close-button");
  let is_CommentBtn = button.getAttribute("data-open") === "true";
  button.setAttribute("data-open", !is_CommentBtn);
  let bodyBox = document.querySelector(".review");
  let commentBox = document.querySelector(".review-main");

  if (is_CommentBtn) {
    commentBox.style.display = "block";
    button.innerText = ">";
    bodyBox.classList.add("open");
    bodyBox.classList.remove("close");
    count();
  } else {
    bodyBox.classList.add("close");
    bodyBox.classList.remove("open");
    button.innerText = "<";
    setTimeout(() => {
      commentBox.style.display = "none";
    }, 1100);
  }
};
