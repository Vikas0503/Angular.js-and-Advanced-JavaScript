// ============================================
// ADVANCED DAY 8 - THE EVENT LOOP
// Topics: Single-threaded, microtask vs macrotask, event loop algorithm, blocking
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
        '<div class="task-title">🎯 JavaScript is Single-Threaded</div>' +
        '<pre><code>// One call stack · One thing at a time\n' +
        'console.log("A");\n' +
        'console.log("B");\n' +
        'console.log("C");\n' +
        '// Runs sequentially: A, B, C\n\n' +
        '// Async work is DELEGATED to Web APIs\n' +
        'setTimeout(() => console.log("D"), 0);\n' +
        'console.log("E");\n' +
        '// Output: E, D (D waits in queue)</code></pre>' +
        '<span class="badge">✓ JS has one call stack — async operations are handled by the runtime</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔄 What the Event Loop Does</div>' +
        '<pre><code>// Event Loop Algorithm:\n' +
        '// 1. Wait for call stack to be empty\n' +
        '// 2. Drain ALL microtasks (Promise.then, queueMicrotask)\n' +
        '// 3. Take ONE macrotask (setTimeout, I/O)\n' +
        '// 4. Repeat\n\n' +
        'console.log("1");                     // sync\n' +
        'setTimeout(() => console.log("2"), 0); // macrotask\n' +
        'Promise.resolve().then(() => console.log("3")); // microtask\n' +
        'console.log("4");                     // sync\n' +
        '// Output: 1, 4, 3, 2</code></pre>' +
        '<span class="badge">✓ Microtasks have priority — ALL drain before any macrotask</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📋 Microtask vs Macrotask</div>' +
        '<pre><code>// Microtask examples:\n' +
        'Promise.then/.catch/.finally\n' +
        'queueMicrotask()\n' +
        'MutationObserver\n\n' +
        '// Macrotask examples:\n' +
        'setTimeout, setInterval\n' +
        'I/O operations\n' +
        'UI events\n' +
        'requestAnimationFrame</code></pre>' +
        '<div class="queue-viz">' +
        '<div>Queue Priority:</div>' +
        '<div style="margin-top: 0.3rem;">' +
        '<span class="sync queue-item">1. Sync (Call Stack)</span> → ' +
        '<span class="microtask queue-item">2. Microtasks (all)</span> → ' +
        '<span class="macrotask queue-item">3. Macrotasks (one at a time)</span>' +
        '</div>' +
        '</div>' +
        '<span class="badge">✓ Microtasks always run before macrotasks</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⚠️ Don\'t Block the Loop</div>' +
        '<pre><code>function blocking() {\n' +
        '  const t0 = Date.now();\n' +
        '  while (Date.now() - t0 < 3000) {}\n' +
        '  console.log("done blocking");\n' +
        '}\n\n' +
        'setTimeout(() => console.log("timer"), 0);\n' +
        'blocking();\n' +
        'console.log("after block");\n\n' +
        '// Output:\n' +
        '// (3-second pause)\n' +
        '// done blocking\n' +
        '// after block\n' +
        '// timer</code></pre>' +
        '<div class="warning-box">⚠️ Long-running synchronous code FREEZES your page — UI events, animations, timers all blocked!</div>' +
        '<span class="badge">✓ Use Web Workers or chunked processing for heavy tasks</span>' +
        '</div>';
}

// ============================================
// TASK 1: Predict the Output
// ============================================

function predict1Data() {
    var results = [];
    
    results.push("=== Task 1: Predict the Output ===");
    results.push("");
    results.push("Code:");
    results.push("  console.log('1');");
    results.push("  setTimeout(() => console.log('2'), 0);");
    results.push("  Promise.resolve().then(() => console.log('3'));");
    results.push("  console.log('4');");
    results.push("");
    results.push("OUTPUT: 1, 4, 3, 2");
    results.push("");
    results.push("CLASSIFICATION:");
    results.push("  • Sync: console.log('1'), console.log('4')");
    results.push("  • Microtask: Promise.then → '3'");
    results.push("  • Macrotask: setTimeout → '2'");
    results.push("");
    results.push("EXPLANATION:");
    results.push("  1. All synchronous code runs first: '1', '4'");
    results.push("  2. Then ALL microtasks run: '3'");
    results.push("  3. Then ONE macrotask runs: '2'");
    
    return results;
}

function predict1ReferenceText() {
    return predict1Data().join('\n');
}

function logPredict1Only() {
    emitConsoleAnswer(predict1ReferenceText());
}

// ============================================
// TASK 2: Two Promises and a Timer
// ============================================

function predict2Data() {
    var results = [];
    
    results.push("=== Task 2: Two Promises and a Timer ===");
    results.push("");
    results.push("Code:");
    results.push("  console.log('A');");
    results.push("  setTimeout(() => console.log('B'), 0);");
    results.push("  Promise.resolve().then(() => console.log('C')).then(() => console.log('D'));");
    results.push("  queueMicrotask(() => console.log('E'));");
    results.push("  console.log('F');");
    results.push("");
    results.push("OUTPUT: A, F, C, E, D, B");
    results.push("");
    results.push("EXPLANATION:");
    results.push("  1. Sync: 'A', 'F'");
    results.push("  2. Microtasks queue: [C, E] (C then E order)");
    results.push("  3. Run C → schedules D (adds to microtask queue)");
    results.push("  4. Run E (already queued before D)");
    results.push("  5. Run D");
    results.push("  6. Macrotask: 'B'");
    
    return results;
}

function predict2ReferenceText() {
    return predict2Data().join('\n');
}

function logPredict2Only() {
    emitConsoleAnswer(predict2ReferenceText());
}

// ============================================
// TASK 3: Block the Loop
// ============================================

function blockFor(ms) {
    var start = Date.now();
    while (Date.now() - start < ms) {
        // Busy-wait — blocks the event loop!
    }
}

function blockData() {
    var results = [];
    
    results.push("=== Task 3: Block the Loop ===");
    results.push("");
    results.push("function blockFor(ms) {");
    results.push("  const start = Date.now();");
    results.push("  while (Date.now() - start < ms) {}");
    results.push("}");
    results.push("");
    results.push("setTimeout(() => console.log('timer'), 100);");
    results.push("blockFor(2000);");
    results.push("console.log('after block');");
    results.push("");
    results.push("RESULT: 'timer' appears AFTER 'after block', well after 100ms!");
    results.push("");
    results.push("WHY:");
    results.push("  • blockFor() holds the call stack for 2 seconds");
    results.push("  • During that time, the event loop cannot process any tasks");
    results.push("  • Even though setTimeout was scheduled for 100ms,");
    results.push("    it cannot run until the stack is empty");
    
    return results;
}

function blockReferenceText() {
    return blockData().join('\n');
}

function logBlockOnly() {
    emitConsoleAnswer(blockReferenceText());
}

// ============================================
// BONUS: Microtask Storm
// ============================================

function stormData() {
    var results = [];
    
    results.push("=== Bonus: Microtask Storm ===");
    results.push("");
    results.push("Scenario: 5 setTimeout macrotasks, one schedules 3 microtasks");
    results.push("");
    results.push("TIMER ORDER: 1, 2, 3, 4, 5 (but 3's microtasks run immediately)");
    results.push("");
    results.push("When Timer 3 runs, it schedules 3 Promise.then microtasks.");
    results.push("These microtasks run BEFORE Timer 4 and Timer 5 macrotasks.");
    results.push("");
    results.push("MICROTASK STARVATION:");
    results.push("  • If microtasks continuously schedule new microtasks,");
    results.push("    macrotasks may never run!");
    results.push("  • This can freeze the event loop.");
    results.push("");
    results.push("Prevention: Use setTimeout for recursion instead of microtasks.");
    
    return results;
}

function stormReferenceText() {
    return stormData().join('\n');
}

function logStormOnly() {
    emitConsoleAnswer(stormReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. Chunk Processor (yielding to event loop):");
    results.push("   function chunk(array, fn, chunkSize) {");
    results.push("     let index = 0;");
    results.push("     function process() {");
    results.push("       const end = Math.min(index + chunkSize, array.length);");
    results.push("       for (let i = index; i < end; i++) fn(array[i]);");
    results.push("       index = end;");
    results.push("       if (index < array.length) setTimeout(process, 0);");
    results.push("     }");
    results.push("     process();");
    results.push("   }");
    results.push("");
    results.push("2. await is a microtask proof:");
    results.push("   async function test() {");
    results.push("     console.log('A');");
    results.push("     await Promise.resolve();");
    results.push("     console.log('B');");
    results.push("   }");
    results.push("   console.log('C');");
    results.push("   setTimeout(() => console.log('D'), 0);");
    results.push("   test();");
    results.push("   console.log('E');");
    results.push("   // Output: C, A, E, B, D");
    results.push("   // 'B' (await continuation) runs before 'D' (setTimeout)");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/event-loop");
    
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
    predict1: logPredict1Only,
    predict2: logPredict2Only,
    block: logBlockOnly,
    storm: logStormOnly,
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
    // Task 1 Demo
    var predict1Btn = document.getElementById('run-predict1-demo');
    var predict1Result = document.getElementById('predict1-result');
    
    if (predict1Btn && predict1Result) {
        predict1Btn.addEventListener('click', function() {
            var output = [];
            output.push("=== Prediction Demo 1 ===");
            output.push("");
            
            var logs = [];
            var originalLog = console.log;
            console.log = function(msg) { logs.push(msg); originalLog(msg); };
            
            output.push("Executing code:");
            output.push("  console.log('1');");
            output.push("  setTimeout(() => console.log('2'), 0);");
            output.push("  Promise.resolve().then(() => console.log('3'));");
            output.push("  console.log('4');");
            output.push("");
            
            console.log('1');
            setTimeout(function() { console.log('2'); }, 0);
            Promise.resolve().then(function() { console.log('3'); });
            console.log('4');
            
            setTimeout(function() {
                console.log = originalLog;
                output.push("ACTUAL OUTPUT: " + logs.join(", "));
                output.push("");
                output.push("✅ Sync runs first ('1', '4') → Microtasks ('3') → Macrotasks ('2')");
                predict1Result.textContent = output.join('\n');
            }, 100);
            
            output.push("Waiting for async operations...");
            predict1Result.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo
    var predict2Btn = document.getElementById('run-predict2-demo');
    var predict2Result = document.getElementById('predict2-result');
    
    if (predict2Btn && predict2Result) {
        predict2Btn.addEventListener('click', function() {
            var output = [];
            output.push("=== Prediction Demo 2 ===");
            output.push("");
            
            var logs = [];
            var originalLog = console.log;
            console.log = function(msg) { logs.push(msg); originalLog(msg); };
            
            output.push("Executing code:");
            output.push("  console.log('A');");
            output.push("  setTimeout(() => console.log('B'), 0);");
            output.push("  Promise.resolve().then(() => console.log('C')).then(() => console.log('D'));");
            output.push("  queueMicrotask(() => console.log('E'));");
            output.push("  console.log('F');");
            output.push("");
            
            console.log('A');
            setTimeout(function() { console.log('B'); }, 0);
            Promise.resolve().then(function() { console.log('C'); }).then(function() { console.log('D'); });
            queueMicrotask(function() { console.log('E'); });
            console.log('F');
            
            setTimeout(function() {
                console.log = originalLog;
                output.push("ACTUAL OUTPUT: " + logs.join(", "));
                output.push("");
                output.push("✅ Expected: A, F, C, E, D, B");
                output.push("   Microtasks run completely before macrotasks!");
                predict2Result.textContent = output.join('\n');
            }, 100);
            
            output.push("Waiting for async operations...");
            predict2Result.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: Block the Loop
    var blockBtn = document.getElementById('run-block-demo');
    var blockResult = document.getElementById('block-result');
    
    if (blockBtn && blockResult) {
        blockBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Block the Loop Demo (2 second freeze!) ===");
            output.push("");
            output.push("setTimeout(() => console.log('timer'), 100);");
            output.push("blockFor(2000); // busy-wait for 2 seconds");
            output.push("console.log('after block');");
            output.push("");
            
            var logs = [];
            var originalLog = console.log;
            console.log = function(msg) { logs.push(msg); originalLog(msg); };
            
            output.push("Running... (Page may freeze temporarily)");
            blockResult.textContent = output.join('\n');
            
            setTimeout(function() { console.log('timer'); }, 100);
            
            var start = Date.now();
            blockFor(2000);
            var blockDuration = Date.now() - start;
            console.log('after block');
            
            setTimeout(function() {
                console.log = originalLog;
                output.push("Block lasted: " + blockDuration + "ms");
                output.push("ACTUAL OUTPUT: " + logs.join(", "));
                output.push("");
                output.push("❌ Timer fired AFTER block finished!");
                output.push("   The call stack was blocked for 2 seconds.");
                output.push("   Event loop couldn't process the timer callback.");
                blockResult.textContent = output.join('\n');
            }, 50);
        });
    }
    
    // Bonus Demo: Microtask Storm
    var stormBtn = document.getElementById('run-storm-demo');
    var stormResult = document.getElementById('storm-result');
    
    if (stormBtn && stormResult) {
        stormBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Microtask Storm Demo ===");
            output.push("");
            output.push("5 timers, timer #3 schedules 3 microtasks");
            output.push("");
            
            var logs = [];
            var originalLog = console.log;
            console.log = function(msg) { logs.push(msg); originalLog(msg); };
            
            for (var i = 1; i <= 5; i++) {
                (function(idx) {
                    setTimeout(function() {
                        console.log("Timer " + idx);
                        if (idx === 3) {
                            console.log("  -> Scheduling 3 microtasks");
                            Promise.resolve().then(function() { console.log("  Microtask 3.1"); });
                            Promise.resolve().then(function() { console.log("  Microtask 3.2"); });
                            Promise.resolve().then(function() { console.log("  Microtask 3.3"); });
                        }
                    }, 0);
                })(i);
            }
            
            setTimeout(function() {
                console.log = originalLog;
                output.push("ACTUAL ORDER:");
                output.push(logs.join("\n"));
                output.push("");
                output.push("📌 Microtasks run IMMEDIATELY within Timer 3's turn!");
                output.push("   They finish before Timer 4 and Timer 5 start.");
                output.push("");
                output.push("⚠️ If microtasks keep scheduling more microtasks,");
                output.push("   macrotasks can be STARVED indefinitely!");
                stormResult.textContent = output.join('\n');
            }, 500);
            
            output.push("Running... (wait for timers)");
            stormResult.textContent = output.join('\n');
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
    var outPredict1 = document.getElementById('outPredict1');
    var outPredict2 = document.getElementById('outPredict2');
    var outBlock = document.getElementById('outBlock');
    var outStorm = document.getElementById('outStorm');
    var outPractice = document.getElementById('outPractice');
    
    if (outPredict1) outPredict1.textContent = predict1ReferenceText();
    if (outPredict2) outPredict2.textContent = predict2ReferenceText();
    if (outBlock) outBlock.textContent = blockReferenceText();
    if (outStorm) outStorm.textContent = stormReferenceText();
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