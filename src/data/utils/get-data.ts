import {EN_DATA, EN_PROJECT_TYPE, EN_RESUME_TYPE} from "@/data/data.en";
import {FR_DATA, FR_PROJECT_TYPE, FR_RESUME_TYPE} from "@/data/data.fr";
import {CH_DATA, CH_PROJECT_TYPE, CH_RESUME_TYPE} from "@/data/data.ch";

export const languages = ["en", "fr", "ch-zh"];

export function getResumeData(language: string): ResumeData {
    let data = EN_DATA;
    let resumeType: ResumeType;

    switch(language) {
        case "fr":
            data = FR_DATA;
            resumeType = FR_RESUME_TYPE;
            break;
        case "ch-zh":
            data = CH_DATA;
            resumeType = CH_RESUME_TYPE;
            break;
        default:
            data = EN_DATA;
            resumeType = EN_RESUME_TYPE;
    }

    return {
        types: {
            ALL: resumeType.ALL,
            EDUCATION: resumeType.EDUCATION,
            EXPERIENCE: resumeType.EXPERIENCE
        },
        experiences: [
            {
                id: "high-school",
                title: data.highSchool_title,
                summary: data.highSchool_summary,
                company: data.highSchool_company,
                companyWebsite: data.highSchool_company_website,
                location: data.highSchool_location,
                startDate: new Date(Number(data.highSchool_startDate.split("-")[2]), Number(data.highSchool_startDate.split("-")[1]), Number(data.highSchool_startDate.split("-")[0])),
                endDate: new Date(Number(data.highSchool_endDate.split("-")[2]), Number(data.highSchool_endDate.split("-")[1]), Number(data.highSchool_endDate.split("-")[0])),
                type: resumeType.EDUCATION,
                software: [],
                programmingLanguages: [],
                keypoints: []
            },
            {
                id: "erasmus-exchange",
                title: data.erasmusExchange_title,
                summary: data.erasmusExchange_summary,
                company: data.erasmusExchange_company,
                companyWebsite: data.erasmusExchange_company_website,
                location: data.erasmusExchange_location,
                startDate: new Date(Number(data.erasmusExchange_startDate.split("-")[2]), Number(data.erasmusExchange_startDate.split("-")[1]), Number(data.erasmusExchange_startDate.split("-")[0])),
                endDate: new Date(Number(data.erasmusExchange_endDate.split("-")[2]), Number(data.erasmusExchange_endDate.split("-")[1]), Number(data.erasmusExchange_endDate.split("-")[0])),
                type: resumeType.EDUCATION,
                software: [],
                programmingLanguages: [],
                keypoints: []
            },
            {
                id: "engineering-degree",
                title: data.engineeringDegree_title,
                summary: data.engineeringDegree_summary,
                company: data.engineeringDegree_company,
                companyWebsite: data.engineeringDegree_company_website,
                location: data.engineeringDegree_location,
                startDate: new Date(Number(data.engineeringDegree_startDate.split("-")[2]), Number(data.engineeringDegree_startDate.split("-")[1]), Number(data.engineeringDegree_startDate.split("-")[0])),
                endDate: new Date(Number(data.engineeringDegree_endDate.split("-")[2]), Number(data.engineeringDegree_endDate.split("-")[1]), Number(data.engineeringDegree_endDate.split("-")[0])),
                type: resumeType.EDUCATION,
                software: [],
                programmingLanguages: [],
                keypoints: []
            },
            {
                id: "three-months-internship",
                title: data.threeMonthsInternship_title,
                summary: data.threeMonthsInternship_summary,
                company: data.threeMonthsInternship_company,
                companyWebsite: data.threeMonthsInternship_company_website,
                location: data.threeMonthsInternship_location,
                startDate: new Date(Number(data.threeMonthsInternship_startDate.split("-")[2]), Number(data.threeMonthsInternship_startDate.split("-")[1]), Number(data.threeMonthsInternship_startDate.split("-")[0])),
                endDate: new Date(Number(data.threeMonthsInternship_endDate.split("-")[2]), Number(data.threeMonthsInternship_endDate.split("-")[1]), Number(data.threeMonthsInternship_endDate.split("-")[0])),
                type: resumeType.EXPERIENCE,
                software: [data.software.QT],
                programmingLanguages: [data.programming_languages.C_PLUSPLUS],
                keypoints: []
            },
            {
                id: "four-months-internship",
                title: data.fourMonthsInternship_title,
                summary: data.fourMonthsInternship_summary,
                company: data.fourMonthsInternship_company,
                companyWebsite: data.fourMonthsInternship_company_website,
                location: data.fourMonthsInternship_location,
                startDate: new Date(Number(data.fourMonthsInternship_startDate.split("-")[2]), Number(data.fourMonthsInternship_startDate.split("-")[1]), Number(data.fourMonthsInternship_startDate.split("-")[0])),
                endDate: new Date(Number(data.fourMonthsInternship_endDate.split("-")[2]), Number(data.fourMonthsInternship_endDate.split("-")[1]), Number(data.fourMonthsInternship_endDate.split("-")[0])),
                type: resumeType.EXPERIENCE,
                software: [data.software.SVN, data.software.VSCODE, data.software.UNITY],
                programmingLanguages: [data.programming_languages.C_PLUSPLUS, data.programming_languages.C_SHARP, data.programming_languages.UML],
                keypoints: []
            },
            {
                id: "engineering-internship",
                title: data.engineeringInternship_title,
                summary: data.engineeringInternship_summary,
                company: data.engineeringInternship_company,
                companyWebsite: data.genesys_company_website,
                location: data.engineeringInternship_location,
                startDate: new Date(Number(data.engineeringInternship_startDate.split("-")[2]), Number(data.engineeringInternship_startDate.split("-")[1]), Number(data.engineeringInternship_startDate.split("-")[0])),
                endDate: new Date(Number(data.engineeringInternship_endDate.split("-")[2]), Number(data.engineeringInternship_endDate.split("-")[1]), Number(data.engineeringInternship_endDate.split("-")[0])),
                type: resumeType.EXPERIENCE,
                software: [data.software.GITHUB, data.software.CONFLUENCE],
                programmingLanguages: [data.programming_languages.NODEJS, data.programming_languages.JS, data.programming_languages.JQUERY, data.programming_languages.HTML, data.programming_languages.CSS],
                keypoints: []
            },
            {
                id: "genesys",
                title: data.genesys_title,
                summary: data.genesys_summary,
                company: data.genesys_company,
                companyWebsite: data.genesys_company_website,
                location: data.genesys_location,
                startDate: new Date(Number(data.genesys_startDate.split("-")[2]), Number(data.genesys_startDate.split("-")[1]), Number(data.genesys_startDate.split("-")[0])),
                endDate: new Date(Number(data.genesys_endDate.split("-")[2]), Number(data.genesys_endDate.split("-")[1]), Number(data.genesys_endDate.split("-")[0])),
                type: resumeType.EXPERIENCE,
                software: [data.software.GITHUB, data.software.CONFLUENCE, data.software.JIRA],
                programmingLanguages: [data.programming_languages.NODEJS, data.programming_languages.JS, data.programming_languages.ANGULAR_JS, data.programming_languages.REACT_JS, data.programming_languages.HTML, data.programming_languages.CSS],
                keypoints: []
            },
            {
                id: "freelance",
                title: data.freelance_title,
                summary: data.freelance_summary,
                company: data.freelance_company,
                location: data.freelance_location,
                startDate: new Date(Number(data.freelance_startDate.split("-")[2]), Number(data.freelance_startDate.split("-")[1]), Number(data.freelance_startDate.split("-")[0])),
                endDate: new Date(Number(data.freelance_endDate.split("-")[2]), Number(data.freelance_endDate.split("-")[1]), Number(data.freelance_endDate.split("-")[0])),
                type: resumeType.EXPERIENCE,
                software: [data.software.GITHUB, data.software.XCODE, data.software.GODOT],
                programmingLanguages: [data.programming_languages.GD_SCRIPT, data.programming_languages.UML],
                keypoints: []
            },
            {
                id: "baudin",
                title: data.baudin_title,
                summary: data.baudin_summary,
                company: data.baudin_company,
                companyWebsite: data.baudin_company_website,
                location: data.baudin_location,
                startDate: new Date(Number(data.baudin_startDate.split("-")[2]), Number(data.baudin_startDate.split("-")[1]), Number(data.baudin_startDate.split("-")[0])),
                type: resumeType.EXPERIENCE,
                software: [data.software.GITLAB, data.software.DOCKER, data.software.GRAFANA, data.software.KEYCLOAK, data.software.PGADMIN, data.software.WEBSTORM, data.software.POSTMAN],
                programmingLanguages: [data.programming_languages.NEXT_JS, data.programming_languages.NEST_JS, data.programming_languages.JS, data.programming_languages.REACT_JS, data.programming_languages.TAILWIND_CSS, data.programming_languages.PRISMA, data.programming_languages.POSTGRE_SQL],
                keypoints: []
            }
        ]
    };
}

export function getPortfolioData(language: string): PortfolioData {
    let data = EN_DATA;
    let projectTypes: ProjectType;

    switch(language) {
        case "fr":
            data = FR_DATA;
            projectTypes = FR_PROJECT_TYPE;
            break;
        case "ch":
            data = CH_DATA;
            projectTypes = CH_PROJECT_TYPE;
            break;
        default:
            data = EN_DATA;
            projectTypes = EN_PROJECT_TYPE;
    }

    return {
        projectTypes: projectTypes,
        software: data.software,
        programmingLanguages: data.programming_languages,
        projects: [
            {
                id: "matrix",
                title: data.matrix_title,
                summary: data.matrix_summary,
                description: data.matrix_description,
                creationDate: "2026",
                types: [projectTypes.WEB],
                images: [
                    "icon.webp",
                    "matrix_1.webp",
                    "matrix_2.webp",
                    "matrix_3.webp",
                ],
                software: [data.software.WEBSTORM, data.software.POSTMAN, data.software.KEYCLOAK, data.software.PGADMIN, data.software.DOCKER, data.software.GITLAB],
                programmingLanguages: [data.programming_languages.NEXT_JS, data.programming_languages.NEST_JS, data.programming_languages.REACT_JS, data.programming_languages.POSTGRE_SQL, data.programming_languages.PRISMA, data.programming_languages.TAILWIND_CSS],
                keypoints: [
                    {
                        title: data.matrix_keypoint1_title,
                        description: data.matrix_keypoint1_description
                    },
                    {
                        title: data.matrix_keypoint2_title,
                        description: data.matrix_keypoint2_description
                    },
                    {
                        title: data.matrix_keypoint3_title,
                        description: data.matrix_keypoint3_description
                    },
                    {
                        title: data.matrix_keypoint4_title,
                        description: data.matrix_keypoint4_description
                    },
                    {
                        title: data.matrix_keypoint5_title,
                        description: data.matrix_keypoint5_description
                    }
                ]
            },
            {
                id: "support-dsi",
                title: data.supportDSI_title,
                summary: data.supportDSI_summary,
                description: data.supportDSI_description,
                creationDate: "2025",
                types: [projectTypes.WEB],
                images: [
                    "icon.webp",
                    "support_dsi_1.webp",
                    "support_dsi_2.webp",
                    "support_dsi_3.webp",
                    "support_dsi_4.webp",
                    "support_dsi_5.webp",
                    "support_dsi_6.webp",
                    "support_dsi_7.webp",
                    "support_dsi_8.webp",
                ],
                software: [data.software.WEBSTORM, data.software.POSTMAN, data.software.KEYCLOAK, data.software.PGADMIN, data.software.DOCKER, data.software.GITLAB],
                programmingLanguages: [data.programming_languages.NEXT_JS, data.programming_languages.NEST_JS, data.programming_languages.REACT_JS, data.programming_languages.POSTGRE_SQL, data.programming_languages.PRISMA, data.programming_languages.TAILWIND_CSS],
                keypoints: [
                    {
                        title: data.supportDSI_keypoint1_title,
                        description: data.supportDSI_keypoint1_description
                    },
                    {
                        title: data.supportDSI_keypoint2_title,
                        description: data.supportDSI_keypoint2_description
                    },
                    {
                        title: data.supportDSI_keypoint3_title,
                        description: data.supportDSI_keypoint3_description
                    },
                    {
                        title: data.supportDSI_keypoint4_title,
                        description: data.supportDSI_keypoint4_description
                    },
                    {
                        title: data.supportDSI_keypoint5_title,
                        description: data.supportDSI_keypoint5_description
                    },
                ]
            },
            {
                id: "bc-formation",
                title: data.bcFormation_title,
                summary: data.bcFormation_summary,
                description: data.bcFormation_description,
                creationDate: "2025",
                types: [projectTypes.WEB],
                images: [
                    "icon.webp",
                    "bc_formation_1.webp",
                    "bc_formation_2.webp",
                    "bc_formation_3.webp",
                    "bc_formation_4.webp",
                    "bc_formation_5.webp",
                    "bc_formation_6.webp",
                    "bc_formation_7.webp",
                    "bc_formation_8.webp",
                    "bc_formation_9.webp",
                    "bc_formation_10.webp",
                    "bc_formation_11.webp",
                ],
                software: [data.software.WEBSTORM, data.software.POSTMAN, data.software.KEYCLOAK, data.software.PGADMIN, data.software.DOCKER, data.software.GITLAB],
                programmingLanguages: [data.programming_languages.NEXT_JS, data.programming_languages.NEST_JS, data.programming_languages.REACT_JS, data.programming_languages.POSTGRE_SQL, data.programming_languages.PRISMA, data.programming_languages.TAILWIND_CSS],
                keypoints: [
                    {
                        title: data.bcFormation_keypoint1_title,
                        description: data.bcFormation_keypoint1_description
                    },
                    {
                        title: data.bcFormation_keypoint2_title,
                        description: data.bcFormation_keypoint2_description
                    },
                    {
                        title: data.bcFormation_keypoint3_title,
                        description: data.bcFormation_keypoint3_description
                    },
                    {
                        title: data.bcFormation_keypoint4_title,
                        description: data.bcFormation_keypoint4_description
                    },
                    {
                        title: data.bcFormation_keypoint5_title,
                        description: data.bcFormation_keypoint5_description
                    },
                ]
            },
            {
                id: "load-testing",
                title: data.loadTesting_title,
                summary: data.loadTesting_summary,
                description: data.loadTesting_description,
                creationDate: "2025",
                types: [projectTypes.WEB],
                images: [
                    "icon.webp"
                ],
                software: [data.software.WEBSTORM, data.software.KEYCLOAK, data.software.GRAFANA, data.software.GITLAB],
                programmingLanguages: [data.programming_languages.NEXT_JS],
                keypoints: [
                    {
                        title: data.loadTesting_keypoint1_title,
                        description: data.loadTesting_keypoint1_description
                    },
                    {
                        title: data.loadTesting_keypoint2_title,
                        description: data.loadTesting_keypoint2_description
                    },
                ]
            },
            {
                id: "bc-portail",
                title: data.bcPortail_title,
                summary: data.bcPortail_summary,
                description: data.bcPortail_description,
                creationDate: "2025",
                types: [projectTypes.WEB],
                images: [
                    "icon.webp",
                    "bc_portail_1.webp",
                    "bc_portail_2.webp",
                    "bc_portail_3.webp",
                    "bc_portail_4.webp",
                    "bc_portail_5.webp",
                    "bc_portail_6.webp",
                ],
                software: [data.software.WEBSTORM, data.software.POSTMAN, data.software.KEYCLOAK, data.software.PGADMIN, data.software.DOCKER, data.software.GITLAB],
                programmingLanguages: [data.programming_languages.NEXT_JS, data.programming_languages.NEST_JS, data.programming_languages.REACT_JS, data.programming_languages.POSTGRE_SQL, data.programming_languages.PRISMA, data.programming_languages.TAILWIND_CSS],
                keypoints: [
                    {
                        title: data.bcPortail_keypoint1_title,
                        description: data.bcPortail_keypoint1_description
                    },
                    {
                        title: data.bcPortail_keypoint2_title,
                        description: data.bcPortail_keypoint2_description
                    },
                    {
                        title: data.bcPortail_keypoint3_title,
                        description: data.bcPortail_keypoint3_description
                    },
                    {
                        title: data.bcPortail_keypoint4_title,
                        description: data.bcPortail_keypoint4_description
                    },
                    {
                        title: data.bcPortail_keypoint5_title,
                        description: data.bcPortail_keypoint5_description
                    },
                    {
                        title: data.bcPortail_keypoint6_title,
                        description: data.bcPortail_keypoint6_description
                    },
                    {
                        title: data.bcPortail_keypoint7_title,
                        description: data.bcPortail_keypoint7_description
                    },
                    {
                        title: data.bcPortail_keypoint8_title,
                        description: data.bcPortail_keypoint8_description
                    },
                ]
            },
            {
                id: "this-website",
                title: data.thisWebsite_title,
                summary: data.thisWebsite_summary,
                description: data.thisWebsite_description,
                creationDate: "2026",
                types: [projectTypes.WEB],
                images: [],
                software: [data.software.WEBSTORM, data.software.GITHUB],
                programmingLanguages: [data.programming_languages.NEXT_JS, data.programming_languages.REACT_JS, data.programming_languages.TAILWIND_CSS],
                keypoints: []
            },
            {
                id: "deep-mine",
                title: data.deepMine_title,
                summary: data.deepMine_summary,
                description: data.deepMine_description,
                creationDate: "2024",
                types: [projectTypes.GAME],
                images: [
                    "icon.webp",
                    "DeepMine_1.webp",
                    "DeepMine_2.webp",
                    "DeepMine_3.png",
                    "DeepMine_4.png",
                    "DeepMine_5.png",
                    "DeepMine_6.png",
                    "DeepMine_7.png",
                    "DeepMine_8.png",
                    "DeepMine_9.png",
                    "DeepMine_10.png",
                    "DeepMine_11.webp",
                    "DeepMine_12.png",
                    "DeepMine_13.png",
                    "DeepMine.mp4"
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
                creationDate: "2023",
                types: [projectTypes.GAME, projectTypes.IOS],
                images: [
                    "icon.webp",
                    "dicesDungeon_1.webp",
                    "dicesDungeon_2.webp",
                    "dicesDungeon_3.webp",
                    "dicesDungeon_4.webp",
                    "dicesDungeon.mp4",
                ],
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
                creationDate: "2023",
                types: [projectTypes.GAME],
                images: [
                    "icon.webp",
                    "farmingGame_1.webp",
                    "farmingGame_2.webp",
                    "farmingGame_3.png",
                    "farmingGame_4.png",
                    "farmingGame_5.png",
                    "farmingGame_6.png",
                    "farmingGame_7.png",
                    "farmingGame_8.png",
                    "farmingGame_9.png",
                    "farmingGame_10.png",
                    "farmingGame_11.webp",
                    "farmingGame.mp4"
                ],
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
                creationDate: "2023",
                types: [projectTypes.GAME],
                images: [
                    "icon.webp",
                    "cardGame_1.webp",
                    "cardGame_2.webp",
                    "cardGame.mp4",
                    "cardGame2D.mp4",
                ],
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
                creationDate: "2023",
                types: [projectTypes.GAME],
                images: [
                    "icon.webp",
                    "atelierRyzaCraftingSystem_1.webp",
                    "atelierRyzaCraftingSystem_2.webp",
                    "atelierRyzaCraftingSystem_3.webp",
                    "atelierRyzaCraftingSystem_4.webp",
                    "atelierRyzaCraftingSystem.mp4",
                ],
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
                id: "genesys-designer",
                title: data.genesysDesigner_title,
                summary: data.genesysDesigner_summary,
                description: data.genesysDesigner_description,
                creationDate: "2022",
                types: [projectTypes.WEB],
                images: [
                    "icon.webp",
                ],
                software: [data.software.VSCODE, data.software.GITHUB, data.software.CONFLUENCE, data.software.JIRA],
                programmingLanguages: [data.programming_languages.ANGULAR_JS, data.programming_languages.REACT_JS, data.programming_languages.PYTHON],
                keypoints: [
                    {
                        title: data.genesysDesigner_keypoint1_title,
                        description: data.genesysDesigner_keypoint1_description
                    },
                    {
                        title: data.genesysDesigner_keypoint2_title,
                        description: data.genesysDesigner_keypoint2_description
                    },
                    {
                        title: data.genesysDesigner_keypoint3_title,
                        description: data.genesysDesigner_keypoint3_description
                    }
                ]
            },
            {
                id: "missed",
                title: data.missed_title,
                summary: data.missed_summary,
                description: data.missed_description,
                creationDate: "2019",
                types: [projectTypes.GAME, projectTypes.ANDROID],
                images: [
                    "icon.webp",
                    "missed_mainMenu.webp",
                    "missed_gameplay.webp",
                ],
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
                creationDate: "2022",
                types: [projectTypes.GAME],
                images: [
                    "icon.webp",
                    "clank_boardView.webp",
                ],
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
                creationDate: "2020",
                types: [projectTypes.GAME],
                images: [
                    "icon.webp",
                    "nono_1.webp",
                    "nono_2.webp",
                    "nono.mp4",
                ],
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
                creationDate: "2019",
                types: [projectTypes.GAME],
                images: [
                    "icon.webp",
                    "SDL2_gameEngine.webp",
                ],
                software: [data.software.SDL2, data.software.VSCODE],
                programmingLanguages: [data.programming_languages.C_PLUSPLUS],
                keypoints: [
                    {
                        title: data.gameEngine_keypoint1_title,
                        description: data.gameEngine_keypoint1_description
                    },
                    {
                        title: data.gameEngine_keypoint2_title,
                        description: data.gameEngine_keypoint2_description
                    }
                ]
            },
            {
                id: "rotate",
                title: "Rotate",
                summary: data.rotate_summary,
                description: data.rotate_description,
                creationDate: "2018",
                types: [projectTypes.GAME, projectTypes.IOS],
                images: [
                    "icon.webp",
                    "rotate_gameplay.webp",
                    "rotate_gameOver.webp"
                ],
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
                creationDate: "2018",
                types: [projectTypes.GAME, projectTypes.ANDROID],
                images: [
                    "icon.webp",
                    "dotWar_mainMenu.webp",
                    "dotWar_gameplay.webp",
                ],
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
                creationDate: "2018",
                types: [projectTypes.ANDROID],
                images: [
                    "icon.webp",
                    "localBeer_listView.webp",
                    "localBeer_mapView.webp",
                ],
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

export type ResumeData = {
    types: ResumeType,
    experiences: ExperienceData[]
}

export type PortfolioData = {
    projectTypes: ProjectType,
    software: typeof EN_DATA.software,
    programmingLanguages: typeof EN_DATA.programming_languages,
    projects: ProjectData[]
}

export type ProjectData = {
    id: string,
    title: string,
    summary: string,
    description: string,
    creationDate: string,
    types: string[],
    images: string[],
    software: string[],
    programmingLanguages: string[],
    keypoints: Keypoint[]
}

export type Keypoint = {
    title: string,
    description: string,
    link?: string
}

export type ProjectType = {
    ALL: string,
    GAME: string,
    WEB: string,
    ANDROID: string,
    IOS: string
}

export type ExperienceData = {
    id: string,
    title: string,
    summary: string,
    company: string,
    companyWebsite?: string,
    location: string,
    startDate: Date,
    endDate?: Date,
    type: string,
    software: string[],
    programmingLanguages: string[],
    keypoints: Keypoint[]
}

export type ResumeType = {
    ALL: string,
    EDUCATION: string,
    EXPERIENCE: string
}