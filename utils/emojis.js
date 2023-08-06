const emojis = {
    airplane: '✈️',
    alien: '👽',
    angel: '👼',
    angry: '😠',
    apple: '🍎',
    astronaut: '🧑‍🚀',
    baby: '👶',
    baby_angel: '👼',
    banana: '🍌',
    beer: '🍺',
    bell: '🔔',
    book: '📚',
    burger: '🍔',
    cake: '🍰',
    camera: '📷',
    candy: '🍬',
    car: '🚗',
    cat: '😺',
    chef: '👨‍🍳',
    christmas_tree: '🎄',
    clown: '🤡',
    coffee: '☕️',
    construction_worker: '👷‍♀️',
    cool: '😎',
    cowboy: '🤠',
    crying: '😭',
    detective: '🕵️‍♂️',
    devilish: '😈',
    doctor: '👨‍⚕️',
    dog: '🐶',
    donut: '🍩',
    dress: '👗',
    drum: '🥁',
    egg: '🥚',
    elf: '🧝',
    embarrassed: '😳',
    engineer: '👩‍🏭',
    excited: '😃',
    fairy: '🧚‍♀️',
    farmer: '👩‍🌾',
    fearful: '😨',
    fire: '🔥',
    firefighter: '👨‍🚒',
    fishing_pole: '🎣',
    flower: '🌼',
    football: '🏈',
    ghost: '👻',
    girl: '👧',
    guitar: '🎸',
    hamburger: '🍔',
    hammer: '🔨',
    happy: '😄',
    headphones: '🎧',
    heart: '❤️',
    hospital: '🏥',
    house: '🏠',
    hushed: '😯',
    ice_cream: '🍦',
    kissing: '😗',
    laughing: '😆',
    lemon: '🍋',
    lock: '🔒',
    love: '😍',
    mad: '🤬',
    magnet: '🧲',
    makeup: '💄',
    man: '👨',
    mechanic: '👨‍🔧',
    mechanic: '👨‍🔧',
    medic: '👨‍⚕️',
    mermaid: '🧜‍♀️',
    microphone: '🎤',
    money: '💰',
    monkey: '🐒',
    moon: '🌙',
    mushroom: '🍄',
    music: '🎵',
    nerd: '🤓',
    nerd: '🤓',
    neutral: '😐',
    nurse: '👩‍⚕️',
    octopus: '🐙',
    older_man: '👴',
    older_woman: '👵',
    panda: '🐼',
    party: '🎉',
    pilot: '👨‍✈️',
    pizza: '🍕',
    police_officer: '👮',
    prince: '🤴',
    princess: '👸',
    pumpkin: '🎃',
    question: '❓',
    rabbit: '🐰',
    rage: '😡',
    rainbow: '🌈',
    raised_eyebrow: '🤨',
    robot: '🤖',
    rocket: '🚀',
    rose: '🌹',
    sad: '😢',
    santa: '🎅',
    scared: '😨',
    scissors: '✂️',
    shield: '🛡️',
    singer: '🎤',
    skull: '💀',
    sleeping: '😴',
    sleepy: '😪',
    smile: '😊',
    smirk: '😏',
    snoring: '😴💤',
    soccer_ball: '⚽️',
    sneezing: '🤧',
    spider: '🕷️',
    star: '⭐️',
    sunglasses: '😎',
    superhero: '🦸‍♂️',
    surprised: '😯',
    sushi: '🍣',
    sunglasses: '😎',
    teacher: '👩‍🏫',
    teddy_bear: '🧸',
    thinking: '🤔',
    tired: '😫',
    tongue_out: '😛',
    top_hat: '🎩',
    train: '🚆',
    tree: '🌳',
    trophy: '🏆',
    unamused: '😒',
    vampire: '🧛',
    video_game: '🎮',
    violin: '🎻',
    volcano: '🌋',
    vomiting: '🤮',
    waiter: '🧑‍🍳',
    waitress: '👩‍🍳',
    weary: '😩',
    wedding: '💒',
    wink: '😉',
    wizard: '🧙',
    worried: '😟',
    writing: '✍️',
    xmas_tree: '🎄',
    yak: '🐂',
    yawning: '🥱',
    yelling: '😱',
    zipper_mouth: '🤐',
  };
  
function getEmoji(key) {
    return emojis[key];
}

function emojiExists(emoji) {
    return Object.values(emojis).includes(emoji);
}

function getAllEmojiKeys() {
    return Object.keys(emojis);
}

function getAllEmojis() {
    return Object.values(emojis);
}

function getRandomEmoji() {
    const keys = Object.keys(emojis);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return emojis[randomKey];
}

module.exports = {
    emojis,
    getEmoji,
    emojiExists,
    getAllEmojiKeys,
    getAllEmojis,
    getRandomEmoji,
};
  