// const adviceGenerateBtn = document.querySelector("button");
const adviceNumber = document.querySelector("#advice-number");
const adviceText = document.querySelector(".advice-text");

const randomNumber = () => {
  return Math.floor(Math.random() * 117);
};

const generateAdvice=()=>{
    adviceNumber.innerHTML = randomNumber();

    fetch(`https://api.adviceslip.com/advice/${randomNumber()}`)
      .then((respnose) => {
        if (!respnose.ok) {
          throw new Error("Resource not found...");
        }
        return respnose.json();
      })
      .then((data) => {
        adviceText.innerHTML = data.slip.advice;
      })
      .catch((error) => console.log(error));
}

window.addEventListener("load", generateAdvice);

document.querySelector("button").addEventListener("click",generateAdvice);