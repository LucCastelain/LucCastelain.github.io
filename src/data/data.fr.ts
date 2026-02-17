export const FR_DATA = {
// ------------------ Matrix ------------------ //
    matrix_title: "Matrix",
    matrix_summary: "Une app web jouant le rôle d'annuaire pour les employés de l'entreprise",
    matrix_description: "Matrix est une application qui afficher différents types d'informations sur les employés de l'entreprise: numéro de tel professionnel, email, l'endroit où ils travaillent (boîte mère ou filiales), leur service et manager.\nElle permet de chercher une personne ou un groupe spécifique de personnes si un utilisateur a besoin de les contacter.",

    matrix_keypoint1_title: "Réglement Général sur la Protection des Données (RGPD) - protection des données sensibles",
    matrix_keypoint1_description: "L'application n'affiche pas les informations sensibles des employés. L'accès à des données détaillées est strictement restraint aux personnes ayant les autorisations adéquates (par exemple les personnes du service paye ou RH s'ils en ont besoin). L'accès aux informations sensibles a été sécurisé à la fois coté backend et frontend",

    matrix_keypoint2_title: "Lien à l'API Microsoft Graph",
    matrix_keypoint2_description: "Une connexion à l'API Microsoft Graph permet à l'application de récupérer les informations sur la présence et disponibilité des utilisateurs pour l'afficher directement depuis l'application (par exemple ça affiche si la personne que l'utilisateur cherche à contacter est en réunion ou non).",

    matrix_keypoint3_title: "Export en fichier XLSX",
    matrix_keypoint3_description: "Un export des informations des personnes affichées vers un fichier XLSX est possible.",

    matrix_keypoint4_title: "Filtres",
    matrix_keypoint4_description: "Les utilisateurs ont de nombreux filtres à leur disposition pour accelerer leur recherche ou pour afficher un groupe spécifique de personnes (seulement certains services, seulement les managers, etc...).",

    matrix_keypoint5_title: "Composants serveurs favorisés",
    matrix_keypoint5_description: "L'utilisation au maximum de composants serveurs a été favorisée, par exemple en mettant les filtres en paramètres d'url. Cela permet également de partager un url avec les bons filtres déja choisis pour trouver une personne ou un groupe de personnes.",

// ------------------ Support DSI ------------------ //
    supportDSI_title: "Support DSI",
    supportDSI_summary: "Une application web pour que les utilisateurs puissent créer des tickets pour le support",
    supportDSI_description: "Support DSI est une application web permettant aux employés du support informatique de créer différents scénarios pour guider les utilisateurs vers la création du ticket adéquat pour leur demande (par exemple faire une demande de souris, d'écran, etc... Ou alors un problème logiciel qu'ils rencontrent ou autre...).\nEnsuite les utilisateurs on juste a suivre le scénario qui correspond à leur besoin pour créer le ticket avec toutes les informations nécessaires au support pour les aider. Une fois le ticket créé, les utilisateurs peuvent avoir un suivi et un historique de tous leurs tickets, et sont notifiés lorsque l'un de leur ticket est mis à jour. Depuis l'application, ils peuvent également échanger avec le support si besoin ou ajouter une appréciation aux tickets déja traités.",

    supportDSI_keypoint1_title: "Gestion des rôles",
    supportDSI_keypoint1_description: "L'application n'affiche pas les mêmes informations et possibilités aux utilisateurs en fonction des rôles qui leurs ont été accordé (support, chef de service, utilisateur lambda, ...). L'accès aux différentes pages et informations ont été à la fois sécurisées coté backend et frontend.",

    supportDSI_keypoint2_title: "Création des scénarios via un graph",
    supportDSI_keypoint2_description: "La création et visualisation des scénarios est rendue facile grâce à un graph interactif (via cytoscape.js)",

    supportDSI_keypoint3_title: "Lien vers GLPI pour la gestion des tickets",
    supportDSI_keypoint3_description: "La création d'un ticket est interconnectée et liée à GLPI pour une gestion plus simple coté support.",

    supportDSI_keypoint4_title: "Des scénarios personnalisables",
    supportDSI_keypoint4_description: "Permet de créer des scénarios variés avec des formulaires personnalisables pour chaque scénario.",

    supportDSI_keypoint5_title: "Permet de quantifier les données coté support",
    supportDSI_keypoint5_description: "Le temps moyen de résolution d'un ticket, mais aussi le nombre de ticket par catégorie, ainsi que d'autres données peuvent être quantifiées et suivies en temps réél grâce à cette application.",

// ------------------ BC Formation ------------------ //
    bcFormation_title: "BC Formation",
    bcFormation_summary: "Une application web pour gérer les formations et session de formation de l'entreprise",
    bcFormation_description: "BC Formation est une application web qui permet aux utilisateurs de voir le catalog de formations de l'entreprise ainsi que leur historique de formations. Les managers et chefs de service peuvent accéder à l'historique de formation de chaque employé de son service. Ils peuvent également faire une demande de formation pour eux si besoin. Le responsable de formations peut quand a lui ajouter ou éditer des formations ou formateurs et créer et gérer des sessions de formation (ajouter des personnes à une session, paramétrer les jours et la durée de la session, ajouter des documents, etc...).",

    bcFormation_keypoint1_title: "Gestion des rôles",
    bcFormation_keypoint1_description: "L'application n'affiche pas les mêmes informations et possibilités aux utilisateurs en fonction des rôles qui leurs ont été accordé. L'accès aux différentes pages et informations ont été à la fois sécurisées coté backend et frontend.",

    bcFormation_keypoint2_title: "Les demandes de formation sont faciles à gérer pour le responsable de formations",
    bcFormation_keypoint2_description: "Chauqe demande de formation est groupé par formation pour que le responsable de formations puissent facilement voir combien il y a de demandes pour une formation. S'il y a suffisamment de demandes, il peut les selectionner pour créer une session.",

    bcFormation_keypoint3_title: "Chaque utilisateur peut accéder à son historique de formation",
    bcFormation_keypoint3_description: "Chaque utilisateur peut accéder a l'historique de ses précédentes formations avec les certifications qu'il a obtenu. De cette manière, chaque personne peut facilement voir s'ils ont besoin de refaire une formation pour rafraichir une certification ou en obtenir une nouvelle.\n En plus de ça, les managers et chefs de service peuvent voir l'historique des personnes qu'ils ont en charge et avoir une vision globale des formations des personnes de leur périmètre.",

    bcFormation_keypoint4_title: "Notifications et e-mails",
    bcFormation_keypoint4_description: "Lorsqu'une session de formation est confirmée par le responsable de formations, une notification est envoyée depuis l'application (visible depuis toutes les applications web de BC Portail) ainsi qu'un e-mail à chaque membre de la session.\nPour chaque session, un document de convocation est généré et envoyé avec chaque e-mail. Il est ensuite lié à la demande de formation de chaque personne présente dans la session. De cette façon chaque personne conviée à la session de formation peut la consulter à tout moment.",

    bcFormation_keypoint5_title: "Résumé et prévision automatiques du budget",
    bcFormation_keypoint5_description: "La synthèse du budget des sessions de formation passées et le budget à venir pour les sessions de formation futures sont automatiquement calculés et peuvent être exportés vers des fichiers XLSX ou PDF.",

// ------------------ Load testing script ------------------ //
    loadTesting_title: "Script de test de charge",
    loadTesting_summary: "Un script pour tester en charge les différents environnements web",
    loadTesting_description: "Ce script permet de tester en charge et de stresser les serveurs web de nos applications pendant une période de temps définie et avec des charges différentes. Cela permet de voir s'ils sont correctement configurés et s'ils seront capables de supporter un grand nombre d'utilisateurs en production.\nCe script est connecté à un tableau Grafana local pour pouvoir suivre facilement les résultats.",

    loadTesting_keypoint1_title: "Peut être configuré pour tester différentes situations en temps réel",
    loadTesting_keypoint1_description: "Différentes charges et durées peuvent être définis pour tester minutieusement les serveurs.",

    loadTesting_keypoint2_title: "Les résultats sont faciles à lire et en temps réel",
    loadTesting_keypoint2_description: "En plus du résumé des résultats que le script donne en fin d'exécution, il est connecté à un tableau Grafana pour lire facilement les résultats en temps réel.",

// ------------------ BC Portail ------------------ //
    bcPortail_title: "BC Portail",
    bcPortail_summary: "Un application web agissant comme point d'entrée pour accéder aux applications de l'entreprise",
    bcPortail_description: "BC Portail encapsule toutes les autres applications web réalisées par Baudin Châteauneuf. Il fonctionne comme une architecture orientée services (SOA) et sert de base commune aux autres applications web.",

    bcPortail_keypoint1_title: "Architecture orientée services (SOA)",
    bcPortail_keypoint1_description: "Les applications sont construites comme un ensemble de services faiblement couplés avec une grande granularité. Les services peuvent être réutilisés dans différentes applications en cas de besoin. Cela permet le développement et le déploiement indépendants de blocs fonctionnels plus grands.",

    bcPortail_keypoint2_title: "Composants communs",
    bcPortail_keypoint2_description: "Contient une liste de composants et de services réutilisables dans toutes les applications web.",

    bcPortail_keypoint3_title: "Configuration et mise en page par défaut",
    bcPortail_keypoint3_description: "Contient la mise en page (layout front-end) et la configuration par défaut pour chaque application web.",

    bcPortail_keypoint4_title: "Affiche toutes les applications de l'entreprise",
    bcPortail_keypoint4_description: "Le portail contient toutes les applications de l'entreprise: les applications web mais aussi les applications en client lourd. Toutes les applications peuvent être lancées depuis cet endroit, même les applications client lourd grâce à un système de deep linking.",

    bcPortail_keypoint5_title: "Bibliothèque d'applications",
    bcPortail_keypoint5_description: "Une bibliothèque d'applications est présente dans la barre de navigation pour que les utilisateurs puissent accéder à n'importe quelle application à partir de n'importe quelle application web.",

    bcPortail_keypoint6_title: "Page de configuration",
    bcPortail_keypoint6_description: "La page de configuration permet à un administrateur d'ajouter une icône d'application web au portail, permettant aux autres utilisateurs d'accéder à l'application web ajoutée. Les administrateurs peuvent ajouter, modifier et supprimer des applications web. Lors de l'ajout ou de la modification d'une application web, ils peuvent gérer quel(s) rôle(s) ou périmètre(s) dans l'entreprise peut accéder à l'application. Il peut aussi gérer d'autres informations de l'application (nom, icône, etc...). Dans cette page de configuration, un administrateur peut également ajouter des alertes visibles par tous les utilisateurs, permettant ainsi une couche supplémentaire de communication si nécessaire.",

    bcPortail_keypoint7_title: "Versions et journal des mises à jour",
    bcPortail_keypoint7_description: "Pour chaque application, les numéros de version et les journaux de mises à jour sont disponibles pour que les utilisateurs puissent les voir si besoin. Les mises à jour importantes de versions sont automatiquement présentées à l'utilisateur lors de sa connexion.",

    bcPortail_keypoint8_title: "Mode sombre",
    bcPortail_keypoint8_description: "Tous les composants et applications web prennent en charge le mode sombre.",

// ------------------ This website ------------------ //
    thisWebsite_title: "Ce site Web",
    thisWebsite_summary: "J'ai créé ce site Web pour montrer mon portfolio et mon CV",
    thisWebsite_description: "Vous pouvez voir ce projet en naviguant dessus ☜(⌒▽⌒)☞",

    thisWebsite_keypoint1_title: "Créé depuis zéro",
    thisWebsite_keypoint1_description: "",

    thisWebsite_keypoint2_title: "Mode sombre",
    thisWebsite_keypoint2_description: "",

    thisWebsite_keypoint3_title: "Plusieurs langues",
    thisWebsite_keypoint3_description: "Ce site peut être parcouru en français, anglais et chinois traditionnel.",

// ------------------ Deep Mine ------------------ //
    deepMine_title: "Deep Mine",
    deepMine_summary: "Un jeu d'aventure en 2D dans un monde généré de manière procédurale",
    deepMine_description: "Deep Mine est un jeu d'exploration en 2D qui se déroule dans un monde généré de manière procédurale. Il a été créé avec un ami à l'aide du moteur Godot.\nChaque monde est généré de manière procédurale à l'aide de textures de bruit et d'un système de thread. Il crée un monde infini avec différents biomes basés sur la profondeur (profondeur verticale dans le monde) et la température (la température est déterminée par la texture de bruit). Des gemmes apparaissent également en fonction des biomes et de la profondeur.\n\nLe joueur peut échanger et fabriquer des objets ainsi qu'améliorer son personnage. Il peut combattre des monstres et accomplir des quêtes.\nLe jeu est jouable avec jusqu'à 4 joueurs localement et peut être entièrement joué avec une manette.\n\nCe jeu est encore en développement et dispose d'une page Steam.",

    deepMine_keypoint1_title: "Monde généré de manière procédurale",
    deepMine_keypoint1_description: "Utilisation de textures de bruit, de threads et de chunks pour créer un monde procédural infini.",

    deepMine_keypoint2_title: "Physique du joueur",
    deepMine_keypoint2_description: "Le personnage peut utiliser des échelles, des cordes fluides et nager.",

    deepMine_keypoint3_title: "Comportement des ennemis",
    deepMine_keypoint3_description: "Utilisation de machines à états, création d'une routine comportementale qui change lorsque le joueur est à portée.",

    deepMine_keypoint4_title: "Dialogues des PNJ",
    deepMine_keypoint4_description: "Les PNJ peuvent avoir des dialogues.",

    deepMine_keypoint5_title: "Systèmes d'artisanat et d'échange",
    deepMine_keypoint5_description: "Le joueur peut échanger et fabriquer avec des PNJ. Les caractéristiques du personnage peuvent également être améliorées.",

    deepMine_keypoint6_title: "Pixel art et animation",
    deepMine_keypoint6_description: "Création des textures et des sprites du jeu ainsi que des animations des personnages et enemis.",

    deepMine_keypoint7_title: "Interface utilisateur",
    deepMine_keypoint7_description: "Fonctionne avec clavier souris et manettes.",

    deepMine_keypoint8_title: "Multijoueur local",
    deepMine_keypoint8_description: "Jusqu'à 4 joueurs en écran partagé.",

    deepMine_keypoint9_title: "Lien vers la page Steam",
    deepMine_keypoint9_description: "",

// ------------------ Dices Dungeon ------------------ //
    dicesDungeon_title: "Dices Dungeon",
    dicesDungeon_summary: "Un jeu 2D pour IOS qui permet au joueur de jouer avec les probabilités",
    dicesDungeon_description: "Dices Dungeons est un jeu 2D réalisé avec Godot Engine, un moteur de jeu open source.\nCe jeu permet au joueur de lancer 3 dés jusqu'à 3 fois. Chaque dé peut être verrouillé ou déverrouillé afin d'être relancé ou non. En fonction de la combinaison de dés, un pourcentage de chance sera calculé.\nLe joueur pourra alors ouvrir l'une des deux portes qui lui sont présentées. L'une cache une mauvaise récompense derrière elle et tandis que l'autre en cache une bonne.\nLe pourcentage de chance détermine la valeur ou la dangerosité de l'objet ou du monstre qui se cache derrière la porte choisie.\n\nEn plus de jouer avec les probabilités et le hasard, le joueur peut essayer de faire des combinaisons avec les dés (comme une combinaison de deux ou trois numéros de dés identiques...) pour gagner des objets afin de l'aider à modérer le caractère aléatoire de son aventure.\n\nCe jeu a été le premier jeu que j'ai réalisé avec Godot Engine et a été publié sur IOS.",

    dicesDungeon_keypoint1_title: "Premier jeu publié sur IOS",
    dicesDungeon_keypoint1_description: "",

    dicesDungeon_keypoint2_title: "Direction artistique réfléchie",
    dicesDungeon_keypoint2_description: "Le jeu utilise principalement 2 couleurs pour jouer avec les contrastes et avoir une direction artistique forte.",

    dicesDungeon_keypoint3_title: "Game design et mécaniques de jeu",
    dicesDungeon_keypoint3_description: "Un gameplay arcade adapté au support",

    dicesDungeon_keypoint4_title: "Interface utilisateur",
    dicesDungeon_keypoint4_description: "Une interface pensée pour le mobile qui reste simple mais affiche toutes les informations nécessaires.",

    dicesDungeon_keypoint5_title: "Pixel art et animation pixel art",
    dicesDungeon_keypoint5_description: "Conception et réalisation des textures ,sprites et animations.",

// ------------------ Stardew Valley like game ------------------ //
    farmingGame_title: "Jeu de gestion de ferme",
    farmingGame_summary: "Un prototype de jeu 2D avec des mécanismes d'agriculture et de développement de ressources.",
    farmingGame_description: "Inspiré par Stardew Valley, j'ai réalisé un prototype avec le moteur de jeu Godot en essayant de reproduire les mécaniques d'agriculture de Stardew Valley ainsi que son systeme d'inventaire.\nJ'ai créé un inventaire à base de slots (comme dans Minecraft, Terraria, Stardew Valley et beaucoup de jeux...) avec plusieurs onglets. J'ai également ajouté des mécaniques de dialogue et de marchandage, ainsi qu'un cycle jour/nuit avec une horloge.\n\nCela m'a aidé à mieux comprendre et à prendre en main le fonctionnement du moteur Godot.",

    farmingGame_keypoint1_title: "Monde interactif",
    farmingGame_keypoint1_description: "Le monde peut être fortement modifié. Le joueur peut couper de la végétation et détruire des rochers, il peut créer des champs, planter des cultures qui vont pousser avec le temps qui passe et ajouter des objets dans le monde.",

    farmingGame_keypoint2_title: "Dialogues des PNJ",
    farmingGame_keypoint2_description: "Les PNJ peuvent avoir des dialogues avec plusieurs réponses pouvant mener à différentes quêtes.",

    farmingGame_keypoint3_title: "Système d'inventaire complexe",
    farmingGame_keypoint3_description: "L'inventaire comporte plusieurs onglets pour différents types d'objets. L'inventaire est complétement compatible avec l'utilisation d'une manette.",

    farmingGame_keypoint4_title: "Personnalisation du joueur",
    farmingGame_keypoint4_description: "Le joueur peut créer son personnage et le rendre unique, de la couleur ou le type des cheveux à la couleur de la peau.",

    farmingGame_keypoint5_title: "Équipement du joueur",
    farmingGame_keypoint5_description: "Le joueur peut équiper différents outils et vêtements pour changer son apparence.",

    farmingGame_keypoint6_title: "Cycle jour/nuit",
    farmingGame_keypoint6_description: "Système d'horloge qui joue sur la croissance des cultures et le cycle jour/nuit.",

    farmingGame_keypoint7_title: "Système de marchandage",
    farmingGame_keypoint7_description: "Le joueur peut acheter et vendre des objets aux PNJ. Les commerçants disposent de leur propre porte-monnaie qui se remplit au fil du temps.",

    farmingGame_keypoint8_title: "Multijoueur local",
    farmingGame_keypoint8_description: "Jusqu'à 2 joueurs en écran partagé.",

// ------------------ Card game prototype ------------------ //
    cardGamePrototype_title: "Prototype de jeu de cartes",
    cardGamePrototype_summary: "Un prototype de jeu de cartes avec son propre ensemble de règles",
    cardGamePrototype_description: "Un jour, j'ai eu l'idée d'un jeu de cartes avec ses propres règles. Pour tester si l'idée était viable et si le jeu était équilibré, amusant et suffisamment tactique, j'ai réalisé un prototype dans le moteur de jeu Godot.\n\nLe prototype a été réalisé à la fois en 2D et en 3D et comportait quelques cartes pour tester l'équilibrage.\nIl a été réalisé en 2 jours depuis la création des règles jusqu'à la fin du prototypage et c'était amusant à faire et à tester.",

    cardGamePrototype_keypoint1_title: "Création de l'IA adverse",
    cardGamePrototype_keypoint1_description: "L'IA adverse peut réagir et jouer en conséquence en fonction de la dernière action du joueur.",

    cardGamePrototype_keypoint2_title: "Même prototype en 2D et 3D",
    cardGamePrototype_keypoint2_description: "Le jeu fonctionne en 2D ou 3D avec la même IA.",

    cardGamePrototype_keypoint3_title: "Création de règles de jeu et de l'équilibrage",
    cardGamePrototype_keypoint3_description: "",

// ------------------ Atelier Ryza crafting system ------------------ //
    atelierRyzaCraftingSystem_title: "Système de crafting",
    atelierRyzaCraftingSystem_summary: "Un système de crafting avancé inspiré du jeu Atelier Ryza",
    atelierRyzaCraftingSystem_description: "Ce prototype est un système de crafting avancé réalisé avec le moteur de jeu Godot. Il est basé sur le système d'artisanat du jeu Aterlier Ryza.\nCe système utilise des ingrédients personnalisés pour créer un système d'artisanat vraiment complet. Chaque objet a besoin d'un ou plusieurs types, sous-types ou ingrédients uniques spécifiques pour être fabriqué. L'objet fabriqué prend en compte la qualité de chaque ingrédient utilisé.\n\nIl est facile d'ajouter de nouveaux objets à fabriquer et de modifier des ingrédients pour agrandir la profondeur de ce système d'artisanat.\nIl peut être facilement étendu de plusieurs manières. Par exemple, les objets fabriqués pourraient prendre les caractéristiques spécifiques des ingrédients choisis...\n\nCe prototype fonctionne en standalone mais a été pensé pour pouvoir être facilement implémenté dans des jeux plus complexes.",

    atelierRyzaCraftingSystem_keypoint1_title: "Facile à mettre à jour",
    atelierRyzaCraftingSystem_keypoint1_description: "Il est facile d'ajouter de nouveaux éléments et caractéristiques sans modifier le code source.",

    atelierRyzaCraftingSystem_keypoint2_title: "Interface utilisateur claire et lisible",
    atelierRyzaCraftingSystem_keypoint2_description: "L'interface est claire et lisible et contient toutes les informations nécessaires. Elle s'adapte également aux écrans ultra larges.",

    atelierRyzaCraftingSystem_keypoint3_title: "Expérience utilisateur engageante",
    atelierRyzaCraftingSystem_keypoint3_description: "Rend l'artisanat intéressant et engageant avec son système complet.",

    atelierRyzaCraftingSystem_keypoint4_title: "Standalone",
    atelierRyzaCraftingSystem_keypoint4_description: "Fonctionne en standalone mais peut facilement être implémenté dans des jeux plus grands.",

    // ------------------ Genesys Designer ------------------ //
    genesysDesigner_title: "Genesys Designer",
    genesysDesigner_summary: "Une application web pour le développement d'applications de services assistés",
    genesysDesigner_description: "Genesys Designer est un outil web permettant aux grandes entreprises de créer des applications de libres-services (Réponse Vocale Interactive) et de services assistés (Routage) pour leurs besoins. Elle fournit des blocs fonctionnels aux utilisateurs qui peuvent les glisser et déposer pour construire facilement l'application libre-service ou de routage qu'ils veulent.\nLes utilisateurs peuvent configurer la persona de l'assistant vocal, des entrées textes avec du Text-To-Speech, leurs heures d'ouverture, etc...\nÀ la fin du support AngularJS par Microsoft, j'ai dû trouver un moyen de transitionner l'application bloc par bloc, depuis AngularJS vers ReactJS. Cette transition devait être transparente et invisible pour les utilisateurs.",

    genesysDesigner_keypoint1_title: "Facile à apprendre et à utiliser",
    genesysDesigner_keypoint1_description: "Utilisation de blocs fonctionnels en glisser/deposer, il est donc vraiment facile pour les utilisateurs a prendre en main et utiliser l'application.",

    genesysDesigner_keypoint2_title: "Adaptable à n'importe quelle entreprise",
    genesysDesigner_keypoint2_description: "N'importe quelle entreprise peut adapter les applications créées avec Designer en fonction de ses besoins.",

    genesysDesigner_keypoint3_title: "Architecture microservice",
    genesysDesigner_keypoint3_description: "Presque chaque onglet de l'application est un microservice et peut être supprimé sans impact sur les autres onglets.",

// ------------------ Missed! ------------------ //
    missed_title: "Missed!",
    missed_summary: "Un jeu 3D fait avec Unity3D pour les téléphones Android",
    missed_description: "Missed est le premier jeu que j'ai publié en ligne. C'étais un jeu Android disponible sur Google Play.\nDans ce jeu, le joueur doit éviter des balles rouges tirées par des cubes blancs tournant autour d'une arène. Le score du joueur est équivalent au temps qu'il a survécu. Au fil du temps, plus de cubes apparaissent et la difficulté augmente.\n\nCe jeu a été fait avec unity3D 2019 et C#.",

    missed_keypoint1_title: "Premier jeu publié",
    missed_keypoint1_description: "Le jeu a été publié sur Google Play.",

    missed_keypoint2_title: "Contrôles adaptés pour le mobiles",
    missed_keypoint2_description: "Joystick virtuel disponible n'importe où sur l'écran.",

    missed_keypoint3_title: "Game design",
    missed_keypoint3_description: "Gameplay Arcade adapté au médium.",

    missed_keypoint4_title: "Équilibrage",
    missed_keypoint4_description: "La difficulté augmente avec le temps sans être trop brusque.",

// ------------------ Global Game Jam 2022 ------------------ //
    globalGameJam2022_title: "Global Game Jam 2022",
    globalGameJam2022_summary: "Nous avons fait un jeu de société pendant la Global Game Jam 2022 avec 3 amis",
    globalGameJam2022_description: "En 2022, nous avons participé à la Global Game Jam avec presque la même équipe que la Global Game Jam 2020. Nous avions 48 heures pour faire un jeu sur le thème: dualité.\n\nÀ l'époque, nous avions l'habitude de jouer beaucoup à un jeu de société nommé Clank! Le jeu vous fait jouer face à vos amis pour être celui qui obtiendra les plus de trésors dans un donjon tout en échappant aux attaques d'un dragon. Vous pouvez choisir entre rester plus longtemps dans le donjon et essayer de vous enrichir ou retourner à la surface plus rapidement. Remonter plus vite vous fera récupérer moins de trésors mais peut vous permettre de survivre alors que vos concurrents risque de mourrir face au dragon.\nNous voulions nous amuser à recréer le jeu autant que nous le pouvions.",

    globalGameJam2022_keypoint1_title: "Fabriqué en 48 heures en équipe",
    globalGameJam2022_keypoint1_description: "",

    globalGameJam2022_keypoint2_title: "Jeu de société adapté en jeu-vidéo",
    globalGameJam2022_keypoint2_description: "Comme le jeu développé est un jeu de société, les mouvements des joueurs sont gérés en conséquence et sont bien différent d'un jeu-vidéo plus classique orienté action.",

    globalGameJam2022_keypoint3_title: "Github utilisé pour la gestion de versions",
    globalGameJam2022_keypoint3_description: "",

    globalGameJam2022_keypoint4_title: "Gameplay basé sur de la construction de deck",
    globalGameJam2022_keypoint4_description: "Les actions du joueur dépendent des cartes tirées. L'évolution du joueur dans le jeu vient de la mécanique de construction de deck.",

    globalGameJam2022_keypoint5_title: "Lien vers le jeu",
    globalGameJam2022_keypoint5_description: "",

// ------------------ Global Game Jam 2020 ------------------ //
    globalGameJam2020_title: "Global Game Jam 2020",
    globalGameJam2020_summary: "Nous avons fait un jeu de plateforme 2D pendant la Global Game Jam 2020 avec 3 amis",
    globalGameJam2020_description: "En janvier 2020, j'ai participé avec quelques amis à ma première Global Game Jam. Nous avions 48 heures pour faire un jeu sur un thème : réparation.\n\nNous avons fait un jeu de plateforme 2D dans un environnement 3D. Le joueur joue un robot cassé qui a besoin de trouver ses pièces dans quatres niveaux différents.\nChaque niveau peut être joué dans n'importe quel ordre. Chaque pièce retrouvée du robot déverrouille une nouvelle capacité qui peut aider dans un autre niveau, de sorte que le joueur puisse choisir comment il veut progresser.\nPar exemple: trouver les bras du robot débloque la possibilité de grimper aux murs, tandis que le jetpack permet de faire un double saut.\n\nC'était notre premier jeu de game jam et bien que le jeu aurait besoin d'un certain polissage, c'était néanmoins une très bonne expérience.",

    globalGameJam2020_keypoint1_title: "Fabriqué en 48 heures en équipe",
    globalGameJam2020_keypoint1_description: "",

    globalGameJam2020_keypoint2_title: "Mélange de 2D et 3D",
    globalGameJam2020_keypoint2_description: "Nous avons fait evolué des sprites 2D dans un environnement 3D.",

    globalGameJam2020_keypoint3_title: "Github utilisé pour la gestion de versions",
    globalGameJam2020_keypoint3_description: "",

    globalGameJam2020_keypoint4_title: "Gameplay évolutif",
    globalGameJam2020_keypoint4_description: "Le gameplay n'est pas la même selon l'ordre dans lequel les niveaux sont joués.",

    globalGameJam2020_keypoint5_title: "Level design",
    globalGameJam2020_keypoint5_description: "Le design d'un niveau est différente selon le gameplay prévu pour le niveau (quelle partie du robot le joueur récupère dans le niveau en question).",

    globalGameJam2020_keypoint6_title: "Lien vers le jeu",
    globalGameJam2020_keypoint6_description: "",

// ------------------ Game engine ------------------ //
    gameEngine_title: "Moteur de jeu",
    gameEngine_summary: "Un moteur de jeu simple fait avec SDL2 et C++",
    gameEngine_description: "J'ai décidé d'essayer de concevoir un jeu-vidéo sans utiliser aucun moteur de jeu. Je maîtrise le C++ mais il était intéressant d'apprendre et de l'utiliser avec SDL2 en plus.\n\nJ'ai créé un prototype fonctionnel basique. Dans ce prototype, un niveau de jeu était générée grâce aux information d'une grille (une liste de liste de nombres) et d'un tileset.",

    gameEngine_keypoint1_title: "Conçu de zéro",
    gameEngine_keypoint1_description: "Moteur de jeu créé de zéro jusqu'a un prototype fonctionnel sans librairie externe.",

    gameEngine_keypoint2_title: "Jeu simple créé avec le moteur",
    gameEngine_keypoint2_description: "",

// ------------------ Rotate ------------------ //
    rotate_title: "Rotate",
    rotate_summary: "Un prototype de jeu 2D réalisé avec Swift et Xcode",
    rotate_description: "J'ai fait un prototype de jeu 2D pour IOS afin de me familiariser avec Swift. J'ai utilisé Xcode et SpriteKit programmer ce prototype.\n\nDans le jeu, une balle rebondit de manière infinie et régulière sur une sphère avec des piques. En utilisant ses doigts, le joueur peut tourner la sphère et guider la balle vers une porte de sortie verte à un point précis de la sphère. Une fois que la balle atteint la sortie, une nouvelle sphère est générée et le score augmente d'un point.\nSi la balle touche un pique, la partie est perdue et le score est réinitialisé.",

    rotate_keypoint1_title: "Commandes adaptées au mobile",
    rotate_keypoint1_description: "Joystick virtuel disponible n'importe où à l'écran.",

    rotate_keypoint2_title: "Game design",
    rotate_keypoint2_description: "Gameplay Arcade adapté au médium.",

// ------------------ DotWar ------------------ //
    dotWar_title: "DotWar",
    dotWar_summary: "Un jeu fait en 24 heures avec Unity3D pour les téléphones Android",
    dotWar_description: "DotWar est un jeu qui fonctionne sur les appareils Android. L'idée était de me challenger et créer un jeu en une journée.\n\nDans ce jeu, le joueur doit cliquer sur un point rouge dans un temps imparti. Le point joue alors une note de piano et se déplace à un autre endroit de l'écran.\nLa difficulté augmente au fil du temps.\n\nCe jeu a été fait avec unity3D 2019 et C#.",

    dotWar_keypoint1_title: "Fabriqué en 24 heures",
    dotWar_keypoint1_description: "",

    dotWar_keypoint2_title: "Publié sur Google Play",
    dotWar_keypoint2_description: "",

    dotWar_keypoint3_title: "Game design",
    dotWar_keypoint3_description: "Gameplay Arcade adapté au médium. Gameplay simple mais efficace fait pour être réalisé en 24h sans dépassé la contrainte de temps.",

// ------------------ Local Beer ------------------ //
    localBeer_title: "Local Beer",
    localBeer_summary: "Une application Android pour afficher les brasseries locales",
    localBeer_description: "LocalBeer est une application qui liste les brasseries de Bretagne, en France. C'était un projet réalisé pendant les classes de programmation orientées objet à l'ENIB. La perspective de LocalBeer est de pousser les utilisateurs à consommer et découvrir des bières et des brasseries locales, donc cette application rempli l'un des 17 objectifs du développement durable.\n\nCette application a été faite avec Android Studio 3.5, Java et XML. La base de données est en JSON et peut être utilisée dans d'autres programmes. L'application a également été faite avec le language Swift par un autre membre de mon groupe et fonctionne sur iPhone et Apple Watch.",

    localBeer_keypoint1_title: "Réalisation de l'un des 17 objectifs du développement durable",
    localBeer_keypoint1_description: "",

    localBeer_keypoint2_title: "Faite à la fois pour IOS et Android",
    localBeer_keypoint2_description: "Le développement s'est fait en parallèle pour les deux plates-formes avec la base de données en commun.",

// ------------------ Software & programming languages ------------------ //
    software: {
        ALL: "Tous",
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
        ALL: "Tous",
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
    engineeringDegree_title: "Diplôme d'ingénieur",
    engineeringDegree_summary: "Cours préparatoires intégrés au programme d'ingénierie. Cours d'ingénierie comportant trois domaines principaux: Programmation, Électronique et Mécatronique. Grâce à cette formation généraliste, nous avons une compréhension et une connaissance globale dans tous ces domaines d'ingénierie, quelle que soit la spécialisation.\nSpécialisation: programmation",
    engineeringDegree_company: "ENIB",
    engineeringDegree_company_website: "https://www.enib.fr/",
    engineeringDegree_location: "Brest, France",
    engineeringDegree_startDate: "01-09-2016",
    engineeringDegree_endDate: "01-03-2022",

    erasmusExchange_title: "6 mois d'échange Erasmus en Norvège",
    erasmusExchange_summary: "Semestre Erasmus en Norvège où j'ai principalement étudié le Data Mining, le Machine Learning et la programmation web.",
    erasmusExchange_company: "Université de Stavanger",
    erasmusExchange_company_website: "https://www.uis.no/en",
    erasmusExchange_location: "Stavanger, Norway",
    erasmusExchange_startDate: "01-01-2020",
    erasmusExchange_endDate: "01-07-2020",

    highSchool_title: "Baccalauréat S avec mention",
    highSchool_summary: "Specialisation: Informatique et Science du numérique. Avec mention",
    highSchool_company: "Lycée Jacques Monod",
    highSchool_company_website: "https://lyceejacquesmonod.eu/",
    highSchool_location: "Saint-Jean-de-Braye, France",
    highSchool_startDate: "01-09-2013",
    highSchool_endDate: "01-07-2016",

// ------------------ Experiences ------------------ //
    threeMonthsInternship_title: "Stage de programmation de 3 mois",
    threeMonthsInternship_summary: "J'ai amélioré et complété un outil qui permet d'éditer et mettre en page des rapports médicaux dans un logiciel appelé 'Planet Onco Dose'. Planet Onco Dose est un logiciel d'imagerie médicale pour aider a soigner les cancers qui utilise un très grand nombre de données. L'optimisation lors de l'utilisation de telles quantités de données était une partie primordiale au fonctionnement de cet outil d'édition rapports médicaux.",
    threeMonthsInternship_company: "DOSIsoft",
    threeMonthsInternship_company_website: "https://www.dosisoft.com/",
    threeMonthsInternship_location: "Paris, France",
    threeMonthsInternship_startDate: "01-06-2019",
    threeMonthsInternship_endDate: "30-08-2019",

    fourMonthsInternship_title: "Stage de programmation de 4 mois",
    fourMonthsInternship_summary: "J'ai travaillé sur un système de simulation interactives créé pour aider les enseignants en début de carrière à acquérir des compétences efficaces pour gérer des classes d'élèves. J'ai dû débuguer et optimiser un nouveau logiciel utilisé pour créer et modifier des scénarios pour ce système.\nJ'ai également travaillé sur Unity pour concevoir une scène fonctionnant sur les appareils VR.",
    fourMonthsInternship_company: "Affective Social Computing Laboratory, Florida International University",
    fourMonthsInternship_company_website: "https://ascl.cs.fiu.edu/",
    fourMonthsInternship_location: "From Centre Européen de Réalité Virtuelle (CERV), Brest, France",
    fourMonthsInternship_startDate: "01-09-2020",
    fourMonthsInternship_endDate: "21-12-2020",

    engineeringInternship_title: "Stage ingénieur de 6 mois",
    engineeringInternship_summary: "J'ai créé une application web à partir de zéro qui a permis à l'équipe QA d'accéder à leurs propres scripts et de remplir une analyse de cause en cas d'échec.\nL'application affiche de nombreuses informations dans différents onglets. C'était le point de départ pour obtenir tous les tests automatisés de l'équipe QA, tous au même endroit.\nAu cours de ce stage, j'avais une réunion hebdomadaire avec l'équipe QA, qui agissait en tant que mon client, pour prendre en compte leurs retours et s'assurer que le produit final était correspondant à ce dont ils avaient besoin.",
    engineeringInternship_company: "Genesys",
    engineeringInternship_location: "Brest, France",
    engineeringInternship_startDate: "01-09-2021",
    engineeringInternship_endDate: "15-03-2022",

    genesys_title: "Ingénieur logiciel full-stack (associate)",
    genesys_summary: "J'ai travaillé en tant qu'ingénieur logiciel pour développer les produits Genesys.\nGenesys est une entreprise qui offre des solutions cloud à divers partenaires, pour de la gestion d'agent et de clients.\nJ'ai travaillé sur une application web permettant aux grandes entreprises de créer des applications libres-services (Réponse Vocale Interactive) et de services assistés (routage) pour leurs besoins.\nL'équipe avec laquelle j'ai travaillé était composée de personnes du Canada, des États-Unis, de l'Inde et de l'Europe.",
    genesys_company: "Genesys",
    genesys_company_website: "https://www.genesys.com/",
    genesys_location: "Brest, France",
    genesys_startDate: "01-04-2022",
    genesys_endDate: "15-05-2023",

    freelance_title: "Developeur freelance",
    freelance_summary: "Je me suis donné 1 an pour travailler comme développeur freelance pour mon auto-entreprise.\nJ'ai conçu et publié plusieurs jeux et réalisé de nombreux prototypes. Pour chaque jeu, je me suis occupé du travail de préproduction: documents de conception de jeux, description du \"produit minimum viable\" et création de diagrammes UML.\nJ'ai ensuite programmé les jeux en utilisant le moteur de jeu Godot.",
    freelance_company: "Luc Castelain",
    freelance_location: "Brest, France",
    freelance_startDate: "01-06-2023",
    freelance_endDate: "01-07-2024",

    baudin_title: "Ingénieur logiciel full-stack",
    baudin_summary: "J'ai travaillé en tant qu'ingénieur logiciel pour Baudin Chateauneuf.\nLe Groupe Baudin Chateauneuf est l'un des principaux acteurs de la construction et du génie civil en France avec plus de 2000 employés. Baudin opère dans la construction métallique et mécanique, le génie civil et le bâtiment avec plus de 100 ans d'histoire.\nMon travail principal était de transitionner petit à petit leurs applications client lourd vers un environnement web. Les applications choisies pour la transition ont été repensées et redesignées en entier. En travaillant avec une petite équipe, j'ai dû participer à chaque étape du développement, de la conception à la programmation, devops, jusqu'à la production et le support.",
    baudin_company: "Baudin Chateauneuf",
    baudin_company_website: "https://www.baudinchateauneuf.com/",
    baudin_location: "Châteauneuf-sur-Loire, France",
    baudin_startDate: "10-21-2024",
    baudin_endDate: "",
}

export const FR_PROJECT_TYPE = {
    ALL: "Tous",
    GAME: "jeu-vidéo",
    WEB: "Web",
    ANDROID: "Android",
    IOS: "IOS",
}

export const FR_RESUME_TYPE = {
    ALL: "Tous",
    EDUCATION: "Études",
    EXPERIENCE: "Expériences",
}