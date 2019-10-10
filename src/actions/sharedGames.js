export function checkAnswer(input, rightAnswer) {
    console.log('checkAnswers!', input, rightAnswer);
    if (input === rightAnswer) {
        console.log('RIGHT ANSWER');
        setTimeout(showAnswer('right'), 2000)
    } else {
        console.log('WRONG ANSWER...');
        setTimeout(showAnswer('wrong'), 2000)
    }
}
// function countStreak(streak, answer) {
//     if (answer === true) {
//         return streak++
//     } else {
//         return streak = 0
//     }
// }
// function checkStreak(streak) {
//     if (streak = 5) {
//         return 'extra option'
//     } else {
//         return 'same' 
//     }
// } 