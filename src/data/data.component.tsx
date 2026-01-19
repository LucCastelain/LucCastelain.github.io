"use client"

import {useLanguageContext} from "@/components/ui/languages/languages-provider.component";
import {EN_DATA, EN_PROJECT_TYPE} from "@/data/data.en";
import {FR_DATA, FR_PROJECT_TYPE} from "@/data/data.fr";
import {CH_DATA, CH_PROJECT_TYPE} from "@/data/data.ch";

export default function DataComponent(): PortfolioData {
    const language = useLanguageContext();
    let data = EN_DATA;
    let projectType: ProjectType;

    switch(language.language) {
        case "français":
            data = FR_DATA;
            projectType = FR_PROJECT_TYPE;
            break;
        case "中文":
            data = CH_DATA;
            projectType = CH_PROJECT_TYPE;
            break;
        default:
            data = EN_DATA;
            projectType = EN_PROJECT_TYPE;
    }

    return {
        Skills: {
            software: ["Unity", "Godot", "Github", "Gitlab", "Jira", "Visual Studio Code", "Webstorm", "Confluence", "Android Studio", "Aseprite", "Xcode", "Adobe Premiere", "PG Admin"],
            programmingLanguages: ["C++", "C", "C#", "GDscript", "Python", "Javascript", "Node.js", "HTLM", "CSS", "AngularJS", "ReactJS", "Next.js", "Nest.js", "Swift", "PortGreSQL", "MySQL", "Prisma", "Tailwind CSS"]
        },
        projects: [
            {
                id: "this-website",
                title: data.thisWebsite_title,
                description: data.thisWebsite_description,
                types: [projectType.ALL, projectType.WEB],
                images: [],
                software: [],
                programmingLanguages: [],
                keypoints: []
            },
            {
                id: "deep-mine",
                title: data.deepMine_title,
                description: data.deepMine_description,
                types: [projectType.ALL, projectType.GAME],
                images: [
                    "DeepMine_1.png",
                    "DeepMine_2.png",
                    "DeepMine_3.png",
                    "DeepMine_4.png",
                    "DeepMine_5.png",
                    "DeepMine_6.png",
                    "DeepMine_7.png",
                    "DeepMine_8.png",
                    "DeepMine_9.png",
                    "DeepMine_10.png",
                    "DeepMine_11.png",
                    "DeepMine_12.png",
                    "DeepMine_13.png",
                    "DeepMine/DeepMine.mp4"
                ],
                software: [],
                programmingLanguages: [],
                keypoints: [
                    {
                        title: "Procedurally generated world",
                        description: "Use of noise textures, threads and chunks."
                    },
                    {
                        title: "Player physics",
                        description: "Can use ladders, fluid ropes and can swim."
                    },
                    {
                        title: "Enemies behavior",
                        description: "Use of states machines, creation of behavioral routine which changes when player in range."
                    },
                    {
                        title: "NPCs dialogues",
                        description: "NPCs can have dialogues"
                    },
                    {
                        title: "Crafting and trading systems",
                        description: "Player can trade and craft with NPCs. Player characteristics can also be improved."
                    },
                    {
                        title: "Pixel art and pixel art animation",
                        description: "Creation of textures and sprites."
                    },
                    {
                        title: "User interface",
                        description: "Works with mouse, keyboard and controllers."
                    },
                    {
                        title: "Local multiplayer",
                        description: "Up to 4 players in split-screen."
                    },
                    {
                        title: "Steam",
                        description: "",
                        link: "https://store.steampowered.com/app/2659110/Deep_Mine/"
                    }
                ]
            },
            {
                id: "dices-dungeon",
                title: "Dices Dungeon",
                description: "Dices Dungeons is a 2D game made with Godot Engine, an open source game engine.\nThis game allows the player to roll 3 dices up to 3 times. Each dice can be locked or unlocked in order to being rolled again or not. Depending on the dice combination, a chance percentage will be calculated.\nThe player can then open one of the two doors presented to him. One hide a bad thing behind it and the other a good reward.\nThe chance percentage determines the value or dangerousness of the object or monster hiding behind the choosen door.\n\nOn top of playing with probability and randomness, the player can try to do combination with the dices (such as combo of two or three same dice number...) to win objects to help him moderate the randomness of his adventure.\n\nThis game was the first game I made with Godot Engine and was published on IOS.",
                types: [projectType.ALL, projectType.GAME, projectType.ANDROID],
                images: [],
                software: [],
                programmingLanguages: [],
                keypoints: [
                    {
                        title: "First game that was published on IOS",
                        description: ""
                    },
                    {
                        title: "Art direction",
                        description: "It uses mainly 2 colors to play with contrasts and have strong art direction."
                    },
                    {
                        title: "Game design and mechanics",
                        description: "Arcade gameplay to fit the medium"
                    },
                    {
                        title: "User interface",
                        description: "Mobile UI that stay simple but display all needed information."
                    },
                    {
                        title: "Pixel art and pixel art animation",
                        description: "Designed and made textures and sprites."
                    }
                ]
            },
            {
                id: "farming-game",
                title: "Stardew Valley like game",
                description: "Inspired by Stardew Valley, I made a prototype in Godot engine trying to replicate the farming mechanics of Stardew Valley as well as its inventory.\nI created a slots inventory (as in Minecraft, Terraria, Stardew Valley and a lot of games...) with multiple tabs. I also added a dialogue and trading mechanics, as well as a day/night cycle with a clock.\n\nIt helped me understand better how the Godot Engine works.",
                types: [projectType.ALL, projectType.GAME],
                images: [],
                software: [],
                programmingLanguages: [],
                keypoints: [
                    {
                        title: "Interactive world",
                        description: "World can be heavily modified. Player can cut vegetation and destroy rocks, he can create fields, plant crops and add objects."
                    },
                    {
                        title: "NPCs dialogue",
                        description: "NPCs can have dialogues with multiple answers that can lead to different quests."
                    },
                    {
                        title: "Complex inventory system",
                        description: "Inventory has multiple tabs for different object types"
                    },
                    {
                        title: "Player customization",
                        description: "Player can create their unique player sprite from hair to skin color."
                    },
                    {
                        title: "Player equipment",
                        description: "Player can equip different tools and clothes to change its appearance."
                    },
                    {
                        title: "Day/Night cycle",
                        description: "Clock system that plays crops growth and day/night cycle."
                    },
                    {
                        title: "Trade system",
                        description: "Player can buy and sell items to NPCs. Merchant have their own money purse that refills over time."
                    },
                    {
                        title: "Local multiplayer",
                        description: "Up to 2 players."
                    }
                ]
            },
            {
                id: "card-game",
                title: "Card game prototype",
                description: "One time, I had an idea of a card game with it own rules. To test if the idea was viable and if the game was balanced, fun and tactical, I made a prototype in Godot engine.\n\nThe prototype has been made both in 2D and 3D and had a few cards to test the balancing.\nI was made in 2 days from the creation of the rules to the end of prototyping and it was fun to do and test.",
                types: [projectType.ALL, projectType.GAME],
                images: [],
                software: [],
                programmingLanguages: [],
                keypoints: [
                    {
                        title: "Opponent AI",
                        description: "Can react and play accordingly depending on player's last play."
                    },
                    {
                        title: "Same prototype in both 2D and 3D",
                        description: "Game works in 2D or 3D with same AI."
                    },
                    {
                        title: "Created game rules and balancing",
                        description: ""
                    }
                ]
            },
            {
                id: "crafting-system",
                title: "Atelier Ryza crafting system",
                description: "This prototype is an advanced crafting system made with Godot engine. It is based on Aterlier Ryza's crafting system.\nThis crafting system use custom resources to make a really complete crafting system. Each item needs one or more specific types, subtypes or unique ingredients to be crafted. The Crafted item takes in account the quality of each ingredients used.\n\nIt is easy to add new items for craft and modify custom resourses to extant the depth of this crafting system.\nIt can be easily extanded in multiple ways. For example crafted items could take the specific characteristic(s) of choosen ingredients...\n\nThis prototype is standalone and was thought so it can be easily implemented in a more complex games.",
                types: [projectType.ALL, projectType.GAME],
                images: [],
                software: [],
                programmingLanguages: [],
                keypoints: [
                    {
                        title: "Easy to update",
                        description: "Can easily add new items and characteristics without modifying source code."
                    },
                    {
                        title: "User interface",
                        description: "Clear and readable interface with all needed information. Can be used on ultra wide screen."
                    },
                    {
                        title: "User experience",
                        description: "Makes crafting interesting and engaging."
                    },
                    {
                        title: "Standalone system",
                        description: "Easy to add in bigger games."
                    }
                ]
            },
            {
                id: "missed",
                title: "Missed!",
                description: "Missed is the first game I uploaded online. I was an Android game awailable on Google Plat.\nThe player has to avoid red bullets fired by white cubes rotating around the arena. The player’s score is equivalent to the time he survived. As the time goes by, more cubes will appear and the difficulty will increase.\n\nThis game was made with unity3D 2019 and C#.",
                types: [projectType.ALL, projectType.GAME, projectType.ANDROID],
                images: [],
                software: [],
                programmingLanguages: [],
                keypoints: [
                    {
                        title: "First published game",
                        description: "Game was published on Google Play"
                    },
                    {
                        title: "Mobile controls",
                        description: "Virtual joystick available anywhere on screen."
                    },
                    {
                        title: "Game design",
                        description: "Arcade gameplay adapted to the medium"
                    },
                    {
                        title: "Game balancing",
                        description: "Difficulty increases over time without being too abrupt"
                    }
                ]
            },
            {
                id: "GGJ-2022",
                title: "Global Game Jam 2022",
                description: "In 2022, we participated to the Global Game Jam with almost the same team as the Global Game Jam 2020. We had 48 hours to make a game on the theme: duality.\n\nAt the time, we used to play a lot a board game named Clank! The game is about competing with your friends to be the one to get the more treasures in a dungeon while escaping the attacks of a dragon. You can choose between staying longer in the dungeon and try to get richer or go back to the surface faster, with less treasures but hoping the other constetants will die by the dragon.\nWe wanted to have fun recreating the game as much as we could. To evolve in the dungeon, you play cards that you can buy while playing. We had to make the deplacements of the player on the board, the shop system as well as the deck building mechanic in only two days.\n\nIt was difficult but a lot of fun. We were two programmers on Unity3D and 3 for the graphics (cards and cinematic). At the end of the jam we were exhausted but happy that we could play our board game on a computer!",
                types: [projectType.ALL, projectType.GAME],
                images: [],
                software: [],
                programmingLanguages: [],
                keypoints: [
                    {
                        title: "Made in 48 hours with a team",
                        description: ""
                    },
                    {
                        title: "Board game",
                        description: "Player movements are handled accordingly."
                    },
                    {
                        title: "Used Github for version control",
                        description: ""
                    },
                    {
                        title: "Card based gameplay",
                        description: "Player actions depend on the drawn cards. Player evolution in game comes from the deck building mechanic."
                    },
                    {
                        title: "Link to the game",
                        description: "",
                        link: "https://v3.globalgamejam.org/2022/games/clank-7"
                    }
                ]
            },
            {
                id: "GGJ-2020",
                title: "Global Game Jam 2020",
                description: "In January 2020, I participated with a few friends in the Global Gam Jam. We had 48 hours to make a game on a theme : repair.\n\nWe made a 2D platformer game in a 3D environment. The player plays a broken robot that needs to found his parts in four different levels.\nEach level can be played in any order. Each part unlock a new ability that can help in another level, so the player can chose how he wants to progress.\nFor example: finding the robot's arms unlocked the capacity to climb walls or the jetpack unlocked double jumps.\n\nIt was our first game jam and the game may need some polishing, but it was a great experience. We all learned a lot and had a lot of fun.",
                types: [projectType.ALL, projectType.GAME],
                images: [],
                software: [],
                programmingLanguages: [],
                keypoints: [
                    {
                        title: "Made in 48 hours with a team",
                        description: ""
                    },
                    {
                        title: "Mix of 2D and 3D",
                        description: "2D sprites in a 3D environment."
                    },
                    {
                        title: "Used Github for version control",
                        description: ""
                    },
                    {
                        title: "Evolving gameplay",
                        description: "Gameplay is not the same depending on the levels you play."
                    },
                    {
                        title: "Level design",
                        description: "Level design is different depending on the level's gameplay."
                    },
                    {
                        title: "Link to the game",
                        description: "",
                        link: "https://v3.globalgamejam.org/2020/games/la-grande-aventure-de-nono-5"
                    }
                ]
            },
            {
                id: "game-engine",
                title: "Game engine",
                description: "I decided to try to make a game without using any game engine. I master C++ but it was interesting to learn and use SDL2 with it.\n\nI made a basic prototype running. In this prototype, a map was generated thank to a grid information and a tileset. The player sprite could be moved around with the keyboard and shot projectiles.",
                types: [projectType.ALL, projectType.GAME],
                images: [],
                software: [],
                programmingLanguages: [],
                keypoints: []
            },
            {
                id: "rotate",
                title: "Rotate",
                description: "I made a 2D game prototype for IOS to learn Swift. I used Xcode and SpriteKit to do so.\n\nIn the game a ball is bouncing regularly and infinitely on a sphere with spikes. Using its fingers, the player can rotate the sphere and guide the ball to a green place on the sphere. Once the ball is on the green place, a new sphere is generated and the score increases by one point.\nIf the ball touches a spike, the game is lost and the score is reset.",
                types: [projectType.ALL, projectType.GAME, projectType.IOS],
                images: [],
                software: [],
                programmingLanguages: [],
                keypoints: [
                    {
                        title: "Mobile controls",
                        description: "Virtual joystick available anywhere on screen."
                    },
                    {
                        title: "Game design",
                        description: "Arcade gameplay adapted to the medium."
                    }
                ]
            },
            {
                id: "dotwar",
                title: "DotWar",
                description: "DotWar is a game which work on Android devices. The idea was to challenge myself to make a game in one day.\n\nIn this game, the player has to click on a red dot in a certain amount of time. The dot plays a piano note and moves when pressed.\nThe difficulty increases with the score.\n\nThis game was made with unity3D 2019 and C#.",
                types: [projectType.ALL, projectType.GAME, projectType.ANDROID],
                images: [],
                software: [],
                programmingLanguages: [],
                keypoints: [
                    {
                        title: "Made in 24 hours",
                        description: ""
                    },
                    {
                        title: "Published on Google Play",
                        description: ""
                    },
                    {
                        title: "Game design",
                        description: "Arcade gameplay adapted to the medium. Simple but effective gameplay to cope with the time constraint."
                    }
                ]
            },
            {
                id: "local-beer",
                title: "Local Beer",
                description: "LocalBeer is an app that lists some of the breweries of Brittany, in France. It was a project made during oriented programming classes at ENIB. The perspective of LocalBeer is to push the users to consume and discover local beers and breweries, so this app completes one of the 17 sustainable development goals.\n\nThis app was made with Android Studio 3.5, Java and XML. The database is in JSON and it can be used into other programs. The app was also made with swift by an other member of my group and it works on iPhone and apple Watch.",
                types: [projectType.ALL, projectType.ANDROID, projectType.ANDROID],
                images: [],
                software: [],
                programmingLanguages: [],
                keypoints: [
                    {
                        title: "Made to complete one of the 17 sustainable development goals",
                        description: ""
                    },
                    {
                        title: "Made both for IOS and Android",
                        description: "Development was done in parallel for both platforms."
                    }
                ]
            }
        ]
    };
}

export function ProjectTypeComponent(): ProjectType {
    const language = useLanguageContext();

    switch (language.language) {
        case "français":
            return FR_PROJECT_TYPE;
        case "中文":
            return CH_PROJECT_TYPE;
        default:
            return EN_PROJECT_TYPE;
    }
}

interface PortfolioData {
    Skills: {
        software: string[];
        programmingLanguages: string[];
    };
    projects: ProjectData[];
}

export interface ProjectData {
    id: string,
    title: string,
    description: string,
    types: string[],
    images: string[],
    software: string[],
    programmingLanguages: string[],
    keypoints: Keypoint[]
}

interface Keypoint {
    title: string,
    description: string,
    link?: string,
}

export interface ProjectType {
    ALL: string;
    GAME: string;
    WEB: string;
    ANDROID: string;
    IOS: string;
}