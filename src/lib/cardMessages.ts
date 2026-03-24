import type { OccasionType } from "@/types/bouquet";

const toNames = [
  "Sunshine",
  "Superstar",
  "Beautiful",
  "Sweetheart",
  "Lovely",
  "My Favorite Person",
  "Darling",
  "Wonderful You",
  "My Dear",
  "Angel",
  "Buttercup",
  "Starshine",
];

const fromNames = [
  "Your biggest fan",
  "Someone who cares",
  "Your secret admirer",
  "With all my love",
  "A grateful heart",
  "Yours truly",
  "Your number one",
  "Someone thinking of you",
  "With warm hugs",
  "Forever yours",
  "An admirer of yours",
  "With love and petals",
];

const messagesByOccasion: Record<OccasionType, string[]> = {
  none: [
    "Just wanted to remind you how wonderful you are. No reason needed — you deserve flowers every single day.",
    "I saw these and thought of you. Some people just deserve something beautiful out of the blue.",
    "You make the world brighter simply by being in it. Here's a little something to match your glow.",
    "No occasion, no reason — just me thinking about you and wanting to put a smile on your face.",
    "Some flowers for someone who flowers could never be enough for. You're one of a kind.",
    "Life's too short to wait for a special day. Today is special because you're here.",
    "I don't need a reason to tell you you're amazing. But just in case — you're amazing.",
    "These blooms reminded me of your smile. Thought you should have them.",
    "Consider this a little hug wrapped in petals. Because you deserve one right now.",
    "The world is better with you in it. Never forget that.",
  ],
  birthday: [
    "Happy birthday to someone who makes every room brighter! May this year bring you everything your heart desires.",
    "Another trip around the sun and you just keep getting more amazing. Happiest of birthdays to you!",
    "It's your special day! Wishing you laughter, joy, and all the cake you can eat. Happy birthday!",
    "The world got a little better on the day you were born. Cheers to celebrating YOU today!",
    "Happy birthday! May your year ahead bloom with happiness, adventure, and wonderful surprises.",
    "Birthdays come and go, but someone as special as you deserves to be celebrated all year long. Happy birthday!",
    "Here's to another year of being absolutely incredible. Wishing you the sweetest birthday ever!",
    "They say age is just a number, but the number of people who love you? Countless. Happy birthday!",
    "May your birthday be filled with the same warmth and joy you bring to everyone around you.",
    "Blowing out candles and making wishes — may every single one come true. Happy birthday!",
  ],
  valentine: [
    "You are the reason my heart beats a little faster and my smile shines a little brighter. Happy Valentine's Day.",
    "Every love song makes sense when I think of you. You are my favorite melody.",
    "My heart found its home the moment it found you. Sending you all my love today and always.",
    "Roses are classic but nothing compares to the beauty of what we share. You are my everything.",
    "If I had a flower for every time you made me smile, I'd have an endless garden.",
    "You don't just have my heart — you are my heart. Happy Valentine's Day, my love.",
    "In a world full of people, my eyes will always search for you. You are my forever valentine.",
    "Love isn't just a word when I'm with you — it's a whole universe. Thank you for being mine.",
    "Every day with you feels like Valentine's Day. But today, I get to shout it a little louder.",
    "You are the plot twist I never saw coming and the best chapter of my life.",
  ],
  thankyou: [
    "Thank you for being the kind of person who makes the world a warmer place. Your kindness means everything.",
    "Words aren't enough to express my gratitude, but these flowers are a start. Thank you from the bottom of my heart.",
    "You didn't have to, but you did — and that's what makes you so extraordinary. Thank you!",
    "Gratitude looks beautiful on everyone, but especially when it's directed at someone as wonderful as you.",
    "Thank you for showing up when it mattered most. You made all the difference.",
    "Some people give without expecting anything in return. You are one of those rare gems. Thank you.",
    "Your generosity and warmth have touched my heart in ways I can't fully describe. Thank you endlessly.",
    "I hope these flowers brighten your day the way you've brightened mine. A heartfelt thank you!",
    "Thank you for being you — thoughtful, caring, and absolutely wonderful.",
    "Behind every grateful heart is someone who made a difference. That someone is you. Thank you!",
  ],
  getwell: [
    "Sending you healing thoughts and warm wishes wrapped in petals. Rest up — brighter days are ahead.",
    "Take all the time you need to feel better. The world will wait because you're worth it.",
    "Wishing you a speedy recovery filled with cozy blankets, good books, and lots of rest.",
    "Even the strongest flowers need rain sometimes. You'll bloom again soon. Get well!",
    "Sending a little sunshine your way to help chase the clouds away. Feel better soon!",
    "Rest, recover, and know that so many people are rooting for you. You've got this!",
    "These flowers carry all my warmest wishes for your quick and complete recovery.",
    "Think of this as a bundle of get-well hugs. Each petal is a wish for you to feel better.",
    "Healing takes time, but you are tougher than you think. Wishing you strength and comfort.",
    "The best is yet to come — right now, focus on feeling amazing again. Get well soon!",
  ],
  congrats: [
    "You did it! All that hard work has paid off and nobody deserves this more than you.",
    "Congratulations! Your dedication and passion are truly inspiring. Here's to celebrating YOU!",
    "Big things happen for big dreamers — and you are the biggest dreamer I know. Congrats!",
    "Pop the confetti and cue the celebration! You've earned every bit of this success.",
    "Success looks amazing on you. Congratulations on reaching this incredible milestone!",
    "The world better watch out — there's no stopping you now! Congratulations on this achievement!",
    "You turned your dreams into reality and made it look effortless. So proud of you. Congrats!",
    "This is just the beginning of something extraordinary. Congratulations on this well-deserved win!",
    "Hard work, dedication, and a sprinkle of magic — that's your recipe for success. Congratulations!",
    "Cheers to you and everything you've accomplished! The future is bright and it's all yours.",
  ],
};

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomCardMessage(occasion: OccasionType): {
  to: string;
  message: string;
  from: string;
} {
  return {
    to: pickRandom(toNames),
    message: pickRandom(messagesByOccasion[occasion]),
    from: pickRandom(fromNames),
  };
}
