const QUESTIONS = [
    {
        audio: require('../assets/sounds/T.mp3'),
        options: [
            require('../assets/images/imageA.png'),
            require('../assets/images/imageE.png'),
            require('../assets/images/imageT.png'),
            require('../assets/images/imageF.png'),
        ],
        correctAnswer: 2 // index of the correct option
    },
    {
        audio: require('../assets/sounds/N.mp3'),
        options: [
            require('../assets/images/imageN.png'),
            require('../assets/images/imageU.png'),
            require('../assets/images/imageO.png'),
            require('../assets/images/imageR.png'),
        ],
        correctAnswer: 0 // index of the correct option
    },
];

export {QUESTIONS};