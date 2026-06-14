const petTranslations = {
    ru: {
        gameTitle: "ПИТОМЕЦ",
        subtitle: "Виртуальное существо требует вашего внимания",
        petTitle: "КИБЕР-СУЩЕСТВО",
        statsTitle: "СИСТЕМНЫЕ ПОКАЗАТЕЛИ",
        healthLabel: "Здоровье",
        energyLabel: "Энергия",
        moodLabel: "Настроение",
        cleanlinessLabel: "Чистота",
        infoTitle: "ИНФОРМАЦИЯ",
        infoText: "Ухаживайте за своим кибер-существом, чтобы оно развивалось. Низкие показатели могут привести к неисправностям.",
        infoText2: "Зарабатывайте кредиты, ухаживая за питомцем, и покупайте улучшения в магазине.",
        actionsTitle: "ДОСТУПНЫЕ ДЕЙСТВИЯ",
        feedText: "КИБЕР-КОРМ",
        feedCost: "Цена: 5 кредитов",
        playText: "ИГРАТЬ",
        playCost: "Цена: 3 кредита",
        cleanText: "ОЧИСТКА",
        cleanCost: "Цена: 4 кредита",
        chargeText: "ПОДЗАРЯДКА",
        chargeCost: "Цена: 6 кредитов",
        upgradeActionText: "АПГРЕЙД",
        upgradeActionCost: "Цена: 15 кредитов",
        restText: "ОТДЫХ",
        restCost: "Бесплатно",
        saveText: "СОХРАНИТЬ",
        loadText: "ЗАГРУЗИТЬ",
        resetGameText: "СБРОСИТЬ ИГРУ",
        shopTitle: "КИБЕР-МАГАЗИН",
        cpuTitle: "Улучшенный процессор",
        cpuDesc: "Увеличивает максимальную энергию на 20%",
        nanobotsTitle: "Наноботы чистоты",
        nanobotsDesc: "Автоматически поддерживает чистоту",
        emotionTitle: "Эмоциональный чип",
        emotionDesc: "Уменьшает скорость падения настроения",
        feederTitle: "Автокормушка",
        feederDesc: "Автоматически кормит питомца",
        footer: "Питомец | Все системы функционируют | © Ramondrole",
        credits: "Кредиты:",
        defaultMessage: "Ваш питомец ожидает команд. Следите за его параметрами!",
        noCredits: "Недостаточно кредитов для покупки кибер-корма!",
        alreadyFull: "Питомец уже полностью здоров!",
        noEnergy: "У питомца недостаточно энергии для игры!",
        alreadyClean: "Питомец уже идеально чист!",
        alreadyCharged: "Питомец уже полностью заряжен!",
        noCreditsUpgrade: "Недостаточно кредитов для апгрейда!",
        noCreditsShop: "Недостаточно кредитов для покупки этого улучшения!",
        feedMessage: "Кибер-корм принят. Здоровье и настроение повышены!",
        playMessage: "Игровая сессия завершена. Настроение улучшено!",
        cleanMessage: "Процедура очистки завершена. Чистота и настроение повышены!",
        chargeMessage: "Подзарядка завершена. Уровень энергии повышен!",
        upgradeMessage: "Апгрейд установлен. Все параметры слегка улучшены!",
        restMessage: "Питомец отдохнул. Энергия и здоровье восстановлены!",
        cpuBought: "Улучшенный процессор установлен! Максимальная энергия увеличена.",
        nanobotsBought: "Наноботы активированы! Чистота теперь уменьшается медленнее.",
        emotionBought: "Эмоциональный чип установлен! Настроение теперь уменьшается медленнее.",
        feederBought: "Автокормушка установлена! Здоровье теперь уменьшается медленнее.",
        criticalWarning: "ВНИМАНИЕ: Критический уровень одного или нескольких параметров! Требуется немедленное вмешательство.",
        initMessage: "Система инициализирована. Кибер-питомец активирован. Начните уход за существом.",
        saveSuccess: "Игра сохранена успешно! Данные записаны в локальное хранилище.",
        noSaveFound: "Сохраненная игра не найдена. Создайте новую игру!",
        loadSuccess: "Игра загружена успешно! Состояние восстановлено.",
        loadError: "Ошибка загрузки: поврежденные данные сохранения.",
        resetConfirm: "Вы уверены, что хотите сбросить игру? Все сохранения будут удалены.",
        resetSuccess: "Игра сброшена. Начинаем заново!",
        saveFound: "Обнаружено сохранение игры. Загрузить его?",
        about: "Обо мне",
        games: "Наши игры",
        functions: "Полезные функции"
    },
    en: {
        gameTitle: "PET",
        subtitle: "Virtual creature needs your attention",
        petTitle: "CYBER-CREATURE",
        statsTitle: "SYSTEM STATS",
        healthLabel: "Health",
        energyLabel: "Energy",
        moodLabel: "Mood",
        cleanlinessLabel: "Cleanliness",
        infoTitle: "INFO",
        infoText: "Take care of your cyber-creature so it can evolve. Low stats may cause malfunctions.",
        infoText2: "Earn credits by caring for your pet and buy upgrades in the shop.",
        actionsTitle: "AVAILABLE ACTIONS",
        feedText: "CYBER-FOOD",
        feedCost: "Cost: 5 credits",
        playText: "PLAY",
        playCost: "Cost: 3 credits",
        cleanText: "CLEAN",
        cleanCost: "Cost: 4 credits",
        chargeText: "CHARGE",
        chargeCost: "Cost: 6 credits",
        upgradeActionText: "UPGRADE",
        upgradeActionCost: "Cost: 15 credits",
        restText: "REST",
        restCost: "Free",
        saveText: "SAVE",
        loadText: "LOAD",
        resetGameText: "RESET GAME",
        shopTitle: "CYBER-SHOP",
        cpuTitle: "Enhanced Processor",
        cpuDesc: "Increases max energy by 20%",
        nanobotsTitle: "Cleanliness Nanobots",
        nanobotsDesc: "Automatically maintains cleanliness",
        emotionTitle: "Emotional Chip",
        emotionDesc: "Reduces mood decay rate",
        feederTitle: "Auto-Feeder",
        feederDesc: "Automatically feeds the pet",
        footer: "Pet | All systems operational | © Ramondrole",
        credits: "Credits:",
        defaultMessage: "Your pet awaits commands. Watch its stats!",
        noCredits: "Not enough credits to buy cyber-food!",
        alreadyFull: "Pet is already fully healthy!",
        noEnergy: "Pet doesn't have enough energy to play!",
        alreadyClean: "Pet is already perfectly clean!",
        alreadyCharged: "Pet is already fully charged!",
        noCreditsUpgrade: "Not enough credits for upgrade!",
        noCreditsShop: "Not enough credits to buy this upgrade!",
        feedMessage: "Cyber-food consumed. Health and mood increased!",
        playMessage: "Gaming session complete. Mood improved!",
        cleanMessage: "Cleaning procedure complete. Cleanliness and mood increased!",
        chargeMessage: "Charging complete. Energy level increased!",
        upgradeMessage: "Upgrade installed. All stats slightly improved!",
        restMessage: "Pet rested. Energy and health restored!",
        cpuBought: "Enhanced processor installed! Max energy increased.",
        nanobotsBought: "Nanobots activated! Cleanliness decays slower.",
        emotionBought: "Emotional chip installed! Mood decays slower.",
        feederBought: "Auto-feeder installed! Health decays slower.",
        criticalWarning: "WARNING: Critical level of one or more stats! Immediate intervention required.",
        initMessage: "System initialized. Cyber-pet activated. Start caring for the creature.",
        saveSuccess: "Game saved successfully! Data written to local storage.",
        noSaveFound: "No saved game found. Start a new game!",
        loadSuccess: "Game loaded successfully! State restored.",
        loadError: "Load error: corrupted save data.",
        resetConfirm: "Are you sure you want to reset the game? All saves will be deleted.",
        resetSuccess: "Game reset. Starting over!",
        saveFound: "Saved game found. Load it?",
        about: "About me",
        games: "Our games",
        functions: "Useful functions"
    },
    de: {
        gameTitle: "HAUSTIER",
        subtitle: "Virtuelle Kreatur braucht deine Aufmerksamkeit",
        petTitle: "KIBER-KREATUR",
        statsTitle: "SYSTEMSTATISTIK",
        healthLabel: "Gesundheit",
        energyLabel: "Energie",
        moodLabel: "Stimmung",
        cleanlinessLabel: "Sauberkeit",
        infoTitle: "INFO",
        infoText: "Pflege deine Cyber-Kreatur, damit sie sich entwickelt. Niedrige Werte können zu Fehlfunktionen führen.",
        infoText2: "Verdiene Credits durch die Pflege deines Haustiers und kaufe Upgrades im Shop.",
        actionsTitle: "VERFÜGBARE AKTIONEN",
        feedText: "CYBER-FUTTER",
        feedCost: "Preis: 5 Credits",
        playText: "SPIELEN",
        playCost: "Preis: 3 Credits",
        cleanText: "REINIGEN",
        cleanCost: "Preis: 4 Credits",
        chargeText: "AUFLADEN",
        chargeCost: "Preis: 6 Credits",
        upgradeActionText: "UPGRADE",
        upgradeActionCost: "Preis: 15 Credits",
        restText: "AUSRUHEN",
        restCost: "Kostenlos",
        saveText: "SPEICHERN",
        loadText: "LADEN",
        resetGameText: "SPIEL ZURÜCKSETZEN",
        shopTitle: "CYBER-SHOP",
        cpuTitle: "Verbesserter Prozessor",
        cpuDesc: "Erhöht maximale Energie um 20%",
        nanobotsTitle: "Sauberkeits-Nanobots",
        nanobotsDesc: "Hält Sauberkeit automatisch aufrecht",
        emotionTitle: "Emotions-Chip",
        emotionDesc: "Verringert Stimmungsabfall",
        feederTitle: "Auto-Fütterer",
        feederDesc: "Füttert das Haustier automatisch",
        footer: "Haustier | Alle Systeme funktionieren | © Ramondrole",
        credits: "Credits:",
        defaultMessage: "Dein Haustier wartet auf Befehle. Beobachte seine Werte!",
        noCredits: "Nicht genug Credits für Cyber-Futter!",
        alreadyFull: "Haustier ist bereits vollständig gesund!",
        noEnergy: "Haustier hat nicht genug Energie zum Spielen!",
        alreadyClean: "Haustier ist bereits perfekt sauber!",
        alreadyCharged: "Haustier ist bereits voll aufgeladen!",
        noCreditsUpgrade: "Nicht genug Credits für Upgrade!",
        noCreditsShop: "Nicht genug Credits für dieses Upgrade!",
        feedMessage: "Cyber-Futter aufgenommen. Gesundheit und Stimmung verbessert!",
        playMessage: "Spielsitzung abgeschlossen. Stimmung verbessert!",
        cleanMessage: "Reinigungsvorgang abgeschlossen. Sauberkeit und Stimmung verbessert!",
        chargeMessage: "Aufladung abgeschlossen. Energielevel erhöht!",
        upgradeMessage: "Upgrade installiert. Alle Werte leicht verbessert!",
        restMessage: "Haustier ausgeruht. Energie und Gesundheit wiederhergestellt!",
        cpuBought: "Verbesserter Prozessor installiert! Maximale Energie erhöht.",
        nanobotsBought: "Nanobots aktiviert! Sauberkeit sinkt langsamer.",
        emotionBought: "Emotions-Chip installiert! Stimmung sinkt langsamer.",
        feederBought: "Auto-Fütterer installiert! Gesundheit sinkt langsamer.",
        criticalWarning: "WARNUNG: Kritischer Wert bei einem oder mehreren Parametern! Sofortiges Eingreifen erforderlich.",
        initMessage: "System initialisiert. Cyber-Haustier aktiviert. Beginne mit der Pflege.",
        saveSuccess: "Spiel erfolgreich gespeichert! Daten im lokalen Speicher abgelegt.",
        noSaveFound: "Kein gespeichertes Spiel gefunden. Starte ein neues Spiel!",
        loadSuccess: "Spiel erfolgreich geladen! Zustand wiederhergestellt.",
        loadError: "Ladefehler: Beschädigte Speicherdaten.",
        resetConfirm: "Bist du sicher, dass du das Spiel zurücksetzen willst? Alle Spielstände werden gelöscht.",
        resetSuccess: "Spiel zurückgesetzt. Beginne von vorne!",
        saveFound: "Gespeichertes Spiel gefunden. Laden?",
        about: "Über mich",
        games: "Unsere Spiele",
        functions: "Nützliche Funktionen"
    }
};

let currentLang = localStorage.getItem('pet_language') || 'ru';

function t(key, replacements = {}) {
    let text = petTranslations[currentLang]?.[key] || petTranslations.ru[key];
    for (const [k, v] of Object.entries(replacements)) {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
    return text;
}

function updatePetUILanguage() {
    const elements = [
        'gameTitle', 'subtitle', 'petTitle', 'statsTitle', 'healthLabel', 'energyLabel',
        'moodLabel', 'cleanlinessLabel', 'infoTitle', 'infoText', 'infoText2', 'actionsTitle',
        'feedText', 'playText', 'cleanText', 'chargeText', 'upgradeActionText', 'restText',
        'saveText', 'loadText', 'resetGameText', 'shopTitle', 'cpuTitle', 'cpuDesc',
        'nanobotsTitle', 'nanobotsDesc', 'emotionTitle', 'emotionDesc', 'feederTitle', 'feederDesc', 'footer'
    ];
    
    elements.forEach(key => {
        const el = document.getElementById(key);
        if (el) el.textContent = t(key);
    });
    
    const costElements = ['feedCost', 'playCost', 'cleanCost', 'chargeCost', 'upgradeActionCost', 'restCost'];
    costElements.forEach(key => {
        const el = document.getElementById(key);
        if (el) el.textContent = t(key);
    });
    
    const creditsSpan = document.querySelector('#creditsDisplay');
    if (creditsSpan) creditsSpan.innerHTML = t('credits') + ' <span id="credits">' + credits + '</span>';
    
    if (!gameActiveInit) {
        document.getElementById('statusMessage').textContent = t('defaultMessage');
    }
    
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        const flags = { ru: '🌐 RU', en: '🌐 EN', de: '🌐 DE' };
        langBtn.innerHTML = flags[currentLang];
    }
    
    document.querySelectorAll('.nav-links a').forEach((link, idx) => {
        const keys = ['about', 'games', 'functions'];
        if (idx < keys.length) link.textContent = t(keys[idx]);
    });
}

let credits = 100;
let health = 80;
let energy = 65;
let mood = 75;
let cleanliness = 60;
let maxHealth = 100;
let maxEnergy = 100;
let maxMood = 100;
let maxCleanliness = 100;
let upgrades = { cpu: false, nanobots: false, emotion: false, feeder: false };
let gameActiveInit = false;

function updateUI() {
    document.getElementById('credits').textContent = credits;
    document.getElementById('healthValue').textContent = `${Math.floor(health)}%`;
    document.getElementById('energyValue').textContent = `${Math.floor(energy)}%`;
    document.getElementById('moodValue').textContent = `${Math.floor(mood)}%`;
    document.getElementById('cleanlinessValue').textContent = `${Math.floor(cleanliness)}%`;
    
    document.getElementById('healthBar').style.width = `${(health / maxHealth) * 100}%`;
    document.getElementById('energyBar').style.width = `${(energy / maxEnergy) * 100}%`;
    document.getElementById('moodBar').style.width = `${(mood / maxMood) * 100}%`;
    document.getElementById('cleanlinessBar').style.width = `${(cleanliness / maxCleanliness) * 100}%`;
    
    const cpuBtn = document.getElementById('cpuBtn');
    if (cpuBtn) {
        cpuBtn.disabled = upgrades.cpu || credits < 50;
        cpuBtn.textContent = upgrades.cpu ? (currentLang === 'ru' ? 'Куплено' : currentLang === 'en' ? 'Bought' : 'Gekauft') : t('cpuTitle').replace('Улучшенный процессор', '') + '50 ' + (currentLang === 'ru' ? 'кредитов' : currentLang === 'en' ? 'credits' : 'Credits');
    }
    
    const nanobotsBtn = document.getElementById('nanobotsBtn');
    if (nanobotsBtn) {
        nanobotsBtn.disabled = upgrades.nanobots || credits < 70;
        nanobotsBtn.textContent = upgrades.nanobots ? (currentLang === 'ru' ? 'Куплено' : currentLang === 'en' ? 'Bought' : 'Gekauft') : t('nanobotsTitle').replace('Наноботы чистоты', '') + '70 ' + (currentLang === 'ru' ? 'кредитов' : currentLang === 'en' ? 'credits' : 'Credits');
    }
    
    const emotionBtn = document.getElementById('emotionBtn');
    if (emotionBtn) {
        emotionBtn.disabled = upgrades.emotion || credits < 60;
        emotionBtn.textContent = upgrades.emotion ? (currentLang === 'ru' ? 'Куплено' : currentLang === 'en' ? 'Bought' : 'Gekauft') : t('emotionTitle').replace('Эмоциональный чип', '') + '60 ' + (currentLang === 'ru' ? 'кредитов' : currentLang === 'en' ? 'credits' : 'Credits');
    }
    
    const feederBtn = document.getElementById('feederBtn');
    if (feederBtn) {
        feederBtn.disabled = upgrades.feeder || credits < 80;
        feederBtn.textContent = upgrades.feeder ? (currentLang === 'ru' ? 'Куплено' : currentLang === 'en' ? 'Bought' : 'Gekauft') : t('feederTitle').replace('Автокормушка', '') + '80 ' + (currentLang === 'ru' ? 'кредитов' : currentLang === 'en' ? 'credits' : 'Credits');
    }
    
    updatePetAppearance();
}

function updatePetAppearance() {
    const pet = document.getElementById('pet');
    const mouth = document.querySelector('.pet-mouth');
    const eyes = document.querySelectorAll('.pet-eye');
    const antenna = document.querySelector('.pet-antenna');
    
    if (antenna) {
        if (mood > 70) {
            antenna.style.background = '#ff00cc';
            antenna.style.boxShadow = '0 0 10px #ff00cc';
        } else if (mood > 40) {
            antenna.style.background = '#ff9900';
            antenna.style.boxShadow = '0 0 10px #ff9900';
        } else {
            antenna.style.background = '#666';
            antenna.style.boxShadow = '0 0 5px #666';
        }
    }
    
    if (mouth) {
        if (mood > 70) {
            mouth.style.borderRadius = '0 0 30px 30px';
            mouth.style.height = '20px';
        } else if (mood > 40) {
            mouth.style.borderRadius = '50%';
            mouth.style.height = '10px';
            mouth.style.width = '30px';
        } else {
            mouth.style.borderRadius = '30px 30px 0 0';
            mouth.style.height = '20px';
        }
    }
}

function showMessage(text, isError = false) {
    const messageElement = document.getElementById('statusMessage');
    messageElement.textContent = text;
    messageElement.style.borderColor = isError ? '#ff0040' : 'var(--neon-blue)';
    messageElement.style.backgroundColor = isError ? 'rgba(255, 0, 64, 0.2)' : 'rgba(0, 50, 100, 0.5)';
    
    setTimeout(() => {
        messageElement.style.borderColor = 'var(--neon-blue)';
        messageElement.style.backgroundColor = 'rgba(0, 50, 100, 0.5)';
    }, 3000);
}

function performAction(action) {
    let message = "";
    let cost = 0;
    
    switch(action) {
        case 'feed':
            if (credits < 5) { showMessage(t('noCredits'), true); return; }
            if (health >= maxHealth) { showMessage(t('alreadyFull'), true); return; }
            cost = 5;
            health = Math.min(maxHealth, health + 15);
            mood = Math.min(maxMood, mood + 5);
            message = t('feedMessage');
            break;
        case 'play':
            if (credits < 3) { showMessage(t('noCredits'), true); return; }
            if (energy < 10) { showMessage(t('noEnergy'), true); return; }
            cost = 3;
            mood = Math.min(maxMood, mood + 20);
            energy = Math.max(0, energy - 10);
            cleanliness = Math.max(0, cleanliness - 5);
            message = t('playMessage');
            break;
        case 'clean':
            if (credits < 4) { showMessage(t('noCredits'), true); return; }
            if (cleanliness >= maxCleanliness) { showMessage(t('alreadyClean'), true); return; }
            cost = 4;
            cleanliness = Math.min(maxCleanliness, cleanliness + 25);
            mood = Math.min(maxMood, mood + 10);
            message = t('cleanMessage');
            break;
        case 'charge':
            if (credits < 6) { showMessage(t('noCredits'), true); return; }
            if (energy >= maxEnergy) { showMessage(t('alreadyCharged'), true); return; }
            cost = 6;
            energy = Math.min(maxEnergy, energy + 30);
            message = t('chargeMessage');
            break;
        case 'upgrade':
            if (credits < 15) { showMessage(t('noCreditsUpgrade'), true); return; }
            cost = 15;
            health = Math.min(maxHealth, health + 5);
            energy = Math.min(maxEnergy, energy + 5);
            mood = Math.min(maxMood, mood + 5);
            cleanliness = Math.min(maxCleanliness, cleanliness + 5);
            message = t('upgradeMessage');
            break;
        case 'rest':
            energy = Math.min(maxEnergy, energy + 15);
            health = Math.min(maxHealth, health + 5);
            message = t('restMessage');
            break;
        default: return;
    }
    
    if (cost > 0) credits -= cost;
    credits += 2;
    
    showMessage(message);
    updateUI();
}

function buyUpgrade(upgrade) {
    let cost = 0;
    let message = "";
    
    switch(upgrade) {
        case 'cpu':
            if (upgrades.cpu) return;
            if (credits < 50) { showMessage(t('noCreditsShop'), true); return; }
            cost = 50;
            maxEnergy = 120;
            energy = Math.min(maxEnergy, energy + 10);
            message = t('cpuBought');
            upgrades.cpu = true;
            break;
        case 'nanobots':
            if (upgrades.nanobots) return;
            if (credits < 70) { showMessage(t('noCreditsShop'), true); return; }
            cost = 70;
            message = t('nanobotsBought');
            upgrades.nanobots = true;
            break;
        case 'emotion':
            if (upgrades.emotion) return;
            if (credits < 60) { showMessage(t('noCreditsShop'), true); return; }
            cost = 60;
            message = t('emotionBought');
            upgrades.emotion = true;
            break;
        case 'feeder':
            if (upgrades.feeder) return;
            if (credits < 80) { showMessage(t('noCreditsShop'), true); return; }
            cost = 80;
            message = t('feederBought');
            upgrades.feeder = true;
            break;
        default: return;
    }
    
    credits -= cost;
    showMessage(message);
    updateUI();
}

function degradeStats() {
    health -= 2;
    energy -= 3;
    mood -= 2;
    cleanliness -= 1;
    
    if (upgrades.nanobots) cleanliness += 0.5;
    if (upgrades.emotion) mood += 0.5;
    if (upgrades.feeder) health += 0.5;
    
    health = Math.max(0, Math.min(maxHealth, health));
    energy = Math.max(0, Math.min(maxEnergy, energy));
    mood = Math.max(0, Math.min(maxMood, mood));
    cleanliness = Math.max(0, Math.min(maxCleanliness, cleanliness));
    
    if (health <= 10 || energy <= 10 || mood <= 10 || cleanliness <= 10) {
        showMessage(t('criticalWarning'), true);
    }
    
    credits += 1;
    updateUI();
}

function autoUpgrades() {
    if (upgrades.nanobots && cleanliness < 80) {
        cleanliness = Math.min(maxCleanliness, cleanliness + 5);
    }
    if (upgrades.feeder && health < 80) {
        health = Math.min(maxHealth, health + 3);
    }
}

function saveGame() {
    const gameData = { credits, health, energy, mood, cleanliness, maxHealth, maxEnergy, maxMood, maxCleanliness, upgrades };
    try {
        localStorage.setItem('cyberPetSave', JSON.stringify(gameData));
        showMessage(t('saveSuccess'));
    } catch (error) {
        showMessage("Ошибка сохранения: " + error.message, true);
    }
}

function loadGame() {
    try {
        const savedData = localStorage.getItem('cyberPetSave');
        if (!savedData) { showMessage(t('noSaveFound'), true); return; }
        const gameData = JSON.parse(savedData);
        credits = gameData.credits || 100;
        health = gameData.health || 80;
        energy = gameData.energy || 65;
        mood = gameData.mood || 75;
        cleanliness = gameData.cleanliness || 60;
        maxHealth = gameData.maxHealth || 100;
        maxEnergy = gameData.maxEnergy || 100;
        maxMood = gameData.maxMood || 100;
        maxCleanliness = gameData.maxCleanliness || 100;
        upgrades = gameData.upgrades || { cpu: false, nanobots: false, emotion: false, feeder: false };
        updateUI();
        showMessage(t('loadSuccess'));
    } catch (error) {
        showMessage(t('loadError'), true);
    }
}

function resetGame() {
    if (confirm(t('resetConfirm'))) {
        localStorage.removeItem('cyberPetSave');
        credits = 100;
        health = 80;
        energy = 65;
        mood = 75;
        cleanliness = 60;
        maxHealth = 100;
        maxEnergy = 100;
        maxMood = 100;
        maxCleanliness = 100;
        upgrades = { cpu: false, nanobots: false, emotion: false, feeder: false };
        updateUI();
        showMessage(t('resetSuccess'));
    }
}

function initGame() {
    updateUI();
    setInterval(degradeStats, 10000);
    setInterval(autoUpgrades, 15000);
    showMessage(t('initMessage'));
    gameActiveInit = true;
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('pet_language', lang);
    updatePetUILanguage();
    updateUI();
}

document.querySelectorAll('.lang-dropdown a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = item.getAttribute('data-lang');
        if (lang) changeLanguage(lang);
    });
});

window.onload = function() {
    try {
        const savedData = localStorage.getItem('cyberPetSave');
        if (savedData && confirm(t('saveFound'))) {
            loadGame();
        } else {
            initGame();
        }
    } catch (error) {
        initGame();
    }
    updatePetUILanguage();
};