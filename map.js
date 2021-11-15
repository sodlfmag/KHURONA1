// 각각의 path와 text에 대해서  커서를 올렸을 시 이펙트 구현
const paths = document.getElementsByTagName("path");
const texts = document.getElementsByTagName("text");
const length = paths.length;
for (let i = 0; i < length; i++) {
    const temp_for_path = paths[i];
    const temp_for_text = texts[i];

    temp_for_path.onmouseenter = function() {
        temp_for_path.classList.add("mouseEnter");
    }
    temp_for_text.onmouseenter = function() {
        temp_for_path.classList.add("mouseEnter");
    }
    temp_for_path.onmouseleave = function() {
        temp_for_path.classList.remove("mouseEnter");
    }
    temp_for_text.onmouseleave = function() {
        temp_for_path.classList.remove("mouseEnter");
    }
}

const distance_val = [1,2,2,3,1,2,4,2,3,2,4,2,1,3,4,3,2];
// distance_val은 백엔드로부터 받아와야 함, 지역 별 거리두기 단계 정보
// mapping 방식은 인덱스 기준. 

for (let i = 0; i < length; i++) {
    if(distance_val[i] != 1) {
        if(paths[i].classList.contains("CD")) {
            let temp_string = "distancelvl" + distance_val[i];
            paths[i].classList.add(temp_string);
        }
    }
}

// 각 지역별로 eventhandler를 추가, 지역 클릭 시 추가적인 팝업이 나타나도록 구현.

  for (let i = 0; i < length; i++) {
      paths[i].addEventListener("click", () => {
          document.querySelector(".area" + i).classList.add("show");
      })
      texts[i].addEventListener("click", () => {
        document.querySelector(".area" + i).classList.add("show");
    })
      document.querySelector("#close" + i).addEventListener("click", () => {
          document.querySelector(".area" + i).classList.remove("show");
      })
  }