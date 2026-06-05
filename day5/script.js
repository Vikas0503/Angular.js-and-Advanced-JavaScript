// ============================================
// DAY 5 - LOOPS & ITERATION
// Class Work: for...of, for loop, for...in, while
// Homework: Multiplication Table, Sum with while, for...of with Names, Object Inspector
// ============================================

// ----- Helper Functions -----
function goBack() {
    window.location.href = '../index.html';
}

function lines(...parts) {
    return parts.join('\n');
}

// ============================================
// CLASS WORK CONTENT
// ============================================

// Example 1: for...of with array
const fruits = ["apple", "banana", "orange"];
let fruitsOutput = "";
for (let f of fruits) {
    fruitsOutput += f + "\n";
}

// Example 2: for loop with string
const name = "vixky";
let nameOutput = "";
for (let i = 0; i < name.length; i++) {
    nameOutput += name[i] + "\n";
}

// Example 3: for loop with Object.keys()
const student = { name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech" };
const keys = Object.keys(student);
let studentOutput = "";
for (let k = 0; k < keys.length; k++) {
    studentOutput += keys[k] + " : " + student[keys[k]] + "\n";
}

// Example 4: Multiplication table with for loop
let val = 7;
let tableOutput = "";
for (let i = 1; i <= 10; i++) {
    tableOutput += val + " * " + i + " = " + (val * i) + "\n";
}

function buildClassWorkHTML() {
    return `
        <div class="task">
            <div class="task-title">🍎 for...of with Array</div>
            <pre><code>const fruits = ["apple", "banana", "orange"];
for(let f of fruits) {
    console.log(f);
}</code></pre>
            <div class="output">${fruitsOutput}</div>
            <span class="badge">✓ for...of iterates over array values directly</span>
        </div>
        
        <div class="task">
            <div class="task-title">📝 for loop with String</div>
            <pre><code>const name = "vixky";
for(let i = 0; i < name.length; i++) {
    console.log(name[i]);
}</code></pre>
            <div class="output">${nameOutput}</div>
            <span class="badge">✓ Strings are indexable like arrays</span>
        </div>
        
        <div class="task">
            <div class="task-title">📚 for loop with Object.keys()</div>
            <pre><code>const student = {name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech"};
const keys = Object.keys(student);
for(let k = 0; k < keys.length; k++) {
    console.log(keys[k], " : ", student[keys[k]]);
}</code></pre>
            <div class="output">${studentOutput}</div>
            <span class="badge">💡 Object.keys() returns array of property names</span>
        </div>
        
        <div class="task">
            <div class="task-title">✖️ Multiplication Table (for loop)</div>
            <pre><code>let val = 7;
for(let i = 1; i <= 10; i++) {
    console.log(val + " * " + i + " = " + (val * i));
}</code></pre>
            <div class="output">${tableOutput}</div>
            <span class="badge">✓ Template literals make formatting clean!</span>
        </div>
    `;
}

// ============================================
// TASK 1: Multiplication Table (for loop)
// ============================================

function multiplicationData() {
    const results = [];
    const num = 7;
    
    results.push("=== Multiplication Table of 7 ===");
    for (let i = 1; i <= 10; i++) {
        results.push(num + " x " + i + " = " + (num * i));
    }
    
    results.push("");
    results.push("=== BONUS: EVEN multiples of 7 ===");
    for (let i = 1; i <= 10; i++) {
        if ((num * i) % 2 === 0) {
            results.push(num + " x " + i + " = " + (num * i) + " (even)");
        }
    }
    
    return { title: 'Task 1: Multiplication Table', body: results };
}

function multiplicationReferenceText() {
    return multiplicationData().body.join('\n');
}

function logMultiplicationOnly() {
    emitConsoleAnswer(multiplicationReferenceText());
}

// ============================================
// TASK 2: Sum with while loop
// ============================================

function sumWhileData() {
    const results = [];
    
    // Sum of 1 to 100
    let sum1 = 0;
    let i1 = 1;
    while (i1 <= 100) {
        sum1 += i1;
        i1++;
    }
    results.push("Sum of numbers 1 to 100: " + sum1);
    
    // Bonus: Sum of ODD numbers only
    let sumOdd = 0;
    let i2 = 1;
    while (i2 <= 100) {
        if (i2 % 2 !== 0) {
            sumOdd += i2;
        }
        i2++;
    }
    results.push("Sum of ODD numbers 1 to 100: " + sumOdd);
    
    return { title: 'Task 2: Sum with while loop', body: results };
}

function sumWhileReferenceText() {
    return sumWhileData().body.join('\n');
}

function logSumWhileOnly() {
    emitConsoleAnswer(sumWhileReferenceText());
}

// ============================================
// TASK 3: for...of with Names
// ============================================

function forOfNamesData() {
    const results = [];
    const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];
    
    results.push("=== All Names ===");
    for (let name of names) {
        results.push("• " + name);
    }
    
    results.push("");
    results.push("=== Names longer than 4 characters ===");
    let count = 0;
    for (let name of names) {
        if (name.length > 4) {
            results.push("• " + name + " (" + name.length + " chars)");
            count++;
        }
    }
    results.push("Total count: " + count + " name(s) longer than 4 characters");
    
    results.push("");
    results.push("=== BONUS: for...of on string 'Jaipur' ===");
    const city = "Jaipur";
    for (let char of city) {
        results.push("Character: " + char);
    }
    
    return { title: 'Task 3: for...of with Names', body: results };
}

function forOfNamesReferenceText() {
    return forOfNamesData().body.join('\n');
}

function logForOfNamesOnly() {
    emitConsoleAnswer(forOfNamesReferenceText());
}

// ============================================
// TASK 4: Object Inspector with for...in
// ============================================

function objectInspectorData() {
    const results = [];
    const student = { name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech" };
    
    results.push("=== Object Properties (for...in) ===");
    let count = 0;
    for (let key in student) {
        results.push(key + ": " + student[key]);
        count++;
    }
    
    results.push("");
    results.push("=== Total Properties Count: " + count + " ===");
    
    results.push("");
    results.push("=== BONUS: Alternative using Object.keys() ===");
    const keysList = Object.keys(student);
    results.push("Property names: " + keysList.join(", "));
    results.push("Number of properties: " + keysList.length);
    
    return { title: 'Task 4: Object Inspector', body: results };
}

function objectInspectorReferenceText() {
    return objectInspectorData().body.join('\n');
}

function logObjectInspectorOnly() {
    emitConsoleAnswer(objectInspectorReferenceText());
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
    multiplication: logMultiplicationOnly,
    sumwhile: logSumWhileOnly,
    forofnames: logForOfNamesOnly,
    objectinspector: logObjectInspectorOnly
};

// ============================================
// ACCORDION FUNCTIONALITY for Homework Tasks
// ============================================

function wireAccordions() {
    const cards = document.querySelectorAll('.stack-layout .expandable-card');
    
    cards.forEach((card) => {
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
                const fn = key && consoleLoggers[key];
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
    const outMultiplication = document.getElementById('outMultiplication');
    const outSumWhile = document.getElementById('outSumWhile');
    const outForOfNames = document.getElementById('outForOfNames');
    const outObjectInspector = document.getElementById('outObjectInspector');
    
    if (outMultiplication) outMultiplication.textContent = multiplicationReferenceText();
    if (outSumWhile) outSumWhile.textContent = sumWhileReferenceText();
    if (outForOfNames) outForOfNames.textContent = forOfNamesReferenceText();
    if (outObjectInspector) outObjectInspector.textContent = objectInspectorReferenceText();
    
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

// Homework functions exposed for console testing
window.multiplicationTable = function(num) {
    if (num === undefined) num = 7;
    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
};

window.sumWithWhile = function() {
    let sum = 0;
    let i = 1;
    while (i <= 100) {
        sum += i;
        i++;
    }
    console.log(sum);
    return sum;
};

window.sumOddWithWhile = function() {
    let sum = 0;
    let i = 1;
    while (i <= 100) {
        if (i % 2 !== 0) sum += i;
        i++;
    }
    console.log(sum);
    return sum;
};

window.printNames = function() {
    const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];
    for (let name of names) console.log(name);

    let count = 0;
    for (let name of names) {
        if (name.length > 4) count++;
    }
    console.log(count);
};

window.inspectObject = function() {
    const studentObj = { name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech" };
    for (let key in studentObj) {
        console.log(key + ": " + studentObj[key]);
    }
    console.log(Object.keys(studentObj).length);
};