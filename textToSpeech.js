let speech = new SpeechSynthesisUtterance();
speech.lang = "hi";
speech.rate = 1;
speech.pitch = 1;
speech.volume= 1;
speech.text = 'Hello world';

document.querySelector("#start").addEventListener("click", () => {
  window.speechSynthesis.speak(speech);
});

myButton.addEventListener("click", () => {
  myPopup.classList.add("show");
});

let count = 0
let emoji_list = [emoji1,emoji2,emoji3,emoji4,emoji5,emoji6]
let show_list = ['emoji1-show','emoji2-show','emoji3-show','emoji4-show','emoji5-show','emoji6-show']

yes.addEventListener("click", () =>{
  myPopup.classList.remove("show");
  setTimeout( () => {
    yespopup.classList.remove("ans-show");
    clearInterval(interval)
  }, 7000)
  yespopup.classList.add("ans-show");
  let interval = setInterval(function(){
    emoji_list[count].classList.add(show_list[count])
    count = count + 1

  },1000);   
});



window.addEventListener("click", (event) =>{
  console.log('click in window')
  if (event.target == myPopup) {
    myPopup.classList.remove("show");
  }
  if (event.target == yespopup){
    yespopup.classList.remove("ans-show");
  }
});