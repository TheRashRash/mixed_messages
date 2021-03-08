const randomWord = require('random-word')

const randIdx = Math.floor(Math.random()*50)
// console.log(wordSet_1[randIdx] +' '+ wordSet_2[randIdx]+' '+ wordSet_3[randIdx]+' '+wordSet_4[randIdx]) 
let wordArray = []

const adjectives = []
const verbs = []
const nouns = []

let i = 0
while(i <= 50){
    let word = randomWord(randIdx)
    switch(word){
        case (/ed$/ || /es$/):
            verbs.push(word)
            break
        case (/ing$/):
            adjectives.push(word)
            break
        default:
            nouns.push(word)
    }
    i++
}

console.log(randomWord(randIdx))
/* 
To do:
1) Using randomWord, sort words into adjectives, nouns, verbs, adverbs and conjunctives
2) 
*/