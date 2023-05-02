/* This files contains for ALL room types the rooms photos (more than 1) and overall description */
/* This file is used to render the overall big pictures on the website. roomTypes2.js contains the same info */
/* but more details: for example, standard room type has two subtypes, with 2 and 3 beds respectively. Same is true for family type */
export const roomType = [
    {
    id: 0,
    category: 'rooms',
    name: 'Standard Room',
    nameJ: '標準ルーム',
    caption: 'The standard rooms can sleep up to three guests. Both western style and Japanese style (tatami) rooms are available',
    captionJ: '客室によって、収容人数が２−３人です。洋室と和室があります。',
    images: [ 
        {
            id: 0,
            image: '/assets/images/rooms/standard/rooms-std-0.jpg'
        },
        {
            id: 1,
            image: '/assets/images/rooms/standard/rooms-std-1.jpg'
        },
        {
            id: 2,
            image: '/assets/images/rooms/standard/rooms-std-2.jpg'
        }
    ]
    },
    {
        id: 1,
        category: 'rooms',
        name: 'Family Room',
        nameJ: 'ファミリルーム',
        caption: 'The family rooms can accommodate from five to seven guests. Two suite rooms have both western style beds and Japanese style tatami.',
        captionJ: '客室によって、5ー7人が入れます。洋室と和室のスウィートルームが二つがあります。',
        images: [ 
            {
                id: 0,
                image: '/assets/images/rooms/suites/rooms-suite-0.jpg'
            },
            {
                id: 1,
                image: '/assets/images/rooms/suites/rooms-suite-1.jpg'
            },
            {
                id: 2,
                image: '/assets/images/rooms/suites/rooms-suite-2.jpg'
            }
        ]
    },
    {
        id: 2,
        category: 'rooms',
        name: 'Group Room',
        nameJ: 'グループ室',
        caption: 'This large Japanese style room can accommodate up to 11 guests. It is best for traveling groups.',
        captionJ: 'この大きな畳室は、11名までの顧客が入られます。団体旅行に最適。',
        images: [ 
            {
                id: 0,
                image: '/assets/images/rooms/group/rooms-group-0.jpg'
            },
            {
                id: 1,
                image: '/assets/images/rooms/group/rooms-group-1.jpg'
            }
        ]
    },
    {
        id: 3,
        category: 'amenities',
        name: 'Amenities',
        nameJ: 'アメニティー',
        caption: 'All of our rooms, with the exception of the group room, are equipped with private en-suite bathrooms and toilets for your convenience. In addition, each room is equipped with air conditioning, a TV, a hair-dryer, a kettle, a safe, a refrigerator, other toiletries and Wi-Fi services to ensure that you have a comfortable and enjoyable stay.',
        captionJ: 'グループルームを除くすべての客室には、専用のバスルームとトイレが完備されています。また、エアコン、テレビ、ヘアドライヤー、ケトル、セーフ、冷蔵庫、他のアメニティーとWi-Fiサービスも備えており、快適で心地よい滞在を楽しめます。',
        images: [ 
            {
                id: 0,
                image: '/assets/images/rooms/other/rooms-other-0.jpg'
            },
            {
                id: 1,
                image: '/assets/images/rooms/other/rooms-other-1.jpg'
            },
            {
                id: 2,
                image: '/assets/images/rooms/other/rooms-other-2.jpg'
            }
        ]
    }
]