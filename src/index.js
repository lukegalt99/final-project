/*
ToDo List:

#1 - Functionality
  [ ] -Pick a topic
  [ ] -Create storyline
  [ ] -Create variables
  [ ] -Use the prompt function to capture each variable value
        let noun1 = prompt('Give me a noun');
  [ ] -Build paragraph using storyline
  [ ] -Log this paragraph to the console

#2 - UI
  [ ] -Project intro and explination
  [ ] -Picture that rlates to project
  [ ] -create a form with all the field that relate to the variables
  [ ] -Submit button triggers building the paragraph
  [ ] -Display pragraph with merged values

#3 - Styling
  [ ] -Style Intro
  [ ] -Style Form (with submit button)
  [ ] -Style Mad Libs paragraph
*/

// getting form and listening for submit
let form = document.getElementById("madLibForm");
form.addEventListener("submit", buildMadLib);

// all Mad-Lib building logic goes
function buildMadLib(event) {
  event.preventDefault(); // prevents the page from refreshing

  let weather = form.querySelector('[name="weather"]').value;
  weather = highlight(weather);

  let name = form.querySelector('[name="name"]').value;
  name = highlight(uppercaseWord(name));

  let boyname = form.querySelector('[name="boyname"]').value;
  boyname = highlight(uppercaseWord(boyname));

  let transportation = form.querySelector('[name="transportation"]').value;
  transportation = highlight(transportation);

  let girlname = form.querySelector('[name="girlname"]').value;
  girlname = highlight(uppercaseWord(girlname));

  let animal = form.querySelector('[name="animal"]').value;
  animal = highlight(animal);

  let name1 = form.querySelector('[name="name1"]').value;
  name1 = highlight(uppercaseWord(name1));

  let quote = form.querySelector('[name="quote"]').value;
  quote = highlight(quote);

  let paragraph = `It was a ${weather} christmas day, and the whole ${name} family was nestled together. 
  The candles were lit and everything was almost perfect, that was until ${boyname} opened his gift and 
  found keys to a ${transportation} instead of the Xbox he had asked for. He sighed in disappointment but 
  didn't say anything because it would be very rude. It was now ${girlname}'s turn to open her gift, as 
  she unraveled the wrapping paper she discovered that Santa had gotten her a ${animal} for Christmas. 
  She was in great shock because she had never seen one before. Then it stood up and said, "${quote}". 
  The whole house went completely silent. This was one of the craziest Christmases ever in the small town 
  of ${name1} and it would go down in history.`;

  console.log(paragraph);

  // create variable for the paragraph
  let paragraphContainer = document.getElementById("paragraphContainer");
  paragraphContainer.classList.remove("is-invisible");

  let madLibsContent = document.getElementById("madLibsContent");
  madLibsContent.innerHTML = paragraph;
}

function uppercaseWord(word) {
  return word.charAt(0).toUpperCase() + word.substr(1);
}

function highlight(word) {
  return `<b class="highlight">${word}</b>`;
}
