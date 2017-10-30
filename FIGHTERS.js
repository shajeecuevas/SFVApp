export const FIGHTERS = [
    {
        name: "Ryu",
        description: "Eternal Wanderer",
        image: require('./images/Ryu.jpg'),
        frameData: [
            {
                name: 'Standing LP',
                active: '3',
                block: '+2',
                recovery: "7",
                onHit: " +4",
                onBlock: "+2",
                damage: "30",
                stun: "70",

            },
            {
                name: 'Standing MP',
                active: '5',
                block: '+3',
                recovery: '10',
            }
        ]
    },
    {
        name: "Chun-Li",
        description: "Blue Jade",
        image: require('./images/Chun-Li.jpg'),
    },
    {
        name: "Ken",
        description: "Fire Breathing Fist",
        image: require('./images/Ken.jpg'),
    },
    {
        name: "Necalli",
        description: "Soul Consuming Darkness",
        image: require('./images/Necalli.jpg'),
    }
];