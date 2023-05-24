

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainer.classList.toggle("active");
}

const modalContainer2 = document.querySelector(".modal-container2");
const modalTriggers2 = document.querySelectorAll(".modal-trigger2");

modalTriggers2.forEach(trigger => trigger.addEventListener("click", toggleModal2))

function toggleModal2(){
  modalContainer2.classList.toggle("active");
}

const modalContainer3 = document.querySelector(".modal-container3");
const modalTriggers3 = document.querySelectorAll(".modal-trigger3");

modalTriggers3.forEach(trigger => trigger.addEventListener("click", toggleModal3))

function toggleModal3(){
  modalContainer3.classList.toggle("active");
}
