const wordSet_1 = ["Mr", "Mrs", "Miss", "Dr", "Ms"]
const wordSet_2 = ["Jackie", "Alex", "Jordan", "Blake", "Charlie"]
const wordSet_3 = ["ran", " walked", "hit", "ate", "jumped"]
const wordSet_4 = ["slowly", "quickly", "lazily", "blatantly", "accidentally"]
const wordSet_5 = ["the", "her", "his", "their", "our"]
const wordSet_6 = ["window", "door", "cat", "dog", "lion"]

const randIdx = Math.floor(Math.random()*4)
console.log(`${wordSet_1[randIdx]} ${wordSet_2[randIdx]} ${wordSet_3[randIdx]} ${wordSet_4[randIdx]} ${wordSet_5[randIdx]} ${wordSet_6[randIdx]}`) 
