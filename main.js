var button = document.getElementById('button'); //  id가 "button"인 요소를 선택함.
var input = document.getElementById('input'); //  id가 "input"인 요소를 선택함.
var list = document.getElementById('list'); //  id가 "list"인 요소를 선택함.
var cnt = 1; // li 순서

button.addEventListener('click', clickButton); //button에 clickButton함수 연결



function clickButton(){ 
    var temp = document.createElement('li'); // li 엘레먼트 생성
    temp.setAttribute("id", "li"+cnt); // 속성 - id, 속성 값 - li+cnt
    temp.innerHTML = input.value; //input에 작성한 값을 li엘레멘트의 텍스트로 변경
    temp.innerHTML += "<button style='float: right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>완료</button>";
    list.appendChild(temp); // li 엘레멘트의 맨 마지막에 노드가 삽입됨.
    cnt++;
}

function remove(cnt) {
  var li = document.getElementById('li'+cnt); 
  list.removeChild(li); // li 엘레멘트 노드 삭제
}
