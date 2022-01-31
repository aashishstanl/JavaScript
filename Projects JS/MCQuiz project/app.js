const  correctAnswers = ['B', 'A', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const final = document.querySelector('.text-primary');



form.addEventListener('submit', e => {
    e.preventDefault();
    
    
    


    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //checking answers

    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    //console.log(score);
    scrollTo(0,0);
    result.querySelector('span').textContent =`${score}%`;
    result.classList.remove('d-none');

    // final.onclick = changeColor;   

    // function changeColor() {
    //     final.style.color = 'green';
        
    // } 
    
    // if(score<50){
    //     final.color = 'red';
    // } else {
        
    //     final.color = 'green';
    // }

    final.textContent = 'Your Score';


    let output = 0;

    const timer = setInterval(() =>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    });


    setTimeout(() => {
        alert('Refresh the page to attempt again. Thank you!');
    }, 3500);
});