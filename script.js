//variables
let bill = 0;
let percent = 0;

//adding event
document.getElementsByClassName("text-input")[0].addEventListener("change", function (e) {
  bill = e.target.value;
  console.log(bill);
});

//event function
function active(element) {
  percent = element.value;

  let tempRemove = document.getElementsByClassName("tip-button");
  for (let i = 0; i < tempRemove.length; i++) {
    tempRemove[i].classList.remove("tip-button-active");
  }

  element.classList.add("tip-button-active");
}
