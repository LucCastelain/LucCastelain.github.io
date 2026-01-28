"use client"

import {useLanguageContext} from "@/components/ui/languages/languages-provider.component";
import {EN_DATA, EN_PROJECT_TYPE} from "@/data/data.en";
import {FR_DATA, FR_PROJECT_TYPE} from "@/data/data.fr";
import {CH_DATA, CH_PROJECT_TYPE} from "@/data/data.ch";

export default function PortfolioDataComponent(): PortfolioData {
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
        projects: [
            {
                id: "this-website",
                title: data.thisWebsite_title,
                summary: data.thisWebsite_summary,
                description: data.thisWebsite_description,
                types: [projectType.ALL, projectType.WEB],
                images: [],
                software: [data.software.WEBSTORM],
                programmingLanguages: [data.programming_languages.NEXT_JS, data.programming_languages.REACT_JS, data.programming_languages.TAILWIND_CSS],
                keypoints: []
            },
            {
                id: "deep-mine",
                title: data.deepMine_title,
                summary: data.deepMine_summary,
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
                software: [data.software.GODOT, data.software.ASEPRITE],
                programmingLanguages: [data.programming_languages.GD_SCRIPT],
                keypoints: [
                    {
                        title: data.deepMine_keypoint1_title,
                        description: data.deepMine_keypoint1_description
                    },
                    {
                        title: data.deepMine_keypoint2_title,
                        description: data.deepMine_keypoint2_description
                    },
                    {
                        title: data.deepMine_keypoint3_title,
                        description: data.deepMine_keypoint3_description
                    },
                    {
                        title: data.deepMine_keypoint4_title,
                        description: data.deepMine_keypoint4_description
                    },
                    {
                        title: data.deepMine_keypoint5_title,
                        description: data.deepMine_keypoint5_description
                    },
                    {
                        title: data.deepMine_keypoint6_title,
                        description: data.deepMine_keypoint6_description
                    },
                    {
                        title: data.deepMine_keypoint7_title,
                        description: data.deepMine_keypoint7_description
                    },
                    {
                        title: data.deepMine_keypoint8_title,
                        description: data.deepMine_keypoint8_description
                    },
                    {
                        title: data.deepMine_keypoint9_title,
                        description: data.deepMine_keypoint9_description,
                        link: "https://store.steampowered.com/app/2659110/Deep_Mine/"
                    }
                ]
            },
            {
                id: "dices-dungeon",
                title: data.dicesDungeon_title,
                summary: data.dicesDungeon_summary,
                description: data.dicesDungeon_description,
                types: [projectType.ALL, projectType.GAME, projectType.ANDROID],
                images: [],
                software: [data.software.GODOT, data.software.ASEPRITE],
                programmingLanguages: [data.programming_languages.GD_SCRIPT],
                keypoints: [
                    {
                        title: data.dicesDungeon_keypoint1_title,
                        description: data.dicesDungeon_keypoint1_description
                    },
                    {
                        title: data.dicesDungeon_keypoint2_title,
                        description: data.dicesDungeon_keypoint2_description
                    },
                    {
                        title: data.dicesDungeon_keypoint3_title,
                        description: data.dicesDungeon_keypoint3_description
                    },
                    {
                        title: data.dicesDungeon_keypoint4_title,
                        description: data.dicesDungeon_keypoint4_description
                    },
                    {
                        title: data.dicesDungeon_keypoint5_title,
                        description: data.dicesDungeon_keypoint5_description
                    }
                ]
            },
            {
                id: "farming-game",
                title: data.farmingGame_title,
                summary: data.farmingGame_summary,
                description: data.farmingGame_description,
                types: [projectType.ALL, projectType.GAME],
                images: [],
                software: [data.software.GODOT, data.software.ASEPRITE],
                programmingLanguages: [data.programming_languages.GD_SCRIPT],
                keypoints: [
                    {
                        title: data.farmingGame_keypoint1_title,
                        description: data.farmingGame_keypoint1_description
                    },
                    {
                        title: data.farmingGame_keypoint2_title,
                        description: data.farmingGame_keypoint2_description
                    },
                    {
                        title: data.farmingGame_keypoint3_title,
                        description: data.farmingGame_keypoint3_description
                    },
                    {
                        title: data.farmingGame_keypoint4_title,
                        description: data.farmingGame_keypoint4_description
                    },
                    {
                        title: data.farmingGame_keypoint5_title,
                        description: data.farmingGame_keypoint5_description
                    },
                    {
                        title: data.farmingGame_keypoint6_title,
                        description: data.farmingGame_keypoint6_description
                    },
                    {
                        title: data.farmingGame_keypoint7_title,
                        description: data.farmingGame_keypoint7_description
                    },
                    {
                        title: data.farmingGame_keypoint8_title,
                        description: data.farmingGame_keypoint8_description
                    }
                ]
            },
            {
                id: "card-game",
                title: data.cardGamePrototype_title,
                summary: data.cardGamePrototype_summary,
                description: data.cardGamePrototype_description,
                types: [projectType.ALL, projectType.GAME],
                images: [],
                software: [data.software.GODOT],
                programmingLanguages: [data.programming_languages.GD_SCRIPT],
                keypoints: [
                    {
                        title: data.cardGamePrototype_keypoint1_title,
                        description: data.cardGamePrototype_keypoint1_description
                    },
                    {
                        title: data.cardGamePrototype_keypoint2_title,
                        description: data.cardGamePrototype_keypoint2_description
                    },
                    {
                        title: data.cardGamePrototype_keypoint3_title,
                        description: data.cardGamePrototype_keypoint3_description
                    }
                ]
            },
            {
                id: "crafting-system",
                title: data.atelierRyzaCraftingSystem_title,
                summary: data.atelierRyzaCraftingSystem_summary,
                description: data.atelierRyzaCraftingSystem_description,
                types: [projectType.ALL, projectType.GAME],
                images: [],
                software: [data.software.GODOT, data.software.ASEPRITE],
                programmingLanguages: [data.programming_languages.GD_SCRIPT],
                keypoints: [
                    {
                        title: data.atelierRyzaCraftingSystem_keypoint1_title,
                        description: data.atelierRyzaCraftingSystem_keypoint1_description
                    },
                    {
                        title: data.atelierRyzaCraftingSystem_keypoint2_title,
                        description: data.atelierRyzaCraftingSystem_keypoint2_description
                    },
                    {
                        title: data.atelierRyzaCraftingSystem_keypoint3_title,
                        description: data.atelierRyzaCraftingSystem_keypoint3_description
                    },
                    {
                        title: data.atelierRyzaCraftingSystem_keypoint4_title,
                        description: data.atelierRyzaCraftingSystem_keypoint4_description
                    }
                ]
            },
            {
                id: "missed",
                title: data.missed_title,
                summary: data.missed_summary,
                description: data.missed_description,
                types: [projectType.ALL, projectType.GAME, projectType.ANDROID],
                images: [],
                software: [data.software.UNITY, data.software.VSCODE],
                programmingLanguages: [data.programming_languages.C_SHARP],
                keypoints: [
                    {
                        title: data.missed_keypoint1_title,
                        description: data.missed_keypoint1_description
                    },
                    {
                        title: data.missed_keypoint2_title,
                        description: data.missed_keypoint2_description
                    },
                    {
                        title: data.missed_keypoint3_title,
                        description: data.missed_keypoint3_description
                    },
                    {
                        title: data.missed_keypoint4_title,
                        description: data.missed_keypoint4_description
                    }
                ]
            },
            {
                id: "GGJ-2022",
                title: data.globalGameJam2022_title,
                summary: data.globalGameJam2022_summary,
                description: data.globalGameJam2022_description,
                types: [projectType.ALL, projectType.GAME],
                images: [],
                software: [data.software.UNITY, data.software.VSCODE, data.software.GITHUB],
                programmingLanguages: [data.programming_languages.C_SHARP],
                keypoints: [
                    {
                        title: data.globalGameJam2022_keypoint1_title,
                        description: data.globalGameJam2022_keypoint1_description
                    },
                    {
                        title: data.globalGameJam2022_keypoint2_title,
                        description: data.globalGameJam2022_keypoint2_description
                    },
                    {
                        title: data.globalGameJam2022_keypoint3_title,
                        description: data.globalGameJam2022_keypoint3_description
                    },
                    {
                        title: data.globalGameJam2022_keypoint4_title,
                        description: data.globalGameJam2022_keypoint4_description
                    },
                    {
                        title: data.globalGameJam2022_keypoint5_title,
                        description: data.globalGameJam2022_keypoint5_description,
                        link: "https://v3.globalgamejam.org/2022/games/clank-7"
                    }
                ]
            },
            {
                id: "GGJ-2020",
                title: data.globalGameJam2020_title,
                summary: data.globalGameJam2020_summary,
                description: data.globalGameJam2020_description,
                types: [projectType.ALL, projectType.GAME],
                images: [],
                software: [data.software.UNITY, data.software.VSCODE, data.software.GITHUB],
                programmingLanguages: [data.programming_languages.C_SHARP],
                keypoints: [
                    {
                        title: data.globalGameJam2020_keypoint1_title,
                        description: data.globalGameJam2020_keypoint1_description
                    },
                    {
                        title: data.globalGameJam2020_keypoint2_title,
                        description: data.globalGameJam2020_keypoint2_description
                    },
                    {
                        title: data.globalGameJam2020_keypoint3_title,
                        description: data.globalGameJam2020_keypoint3_description
                    },
                    {
                        title: data.globalGameJam2020_keypoint4_title,
                        description: data.globalGameJam2020_keypoint4_description
                    },
                    {
                        title: data.globalGameJam2020_keypoint5_title,
                        description: data.globalGameJam2020_keypoint5_description
                    },
                    {
                        title: data.globalGameJam2020_keypoint6_title,
                        description: data.globalGameJam2020_keypoint6_description,
                        link: "https://v3.globalgamejam.org/2020/games/la-grande-aventure-de-nono-5"
                    }
                ]
            },
            {
                id: "game-engine",
                title: data.gameEngine_title,
                summary: data.gameEngine_summary,
                description: data.gameEngine_description,
                types: [projectType.ALL, projectType.GAME],
                images: [],
                software: [data.software.SDL2, data.software.VSCODE],
                programmingLanguages: [data.programming_languages.C_PLUSPLUS],
                keypoints: []
            },
            {
                id: "rotate",
                title: "Rotate",
                summary: data.rotate_summary,
                description: data.rotate_description,
                types: [projectType.ALL, projectType.GAME, projectType.IOS],
                images: [],
                software: [data.software.XCODE, data.software.SPRITE_KIT],
                programmingLanguages: [data.programming_languages.SWIFT],
                keypoints: [
                    {
                        title: data.rotate_keypoint1_title,
                        description: data.rotate_keypoint1_description
                    },
                    {
                        title: data.rotate_keypoint2_title,
                        description: data.rotate_keypoint2_description
                    }
                ]
            },
            {
                id: "dotwar",
                title: data.dotWar_title,
                summary: data.dotWar_summary,
                description: data.dotWar_description,
                types: [projectType.ALL, projectType.GAME, projectType.ANDROID],
                images: [],
                software: [data.software.UNITY, data.software.VSCODE],
                programmingLanguages: [data.programming_languages.C_SHARP],
                keypoints: [
                    {
                        title: data.dotWar_keypoint1_title,
                        description: data.dotWar_keypoint1_description
                    },
                    {
                        title: data.dotWar_keypoint2_title,
                        description: data.dotWar_keypoint2_description
                    },
                    {
                        title: data.dotWar_keypoint3_title,
                        description: data.dotWar_keypoint3_description
                    }
                ]
            },
            {
                id: "local-beer",
                title: data.localBeer_title,
                summary: data.localBeer_summary,
                description: data.localBeer_description,
                types: [projectType.ALL, projectType.ANDROID],
                images: [],
                software: [data.software.ANDROID_STUDIO, data.software.GITLAB],
                programmingLanguages: [data.programming_languages.JAVA],
                keypoints: [
                    {
                        title: data.localBeer_keypoint1_title,
                        description: data.localBeer_keypoint1_description
                    },
                    {
                        title: data.localBeer_keypoint2_title,
                        description: data.localBeer_keypoint2_description
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
    projects: ProjectData[];
}

export interface ProjectData {
    id: string,
    title: string,
    summary: string,
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