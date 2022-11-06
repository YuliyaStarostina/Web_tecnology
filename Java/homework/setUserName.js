function setUserName() {
  const myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = `Hi, life is beautiful and amazing, ${myName}`;
}
