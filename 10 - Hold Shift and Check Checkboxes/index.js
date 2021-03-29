// select every check box 
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// reassign 
let firstChecked;

function handleCheck(e) {
  let inBetween = false;
  // if (shift 키 눌린채로, 체크박스가 클릭)
  if (e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      // if (checkbox 가 지금 클릭된 checkbox 또는 처음에 체크된 경우)
      // inBetween 을 true 로 변경 // inBetween 을 false 로 변경
      if (checkbox === this || checkbox === firstChecked){
        inBetween = !inBetween;
      }
      // checkPoint !! 마지막에 체크된 checkbox 는 false 이므로 아래 코드가 시행되지 않는다
      if (inBetween){
        checkbox.checked = true;
      }
    });
  }
  firstChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));