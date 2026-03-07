let credits = 100;
let health = 80;
let energy = 65;
let mood = 75;
let cleanliness = 60;

let maxHealth = 100;
let maxEnergy = 100;
let maxMood = 100;
let maxCleanliness = 100;
        
let upgrades = {
    cpu: false,
    nanobots: false,
    emotion: false,
    feeder: false
};
        
function updateUI() {
    document.getElementById('credits').textContent = `Кредиты: ${credits}`;
    document.getElementById('healthValue').textContent = `${health}%`;
    document.getElementById('energyValue').textContent = `${energy}%`;
    document.getElementById('moodValue').textContent = `${mood}%`;
    document.getElementById('cleanlinessValue').textContent = `${cleanliness}%`;
            
    document.getElementById('healthBar').style.width = `${(health/maxHealth)*100}%`;
    document.getElementById('energyBar').style.width = `${(energy/maxEnergy)*100}%`;
    document.getElementById('moodBar').style.width = `${(mood/maxMood)*100}%`;
    document.getElementById('cleanlinessBar').style.width = `${(cleanliness/maxCleanliness)*100}%`;
            
    document.getElementById('cpuBtn').disabled = upgrades.cpu || credits < 50;
    document.getElementById('cpuBtn').textContent = upgrades.cpu ? 'Куплено' : 'Купить за 50 кредитов';
            
    document.getElementById('nanobotsBtn').disabled = upgrades.nanobots || credits < 70;
    document.getElementById('nanobotsBtn').textContent = upgrades.nanobots ? 'Куплено' : 'Купить за 70 кредитов';
            
    document.getElementById('emotionBtn').disabled = upgrades.emotion || credits < 60;
    document.getElementById('emotionBtn').textContent = upgrades.emotion ? 'Куплено' : 'Купить за 60 кредитов';
            
    document.getElementById('feederBtn').disabled = upgrades.feeder || credits < 80;
    document.getElementById('feederBtn').textContent = upgrades.feeder ? 'Куплено' : 'Купить за 80 кредитов';
            
    updatePetAppearance();
}
        
function updatePetAppearance() {
    const pet = document.getElementById('pet');
    const mouth = document.querySelector('.pet-mouth');
    const eyes = document.querySelectorAll('.pet-eye');
    
    const antenna = document.querySelector('.pet-antenna');
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
            
eyes.forEach(eye => {
    if (energy < 30) {
        eye.style.animation = 'blink 1s infinite';
    } else {
        eye.style.animation = 'none';
    }
});
            
if (!document.querySelector('#blink-animation')) {
    const style = document.createElement('style');
    style.id = 'blink-animation';
    style.textContent = `
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
    `;
    document.head.appendChild(style);
}
    }
        
        function performAction(action) {
            let message = "";
            let cost = 0;
            
            switch(action) {
                case 'feed':
                    if (credits < 5) {
                        showMessage("Недостаточно кредитов для покупки кибер-корма!");
                        return;
                    }
                    if (health >= maxHealth) {
                        showMessage("Питомец уже полностью здоров!");
                        return;
                    }
                    cost = 5;
                    health = Math.min(maxHealth, health + 15);
                    mood = Math.min(maxMood, mood + 5);
                    message = "Кибер-корм принят. Здоровье и настроение повышены!";
                    break;
                    
                case 'play':
                    if (credits < 3) {
                        showMessage("Недостаточно кредитов для игры!");
                        return;
                    }
                    if (energy < 10) {
                        showMessage("У питомца недостаточно энергии для игры!");
                        return;
                    }
                    cost = 3;
                    mood = Math.min(maxMood, mood + 20);
                    energy = Math.max(0, energy - 10);
                    cleanliness = Math.max(0, cleanliness - 5);
                    message = "Игровая сессия завершена. Настроение улучшено!";
                    break;
                    
                case 'clean':
                    if (credits < 4) {
                        showMessage("Недостаточно кредитов для очистки!");
                        return;
                    }
                    if (cleanliness >= maxCleanliness) {
                        showMessage("Питомец уже идеально чист!");
                        return;
                    }
                    cost = 4;
                    cleanliness = Math.min(maxCleanliness, cleanliness + 25);
                    mood = Math.min(maxMood, mood + 10);
                    message = "Процедура очистки завершена. Чистота и настроение повышены!";
                    break;
                    
                case 'charge':
                    if (credits < 6) {
                        showMessage("Недостаточно кредитов для подзарядки!");
                        return;
                    }
                    if (energy >= maxEnergy) {
                        showMessage("Питомец уже полностью заряжен!");
                        return;
                    }
                    cost = 6;
                    energy = Math.min(maxEnergy, energy + 30);
                    message = "Подзарядка завершена. Уровень энергии повышен!";
                    break;
                    
                case 'upgrade':
                    if (credits < 15) {
                        showMessage("Недостаточно кредитов для апгрейда!");
                        return;
                    }
                    cost = 15;
                    health = Math.min(maxHealth, health + 5);
                    energy = Math.min(maxEnergy, energy + 5);
                    mood = Math.min(maxMood, mood + 5);
                    cleanliness = Math.min(maxCleanliness, cleanliness + 5);
                    message = "Апгрейд установлен. Все параметры слегка улучшены!";
                    break;
                    
                case 'rest':
                    energy = Math.min(maxEnergy, energy + 15);
                    health = Math.min(maxHealth, health + 5);
                    message = "Питомец отдохнул. Энергия и здоровье восстановлены!";
                    break;
                    
                default:
                    return;
            }
            
            if (cost > 0) {
                credits -= cost;
            }
            
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
                    cost = 50;
                    maxEnergy = 120;
                    energy = Math.min(maxEnergy, energy + 10);
                    message = "Улучшенный процессор установлен! Максимальная энергия увеличена.";
                    upgrades.cpu = true;
                    break;
                    
                case 'nanobots':
                    if (upgrades.nanobots) return;
                    cost = 70;
                    message = "Наноботы активированы! Чистота теперь уменьшается медленнее.";
                    upgrades.nanobots = true;
                    break;
                    
                case 'emotion':
                    if (upgrades.emotion) return;
                    cost = 60;
                    message = "Эмоциональный чип установлен! Настроение теперь уменьшается медленнее.";
                    upgrades.emotion = true;
                    break;
                    
                case 'feeder':
                    if (upgrades.feeder) return;
                    cost = 80;
                    message = "Автокормушка установлена! Здоровье теперь уменьшается медленнее.";
                    upgrades.feeder = true;
                    break;
                    
                default:
                    return;
            }
            
            if (credits >= cost) {
                credits -= cost;
                showMessage(message);
                updateUI();
            } else {
                showMessage("Недостаточно кредитов для покупки этого улучшения!");
            }
        }
        
        function showMessage(text) {
            const messageElement = document.getElementById('statusMessage');
            messageElement.textContent = text;
            
            messageElement.style.opacity = 0;
            setTimeout(() => {
                messageElement.style.transition = "opacity 0.5s";
                messageElement.style.opacity = 1;
            }, 10);
            
            if (Math.random() > 0.7) {
                messageElement.classList.add('glitch');
                setTimeout(() => {
                    messageElement.classList.remove('glitch');
                }, 1000);
            }
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
                showMessage("ВНИМАНИЕ: Критический уровень одного или нескольких параметров! Требуется немедленное вмешательство.");
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
        
        function initGame() {
            updateUI();
            
            setInterval(degradeStats, 10000);
            
            setInterval(autoUpgrades, 15000);
            
            setInterval(randomEvent, 20000);
            
            showMessage("Система инициализирована. Кибер-питомец активирован. Начните уход за существом.");
        }
        
function randomEvent() {
    if (Math.random() > 0.7) {
        const events = [
            {
                name: "НЕЙРО-ВЗРЫВ",
                type: "special",
                message: "Кибер-питомец испытал нейронный взрыв! Параметры синхронизировались.",
                effect: function() {
                    const average = Math.floor((health + energy + mood + cleanliness) / 4);
                    const newValue = Math.min(100, average + 10);
                    health = newValue;
                    energy = newValue;
                    mood = newValue;
                    cleanliness = newValue;
                    
                    const allBars = document.querySelectorAll('.stat-fill');
                    allBars.forEach(bar => {
                        bar.style.transition = 'width 2s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
                        setTimeout(() => {
                            bar.style.width = `${newValue}%`;
                        }, 100);
                    });
                    
                    showEventEffect('special');
                    applyNeuralExplosionEffect();
                }
            },
            {
                name: "ХАКЕРСКАЯ АТАКА",
                type: "negative",
                message: "Неизвестный хакер атакует систему защиты!",
                effect: function() {
                    const hackDamage = 15 + Math.floor(Math.random() * 20);
                    health = Math.max(0, health - hackDamage);
                    energy = Math.max(0, energy - hackDamage);
                    
                    const stolenCredits = Math.min(credits, 10 + Math.floor(Math.random() * 20));
                    credits -= stolenCredits;
                    
                    showEventEffect('negative');
                    applyHackingEffect();
                    
                    setTimeout(() => {
                        showMessage(`Хакер украл ${stolenCredits} кредитов!`);
                        updateUI();
                    }, 1000);
                }
            },
            {
                name: "КВАНТОВЫЙ СКАЧОК",
                type: "special",
                message: "Активирован квантовый туннель! Параметры телепортированы.",
                effect: function() {
                    const params = [health, energy, mood, cleanliness];
                    
                    for (let i = params.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [params[i], params[j]] = [params[j], params[i]];
                    }
                    
                    health = params[0];
                    energy = params[1];
                    mood = params[2];
                    cleanliness = params[3];
                    
                    const bonusIndex = Math.floor(Math.random() * 4);
                    const bonusParams = [health, energy, mood, cleanliness];
                    bonusParams[bonusIndex] = Math.min(100, bonusParams[bonusIndex] + 25);
                    
                    health = bonusParams[0];
                    energy = bonusParams[1];
                    mood = bonusParams[2];
                    cleanliness = bonusParams[3];
                    
                    showEventEffect('special');
                    applyQuantumEffect();
                }
            },
            {
                name: "СИНТЕТИЧЕСКИЙ ВОСХОД",
                type: "positive",
                message: "Начало нового цикла синтетической эволюции!",
                effect: function() {
                    health = Math.min(maxHealth, health + Math.floor(health * 0.2));
                    energy = Math.min(maxEnergy, energy + Math.floor(energy * 0.2));
                    mood = Math.min(maxMood, mood + Math.floor(mood * 0.2));
                    cleanliness = Math.min(maxCleanliness, cleanliness + Math.floor(cleanliness * 0.2));
                    
                    const total = health + energy + mood + cleanliness;
                    if (total > 200) {
                        credits += Math.floor(total / 10);
                    }
                    
                    showEventEffect('positive');
                    applySyntheticDawnEffect();
                }
            },
            {
                name: "ГЛУБОКИЙ ГЛЮК",
                type: "negative",
                message: "Обнаружена критическая ошибка в ядре системы!",
                effect: function() {
                    health = Math.max(10, 100 - health);
                    energy = Math.max(10, 100 - energy);
                    mood = Math.max(10, 100 - mood);
                    cleanliness = Math.max(10, 100 - cleanliness);
                    
                    if (Object.keys(upgrades).some(key => upgrades[key]) && Math.random() > 0.5) {
                        const activeUpgrades = Object.keys(upgrades).filter(key => upgrades[key]);
                        const randomUpgrade = activeUpgrades[Math.floor(Math.random() * activeUpgrades.length)];
                        upgrades[randomUpgrade] = false;
                        showMessage(`Сбой в системе: ${getUpgradeName(randomUpgrade)} отключен!`);
                    }
                    
                    showEventEffect('negative');
                    applyDeepGlitchEffect();
                }
            },
            {
                name: "ЦИФРОВОЙ ФЕНИКС",
                type: "positive",
                message: "Система перерождается из цифрового пепла!",
                effect: function() {
                    if (health < 30 || energy < 30 || mood < 30 || cleanliness < 30) {
                        health = Math.min(maxHealth, health + 50);
                        energy = Math.min(maxEnergy, energy + 50);
                        mood = Math.min(maxMood, mood + 50);
                        cleanliness = Math.min(maxCleanliness, cleanliness + 50);
                        credits += 30;
                        showMessage("Феникс возрождается! Полное восстановление систем.");
                    } else {
                        health = Math.min(maxHealth, health + 20);
                        energy = Math.min(maxEnergy, energy + 20);
                        mood = Math.min(maxMood, mood + 20);
                        cleanliness = Math.min(maxCleanliness, cleanliness + 20);
                    }
                    
                    showEventEffect('positive');
                    applyPhoenixEffect();
                }
            },
            {
                name: "МАТРИЧНЫЙ ШТОРМ",
                type: "neutral",
                message: "Матричный шторм обрушивается на систему!",
                effect: function() {
                    const fluctuations = [
                        Math.floor(Math.random() * 40) - 20,
                        Math.floor(Math.random() * 40) - 20,
                        Math.floor(Math.random() * 40) - 20,
                        Math.floor(Math.random() * 40) - 20
                    ];
                    
                    health = Math.max(0, Math.min(maxHealth, health + fluctuations[0]));
                    energy = Math.max(0, Math.min(maxEnergy, energy + fluctuations[1]));
                    mood = Math.max(0, Math.min(maxMood, mood + fluctuations[2]));
                    cleanliness = Math.max(0, Math.min(maxCleanliness, cleanliness + fluctuations[3]));
                    
                    const stormCredits = Math.floor(Math.random() * 50) - 25;
                    credits += stormCredits;
                    
                    showEventEffect('neutral');
                    applyMatrixStormEffect();
                    
                    if (stormCredits > 0) {
                        setTimeout(() => {
                            showMessage(`Шторм принес ${stormCredits} кредитов!`);
                        }, 500);
                    }
                }
            },
            {
                name: "НЕЙРО-ПАУТИНА",
                type: "negative",
                message: "Нейронная паутина опутывает сознание питомца!",
                effect: function() {
                    const slowFactor = 0.5;
                    const originalDegrade = degradeStats;
                    
                    degradeStats = function() {
                        health -= 1;
                        energy -= 1.5;
                        mood -= 1;
                        cleanliness -= 0.5;
                        
                        if (upgrades.nanobots) cleanliness += 0.5;
                        if (upgrades.emotion) mood += 0.5;
                        if (upgrades.feeder) health += 0.5;
                        
                        health = Math.max(0, Math.min(maxHealth, health));
                        energy = Math.max(0, Math.min(maxEnergy, energy));
                        mood = Math.max(0, Math.min(maxMood, mood));
                        cleanliness = Math.max(0, Math.min(maxCleanliness, cleanliness));
                        
                        credits += 0.5;
                        updateUI();
                    };
                    
                    window.tempIncreasedCosts = true;
                    
                    showEventEffect('negative');
                    applyNeuralWebEffect();
                    showMessage("Все действия теперь стоят в 2 раза дороже!");
                    
                    setTimeout(() => {
                        degradeStats = originalDegrade;
                        window.tempIncreasedCosts = false;
                        showMessage("Нейронная паутина рассеялась.");
                    }, 45000);
                }
            },
            {
                name: "СИНГУЛЯРНОСТЬ",
                type: "special",
                message: "Приближение к точке технологической сингулярности!",
                effect: function() {
                    const singularityType = Math.random();
                    
                    if (singularityType > 0.3) {
                        health = Math.min(maxHealth, Math.floor(health * 1.5));
                        energy = Math.min(maxEnergy, Math.floor(energy * 1.5));
                        mood = Math.min(maxMood, Math.floor(mood * 1.5));
                        cleanliness = Math.min(maxCleanliness, Math.floor(cleanliness * 1.5));
                        credits = Math.floor(credits * 1.3);
                        showMessage("Сингулярность: экспоненциальный рост всех параметров!");
                    } else {
                        health = Math.max(10, Math.floor(health * 0.5));
                        energy = Math.max(10, Math.floor(energy * 0.5));
                        mood = Math.max(10, Math.floor(mood * 0.5));
                        cleanliness = Math.max(10, Math.floor(cleanliness * 0.5));
                        credits = Math.floor(credits * 0.7);
                        showMessage("Сингулярность: катастрофический сбой систем!");
                    }
                    
                    showEventEffect('special');
                    applySingularityEffect();
                }
            },
            {
                name: "КИБЕР-МЕДИТАЦИЯ",
                type: "positive",
                message: "Питомец входит в состояние кибер-медитации.",
                effect: function() {
                    const targetValue = 75;
                    
                    health = moveTowards(health, targetValue, 25);
                    energy = moveTowards(energy, targetValue, 25);
                    mood = moveTowards(mood, targetValue, 25);
                    cleanliness = moveTowards(cleanliness, targetValue, 25);
                    
                    credits += 20;
                    
                    const originalInterval = window.degradeInterval;
                    if (originalInterval) {
                        clearInterval(originalInterval);
                        
                        setTimeout(() => {
                            window.degradeInterval = setInterval(degradeStats, 10000);
                            showMessage("Кибер-медитация завершена.");
                        }, 20000);
                    }
                    
                    showEventEffect('positive');
                    applyCyberMeditationEffect();
                    showMessage("Деградация параметров приостановлена на 20 секунд.");
                    
                    function moveTowards(current, target, maxChange) {
                        const difference = target - current;
                        if (Math.abs(difference) <= maxChange) {
                            return target;
                        }
                        return current + (difference > 0 ? maxChange : -maxChange);
                    }
                }
            },
            {
                name: "ДАННЫЕ-ПАРАЗИТЫ",
                type: "negative",
                message: "Паразитические данные заражают систему!",
                effect: function() {
                    const params = [
                        {name: "health", value: health},
                        {name: "energy", value: energy},
                        {name: "mood", value: mood},
                        {name: "cleanliness", value: cleanliness}
                    ];
                    
                    params.sort((a, b) => b.value - a.value);
                    const highestParam = params[0];
                    
                    let damage = Math.floor(highestParam.value * 0.4);
                    
                    switch(highestParam.name) {
                        case "health": health = Math.max(10, health - damage); break;
                        case "energy": energy = Math.max(10, energy - damage); break;
                        case "mood": mood = Math.max(10, mood - damage); break;
                        case "cleanliness": cleanliness = Math.max(10, cleanliness - damage); break;
                    }
                    
                    showEventEffect('negative');
                    applyDataParasitesEffect();
                    showMessage(`Паразиты атакуют ${getParamName(highestParam.name)}!`);
                    
                    setTimeout(() => {
                        if (Math.random() > 0.5) {
                            const secondHighest = params[1];
                            let secondDamage = Math.floor(secondHighest.value * 0.3);
                            
                            switch(secondHighest.name) {
                                case "health": health = Math.max(10, health - secondDamage); break;
                                case "energy": energy = Math.max(10, energy - secondDamage); break;
                                case "mood": mood = Math.max(10, mood - secondDamage); break;
                                case "cleanliness": cleanliness = Math.max(10, cleanliness - secondDamage); break;
                            }
                            
                            showMessage(`Паразиты размножились! Атакован ${getParamName(secondHighest.name)}.`);
                            updateUI();
                        }
                    }, 10000);
                }
            },
            {
                name: "ИИ-СИМБИОЗ",
                type: "positive",
                message: "Установлена симбиотическая связь с внешним ИИ!",
                effect: function() {
                    let bonus = 15;
                    
                    const upgradeCount = Object.values(upgrades).filter(v => v).length;
                    bonus += upgradeCount * 5;
                    
                    health = Math.min(maxHealth, health + bonus);
                    energy = Math.min(maxEnergy, energy + bonus);
                    mood = Math.min(maxMood, mood + bonus);
                    cleanliness = Math.min(maxCleanliness, cleanliness + bonus);
                    
                    if (upgradeCount < 4 && Math.random() > 0.7) {
                        const availableUpgrades = Object.keys(upgrades).filter(key => !upgrades[key]);
                        if (availableUpgrades.length > 0) {
                            const randomUpgrade = availableUpgrades[Math.floor(Math.random() * availableUpgrades.length)];
                            upgrades[randomUpgrade] = true;
                            showMessage(`ИИ-симбиоз активировал: ${getUpgradeName(randomUpgrade)}!`);
                        }
                    }
                    
                    showEventEffect('positive');
                    applySymbiosisEffect();
                }
            },
            {
                name: "РЕАЛЬНОСТЬ-ГЛЮК",
                type: "neutral",
                message: "Границы реальности размываются...",
                effect: function() {
                    const realityGlitch = Math.floor(Math.random() * 4);
                    
                    switch(realityGlitch) {
                        case 0:
                            showMessage("Глюк: кнопки действий поменялись местами!");
                            temporarilyShuffleActions();
                            break;
                        case 1:
                            health = 100 - health;
                            energy = 100 - energy;
                            mood = 100 - mood;
                            cleanliness = 100 - cleanliness;
                            showMessage("Глюк: мир перевернулся!");
                            break;
                        case 2:
                            window.timeLoopState = {
                                health, energy, mood, cleanliness, credits
                            };
                            showMessage("Глюк: попали во временную петлю!");
                            
                            setTimeout(() => {
                                if (window.timeLoopState) {
                                    health = window.timeLoopState.health;
                                    energy = window.timeLoopState.energy;
                                    mood = window.timeLoopState.mood;
                                    cleanliness = window.timeLoopState.cleanliness;
                                    credits = window.timeLoopState.credits;
                                    showMessage("Временная петля замкнулась!");
                                    updateUI();
                                }
                            }, 15000);
                            break;
                        case 3:
                            health = Math.floor(Math.random() * 100);
                            energy = Math.floor(Math.random() * 100);
                            mood = Math.floor(Math.random() * 100);
                            cleanliness = Math.floor(Math.random() * 100);
                            showMessage("Глюк: квантовая неопределенность!");
                            break;
                    }
                    
                    showEventEffect('neutral');
                    applyRealityGlitchEffect();
                }
            },
            {
                name: "КИБЕР-ЭВОЛЮЦИЯ",
                type: "positive",
                message: "Питомец эволюционирует в новую форму!",
                effect: function() {
                    maxHealth = Math.min(150, maxHealth + 5);
                    maxEnergy = Math.min(150, maxEnergy + 5);
                    maxMood = Math.min(150, maxMood + 5);
                    maxCleanliness = Math.min(150, maxCleanliness + 5);
                    
                    health = Math.min(maxHealth, health + 20);
                    energy = Math.min(maxEnergy, energy + 20);
                    mood = Math.min(maxMood, mood + 20);
                    cleanliness = Math.min(maxCleanliness, cleanliness + 20);
                    
                    const pet = document.getElementById('pet');
                    pet.classList.add('evolved');
                    
                    setTimeout(() => {
                        pet.classList.remove('evolved');
                    }, 5000);
                    
                    showEventEffect('positive');
                    applyEvolutionEffect();
                    showMessage("Максимальные значения всех параметров увеличены!");
                }
            },
            {
                name: "ЦИФРОВОЙ АПОКАЛИПСИС",
                type: "negative",
                message: "Начало цифрового апокалипсиса!",
                effect: function() {
                    const apocalypseLevel = Math.random();
                    
                    if (apocalypseLevel > 0.8) {
                        health = 10;
                        energy = 10;
                        mood = 10;
                        cleanliness = 10;
                        credits = Math.max(0, credits - 50);
                        showMessage("КРИТИЧЕСКИЙ СБОЙ: системы на грани коллапса!");
                    } else if (apocalypseLevel > 0.4) {
                        health = Math.max(0, health - 40);
                        energy = Math.max(0, energy - 40);
                        mood = Math.max(0, mood - 40);
                        cleanliness = Math.max(0, cleanliness - 40);
                        showMessage("Серьезные повреждения систем!");
                    } else {
                        health = Math.min(maxHealth, health + 30);
                        energy = Math.min(maxEnergy, energy + 30);
                        mood = Math.min(maxMood, mood + 30);
                        cleanliness = Math.min(maxCleanliness, cleanliness + 30);
                        credits += 40;
                        showMessage("ЧУДО: система стабилизировалась в последний момент!");
                    }
                    
                    showEventEffect('negative');
                    applyApocalypseEffect();
                }
            }
        ];
        
        const eventIndex = Math.floor(Math.random() * events.length);
        const event = events[eventIndex];
        
        event.effect();
        showMessage(`[${event.name}] ${event.message}`);
        updateUI();
    }
}
// ДОБАВЬТЕ ЭТО ПОСЛЕ ФУНКЦИИ randomEvent()

function getUpgradeName(upgradeKey) {
    const names = {
        "cpu": "Улучшенный процессор",
        "nanobots": "Наноботы чистоты",
        "emotion": "Эмоциональный чип",
        "feeder": "Автокормушка"
    };
    return names[upgradeKey] || upgradeKey;
}

function getParamName(param) {
    const names = {
        "health": "Здоровье",
        "energy": "Энергия",
        "mood": "Настроение",
        "cleanliness": "Чистота"
    };
    return names[param];
}

function temporarilyShuffleActions() {
    const actionButtons = document.querySelectorAll('.action-btn');
    const actions = Array.from(actionButtons).map(btn => btn.cloneNode(true));
    
    for (let i = actions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [actions[i], actions[j]] = [actions[j], actions[i]];
    }
    
    actionButtons.forEach((btn, index) => {
        const parent = btn.parentNode;
        parent.replaceChild(actions[index], btn);
        
        const actionText = actions[index].textContent;
        if (actionText.includes('КОРМ')) {
            actions[index].onclick = () => performAction('feed');
        } else if (actionText.includes('ИГРАТЬ')) {
            actions[index].onclick = () => performAction('play');
        } else if (actionText.includes('ОЧИСТКА')) {
            actions[index].onclick = () => performAction('clean');
        } else if (actionText.includes('ПОДЗАРЯДКА')) {
            actions[index].onclick = () => performAction('charge');
        } else if (actionText.includes('АПГРЕЙД')) {
            actions[index].onclick = () => performAction('upgrade');
        } else if (actionText.includes('ОТДЫХ')) {
            actions[index].onclick = () => performAction('rest');
        }
    });
    
    setTimeout(() => {
        location.reload();
    }, 30000);
}

function saveGame() {
    const gameData = {
        credits: credits,
        health: health,
        energy: energy,
        mood: mood,
        cleanliness: cleanliness,
        maxHealth: maxHealth,
        maxEnergy: maxEnergy,
        maxMood: maxMood,
        maxCleanliness: maxCleanliness,
        upgrades: upgrades
    };
    
    try {
        localStorage.setItem('cyberPetSave', JSON.stringify(gameData));
        showMessage("Игра сохранена успешно! Данные записаны в локальное хранилище.");
        console.log("Игра сохранена:", gameData);
    } catch (error) {
        showMessage("Ошибка сохранения: " + error.message);
        console.error("Ошибка сохранения:", error);
    }
}

function loadGame() {
    try {
        const savedData = localStorage.getItem('cyberPetSave');
        
        if (!savedData) {
            showMessage("Сохраненная игра не найдена. Создайте новую игру!");
            return;
        }
        
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
        upgrades = gameData.upgrades || {
            cpu: false,
            nanobots: false,
            emotion: false,
            feeder: false
        };
        
        
        updateUI();
        showMessage("Игра загружена успешно! Состояние восстановлено.");
        console.log("Игра загружена:", gameData);
    } catch (error) {
        showMessage("Ошибка загрузки: поврежденные данные сохранения.");
        console.error("Ошибка загрузки:", error);
    }
}

function resetGame() {
    if (confirm("Вы уверены, что хотите сбросить игру? Все сохранения будут удалены.")) {
        try {
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
            upgrades = {
                cpu: false,
                nanobots: false,
                emotion: false,
                feeder: false
            };
            updateUI();
            showMessage("Игра сброшена. Начинаем заново!");
        } catch (error) {
            showMessage("Ошибка сброса: " + error.message);
        }
    }
}


window.onload = function() {
    try {
        const savedData = localStorage.getItem('cyberPetSave');
        if (savedData) {
            if (confirm("Обнаружено сохранение игры. Загрузить его?")) {
                loadGame();
            } else {
                initGame();
            }
        } else {
            initGame();
        }
    } catch (error) {
        initGame();
    }
};
        
window.onload = initGame;

