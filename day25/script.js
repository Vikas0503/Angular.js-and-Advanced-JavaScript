// ============================================
// ADVANCED DAY 13 - FUNCTIONAL PROGRAMMING
// Topics: Pure functions, immutability, higher-order functions, compose/pipe, currying
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
        '<div class="task-title">🧼 Pure Functions</div>' +
        '<pre><code>// PURE — same input → same output, no side effects\n' +
        'function add(a, b) { return a + b; }\n' +
        'function double(x) { return x * 2; }\n\n' +
        '// IMPURE — depends on external state\n' +
        'let multiplier = 2;\n' +
        'function impureDouble(x) { return x * multiplier; }\n\n' +
        '// IMPURE — mutates argument\n' +
        'function addItem(arr, item) {\n' +
        '  arr.push(item);\n' +
        '  return arr;\n' +
        '}\n\n' +
        '// PURE version\n' +
        'function addItemPure(arr, item) {\n' +
        '  return [...arr, item];\n' +
        '}</code></pre>' +
        '<span class="badge">✓ Pure functions = predictable, testable, no side effects</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📦 Higher-Order Functions</div>' +
        '<pre><code>// HOF that returns a function\n' +
        'function multiplier(factor) {\n' +
        '  return (x) => x * factor;\n' +
        '}\n' +
        'const double = multiplier(2);\n' +
        'const triple = multiplier(3);\n\n' +
        '// HOF that takes AND returns a function\n' +
        'function once(fn) {\n' +
        '  let called = false;\n' +
        '  let result;\n' +
        '  return (...args) => {\n' +
        '    if (called) return result;\n' +
        '    called = true;\n' +
        '    return (result = fn(...args));\n' +
        '  };\n' +
        '}</code></pre>' +
        '<span class="badge">✓ Higher-order functions take or return other functions</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔗 compose and pipe</div>' +
        '<pre><code>// One-liner implementations\n' +
        'const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);\n' +
        'const pipe    = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);\n\n' +
        '// Example pipeline\n' +
        'const trim = (s) => s.trim();\n' +
        'const lower = (s) => s.toLowerCase();\n' +
        'const split = (s) => s.split(/\\s+/);\n' +
        'const wordCount = (arr) => arr.length;\n\n' +
        'const countWords = pipe(trim, lower, split, wordCount);\n' +
        'console.log(countWords("  Hello World  ")); // 2</code></pre>' +
        '<span class="badge">✓ pipe = left-to-right; compose = right-to-left</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🍛 Currying</div>' +
        '<pre><code>// Manual curry\n' +
        'const addCurried = (a) => (b) => (c) => a + b + c;\n' +
        'addCurried(1)(2)(3); // 6\n\n' +
        '// Practical: pre-fill arguments\n' +
        'const tax = (rate) => (price) => price * (1 + rate / 100);\n' +
        'const withGST = tax(18);\n' +
        'console.log(withGST(1000)); // 1180</code></pre>' +
        '<span class="badge">✓ Currying transforms fn(a,b,c) into fn(a)(b)(c)</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🎯 Partial Application</div>' +
        '<pre><code>function greet(greeting, time, name) {\n' +
        '  return `${greeting} ${time}, ${name}!`;\n' +
        '}\n\n' +
        '// Using .bind to partially apply\n' +
        'const sayGoodMorning = greet.bind(null, "Good", "morning");\n' +
        'sayGoodMorning("Priya"); // "Good morning, Priya!"\n\n' +
        '// Hand-rolled partial\n' +
        'const partial = (fn, ...preset) => (...rest) => fn(...preset, ...rest);\n' +
        'const sayHelloEvening = partial(greet, "Hello", "evening");</code></pre>' +
        '<span class="badge">✓ Partial application fixes some arguments, leaving others for later</span>' +
        '</div>';
}

// ============================================
// TASK 1: Pure or Impure
// ============================================

function pureData() {
    var results = [];
    
    results.push("=== Task 1: Pure or Impure ===");
    results.push("");
    results.push("1. (a, b) => a + b");
    results.push("   ✅ PURE — same inputs always produce same output, no side effects");
    results.push("");
    results.push("2. () => Date.now()");
    results.push("   ❌ IMPURE — depends on external system time, output changes between calls");
    results.push("");
    results.push("3. (arr) => arr.sort()");
    results.push("   ❌ IMPURE — mutates the original array (side effect)");
    results.push("");
    results.push("4. (arr) => [...arr].sort()");
    results.push("   ✅ PURE — creates a copy first, original unchanged");
    results.push("");
    results.push("5. (x) => { console.log(x); return x; }");
    results.push("   ❌ IMPURE — has side effect (console.log)");
    
    return results;
}

function pureReferenceText() {
    return pureData().join('\n');
}

function logPureOnly() {
    console.clear();
    console.log("--- Task 1: Pure or Impure ---");
    console.log(pureReferenceText());
}

// ============================================
// TASK 2: pipe from Scratch
// ============================================

function pipe() {
    var fns = arguments;
    return function(x) {
        var result = x;
        for (var i = 0; i < fns.length; i++) {
            result = fns[i](result);
        }
        return result;
    };
}

function addOne(x) { return x + 1; }
function square(x) { return x * x; }
function negate(x) { return -x; }

function pipeData() {
    var results = [];
    
    results.push("=== Task 2: pipe from Scratch ===");
    results.push("");
    results.push("function pipe(...fns) {");
    results.push("  return (x) => fns.reduce((acc, fn) => fn(acc), x);");
    results.push("}");
    results.push("");
    results.push("const addOne = x => x + 1;");
    results.push("const square = x => x * x;");
    results.push("const negate = x => -x;");
    results.push("");
    results.push("pipe(addOne, square, negate)(5)");
    results.push("  = negate(square(addOne(5)))");
    results.push("  = negate(square(6))");
    results.push("  = negate(36)");
    results.push("  = -36");
    
    return results;
}

function pipeReferenceText() {
    return pipeData().join('\n');
}

function logPipeOnly() {
    console.clear();
    console.log("--- Task 2: pipe from Scratch ---");
    console.log(pipeReferenceText());
}

// ============================================
// TASK 3: Curry
// ============================================

function volume(l) {
    return function(w) {
        return function(h) {
            return l * w * h;
        };
    };
}

function curryData() {
    var results = [];
    
    results.push("=== Task 3: Curry ===");
    results.push("");
    results.push("function volume(l) {");
    results.push("  return function(w) {");
    results.push("    return function(h) {");
    results.push("      return l * w * h;");
    results.push("    };");
    results.push("  };");
    results.push("}");
    results.push("");
    results.push("// Arrow shorthand:");
    results.push("const volumeArrow = (l) => (w) => (h) => l * w * h;");
    results.push("");
    results.push("// Usage:");
    results.push("const length5 = volume(5);   // pre-apply l=5");
    results.push("const length5Width3 = length5(3); // pre-apply w=3");
    results.push("const result = length5Width3(2); // h=2 → 30");
    
    return results;
}

function curryReferenceText() {
    return curryData().join('\n');
}

function logCurryOnly() {
    console.clear();
    console.log("--- Task 3: Curry ---");
    console.log(curryReferenceText());
}

// ============================================
// BONUS: Real Pipeline
// ============================================

function pipelineData() {
    var results = [];
    
    results.push("=== Bonus: Real Pipeline ===");
    results.push("");
    results.push("const users = [");
    results.push("  { name: 'priya', age: 25 },");
    results.push("  { name: 'aarav', age: 17 },");
    results.push("  { name: 'riya', age: 30 }");
    results.push("];");
    results.push("");
    results.push("// Pipeline steps:");
    results.push("const filterAdult = users => users.filter(u => u.age >= 18);");
    results.push("const capitalizeNames = users => users.map(u => ({ ...u, name: u.name.toUpperCase() }));");
    results.push("const sortByAgeDesc = users => [...users].sort((a, b) => b.age - a.age);");
    results.push("const extractNames = users => users.map(u => u.name);");
    results.push("");
    results.push("const processUsers = pipe(");
    results.push("  filterAdult,");
    results.push("  capitalizeNames,");
    results.push("  sortByAgeDesc,");
    results.push("  extractNames");
    results.push(");");
    results.push("");
    results.push("// Result: ['RIYA', 'PRIYA'] (ages 30 and 25)");
    
    return results;
}

function pipelineReferenceText() {
    return pipelineData().join('\n');
}

function logPipelineOnly() {
    console.clear();
    console.log("--- Bonus: Real Pipeline ---");
    console.log(pipelineReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. compose from scratch:");
    results.push("   const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);");
    results.push("");
    results.push("2. Pure refactor of mutating function:");
    results.push("   // Impure");
    results.push("   function addToArray(arr, item) { arr.push(item); return arr; }");
    results.push("   // Pure");
    results.push("   function addToArrayPure(arr, item) { return [...arr, item]; }");
    results.push("");
    results.push("3. generic curry function:");
    results.push("   function curry(fn) {");
    results.push("     return function curried(...args) {");
    results.push("       if (args.length >= fn.length) return fn(...args);");
    results.push("       return (...next) => curried(...args, ...next);");
    results.push("     };");
    results.push("   }");
    results.push("");
    results.push("4. Average order value pipeline:");
    results.push("   const sum = (a, b) => a + b;");
    results.push("   const calcAverage = orders => {");
    results.push("     const total = orders.map(o => o.price * o.quantity).reduce(sum, 0);");
    results.push("     return total / orders.length;");
    results.push("   };");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/functional-programming");
    
    return results;
}

function practiceReferenceText() {
    return practiceData().join('\n');
}

function logPracticeOnly() {
    console.clear();
    console.log("--- Practice Tasks ---");
    console.log(practiceReferenceText());
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
    pure: logPureOnly,
    pipe: logPipeOnly,
    curry: logCurryOnly,
    pipeline: logPipelineOnly,
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
    // Task 1 Demo: Pure/Impure
    var pureBtn = document.getElementById('run-pure-demo');
    var pureResult = document.getElementById('pure-result');
    
    if (pureBtn && pureResult) {
        pureBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Pure vs Impure Analysis ===");
            output.push("");
            
            output.push("1. (a, b) => a + b");
            output.push("   → PURE: always returns same result for same inputs");
            output.push("");
            output.push("2. () => Date.now()");
            output.push("   → IMPURE: depends on system clock, different each time");
            output.push("");
            output.push("3. (arr) => arr.sort()");
            output.push("   → IMPURE: mutates the original array");
            output.push("");
            output.push("4. (arr) => [...arr].sort()");
            output.push("   → PURE: creates a copy first, original unchanged");
            output.push("");
            output.push("5. (x) => { console.log(x); return x; }");
            output.push("   → IMPURE: console.log is a side effect");
            
            pureResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: pipe
    var pipeBtn = document.getElementById('run-pipe-demo');
    var pipeResult = document.getElementById('pipe-result');
    
    if (pipeBtn && pipeResult) {
        pipeBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== pipe Demo ===");
            output.push("");
            
            var myPipe = pipe;
            var result = myPipe(addOne, square, negate)(5);
            
            output.push("pipe(addOne, square, negate)(5) = " + result);
            output.push("");
            output.push("Step by step:");
            output.push("  addOne(5) = " + addOne(5));
            output.push("  square(6) = " + square(6));
            output.push("  negate(36) = " + negate(36));
            
            pipeResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: Curry
    var curryBtn = document.getElementById('run-curry-demo');
    var curryResult = document.getElementById('curry-result');
    
    if (curryBtn && curryResult) {
        curryBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Curry Demo ===");
            output.push("");
            
            var length5 = volume(5);
            var length5Width3 = length5(3);
            var result = length5Width3(2);
            
            output.push("volume(5)(3)(2) = " + result);
            output.push("");
            output.push("Step by step:");
            output.push("  const length5 = volume(5);     // waits for width");
            output.push("  const length5Width3 = length5(3); // waits for height");
            output.push("  const result = length5Width3(2);   // = 30");
            
            curryResult.textContent = output.join('\n');
        });
    }
    
    // Bonus Demo: Real Pipeline
    var pipelineBtn = document.getElementById('run-pipeline-demo');
    var pipelineResult = document.getElementById('pipeline-result');
    
    if (pipelineBtn && pipelineResult) {
        pipelineBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Real Pipeline Demo ===");
            output.push("");
            
            var users = [
                { name: "priya", age: 25 },
                { name: "aarav", age: 17 },
                { name: "riya", age: 30 }
            ];
            
            output.push("Original users:");
            for (var i = 0; i < users.length; i++) {
                output.push("  " + users[i].name + " (" + users[i].age + ")");
            }
            output.push("");
            
            var filterAdult = function(usersArr) {
                return usersArr.filter(function(u) { return u.age >= 18; });
            };
            
            var capitalizeNames = function(usersArr) {
                return usersArr.map(function(u) {
                    return { name: u.name.toUpperCase(), age: u.age };
                });
            };
            
            var sortByAgeDesc = function(usersArr) {
                return usersArr.slice().sort(function(a, b) { return b.age - a.age; });
            };
            
            var extractNames = function(usersArr) {
                return usersArr.map(function(u) { return u.name; });
            };
            
            var processUsers = pipe(filterAdult, capitalizeNames, sortByAgeDesc, extractNames);
            var result = processUsers(users);
            
            output.push("Pipeline result (adults, capitalized, sorted by age desc):");
            output.push("  [" + result.join(", ") + "]");
            output.push("");
            output.push("Expected: ['RIYA', 'PRIYA']");
            
            pipelineResult.textContent = output.join('\n');
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
    var outPure = document.getElementById('outPure');
    var outPipe = document.getElementById('outPipe');
    var outCurry = document.getElementById('outCurry');
    var outPipeline = document.getElementById('outPipeline');
    var outPractice = document.getElementById('outPractice');
    
    if (outPure) outPure.textContent = pureReferenceText();
    if (outPipe) outPipe.textContent = pipeReferenceText();
    if (outCurry) outCurry.textContent = curryReferenceText();
    if (outPipeline) outPipeline.textContent = pipelineReferenceText();
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
    
    // Console welcome message
    console.log("🔥 ADVANCED DAY 13: Functional Programming 🔥");
    console.log("");
    console.log("Class Work topics:");
    console.log("• Pure functions — same input → same output, no side effects");
    console.log("• Side effects at the edges — pure core, impure shell");
    console.log("• Higher-order functions — take or return functions");
    console.log("• compose and pipe — function composition");
    console.log("• Currying — fn(a)(b)(c)");
    console.log("• Partial application — fixing arguments");
    console.log("");
    console.log("💡 Open each task to see explanations and run live demos!");
    console.log("🎮 Click the buttons to see functional patterns in action!");
});