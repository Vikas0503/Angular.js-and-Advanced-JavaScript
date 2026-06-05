// ============================================
// DAY 6 - ARROW FUNCTIONS & DEFAULT PARAMETERS
// Class Work: Arrow functions, implicit return, default params
// Homework: Rectangle Area, Greeting, Temperature, Pure/Impure, Practice
// ============================================

// ----- Helper Functions -----
function goBack() {
    window.location.href = '../index.html';
}

// ============================================
// CLASS WORK CONTENT
// ============================================

// Arrow function examples
const addRegular = (a, b) => {
    return a + b;
};

const addImplicit = (a, b) => a + b;

const square = x => x * x;

const greetZero = () => "Hello!";

// Default parameter examples
function greetDefault(name = "Guest") {
    return "Hello, " + name;
}

const calculatePrice = (price, taxRate = 0.18, discount = 0) => {
    return price * (1 + taxRate) - discount;
};

// Generate outputs for class work
let classWorkOutput = "";
classWorkOutput += "=== Arrow Function Examples ===\n";
classWorkOutput += "add(2, 3) = " + addRegular(2, 3) + "\n";
classWorkOutput += "square(4) = " + square(4) + "\n";
classWorkOutput += "greet() = " + greetZero() + "\n\n";

classWorkOutput += "=== Default Parameter Examples ===\n";
classWorkOutput += 'greet("Anaya") = ' + greetDefault("Anaya") + "\n";
classWorkOutput += "greet() = " + greetDefault() + "\n";
classWorkOutput += "calculatePrice(1000) = " + calculatePrice(1000) + "\n";
classWorkOutput += "calculatePrice(1000, 0.18, 100) = " + calculatePrice(1000, 0.18, 100) + "\n";

function buildClassWorkHTML() {
    return `
        <div class="task">
            <div class="task-title">🏹 Arrow Function Variations</div>
            <pre><code>// Full form with braces and return
const add = (a, b) => {
    return a + b;
};

// Implicit return — single expression, no braces
const add2 = (a, b) => a + b;

// Single param — parentheses optional
const square = x => x * x;

// Zero params — keep parentheses
const greet = () => "Hello!";</code></pre>
            <div class="output">${classWorkOutput.split('\n').slice(0, 5).join('\n')}</div>
            <span class="badge">✓ Arrow functions with implicit return don't need 'return' keyword</span>
        </div>
        
        <div class="task">
            <div class="task-title">🎯 Default Parameters</div>
            <pre><code>// Default parameter — used when arg is undefined
function greet(name = "Guest") {
    return "Hello, " + name;
}

// Multiple defaults
const calculatePrice = (price, taxRate = 0.18, discount = 0) => {
    return price * (1 + taxRate) - discount;
};</code></pre>
            <div class="output">${classWorkOutput.split('\n').slice(5).join('\n')}</div>
            <span class="badge">💡 Default parameters only work when argument is undefined, not null</span>
        </div>
    `;
}

// ============================================
// TASK 1: Rectangle Area
// ============================================

function rectangleData() {
    const results = [];
    
    // Regular function
    function area(length, width) {
        return length * width;
    }
    
    // Arrow function with implicit return
    const areaArrow = (length, width) => length * width;
    
    results.push("=== Regular function area() ===");
    results.push("area(5, 3) = " + area(5, 3));
    results.push("area(10, 4) = " + area(10, 4));
    results.push("area(7, 7) = " + area(7, 7));
    
    results.push("");
    results.push("=== Arrow function with implicit return ===");
    results.push("areaArrow(5, 3) = " + areaArrow(5, 3));
    results.push("areaArrow(10, 4) = " + areaArrow(10, 4));
    results.push("areaArrow(7, 7) = " + areaArrow(7, 7));
    
    return results;
}

function rectangleReferenceText() {
    return rectangleData().join('\n');
}

function logRectangleOnly() {
    emitConsoleAnswer(rectangleReferenceText());
}

// ============================================
// TASK 2: Greeting with Default Parameter
// ============================================

function greetingData() {
    const results = [];
    
    function greet(name = "Guest") {
        return "Hello, " + name + "!";
    }
    
    results.push("=== Greeting Function with Default Parameter ===");
    results.push('greet("Priya") = ' + greet("Priya"));
    results.push('greet("Aarav") = ' + greet("Aarav"));
    results.push("greet() = " + greet());
    
    results.push("");
    results.push("=== Bonus: What happens with null? ===");
    results.push('greet(null) = ' + greet(null));
    results.push("");
    results.push("📝 Note: null does NOT trigger the default parameter!");
    results.push("Default parameters only work when the argument is undefined.");
    results.push("null is a value, so it gets used instead of the default.");
    
    return results;
}

function greetingReferenceText() {
    return greetingData().join('\n');
}

function logGreetingOnly() {
    emitConsoleAnswer(greetingReferenceText());
}

// ============================================
// TASK 3: Temperature Converter (C to F)
// ============================================

function temperatureData() {
    const results = [];
    
    // Arrow function with implicit return
    const cToF = celsius => celsius * 9/5 + 32;
    
    results.push("=== Celsius to Fahrenheit Converter ===");
    results.push("0°C = " + cToF(0) + "°F (Freezing point of water)");
    results.push("100°C = " + cToF(100) + "°F (Boiling point of water)");
    results.push("37°C = " + cToF(37) + "°F (Normal body temperature)");
    results.push("45°C = " + cToF(45) + "°F (Jaipur summer day!)");
    
    results.push("");
    results.push("Formula: F = C × 9/5 + 32");
    
    return results;
}

function temperatureReferenceText() {
    return temperatureData().join('\n');
}

function logTemperatureOnly() {
    emitConsoleAnswer(temperatureReferenceText());
}

// ============================================
// TASK 4: Pure vs Impure Functions
// ============================================

function pureImpureData() {
    const results = [];
    
    // PURE function - same input always gives same output, no side effects
    function double(n) {
        return n * 2;
    }
    
    // IMPURE function - depends on and modifies external state
    let total = 0;
    function addToTotal(n) {
        total = total + n;
        return total;
    }
    
    // Reset total for consistent output
    total = 0;
    
    results.push("=== PURE Function: double(n) ===");
    results.push("double(5) = " + double(5) + " (always returns 10)");
    results.push("double(5) = " + double(5) + " (still returns 10)");
    results.push("double(5) = " + double(5) + " (always 10, predictable!)");
    
    results.push("");
    results.push("=== IMPURE Function: addToTotal(n) ===");
    results.push("addToTotal(5) = " + addToTotal(5) + " (total becomes 5)");
    results.push("addToTotal(5) = " + addToTotal(5) + " (total becomes 10)");
    results.push("addToTotal(5) = " + addToTotal(5) + " (total becomes 15)");
    
    results.push("");
    results.push("=== Which is easier to reason about? ===");
    results.push("✅ The PURE function is easier to reason about!");
    results.push("");
    results.push("Why?");
    results.push("• Pure functions always give the same output for the same input");
    results.push("• They don't modify external state (no side effects)");
    results.push("• They are predictable and testable");
    results.push("• Impure functions depend on previous calls, making them harder to debug");
    
    return results;
}

function pureImpureReferenceText() {
    return pureImpureData().join('\n');
}

function logPureImpureOnly() {
    emitConsoleAnswer(pureImpureReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    const results = [];
    
    // km to miles
    const kmToMiles = km => km * 0.621;
    
    // GST amount
    const gstAmount = (price, rate = 18) => price * rate / 100;
    
    // Full name
    const fullName = (first, last) => first + " " + last;
    
    // isAdult
    const isAdult = age => age >= 18;
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. kmToMiles(10 km) = " + kmToMiles(10) + " miles");
    results.push("   kmToMiles(50 km) = " + kmToMiles(50) + " miles");
    results.push("   kmToMiles(100 km) = " + kmToMiles(100) + " miles");
    
    results.push("");
    results.push("2. gstAmount(1000) = ₹" + gstAmount(1000) + " (18% default)");
    results.push("   gstAmount(500, 12) = ₹" + gstAmount(500, 12) + " (12% GST)");
    results.push("   gstAmount(2000, 28) = ₹" + gstAmount(2000, 28) + " (28% GST)");
    
    results.push("");
    results.push("3. fullName('John', 'Wick') = " + fullName("John", "Wick"));
    results.push("   fullName('Priya', 'Sharma') = " + fullName("Priya", "Sharma"));
    results.push("   fullName('Rahul', 'Kumar') = " + fullName("Rahul", "Kumar"));
    
    results.push("");
    results.push("4. isAdult(16) = " + isAdult(16) + " (16 is not adult)");
    results.push("   isAdult(18) = " + isAdult(18) + " (18 is adult)");
    results.push("   isAdult(25) = " + isAdult(25) + " (25 is adult)");
    
    results.push("");
    results.push("📖 Recommended Reading:");
    results.push("• https://javascript.info/function-basics");
    results.push("• https://javascript.info/arrow-functions-basics");
    
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
    const isExpanded = contentElement.classList.contains('show');
    
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

const consoleLoggers = {
    rectangle: logRectangleOnly,
    greeting: logGreetingOnly,
    temperature: logTemperatureOnly,
    pureimpure: logPureImpureOnly,
    practice: logPracticeOnly
};

// ============================================
// ACCORDION FUNCTIONALITY for Homework Tasks
// ============================================

function wireAccordions() {
    const cards = document.querySelectorAll('.stack-layout .expandable-card');
    
    cards.forEach(function(card) {
        const header = card.querySelector('.card-header');
        const content = card.querySelector('.card-content');
        const icon = card.querySelector('.toggle-icon');
        
        if (!header || !content || !icon) return;
        
        header.addEventListener('click', function(e) {
            e.stopPropagation();
            const wasOpen = content.classList.contains('expanded');
            const open = content.classList.toggle('expanded');
            icon.textContent = open ? '▲' : '▼';
            
            // When opening a card, run its corresponding console logger
            if (open && !wasOpen) {
                const key = card.getAttribute('data-log-task');
                var fn = key && consoleLoggers[key];
                if (fn) fn();
            }
        });
        
        header.style.cursor = 'pointer';
    });
}

// ============================================
// INITIALIZE PAGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Set Class Work content
    const classWorkTasks = document.getElementById('classWorkTasks');
    if (classWorkTasks) {
        classWorkTasks.innerHTML = buildClassWorkHTML();
    }
    
    // Set reference text for each homework task
    const outRectangle = document.getElementById('outRectangle');
    const outGreeting = document.getElementById('outGreeting');
    const outTemperature = document.getElementById('outTemperature');
    const outPureImpure = document.getElementById('outPureImpure');
    const outPractice = document.getElementById('outPractice');
    
    if (outRectangle) outRectangle.textContent = rectangleReferenceText();
    if (outGreeting) outGreeting.textContent = greetingReferenceText();
    if (outTemperature) outTemperature.textContent = temperatureReferenceText();
    if (outPureImpure) outPureImpure.textContent = pureImpureReferenceText();
    if (outPractice) outPractice.textContent = practiceReferenceText();
    
    // Set up Class Work expand/collapse
    const classWorkHeader = document.getElementById('classWorkHeader');
    const classWorkContent = document.getElementById('classWorkContent');
    const classWorkIcon = document.getElementById('classWorkIcon');
    
    if (classWorkHeader && classWorkContent && classWorkIcon) {
        classWorkHeader.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleClassWork(classWorkContent, classWorkIcon);
        });
        classWorkHeader.style.cursor = 'pointer';
    }
    
    // Start collapsed
    if (classWorkContent) classWorkContent.classList.remove('show');
    if (classWorkIcon) classWorkIcon.textContent = '▼';
    
    // Set up homework task accordions
    wireAccordions();
    
});

// ============================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ============================================

window.goBack = goBack;
window.toggleClassWork = toggleClassWork;

// Expose functions for console testing
window.areaRegular = function(l, w) { return l * w; };
window.areaArrow = (l, w) => l * w;
window.greetWithDefault = (name = "Guest") => "Hello, " + name + "!";
window.cToF = celsius => celsius * 9/5 + 32;
window.double = n => n * 2;

let globalTotal = 0;
window.addToTotalGlobal = function(n) {
    globalTotal = globalTotal + n;
    return globalTotal;
};
window.kmToMiles = km => km * 0.621;
window.gstAmount = (price, rate = 18) => price * rate / 100;
window.fullName = (first, last) => first + " " + last;
window.isAdult = age => age >= 18;