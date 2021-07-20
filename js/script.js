document.addEventListener('DOMContentLoaded', function(){

const nav = document.querySelector(".navbar");
const allNavItems = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.navbar-collapse');

const contactButton = document.querySelector('.contact-button');





function addShadow(){
    if(window.scrollY >=100){
        nav.classList.add('shadow-bg');
    } else {
        nav.classList.remove('shadow-bg');
    }
}
allNavItems.forEach(item => item.addEventListener('click', ()=> navList.classList.remove('show')))


window.addEventListener('scroll', addShadow);


//form
const form = `<form>
<h3>Witaj w formularzu kontaktowym </h3>
<br>
<div class="form-group">
  <label id="label-name" for="name">Imię i Nazwisko</label>
  <input type="string" class="form-control" id="form-name" placeholder="Wpisz Imię i Nazwisko">
</div>
<div class="form-group">
  <label id="label-email" for="email">Adress email</label>
  <input type="email" class="form-control" id="form-email" aria-describedby="emailHelp" placeholder="Wprowadź email">
  <small id="emailHelp" class="form-text text-muted">Nie przekażemy Twojego adresu email nikomu innemu.</small>
</div>
<div class="form-group">
  <label id="label-phone" for="phone">Nr telefonu</label>
  <input type="number" class="form-control" id="form-phone" placeholder="Wprowadź numer telefonu w formacie XXXXXXXXX">
</div>
<div class="form-group">
  <label id="label-msg" for="message">Wiadomość</label>
  <textarea class="form-control" id="form-msg" rows="5"
  placeholder="Wprowadź wiadomość"
  ></textarea>
</div>
<button type="button" class="btn btn-primary send-button">Wyślij</button>
<button type="button" class="btn btn-danger close-button">Zamknij</button>
</form>`

let badgeNameCount = 0;
let badgeEmailCount = 0;
let badgePhoneCount = 0;
let badgeMsgCount = 0;




contactButton.addEventListener('click', (event)=> {
    event.preventDefault();
    const contactForm = document.createElement('div');
    const shadowForm = document.createElement('div');
    contactForm.className = 'contact-form';
    shadowForm.className = 'shadow-form'
    contactForm.innerHTML = form;
    const body = document.getElementById('body');
    body.appendChild(shadowForm);
    body.appendChild(contactForm);
    
    document.documentElement.scrollTop = 0;
    
    // inputName validation
    const inputName = document.getElementById('form-name');
    
    inputName.addEventListener('change', (event)=>{
        
        const labelName = document.getElementById('label-name');
        const badgeName = document.createElement('div');
        badgeName.setAttribute('id','badge-name');
        const badgeNameHTML = `<span class="badge badge-danger">Podaj Imię i Nazwisko</span>`;
        badgeName.innerHTML = badgeNameHTML;
            
        if(!inputName.value || inputName.value.length < 5){
            if(!badgeNameCount){
                badgeNameCount++;
                labelName.appendChild(badgeName); 
            }
        }if (inputName.value.length >= 5) {
            const notifyName = document.getElementById('badge-name');
            if(badgeNameCount){
                labelName.removeChild(notifyName);
                badgeNameCount = 0;
            }
            
        }
    })

    //inputEmail validation
    const inputEmail = document.getElementById('form-email');
    
    inputEmail.addEventListener('change', (event)=>{
        const labelEmail = document.getElementById('label-email'); 
        const badgeEmail = document.createElement('div');
        badgeEmail.setAttribute('id', 'badge-email');
        const badgeEmailHTML = `<span class="badge badge-danger">Wprowadź poprawny email</span>`;
        badgeEmail.innerHTML = badgeEmailHTML;
        const inputEmailValue = inputEmail.value; 
        const regExpMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailValidation = regExpMail.test(String(inputEmailValue).toLocaleLowerCase());
        //console.log(emailValidation);
        if(!emailValidation){
            if(!badgeEmailCount){
                badgeEmailCount++;
                labelEmail.appendChild(badgeEmail); 
            }
            console.log(emailValidation)
        } else if(emailValidation){
            console.log(emailValidation)
            const notifyEmail = document.getElementById('badge-email');
            if(badgeEmailCount){
                labelEmail.removeChild(notifyEmail);
                badgeEmailCount = 0;
            }
        }
    })

    //inputPhone validation
    const inputPhone = document.getElementById('form-phone');
    
    inputPhone.addEventListener('change', (event)=>{
        const labelPhone = document.getElementById('label-phone'); 
        const badgePhone = document.createElement('div');
        badgePhone.setAttribute('id', 'badge-phone');
        const badgePhoneHTML = `<span class="badge badge-danger">Wprowadź poprawny nr telefonu składający się z 9 cyfr</span>`;
        badgePhone.innerHTML = badgePhoneHTML;
        const inputPhoneValue = inputPhone.value; 
        const regExpPhone = /^\d{9}$/;
        const phoneValidation = regExpPhone.test(String(inputPhoneValue).toLocaleLowerCase());
        //console.log(emailValidation);
        if(!phoneValidation){
            if(!badgePhoneCount){
                badgePhoneCount++;
                labelPhone.appendChild(badgePhone); 
            }
            
        } else if(phoneValidation){
            
            const notifyPhone = document.getElementById('badge-phone');
            if(badgePhoneCount){
                labelPhone.removeChild(notifyPhone);
                badgePhoneCount = 0;
            }
        }
    })

    //inputMsg validation
    const inputMsg = document.getElementById('form-msg');
    
    inputMsg.addEventListener('change', (event)=>{
        
        const labelMsg = document.getElementById('label-msg');
        const badgeMsg = document.createElement('div');
        badgeMsg.setAttribute('id','badge-msg');
        const badgeMsgHTML = `<span class="badge badge-danger">Wpisz wiadomość</span>`;
        badgeMsg.innerHTML = badgeMsgHTML;
            
        if(!inputMsg.value || inputMsg.value.length < 5){
            if(!badgeMsgCount){
                badgeMsgCount++;
                
                labelMsg.appendChild(badgeMsg); 
            }
        }if (inputMsg.value.length >= 5) {
            const notifyMsg = document.getElementById('badge-msg');
            if(badgeMsgCount){
                
                labelMsg.removeChild(notifyMsg);
                badgeMsgCount = 0;
            } 
        }
    })

    

    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', ()=>{
        // document.getElementsByClassName('contact-form');
        document.getElementById('body').removeChild(contactForm);
        document.getElementById('body').removeChild(shadowForm);
    });

    const quizArray = [
        {question: "Gdzie założono zespół Myslovitz?",
        answer1: "Mysłowice",
        answer2: "Sosnowiec",
        answer3: "Bydgoszcz",
        rightAnswer: "Mysłowice"
    },
    {question: "W którym roku założono Myslovitz?",
        answer1: "1945",
        answer2: "1880",
        answer3: "1992",
        rightAnswer: "1992"
    },
    {question: "Kto założył zespół Myslovitz?",
        answer1: "Krzysztof Krawczyk",
        answer2: "Krzysztof Cugowski",
        answer3: "Artur Rojek",
        rightAnswer: "Artur Rojek"
    },
    ];

    const question = `
    <h3>Przed wysłaniem wiadomości, musisz odpowiedzieć na pytanie: </h3>
    <br>
    <h4 id="question"></h4>
    <br>
 <div class="form-check-answer">
    <input class="form-check-input" type="radio" name="answer" id="exampleRadios1" value="option1">
    <label id="first-answer" class="form-check-label" for="exampleRadios1">
      Default radio
    </label>
  </div>
  <div class="form-check-answer">
    <input class="form-check-input" type="radio" name="answer" id="exampleRadios2" value="option2">
    <label id="second-answer" class="form-check-label" for="exampleRadios2">
      Second default radio
    </label>
  </div>
  <div class="form-check-answer">
    <input class="form-check-input" type="radio" name="answer" id="exampleRadios3" value="option3">
    <label id="third-answer" class="form-check-label" for="exampleRadios3">
      Disabled radio
    </label>
  </div>
  <button id="check-button" type="button" class="btn btn-primary send-button">Wyślij</button>
  `

    const sendButton = document.querySelector('.send-button');
    
   
    sendButton.addEventListener('click' , (event)=>{
        
        
            function giveRandomQuiz(){
                const randomNumber = Math.floor(Math.random() * quizArray.length);
                const randomQuiz = quizArray[randomNumber];
                return randomQuiz;
            }
            let randomQuiz = giveRandomQuiz();
            
                document.getElementById('body').removeChild(contactForm);
                const questionForm = document.createElement('div');
                questionForm.setAttribute('id','question-form');
                questionForm.className = 'contact-form';
                questionForm.innerHTML = question;
                body.appendChild(questionForm);
        
                const checkQuestion = document.getElementById("question");
                const firstAnswer = document.getElementById("first-answer");
                const secondAnswer = document.getElementById("second-answer");
                const thirdAnswer = document.getElementById("third-answer");
                const rightAnswer = randomQuiz.rightAnswer;
        
                checkQuestion.textContent = randomQuiz.question;
                firstAnswer.textContent = randomQuiz.answer1;
                secondAnswer.textContent = randomQuiz.answer2;
                thirdAnswer.textContent = randomQuiz.answer3;
    
            
            
            const answers = document.querySelectorAll('label[class="form-check-label"]');
            
            answers.forEach(element =>{
                element.addEventListener("click", (event)=>{
                    console.log(event);
                const answer = event.target.textContent;
                const checkButton = document.getElementById("check-button");
                checkButton.addEventListener('click', ()=>{
                    if(answer === rightAnswer){
                        document.getElementById('body').removeChild(questionForm);
                        document.getElementById('body').removeChild(shadowForm);
                        alert("Prawidłowa odpowiedź, Twoja wiadomość została wysłana")
                    } else {
                        // document.getElementById('body').removeChild(questionForm);
                        document.getElementById('body').removeChild(questionForm);
                        document.getElementById('body').removeChild(shadowForm);
                        alert("Nieprawidłowa odpowiedź, napisz wiadomość jeszcze raz");
                    }
                    
                })
                })
                
            })
        
        document.documentElement.scrollTop = 0;
    });

    
} );

})