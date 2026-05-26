// ============================================
// ADVANCED DAY 7 - ASYNC / AWAIT
// Topics: async functions, await, error handling, sequential vs parallel, forEach trap
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
        '<div class="task-title">🏷️ async Always Returns a Promise</div>' +
        '<pre><code>async function greet() {\n' +
        '  return "Namaste";\n' +
        '}\n\n' +
        'const result = greet();\n' +
        'console.log(result); // Promise { "Namaste" }\n\n' +
        'result.then((msg) => console.log(msg)); // "Namaste"\n\n' +
        '// Equivalent without async sugar:\n' +
        'function greetOld() {\n' +
        '  return Promise.resolve("Namaste");\n' +
        '}</code></pre>' +
        '<span class="badge">✓ async functions ALWAYS return a Promise, even with plain return values</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⏸️ await Pauses the async Function</div>' +
        '<pre><code>function fetchUser(id) {\n' +
        '  return new Promise((resolve) => {\n' +
        '    setTimeout(() => resolve({ id, name: "Priya" }), 500);\n' +
        '  });\n' +
        '}\n\n' +
        'async function withAwait() {\n' +
        '  const user = await fetchUser(7); // pauses here ~500ms\n' +
        '  console.log("got:", user); // then continues\n' +
        '}</code></pre>' +
        '<span class="badge">✓ await pauses ONLY its function — other code keeps running</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⚠️ try/catch for Async Errors</div>' +
        '<pre><code>async function showUser(id) {\n' +
        '  try {\n' +
        '    const user = await fetchUser(id);\n' +
        '    console.log("got:", user);\n' +
        '  } catch (err) {\n' +
        '    console.error("failed:", err.message);\n' +
        '  } finally {\n' +
        '    console.log("done");\n' +
        '  }\n' +
        '}</code></pre>' +
        '<span class="badge">✓ try/catch works with await just like with synchronous code</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⚡ Sequential vs Parallel</div>' +
        '<pre><code>// SLOW — sequential (3 seconds total)\n' +
        'async function slow() {\n' +
        '  const a = await fetchProduct(1); // wait 1s\n' +
        '  const b = await fetchProduct(2); // then 1s\n' +
        '  const c = await fetchProduct(3); // then 1s\n' +
        '  // Total: ~3000ms\n' +
        '}\n\n' +
        '// FAST — parallel (1 second total)\n' +
        'async function fast() {\n' +
        '  const [a, b, c] = await Promise.all([\n' +
        '    fetchProduct(1),\n' +
        '    fetchProduct(2),\n' +
        '    fetchProduct(3),\n' +
        '  ]); // all start at once! Total: ~1000ms\n' +
        '}</code></pre>' +
        '<span class="badge">✓ Use Promise.all for independent async operations</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🐛 The forEach Trap</div>' +
        '<pre><code>// BUG — finishes before any fetch completes\n' +
        'async function bug() {\n' +
        '  ids.forEach(async (id) => {\n' +
        '    await fetchProduct(id); // Promise ignored by forEach\n' +
        '  });\n' +
        '  console.log("end"); // logs BEFORE any "got"\n' +
        '}\n\n' +
        '// FIX 1 — for...of (sequential)\n' +
        'for (const id of ids) { await fetchProduct(id); }\n\n' +
        '// FIX 2 — Promise.all + map (parallel)\n' +
        'await Promise.all(ids.map(id => fetchProduct(id)));</code></pre>' +
        '<span class="badge">✓ forEach ignores Promise returns; use for...of or Promise.all instead</span>' +
        '</div>';
}

// ============================================
// MOCK ASYNC FUNCTIONS
// ============================================

function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: id, name: "User " + id }), 300);
    });
}

function fetchOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve([
            { id: 1, item: "Laptop" },
            { id: 2, item: "Mouse" }
        ]), 300);
    });
}

function fetchPrice(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: id, price: 100 }), 500);
    });
}

// ============================================
// TASK 1: Convert .then to async/await
// ============================================

async function showOrders(id) {
    try {
        const user = await fetchUser(id);
        console.log("User fetched:", user);
        const orders = await fetchOrders(user.id);
        console.log("Orders fetched:", orders);
        return orders.length;
    } catch (err) {
        console.error("Error:", err.message);
        throw err;
    }
}

function convertData() {
    var results = [];
    
    results.push("=== Task 1: Convert .then to async/await ===");
    results.push("");
    results.push("// Original .then chain:");
    results.push("fetchUser(7).then(u => fetchOrders(u.id))");
    results.push("  .then(orders => console.log(orders.length))");
    results.push("  .catch(e => console.error(e));");
    results.push("");
    results.push("// Converted async/await version:");
    results.push("async function showOrders(id) {");
    results.push("  try {");
    results.push("    const user = await fetchUser(id);");
    results.push("    const orders = await fetchOrders(user.id);");
    results.push("    return orders.length;");
    results.push("  } catch (err) {");
    results.push("    console.error('Error:', err.message);");
    results.push("  }");
    results.push("}");
    
    return results;
}

function convertReferenceText() {
    return convertData().join('\n');
}

function logConvertOnly() {
    console.clear();
    console.log("--- Task 1: Convert .then to async/await ---");
    console.log(convertReferenceText());
}

// ============================================
// TASK 2: Sequential vs Parallel Timing
// ============================================

async function slowFetch() {
    const start = Date.now();
    const a = await fetchPrice(1);
    const b = await fetchPrice(2);
    const c = await fetchPrice(3);
    const duration = Date.now() - start;
    return { duration, results: [a, b, c] };
}

async function fastFetch() {
    const start = Date.now();
    const [a, b, c] = await Promise.all([
        fetchPrice(1),
        fetchPrice(2),
        fetchPrice(3)
    ]);
    const duration = Date.now() - start;
    return { duration, results: [a, b, c] };
}

function timingData() {
    var results = [];
    
    results.push("=== Task 2: Sequential vs Parallel Timing ===");
    results.push("");
    results.push("fetchPrice(id) takes 500ms per call");
    results.push("");
    results.push("SEQUENTIAL (await each separately):");
    results.push("  Time = 500 + 500 + 500 = ~1500ms");
    results.push("");
    results.push("PARALLEL (Promise.all):");
    results.push("  Time = max(500, 500, 500) = ~500ms");
    results.push("");
    results.push("Rule: Use sequential when each step depends on previous result.");
    results.push("Use Promise.all for independent operations.");
    
    return results;
}

function timingReferenceText() {
    return timingData().join('\n');
}

function logTimingOnly() {
    console.clear();
    console.log("--- Task 2: Sequential vs Parallel Timing ---");
    console.log(timingReferenceText());
}

// ============================================
// TASK 3: Fix the forEach Trap
// ============================================

async function buggyForEach(ids, outputElement) {
    const start = Date.now();
    ids.forEach(async (id) => {
        const result = await fetchPrice(id);
        outputElement.push({ id: id, price: result.price, time: Date.now() - start });
    });
    return { duration: Date.now() - start, results: [] };
}

async function forOfFix(ids, outputArray) {
    const start = Date.now();
    const results = [];
    for (const id of ids) {
        const result = await fetchPrice(id);
        results.push({ id: id, price: result.price, time: Date.now() - start });
        outputArray.push({ id: id, price: result.price, time: Date.now() - start });
    }
    return { duration: Date.now() - start, results: results };
}

async function promiseAllFix(ids, outputArray) {
    const start = Date.now();
    const promises = ids.map(id => fetchPrice(id));
    const results = await Promise.all(promises);
    results.forEach((result, index) => {
        outputArray.push({ id: ids[index], price: result.price, time: Date.now() - start });
    });
    return { duration: Date.now() - start, results: results };
}

function forEachData() {
    var results = [];
    
    results.push("=== Task 3: Fix the forEach Trap ===");
    results.push("");
    results.push("THE PROBLEM:");
    results.push("  forEach does NOT wait for async/await");
    results.push("  The function returns immediately, promises run in background");
    results.push("");
    results.push("FIX 1 — for...of (sequential):");
    results.push("  for (const id of ids) {");
    results.push("    await fetchPrice(id);");
    results.push("  }");
    results.push("");
    results.push("FIX 2 — Promise.all + map (parallel):");
    results.push("  await Promise.all(ids.map(id => fetchPrice(id)));");
    
    return results;
}

function forEachReferenceText() {
    return forEachData().join('\n');
}

function logForEachOnly() {
    console.clear();
    console.log("--- Task 3: Fix the forEach Trap ---");
    console.log(forEachReferenceText());
}

// ============================================
// BONUS: Retry with async/await
// ============================================

async function retry(fn, attempts) {
    let lastError;
    for (let i = 0; i < attempts; i++) {
        try {
            return await fn();
        } catch (err) {
            lastError = err;
            console.log(`Attempt ${i + 1} failed: ${err.message}`);
            if (i === attempts - 1) throw lastError;
        }
    }
}

// Flaky function that succeeds with 50% probability
let flakyCallCount = 0;
async function flakySuccess() {
    flakyCallCount++;
    await new Promise(r => setTimeout(r, 100));
    if (Math.random() > 0.5) {
        return { success: true, attempt: flakyCallCount };
    }
    throw new Error("Random failure");
}

function retryData() {
    var results = [];
    
    results.push("=== Bonus: Retry with async/await ===");
    results.push("");
    results.push("async function retry(fn, attempts) {");
    results.push("  let lastError;");
    results.push("  for (let i = 0; i < attempts; i++) {");
    results.push("    try {");
    results.push("      return await fn();");
    results.push("    } catch (err) {");
    results.push("      lastError = err;");
    results.push("      console.log(`Attempt ${i + 1} failed`);");
    results.push("      if (i === attempts - 1) throw lastError;");
    results.push("    }");
    results.push("  }");
    results.push("}");
    
    return results;
}

function retryReferenceText() {
    return retryData().join('\n');
}

function logRetryOnly() {
    console.clear();
    console.log("--- Bonus: Retry with async/await ---");
    console.log(retryReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. fetchAllUsers(ids) — parallel:");
    results.push("   async function fetchAllUsers(ids) {");
    results.push("     return await Promise.all(ids.map(id => fetchUser(id)));");
    results.push("   }");
    results.push("");
    results.push("2. withTimeout(promise, ms):");
    results.push("   async function withTimeout(promise, ms) {");
    results.push("     const timeout = new Promise((_, reject) => {");
    results.push("       setTimeout(() => reject(new Error('timeout')), ms);");
    results.push("     });");
    results.push("     return await Promise.race([promise, timeout]);");
    results.push("   }");
    results.push("");
    results.push("3. Sequential delays:");
    results.push("   async function sequentialDelays(delays) {");
    results.push("     for (const ms of delays) {");
    results.push("       await new Promise(r => setTimeout(r, ms));");
    results.push("       console.log(`Waited ${ms}ms`);");
    results.push("     }");
    results.push("   }");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/async-await");
    
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
    convert: logConvertOnly,
    timing: logTimingOnly,
    foreach: logForEachOnly,
    retry: logRetryOnly,
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
    // Task 1 Demo: Convert .then to async/await
    var convertBtn = document.getElementById('run-convert-demo');
    var convertResult = document.getElementById('convert-result');
    
    if (convertBtn && convertResult) {
        convertBtn.addEventListener('click', async function() {
            var output = [];
            output.push("=== Convert .then to async/await Demo ===");
            output.push("");
            output.push("Calling showOrders(7)...");
            output.push("");
            
            try {
                var orderCount = await showOrders(7);
                output.push("✅ Success! Order count: " + orderCount);
                output.push("");
                output.push("The async/await version:");
                output.push("• Reads like synchronous code");
                output.push("• Uses try/catch for error handling");
                output.push("• No nested .then chains");
            } catch (err) {
                output.push("❌ Error: " + err.message);
            }
            
            convertResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: Sequential vs Parallel
    var sequentialBtn = document.getElementById('run-sequential-demo');
    var parallelBtn = document.getElementById('run-parallel-demo');
    var timingResult = document.getElementById('timing-result');
    
    if (sequentialBtn && timingResult) {
        sequentialBtn.addEventListener('click', async function() {
            var output = [];
            output.push("=== Sequential Fetch (slow) ===");
            output.push("");
            output.push("Fetching 3 products one after another...");
            output.push("Each fetch takes 500ms");
            output.push("");
            
            var result = await slowFetch();
            output.push("✅ Completed in " + result.duration + "ms");
            output.push("Expected: ~1500ms");
            output.push("");
            output.push("Results:");
            result.results.forEach(r => output.push(`  Product ${r.id}: ₹${r.price}`));
            
            timingResult.textContent = output.join('\n');
        });
    }
    
    if (parallelBtn && timingResult) {
        parallelBtn.addEventListener('click', async function() {
            var output = [];
            output.push("=== Parallel Fetch (fast) ===");
            output.push("");
            output.push("Fetching 3 products simultaneously...");
            output.push("Each fetch takes 500ms");
            output.push("");
            
            var result = await fastFetch();
            output.push("✅ Completed in " + result.duration + "ms");
            output.push("Expected: ~500ms");
            output.push("");
            output.push("Results:");
            result.results.forEach(r => output.push(`  Product ${r.id}: ₹${r.price}`));
            
            timingResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: forEach Trap
    var forEachBugBtn = document.getElementById('run-foreach-bug');
    var forOfFixBtn = document.getElementById('run-forof-fix');
    var promiseAllFixBtn = document.getElementById('run-promiseall-fix');
    var foreachResult = document.getElementById('foreach-result');
    
    if (forEachBugBtn && foreachResult) {
        forEachBugBtn.addEventListener('click', async function() {
            var output = [];
            output.push("=== forEach with async (BUGGY) ===");
            output.push("");
            
            var ids = [1, 2, 3];
            var results = [];
            var start = Date.now();
            
            ids.forEach(async (id) => {
                var res = await fetchPrice(id);
                results.push({ id: id, price: res.price, time: Date.now() - start });
            });
            
            await new Promise(r => setTimeout(r, 600));
            
            output.push("❌ BUG: Function returned immediately!");
            output.push("Results may be incomplete or timing inaccurate.");
            output.push("");
            output.push("forEach does NOT await promises.");
            output.push("Use for...of or Promise.all instead.");
            
            foreachResult.textContent = output.join('\n');
        });
    }
    
    if (forOfFixBtn && foreachResult) {
        forOfFixBtn.addEventListener('click', async function() {
            var output = [];
            output.push("=== for...of Fix (Sequential) ===");
            output.push("");
            
            var ids = [1, 2, 3];
            var results = [];
            var start = Date.now();
            
            for (const id of ids) {
                var res = await fetchPrice(id);
                results.push({ id: id, price: res.price, time: Date.now() - start });
            }
            
            var duration = Date.now() - start;
            output.push("✅ Completed in " + duration + "ms");
            output.push("");
            output.push("Results (in order):");
            results.forEach(r => output.push(`  Product ${r.id}: ₹${r.price} (at ${r.time}ms)`));
            
            foreachResult.textContent = output.join('\n');
        });
    }
    
    if (promiseAllFixBtn && foreachResult) {
        promiseAllFixBtn.addEventListener('click', async function() {
            var output = [];
            output.push("=== Promise.all + map Fix (Parallel) ===");
            output.push("");
            
            var ids = [1, 2, 3];
            var start = Date.now();
            
            var results = await Promise.all(ids.map(id => fetchPrice(id)));
            var duration = Date.now() - start;
            
            output.push("✅ Completed in " + duration + "ms");
            output.push("");
            output.push("Results:");
            results.forEach((res, idx) => output.push(`  Product ${ids[idx]}: ₹${res.price}`));
            output.push("");
            output.push("All requests ran in parallel!");
            
            foreachResult.textContent = output.join('\n');
        });
    }
    
    // Bonus Demo: Retry
    var retryBtn = document.getElementById('run-retry-demo');
    var retryResult = document.getElementById('retry-result');
    
    if (retryBtn && retryResult) {
        retryBtn.addEventListener('click', async function() {
            var output = [];
            output.push("=== Retry Demo (50% success rate) ===");
            output.push("");
            output.push("Calling flaky function with 3 attempts...");
            output.push("");
            
            flakyCallCount = 0;
            try {
                var result = await retry(flakySuccess, 3);
                output.push("✅ Success! Result: " + JSON.stringify(result));
                output.push("Total attempts: " + flakyCallCount);
            } catch (err) {
                output.push("❌ All attempts failed: " + err.message);
            }
            
            retryResult.textContent = output.join('\n');
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
    var outConvert = document.getElementById('outConvert');
    var outTiming = document.getElementById('outTiming');
    var outForEach = document.getElementById('outForEach');
    var outRetry = document.getElementById('outRetry');
    var outPractice = document.getElementById('outPractice');
    
    if (outConvert) outConvert.textContent = convertReferenceText();
    if (outTiming) outTiming.textContent = timingReferenceText();
    if (outForEach) outForEach.textContent = forEachReferenceText();
    if (outRetry) outRetry.textContent = retryReferenceText();
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
    console.log("🔥 ADVANCED DAY 7: Async/Await 🔥");
    console.log("");
    console.log("Class Work topics:");
    console.log("• async functions always return a Promise");
    console.log("• await pauses execution inside async functions");
    console.log("• try/catch for async error handling");
    console.log("• Sequential vs Parallel with Promise.all");
    console.log("• The forEach trap and how to fix it");
    console.log("");
    console.log("💡 Open each task to see explanations and run live demos!");
    console.log("🎮 Click the buttons to see async/await in action!");
});