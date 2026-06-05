// ============================================
// ADVANCED DAY 6 - ASYNC: CALLBACKS & PROMISES
// Topics: Sync vs Async, Callbacks, Callback Hell, Promise states, .then/.catch, Promise combinators
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
        '<div class="task-title">⏱️ Sync vs Async</div>' +
        '<pre><code>// SYNCHRONOUS — top to bottom\n' +
        'console.log("1");\n' +
        'console.log("2");\n' +
        'console.log("3");\n' +
        '// Output: 1, 2, 3\n\n' +
        '// ASYNCHRONOUS — setTimeout schedules\n' +
        'console.log("1");\n' +
        'setTimeout(() => console.log("2"), 0);\n' +
        'console.log("3");\n' +
        '// Output: 1, 3, 2</code></pre>' +
        '<span class="badge">✓ Even with delay 0, async callbacks go through the event loop</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📞 Callbacks</div>' +
        '<pre><code>function fetchUser(id, callback) {\n' +
        '  setTimeout(() => {\n' +
        '    const user = { id, name: "Priya" };\n' +
        '    callback(null, user); // Node-style: (err, data)\n' +
        '  }, 1000);\n' +
        '}\n\n' +
        'fetchUser(7, (err, user) => {\n' +
        '  if (err) { console.error(err); return; }\n' +
        '  console.log("Got user:", user);\n' +
        '});</code></pre>' +
        '<span class="badge">✓ Callbacks are functions passed to be called "when done"</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔺 Callback Hell (Pyramid of Doom)</div>' +
        '<pre><code>fetchUser(7, (err, user) => {\n' +
        '  if (err) { console.error(err); return; }\n' +
        '  fetchOrders(user.id, (err, orders) => {\n' +
        '    if (err) { console.error(err); return; }\n' +
        '    fetchItems(orders[0].id, (err, items) => {\n' +
        '      if (err) { console.error(err); return; }\n' +
        '      console.log(items);\n' +
        '    });\n' +
        '  });\n' +
        '});\n\n' +
        '// Problems: indentation explosion, repeated error handling, hard to modify</code></pre>' +
        '<div class="warning-box">⚠️ This is why Promises exist — to flatten the pyramid!</div>' +
        '<span class="badge">✓ Promises solve callback hell with chaining</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📋 Promise States</div>' +
        '<pre><code>const p = new Promise((resolve, reject) => {\n' +
        '  setTimeout(() => {\n' +
        '    const success = true;\n' +
        '    if (success) resolve("Done!"); // → fulfilled\n' +
        '    else reject(new Error("Oops")); // → rejected\n' +
        '  }, 1000);\n' +
        '});\n\n' +
        '// State flow: pending → fulfilled OR rejected (settled)</code></pre>' +
        '<span class="badge">✓ Promises are immutable once settled</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⛓️ .then / .catch / .finally</div>' +
        '<pre><code>fetchUser(7)\n' +
        '  .then((user) => { console.log("user:", user); return user.id; })\n' +
        '  .then((id) => fetchUser(id + 1))\n' +
        '  .then((nextUser) => console.log("next:", nextUser))\n' +
        '  .catch((err) => console.error("Caught:", err.message))\n' +
        '  .finally(() => console.log("done — always runs"));</code></pre>' +
        '<span class="badge">✓ .then returns a new Promise, enabling chaining</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⚡ Promise Combinators</div>' +
        '<pre><code>// all — wait for all; fail if any fails\n' +
        'Promise.all([p1, p2, p3])\n\n' +
        '// allSettled — wait for all; never fails\n' +
        'Promise.allSettled([p1, p2, p3])\n\n' +
        '// race — first to settle wins\n' +
        'Promise.race([p1, p2])\n\n' +
        '// any — first to FULFILL wins\n' +
        'Promise.any([p1, p2, p3])</code></pre>' +
        '<span class="badge">✓ Combinators handle multiple Promises together</span>' +
        '</div>';
}

// ============================================
// MOCK ASYNC FUNCTIONS
// ============================================

function delayLogCallback(msg, ms, cb) {
    setTimeout(() => {
        console.log(msg);
        cb(null);
    }, ms);
}

function fetchPrice(item, ms) {
    const prices = { pen: 50, book: 200, bag: 800 };
    return new Promise((resolve) => {
        setTimeout(() => resolve({ item: item, price: prices[item] }), ms);
    });
}

// ============================================
// TASK 1: Sync vs Async Output
// ============================================

function syncAsyncData() {
    var results = [];
    
    results.push("=== Task 1: Sync vs Async Output ===");
    results.push("");
    results.push("Code:");
    results.push("  console.log('A');");
    results.push("  setTimeout(() => console.log('B'), 0);");
    results.push("  console.log('C');");
    results.push("  Promise.resolve().then(() => console.log('D'));");
    results.push("");
    results.push("PREDICTED ORDER: A, C, D, B");
    results.push("");
    results.push("EXPLANATION:");
    results.push("  1. Synchronous code runs first: 'A' and 'C'");
    results.push("  2. Promise.then callbacks go to microtask queue (higher priority)");
    results.push("  3. setTimeout callbacks go to macrotask queue (lower priority)");
    results.push("  4. Microtasks run before macrotasks → 'D' before 'B'");
    
    return results;
}

function syncAsyncReferenceText() {
    return syncAsyncData().join('\n');
}

function logSyncAsyncOnly() {
    emitConsoleAnswer(syncAsyncReferenceText());
}

// ============================================
// TASK 2: Promisify a Callback API
// ============================================

function delayLogPromise(msg, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, ms);
    });
}

function promisifyData() {
    var results = [];
    
    results.push("=== Task 2: Promisify a Callback API ===");
    results.push("");
    results.push("// Callback version:");
    results.push("function delayLog(msg, ms, cb) {");
    results.push("  setTimeout(() => { console.log(msg); cb(null); }, ms);");
    results.push("}");
    results.push("");
    results.push("// Promisified version:");
    results.push("function delayLogPromise(msg, ms) {");
    results.push("  return new Promise((resolve) => {");
    results.push("    setTimeout(() => { console.log(msg); resolve(); }, ms);");
    results.push("  });");
    results.push("}");
    results.push("");
    results.push("// Chain usage:");
    results.push("delayLogPromise('1', 300)");
    results.push("  .then(() => delayLogPromise('2', 200))");
    results.push("  .then(() => delayLogPromise('3', 100));");
    
    return results;
}

function promisifyReferenceText() {
    return promisifyData().join('\n');
}

function logPromisifyOnly() {
    emitConsoleAnswer(promisifyReferenceText());
}

// ============================================
// TASK 3: Promise.all in Action
// ============================================

function promiseAllData() {
    var results = [];
    
    results.push("=== Task 3: Promise.all in Action ===");
    results.push("");
    results.push("function fetchPrice(item, ms) {");
    results.push("  const prices = { pen: 50, book: 200, bag: 800 };");
    results.push("  return new Promise(resolve => {");
    results.push("    setTimeout(() => resolve({ item, price: prices[item] }), ms);");
    results.push("  });");
    results.push("}");
    results.push("");
    results.push("// Parallel fetching with Promise.all");
    results.push("const start = Date.now();");
    results.push("Promise.all([");
    results.push("  fetchPrice('pen', 500),");
    results.push("  fetchPrice('book', 700),");
    results.push("  fetchPrice('bag', 300)");
    results.push("]).then(results => {");
    results.push("  const total = results.reduce((sum, r) => sum + r.price, 0);");
    results.push("  console.log('Total:', total);");
    results.push("  console.log('Time:', Date.now() - start, 'ms');");
    results.push("});");
    
    return results;
}

function promiseAllReferenceText() {
    return promiseAllData().join('\n');
}

function logPromiseAllOnly() {
    emitConsoleAnswer(promiseAllReferenceText());
}

// ============================================
// BONUS: Promise.allSettled vs Promise.all
// ============================================

function settledData() {
    var results = [];
    
    results.push("=== Bonus: Promise.allSettled vs Promise.all ===");
    results.push("");
    results.push("const promises = [");
    results.push("  Promise.resolve('ok1'),");
    results.push("  Promise.reject(new Error('fail')),");
    results.push("  Promise.resolve('ok2')");
    results.push("];");
    results.push("");
    results.push("Promise.all(promises):");
    results.push("  → REJECTS immediately when any promise rejects");
    results.push("  → Use when you need ALL to succeed");
    results.push("");
    results.push("Promise.allSettled(promises):");
    results.push("  → Resolves with array of status objects");
    results.push("  → Never rejects — waits for all to settle");
    results.push("  → Use when you need all outcomes, even failures");
    
    return results;
}

function settledReferenceText() {
    return settledData().join('\n');
}

function logSettledOnly() {
    emitConsoleAnswer(settledReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. wait(ms):");
    results.push("   function wait(ms) {");
    results.push("     return new Promise(resolve => setTimeout(resolve, ms));");
    results.push("   }");
    results.push("");
    results.push("2. Flaky fetchData with chaining:");
    results.push("   function fetchData(id) {");
    results.push("     return new Promise((resolve, reject) => {");
    results.push("       Math.random() > 0.5 ? resolve({ id }) : reject(new Error('fail'));");
    results.push("     });");
    results.push("   }");
    results.push("   fetchData(1).then(...).then(...).catch(...);");
    results.push("");
    results.push("3. Timeout with Promise.race:");
    results.push("   function withTimeout(promise, ms) {");
    results.push("     const timeout = new Promise((_, reject) => {");
    results.push("       setTimeout(() => reject(new Error('timeout')), ms);");
    results.push("     });");
    results.push("     return Promise.race([promise, timeout]);");
    results.push("   }");
    results.push("");
    results.push("4. Promise.any for first success:");
    results.push("   Promise.any([flaky1(), flaky2(), flaky3()])");
    results.push("     .then(firstSuccess => console.log(firstSuccess));");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/promise-basics");
    results.push("• https://javascript.info/promise-chaining");
    
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
    syncasync: logSyncAsyncOnly,
    promisify: logPromisifyOnly,
    promiseall: logPromiseAllOnly,
    settled: logSettledOnly,
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
    // Task 1 Demo: Sync vs Async
    var syncAsyncBtn = document.getElementById('run-syncasync-demo');
    var syncAsyncResult = document.getElementById('syncasync-result');
    
    if (syncAsyncBtn && syncAsyncResult) {
        syncAsyncBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Sync vs Async Output Demo ===");
            output.push("");
            output.push("Executing:");
            output.push("  console.log('A');");
            output.push("  setTimeout(() => console.log('B'), 0);");
            output.push("  console.log('C');");
            output.push("  Promise.resolve().then(() => console.log('D'));");
            output.push("");
            
            // Capture console output
            var logs = [];
            var originalLog = console.log;
            console.log = function(msg) {
                logs.push(msg);
                originalLog(msg);
            };
            
            console.log("A");
            setTimeout(() => console.log("B"), 0);
            console.log("C");
            Promise.resolve().then(() => console.log("D"));
            
            setTimeout(function() {
                console.log = originalLog;
                output.push("Actual output order: " + logs.join(", "));
                output.push("");
                output.push("✅ Microtasks (Promise.then) run before macrotasks (setTimeout)");
                output.push("   This is why 'D' appears before 'B'!");
                syncAsyncResult.textContent = output.join('\n');
            }, 100);
            
            output.push("Waiting for async operations...");
            syncAsyncResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: Promisify
    var promisifyBtn = document.getElementById('run-promisify-demo');
    var promisifyResult = document.getElementById('promisify-result');
    
    if (promisifyBtn && promisifyResult) {
        promisifyBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Promisify Demo ===");
            output.push("");
            output.push("Chaining: 1 (300ms) → 2 (200ms) → 3 (100ms)");
            output.push("");
            
            var logs = [];
            var originalLog = console.log;
            console.log = function(msg) {
                logs.push(msg);
                originalLog(msg);
            };
            
            var start = Date.now();
            delayLogPromise('1', 300)
                .then(function() { return delayLogPromise('2', 200); })
                .then(function() { return delayLogPromise('3', 100); })
                .then(function() {
                    console.log = originalLog;
                    output.push("Completed in " + (Date.now() - start) + "ms");
                    output.push("");
                    output.push("Output order: " + logs.join(", "));
                    output.push("");
                    output.push("✅ Promisified version flattened the callback pyramid!");
                    promisifyResult.textContent = output.join('\n');
                });
            
            output.push("Running... (wait ~600ms)");
            promisifyResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: Promise.all
    var promiseAllBtn = document.getElementById('run-promiseall-demo');
    var promiseAllResult = document.getElementById('promiseall-result');
    
    if (promiseAllBtn && promiseAllResult) {
        promiseAllBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Promise.all Demo ===");
            output.push("");
            output.push("Fetching pen (500ms), book (700ms), bag (300ms) in parallel...");
            output.push("");
            
            var start = Date.now();
            Promise.all([
                fetchPrice('pen', 500),
                fetchPrice('book', 700),
                fetchPrice('bag', 300)
            ]).then(function(results) {
                var total = results.reduce(function(sum, r) { return sum + r.price; }, 0);
                var duration = Date.now() - start;
                
                output.push("Results:");
                results.forEach(function(r) {
                    output.push("  " + r.item + ": ₹" + r.price);
                });
                output.push("");
                output.push("Total: ₹" + total);
                output.push("Time taken: " + duration + "ms");
                output.push("");
                output.push("✅ Total time is near the SLOWEST fetch (~700ms), not the sum!");
                output.push("   Parallel execution with Promise.all is much faster.");
                
                promiseAllResult.textContent = output.join('\n');
            });
            
            output.push("Running parallel fetches...");
            promiseAllResult.textContent = output.join('\n');
        });
    }
    
    // Bonus Demo: allSettled vs all
    var settledBtn = document.getElementById('run-settled-demo');
    var settledResult = document.getElementById('settled-result');
    
    if (settledBtn && settledResult) {
        settledBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Promise.allSettled vs Promise.all Demo ===");
            output.push("");
            
            var promises = [
                Promise.resolve('ok1'),
                Promise.reject(new Error('fail')),
                Promise.resolve('ok2')
            ];
            
            output.push("Promises: [resolve('ok1'), reject('fail'), resolve('ok2')]");
            output.push("");
            
            // Promise.all
            output.push("--- Promise.all ---");
            Promise.all(promises)
                .then(function(results) {
                    output.push("✅ Resolved with: " + JSON.stringify(results));
                })
                .catch(function(err) {
                    output.push("❌ Rejected with: " + err.message);
                })
                .finally(function() {
                    output.push("");
                    output.push("--- Promise.allSettled ---");
                    Promise.allSettled(promises)
                        .then(function(results) {
                            output.push("✅ Always resolves!");
                            results.forEach(function(r, i) {
                                if (r.status === 'fulfilled') {
                                    output.push("  Promise " + i + ": fulfilled → " + r.value);
                                } else {
                                    output.push("  Promise " + i + ": rejected → " + r.reason.message);
                                }
                            });
                            output.push("");
                            output.push("📌 When to use:");
                            output.push("  • Promise.all: Need ALL to succeed");
                            output.push("  • Promise.allSettled: Need all outcomes, handle failures individually");
                            settledResult.textContent = output.join('\n');
                        });
                });
            
            output.push("Checking results...");
            settledResult.textContent = output.join('\n');
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
    var outSyncAsync = document.getElementById('outSyncAsync');
    var outPromisify = document.getElementById('outPromisify');
    var outPromiseAll = document.getElementById('outPromiseAll');
    var outSettled = document.getElementById('outSettled');
    var outPractice = document.getElementById('outPractice');
    
    if (outSyncAsync) outSyncAsync.textContent = syncAsyncReferenceText();
    if (outPromisify) outPromisify.textContent = promisifyReferenceText();
    if (outPromiseAll) outPromiseAll.textContent = promiseAllReferenceText();
    if (outSettled) outSettled.textContent = settledReferenceText();
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