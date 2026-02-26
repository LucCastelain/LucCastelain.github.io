export const CH_DATA = {
// ------------------ Matrix ------------------ //
    matrix_title: "Matrix",
    matrix_summary: "公司員工目錄的網頁應用程式",
    matrix_description: "Matrix 是一款應用程式，會顯示公司員工的各種資訊，例如他們的專業電話號碼和電子郵件、工作地點（主要公司或子公司）、部門和經理。\n如果你需要聯絡某個特定員工，它允許你搜尋特定或特定員工群組。",

    matrix_keypoint1_title: "通用資料保護條例（GDPR）- 保護員工敏感資料",
    matrix_keypoint1_description: "該應用程式不會顯示員工的敏感資訊。詳細資料的存取僅限於擁有正確授權的人（例如薪資負責人或必要時的人資部門）。",

    matrix_keypoint2_title: "與 Microsoft Graph API 的連結",
    matrix_keypoint2_description: "連結到 Microsoft Graph API 讓應用程式能直接在應用程式內顯示使用者在場與排程資訊（例如你尋找的人是否正在開會）。",

    matrix_keypoint3_title: "匯出至 XLSX",
    matrix_keypoint3_description: "目前可見員工資訊可匯出至 XLSX 檔案。",

    matrix_keypoint4_title: "濾鏡",
    matrix_keypoint4_description: "使用者有很多篩選器可以加快搜尋速度，或顯示特定群組（只有一個或部分部門、只有經理等）。",

    matrix_keypoint5_title: "偏好化伺服器元件",
    matrix_keypoint5_description: "透過將篩選器設為網址參數，偏好伺服器元件。它也允許分享一個已設定好正確篩選條件的網址，以尋找個人或一群人。",

// ------------------ Support DSI ------------------ //
    supportDSI_title: "Support DSI",
    supportDSI_summary: "使用者建立 IT 支援工單的網頁應用程式",
    supportDSI_description: "Support DSI 是一款網頁應用程式，允許 IT 員工建立許多不同的支援情境，其他員工可以向這些支援請求（從請求滑鼠、螢幕等電腦設備等）。遇到軟體問題，否則...）。\n使用者可依需求依照情境建立包含所有資訊的工單，協助 IT 協助。工單建立後，使用者可存取所有工單的歷史紀錄，更新時收到通知，必要時與 IT 部門交換，並在工單關閉時留下感謝。",

    supportDSI_keypoint1_title: "角色管理",
    supportDSI_keypoint1_description: "應用程式根據使用者被分配的角色（IT、部門經理、基層使用者）無法顯示相同的資訊與可能性。頁面與資訊的存取權從前端與後端均已獲得保障。",

    supportDSI_keypoint2_title: "透過圖實現情境",
    supportDSI_keypoint2_description: "透過互動式圖表（透過cytoscape.js）建立與視覺化情境變得簡單。",

    supportDSI_keypoint3_title: "链接到GLPI問題跟踪系统",
    supportDSI_keypoint3_description: "工單的建立會被鏡像並連結到 GLPI，方便 IT 端的管理。",

    supportDSI_keypoint4_title: "非常可个性化的场景",
    supportDSI_keypoint4_description: "如果需要，可以建立各種情境，並為每種情境提供豐富的表單配置。",

    supportDSI_keypoint5_title: "允許量化支援資料",
    supportDSI_keypoint5_description: "透過應用程式，可以監控票券的平均時間解析度，以及各類別的票數等資料。",

// ------------------ BC Formation ------------------ //
    bcFormation_title: "BC Formation",
    bcFormation_summary: "管理及查看公司培訓與培訓課程的應用程式",
    bcFormation_description: "BC Formation 是一款網頁應用程式，讓使用者能查看可用的訓練內容及其訓練歷史。每個部門的經理都可以查看該部門所有人員的訓練紀錄，並申請新的培訓。訓練管理員可以新增訓練和培訓師，建立和管理訓練課程，來源包括人員、日期、文件、地點等。",

    bcFormation_keypoint1_title: "角色管理",
    bcFormation_keypoint1_description: "應用程式根據使用者被分配的角色（訓練管理員、部門經理、基地使用者）不會顯示相同的資訊與可能性。頁面與資訊的存取權從前端與後端均已獲得保障。",

    bcFormation_keypoint2_title: "培訓請求對培訓管理員來說易於管理",
    bcFormation_keypoint2_description: "每個訓練請求都會被分組，讓管理員查看數量，若數量足夠再選擇建立會話。",

    bcFormation_keypoint3_title: "每位使用者都可以存取他的訓練紀錄",
    bcFormation_keypoint3_description: "每位使用者都能透過其證照查閱過去訓練的歷史紀錄。這樣每個人就能輕鬆判斷是否需要重做訓練。\n此外，經理還能看到他們管理人員的歷史，並擁有整體周邊的概覽。",

    bcFormation_keypoint4_title: "通知與電子郵件",
    bcFormation_keypoint4_description: "當訓練管理員確認訓練課程時，應用程式會發送通知（可透過 BC Portail 的所有網頁應用程式顯示），並向每位課程成員發送電子郵件。\n每場會議都會產生畢業典禮文件，並隨郵件一併發送。接著會將它連結到每位參與者的訓練請求，讓他們隨時都能查看。",

    bcFormation_keypoint5_title: "自動預算摘要與預測",
    bcFormation_keypoint5_description: "過去培訓課程的預算摘要及未來培訓課程的預算會自動計算，並可匯出為 XLSX 或 PDF 檔案。",

// ------------------ Load testing script ------------------ //
    loadTesting_title: "負載測試腳本",
    loadTesting_summary: "用來測試網頁伺服器的程式",
    loadTesting_description: "這個腳本允許在設定的時間段內對我們的應用程式伺服器進行載荷測試和壓力測試，並以不同費用進行，讓我們能確認它們是否配置正確，並能承受大量生產用戶的需求。\n此腳本連接至本地 Grafana 板，方便監控結果。",

    loadTesting_keypoint1_title: "可配置以測試不同的即時情境",
    loadTesting_keypoint1_description: "不同的收費和時間段可以設定，以徹底測試我們的伺服器。",

    loadTesting_keypoint2_title: "結果易於閱讀且即時呈現",
    loadTesting_keypoint2_description: "除了腳本執行結束時給出的結果摘要外，還連接 Grafana 板，方便即時讀取結果",

// ------------------ BC Portail ------------------ //
    bcPortail_title: "BC Portail",
    bcPortail_summary: "作為進入點，用以存取公司程式的應用程式",
    bcPortail_description: "BC Portail 封裝了 Baudin Chateauneuf 所開發的所有其他網頁應用程式。它像是服務導向架構，作為彼此網頁應用程式的共同基礎。",

    bcPortail_keypoint1_title: "服務導向架構（SOA）",
    bcPortail_keypoint1_description: "應用程式是作為一組鬆散耦合、較大粒度的服務所建構。服務可在不同應用程式間重複使用，視需要而行。它允許獨立開發與部署更大的功能區塊。",

    bcPortail_keypoint2_title: "常見元件",
    bcPortail_keypoint2_description: "包含可重複使用的元件與服務清單，涵蓋所有網頁應用程式。",

    bcPortail_keypoint3_title: "預設的布局和配置",
    bcPortail_keypoint3_description: "它包含每個網頁應用程式的預設版面配置（前端）與設定。",

    bcPortail_keypoint4_title: "顯示該公司所有申請",
    bcPortail_keypoint4_description: "入口網站會顯示公司所有的應用程式，包括網頁應用程式，也有厚客戶端應用程式。所有應用程式都能從這裡啟動，甚至是厚重的客戶端應用程式，因為有深度連結系統。",

    bcPortail_keypoint5_title: "應用程式庫",
    bcPortail_keypoint5_description: "導航列中設有應用程式函式庫，使用者可從任何網頁應用程式存取任何應用程式。",

    bcPortail_keypoint6_title: "配置頁面",
    bcPortail_keypoint6_description: "設定頁面允許管理員在入口網站新增網頁應用程式圖示，讓使用者能存取新增的網頁應用程式。管理員可以新增、編輯或移除網頁應用程式。在新增或編輯網頁應用程式時，他們可以管理公司內哪些職位或邊界可以存取該應用程式。他們也能管理應用程式的其他資訊（名稱、圖示等）。在此設定頁面中，管理員還可新增所有使用者的警示，若需要時能提供額外溝通層。",

    bcPortail_keypoint7_title: "版本與變更日誌",
    bcPortail_keypoint7_description: "每個應用程式的版本號與變更日誌皆可供使用者查閱。主要版本的更新會在使用者連線時自動顯示。",

    bcPortail_keypoint8_title: "暗黑模式",
    bcPortail_keypoint8_description: "所有元件與網頁應用程式皆可以暗黑模式使用。",

// ------------------ This website ------------------ //
    thisWebsite_title: "這個網站",
    thisWebsite_summary: "我做了這個網站用於展示作品集和履歷",
    thisWebsite_description: "你可以在瀏覽時看到這個專案 ☜（⌒▽⌒）☞",

    thisWebsite_keypoint1_title: "從零開始製作",
    thisWebsite_keypoint1_description: "",

    thisWebsite_keypoint2_title: "暗黑模式",
    thisWebsite_keypoint2_description: "",

    thisWebsite_keypoint3_title: "多種語言",
    thisWebsite_keypoint3_description: "本網站可瀏覽法文、英文及繁體中文。",

// ------------------ Deep Mine ------------------ //
    deepMine_title: "Deep Mine",
    deepMine_summary: "用程式生成的2D冒險遊戲世界",
    deepMine_description: "Deep Mine 是一款發生在程序生成世界中的 2D 探索與採礦遊戲。它是和朋友一起用 Godot 引擎製作的。\n每個世界都是透過噪音貼圖和執行緒系統程序生成的。它創造了一個無限的世界，根據深度（世界的垂直深度）和溫度（溫度由噪音紋理決定）而有不同的生態區。寶石也會根據生態區和深度出現。\n\n玩家可以交易和製作物品，並提升角色。他能打怪並完成任務。\n遊戲最多支援4名本地玩家遊玩，並可完整使用手把遊玩。\n\n這款遊戲仍在開發中，並有 Steam 頁面。",

    deepMine_keypoint1_title: "程序生成的世界",
    deepMine_keypoint1_description: "利用雜訊材質、執行緒和區塊來創造無限程序生成的世界。",

    deepMine_keypoint2_title: "球員物理",
    deepMine_keypoint2_description: "能使用梯子、流動繩索，也能游泳。",

    deepMine_keypoint3_title: "敵人行為",
    deepMine_keypoint3_description: "使用狀態機器，建立當玩家進入範圍時會改變的行為例程。",

    deepMine_keypoint4_title: "NPCs對話",
    deepMine_keypoint4_description: "NPC 可以有對話",

    deepMine_keypoint5_title: "工藝和交易系統",
    deepMine_keypoint5_description: "玩家可以與 NPC 交易和製作，玩家特性也能被提升。",

    deepMine_keypoint6_title: "像素藝術與像素動畫",
    deepMine_keypoint6_description: "製作材質、精靈圖，以及角色和敵人的動畫。",

    deepMine_keypoint7_title: "使用者介面",
    deepMine_keypoint7_description: "可搭配滑鼠、鍵盤和控制器使用。",

    deepMine_keypoint8_title: "本地多人遊戲",
    deepMine_keypoint8_description: "最多可分割畫面 4 人遊玩。",

    deepMine_keypoint9_title: "Steam 頁面連結",
    deepMine_keypoint9_description: "",

// ------------------ Dices Dungeon ------------------ //
    dicesDungeon_title: "Dices Dungeon",
    dicesDungeon_summary: "適用於iOS、可讓玩家操控機率的2D遊戲",
    dicesDungeon_description: "《骰子地城》是一款使用 Godot 引擎（一個開源遊戲引擎）製作的 2D 遊戲。\n這款遊戲允許玩家最多擲3顆骰子3次。每個骰子都可以被鎖定或解鎖，決定是否再次擲骰。根據骰子組合，會計算機率百分比。\n玩家接著可以打開眼前的兩扇門中的一扇。一個藏著壞東西，另一個藏著好獎勵。\n機率百分比決定了藏在選定門後的物品或怪物的價值或危險程度。\n\n除了玩機率和隨機性外，玩家還可以嘗試與骰子組合（例如兩顆或三個相同點數的組合......）來贏得物品，幫助他調節冒險的隨機性。\n\n這款遊戲是我用 Godot Engine 製作的第一款遊戲，並在 iOS 平台發行。",

    dicesDungeon_keypoint1_title: "我第一款在 iOS 上發行的遊戲",
    dicesDungeon_keypoint1_description: "",

    dicesDungeon_keypoint2_title: "美術指導",
    dicesDungeon_keypoint2_description: "它主要使用兩種顏色來玩味對比，並有強烈的美術指導。",

    dicesDungeon_keypoint3_title: "遊戲設計與機制",
    dicesDungeon_keypoint3_description: "街機玩法以適應手機媒介。",

    dicesDungeon_keypoint4_title: "使用者介面",
    dicesDungeon_keypoint4_description: "行動介面保持簡單，但能顯示所有必要資訊。",

    dicesDungeon_keypoint5_title: "像素藝術與像素動畫",
    dicesDungeon_keypoint5_description: "我設計並製作了質感和精靈圖。",

// ------------------ Stardew Valley like game ------------------ //
    farmingGame_title: "農場遊戲",
    farmingGame_summary: "農耕及農機的2D遊戲原型",
    farmingGame_description: "受到《Stardew Valley》啟發，我用 Godot 引擎製作了一個原型，試圖複製《Stardew Valley》的農耕機制以及它的物品欄。\n我建立了一個欄位背包（像是 Minecraft、Terraria、Stardew Valley 以及很多遊戲......），裡面有多個分頁。我還加入了對話和交易機制，以及帶時鐘的晝夜循環。\n\n這讓我更了解 Godot 引擎的運作方式。",

    farmingGame_keypoint1_title: "互動世界",
    farmingGame_keypoint1_description: "世界可以被大幅修改。玩家可以砍伐植被、破壞岩石，還能創造田地、種植作物並添加物品。",

    farmingGame_keypoint2_title: "NPC的對話",
    farmingGame_keypoint2_description: "NPC 可以有多個答案的對話，進而引導不同的任務。",

    farmingGame_keypoint3_title: "複雜庫存系統",
    farmingGame_keypoint3_description: "物品欄有多個不同物件類型的分頁。它完全支援控制器。",

    farmingGame_keypoint4_title: "玩家自訂",
    farmingGame_keypoint4_description: "玩家可以從頭髮到膚色創建獨特的球員精靈圖。",

    farmingGame_keypoint5_title: "球員裝備",
    farmingGame_keypoint5_description: "玩家可以裝備不同的工具和服裝來改變外觀。",

    farmingGame_keypoint6_title: "晝夜循環",
    farmingGame_keypoint6_description: "時鐘系統會播放作物生長和日夜循環。",

    farmingGame_keypoint7_title: "貿易體系",
    farmingGame_keypoint7_description: "玩家可以買賣物品給NPC。商人有自己的錢袋，會隨時間自動補充。",

    farmingGame_keypoint8_title: "本地多人遊戲",
    farmingGame_keypoint8_description: "最多可玩2名玩家。",

// ------------------ Card game prototype ------------------ //
    cardGamePrototype_title: "卡牌遊戲原型",
    cardGamePrototype_summary: "擁有自己規則的卡牌遊戲原型",
    cardGamePrototype_description: "有一次，我想到一個有自己規則的紙牌遊戲。為了測試這個想法是否可行，以及遊戲是否平衡、有趣且具策略性，我在 Godot 遊戲引擎中製作了一個原型。\n\n原型機同時製作了 2D 和 3D 版本，並有幾張卡片測試平衡性。\n我從規則制定到原型製作結束，兩天內完成，過程很有趣，也很有趣。",

    cardGamePrototype_keypoint1_title: "對手 AI 的創建",
    cardGamePrototype_keypoint1_description: "對手 AI 會根據玩家的最後一步做出反應並下棋。",

    cardGamePrototype_keypoint2_title: "兩種 2D 和 3D 兩種相同的原型",
    cardGamePrototype_keypoint2_description: "遊戲在 2D 或 3D 上都能用同一個 AI 運作。",

    cardGamePrototype_keypoint3_title: "創建了遊戲規則和平衡",
    cardGamePrototype_keypoint3_description: "",

// ------------------ Atelier Ryza crafting system ------------------ //
    atelierRyzaCraftingSystem_title: "Atelier Ryza 工藝系統",
    atelierRyzaCraftingSystem_summary: "靈感來自 Atelier Ryza 遊戲的先進工藝系統",
    atelierRyzaCraftingSystem_description: "這個原型是一套使用 Godot 遊戲引擎製作的先進製作系統。它基於 Aterlier Ryza 的製作系統。\n這個系統利用自訂資源打造出非常完整的製作系統。每件物品都需要製作一種或多種特定類型、子類型或獨特材料。製作物品會考慮每種材料的品質。\n\n新增製作物品和修改自訂資源以維持這個製作系統的深度非常容易。\n它可以以多種方式輕鬆擴展。例如，製作物品可以採用所選材料的特定特性......\n\n這個原型是獨立的，並被認為能輕鬆實作於更複雜的遊戲中。",

    atelierRyzaCraftingSystem_keypoint1_title: "更新簡便",
    atelierRyzaCraftingSystem_keypoint1_description: "很容易可以在不修改源代码的情況下添加新項目和特征。",

    atelierRyzaCraftingSystem_keypoint2_title: "使用者介面",
    atelierRyzaCraftingSystem_keypoint2_description: "介面清晰易讀，包含所有必要資訊。可以搭配超寬螢幕使用。",

    atelierRyzaCraftingSystem_keypoint3_title: "使用者體驗",
    atelierRyzaCraftingSystem_keypoint3_description: "這讓製作變得有趣且引人入勝。",

    atelierRyzaCraftingSystem_keypoint4_title: "獨立系統",
    atelierRyzaCraftingSystem_keypoint4_description: "很容易在更大的遊戲中添加。",

// ------------------ Genesys Designer ------------------ //
    genesysDesigner_title: "Genesys Designer",
    genesysDesigner_summary: "用於開發自助服務及輔助服務的網頁應用程式",
    genesysDesigner_description: "Genesys Designer 是一款基於網頁的工具，讓大型企業能夠為其企業建立自助式（互動語音回應）及輔助服務（路由）應用程式。它提供功能區塊給使用者，使用者可以拖放它們，輕鬆建立他們想要的自助服務或路由應用程式。\n用戶可以設定語音助理角色、文字轉語音的提示、營業時間等...\n在 Microsoft 支援 AngularJS 結束時，我必須想辦法將應用程式從 AngularJS 逐區塊轉移到 ReactJS。這種轉換必須無縫且對使用者隱形。",

    genesysDesigner_keypoint1_title: "簡單易學與使用",
    genesysDesigner_keypoint1_description: "功能區塊可拖曳可丟，使用者學習和使用起來非常簡單。",

    genesysDesigner_keypoint2_title: "適用於任何業務",
    genesysDesigner_keypoint2_description: "任何公司都能根據自身需求調整 Designer 的應用程式。",

    genesysDesigner_keypoint3_title: "微服務架構",
    genesysDesigner_keypoint3_description: "應用程式中幾乎每個分頁都是微服務，可以移除而不會影響其他分頁。",

// ------------------ Missed! ------------------ //
    missed_title: "Missed!",
    missed_summary: "使用 Unity3D 製作的 Android 手機 3D 遊戲",
    missed_description: "Missed是我在網路上上傳的第一款遊戲。 這是一個在Google Play上可用的Android遊戲。\n在這個遊戲中，玩家必須避免由白色立方體在競技場周圍旋轉的白色立方體發射的紅色彈。 玩家的分數等於他生存的時間。 隨著時間的流逝，更多立方體會出現，難度會增加。\n\n這個遊戲是用unity3D 2019和C#制作的。",

    missed_keypoint1_title: "我的第一次發表的遊戲",
    missed_keypoint1_description: "這款遊戲曾在 Google Play 上發布。",

    missed_keypoint2_title: "移動控制",
    missed_keypoint2_description: "虛擬搖桿可在螢幕上任何地方使用。",

    missed_keypoint3_title: "遊戲設計",
    missed_keypoint3_description: "街機遊戲玩法改編成行動媒介。",

    missed_keypoint4_title: "遊戲平衡",
    missed_keypoint4_description: "難度隨著時間的推移而增加，但不會太突然。",

// ------------------ Global Game Jam 2022 ------------------ //
    globalGameJam2022_title: "Global Game Jam 2022",
    globalGameJam2022_summary: "在 2022 年 Global Game Jam 期間，和三位朋友一起製作了一款受桌遊啟發的電子遊戲",
    globalGameJam2022_description: "2022年，我們以幾乎與2020年相同的團隊參加了 Global Game Jam。我們有48小時的時間來製作一款主題為「二元性」的遊戲。\n\n當時，我們常玩一款叫做《Clank！》的桌遊！這款遊戲是和朋友們競爭，爭奪地城中更多寶藏，同時逃離龍的攻擊。你可以選擇在地城待久一點以求更富有，或是更快回到地表，帶著較少的寶藏，但希望其他參賽者能死在龍手下。\n我們想盡可能享受重現遊戲的樂趣。要在地城中進化，你會使用遊戲中可購買的卡牌。我們必須在短短兩天內完成玩家在棋盤上的移動、商店系統以及牌組構築機制。雖然困難，但非常有趣。\n\n我們兩個程式設計師分別用 Unity3D，還有 3 個程式設計師負責圖形（卡和電影）。遊戲結束時，我們雖然累壞了，但很高興能在電腦上玩桌遊！",

    globalGameJam2022_keypoint1_title: "48小時內與團隊完成",
    globalGameJam2022_keypoint1_description: "",

    globalGameJam2022_keypoint2_title: "棋盤遊戲改編成電子遊戲",
    globalGameJam2022_keypoint2_description: "作為一款桌遊，玩家的動作處理得與更偏重動作的電子遊戲不同。",

    globalGameJam2022_keypoint3_title: "使用了 Github 進行版本控制",
    globalGameJam2022_keypoint3_description: "",

    globalGameJam2022_keypoint4_title: "以牌組構築為基礎的遊戲玩法",
    globalGameJam2022_keypoint4_description: "玩家的行動取決於抽到的牌。遊戲中玩家的進化來自於牌組構築機制。",

    globalGameJam2022_keypoint5_title: "遊戲的連結",
    globalGameJam2022_keypoint5_description: "",

// ------------------ Global Game Jam 2020 ------------------ //
    globalGameJam2020_title: "Global Game Jam 2020",
    globalGameJam2020_summary: "在 2020 年 Global Game Jam 期間，和三位朋友一起製作的一款 2D 平台遊戲",
    globalGameJam2020_description: "2020年1月，我和幾位朋友參加了全球 Global Game Jam。我們有48小時的時間來製作一款主題為：修復的遊戲。\n\n我們做了一款在3D環境中的2D平台遊戲。玩家扮演一個壞掉的機器人，需要在四個不同關卡中找到零件。\n每個關卡都可以任意順序遊玩。每個找到的機器人零件都會解鎖一項新能力，能在下一關發揮作用，讓玩家可以選擇自己想要的進度方式。\n例如：找到機器人的手臂可以解鎖攀爬牆壁的能力，或是噴射背包解鎖二段跳。\n\n這是我們的第一次 Global Game Jam，遊戲可能還需要一些打磨，但整體經驗非常棒。我們都學到了很多，也玩得很開心。",

    globalGameJam2020_keypoint1_title: "48小時內與團隊完成",
    globalGameJam2020_keypoint1_description: "",

    globalGameJam2020_keypoint2_title: "2D 和 3D 的混合",
    globalGameJam2020_keypoint2_description: "3D 環境中的 2D 精靈圖。",

    globalGameJam2020_keypoint3_title: "使用了 Github 進行版本控制",
    globalGameJam2020_keypoint3_description: "",

    globalGameJam2020_keypoint4_title: "遊戲玩法演進",
    globalGameJam2020_keypoint4_description: "遊戲玩法會因你玩關卡的順序而有所不同。",

    globalGameJam2020_keypoint5_title: "關卡設計",
    globalGameJam2020_keypoint5_description: "關卡的設計不同，取決於遊戲的玩法（玩家在上述水平獲得機器人的哪個部分）。",

    globalGameJam2020_keypoint6_title: "遊戲的連結",
    globalGameJam2020_keypoint6_description: "",

// ------------------ Game engine ------------------ //
    gameEngine_title: "遊戲引擎",
    gameEngine_summary: "使用SDL2和 C++ 的簡單遊戲引擎",
    gameEngine_description: "我決定嘗試不使用任何遊戲引擎來製作一款遊戲。我精通 C++，但學習並用 SDL2 也很有趣。\n\n我做了一個基本的原型在運行。在這個原型中，透過網格資訊和圖塊集生成了一張地圖。玩家角色可透過鍵盤移動並發射投射物。",

    gameEngine_keypoint1_title: "從零開始打造",
    gameEngine_keypoint1_description: "遊戲引擎從零開始打造，沒有外部函式庫。",

    gameEngine_keypoint2_title: "用這個引擎製作的基本工作遊戲",
    gameEngine_keypoint2_description: "",

// ------------------ Rotate ------------------ //
    rotate_title: "Rotate",
    rotate_summary: "使用 Swift 和 Xcode 製作的 2D 遊戲原型",
    rotate_description: "我為 iOS 做了一個 2D 遊戲原型來學習 Swift。我用了 Xcode 和 SpriteKit 來做這件事。\n\n遊戲中球會規律且無限地彈跳，球體上有尖刺。玩家可以用手指旋轉球體，引導球體到球體上的綠色位置。當球落在綠色位置時，會產生一個新的球體，分數會增加一分。\n若球觸碰到釘子，遊戲即告失敗，分數重置。",

    rotate_keypoint1_title: "移動控制",
    rotate_keypoint1_description: "虛擬搖桿可在螢幕上任何地方使用。",

    rotate_keypoint2_title: "遊戲設計",
    rotate_keypoint2_description: "街機遊戲玩法改編成行動媒介。",

// ------------------ DotWar ------------------ //
    dotWar_title: "DotWar",
    dotWar_summary: "24 小時內使用 Unity3D 製作的遊戲，適用於 Android 系統",
    dotWar_description: "DotWar 是一款可在 Android 裝置上運作的遊戲。這個想法是挑戰自己在一天內做出一款遊戲。\n\n在這款遊戲中，玩家必須在限定時間內點擊紅點。這個點會彈奏鋼琴音符，按下時會移動。\n難度會隨著分數增加而提升。\n\n這款遊戲是用 Unity 3D 2019 和 C# 製作的。",

    dotWar_keypoint1_title: "24小時內與團隊完成",
    dotWar_keypoint1_description: "",

    dotWar_keypoint2_title: "發布於 Google Play",
    dotWar_keypoint2_description: "",

    dotWar_keypoint3_title: "遊戲設計",
    dotWar_keypoint3_description: "街機遊戲玩法也被改編成這個媒介。簡單但有效的玩法，以應付時間限制。",

// ------------------ Local Beer ------------------ //
    localBeer_title: "Local Beer",
    localBeer_summary: "顯示在地釀酒廠的應用程式",
    localBeer_description: "LocalBeer 是一款應用程式，列出法國布列塔尼的一些啤酒廠。這是在 ENIB 物件導向程式設計課程中完成的專案。LocalBeer 的目標是推動使用者消費並發現在地啤酒與釀酒廠，因此這款應用程式完成了 17 項永續發展目標之一。\n\n這款應用程式是使用 Android Studio 3.5、Java 和 XML 製作的。資料庫是 JSON 格式，可以用來做其他程式。這個應用程式也是我團隊另一位成員用 swift 製作的，並且能在 iPhone 和 Apple Watch 上使用。",

    localBeer_keypoint1_title: "旨在完成17個可持续发展目標之一",
    localBeer_keypoint1_description: "",

    localBeer_keypoint2_title: "同時為 iOS 和 Android 製作",
    localBeer_keypoint2_description: "兩台平台的開發工作並行進行。",

// ------------------ Software & programming languages ------------------ //
    software: {
        ALL: "全部",
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
        ALL: "全部",
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
    engineeringDegree_title: "工程學位",
    engineeringDegree_summary: "預備班整合進工程課程。工程課程涵蓋三大領域：程式設計、電子學與機電一體化。因此，我們對所有這些工程領域擁有全球性的理解與知識，無論專業為何。\n專業領域：程式設計",
    engineeringDegree_company: "ENIB",
    engineeringDegree_company_website: "https://www.enib.fr/en_enib/",
    engineeringDegree_location: "布雷斯特，法國",
    engineeringDegree_startDate: "01-09-2016",
    engineeringDegree_endDate: "01-03-2022",

    erasmusExchange_title: "在挪威6個月的Erasmus交流",
    erasmusExchange_summary: "在挪威的Erasmus學期，在那裡我主要研究數據挖掘，機器學習和網頁編程。",
    erasmusExchange_company: "University of Stavanger（斯塔萬格大學）",
    erasmusExchange_company_website: "https://www.uis.no/en",
    erasmusExchange_location: "斯塔萬格，挪威",
    erasmusExchange_startDate: "01-01-2020",
    erasmusExchange_endDate: "01-07-2020",

    highSchool_title: "高中畢業證書（榮譽）",
    highSchool_summary: "專業:電腦科學與程式學。",
    highSchool_company: "Junior High-School Jacques Monod（雅克·莫諾高中）",
    highSchool_company_website: "https://lyceejacquesmonod.eu/",
    highSchool_location: "聖讓德布賴，法國",
    highSchool_startDate: "01-09-2013",
    highSchool_endDate: "01-07-2016",

// ------------------ Experiences ------------------ //
    threeMonthsInternship_title: "3個月的程式實習",
    threeMonthsInternship_summary: "我改良並升級了一個可以在名為「Planet Onco Dose」的醫療軟體中編輯和排版醫療報告的工具。Planet Onco Dose 是一款針對癌症疾病的醫學影像軟體，處理大量數據。在使用如此龐大資料的同時進行優化，也是讓醫療報告工具運作的重要部分。",
    threeMonthsInternship_company: "DOSIsoft",
    threeMonthsInternship_company_website: "https://www.dosisoft.com/",
    threeMonthsInternship_location: "巴黎，法國",
    threeMonthsInternship_startDate: "01-06-2019",
    threeMonthsInternship_endDate: "30-08-2019",

    fourMonthsInternship_title: "4個月的程式設計實習",
    fourMonthsInternship_summary: "我參與了一個互動模擬系統，幫助初入職教師學習有效的教室管理技能。我必須除錯並優化一套用來建立和編輯這個系統情境的新軟體。\n我也曾在 Unity 上製作一個在 VR 裝置上運作的場景。",
    fourMonthsInternship_company: "Affective Social Computing Laboratory，Florida International University（佛羅里達國際大學）",
    fourMonthsInternship_company_website: "https://ascl.cs.fiu.edu/",
    fourMonthsInternship_location: "來自 Centre Européen de Réalité Virtuelle（CERV），布雷斯特，法國",
    fourMonthsInternship_startDate: "01-09-2020",
    fourMonthsInternship_endDate: "21-12-2020",

    engineeringInternship_title: "6個月工程實習",
    engineeringInternship_summary: "我從零開始開發了一個網頁應用程式，讓品質保證團隊能存取自己的腳本，並在失敗狀態時填寫根本原因分析。\n應用程式在不同分頁中顯示許多資訊。它是讓所有品質保證自動化測試都集中在同一個地方的起點。\n在這段實習期間，我必須每週與品質保證團隊（他們是我的客戶）討論，考慮他們的回饋，確保最終產品符合他們的期望。",
    engineeringInternship_company: "Genesys",
    engineeringInternship_location: "布雷斯特，法國",
    engineeringInternship_startDate: "01-09-2021",
    engineeringInternship_endDate: "15-03-2022",

    genesys_title: "全端軟體工程師（副學）",
    genesys_summary: "我曾擔任全端軟體工程師，負責開發Genesys的產品。\nGenesys 是一家為各類合作夥伴、代理人及客戶管理提供雲端解決方案的公司。\n我曾參與開發一個網頁應用程式，讓大型企業能為他們的業務打造自助式（互動語音回應）和輔助服務（路由）應用程式。\n我合作的團隊成員來自加拿大、美國、印度和歐洲。",
    genesys_company: "Genesys",
    genesys_company_website: "https://www.genesys.com/",
    genesys_location: "布雷斯特，法國",
    genesys_startDate: "01-04-2022",
    genesys_endDate: "15-05-2023",

    freelance_title: "自由開發者",
    freelance_summary: "我給自己一年時間，在自營公司擔任自由開發者。\n我設計並發行過多款遊戲，也製作過許多原型。每款遊戲我都做了前期製作工作：遊戲設計文件、描述「最小可行產品」以及製作 UML 圖表。\n接著我用 Godot 遊戲引擎來編寫遊戲。",
    freelance_company: "Luc Castelain",
    freelance_location: "布雷斯特，法國",
    freelance_startDate: "01-06-2023",
    freelance_endDate: "01-07-2024",

    baudin_title: "全端軟體工程師",
    baudin_summary: "我曾在 Baudin Chateauneuf 擔任軟體工程師。\nBaudin Chateauneuf 集團是法國建築與土木工程的主要企業之一，擁有超過 2000 名員工。它經營金屬與機械建築、土木工程及建築，擁有超過百年的歷史。\n我的主要工作是將他們的重型客戶端應用程式轉移到網頁環境。所選的過渡應用從頭重新設計。我和一個小團隊合作，必須參與他們開發的每一個步驟，從構思到程式設計、DevOps、進入生產環境和支援階段。",
    baudin_company: "Baudin Chateauneuf",
    baudin_company_website: "https://www.baudinchateauneuf.com/?lang=en",
    baudin_location: "Châteauneuf-sur-Loire，法國",
    baudin_startDate: "10-21-2024",
    baudin_endDate: "",
}

export const CH_PROJECT_TYPE = {
    ALL: "全部",
    GAME: "遊戲",
    WEB: "網頁應用程式",
    ANDROID: "Android",
    IOS: "IOS",
}

export const CH_RESUME_TYPE = {
    ALL: "All",
    EDUCATION: "Education",
    EXPERIENCE: "Experience",
}