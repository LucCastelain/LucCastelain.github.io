export const CH_DATA = {
// ------------------ Matrix ------------------ //
    matrix_title: "Matrix",
    matrix_summary: "A web app acting like an phone book or directory for the company employees.",
    matrix_description: "Matrix is an app displaying all kind of information about the company's employees such as their professional phone number and email, the place they work in (main company or subsidiary), their department and manager.\nIt allows to search for a specific or a group of specific employees if you need to contact them.",

    matrix_keypoint1_title: "General Data Protection Regulation (GDPR) - protection of employees sensitive data",
    matrix_keypoint1_description: "The app does not display sensitive information about employees. Access to detailed data is restricted to only people with the correct authorization (such as the persons in charge of the salary or the HR department if needed)",

    matrix_keypoint2_title: "Connexion to Microsoft Graph API",
    matrix_keypoint2_description: "A connexion to Microsoft Graph API allows the application to get information about user presence and schedule to directly display inside the app (for example if the person you are looking for is currently in a meeting or not)",

    matrix_keypoint3_title: "Export to XLSX",
    matrix_keypoint3_description: "An export to an XLSX file of the currently seen employees information is possible",

    matrix_keypoint4_title: "Filters",
    matrix_keypoint4_description: "Users have a lot of filters to faster their search or to show a specific group of people (only one or some departments, only manager, etc...)",

    matrix_keypoint5_title: "Favorized server components",
    matrix_keypoint5_description: "Favorized server components by putting the filters as url parameters. It also allows to share an url with the correct filters already set to find a person or group of persons.",

// ------------------ BC Formation ------------------ //
    supportDSI_title: "Support DSI",
    supportDSI_summary: "A web app for user to create ticket for support from IT.",
    supportDSI_description: "Support DSI is a web app allowing the IT employees to create a lot of different support scenarios that the other employees car ask support for (from asking for computer equipments such as mouse, screen, etc... To a software problem they encounter or else...).\nThen users can follow the scenarios according to their need to create a ticket with all the information needed for IT to help them. Once the ticket is created, users can access history of all their tickets, be notified when one is updated, exchange with IT if need and put an appreciation when a ticket is closed.",

    supportDSI_keypoint1_title: "Role management",
    supportDSI_keypoint1_description: "The app does not display the same information and possibility to users depending on their assigned role (IT, department manager, base user). Access to page and information have been secured both from frontend and backend point of view.",

    supportDSI_keypoint2_title: "Scenario création via a graph",
    supportDSI_keypoint2_description: "Creation and visualization of scenarios is easy thanks to a interactive graph (via cytoscape.js)",

    supportDSI_keypoint3_title: "Link to GLPI issue tracking system",
    supportDSI_keypoint3_description: "The creation of a ticket is mirrored and linked to GLPI for easy management in IT side",

    supportDSI_keypoint4_title: "Very personalizable scenarios",
    supportDSI_keypoint4_description: "Can create various type of scenarios with an extensive configuration of forms for each scenario if needed",

    supportDSI_keypoint5_title: "Allows to quantify support data",
    supportDSI_keypoint5_description: "Average time resolution for tickets, as well as number of tickets per category and such data can be monitored thanks to the app.",

// ------------------ BC Formation ------------------ //
    bcFormation_title: "BC Formation",
    bcFormation_summary: "A web app to manage and view a company's trainings and training sessions",
    bcFormation_description: "BC Formation is a web app allowing user to view available trainings as well as their trainings history. The manager of each department can view the training history of all the persons in their department and ask for new trainings for them. The training administrator can add new trainings and trainers, create and manage training sessions from people in it, dates, document, location, ...",

    bcFormation_keypoint1_title: "Role management",
    bcFormation_keypoint1_description: "The app does not display the same information and possibility to users depending on their assigned role. Access to page and information have been secured both from frontend and backend point of view.",

    bcFormation_keypoint2_title: "Training requests easy to manage for training administrator",
    bcFormation_keypoint2_description: "Each request for a training is grouped together for the administrator to see how many there is, and then select them to create a session if there is enough.",

    bcFormation_keypoint3_title: "Each user can access his training history",
    bcFormation_keypoint3_description: "Each user can access the history of his past trainings with his certifications. That way, each person can easily see if they need to redo a training or not.\nOn top of that, managers can see the history of the people they manage to have a global overview of their perimeter.",

    bcFormation_keypoint4_title: "Notifications and emails",
    bcFormation_keypoint4_description: "When a training session is confirmed by the training administrator, a notification is send on the app (visible through all web applications in BC Portail) as well as an email to each member of the session.\nFor each session convocation document is generated and sent with each email. It is then linked to the training request of each person in the session so that they can check it anytime.",

    bcFormation_keypoint5_title: "Automatic budget summary and prediction",
    bcFormation_keypoint5_description: "The budget summary from past training sessions and the budget to come for future training sessions is automatically calculated and can be exported to XLSX or PDF files.",

// ------------------ Load testing script ------------------ //
    loadTesting_title: "Load testing script",
    loadTesting_summary: "A script to load test the different web environments",
    loadTesting_description: "This script allow to load test and stress test the web servers of our apps for a defined period of time and with different charges, allowing us to see if they are correctly configured and will be able to withstand a large amount of users in production.\nThis script is connected to a local Grafana board to easily monitor the results",

    loadTesting_keypoint1_title: "Can be configured to test different real-time situations",
    loadTesting_keypoint1_description: "Different charges and period of time can be set to test thoroughly our servers.",

    loadTesting_keypoint2_title: "Result are easy to read and in real-time",
    loadTesting_keypoint2_description: "On top of the results summary the script give at the end of execution, it is connected to a Grafana board to easily read the results in real-time",

// ------------------ BC Portail ------------------ //
    bcPortail_title: "BC Portail",
    bcPortail_summary: "A web app acting at the entry point to access the company's apps",
    bcPortail_description: "BC Portail encapsulate all the other web applications made by Baudin Chateauneuf. It works like a Service-Oriented Architecture as a common ground for each other web applications.",

    bcPortail_keypoint1_title: "Service-Oriented Architecture (SOA)",
    bcPortail_keypoint1_description: "Applications are built as a collection of loosely coupled, larger-grained services. Services can be reused across different applications when needed. It allows for independent development and deployment of larger functional blocks.",

    bcPortail_keypoint2_title: "Common components",
    bcPortail_keypoint2_description: "Contains a list of reusable component and services across all web applications.",

    bcPortail_keypoint3_title: "Default layout and configuration",
    bcPortail_keypoint3_description: "It contains the default layout (front-end) and configuration for each web application.",

    bcPortail_keypoint4_title: "Show all the company's applications",
    bcPortail_keypoint4_description: "The portal shows all the company's applications, the web apps but also the thick client apps. All the applications can be launched from this place, even the thick client apps thanks to a deep linking system.",

    bcPortail_keypoint5_title: "App library",
    bcPortail_keypoint5_description: "An app library is present in the navbar for the user to be able to access any application from any app.",

    bcPortail_keypoint6_title: "Configuration page",
    bcPortail_keypoint6_description: "The configuration page let an administrator to add a web applications icon to the portal, allowing users to access the added web app. Administrators can add, edit, and remove web applications. While adding or editing a web application, they can manage which role or perimeter in the company can access the app amongst other things (name, icon, etc...). In this configuration page, an administrator can also add alerts for all users to be seen, thus allowing an extra layer of communication if needed.",

    bcPortail_keypoint7_title: "Versions & changelog",
    bcPortail_keypoint7_description: "For each application, the version numbers and changelogs are available for users to check. The main versions updates are automatically showed to user when they connect.",

    bcPortail_keypoint8_title: "Dark mode",
    bcPortail_keypoint8_description: "All components and web application can be used in dark mode.",

// ------------------ This website ------------------ //
    thisWebsite_title: "This website",
    thisWebsite_summary: "",
    thisWebsite_description: "Content 1",

// ------------------ Deep Mine ------------------ //
    deepMine_title: "Deep Mine",
    deepMine_summary: "A 2D adventure game in a procedurally generated world",
    deepMine_description: "《深礦》（Deep Mine）是一款2D探索挖礦遊戲，背景設定在一個程式生成的世界。遊戲由我和朋友使用Godot引擎共同開發。\n\n每個世界都透過噪音紋理和線程系統進行程式生成。遊戲創造了一個無限的世界，其中包含基於深度（世界垂直深度）和溫度（溫度由噪音紋理決定）的不同生物群落。\n\n寶石也會根據生物群落和深度出現。\n\n玩家可以交易和製作物品，並提升角色能力。玩家還可以與怪物戰鬥並完成任務。\n\n遊戲支援最多4名玩家本地聯機，並且完全支援使用手把進行遊戲。\n\n遊戲仍在開發中，並已在Steam上架。",

    deepMine_keypoint1_title: "Procedurally generated world",
    deepMine_keypoint1_description: "Use of noise textures, threads and chunks.",

    deepMine_keypoint2_title: "Player physics",
    deepMine_keypoint2_description: "Can use ladders, fluid ropes and can swim.",

    deepMine_keypoint3_title: "Enemies behavior",
    deepMine_keypoint3_description: "Use of states machines, creation of behavioral routine which changes when player in range.",

    deepMine_keypoint4_title: "NPCs dialogues",
    deepMine_keypoint4_description: "NPCs can have dialogues",

    deepMine_keypoint5_title: "Crafting and trading systems",
    deepMine_keypoint5_description: "Player can trade and craft with NPCs. Player characteristics can also be improved.",

    deepMine_keypoint6_title: "Pixel art and pixel art animation",
    deepMine_keypoint6_description: "Creation of textures and sprites.",

    deepMine_keypoint7_title: "User interface",
    deepMine_keypoint7_description: "Works with mouse, keyboard and controllers.",

    deepMine_keypoint8_title: "Local multiplayer",
    deepMine_keypoint8_description: "Up to 4 players in split-screen.",

    deepMine_keypoint9_title: "Link to the Steam page",
    deepMine_keypoint9_description: "",

// ------------------ Dices Dungeon ------------------ //
    dicesDungeon_title: "Dices Dungeon",
    dicesDungeon_summary: "A 2D game for IOS that let the player plays with probability",
    dicesDungeon_description: "Dices Dungeons is a 2D game made with Godot Engine, an open source game engine.\nThis game allows the player to roll 3 dices up to 3 times. Each dice can be locked or unlocked in order to being rolled again or not. Depending on the dice combination, a chance percentage will be calculated.\nThe player can then open one of the two doors presented to him. One hide a bad thing behind it and the other a good reward.\nThe chance percentage determines the value or dangerousness of the object or monster hiding behind the choosen door.\n\nOn top of playing with probability and randomness, the player can try to do combination with the dices (such as combo of two or three same dice number...) to win objects to help him moderate the randomness of his adventure.\n\nThis game was the first game I made with Godot Engine and was published on IOS.",

    dicesDungeon_keypoint1_title: "First game that was published on IOS",
    dicesDungeon_keypoint1_description: "",

    dicesDungeon_keypoint2_title: "Art direction",
    dicesDungeon_keypoint2_description: "It uses mainly 2 colors to play with contrasts and have strong art direction.",

    dicesDungeon_keypoint3_title: "Game design and mechanics",
    dicesDungeon_keypoint3_description: "Arcade gameplay to fit the medium",

    dicesDungeon_keypoint4_title: "User interface",
    dicesDungeon_keypoint4_description: "Mobile UI that stay simple but display all needed information.",

    dicesDungeon_keypoint5_title: "Pixel art and pixel art animation",
    dicesDungeon_keypoint5_description: "Designed and made textures and sprites.",

// ------------------ Stardew Valley like game ------------------ //
    farmingGame_title: "Farming game",
    farmingGame_summary: "A 2D game prototype with farming and growing crops mechanics",
    farmingGame_description: "Inspired by Stardew Valley, I made a prototype in Godot engine trying to replicate the farming mechanics of Stardew Valley as well as its inventory.\nI created a slots inventory (as in Minecraft, Terraria, Stardew Valley and a lot of games...) with multiple tabs. I also added a dialogue and trading mechanics, as well as a day/night cycle with a clock.\n\nIt helped me understand better how the Godot Engine works.",

    farmingGame_keypoint1_title: "Interactive world",
    farmingGame_keypoint1_description: "World can be heavily modified. Player can cut vegetation and destroy rocks, he can create fields, plant crops and add objects.",

    farmingGame_keypoint2_title: "NPCs dialogue",
    farmingGame_keypoint2_description: "NPCs can have dialogues with multiple answers that can lead to different quests.",

    farmingGame_keypoint3_title: "Complex inventory system",
    farmingGame_keypoint3_description: "Inventory has multiple tabs for different object types",

    farmingGame_keypoint4_title: "Player customization",
    farmingGame_keypoint4_description: "Player can create their unique player sprite from hair to skin color.",

    farmingGame_keypoint5_title: "Player equipment",
    farmingGame_keypoint5_description: "Player can equip different tools and clothes to change its appearance.",

    farmingGame_keypoint6_title: "Day/Night cycle",
    farmingGame_keypoint6_description: "Clock system that plays crops growth and day/night cycle.",

    farmingGame_keypoint7_title: "Trade system",
    farmingGame_keypoint7_description: "Player can buy and sell items to NPCs. Merchant have their own money purse that refills over time.",

    farmingGame_keypoint8_title: "Local multiplayer",
    farmingGame_keypoint8_description: "Up to 2 players.",

// ------------------ Card game prototype ------------------ //
    cardGamePrototype_title: "Card game prototype",
    cardGamePrototype_summary: "A card game prototype with its own set of rules",
    cardGamePrototype_description: "One time, I had an idea of a card game with it own rules. To test if the idea was viable and if the game was balanced, fun and tactical, I made a prototype in Godot engine.\n\nThe prototype has been made both in 2D and 3D and had a few cards to test the balancing.\nI was made in 2 days from the creation of the rules to the end of prototyping and it was fun to do and test.",

    cardGamePrototype_keypoint1_title: "Opponent AI",
    cardGamePrototype_keypoint1_description: "Can react and play accordingly depending on player's last play.",

    cardGamePrototype_keypoint2_title: "Same prototype in both 2D and 3D",
    cardGamePrototype_keypoint2_description: "Game works in 2D or 3D with same AI.",

    cardGamePrototype_keypoint3_title: "Created game rules and balancing",
    cardGamePrototype_keypoint3_description: "",

// ------------------ Atelier Ryza crafting system ------------------ //
    atelierRyzaCraftingSystem_title: "Atelier Ryza crafting system",
    atelierRyzaCraftingSystem_summary: "An advanced crafting system inspired by Atelier Ryza game",
    atelierRyzaCraftingSystem_description: "This prototype is an advanced crafting system made with Godot engine. It is based on Aterlier Ryza's crafting system.\nThis crafting system use custom resources to make a really complete crafting system. Each item needs one or more specific types, subtypes or unique ingredients to be crafted. The Crafted item takes in account the quality of each ingredients used.\n\nIt is easy to add new items for craft and modify custom resourses to extant the depth of this crafting system.\nIt can be easily extanded in multiple ways. For example crafted items could take the specific characteristic(s) of choosen ingredients...\n\nThis prototype is standalone and was thought so it can be easily implemented in a more complex games.",

    atelierRyzaCraftingSystem_keypoint1_title: "Easy to update",
    atelierRyzaCraftingSystem_keypoint1_description: "Can easily add new items and characteristics without modifying source code.",

    atelierRyzaCraftingSystem_keypoint2_title: "User interface",
    atelierRyzaCraftingSystem_keypoint2_description: "Clear and readable interface with all needed information. Can be used on ultra wide screen.",

    atelierRyzaCraftingSystem_keypoint3_title: "User experience",
    atelierRyzaCraftingSystem_keypoint3_description: "Makes crafting interesting and engaging.",

    atelierRyzaCraftingSystem_keypoint4_title: "Standalone system",
    atelierRyzaCraftingSystem_keypoint4_description: "Easy to add in bigger games.",

    // ------------------ Genesys Designer ------------------ //
    genesysDesigner_title: "Genesys Designer",
    genesysDesigner_summary: "A web app for developing self-service and assisted service applications",
    genesysDesigner_description: "Genesys Designer is a web based tool allowing big companies to create self-service (Interactive Voice Response) and assisted service (Routing) applications for their businesses. It provides functional blocks to users who can drag and drop them to easily build the self-service or routing application they want.\nUsers can set up the voice assistant persona, prompts with text to speech, their business hours, etc...\nAt the end of AngularJS support by Microsoft, I had to find a way to transition the app block by block from AngularJS to ReactJS. This transition had to be seamless and invisible for the users.",

    genesysDesigner_keypoint1_title: "Easy to learn and use",
    genesysDesigner_keypoint1_description: "Dragable and dropable functional blocks, so it really is easy for the user to learn and use",

    genesysDesigner_keypoint2_title: "Adaptable to any business",
    genesysDesigner_keypoint2_description: "Any company can adapt Designer's applications to suit their needs.",

    genesysDesigner_keypoint3_title: "Microservice architecture",
    genesysDesigner_keypoint3_description: "Almost every tab of the application is a microservice and can be removed without impacting the other tabs.",

// ------------------ Missed! ------------------ //
    missed_title: "Missed!",
    missed_summary: "A 3D game made with Unity3D for Android phones",
    missed_description: "Missed is the first game I uploaded online. I was an Android game awailable on Google Plat.\nThe player has to avoid red bullets fired by white cubes rotating around the arena. The player’s score is equivalent to the time he survived. As the time goes by, more cubes will appear and the difficulty will increase.\n\nThis game was made with unity3D 2019 and C#.",

    missed_keypoint1_title: "First published game",
    missed_keypoint1_description: "Game was published on Google Play",

    missed_keypoint2_title: "Mobile controls",
    missed_keypoint2_description: "Virtual joystick available anywhere on screen.",

    missed_keypoint3_title: "Game design",
    missed_keypoint3_description: "Arcade gameplay adapted to the medium",

    missed_keypoint4_title: "Game balancing",
    missed_keypoint4_description: "Difficulty increases over time without being too abrupt",

// ------------------ Global Game Jam 2022 ------------------ //
    globalGameJam2022_title: "Global Game Jam 2022",
    globalGameJam2022_summary: "We made aboard game during the Global Game Jam 2022 with 3 friends",
    globalGameJam2022_description: "In 2022, we participated to the Global Game Jam with almost the same team as the Global Game Jam 2020. We had 48 hours to make a game on the theme: duality.\n\nAt the time, we used to play a lot a board game named Clank! The game is about competing with your friends to be the one to get the more treasures in a dungeon while escaping the attacks of a dragon. You can choose between staying longer in the dungeon and try to get richer or go back to the surface faster, with less treasures but hoping the other constetants will die by the dragon.\nWe wanted to have fun recreating the game as much as we could. To evolve in the dungeon, you play cards that you can buy while playing. We had to make the deplacements of the player on the board, the shop system as well as the deck building mechanic in only two days.\n\nIt was difficult but a lot of fun. We were two programmers on Unity3D and 3 for the graphics (cards and cinematic). At the end of the jam we were exhausted but happy that we could play our board game on a computer!",

    globalGameJam2022_keypoint1_title: "Made in 48 hours with a team",
    globalGameJam2022_keypoint1_description: "",

    globalGameJam2022_keypoint2_title: "Board game",
    globalGameJam2022_keypoint2_description: "Player movements are handled accordingly.",

    globalGameJam2022_keypoint3_title: "Used Github for version control",
    globalGameJam2022_keypoint3_description: "",

    globalGameJam2022_keypoint4_title: "Card based gameplay",
    globalGameJam2022_keypoint4_description: "Player actions depend on the drawn cards. Player evolution in game comes from the deck building mechanic.",

    globalGameJam2022_keypoint5_title: "Link to the game",
    globalGameJam2022_keypoint5_description: "",

// ------------------ Global Game Jam 2020 ------------------ //
    globalGameJam2020_title: "Global Game Jam 2020",
    globalGameJam2020_summary: "We made a 2D platformer game during the Game Jam 2020 with 3 friends",
    globalGameJam2020_description: "In January 2020, I participated with a few friends in the Global Gam Jam. We had 48 hours to make a game on a theme : repair.\n\nWe made a 2D platformer game in a 3D environment. The player plays a broken robot that needs to found his parts in four different levels.\nEach level can be played in any order. Each part unlock a new ability that can help in another level, so the player can chose how he wants to progress.\nFor example: finding the robot's arms unlocked the capacity to climb walls or the jetpack unlocked double jumps.\n\nIt was our first game jam and the game may need some polishing, but it was a great experience. We all learned a lot and had a lot of fun.",

    globalGameJam2020_keypoint1_title: "Made in 48 hours with a team",
    globalGameJam2020_keypoint1_description: "",

    globalGameJam2020_keypoint2_title: "Mix of 2D and 3D",
    globalGameJam2020_keypoint2_description: "2D sprites in a 3D environment.",

    globalGameJam2020_keypoint3_title: "Used Github for version control",
    globalGameJam2020_keypoint3_description: "",

    globalGameJam2020_keypoint4_title: "Evolving gameplay",
    globalGameJam2020_keypoint4_description: "Gameplay is not the same depending on the levels you play.",

    globalGameJam2020_keypoint5_title: "Level design",
    globalGameJam2020_keypoint5_description: "Level design is different depending on the level's gameplay.",

    globalGameJam2020_keypoint6_title: "Link to the game",
    globalGameJam2020_keypoint6_description: "",

// ------------------ Game engine ------------------ //
    gameEngine_title: "Game engine",
    gameEngine_summary: "A simple game engine with SDL2 and C++",
    gameEngine_description: "I decided to try to make a game without using any game engine. I master C++ but it was interesting to learn and use SDL2 with it.\n\nI made a basic prototype running. In this prototype, a map was generated thank to a grid information and a tileset. The player sprite could be moved around with the keyboard and shot projectiles.",

    gameEngine_keypoint1_title: "Built from scratch",
    gameEngine_keypoint1_description: "Game engine built from scratch from the ground up.",

    gameEngine_keypoint2_title: "Basic working game",
    gameEngine_keypoint2_description: "",

// ------------------ Rotate ------------------ //
    rotate_title: "Rotate",
    rotate_summary: "a 2D game prototype made with Swift and Xcode",
    rotate_description: "I made a 2D game prototype for IOS to learn Swift. I used Xcode and SpriteKit to do so.\n\nIn the game a ball is bouncing regularly and infinitely on a sphere with spikes. Using its fingers, the player can rotate the sphere and guide the ball to a green place on the sphere. Once the ball is on the green place, a new sphere is generated and the score increases by one point.\nIf the ball touches a spike, the game is lost and the score is reset.",

    rotate_keypoint1_title: "Mobile controls",
    rotate_keypoint1_description: "Virtual joystick available anywhere on screen.",

    rotate_keypoint2_title: "Game design",
    rotate_keypoint2_description: "Arcade gameplay adapted to the medium.",

// ------------------ DotWar ------------------ //
    dotWar_title: "DotWar",
    dotWar_summary: "A game made in 24 hours with Unity3D for Android phones",
    dotWar_description: "DotWar is a game which work on Android devices. The idea was to challenge myself to make a game in one day.\n\nIn this game, the player has to click on a red dot in a certain amount of time. The dot plays a piano note and moves when pressed.\nThe difficulty increases with the score.\n\nThis game was made with unity3D 2019 and C#.",

    dotWar_keypoint1_title: "Made in 24 hours",
    dotWar_keypoint1_description: "",

    dotWar_keypoint2_title: "Published on Google Play",
    dotWar_keypoint2_description: "",

    dotWar_keypoint3_title: "Game design",
    dotWar_keypoint3_description: "Arcade gameplay adapted to the medium. Simple but effective gameplay to cope with the time constraint.",

// ------------------ Local Beer ------------------ //
    localBeer_title: "Local Beer",
    localBeer_summary: "An app to display local breweries",
    localBeer_description: "LocalBeer is an app that lists some of the breweries of Brittany, in France. It was a project made during oriented programming classes at ENIB. The perspective of LocalBeer is to push the users to consume and discover local beers and breweries, so this app completes one of the 17 sustainable development goals.\n\nThis app was made with Android Studio 3.5, Java and XML. The database is in JSON and it can be used into other programs. The app was also made with swift by an other member of my group and it works on iPhone and apple Watch.",

    localBeer_keypoint1_title: "Made to complete one of the 17 sustainable development goals",
    localBeer_keypoint1_description: "",

    localBeer_keypoint2_title: "Made both for IOS and Android",
    localBeer_keypoint2_description: "Development was done in parallel for both platforms.",

// ------------------ Software & programming languages ------------------ //
    software: {
        ALL: "完全",
        UNITY: "Unity 3D",
        GODOT: "Godot",
        GITHUB: "Github",
        GITLAB: "Gitlab",
        JIRA: "Jira",
        QT: "Qt",
        SVN: "SVN",
        VSCODE: "Visual Studio Code",
        WEBSTORM: "Webstorm",
        CONFLUENCE: "Confluence",
        ANDROID_STUDIO: "Android Studio",
        ASEPRITE: "Aseprite",
        XCODE: "Xcode",
        PREMIERE_PRO: "Adobe Premiere",
        SDL2: "SDL2",
        SPRITE_KIT: "SpriteKit",
        PGADMIN: "PG Admin",
        GRAFANA: "Grafana Cloud",
        DOCKER: "Docker",
        KEYCLOAK: "Keycloak",
        POSTMAN: "Postman",
    },
    programming_languages: {
        ALL: "完全",
        C_PLUSPLUS: "C++",
        C: "C",
        C_SHARP: "C#",
        UML: "UML",
        GD_SCRIPT: "GDscript",
        PYTHON: "Python",
        JS: "Javascript",
        JQUERY: "JQuery",
        NODEJS: "Node.js",
        HTML: "HTML",
        CSS: "CSS",
        ANGULAR_JS: "AngularJS",
        REACT_JS: "ReactJS",
        NEXT_JS: "Next.js",
        NEST_JS: "Nest.js",
        SWIFT: "Swift",
        POSTGRE_SQL: "PortgreSQL",
        MYSQL: "MySQL",
        PRISMA: "Prisma",
        TAILWIND_CSS: "Tailwind CSS",
        JAVA: "Java"
    },

// ------------------ Resume data ------------------ //
// ------------------ Education ------------------ //
    engineeringDegree_title: "Engineering degree",
    engineeringDegree_summary: "Preparatory classes integrated into engineering curriculum. Engineering classes featuring three main fields: Programming, Electronics and Mechatronics. Thanks to that, we have a global understanding and knowledge in all these engineering fields no matter the specialization.\nSpecialization: programming",
    engineeringDegree_company: "ENIB",
    engineeringDegree_company_website: "https://www.enib.fr/",
    engineeringDegree_location: "Brest, France",
    engineeringDegree_startDate: "01-09-2016",
    engineeringDegree_endDate: "01-03-2022",

    erasmusExchange_title: "6 months Erasmus exchange in Norway",
    erasmusExchange_summary: "Erasmus semester in Norway where I mainly studied Data Mining, Machine Learning and Web Programming. ",
    erasmusExchange_company: "University of Stavanger",
    erasmusExchange_company_website: "https://www.uis.no/en",
    erasmusExchange_location: "Stavanger, Norway",
    erasmusExchange_startDate: "01-01-2020",
    erasmusExchange_endDate: "01-07-2020",

    highSchool_title: "High School Diploma with honours",
    highSchool_summary: "Specialization: computer sciences and programming fields. With honours.",
    highSchool_company: "Junior High-School Jacques Monod",
    highSchool_company_website: "https://lyceejacquesmonod.eu/",
    highSchool_location: "Saint-Jean-de-Braye, France",
    highSchool_startDate: "01-09-2013",
    highSchool_endDate: "01-07-2016",

// ------------------ Experiences ------------------ //
    threeMonthsInternship_title: "3 months programming internship",
    threeMonthsInternship_summary: "I improved and upgraded a tool that can edit and lay out medical reports in a medical software called 'Planet Onco Dose'. Planet Onco Dose is a medical imaging software for cancer diseases which deals with a ton of data. Optimization while using such large amounts of data was also a big part of making the medical reports tool working.",
    threeMonthsInternship_company: "DOSIsoft",
    threeMonthsInternship_company_website: "https://www.dosisoft.com/",
    threeMonthsInternship_location: "Paris, France",
    threeMonthsInternship_startDate: "01-06-2019",
    threeMonthsInternship_endDate: "30-08-2019",

    fourMonthsInternship_title: "4 months programming internship",
    fourMonthsInternship_summary: "I worked on an interactive simulation system created to help early career teachers learn effective classroom management skills. I had to debug and optimize a new software used to create and edit scenarios for this system.\nI also worked on Unity to make a scene working on VR Devices.",
    fourMonthsInternship_company: "Affective Social Computing Laboratory, Florida International University",
    fourMonthsInternship_company_website: "https://ascl.cs.fiu.edu/",
    fourMonthsInternship_location: "From Centre Européen de Réalité Virtuelle (CERV), Brest, France",
    fourMonthsInternship_startDate: "01-09-2020",
    fourMonthsInternship_endDate: "21-12-2020",

    engineeringInternship_title: "6 months engineering internship",
    engineeringInternship_summary: "I created a web application from scratch which allowed QA team to access their own scripts and fill Root Cause Analysis in cases of failed status.\nThe app displayed many information in different tabs. It was the starting point to get every automated tests from QA, all in the same place.\nDuring this internship, I had to discuss weekly with the QA team with them as my clients, to take in account their feedback and make sure the final product was what they wanted.",
    engineeringInternship_company: "Genesys",
    engineeringInternship_location: "Brest, France",
    engineeringInternship_startDate: "01-09-2021",
    engineeringInternship_endDate: "15-03-2022",

    genesys_title: "Full-stack associate software engineer",
    genesys_summary: "I worked as an associate software engineer full-stack developing Genesys’ products.\nGenesys is a company that offers cloud solutions to various partners, for agents and customers managements.\nI worked on an web application allowing big companies to create self-service (Interactive Voice Response) and assisted service (Routing) applications for their businesses.\nThe team I worked with was composed of people from Canada, United States, India and Europe.",
    genesys_company: "Genesys",
    genesys_company_website: "https://www.genesys.com/",
    genesys_location: "Brest, France",
    genesys_startDate: "01-04-2022",
    genesys_endDate: "15-05-2023",

    freelance_title: "Freelance developer",
    freelance_summary: "I gave myself 1 year to work as a freelance developer for my self-employed company.\nI have designed and published several games as well as made many prototypes. I did the pre-production work: game design documents, description of the \"minimum viable product\" and creation of UML diagrams.\nI then programmed the games using Godot game engine.",
    freelance_company: "Luc Castelain",
    freelance_location: "Brest, France",
    freelance_startDate: "01-06-2023",
    freelance_endDate: "01-07-2024",

    baudin_title: "Full-stack software engineer",
    baudin_summary: "I worked as a software engineer for Baudin Chateauneuf.\nThe Baudin Chateauneuf Group is one on the main player for construction and civil engineering in France with more than 2000 employees. It operates in metal and mechanical construction, civil engineering and building with more than a 100 years of history.\nMy main job was to transition their thick client applications to a web environment. The applications chosen for transition were redesigned from the ground up. Working with a small team, I had to participate in every step of their development, from conception to programming, devops, going into production and support.",
    baudin_company: "Baudin Chateauneuf",
    baudin_company_website: "https://www.baudinchateauneuf.com/?lang=en",
    baudin_location: "Châteauneuf-sur-Loire, France",
    baudin_startDate: "10-21-2024",
    baudin_endDate: "",
}

export const CH_PROJECT_TYPE = {
    ALL: "完全",
    GAME: "遊戲",
    WEB: "Web",
    ANDROID: "Android",
    IOS: "IOS",
}

export const CH_RESUME_TYPE = {
    ALL: "All",
    EDUCATION: "Education",
    EXPERIENCE: "Experience",
}