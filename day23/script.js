// ============================================
// ADVANCED DAY 11 - ITERATORS & GENERATORS
// Topics: Iterator protocol, [Symbol.iterator], function*, yield, yield*, infinite sequences, two-way communication
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
        '<div class="task-title">🔌 The Iterator Protocol</div>' +
        '<pre><code>const arr = ["a", "b", "c"];\n' +
        'const it = arr[Symbol.iterator]();\n\n' +
        'console.log(it.next()); // { value: "a", done: false }\n' +
        'console.log(it.next()); // { value: "b", done: false }\n' +
        'console.log(it.next()); // { value: "c", done: false }\n' +
        'console.log(it.next()); // { value: undefined, done: true }\n\n' +
        '// for...of is sugar over this protocol\n' +
        'for (const ch of arr) console.log(ch);</code></pre>' +
        '<span class="badge">✓ Iterator = object with next() returning { value, done }</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📦 Make an Object Iterable</div>' +
        '<pre><code>const range = {\n' +
        '  from: 1, to: 5,\n' +
        '  [Symbol.iterator]() {\n' +
        '    let current = this.from;\n' +
        '    const last = this.to;\n' +
        '    return {\n' +
        '      next() {\n' +
        '        if (current <= last) {\n' +
        '          return { value: current++, done: false };\n' +
        '        }\n' +
        '        return { value: undefined, done: true };\n' +
        '      }\n' +
        '    };\n' +
        '  }\n' +
        '};\n\n' +
        'for (const n of range) console.log(n); // 1,2,3,4,5\n' +
        'console.log([...range]); // [1,2,3,4,5]</code></pre>' +
        '<span class="badge">✓ Define [Symbol.iterator] to make any object iterable</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⚡ Generators with function*</div>' +
        '<pre><code>function* simple() {\n' +
        '  yield 1;\n' +
        '  yield 2;\n' +
        '  yield 3;\n' +
        '}\n\n' +
        'const g = simple();\n' +
        'console.log(g.next()); // { value: 1, done: false }\n' +
        'console.log(g.next()); // { value: 2, done: false }\n' +
        'console.log(g.next()); // { value: 3, done: false }\n\n' +
        '// Range generator — much shorter!\n' +
        'function* range(from, to) {\n' +
        '  for (let i = from; i <= to; i++) yield i;\n' +
        '}\n' +
        'console.log([...range(1, 5)]); // [1,2,3,4,5]</code></pre>' +
        '<span class="badge">✓ Generators are iterators with built-in pause/resume via yield</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">♾️ Infinite Sequences</div>' +
        '<pre><code>function* idGen() {\n' +
        '  let id = 1;\n' +
        '  while (true) yield id++;\n' +
        '}\n\n' +
        'const ids = idGen();\n' +
        'console.log(ids.next().value); // 1\n' +
        'console.log(ids.next().value); // 2\n' +
        'console.log(ids.next().value); // 3\n\n' +
        '// Fibonacci — infinite\n' +
        'function* fib() {\n' +
        '  let [a, b] = [0, 1];\n' +
        '  while (true) {\n' +
        '    yield a;\n' +
        '    [a, b] = [b, a + b];\n' +
        '  }\n' +
        '}</code></pre>' +
        '<div class="warning-box">⚠️ Never spread an infinite generator — use take() or break!</div>' +
        '<span class="badge">✓ Generators enable lazy, pull-based infinite sequences</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔄 yield* — Delegating Iteration</div>' +
        '<pre><code>function* flatten(items) {\n' +
        '  for (const item of items) {\n' +
        '    if (Array.isArray(item)) yield* flatten(item);\n' +
        '    else yield item;\n' +
        '  }\n' +
        '}\n\n' +
        'console.log([...flatten([1, [2, [3, [4, 5]]], 6])]);\n' +
        '// [1, 2, 3, 4, 5, 6]</code></pre>' +
        '<span class="badge">✓ yield* delegates to another generator or iterable</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">💬 Two-Way: next(value)</div>' +
        '<pre><code>function* dialog() {\n' +
        '  const name = yield "What\'s your name?";\n' +
        '  const age = yield `Hi ${name}! How old?`;\n' +
        '  return `${name}, ${age}, recorded.`;\n' +
        '}\n\n' +
        'const g = dialog();\n' +
        'console.log(g.next().value);        // "What\'s your name?"\n' +
        'console.log(g.next("Priya").value); // "Hi Priya! How old?"\n' +
        'console.log(g.next(25).value);      // "Priya, 25, recorded."</code></pre>' +
        '<span class="badge">✓ next(value) sends a value back into the generator</span>' +
        '</div>';
}

// ============================================
// TASK 1: Manual Iterator Object
// ============================================

function createRangeIterable(from, to) {
    return {
        from: from,
        to: to,
        [Symbol.iterator]: function() {
            var current = this.from;
            var last = this.to;
            return {
                next: function() {
                    if (current <= last) {
                        return { value: current++, done: false };
                    }
                    return { value: undefined, done: true };
                }
            };
        }
    };
}

function manualData() {
    var results = [];
    
    results.push("=== Task 1: Manual Iterator Object ===");
    results.push("");
    results.push("function createRangeIterable(from, to) {");
    results.push("  return {");
    results.push("    from, to,");
    results.push("    [Symbol.iterator]() {");
    results.push("      let current = this.from;");
    results.push("      const last = this.to;");
    results.push("      return {");
    results.push("        next() {");
    results.push("          if (current <= last) {");
    results.push("            return { value: current++, done: false };");
    results.push("          }");
    results.push("          return { value: undefined, done: true };");
    results.push("        }");
    results.push("      };");
    results.push("    }");
    results.push("  };");
    results.push("}");
    results.push("");
    results.push("// Usage:");
    results.push("const range = createRangeIterable(3, 7);");
    results.push("for (const n of range) console.log(n); // 3,4,5,6,7");
    results.push("console.log([...createRangeIterable(1, 3)]); // [1,2,3]");
    
    return results;
}

function manualReferenceText() {
    return manualData().join('\n');
}

function logManualOnly() {
    console.clear();
    console.log("--- Task 1: Manual Iterator Object ---");
    console.log(manualReferenceText());
}

// ============================================
// TASK 2: Range Generator
// ============================================

function* rangeGenerator(from, to) {
    for (var i = from; i <= to; i++) {
        yield i;
    }
}

function generatorData() {
    var results = [];
    
    results.push("=== Task 2: Range Generator ===");
    results.push("");
    results.push("function* range(from, to) {");
    results.push("  for (let i = from; i <= to; i++) {");
    results.push("    yield i;");
    results.push("  }");
    results.push("}");
    results.push("");
    results.push("// Usage:");
    results.push("for (const n of range(3, 7)) console.log(n); // 3,4,5,6,7");
    results.push("console.log([...range(1, 3)]); // [1,2,3]");
    results.push("");
    results.push("📊 Line count comparison:");
    results.push("  Manual iterator: ~13 lines");
    results.push("  Generator: ~5 lines");
    results.push("  Generators are much more concise!");
    
    return results;
}

function generatorReferenceText() {
    return generatorData().join('\n');
}

function logGeneratorOnly() {
    console.clear();
    console.log("--- Task 2: Range Generator ---");
    console.log(generatorReferenceText());
}

// ============================================
// TASK 3: Take from Infinite Generator
// ============================================

function take(iter, n) {
    var result = [];
    var iterator = iter[Symbol.iterator]();
    for (var i = 0; i < n; i++) {
        var next = iterator.next();
        if (next.done) break;
        result.push(next.value);
    }
    return result;
}

function* naturals() {
    var i = 1;
    while (true) {
        yield i++;
    }
}

function takeData() {
    var results = [];
    
    results.push("=== Task 3: Take from Infinite Generator ===");
    results.push("");
    results.push("function take(iter, n) {");
    results.push("  const result = [];");
    results.push("  const iterator = iter[Symbol.iterator]();");
    results.push("  for (let i = 0; i < n; i++) {");
    results.push("    const next = iterator.next();");
    results.push("    if (next.done) break;");
    results.push("    result.push(next.value);");
    results.push("  }");
    results.push("  return result;");
    results.push("}");
    results.push("");
    results.push("function* naturals() {");
    results.push("  let i = 1;");
    results.push("  while (true) yield i++;");
    results.push("}");
    results.push("");
    results.push("take(naturals(), 5) → [1, 2, 3, 4, 5]");
    
    return results;
}

function takeReferenceText() {
    return takeData().join('\n');
}

function logTakeOnly() {
    console.clear();
    console.log("--- Task 3: Take from Infinite Generator ---");
    console.log(takeReferenceText());
}

// ============================================
// BONUS: Tree Walk with yield*
// ============================================

function* walkTree(node) {
    yield node.value;
    if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
            yield* walkTree(node.children[i]);
        }
    }
}

function treeData() {
    var results = [];
    
    results.push("=== Bonus: Tree Walk with yield* ===");
    results.push("");
    results.push("const tree = {");
    results.push("  value: 1,");
    results.push("  children: [");
    results.push("    { value: 2, children: [{ value: 3, children: [] }] },");
    results.push("    { value: 4, children: [] }");
    results.push("  ]");
    results.push("};");
    results.push("");
    results.push("function* walk(node) {");
    results.push("  yield node.value;");
    results.push("  for (const child of node.children) {");
    results.push("    yield* walk(child);");
    results.push("  }");
    results.push("}");
    results.push("");
    results.push("[...walk(tree)] → [1, 2, 3, 4]");
    
    return results;
}

function treeReferenceText() {
    return treeData().join('\n');
}

function logTreeOnly() {
    console.clear();
    console.log("--- Bonus: Tree Walk with yield* ---");
    console.log(treeReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. chunked generator:");
    results.push("   function* chunked(arr, size) {");
    results.push("     for (let i = 0; i < arr.length; i += size) {");
    results.push("       yield arr.slice(i, i + size);");
    results.push("     }");
    results.push("   }");
    results.push("");
    results.push("2. Prime generator:");
    results.push("   function* primes() {");
    results.push("     yield 2;");
    results.push("     for (let n = 3; true; n += 2) {");
    results.push("       let isPrime = true;");
    results.push("       for (let p = 3; p * p <= n; p += 2) {");
    results.push("         if (n % p === 0) { isPrime = false; break; }");
    results.push("       }");
    results.push("       if (isPrime) yield n;");
    results.push("     }");
    results.push("   }");
    results.push("");
    results.push("3. zip generator:");
    results.push("   function* zip(a, b) {");
    results.push("     const it1 = a[Symbol.iterator]();");
    results.push("     const it2 = b[Symbol.iterator]();");
    results.push("     while (true) {");
    results.push("       const n1 = it1.next();");
    results.push("       const n2 = it2.next();");
    results.push("       if (n1.done || n2.done) break;");
    results.push("       yield [n1.value, n2.value];");
    results.push("     }");
    results.push("   }");
    results.push("");
    results.push("4. Fibonacci generator:");
    results.push("   function* fib() {");
    results.push("     let [a, b] = [0, 1];");
    results.push("     while (true) {");
    results.push("       yield a;");
    results.push("       [a, b] = [b, a + b];");
    results.push("     }");
    results.push("   }");
    results.push("   take(fib(), 10) → first 10 Fibonacci numbers");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/iterable");
    results.push("• https://javascript.info/generators");
    
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
    manual: logManualOnly,
    generator: logGeneratorOnly,
    take: logTakeOnly,
    tree: logTreeOnly,
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
    // Task 1 Demo: Manual Iterator
    var manualBtn = document.getElementById('run-manual-demo');
    var manualResult = document.getElementById('manual-result');
    
    if (manualBtn && manualResult) {
        manualBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Manual Iterator Demo ===");
            output.push("");
            
            var range = createRangeIterable(3, 7);
            var values = [];
            for (var n of range) {
                values.push(n);
            }
            
            output.push("for (const n of range(3, 7)): " + values.join(", "));
            output.push("");
            
            var spreadResult = [...createRangeIterable(1, 3)];
            output.push("[...range(1, 3)]: [" + spreadResult.join(", ") + "]");
            output.push("");
            output.push("✅ Manual iterator works! But requires ~13 lines of code.");
            
            manualResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: Generator
    var generatorBtn = document.getElementById('run-generator-demo');
    var generatorResult = document.getElementById('generator-result');
    
    if (generatorBtn && generatorResult) {
        generatorBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Generator Demo ===");
            output.push("");
            
            var values = [];
            for (var n of rangeGenerator(3, 7)) {
                values.push(n);
            }
            
            output.push("for (const n of range(3, 7)): " + values.join(", "));
            output.push("");
            
            var spreadResult = [...rangeGenerator(1, 3)];
            output.push("[...range(1, 3)]: [" + spreadResult.join(", ") + "]");
            output.push("");
            output.push("✅ Generators are much more concise (~5 lines vs ~13 for manual)!");
            
            generatorResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: Take from Infinite
    var takeBtn = document.getElementById('run-take-demo');
    var takeResult = document.getElementById('take-result');
    
    if (takeBtn && takeResult) {
        takeBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Take from Infinite Demo ===");
            output.push("");
            
            var first5 = take(naturals(), 5);
            output.push("take(naturals(), 5): [" + first5.join(", ") + "]");
            output.push("");
            
            var first10 = take(naturals(), 10);
            output.push("take(naturals(), 10): [" + first10.join(", ") + "]");
            output.push("");
            output.push("✅ Safe! take() caps the infinite generator.");
            output.push("   Never spread an infinite generator directly!");
            
            takeResult.textContent = output.join('\n');
        });
    }
    
    // Bonus Demo: Tree Walk
    var treeBtn = document.getElementById('run-tree-demo');
    var treeResult = document.getElementById('tree-result');
    
    if (treeBtn && treeResult) {
        treeBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Tree Walk with yield* Demo ===");
            output.push("");
            
            var tree = {
                value: 1,
                children: [
                    {
                        value: 2,
                        children: [{ value: 3, children: [] }]
                    },
                    { value: 4, children: [] }
                ]
            };
            
            output.push("Tree structure:");
            output.push("      1");
            output.push("     / \\");
            output.push("    2   4");
            output.push("    |");
            output.push("    3");
            output.push("");
            
            var result = [...walkTree(tree)];
            output.push("DFS traversal using yield* recursion:");
            output.push("  " + result.join(" → "));
            output.push("");
            output.push("✅ yield* delegates to recursive walk calls!");
            output.push("   This creates a clean depth-first traversal.");
            
            treeResult.textContent = output.join('\n');
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
    var outManual = document.getElementById('outManual');
    var outGenerator = document.getElementById('outGenerator');
    var outTake = document.getElementById('outTake');
    var outTree = document.getElementById('outTree');
    var outPractice = document.getElementById('outPractice');
    
    if (outManual) outManual.textContent = manualReferenceText();
    if (outGenerator) outGenerator.textContent = generatorReferenceText();
    if (outTake) outTake.textContent = takeReferenceText();
    if (outTree) outTree.textContent = treeReferenceText();
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
    console.log("🔥 ADVANCED DAY 11: Iterators & Generators 🔥");
    console.log("");
    console.log("Class Work topics:");
    console.log("• Iterator protocol — next() returns { value, done }");
    console.log("• [Symbol.iterator] — make any object iterable");
    console.log("• Generators (function*) — yield pauses, resumes");
    console.log("• Infinite sequences — lazy evaluation");
    console.log("• yield* — delegate to another generator");
    console.log("• Two-way communication — next(value) sends data back");
    console.log("");
    console.log("💡 Open each task to see explanations and run live demos!");
    console.log("🎮 Click the buttons to see iterators and generators in action!");
});