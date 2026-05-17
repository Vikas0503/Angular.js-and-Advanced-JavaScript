// ============================================
// ADVANCED DAY 1 - EXECUTION CONTEXT & HOISTING
// Topics: Execution Context, Call Stack, Hoisting, TDZ, Function Declarations vs Expressions
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
        '<div class="task-title">📦 Execution Context (Global vs Function)</div>' +
        '<pre><code>// One Global Execution Context for the whole file\n' +
        'const city = "Jaipur";          // lives in Global EC\n\n' +
        'function greet(name) {\n' +
        '  // A new Function EC is created on EACH call to greet()\n' +
        '  const message = `Hi ${name} from ${city}`;\n' +
        '  return message;\n' +
        '}\n\n' +
        'greet("Priya");   // creates Function EC #1, then destroys it\n' +
        'greet("Aarav");   // creates Function EC #2 (fresh — independent)</code></pre>' +
        '<span class="badge">✓ Each function call gets its own fresh Execution Context</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⚙️ The Two Phases: Creation + Execution</div>' +
        '<pre><code>// What you write:\n' +
        'console.log(name);     // line 1\n' +
        'var name = "Priya";    // line 2\n' +
        'console.log(name);     // line 3\n\n' +
        '// CREATION PHASE: name → undefined\n' +
        '// EXECUTION PHASE: line by line\n' +
        '// line 1: undefined, line 2: assignment, line 3: "Priya"</code></pre>' +
        '<span class="badge">✓ Creation phase allocates memory BEFORE any code runs</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📚 The Call Stack (LIFO)</div>' +
        '<pre><code>function multiply(a, b) { return a * b; }\n' +
        'function square(n) { return multiply(n, n); }\n' +
        'function printSquare(n) { console.log(square(n)); }\n' +
        'printSquare(5);\n\n' +
        '// Stack at multiply(5,5):\n' +
        '// multiply(5,5) ← top\n' +
        '// square(5)\n' +
        '// printSquare(5)\n' +
        '// Global EC ← bottom</code></pre>' +
        '<span class="badge">✓ Last In, First Out — most recent function call is at top</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🏗️ Hoisting — What It Actually Is</div>' +
        '<pre><code>console.log(a);        // undefined     ← var hoisted with undefined\n' +
        'var a = 1;\n\n' +
        'console.log(b);        // ReferenceError ← let in TDZ\n' +
        'let b = 2;\n\n' +
        'greet();               // "Hi" ← function declaration: full body hoisted\n' +
        'function greet() { console.log("Hi"); }</code></pre>' +
        '<span class="badge">✓ Hoisting = memory allocation during Creation phase</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⏳ var vs let/const + TDZ</div>' +
        '<pre><code>// var — silent undefined (old, problematic)\n' +
        'console.log(score);    // undefined\n' +
        'var score = 90;\n\n' +
        '// let — TDZ catches the bug for you\n' +
        'console.log(level);    // ReferenceError: Cannot access before initialization\n' +
        'let level = 5;</code></pre>' +
        '<div class="tdz-warning">⚠️ TDZ = Temporal Dead Zone — the period from block start to declaration line</div>' +
        '<span class="badge">✓ let/const exist in TDZ until their declaration line runs</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔧 Function Declaration vs Expression</div>' +
        '<pre><code>// Function Declaration — works BEFORE its line\n' +
        'sayHi();           // "Hi" ← full body hoisted\n' +
        'function sayHi() { console.log("Hi"); }\n\n' +
        '// Function Expression with var — TypeError\n' +
        'greet();           // TypeError: greet is not a function\n' +
        'var greet = function() { console.log("Hello"); };\n\n' +
        '// Function Expression with const — ReferenceError (TDZ)\n' +
        'welcome();         // ReferenceError: Cannot access before initialization\n' +
        'const welcome = () => console.log("Welcome");</code></pre>' +
        '<span class="badge">✓ Function declarations are fully hoisted; expressions follow variable rules</span>' +
        '</div>';
}

// ============================================
// TASK 1: Predict var hoist
// ============================================

function varHoistData() {
    var results = [];
    
    results.push("=== Task 1: Predict var hoist ===");
    results.push("");
    results.push("Snippet: console.log(name); var name = 'Priya'; console.log(name);");
    results.push("");
    results.push("PREDICTIONS:");
    results.push("  First console.log: undefined");
    results.push("  Second console.log: Priya");
    results.push("");
    results.push("EXPLANATION:");
    results.push("  During the Creation phase, 'var name' is hoisted and initialized with undefined.");
    results.push("  The first console.log runs before the assignment, so it prints undefined.");
    results.push("  This is NOT a ReferenceError because the variable exists (thanks to hoisting),");
    results.push("  it just hasn't been assigned its value yet.");
    results.push("");
    results.push("  var hoisting gives variables a default value of undefined.");
    results.push("  This behavior can lead to bugs, which is why let/const were introduced.");
    
    return results;
}

function varHoistReferenceText() {
    return varHoistData().join('\n');
}

function logVarHoistOnly() {
    console.clear();
    console.log("--- Task 1: Predict var hoist ---");
    console.log(varHoistReferenceText());
}

// ============================================
// TASK 2: Trigger the TDZ
// ============================================

function tdzData() {
    var results = [];
    
    results.push("=== Task 2: Trigger the TDZ ===");
    results.push("");
    results.push("Snippet: console.log(city); let city = 'Jaipur';");
    results.push("");
    results.push("RESULT: ReferenceError: Cannot access 'city' before initialization");
    results.push("");
    results.push("TDZ stands for: TEMPORAL DEAD ZONE");
    results.push("");
    results.push("EXPLANATION:");
    results.push("  let and const variables are hoisted, but they are NOT initialized.");
    results.push("  They enter a Temporal Dead Zone (TDZ) from the start of the block");
    results.push("  until their declaration line is reached in the execution phase.");
    results.push("");
    results.push("  Accessing a variable in the TDZ throws a ReferenceError.");
    results.push("  This is GOOD — it catches bugs that var would silently ignore.");
    results.push("");
    results.push("  FIX: Move the declaration above any access:");
    results.push("  let city = 'Jaipur';");
    results.push("  console.log(city);  // Works!");
    
    return results;
}

function tdzReferenceText() {
    return tdzData().join('\n');
}

function logTDZOnly() {
    console.clear();
    console.log("--- Task 2: Trigger the TDZ ---");
    console.log(tdzReferenceText());
}

// ============================================
// TASK 3: Function declaration vs expression
// ============================================

function funcDecData() {
    var results = [];
    
    results.push("=== Task 3: Function declaration vs expression ===");
    results.push("");
    results.push("Snippet:");
    results.push("  sayHi();");
    results.push("  greet();");
    results.push("  function sayHi() { console.log('Hi'); }");
    results.push("  var greet = function() { console.log('Hello'); };");
    results.push("");
    results.push("RESULTS:");
    results.push("  ✅ sayHi() works → logs 'Hi'");
    results.push("  ❌ greet() throws → TypeError: greet is not a function");
    results.push("");
    results.push("EXPLANATION:");
    results.push("");
    results.push("  FUNCTION DECLARATION (function sayHi() {}):");
    results.push("    • Fully hoisted — both the declaration AND the body");
    results.push("    • Can be called BEFORE its line in the code");
    results.push("    • Safer for functions that need to be available everywhere");
    results.push("");
    results.push("  FUNCTION EXPRESSION (var greet = function() {}):");
    results.push("    • Only the variable 'greet' is hoisted (with value undefined)");
    results.push("    • The function assignment happens at runtime");
    results.push("    • Calling before assignment gives TypeError (undefined is not a function)");
    results.push("");
    results.push("  CONST ARROW (const welcome = () => {}):");
    results.push("    • Same as let/const — TDZ applies");
    results.push("    • Would throw ReferenceError if called before declaration");
    
    return results;
}

function funcDecReferenceText() {
    return funcDecData().join('\n');
}

function logFuncDecOnly() {
    console.clear();
    console.log("--- Task 3: Function declaration vs expression ---");
    console.log(funcDecReferenceText());
}

// ============================================
// BONUS: Call Stack
// ============================================

function multiply(a, b) {
    console.trace("Inside multiply() - stack trace:");
    return a * b;
}

function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
    console.log("Result: " + square(n));
}

function callStackData() {
    var results = [];
    
    results.push("=== Bonus: Trace the Call Stack ===");
    results.push("");
    results.push("Call Stack visualization at the moment multiply(5,5) is executing:");
    results.push("");
    results.push("  ┌────────────────────────────┐");
    results.push("  │  multiply(5, 5)            │  ← top of stack (currently running)");
    results.push("  ├────────────────────────────┤");
    results.push("  │  square(5)                 │");
    results.push("  ├────────────────────────────┤");
    results.push("  │  printSquare(5)            │");
    results.push("  ├────────────────────────────┤");
    results.push("  │  Global Execution Context  │  ← bottom");
    results.push("  └────────────────────────────┘");
    results.push("");
    results.push("FINAL OUTPUT: 25");
    results.push("");
    results.push("STACK TRACE EXPLANATION:");
    results.push("  • The stack grows upward as functions call other functions");
    results.push("  • LIFO (Last In, First Out) — the last function pushed is the first to finish");
    results.push("  • When multiply returns, it's popped off, then square returns, etc.");
    results.push("  • console.trace() shows the exact call stack at that moment");
    
    return results;
}

function callStackReferenceText() {
    return callStackData().join('\n');
}

function logCallStackOnly() {
    console.clear();
    console.log("--- Bonus: Call Stack ---");
    console.log(callStackReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. console.log(typeof age); var age = 25;");
    results.push("   → 'undefined' (typeof on uninitialized var returns 'undefined')");
    results.push("");
    results.push("2. Three function versions:");
    results.push("");
    results.push("   // Version 1: Function Declaration — WORKS");
    results.push("   sayHello(); // 'Hello!'");
    results.push("   function sayHello() { console.log('Hello!'); }");
    results.push("");
    results.push("   // Version 2: var expression — TypeError");
    results.push("   greet(); // TypeError: greet is not a function");
    results.push("   var greet = function() { console.log('Hi!'); };");
    results.push("");
    results.push("   // Version 3: const arrow — ReferenceError (TDZ)");
    results.push("   welcome(); // ReferenceError: Cannot access before initialization");
    results.push("   const welcome = () => console.log('Welcome!');");
    results.push("");
    results.push("3. console.trace() adds a stack trace to DevTools console");
    results.push("   showing the exact function call chain.");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/var");
    results.push("• https://javascript.info/closure");
    
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
    varhoist: logVarHoistOnly,
    tdz: logTDZOnly,
    funcdec: logFuncDecOnly,
    callstack: logCallStackOnly,
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
    // Task 1 Demo: var hoist
    var varHoistBtn = document.getElementById('run-var-hoist');
    var varHoistResult = document.getElementById('var-hoist-result');
    
    if (varHoistBtn && varHoistResult) {
        varHoistBtn.addEventListener('click', function() {
            var output = [];
            try {
                // This demonstrates the actual behavior
                output.push("=== Executing: console.log(name); var name = 'Priya'; console.log(name); ===");
                output.push("");
                
                // Simulate the behavior
                output.push("First console.log(name): undefined");
                output.push("(var name is hoisted and initialized with undefined)");
                output.push("");
                
                var name = "Priya";
                output.push("After assignment: name = " + name);
                output.push("");
                output.push("Second console.log(name): " + name);
                output.push("");
                output.push("✅ No error! var hoisting prevents ReferenceError.");
            } catch (err) {
                output.push("Error: " + err.message);
            }
            varHoistResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: TDZ
    var tdzErrorBtn = document.getElementById('run-tdz-error');
    var tdzFixedBtn = document.getElementById('run-tdz-fixed');
    var tdzResult = document.getElementById('tdz-result');
    
    if (tdzErrorBtn && tdzResult) {
        tdzErrorBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Executing TDZ error demo ===");
            output.push("");
            try {
                // This will throw in real execution
                eval('console.log(city); let city = "Jaipur";');
            } catch (err) {
                output.push("❌ ERROR CAUGHT!");
                output.push("Error name: " + err.name);
                output.push("Error message: " + err.message);
                output.push("");
                output.push("This is the Temporal Dead Zone in action!");
                output.push("'city' exists but is uninitialized until its declaration line.");
            }
            tdzResult.textContent = output.join('\n');
        });
    }
    
    if (tdzFixedBtn && tdzResult) {
        tdzFixedBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Executing fixed version ===");
            output.push("");
            try {
                var city = "Jaipur";
                output.push("let city = 'Jaipur';");
                output.push("console.log(city); → " + city);
                output.push("");
                output.push("✅ Works! Declaration before access avoids TDZ.");
            } catch (err) {
                output.push("Error: " + err.message);
            }
            tdzResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: Function declaration vs expression
    var funcDemoBtn = document.getElementById('run-func-demo');
    var funcResult = document.getElementById('func-result');
    
    if (funcDemoBtn && funcResult) {
        funcDemoBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Function Declaration vs Expression Demo ===");
            output.push("");
            output.push("function sayHi() { console.log('Hi'); }");
            output.push("var greet = function() { console.log('Hello'); };");
            output.push("");
            output.push("Calling sayHi() BEFORE declaration:");
            output.push("✅ sayHi() works! Function declarations are fully hoisted.");
            output.push("");
            output.push("Calling greet() BEFORE assignment:");
            output.push("❌ TypeError: greet is not a function");
            output.push("");
            output.push("EXPLANATION:");
            output.push("• Function declarations are hoisted with their entire body");
            output.push("• Function expressions only hoist the variable (as undefined)");
            output.push("• Calling undefined as a function causes TypeError");
            funcResult.textContent = output.join('\n');
        });
    }
    
    // Bonus: Call Stack Demo
    var callstackBtn = document.getElementById('run-callstack');
    var callstackResult = document.getElementById('callstack-result');
    var callstackViz = document.getElementById('callstack-viz');
    
    if (callstackBtn && callstackResult) {
        callstackBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Call Stack Demo ===");
            output.push("");
            output.push("Calling printSquare(5)...");
            output.push("");
            
            try {
                var result = printSquare(5);
                output.push("Result: " + result);
                output.push("");
                output.push("Check the BROWSER CONSOLE (F12) to see the actual stack trace!");
                output.push("console.trace() inside multiply() shows the full call stack.");
            } catch (err) {
                output.push("Error: " + err.message);
            }
            callstackResult.textContent = output.join('\n');
            
            // Visual call stack representation
            if (callstackViz) {
                callstackViz.innerHTML = 
                    '<div style="text-align: center; margin-bottom: 0.5rem;"><strong>Call Stack at multiply(5,5) execution:</strong></div>' +
                    '<div class="stack-frame stack-top">📍 multiply(5, 5) ← CURRENTLY EXECUTING</div>' +
                    '<div class="stack-frame">📦 square(5)</div>' +
                    '<div class="stack-frame">📦 printSquare(5)</div>' +
                    '<div class="stack-frame">🌍 Global Execution Context</div>' +
                    '<div style="margin-top: 0.5rem; font-size: 0.7rem;">↑ LIFO - Last In, First Out ↑</div>';
            }
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
    var outVarHoist = document.getElementById('outVarHoist');
    var outTDZ = document.getElementById('outTDZ');
    var outFuncDec = document.getElementById('outFuncDec');
    var outCallStack = document.getElementById('outCallStack');
    var outPractice = document.getElementById('outPractice');
    
    if (outVarHoist) outVarHoist.textContent = varHoistReferenceText();
    if (outTDZ) outTDZ.textContent = tdzReferenceText();
    if (outFuncDec) outFuncDec.textContent = funcDecReferenceText();
    if (outCallStack) outCallStack.textContent = callStackReferenceText();
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
    console.log("🔥 ADVANCED DAY 1: Execution Context & Hoisting 🔥");
    console.log("");
    console.log("Class Work topics:");
    console.log("• Execution Context (Global vs Function)");
    console.log("• Two Phases: Creation + Execution");
    console.log("• Call Stack (LIFO)");
    console.log("• Hoisting - what it actually is");
    console.log("• var vs let/const + Temporal Dead Zone");
    console.log("• Function Declarations vs Expressions");
    console.log("");
    console.log("💡 Open each task to see explanations and run live demos!");
    console.log("🎮 Click the buttons to see hoisting and TDZ in action!");
});