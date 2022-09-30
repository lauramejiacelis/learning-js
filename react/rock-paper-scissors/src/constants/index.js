export const GAMES = [
  {
    link: '/gamerps',
    src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663949922/rock-paper-scissors/RockPaperScissors_q9rttv.png',
    tittle: 'Rock, Paper, Scissors',
    instructions: {
      howToPlay:
        'In rock-paper-scissors, two players will each randomly choose one of three signs: rock , paper, or scissors. Both players show their signs at the same time to see who will win. Here are the rules that determine which sign beats another:',
      rules: [
        'Rock wins over scissors (because rock smashes scissors)',
        'Scissors wins over paper (because scissors cut paper)',
        'Paper wins over rock (because paper covers rock)',
      ],
      notes:
        'If both players show the same sign, it’s a tie. And that’s basically the whole game! It’s played in a best-two-out-of-three format.',
    },
  },
  {
    link: '/gamerpsls',
    src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663965253/rock-paper-scissors/RockPaperScissorsLizardSpock_ewaybn.png',
    tittle: 'Rock, Paper, Scissors, Lizard, Spock',
  },
];

export const RPS = [
  {
    name: 'Rock',
    src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/rock_qg4yh3.png',
    beats: 'Scissors',
  },
  {
    name: 'Paper',
    src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/paper_s2aqin.png',
    beats: 'Rock',
  },
  {
    name: 'Scissors',
    src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/scissors_j8nhjt.png',
    beats: 'Paper',
  },
];
