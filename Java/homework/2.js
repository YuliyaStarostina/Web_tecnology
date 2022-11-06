const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Don't Worry Be Happy, ${storedName}`;
}
myButton.onclick = function () {
  setUserName();
}

