// ============================================
// DAY 11 - EVENTS & EVENT DELEGATION
// Class Work: addEventListener, event object, form submission, event delegation
// Homework: Click counter, live preview, form handling, event delegation
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
        '<div class="task-title">🎯 addEventListener</div>' +
        '<pre><code>const btn = document.querySelector("#my-btn");\n\n' +
        '// Multiple listeners can be attached — all run\n' +
        'btn.addEventListener("click", () => {\n' +
        '  console.log("Button clicked!");\n' +
        '});\n\n' +
        'btn.addEventListener("click", () => {\n' +
        '  console.log("Second handler also fires");\n' +
        '});</code></pre>' +
        '<span class="badge">✓ addEventListener allows multiple handlers on the same event</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📋 Event Object</div>' +
        '<pre><code>btn.addEventListener("click", (e) => {\n' +
        '  console.log(e.type);            // "click"\n' +
        '  console.log(e.target);          // the button element\n' +
        '  console.log(e.target.textContent);   // its text\n' +
        '  console.log(e.clientX, e.clientY);   // mouse coordinates\n' +
        '});\n\n' +
        '// Input — e.target.value is what the user typed\n' +
        'input.addEventListener("input", (e) => {\n' +
        '  console.log("User typed:", e.target.value);\n' +
        '});\n\n' +
        '// Keyboard — e.key is which key\n' +
        'document.addEventListener("keydown", (e) => {\n' +
        '  console.log("Pressed:", e.key);\n' +
        '});</code></pre>' +
        '<span class="badge">✓ Event object contains useful information about the event</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔄 Event Delegation</div>' +
        '<pre><code>// WITHOUT delegation — one listener per item\n' +
        'document.querySelectorAll("#todo-list li").forEach(li => {\n' +
        '  li.addEventListener("click", () => {\n' +
        '    li.classList.toggle("done");\n' +
        '  });\n' +
        '});\n\n' +
        '// WITH delegation — ONE listener on the parent\n' +
        'const list = document.querySelector("#todo-list");\n' +
        'list.addEventListener("click", (e) => {\n' +
        '  if (e.target.tagName === "LI") {\n' +
        '    e.target.classList.toggle("done");\n' +
        '    console.log("Toggled item");\n' +
        '  }\n' +
        '});\n\n' +
        '// Now even items added LATER work — no extra wiring!</code></pre>' +
        '<span class="badge">✓ Event delegation reduces code and handles dynamic elements</span>' +
        '</div>';
}

// ============================================
// TASK 1: Click Counter
// ============================================

function counterData() {
    var results = [];
    
    results.push("=== Task 1: Click Counter ===");
    results.push("1. Grab #counter-btn and #count using querySelector");
    results.push("2. Initialize counter variable = 0");
    results.push("3. Add click event listener to button");
    results.push("4. On click: increment counter, update span textContent");
    results.push("5. Bonus: After 10 clicks, change button text");
    results.push("");
    results.push("Try clicking the button in the live demo above!");
    
    return results;
}

function counterReferenceText() {
    return counterData().join('\n');
}

function logCounterOnly() {
    console.clear();
    console.log("--- Task 1: Click Counter ---");
    console.log(counterReferenceText());
}

// ============================================
// TASK 2: Live Input Preview
// ============================================

function previewData() {
    var results = [];
    
    results.push("=== Task 2: Live Input Preview ===");
    results.push("1. Grab #live-input and #preview elements");
    results.push("2. Add 'input' event listener to the input field");
    results.push("3. On each keystroke, update preview with current value");
    results.push("4. Bonus: Show 'Start typing...' when input is empty");
    results.push("");
    results.push("Type something in the input field above to see live preview!");
    
    return results;
}

function previewReferenceText() {
    return previewData().join('\n');
}

function logPreviewOnly() {
    console.clear();
    console.log("--- Task 2: Live Input Preview ---");
    console.log(previewReferenceText());
}

// ============================================
// TASK 3: Form preventDefault
// ============================================

function formData() {
    var results = [];
    
    results.push("=== Task 3: Form preventDefault ===");
    results.push("1. Grab form, input, and welcome paragraph");
    results.push("2. Add 'submit' event listener to form");
    results.push("3. Call e.preventDefault() to stop page reload");
    results.push("4. Read input value and create welcome message");
    results.push("5. Bonus: Show error if name field is empty");
    results.push("");
    results.push("Enter your name in the form above and click Submit!");
    
    return results;
}

function formReferenceText() {
    return formData().join('\n');
}

function logFormOnly() {
    console.clear();
    console.log("--- Task 3: Form preventDefault ---");
    console.log(formReferenceText());
}

// ============================================
// TASK 4: Event Delegation on List
// ============================================

function delegationData() {
    var results = [];
    
    results.push("=== Bonus: Event Delegation on List ===");
    results.push("1. Grab #todo-list parent element");
    results.push("2. Add ONE click event listener to the parent");
    results.push("3. Check if e.target.tagName === 'LI'");
    results.push("4. Toggle 'done' class on the clicked li");
    results.push("5. Bonus: Add button that creates new li elements");
    results.push("");
    results.push("Click any task above to toggle it. Add new tasks and they work too!");
    
    return results;
}

function delegationReferenceText() {
    return delegationData().join('\n');
}

function logDelegationOnly() {
    console.clear();
    console.log("--- Bonus: Event Delegation on List ---");
    console.log(delegationReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. Random Background Color:");
    results.push("   - Use Math.random() to generate RGB values (0-255)");
    results.push("   - Set document.body.style.backgroundColor");
    results.push("");
    results.push("2. Input Validation (Red/Green):");
    results.push("   - Add 'input' event listener");
    results.push("   - If value.length < 3: red border/background");
    results.push("   - Else: green border/background");
    results.push("");
    results.push("3. Two Number Sum Form:");
    results.push("   - Prevent default form submission");
    results.push("   - Parse input values as numbers");
    results.push("   - Display sum in a paragraph below");
    results.push("");
    results.push("4. Event Delegation with Dynamic Items:");
    results.push("   - Parent container with click listener");
    results.push("   - Check e.target matches items");
    results.push("   - Log e.target.textContent");
    results.push("   - Add button to append new items dynamically");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/introduction-browser-events");
    results.push("• https://javascript.info/event-delegation");
    
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
    counter: logCounterOnly,
    preview: logPreviewOnly,
    form: logFormOnly,
    delegation: logDelegationOnly,
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
    // Task 1 Demo: Click Counter
    var counterBtn = document.getElementById('counter-demo-btn');
    var countSpan = document.getElementById('count-demo');
    var clickCount = 0;
    
    if (counterBtn && countSpan) {
        counterBtn.addEventListener('click', function() {
            clickCount++;
            countSpan.textContent = clickCount;
            
            if (clickCount >= 10) {
                counterBtn.textContent = "Stop clicking!";
                counterBtn.disabled = true;
            }
            
            console.log("Button clicked! Count: " + clickCount);
        });
    }
    
    // Task 2 Demo: Live Input Preview
    var liveInput = document.getElementById('live-input-demo');
    var previewDiv = document.getElementById('preview-demo');
    
    if (liveInput && previewDiv) {
        liveInput.addEventListener('input', function(e) {
            var value = e.target.value;
            if (value === "") {
                previewDiv.textContent = "Start typing...";
            } else {
                previewDiv.textContent = "You typed: " + value;
            }
            console.log("Input changed: " + value);
        });
    }
    
    // Task 3 Demo: Form preventDefault
    var regForm = document.getElementById('reg-form-demo');
    var nameField = document.getElementById('name-field-demo');
    var welcomeDiv = document.getElementById('welcome-demo');
    
    if (regForm && nameField && welcomeDiv) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = nameField.value.trim();
            
            if (name === "") {
                welcomeDiv.textContent = "Please enter your name";
                console.log("Form submitted with empty name");
            } else {
                welcomeDiv.textContent = "Welcome, " + name + "!";
                console.log("Welcome message shown for: " + name);
            }
        });
    }
    
    // Task 4 Demo: Event Delegation on List
    var todoList = document.getElementById('todo-list-demo');
    var addTodoBtn = document.getElementById('add-todo-demo');
    var taskCounter = 4;
    
    if (todoList) {
        todoList.addEventListener('click', function(e) {
            var target = e.target;
            if (target.tagName === 'LI') {
                target.classList.toggle('done');
                console.log("Toggled: " + target.textContent);
            }
        });
    }
    
    if (addTodoBtn && todoList) {
        addTodoBtn.addEventListener('click', function() {
            var newLi = document.createElement('li');
            newLi.textContent = "New task " + taskCounter;
            todoList.appendChild(newLi);
            taskCounter++;
            console.log("Added new task: " + newLi.textContent);
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
    var outCounter = document.getElementById('outCounter');
    var outPreview = document.getElementById('outPreview');
    var outForm = document.getElementById('outForm');
    var outDelegation = document.getElementById('outDelegation');
    var outPractice = document.getElementById('outPractice');
    
    if (outCounter) outCounter.textContent = counterReferenceText();
    if (outPreview) outPreview.textContent = previewReferenceText();
    if (outForm) outForm.textContent = formReferenceText();
    if (outDelegation) outDelegation.textContent = delegationReferenceText();
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
    console.log("=== Day 11: Events & Event Delegation Ready ===");
    console.log("");
    console.log("Class Work examples:");
    console.log("• addEventListener for multiple handlers");
    console.log("• Event object properties (type, target, clientX/Y)");
    console.log("• Event delegation pattern");
    console.log("");
    console.log("Homework Tasks (click to expand):");
    console.log("• Task 1: Click Counter");
    console.log("• Task 2: Live Input Preview");
    console.log("• Task 3: Form preventDefault");
    console.log("• Bonus: Event Delegation on List");
    console.log("• Practice: Additional tasks");
    console.log("");
    console.log("💡 Click on any homework task header to see the explanation!");
    console.log("🎮 Use the interactive demos to test the code in action!");
});

// ============================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ============================================

window.goBack = goBack;
window.toggleClassWork = toggleClassWork;