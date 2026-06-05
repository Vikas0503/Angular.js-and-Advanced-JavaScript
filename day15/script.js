// ============================================
// ADVANCED DAY 3 - THE this KEYWORD
// Topics: 4 Binding Rules, call/apply/bind, arrow functions, lost this fixes
// ============================================

// ----- Helper Functions -----
function goBack() {
    window.location.href = '../index.html';
}

// ============================================
// CLASS WORK CONTENT
// ============================================

function buildClassWorkHTML() {
    return '<div class="task">' +
        '<div class="task-title">🎯 What is `this`?</div>' +
        '<pre><code>function whoAmI() { console.log(this); }\n\n' +
        'whoAmI(); // strict mode: undefined; non-strict: window/global\n\n' +
        'const user = { name: "Priya", whoAmI };\n' +
        'user.whoAmI(); // logs the user object — called as a method\n\n' +
        'const other = { name: "Aarav", whoAmI };\n' +
        'other.whoAmI(); // logs other — same function, different this</code></pre>' +
        '<span class="badge">✓ this is determined AT CALL TIME, not at definition time</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📋 The 4 Binding Rules</div>' +
        '<pre><code>// 1. Default — plain function call\n' +
        'function speak() { console.log(this); }\n' +
        'speak(); // undefined (strict mode)\n\n' +
        '// 2. Implicit — method call\n' +
        'const car = { brand: "Tata", show() { console.log(this.brand); } };\n' +
        'car.show(); // "Tata" ← this = car\n\n' +
        '// 3. Explicit — call/apply/bind\n' +
        'function intro(city) { console.log(`${this.name} from ${city}`); }\n' +
        'const u = { name: "Priya" };\n' +
        'intro.call(u, "Jaipur"); // "Priya from Jaipur"\n\n' +
        '// 4. new — constructor binding\n' +
        'function User(name) { this.name = name; }\n' +
        'const p = new User("Anaya");\n' +
        'console.log(p.name); // "Anaya"</code></pre>' +
        '<span class="badge">✓ Priority: new > explicit > implicit > default</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔧 call / apply / bind</div>' +
        '<pre><code>function greet(city, lang) {\n' +
        '  console.log(`${this.name} from ${city} speaks ${lang}`);\n' +
        '}\n\n' +
        'const u = { name: "Priya" };\n\n' +
        '// call — invoke now, args listed\n' +
        'greet.call(u, "Jaipur", "Hindi");\n\n' +
        '// apply — invoke now, args as array\n' +
        'greet.apply(u, ["Jaipur", "Hindi"]);\n\n' +
        '// bind — returns a new function for later\n' +
        'const greetPriya = greet.bind(u, "Jaipur");\n' +
        'greetPriya("English"); // "Priya from Jaipur speaks English"</code></pre>' +
        '<span class="badge">✓ .call() and .apply() invoke immediately; .bind() returns a new function</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🏹 Arrow Functions — Lexical this</div>' +
        '<pre><code>// Arrow has NO own this — inherits from enclosing scope\n' +
        'const team = {\n' +
        '  members: ["Priya", "Aarav", "Riya"],\n' +
        '  greetAll() {\n' +
        '    // Arrow inherits this from greetAll → which is team\n' +
        '    this.members.forEach((m) => {\n' +
        '      console.log(`Hi ${m} from team ${this.members.length}`);\n' +
        '    });\n' +
        '  }\n' +
        '};\n' +
        'team.greetAll(); // Works!\n\n' +
        '// ⚠️ Don\'t use arrows as object methods — this won\'t be the object</code></pre>' +
        '<span class="badge">✓ Arrows are great for callbacks; bad for object methods</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🐛 The "Lost this" Bug & Fixes</div>' +
        '<pre><code>class Counter {\n' +
        '  constructor() { this.count = 0; }\n' +
        '  inc() { this.count++; console.log(this.count); }\n' +
        '}\n\n' +
        'const c = new Counter();\n\n' +
        '// BUG — passed as plain function, this is lost\n' +
        'setTimeout(c.inc, 100); // TypeError\n\n' +
        '// FIX 1 — bind\n' +
        'setTimeout(c.inc.bind(c), 100);\n\n' +
        '// FIX 2 — arrow wrapper\n' +
        'setTimeout(() => c.inc(), 100);\n\n' +
        '// FIX 3 — class field arrow\n' +
        'class CounterArrow { count = 0; inc = () => this.count++; }</code></pre>' +
        '<span class="badge">✓ Three reliable ways to fix lost this in callbacks</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🌳 The Decision Tree</div>' +
        '<div class="decision-tree">' +
        '<div class="tree-node">1. Is it an arrow function? → YES → outer scope\'s this</div>' +
        '<div class="tree-node">2. Called with new? → YES → the new object</div>' +
        '<div class="tree-node">3. Called with .call/.apply/.bind? → YES → the explicit value</div>' +
        '<div class="tree-node">4. Called as obj.fn()? → YES → obj</div>' +
        '<div class="tree-node">5. Plain fn()? → undefined (strict) / global</div>' +
        '</div>' +
        '<span class="badge">✓ Use this decision tree to determine this in any situation</span>' +
        '</div>';
}

// ============================================
// TASK 1: Predict the this
// ============================================

function predictData() {
    var results = [];
    
    results.push("=== Task 1: Predict the this ===");
    results.push("");
    results.push("const user = { name: 'Priya', greet() { console.log(this.name); } };");
    results.push("");
    results.push("user.greet(); → 'Priya' (implicit binding)");
    results.push("");
    results.push("const g = user.greet;");
    results.push("g(); → undefined or TypeError (default binding)");
    results.push("");
    results.push("EXPLANATION:");
    results.push("  • user.greet() is called as a method — this = user");
    results.push("  • g() is a plain function call — this = undefined (strict mode)");
    results.push("  • The 'lost this' happens because the function is separated from its object");
    results.push("  • The method reference alone doesn't carry the object context");
    
    return results;
}

function predictReferenceText() {
    return predictData().join('\n');
}

function logPredictOnly() {
    console.clear();
    var user = { name: 'Priya', greet: function () { console.log(this.name); } };
    user.greet();
}

// ============================================
// TASK 2: Timer Class and Fixes
// ============================================

class TimerBind {
    constructor() {
        this.sec = 0;
    }
    tick() {
        this.sec++;
        return this.sec;
    }
}

class TimerArrowWrapper {
    constructor() {
        this.sec = 0;
    }
    tick() {
        this.sec++;
        return this.sec;
    }
}

class TimerClassField {
    count = 0;
    tick = () => {
        this.count++;
        return this.count;
    };
}

function timerData() {
    var results = [];
    
    results.push("=== Task 2: Fix the Timer Bug Three Ways ===");
    results.push("");
    results.push("THE BUG:");
    results.push("  class Timer {");
    results.push("    constructor() { this.sec = 0; }");
    results.push("    tick() { this.sec++; console.log(this.sec); }");
    results.push("  }");
    results.push("  const t = new Timer();");
    results.push("  setInterval(t.tick, 1000); // TypeError! this is lost");
    results.push("");
    results.push("FIX 1 — .bind():");
    results.push("  setInterval(t.tick.bind(t), 1000);");
    results.push("");
    results.push("FIX 2 — Arrow Wrapper:");
    results.push("  setInterval(() => t.tick(), 1000);");
    results.push("");
    results.push("FIX 3 — Class Field Arrow (Modern):");
    results.push("  class Timer {");
    results.push("    count = 0;");
    results.push("    tick = () => { this.count++; };");
    results.push("  }");
    results.push("");
    results.push("WHY IT WORKS:");
    results.push("  • .bind() creates a new function with this permanently fixed");
    results.push("  • Arrow wrapper closes over 't' lexically");
    results.push("  • Class field arrow creates a function with lexical this at instance creation");
    
    return results;
}

function timerReferenceText() {
    return timerData().join('\n');
}

function logTimerOnly() {
    console.clear();
    var t = new TimerBind();
    console.log(t.tick());
    console.log(t.tick());
    console.log(t.tick());
}

// ============================================
// TASK 3: call / apply / bind
// ============================================

function describe(role, city) {
    return this.name + " is a " + role + " from " + city;
}

function callApplyData() {
    var results = [];
    
    results.push("=== Task 3: call / apply / bind ===");
    results.push("");
    results.push("function describe(role, city) {");
    results.push("  console.log(`${this.name} is a ${role} from ${city}`);");
    results.push("}");
    results.push("");
    results.push(".call() — invoke now, args listed:");
    results.push("  describe.call(u, 'developer', 'Jaipur');");
    results.push("");
    results.push(".apply() — invoke now, args as array:");
    results.push("  describe.apply(u, ['developer', 'Jaipur']);");
    results.push("");
    results.push(".bind() — returns new function, args pre-filled:");
    results.push("  const bound = describe.bind(u, 'developer');");
    results.push("  bound('Jaipur');");
    results.push("");
    results.push("DIFFERENCES:");
    results.push("  • .call() — comma-separated arguments");
    results.push("  • .apply() — array of arguments");
    results.push("  • .bind() — returns bound function (doesn't invoke)");
    
    return results;
}

function callApplyReferenceText() {
    return callApplyData().join('\n');
}

function logCallApplyOnly() {
    console.clear();
    var person = { name: 'Aarav' };
    function line(role, city) {
        console.log(this.name + ' is a ' + role + ' from ' + city);
    }
    line.call(person, 'developer', 'Bangalore');
    line.apply(person, ['designer', 'Mumbai']);
    var bound = line.bind(person, 'developer');
    bound('Chennai');
}

// ============================================
// BONUS: Arrow vs Regular Method
// ============================================

function arrowVsRegularData() {
    var results = [];
    
    results.push("=== Bonus: Arrow vs Regular Method ===");
    results.push("");
    results.push("const team = {");
    results.push("  members: ['Priya', 'Aarav', 'Riya'],");
    results.push("");
    results.push("  // Regular function callback — BREAKS!");
    results.push("  printRegular() {");
    results.push("    this.members.forEach(function(m) {");
    results.push("      console.log(this.members.length, m); // this = undefined");
    results.push("    });");
    results.push("  },");
    results.push("");
    results.push("  // Arrow callback — WORKS!");
    results.push("  printArrow() {");
    results.push("    this.members.forEach((m) => {");
    results.push("      console.log(this.members.length, m); // this = team");
    results.push("    });");
    results.push("  }");
    results.push("};");
    results.push("");
    results.push("WHY REGULAR BREAKS:");
    results.push("  • Regular functions have their OWN this");
    results.push("  • Inside forEach callback, this = undefined (strict mode)");
    results.push("");
    results.push("WHY ARROW WORKS:");
    results.push("  • Arrow functions have NO own this");
    results.push("  • They inherit this from the enclosing scope (printArrow)");
    
    return results;
}

function arrowVsRegularReferenceText() {
    return arrowVsRegularData().join('\n');
}

function logArrowOnly() {
    console.clear();
    var team = {
        members: ['Priya', 'Aarav', 'Riya'],
        printArrow: function () {
            this.members.forEach((m) => {
                console.log('Hi ' + m + ', from team ' + this.members.length);
            });
        }
    };
    team.printArrow();
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. this binding tests:");
    results.push("   user.greet() → 'Priya'");
    results.push("   const fn = user.greet; fn() → undefined");
    results.push("   user.greet.call({ name: 'X' }) → 'X'");
    results.push("");
    results.push("2. sum(...nums) with .apply():");
    results.push("   function sum(...nums) {");
    results.push("     return nums.reduce((a, b) => a + b, 0);");
    results.push("   }");
    results.push("   sum.apply(null, [1, 2, 3, 4, 5]); // 15");
    results.push("   // .apply shines because it accepts an array of arguments!");
    results.push("");
    results.push("3. Arrow function with .bind():");
    results.push("   const f = () => console.log(this);");
    results.push("   f.bind({ x: 1 })(); // logs outer this (window/undefined)");
    results.push("   // Arrow functions cannot have their this rebound — they ignore .bind()!");
    results.push("");
    results.push("   // .bind() on arrow only affects arguments, not this!");
    results.push("");
    results.push("📖 Recommended Reading:");
    results.push("• https://javascript.info/object-methods");
    results.push("• https://javascript.info/bind");
    
    return results;
}

function practiceReferenceText() {
    return practiceData().join('\n');
}

function logPracticeOnly() {
    console.clear();
    var user = { name: 'Priya', greet: function () { console.log(this.name); } };
    user.greet();
    var fn = user.greet;
    fn();
    user.greet.call({ name: 'X' });
    function sum() {
        return Array.prototype.reduce.call(arguments, function (a, b) { return a + b; }, 0);
    }
    console.log(sum.apply(null, [1, 2, 3, 4, 5]));
}

// ============================================
// CLASS WORK TOGGLE FUNCTION
// ============================================

function toggleClassWork(contentElement, iconElement) {
    var isExpanded = contentElement.classList.contains('show');
    
    if (isExpanded) {
        contentElement.classList.remove('show');
        iconElement.textContent = '▼';
    } else {
        contentElement.classList.add('show');
        iconElement.textContent = '▲';
    }
}

// ============================================
// CONSOLE LOGGERS MAPPING
// ============================================

var consoleLoggers = {
    predict: logPredictOnly,
    timer: logTimerOnly,
    callapply: logCallApplyOnly,
    arrow: logArrowOnly,
    practice: logPracticeOnly
};

// ============================================
// ACCORDION FUNCTIONALITY for Homework Tasks
// ============================================

function wireAccordions() {
    var cards = document.querySelectorAll('.stack-layout .expandable-card');
    
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var header = card.querySelector('.card-header');
        var content = card.querySelector('.card-content');
        var icon = card.querySelector('.toggle-icon');
        
        if (!header || !content || !icon) continue;
        
        header.addEventListener('click', function(e) {
            e.stopPropagation();
            var currentCard = this.parentElement;
            var currentContent = currentCard.querySelector('.card-content');
            var currentIcon = currentCard.querySelector('.toggle-icon');
            var wasOpen = currentContent.classList.contains('expanded');
            var open = currentContent.classList.toggle('expanded');
            currentIcon.textContent = open ? '▲' : '▼';
            
            if (open && !wasOpen) {
                var key = currentCard.getAttribute('data-log-task');
                var fn = key && consoleLoggers[key];
                if (fn) fn();
            }
        });
        
        header.style.cursor = 'pointer';
    }
}

// ============================================
// LIVE DEMO FUNCTIONALITY
// ============================================

function setupLiveDemos() {
    // Task 1 Demo: Predict this
    var predictBtn = document.getElementById('run-predict-demo');
    var predictResult = document.getElementById('predict-result');
    
    if (predictBtn && predictResult) {
        predictBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Predict this Demo ===");
            output.push("");
            
            var user = {
                name: "Priya",
                greet: function() {
                    output.push("  Inside greet(): this.name = " + this.name);
                    return this.name;
                }
            };
            
            output.push("1. user.greet():");
            user.greet();
            
            output.push("");
            output.push("2. const g = user.greet; g():");
            var g = user.greet;
            g();
            
            output.push("");
            output.push("✅ EXPLANATION:");
            output.push("  • Method call (user.greet) → this = user");
            output.push("  • Plain function call (g()) → this = undefined");
            output.push("  • The function reference lost its object context");
            
            predictResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: Timer fixes
    var bindBtn = document.getElementById('run-bind-fix');
    var arrowFixBtn = document.getElementById('run-arrow-fix');
    var classFieldBtn = document.getElementById('run-classfield-fix');
    var timerResult = document.getElementById('timer-result');
    var activeInterval = null;
    
    function stopInterval() {
        if (activeInterval) {
            clearInterval(activeInterval);
            activeInterval = null;
        }
    }
    
    if (bindBtn && timerResult) {
        bindBtn.addEventListener('click', function() {
            stopInterval();
            var output = [];
            output.push("=== Fix 1: .bind() ===");
            output.push("");
            
            var t = new TimerBind();
            output.push("0");
            
            var counter = 0;
            activeInterval = setInterval(function() {
                var val = t.tick();
                output.push(val.toString());
                timerResult.textContent = output.join('\n');
                if (counter >= 5) {
                    stopInterval();
                    output.push("✅ .bind() fixed the lost this!");
                    timerResult.textContent = output.join('\n');
                }
                counter++;
            }, 500);
            output.push("Running... (will show 1-5)");
            timerResult.textContent = output.join('\n');
        });
    }
    
    if (arrowFixBtn && timerResult) {
        arrowFixBtn.addEventListener('click', function() {
            stopInterval();
            var output = [];
            output.push("=== Fix 2: Arrow Wrapper ===");
            output.push("");
            
            var t = new TimerArrowWrapper();
            output.push("0");
            
            var counter = 0;
            activeInterval = setInterval(function() {
                t.tick();
                output.push(t.sec.toString());
                timerResult.textContent = output.join('\n');
                if (counter >= 5) {
                    stopInterval();
                    output.push("✅ Arrow wrapper fixed the lost this!");
                    timerResult.textContent = output.join('\n');
                }
                counter++;
            }, 500);
            output.push("Running... (will show 1-5)");
            timerResult.textContent = output.join('\n');
        });
    }
    
    if (classFieldBtn && timerResult) {
        classFieldBtn.addEventListener('click', function() {
            stopInterval();
            var output = [];
            output.push("=== Fix 3: Class Field Arrow ===");
            output.push("");
            
            var t = new TimerClassField();
            output.push("0");
            
            var counter = 0;
            activeInterval = setInterval(function() {
                var val = t.tick();
                output.push(val.toString());
                timerResult.textContent = output.join('\n');
                if (counter >= 5) {
                    stopInterval();
                    output.push("✅ Class field arrow fixed the lost this!");
                    timerResult.textContent = output.join('\n');
                }
                counter++;
            }, 500);
            output.push("Running... (will show 1-5)");
            timerResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: call/apply/bind
    var callBtn = document.getElementById('run-call-demo');
    var applyBtn = document.getElementById('run-apply-demo');
    var bindDemoBtn = document.getElementById('run-bind-demo');
    var callapplyResult = document.getElementById('callapply-result');
    
    if (callBtn && callapplyResult) {
        callBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== .call() Demo ===");
            output.push("");
            
            var u = { name: "Aarav" };
            var result = describe.call(u, "developer", "Jaipur");
            output.push("describe.call(u, 'developer', 'Jaipur') → " + result);
            output.push("");
            output.push("✅ .call() invokes immediately with comma-separated arguments");
            
            callapplyResult.textContent = output.join('\n');
        });
    }
    
    if (applyBtn && callapplyResult) {
        applyBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== .apply() Demo ===");
            output.push("");
            
            var u = { name: "Aarav" };
            var result = describe.apply(u, ["developer", "Jaipur"]);
            output.push("describe.apply(u, ['developer', 'Jaipur']) → " + result);
            output.push("");
            output.push("✅ .apply() invokes immediately with array of arguments");
            
            callapplyResult.textContent = output.join('\n');
        });
    }
    
    if (bindDemoBtn && callapplyResult) {
        bindDemoBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== .bind() Demo ===");
            output.push("");
            
            var u = { name: "Aarav" };
            var boundDescribe = describe.bind(u, "developer");
            var result = boundDescribe("Jaipur");
            output.push("const bound = describe.bind(u, 'developer');");
            output.push("bound('Jaipur') → " + result);
            output.push("");
            output.push("✅ .bind() returns a NEW function, does not invoke immediately");
            output.push("✅ Pre-filled arguments are remembered (partial application)");
            
            callapplyResult.textContent = output.join('\n');
        });
    }
    
    // Bonus Demo: Arrow vs Regular
    var regularMethodBtn = document.getElementById('run-regular-method');
    var arrowMethodBtn = document.getElementById('run-arrow-method');
    var arrowResult = document.getElementById('arrow-result');
    
    if (regularMethodBtn && arrowResult) {
        regularMethodBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Regular Method (BREAKS!) ===");
            output.push("");
            output.push("team = { members: ['Priya', 'Aarav', 'Riya'],");
            output.push("  printRegular() {");
            output.push("    this.members.forEach(function(m) {");
            output.push("      console.log(this.members.length, m); // this = undefined");
            output.push("    });");
            output.push("  }");
            output.push("}");
            output.push("");
            output.push("❌ Error: Cannot read property 'length' of undefined");
            output.push("");
            output.push("WHY: Regular functions have their OWN this.");
            output.push("Inside forEach callback, this = undefined (strict mode).");
            
            arrowResult.textContent = output.join('\n');
        });
    }
    
    if (arrowMethodBtn && arrowResult) {
        arrowMethodBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Arrow Method (WORKS!) ===");
            output.push("");
            output.push("team = { members: ['Priya', 'Aarav', 'Riya'],");
            output.push("  printArrow() {");
            output.push("    this.members.forEach((m) => {");
            output.push("      console.log(this.members.length, m); // this = team");
            output.push("    });");
            output.push("  }");
            output.push("}");
            output.push("");
            output.push("✅ Output: 3 Priya, 3 Aarav, 3 Riya");
            output.push("");
            output.push("WHY: Arrow functions have NO own this.");
            output.push("They inherit this from the enclosing scope (printArrow).");
            
            arrowResult.textContent = output.join('\n');
        });
    }
}

// ============================================
// INITIALIZE PAGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Set Class Work content
    var classWorkTasks = document.getElementById('classWorkTasks');
    if (classWorkTasks) {
        classWorkTasks.innerHTML = buildClassWorkHTML();
    }
    
    // Set reference text for each task
    var outPredict = document.getElementById('outPredict');
    var outTimer = document.getElementById('outTimer');
    var outCallApply = document.getElementById('outCallApply');
    var outArrow = document.getElementById('outArrow');
    var outPractice = document.getElementById('outPractice');
    
    if (outPredict) outPredict.textContent = predictReferenceText();
    if (outTimer) outTimer.textContent = timerReferenceText();
    if (outCallApply) outCallApply.textContent = callApplyReferenceText();
    if (outArrow) outArrow.textContent = arrowVsRegularReferenceText();
    if (outPractice) outPractice.textContent = practiceReferenceText();
    
    // Set up Class Work expand/collapse
    var classWorkHeader = document.getElementById('classWorkHeader');
    var classWorkContent = document.getElementById('classWorkContent');
    var classWorkIcon = document.getElementById('classWorkIcon');
    
    if (classWorkHeader && classWorkContent && classWorkIcon) {
        classWorkHeader.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleClassWork(classWorkContent, classWorkIcon);
        });
        classWorkHeader.style.cursor = 'pointer';
    }
    
    if (classWorkContent) classWorkContent.classList.remove('show');
    if (classWorkIcon) classWorkIcon.textContent = '▼';
    
    // Set up homework task accordions
    wireAccordions();
    
    // Set up live demos
    setupLiveDemos();
});