// ============================================
// ADVANCED DAY 12 - ES MODULES IN DEPTH
// Topics: Named vs Default exports, aliasing, barrels, dynamic import, live bindings, circular deps
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
        '<div class="task-title">📦 Named vs Default Exports</div>' +
        '<pre><code>// utils.js — named exports\n' +
        'export function formatPrice(p) { return `₹${p}`; }\n' +
        'export function gst(p, rate = 18) { return p * rate / 100; }\n' +
        'export const TAX_RATE = 18;\n\n' +
        '// main.js\n' +
        'import { formatPrice, gst, TAX_RATE } from "./utils.js";\n\n' +
        '// Card.js — single hero default\n' +
        'export default function Card({ title }) { /* ... */ }\n\n' +
        '// main.js\n' +
        'import Card from "./Card.js";        // any name works!</code></pre>' +
        '<span class="badge">✓ Named exports: multiple per file, better tree-shaking; Default: one per file</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔀 Aliasing & Namespace Imports</div>' +
        '<pre><code>// Rename on import\n' +
        'import { formatPrice as fp } from "./utils.js";\n\n' +
        '// Namespace import — pull EVERYTHING under one object\n' +
        'import * as utils from "./utils.js";\n' +
        'console.log(utils.formatPrice(100));\n' +
        'console.log(utils.gst(100));\n' +
        'console.log(utils.TAX_RATE);\n\n' +
        '// Useful for dynamic key lookup: utils[someName]\n' +
        '// ⚠️ Defeats tree-shaking — bundlers can\'t drop unused exports</code></pre>' +
        '<span class="badge">✓ Namespace imports are convenient but may impact bundle size</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📁 Barrels — Single Import Path</div>' +
        '<pre><code>// components/index.js — the barrel\n' +
        'export { default as Button } from "./Button.js";\n' +
        'export { default as Card }   from "./Card.js";\n' +
        'export { default as Modal }  from "./Modal.js";\n\n' +
        '// App.js — clean, single-line imports\n' +
        'import { Button, Card, Modal } from "./components";\n\n' +
        '// Re-export all named exports\n' +
        'export * from "./hooks.js";\n' +
        'export { useForm, useDebounce } from "./hooks.js";   // selective</code></pre>' +
        '<span class="badge">✓ Barrels simplify import paths and organize exports</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⚡ Dynamic import() — Code Splitting</div>' +
        '<pre><code>// Static — loaded immediately\n' +
        'import { gst } from "./utils.js";\n\n' +
        '// Dynamic — loaded ON DEMAND\n' +
        'async function showSettings() {\n' +
        '  const { Settings } = await import("./Settings.js");\n' +
        '  Settings.render();\n' +
        '}\n\n' +
        '// Conditional load — only when needed\n' +
        'button.addEventListener("click", async () => {\n' +
        '  const Chart = await import("./BigChartLibrary.js");\n' +
        '  Chart.draw();\n' +
        '});</code></pre>' +
        '<span class="badge">✓ Dynamic imports enable code splitting and lazy loading</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔗 Live Bindings & Singletons</div>' +
        '<pre><code>// counter.js\n' +
        'export let count = 0;\n' +
        'export function inc() { count++; }\n\n' +
        '// main.js — count is a LIVE binding!\n' +
        'import { count, inc } from "./counter.js";\n' +
        'console.log(count);    // 0\n' +
        'inc();\n' +
        'console.log(count);    // 1 ← updated! Live binding!\n\n' +
        '// count = 99;         // TypeError — imports are read-only!</code></pre>' +
        '<span class="badge">✓ Imported bindings are live but read-only — they reflect the latest value</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔄 Circular Dependencies</div>' +
        '<pre><code>// a.js — imports from b.js\n' +
        'import { fromB } from "./b.js";\n' +
        'export const fromA = "I am A";\n' +
        'console.log("a sees fromB =", fromB);   // may be undefined\n\n' +
        '// b.js — imports from a.js\n' +
        'import { fromA } from "./a.js";\n' +
        'export const fromB = "I am B";\n\n' +
        '// Fixes:\n' +
        '// 1. Extract shared bits to a third module\n' +
        '// 2. Lazy access — read inside a function, not at top level\n' +
        '// 3. Use ESLint to catch cycles early</code></pre>' +
        '<span class="badge">✓ Circular dependencies can cause undefined imports — refactor to avoid</span>' +
        '</div>';
}

// ============================================
// TASK 1: Multiple Named Exports + Barrel
// ============================================

function barrelData() {
    var results = [];
    
    results.push("=== Task 1: Multiple Named Exports + Barrel ===");
    results.push("");
    results.push("📁 math/add.js:");
    results.push("  export function add(a, b) { return a + b; }");
    results.push("");
    results.push("📁 math/multiply.js:");
    results.push("  export function multiply(a, b) { return a * b; }");
    results.push("");
    results.push("📁 math/divide.js:");
    results.push("  export function divide(a, b) { return a / b; }");
    results.push("");
    results.push("📁 math/index.js (barrel):");
    results.push("  export { add } from './add.js';");
    results.push("  export { multiply } from './multiply.js';");
    results.push("  export { divide } from './divide.js';");
    results.push("");
    results.push("📁 app.js:");
    results.push("  import { add, multiply, divide } from './math/index.js';");
    results.push("  // or just './math' if index.js is the entry");
    results.push("");
    results.push("  console.log(add(5, 3));      // 8");
    results.push("  console.log(multiply(4, 2)); // 8");
    results.push("  console.log(divide(10, 2));  // 5");
    
    return results;
}

function barrelReferenceText() {
    return barrelData().join('\n');
}

function logBarrelOnly() {
    console.clear();
    console.log("--- Task 1: Multiple Named Exports + Barrel ---");
    console.log(barrelReferenceText());
}

// ============================================
// TASK 2: Default + Named in Same File
// ============================================

function mixedData() {
    var results = [];
    
    results.push("=== Task 2: Default + Named in Same File ===");
    results.push("");
    results.push("📁 Button.js:");
    results.push("  export const ButtonStyles = {");
    results.push("    primary: { background: 'blue', color: 'white' },");
    results.push("    secondary: { background: 'gray', color: 'white' }");
    results.push("  };");
    results.push("");
    results.push("  export default function Button({ title, variant = 'primary' }) {");
    results.push("    return `<button style=\"${JSON.stringify(ButtonStyles[variant])}\">${title}</button>`;");
    results.push("  }");
    results.push("");
    results.push("📁 app.js:");
    results.push("  import Button, { ButtonStyles } from './Button.js';");
    results.push("");
    results.push("  console.log(ButtonStyles.primary);");
    results.push("  console.log(Button({ title: 'Click Me' }));");
    results.push("");
    results.push("📝 Note: Default import has no braces, named imports use braces.");
    
    return results;
}

function mixedReferenceText() {
    return mixedData().join('\n');
}

function logMixedOnly() {
    console.clear();
    console.log("--- Task 2: Default + Named in Same File ---");
    console.log(mixedReferenceText());
}

// ============================================
// TASK 3: Dynamic import()
// ============================================

// Simulate a heavy module that would be dynamically imported
function createHeavyModule() {
    var computeCalled = false;
    return {
        compute: function() {
            computeCalled = true;
            return "computed!";
        },
        wasCalled: function() { return computeCalled; }
    };
}

var heavyModule = null;

async function loadHeavyModule() {
    if (!heavyModule) {
        console.log("Loading heavy module... (simulated dynamic import)");
        await new Promise(r => setTimeout(r, 500)); // Simulate network delay
        heavyModule = createHeavyModule();
        console.log("Heavy module loaded!");
    }
    return heavyModule;
}

async function loadAndRun() {
    var resultElement = document.getElementById('dynamic-result');
    if (resultElement) {
        var output = [];
        output.push("=== Dynamic import() Demo ===");
        output.push("");
        output.push("Loading heavy module dynamically...");
        resultElement.textContent = output.join('\n');
        
        var module = await loadHeavyModule();
        var result = module.compute();
        
        output.push("compute() result: " + result);
        output.push("");
        output.push("✅ Module loaded only when requested!");
        output.push("   In a real bundler, this would create a separate chunk.");
        output.push("   Network tab would show heavy.js loading only on button click.");
        
        resultElement.textContent = output.join('\n');
    }
}

function dynamicData() {
    var results = [];
    
    results.push("=== Task 3: Dynamic import() ===");
    results.push("");
    results.push("📁 heavy.js:");
    results.push("  export function compute() {");
    results.push("    console.log('Computing expensive operation...');");
    results.push("    return 'computed!';");
    results.push("  }");
    results.push("");
    results.push("📁 main.js:");
    results.push("  async function loadAndRun() {");
    results.push("    const { compute } = await import('./heavy.js');");
    results.push("    console.log(compute());");
    results.push("  }");
    results.push("");
    results.push("  // heavy.js is NOT loaded until loadAndRun() is called!");
    results.push("  loadAndRun(); // Now it loads");
    results.push("");
    results.push("📊 Benefits:");
    results.push("  • Reduces initial bundle size");
    results.push("  • Faster page load");
    results.push("  • Load features only when needed");
    
    return results;
}

function dynamicReferenceText() {
    return dynamicData().join('\n');
}

function logDynamicOnly() {
    console.clear();
    console.log("--- Task 3: Dynamic import() ---");
    console.log(dynamicReferenceText());
}

// ============================================
// BONUS: Singleton Cache (Live Bindings)
// ============================================

// Simulated shared cache module
var sharedCache = new Map();

function singletonData() {
    var results = [];
    
    results.push("=== Bonus: Singleton Cache (Live Bindings) ===");
    results.push("");
    results.push("📁 cache.js:");
    results.push("  const cache = new Map();");
    results.push("  export default cache;");
    results.push("");
    results.push("📁 userService.js:");
    results.push("  import cache from './cache.js';");
    results.push("  export function saveUser(id, name) {");
    results.push("    cache.set(`user:${id}`, { id, name });");
    results.push("  }");
    results.push("");
    results.push("📁 productService.js:");
    results.push("  import cache from './cache.js';");
    results.push("  export function saveProduct(id, name) {");
    results.push("    cache.set(`product:${id}`, { id, name });");
    results.push("  }");
    results.push("");
    results.push("📁 main.js:");
    results.push("  import cache from './cache.js';");
    results.push("  import { saveUser } from './userService.js';");
    results.push("  import { saveProduct } from './productService.js';");
    results.push("");
    results.push("  saveUser(1, 'Priya');");
    results.push("  saveProduct(101, 'Laptop');");
    results.push("  console.log([...cache.keys()]);");
    results.push("  // ['user:1', 'product:101'] — both services share the SAME cache!");
    results.push("");
    results.push("💡 Because modules are singletons, the cache is shared across the entire app.");
    
    return results;
}

function singletonReferenceText() {
    return singletonData().join('\n');
}

function logSingletonOnly() {
    console.clear();
    console.log("--- Bonus: Singleton Cache ---");
    console.log(singletonReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. Barrel pattern with mixed re-exports:");
    results.push("   export { add } from './add.js';");
    results.push("   export { multiply } from './multiply.js';");
    results.push("   export { default as Calculator } from './Calculator.js';");
    results.push("");
    results.push("2. Dynamic import in Vite/React:");
    results.push("   const AdminPanel = React.lazy(() => import('./AdminPanel'));");
    results.push("");
    results.push("3. Circular dependency example:");
    results.push("   // a.js");
    results.push("   import { b } from './b.js';");
    results.push("   export const a = 'A';");
    results.push("   console.log(b); // undefined at first!");
    results.push("");
    results.push("   // Fixed: access inside function");
    results.push("   export function getB() { return b; }");
    results.push("");
    results.push("4. ESLint rule to catch cycles:");
    results.push("   'import/no-cycle': 'error'");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/modules-intro");
    results.push("• https://javascript.info/import-export");
    
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
    barrel: logBarrelOnly,
    mixed: logMixedOnly,
    dynamic: logDynamicOnly,
    singleton: logSingletonOnly,
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
    // Task 1 Demo: Barrel Pattern
    var barrelBtn = document.getElementById('run-barrel-demo');
    var barrelResult = document.getElementById('barrel-result');
    
    if (barrelBtn && barrelResult) {
        barrelBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Barrel Pattern Demo ===");
            output.push("");
            output.push("// math/add.js");
            output.push("export const add = (a, b) => a + b;");
            output.push("");
            output.push("// math/multiply.js");
            output.push("export const multiply = (a, b) => a * b;");
            output.push("");
            output.push("// math/divide.js");
            output.push("export const divide = (a, b) => a / b;");
            output.push("");
            output.push("// math/index.js (barrel)");
            output.push("export { add } from './add.js';");
            output.push("export { multiply } from './multiply.js';");
            output.push("export { divide } from './divide.js';");
            output.push("");
            output.push("// app.js");
            output.push("import { add, multiply, divide } from './math/index.js';");
            output.push("");
            output.push("// Usage:");
            output.push("add(5, 3) = " + (5 + 3));
            output.push("multiply(4, 2) = " + (4 * 2));
            output.push("divide(10, 2) = " + (10 / 2));
            
            barrelResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: Mixed Exports
    var mixedBtn = document.getElementById('run-mixed-demo');
    var mixedResult = document.getElementById('mixed-result');
    
    if (mixedBtn && mixedResult) {
        mixedBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Mixed Export Pattern Demo ===");
            output.push("");
            output.push("// Button.js");
            output.push("export const ButtonStyles = {");
            output.push("  primary: { background: 'blue', color: 'white' },");
            output.push("  secondary: { background: 'gray', color: 'white' }");
            output.push("};");
            output.push("");
            output.push("export default function Button({ title, variant = 'primary' }) {");
            output.push("  return `<button style=\"${JSON.stringify(ButtonStyles[variant])}\">${title}</button>`;");
            output.push("}");
            output.push("");
            output.push("// app.js");
            output.push("import Button, { ButtonStyles } from './Button.js';");
            output.push("");
            output.push("// Usage:");
            output.push("console.log('ButtonStyles.primary:', ButtonStyles.primary);");
            output.push("console.log('Button:', Button({ title: 'Click Me' }));");
            
            mixedResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: Dynamic import
    var dynamicBtn = document.getElementById('run-dynamic-demo');
    var dynamicResult = document.getElementById('dynamic-result');
    
    if (dynamicBtn && dynamicResult) {
        dynamicBtn.addEventListener('click', loadAndRun);
    }
    
    // Bonus Demo: Singleton Cache
    var singletonBtn = document.getElementById('run-singleton-demo');
    var singletonResult = document.getElementById('singleton-result');
    
    if (singletonBtn && singletonResult) {
        singletonBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Singleton Cache Demo ===");
            output.push("");
            output.push("// All modules share the SAME cache instance!");
            output.push("");
            
            // Simulate the cache behavior
            var cache = new Map();
            
            // Simulate userService
            function saveUser(id, name) {
                cache.set('user:' + id, { id: id, name: name });
            }
            
            // Simulate productService
            function saveProduct(id, name) {
                cache.set('product:' + id, { id: id, name: name });
            }
            
            saveUser(1, "Priya");
            saveUser(2, "Aarav");
            saveProduct(101, "Laptop");
            saveProduct(102, "Mouse");
            
            output.push("Cache contents after saves:");
            for (var [key, value] of cache) {
                output.push("  " + key + ": " + JSON.stringify(value));
            }
            output.push("");
            output.push("✅ Both services wrote to the SAME cache!");
            output.push("   Because modules are singletons, default exports are shared.");
            
            singletonResult.textContent = output.join('\n');
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
    var outBarrel = document.getElementById('outBarrel');
    var outMixed = document.getElementById('outMixed');
    var outDynamic = document.getElementById('outDynamic');
    var outSingleton = document.getElementById('outSingleton');
    var outPractice = document.getElementById('outPractice');
    
    if (outBarrel) outBarrel.textContent = barrelReferenceText();
    if (outMixed) outMixed.textContent = mixedReferenceText();
    if (outDynamic) outDynamic.textContent = dynamicReferenceText();
    if (outSingleton) outSingleton.textContent = singletonReferenceText();
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
    console.log("🔥 ADVANCED DAY 12: ES Modules in Depth 🔥");
    console.log("");
    console.log("Class Work topics:");
    console.log("• Named vs Default exports — best practices");
    console.log("• Aliasing (as) and Namespace imports (* as)");
    console.log("• Barrels — index.js re-exports");
    console.log("• Dynamic import() — code splitting and lazy loading");
    console.log("• Live bindings — imports reflect changes");
    console.log("• Circular dependencies — causes and fixes");
    console.log("• Bundlers — Webpack, Vite, Rollup, esbuild");
    console.log("");
    console.log("💡 Open each task to see explanations and run live demos!");
    console.log("🎮 Click the buttons to see module patterns in action!");
    console.log("");
    console.log("📌 NOTE: In a real project, these modules would be in separate files.");
    console.log("   This demo shows the patterns conceptually.");
});