const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const qst = [
  `What's your name? Nicknames are also acceptable :)\n`, 
  `What's an activity you like doing?\n`, 
  `What do you listen to while doing that?\n`, 
  `Which meal is your favourite (eg: dinner, brunch, etc.)\n`, 
  `What's your favourite thing to eat for that meal?\n`, 
  `Which sport is your absolute favourite?\n`, 
  `What is your superpower? In a few words, tell us what you are amazing at!\n`
]

rl.question(qst[0], (ans0) => {
  rl.question(qst[1], (ans1) => {
    rl.question(qst[2], (ans2) => {
      rl.question(qst[3], (ans3) => {
        rl.question(qst[4], (ans4) => {
          rl.question(qst[5], (ans5) => {
            rl.question(qst[6], (ans6) => {
              console.log(`Greeting friends, My name is ${ans0}. I enjoy ${ans1} while I listen to ${ans2}. I always eat ${ans4} for my ${ans3} while i watch ${ans5}. Don't make me angry or else i'll use my ${ans6} superpower!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});