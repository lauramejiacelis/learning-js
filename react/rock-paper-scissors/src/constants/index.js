export const GAMES = [
  {
    id: '0',
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
    moves: [
      {
        label: 'Rock',
        value: 'rock',
        src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/rock_qg4yh3.png',
        beats: 'scissors',
      },
      {
        label: 'Paper',
        value: 'paper',
        src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/paper_s2aqin.png',
        beats: 'rock',
      },
      {
        label: 'Scissors',
        value: 'scissors',
        src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/scissors_j8nhjt.png',
        beats: 'paper',
      },
    ],
  },
  {
    id: '1',
    src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663965253/rock-paper-scissors/RockPaperScissorsLizardSpock_ewaybn.png',
    tittle: 'Rock, Paper, Scissors, Lizard, Spock',
    instructions: {
      howToPlay:
        'In rock-paper-scissors-lizard-spock, two players will each randomly choose one of three signs: rock , paper, or scissors. Both players show their signs at the same time to see who will win. Here are the rules that determine which sign beats another:',
      rules: [
        'Scissors wins over paper (because scissors cut paper)',
        'Paper wins over rock (because paper covers rock)',
        'Rock wins over lizard (because rock crushes lizard)',
        'Lizard wins over Spock (because Lizard poisons Spock)',
        'Spock wins over scissors (because Spock smashes Scissors)',
      ],
      notes:
        'If both players show the same sign, it’s a tie. And that’s basically the whole game! It’s played in a best-two-out-of-three format.',
    },
    moves: [
      {
        label: 'Scissors',
        value: 'scissors',
        src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/scissors_j8nhjt.png',
        beats: 'paper',
      },
      {
        label: 'Paper',
        value: 'paper',
        src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/paper_s2aqin.png',
        beats: 'rock',
      },
      {
        label: 'Rock',
        value: 'rock',
        src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/rock_qg4yh3.png',
        beats: 'lizard',
      },
      {
        label: 'Lizard',
        value: 'lizard',
        src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/lizard_cyrftv.png',
        beats: 'spock',
      },
      {
        label: 'Spock',
        value: 'spock',
        src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/spock_rl1aid.png',
        beats: 'scissors',
      },
    ],
  },
];
// value y otro label...
export const RPS = [
  {
    label: 'Rock',
    value: 'rock',
    src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/rock_qg4yh3.png',
    beats: 'scissors',
  },
  {
    label: 'Paper',
    value: 'paper',
    src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/paper_s2aqin.png',
    beats: 'rock',
  },
  {
    label: 'Scissors',
    value: 'scissors',
    src: 'https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/scissors_j8nhjt.png',
    beats: 'paper',
  },
];
