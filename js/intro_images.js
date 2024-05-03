const sections = document.querySelectorAll("section");
const firstSection = document.querySelector(".first");
const lastSection = document.querySelector(".fifth");
let currentIndex = 0;
let isAnimating = false;

const projects = [
  { count: "01-05", name: "Project 1" },
  { count: "02-05", name: "Project 2" },
  { count: "03-05", name: "Project 3" },
  { count: "04-05", name: "Project 4" },
  { count: "05-05", name: "Project 5" }
];

const projectUrls = [
  "proj1.html",
  "proj2.html",
  "proj3.html",
  "proj4.html",
  "proj5.html" 
];

const projViewLink = document.querySelector(".proj-view");
projViewLink.addEventListener("click", function(event) {
    event.preventDefault(); // 기본 이벤트 제거

    // 현재 보고 있는 프로젝트 인덱스를 기반으로 해당 프로젝트 페이지로 이동
    const currentProjectIndex = currentIndex;
    const projectUrl = projectUrls[currentProjectIndex];
    window.location.href = projectUrl;
});

document.addEventListener("wheel", (event) => {
  if (isAnimating) return; // 애니메이션이 진행 중이면 중복 실행 방지

  const delta = Math.sign(event.deltaY); // 스크롤 방향 (1: 아래로, -1: 위로)

  if (delta === 1 && currentIndex < sections.length - 1) {
    goToSection(currentIndex + 1, delta);
  } else if (delta === -1 && currentIndex > 0) {
    goToSection(currentIndex - 1, delta);
  } else if (delta === 1 && currentIndex === sections.length - 1) {
    goToSection(0, delta); // 마지막 섹션에서 아래로 스크롤할 경우 첫 번째 섹션으로 이동
  } else if (delta === -1 && currentIndex === 0) {
    goToSection(sections.length - 1, delta); // 첫 번째 섹션에서 위로 스크롤할 경우 마지막 섹션으로 이동
  }
});

function goToSection(index, direction) {
  const currentSection = sections[currentIndex];
  const targetSection = sections[index];

  if (!currentSection || !targetSection) return;

  isAnimating = true;

  const currentProject = projects[index];
  const projCount = document.querySelector("#proj-count");
  const projName = document.querySelector("#proj-name");
  projCount.textContent = currentProject.count;
  projName.textContent = currentProject.name;

  // 현재 섹션에서 나가는 애니메이션
  gsap.to(currentSection, {
    y: direction * -100 + "%",
    duration: 1.5,
    onComplete: () => {
      currentSection.style.display = "none";
    }
  });

  // 타겟 섹션으로 들어오는 애니메이션
  gsap.fromTo(targetSection, {
    y: direction === 1 ? "100%" : "-100%",
    display: "block"
  }, {
    y: "0%",
    duration: 1,
    onComplete: () => {
      isAnimating = false;
    }
  });

  currentIndex = index;
}

// 초기에 첫 번째 섹션을 표시
firstSection.style.display = "block";

// 초기 프로젝트 정보 설정
const initialProject = projects[0];
const projCount = document.querySelector("#proj-count");
const projName = document.querySelector("#proj-name");
projCount.textContent = initialProject.count;
projName.textContent = initialProject.name;
