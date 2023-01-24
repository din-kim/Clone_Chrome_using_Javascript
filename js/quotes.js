const quotes = [
   {
     quote: "Try not. Do or do not. There is no try.",
     author: "Yoda, Star Wars Episode V: The Empire Strikes Back",
   },
   {
     quote: "Your eyes can deceive you; don’t trust them",
     author: "Obi-Wan Kenobi, Star Wars Episode IV: A New Hope",
   },
   {
     quote:
       "Luminous beings we are, not this crude matter.",
     author: "Yoda, The Empire Strikes Back",
   },
   {
     quote: "Who’s the more foolish: the fool or the fool who follows him?",
     author: "Obi-Wan Kenobi, A New Hope",
   },
   {
     quote: "Your focus determines your reality.",
     author: "Qui-Gon Jinn, Star Wars Episode I: The Phantom Menace",
   },
   {
     quote: "No longer certain that one ever does win a war, I am.",
     author: "Yoda, The Clone Wars",
   },
   {
     quote: "Sometimes we must let go of our pride and do what is requested of us.",
     author: "Anakin Skywalker, Star Wars Episode II: Attack Of The Clones",
   },
   {
     quote: "The ability to speak does not make you intelligent.",
     author: "Qui-Gon Jinn, The Phantom Menace",
   },
   {
     quote: "Difficult to see; always in motion is the future.",
     author: "Yoda, The Empire Strikes Back",
   },
   {
     quote: "I am your father",
     author: "Darth Vador, The Empire Strikes Back",
  },
   {
     quote: "You were my brother, Anakin. I loved you.",
     author: "Obi-Wan Kenobi, Revenge of the Sith",
  },
   {
     quote: "Judge me by my size, do you?",
     author: "Yoda, The Empire Strikes Back",
  },
  {
     quote: "Power! Unlimited power!",
     author: "Palpatine, The Revenge of Sith",
  },
  {
     quote: "I am the Senate!",
     author: "Palpatine, The Revenge of Sith",
  },
];
 
const quote = document.querySelector("span:first-child");
const author = document.querySelector("span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `by ${todaysQuote.author}`;