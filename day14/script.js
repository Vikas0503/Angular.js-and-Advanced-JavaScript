// ============================================
// ADVANCED DAY 2 - SCOPE & CLOSURES
// Topics: Lexical Scope, Scope Chain, Closures, var-in-loop, IIFEs
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
        '<div class="task-title">📍 Lexical (Static) Scope</div>' +
        '<pre><code>const city = "Jaipur";           // global scope\n\n' +
        'function outer() {\n' +
        '  const language = "Hindi";    // outer\'s scope\n' +
        '  function inner() {\n' +
        '    const greeting = "Namaste"; // inner\'s scope\n' +
        '    console.log(greeting, language, city); // can see all three\n' +
        '  }\n' +
        '  inner();\n' +
        '}\n' +
        'outer(); // "Namaste Hindi Jaipur"</code></pre>' +
        '<span class="badge">✓ Scope is determined by WHERE code is written, not where it\'s called</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔗 The Scope Chain</div>' +
        '<pre><code>const a = "global a";\n\n' +
        'function outer() {\n' +
        '  const b = "outer b";\n' +
        '  function inner() {\n' +
        '    const c = "inner c";\n' +
        '    console.log(a); // walks up: inner → outer → global\n' +
        '    console.log(b); // walks up: inner → outer\n' +
        '    console.log(c); // found in current scope\n' +
        '  }\n' +
        '  inner();\n' +
        '  // console.log(c); // ReferenceError — cannot see inward\n' +
        '}\n' +
        'outer();</code></pre>' +
        '<span class="badge">✓ Scope chain searches OUTWARD only — never inward</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🎯 What is a Closure?</div>' +
        '<pre><code>function makeGreeter(name) {\n' +
        '  // name lives in the outer EC\n' +
        '  return function() {\n' +
        '    console.log(`Namaste, ${name}!`);\n' +
        '  };\n' +
        '}\n\n' +
        'const greetPriya = makeGreeter("Priya");\n' +
        'const greetAarav = makeGreeter("Aarav");\n' +
        'greetPriya(); // "Namaste, Priya!" — remembers name\n' +
        'greetAarav(); // "Namaste, Aarav!" — independent closure</code></pre>' +
        '<div class="closure-demo">💡 A closure is a function that remembers variables from the scope where it was created — even after that scope has finished executing.</div>' +
        '<span class="badge">✓ Each call creates a SEPARATE closure with its own variables</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔧 Practical Closure Patterns</div>' +
        '<pre><code>// 1. Counter — private state\n' +
        'function makeCounter() {\n' +
        '  let count = 0;\n' +
        '  return () => ++count;\n' +
        '}\n\n' +
        '// 2. Private variables — bank account\n' +
        'function createAccount(initial) {\n' +
        '  let balance = initial;\n' +
        '  return {\n' +
        '    deposit: (amt) => balance += amt,\n' +
        '    withdraw: (amt) => balance -= amt,\n' +
        '    getBalance: () => balance\n' +
        '  };\n' +
        '}\n\n' +
        '// 3. Memoization — cache expensive results\n' +
        'function memoize(fn) {\n' +
        '  const cache = {};\n' +
        '  return (n) => n in cache ? cache[n] : (cache[n] = fn(n));\n' +
        '}</code></pre>' +
        '<span class="badge">✓ Closures enable data privacy and caching</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🐛 The var-in-Loop Bug</div>' +
        '<pre><code>// THE BUG — using var\n' +
        'for (var i = 0; i < 3; i++) {\n' +
        '  setTimeout(() => console.log(i), 100);\n' +
        '}\n' +
        '// Logs: 3, 3, 3 ← surprising!\n\n' +
        '// FIX — let (block-scoped: fresh i per iteration)\n' +
        'for (let i = 0; i < 3; i++) {\n' +
        '  setTimeout(() => console.log(i), 100);\n' +
        '}\n' +
        '// Logs: 0, 1, 2</code></pre>' +
        '<span class="badge">✓ var is FUNCTION-scoped (one shared i); let is BLOCK-scoped (fresh each iteration)</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📦 IIFE (Immediately Invoked Function Expression)</div>' +
        '<pre><code>// Basic IIFE — runs once, creates private scope\n' +
        '(function() {\n' +
        '  const secret = "hidden"; // not visible outside\n' +
        '  console.log("IIFE ran");\n' +
        '})();\n\n' +
        '// Pre-ES6 module pattern\n' +
        'const counterModule = (function() {\n' +
        '  let count = 0;\n' +
        '  return {\n' +
        '    inc: () => ++count,\n' +
        '    get: () => count\n' +
        '  };\n' +
        '})();</code></pre>' +
        '<span class="badge">✓ IIFEs create private scopes — used before ES6 modules</span>' +
        '</div>';
}

// ============================================
// TASK 1: Build a Counter (Closure)
// ============================================

function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

function counterData() {
    var results = [];
    
    results.push("=== Task 1: Build a Counter ===");
    results.push("");
    results.push("function makeCounter() {");
    results.push("  let count = 0;");
    results.push("  return function() {");
    results.push("    count++;");
    results.push("    return count;");
    results.push("  };");
    results.push("}");
    results.push("");
    results.push("EXPLANATION:");
    results.push("  • The 'count' variable lives in the closure created by makeCounter()");
    results.push("  • It is NOT in the global scope — it's private to each counter instance");
    results.push("  • Between calls, 'count' persists in memory because the returned function");
    results.push("    maintains a reference to its outer Lexical Environment");
    results.push("  • Each counter gets its OWN independent closure with its own 'count'");
    
    return results;
}

function counterReferenceText() {
    return counterData().join('\n');
}

function logCounterOnly() {
    emitConsoleAnswer(counterReferenceText());
}

// ============================================
// TASK 2: Fix the var-in-loop Bug
// ============================================

function varLoopData() {
    var results = [];
    
    results.push("=== Task 2: Fix the var-in-loop Bug ===");
    results.push("");
    results.push("THE BUG (var):");
    results.push("  for (var i = 1; i <= 3; i++) {");
    results.push("    setTimeout(() => console.log(i), 100);");
    results.push("  }");
    results.push("  // Output: 4, 4, 4 (or 3,3,3 depending on loop bounds)");
    results.push("");
    results.push("THE FIX (let):");
    results.push("  for (let i = 1; i <= 3; i++) {");
    results.push("    setTimeout(() => console.log(i), 100);");
    results.push("  }");
    results.push("  // Output: 1, 2, 3");
    results.push("");
    results.push("WHY?");
    results.push("  • var is FUNCTION-scoped — there is only ONE 'i' for the whole loop");
    results.push("  • All three callbacks close over the SAME 'i' variable");
    results.push("  • By the time setTimeout fires, the loop has finished and i = 4");
    results.push("  • let is BLOCK-scoped — each loop iteration gets a FRESH 'i'");
    results.push("  • Each callback closes over its own unique 'i' value");
    
    return results;
}

function varLoopReferenceText() {
    return varLoopData().join('\n');
}

function logVarLoopOnly() {
    emitConsoleAnswer(varLoopReferenceText());
}

// ============================================
// TASK 3: Private Bank Balance (Closure)
// ============================================

function createAccount(initial) {
    let balance = initial;
    let transactionCount = 0;
    
    return {
        deposit: function(amt) {
            transactionCount++;
            balance += amt;
            return balance;
        },
        withdraw: function(amt) {
            transactionCount++;
            balance -= amt;
            return balance;
        },
        getBalance: function() {
            return balance;
        },
        getTransactionCount: function() {
            return transactionCount;
        }
    };
}

function bankData() {
    var results = [];
    
    results.push("=== Task 3: Private Bank Balance ===");
    results.push("");
    results.push("function createAccount(initial) {");
    results.push("  let balance = initial; // PRIVATE — not accessible from outside");
    results.push("  return {");
    results.push("    deposit: (amt) => balance += amt,");
    results.push("    withdraw: (amt) => balance -= amt,");
    results.push("    getBalance: () => balance");
    results.push("  };");
    results.push("}");
    results.push("");
    results.push("PRIVACY:");
    results.push("  • balance is NOT a property of the returned object");
    results.push("  • It lives ONLY in the closure created by createAccount()");
    results.push("  • account.balance returns undefined — truly private!");
    results.push("  • The only way to access/modify balance is via the provided methods");
    
    return results;
}

function bankReferenceText() {
    return bankData().join('\n');
}

function logBankOnly() {
    emitConsoleAnswer(bankReferenceText());
}

// ============================================
// BONUS: Memoizer (Closure Cache)
// ============================================

function memoize(fn) {
    var cache = {};
    return function(n) {
        if (n in cache) {
            console.log("Cache hit for " + n + " — returning cached value");
            return cache[n];
        }
        console.log("Cache miss for " + n + " — computing...");
        cache[n] = fn(n);
        return cache[n];
    };
}

function slowSquare(n) {
    return n * n;
}

function memoizeData() {
    var results = [];
    
    results.push("=== Bonus: Memoizer (Closure Cache) ===");
    results.push("");
    results.push("function memoize(fn) {");
    results.push("  const cache = {}; // closed-over cache, lives across calls");
    results.push("  return function(n) {");
    results.push("    if (n in cache) return cache[n]; // cache hit");
    results.push("    cache[n] = fn(n); // cache miss — compute and store");
    results.push("    return cache[n];");
    results.push("  };");
    results.push("}");
    results.push("");
    results.push("WHERE DOES THE CACHE LIVE?");
    results.push("  • The 'cache' object lives in the closure created by memoize()");
    results.push("  • It persists between function calls because the returned function");
    results.push("    maintains a reference to its outer Lexical Environment");
    results.push("  • Each memoized function gets its OWN independent cache");
    results.push("");
    results.push("EXPECTED OUTPUT:");
    results.push("  • First call with 5 → 'computing...' then 25");
    results.push("  • Second call with 5 → 'cache hit!' then 25 (no computation)");
    results.push("  • Call with 10 → 'computing...' then 100");
    results.push("  • Third call with 5 → 'cache hit!' then 25");
    
    return results;
}

function memoizeReferenceText() {
    return memoizeData().join('\n');
}

function logMemoizeOnly() {
    emitConsoleAnswer(memoizeReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. multiplier(factor):");
    results.push("   function multiplier(factor) {");
    results.push("     return function(n) { return n * factor; };");
    results.push("   }");
    results.push("   const double = multiplier(2);");
    results.push("   const triple = multiplier(3);");
    results.push("   double(5); // 10");
    results.push("   triple(5); // 15");
    results.push("");
    results.push("2. var-in-loop with for...of:");
    results.push("   for (let num of [10, 20, 30]) {");
    results.push("     setTimeout(() => console.log(num), 100);");
    results.push("   }");
    results.push("   // Output: 10, 20, 30 (let creates block scope per iteration)");
    results.push("");
    results.push("3. Bank account with transactionCount:");
    results.push("   Add to createAccount():");
    results.push("   let transactionCount = 0;");
    results.push("   Increment in deposit/withdraw;");
    results.push("   Add getTransactionCount() method");
    results.push("");
    results.push("4. once(fn):");
    results.push("   function once(fn) {");
    results.push("     let called = false;");
    results.push("     let result;");
    results.push("     return function(...args) {");
    results.push("       if (!called) {");
    results.push("         result = fn(...args);");
    results.push("         called = true;");
    results.push("       }");
    results.push("       return result;");
    results.push("     };");
    results.push("   }");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/closure");
    
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
    counter: logCounterOnly,
    varloop: logVarLoopOnly,
    bank: logBankOnly,
    memoize: logMemoizeOnly,
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
    // Task 1 Demo: Counter
    var counterBtn = document.getElementById('run-counter-demo');
    var counterResult = document.getElementById('counter-result');
    
    if (counterBtn && counterResult) {
        counterBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Independent Counters Demo ===");
            output.push("");
            
            var counter1 = makeCounter();
            var counter2 = makeCounter();
            
            output.push("counter1(): " + counter1());
            output.push("counter1(): " + counter1());
            output.push("counter1(): " + counter1());
            output.push("");
            output.push("counter2(): " + counter2());
            output.push("counter2(): " + counter2());
            output.push("");
            output.push("✅ Counters are independent! Each has its own closure with its own 'count'.");
            
            counterResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: var-in-loop
    var varBugBtn = document.getElementById('run-var-bug');
    var letFixBtn = document.getElementById('run-let-fix');
    var varloopResult = document.getElementById('varloop-result');
    
    if (varBugBtn && varloopResult) {
        varBugBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== var version (buggy) ===");
            output.push("Expected? Many think it will log 1,2,3");
            output.push("Actual behavior: all share the SAME i variable");
            output.push("");
            
            var results = [];
            for (var i = 1; i <= 3; i++) {
                setTimeout(function() {
                    results.push(i);
                }, 100);
            }
            
            setTimeout(function() {
                output.push("Output: " + results.join(", "));
                output.push("");
                output.push("❌ All three callbacks closed over the SAME 'i' variable.");
                output.push("By the time they run, i = " + i);
                varloopResult.textContent = output.join('\n');
            }, 200);
            
            output.push("Waiting for setTimeout to complete...");
            varloopResult.textContent = output.join('\n');
        });
    }
    
    if (letFixBtn && varloopResult) {
        letFixBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== let version (fixed) ===");
            output.push("");
            
            var results = [];
            for (let i = 1; i <= 3; i++) {
                setTimeout(function() {
                    results.push(i);
                }, 100);
            }
            
            setTimeout(function() {
                output.push("Output: " + results.join(", "));
                output.push("");
                output.push("✅ Each iteration gets a FRESH 'i' variable!");
                output.push("Each callback closes over its own unique i value.");
                varloopResult.textContent = output.join('\n');
            }, 200);
            
            output.push("Waiting for setTimeout to complete...");
            varloopResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: Bank Account
    var bankBtn = document.getElementById('run-bank-demo');
    var bankResult = document.getElementById('bank-result');
    
    if (bankBtn && bankResult) {
        bankBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Private Bank Account Demo ===");
            output.push("");
            
            var acc = createAccount(1000);
            output.push("Initial balance: " + acc.getBalance());
            output.push("Deposit 500: " + acc.deposit(500));
            output.push("Withdraw 200: " + acc.withdraw(200));
            output.push("");
            output.push("Final balance: " + acc.getBalance());
            output.push("");
            output.push("account.balance: " + acc.balance);
            output.push("✅ balance is PRIVATE! Cannot access directly.");
            output.push("✅ Only deposit/withdraw/getBalance methods can modify it.");
            output.push("Total transactions: " + acc.getTransactionCount());
            
            bankResult.textContent = output.join('\n');
        });
    }
    
    // Bonus Demo: Memoizer
    var memoizeBtn = document.getElementById('run-memoize-demo');
    var memoizeResult = document.getElementById('memoize-result');
    
    if (memoizeBtn && memoizeResult) {
        memoizeBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Memoizer (Closure Cache) Demo ===");
            output.push("");
            
            var computationLog = [];
            var expensiveSquare = function(n) {
                computationLog.push("computing " + n + "^2...");
                return n * n;
            };
            
            var memoizedSquare = memoize(expensiveSquare);
            
            output.push("First call with 5:");
            var result1 = memoizedSquare(5);
            output.push("  Result: " + result1);
            output.push("");
            
            output.push("Second call with 5 (should use cache):");
            var result2 = memoizedSquare(5);
            output.push("  Result: " + result2);
            output.push("");
            
            output.push("Call with 10:");
            var result3 = memoizedSquare(10);
            output.push("  Result: " + result3);
            output.push("");
            
            output.push("Third call with 5 (should use cache):");
            var result4 = memoizedSquare(5);
            output.push("  Result: " + result4);
            output.push("");
            
            output.push("Computation log:");
            for (var i = 0; i < computationLog.length; i++) {
                output.push("  " + computationLog[i]);
            }
            output.push("");
            output.push("✅ The 'cache' object lives in the closure and persists between calls!");
            
            memoizeResult.textContent = output.join('\n');
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
    var outCounter = document.getElementById('outCounter');
    var outVarLoop = document.getElementById('outVarLoop');
    var outBank = document.getElementById('outBank');
    var outMemoize = document.getElementById('outMemoize');
    var outPractice = document.getElementById('outPractice');
    
    if (outCounter) outCounter.textContent = counterReferenceText();
    if (outVarLoop) outVarLoop.textContent = varLoopReferenceText();
    if (outBank) outBank.textContent = bankReferenceText();
    if (outMemoize) outMemoize.textContent = memoizeReferenceText();
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