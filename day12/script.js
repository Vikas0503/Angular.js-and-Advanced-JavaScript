// ============================================
// DAY 12 - ERROR HANDLING & MODULES (FINAL SESSION)
// Class Work: Error types, try/catch/finally, Error object, throw, custom errors
// Homework: Safe JSON parse, age validation, custom ValidationError, modules
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
        '<div class="task-title">⚠️ Error Types: Syntax / Runtime / Logic</div>' +
        '<pre><code>// Syntax Error — won\'t even run\n' +
        '// const x = ;     ← parser rejects\n\n' +
        '// Runtime Error — crashes when reached\n' +
        'const user = null;\n' +
        '// console.log(user.name); ← TypeError\n\n' +
        '// Logic Error — runs, returns wrong answer\n' +
        'const average = (a, b) => a + b / 2;   // BUG!\n' +
        'console.log(average(10, 20));          // 20, not 15</code></pre>' +
        '<div class="demo-area">' +
        '<h4>Error Type Examples:</h4>' +
        '<span class="error-type syntax-error">Syntax Error</span> - Code can\'t parse (missing bracket)<br>' +
        '<span class="error-type runtime-error">Runtime Error</span> - null.foo (try/catch catches this!)<br>' +
        '<span class="error-type logic-error">Logic Error</span> - Wrong formula, runs but incorrect<br>' +
        '</div>' +
        '<span class="badge">✓ try/catch only handles RUNTIME errors</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔧 try / catch / finally</div>' +
        '<pre><code>try {\n' +
        '  const data = JSON.parse(\'{"name":"Priya"\');\n' +
        '} catch (err) {\n' +
        '  console.log("Couldn\'t parse:", err.message);\n' +
        '} finally {\n' +
        '  console.log("Always runs");\n' +
        '}\n' +
        'console.log("App keeps running");</code></pre>' +
        '<div class="demo-area">' +
        '<button id="demo-try-catch">Run try/catch Demo</button>' +
        '<div id="trycatch-result" class="error-demo"></div>' +
        '</div>' +
        '<span class="badge">✓ finally runs no matter what — even after return!</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📋 The Error Object</div>' +
        '<pre><code>try {\n' +
        '  null.foo;\n' +
        '} catch (err) {\n' +
        '  console.log(err.message);   // "Cannot read properties of null"\n' +
        '  console.log(err.name);      // "TypeError"\n' +
        '  console.log(err.stack);     // Debug trace\n' +
        '}</code></pre>' +
        '<span class="badge">✓ err.name lets you branch on error type</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🚨 throw your own Errors</div>' +
        '<pre><code>function divide(a, b) {\n' +
        '  if (b === 0) {\n' +
        '    throw new Error("Cannot divide by zero");\n' +
        '  }\n' +
        '  return a / b;\n' +
        '}</code></pre>' +
        '<span class="badge">✓ Always throw Error objects, not strings!</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🏷️ Custom Error Classes</div>' +
        '<pre><code>class ValidationError extends Error {\n' +
        '  constructor(message) {\n' +
        '    super(message);\n' +
        '    this.name = "ValidationError";\n' +
        '  }\n' +
        '}</code></pre>' +
        '<span class="badge">✓ Use instanceof to branch on custom error types</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📦 Modules: export / import</div>' +
        '<pre><code>// Named exports (many per file)\n' +
        'export const PI = 3.14159;\n' +
        'export function add(a, b) { return a + b; }\n\n' +
        '// Default export (one per file)\n' +
        'export default function greet(name) {\n' +
        '  return `Hello, ${name}!`;\n' +
        '}\n\n' +
        '// Importing\n' +
        'import greet, { PI, add } from "./utils.js";</code></pre>' +
        '<div class="module-note">' +
        '<strong>⚠️ Module Setup Required:</strong><br>' +
        '• Browser: &lt;script type="module" src="app.js"&gt;<br>' +
        '• Must run on a local server (file:// won\'t work)<br>' +
        '• Use VS Code Live Server or run: npx serve .' +
        '</div>' +
        '<span class="badge">✓ Modules have their own scope, are deferred by default</span>' +
        '</div>';
}

// ============================================
// TASK 1: Safe JSON Parse
// ============================================

function safeParse(str) {
    try {
        var result = JSON.parse(str);
        return result;
    } catch (err) {
        console.log("Invalid JSON: " + err.message);
        return null;
    }
}

function jsonParseData() {
    var results = [];
    
    results.push("=== Task 1: Safe JSON Parse ===");
    results.push("1. safeParse('{\"name\":\"Priya\"}') → returns object");
    results.push("2. safeParse('{\"name\":\"Priya\"') → catches error, returns null");
    results.push("");
    results.push("function safeParse(str) {");
    results.push("  try {");
    results.push("    return JSON.parse(str);");
    results.push("  } catch (err) {");
    results.push("    console.log('Invalid JSON:', err.message);");
    results.push("    return null;");
    results.push("  }");
    results.push("}");
    
    return results;
}

function jsonParseReferenceText() {
    return jsonParseData().join('\n');
}

function logJsonParseOnly() {
    emitConsoleAnswer(jsonParseReferenceText());
}

// ============================================
// TASK 2: Throw on Bad Age
// ============================================

function setAge(age) {
    if (typeof age !== "number") {
        throw new Error("Age must be a number");
    }
    if (age < 0 || age > 120) {
        throw new Error("Age must be 0–120");
    }
    return age;
}

function badAgeData() {
    var results = [];
    
    results.push("=== Task 2: Throw on Bad Age ===");
    results.push("1. setAge(25) → returns 25");
    results.push("2. setAge('twenty') → throws 'Age must be a number'");
    results.push("3. setAge(200) → throws 'Age must be 0–120'");
    results.push("");
    results.push("function setAge(age) {");
    results.push("  if (typeof age !== 'number') {");
    results.push("    throw new Error('Age must be a number');");
    results.push("  }");
    results.push("  if (age < 0 || age > 120) {");
    results.push("    throw new Error('Age must be 0–120');");
    results.push("  }");
    results.push("  return age;");
    results.push("}");
    
    return results;
}

function badAgeReferenceText() {
    return badAgeData().join('\n');
}

function logBadAgeOnly() {
    emitConsoleAnswer(badAgeReferenceText());
}

// ============================================
// TASK 3: Custom ValidationError
// ============================================

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateEmail(email) {
    if (!email.includes("@")) {
        throw new ValidationError("Invalid email format - missing '@'");
    }
    return email;
}

function validationData() {
    var results = [];
    
    results.push("=== Task 3: Custom ValidationError ===");
    results.push("1. validateEmail('priya@example.com') → returns email");
    results.push("2. validateEmail('priya-no-at') → throws ValidationError");
    results.push("");
    results.push("class ValidationError extends Error {");
    results.push("  constructor(message) {");
    results.push("    super(message);");
    results.push("    this.name = 'ValidationError';");
    results.push("  }");
    results.push("}");
    results.push("");
    results.push("function validateEmail(email) {");
    results.push("  if (!email.includes('@')) {");
    results.push("    throw new ValidationError('Invalid email format');");
    results.push("  }");
    results.push("  return email;");
    results.push("}");
    
    return results;
}

function validationReferenceText() {
    return validationData().join('\n');
}

function logValidationOnly() {
    emitConsoleAnswer(validationReferenceText());
}

// ============================================
// TASK 4: Modules Demo (Code Examples)
// ============================================

function modulesData() {
    var results = [];
    
    results.push("=== Task 4: Two-File Module Setup ===");
    results.push("");
    results.push("📁 mathUtils.js (named exports):");
    results.push("export const PI = 3.14159;");
    results.push("");
    results.push("export function add(a, b) {");
    results.push("  return a + b;");
    results.push("}");
    results.push("");
    results.push("export function multiply(a, b) {");
    results.push("  return a * b;");
    results.push("}");
    results.push("");
    results.push("📁 formatUtils.js (default export):");
    results.push("export default function formatPrice(n) {");
    results.push("  return '₹' + n;");
    results.push("}");
    results.push("");
    results.push("📁 app.js (imports):");
    results.push("import formatPrice, { PI, add, multiply } from './formatUtils.js';");
    results.push("import * as math from './mathUtils.js';");
    results.push("");
    results.push("console.log(PI);                    // 3.14159");
    results.push("console.log(add(5, 3));            // 8");
    results.push("console.log(multiply(4, 5));       // 20");
    results.push("console.log(formatPrice(1000));    // ₹1000");
    results.push("");
    results.push("📄 HTML setup:");
    results.push('<script type="module" src="app.js"><\/script>');
    results.push("");
    results.push("⚠️ Remember: Modules need a local server!");
    
    return results;
}

function modulesReferenceText() {
    return modulesData().join('\n');
}

function logModulesOnly() {
    emitConsoleAnswer(modulesReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. safeDivide(a, b):");
    results.push("   function safeDivide(a, b) {");
    results.push("     if (b === 0) throw new Error('Cannot divide by zero');");
    results.push("     return a / b;");
    results.push("   }");
    results.push("");
    results.push("2. NotFoundError:");
    results.push("   class NotFoundError extends Error {");
    results.push("     constructor(message) {");
    results.push("       super(message);");
    results.push("       this.name = 'NotFoundError';");
    results.push("     }");
    results.push("   }");
    results.push("");
    results.push("   function getUserById(id) {");
    results.push("     if (![1,2,3].includes(id)) {");
    results.push("       throw new NotFoundError('User ' + id + ' not found');");
    results.push("     }");
    results.push("     return { id: id, name: 'User ' + id };");
    results.push("   }");
    results.push("");
    results.push("3. Calculator Module (calc.js):");
    results.push("   export function add(a, b) { return a + b; }");
    results.push("   export function subtract(a, b) { return a - b; }");
    results.push("   export function multiply(a, b) { return a * b; }");
    results.push("   export function divide(a, b) {");
    results.push("     if (b === 0) throw new Error('Division by zero');");
    results.push("     return a / b;");
    results.push("   }");
    results.push("");
    results.push("4. Default export: calculate(op, a, b)");
    results.push("   export default function calculate(op, a, b) {");
    results.push("     switch(op) {");
    results.push("       case 'add': return a + b;");
    results.push("       case 'subtract': return a - b;");
    results.push("       case 'multiply': return a * b;");
    results.push("       case 'divide': return a / b;");
    results.push("       default: throw new Error('Unknown operation');");
    results.push("     }");
    results.push("   }");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/try-catch");
    results.push("• https://javascript.info/modules-intro");
    
    return results;
}

function practiceReferenceText() {
    return practiceData().join('\n');
}

function logPracticeOnly() {
    emitConsoleAnswer(practiceReferenceText());
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
    jsonparse: logJsonParseOnly,
    badage: logBadAgeOnly,
    validation: logValidationOnly,
    modules: logModulesOnly,
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
    // Task 1 Demo: Safe JSON Parse
    var validBtn = document.getElementById('test-valid-json');
    var invalidBtn = document.getElementById('test-invalid-json');
    var jsonResult = document.getElementById('json-result');
    
    if (validBtn && jsonResult) {
        validBtn.addEventListener('click', function() {
            var result = safeParse('{"name":"Priya"}');
            jsonResult.innerHTML = "Result: " + JSON.stringify(result);
            console.log("Valid JSON parsed:", result);
        });
    }
    
    if (invalidBtn && jsonResult) {
        invalidBtn.addEventListener('click', function() {
            var result = safeParse('{"name":"Priya"');
            jsonResult.innerHTML = "Result: " + result;
            console.log("Invalid JSON returned:", result);
        });
    }
    
    // Task 2 Demo: Bad Age
    var age25Btn = document.getElementById('test-age-25');
    var ageStringBtn = document.getElementById('test-age-string');
    var age200Btn = document.getElementById('test-age-200');
    var ageResult = document.getElementById('age-result');
    
    if (age25Btn && ageResult) {
        age25Btn.addEventListener('click', function() {
            try {
                var result = setAge(25);
                ageResult.innerHTML = "Success: setAge(25) = " + result;
                console.log("Age set to:", result);
            } catch (err) {
                ageResult.innerHTML = "Error: " + err.message;
                console.log("Caught error:", err.message);
            }
        });
    }
    
    if (ageStringBtn && ageResult) {
        ageStringBtn.addEventListener('click', function() {
            try {
                var result = setAge("twenty");
                ageResult.innerHTML = "Success: setAge('twenty') = " + result;
            } catch (err) {
                ageResult.innerHTML = "Error: " + err.message;
                console.log("Caught error:", err.message);
            }
        });
    }
    
    if (age200Btn && ageResult) {
        age200Btn.addEventListener('click', function() {
            try {
                var result = setAge(200);
                ageResult.innerHTML = "Success: setAge(200) = " + result;
            } catch (err) {
                ageResult.innerHTML = "Error: " + err.message;
                console.log("Caught error:", err.message);
            }
        });
    }
    
    // Task 3 Demo: Email Validation
    var validEmailBtn = document.getElementById('test-email-valid');
    var invalidEmailBtn = document.getElementById('test-email-invalid');
    var emailResult = document.getElementById('email-result');
    
    if (validEmailBtn && emailResult) {
        validEmailBtn.addEventListener('click', function() {
            try {
                var result = validateEmail("priya@example.com");
                emailResult.innerHTML = "Success: " + result;
                console.log("Valid email:", result);
            } catch (err) {
                if (err instanceof ValidationError) {
                    emailResult.innerHTML = "ValidationError: " + err.message;
                } else {
                    emailResult.innerHTML = "Error: " + err.message;
                }
            }
        });
    }
    
    if (invalidEmailBtn && emailResult) {
        invalidEmailBtn.addEventListener('click', function() {
            try {
                var result = validateEmail("priya-no-at");
                emailResult.innerHTML = "Success: " + result;
            } catch (err) {
                if (err instanceof ValidationError) {
                    emailResult.innerHTML = "ValidationError: " + err.message;
                } else {
                    emailResult.innerHTML = "Error: " + err.message;
                }
                console.log("Caught ValidationError:", err.message);
            }
        });
    }
    
    // Try/Catch Demo
    var tryCatchBtn = document.getElementById('demo-try-catch');
    var tryCatchResult = document.getElementById('trycatch-result');
    
    if (tryCatchBtn && tryCatchResult) {
        tryCatchBtn.addEventListener('click', function() {
            var output = "";
            try {
                JSON.parse('{"bad":json}');
            } catch (err) {
                output = "Caught: " + err.name + " - " + err.message;
                console.log("Try/catch caught:", err.message);
            } finally {
                output = output + "\nfinally: This always runs!";
            }
            tryCatchResult.innerHTML = output;
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
    
    // Set reference text for each homework task
    var outJsonParse = document.getElementById('outJsonParse');
    var outBadAge = document.getElementById('outBadAge');
    var outValidation = document.getElementById('outValidation');
    var outModules = document.getElementById('outModules');
    var outPractice = document.getElementById('outPractice');
    
    if (outJsonParse) outJsonParse.textContent = jsonParseReferenceText();
    if (outBadAge) outBadAge.textContent = badAgeReferenceText();
    if (outValidation) outValidation.textContent = validationReferenceText();
    if (outModules) outModules.textContent = modulesReferenceText();
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

// ============================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ============================================

window.goBack = goBack;
window.toggleClassWork = toggleClassWork;
window.safeParse = safeParse;
window.setAge = setAge;
window.validateEmail = validateEmail;
window.ValidationError = ValidationError;