// ============================================
// ADVANCED DAY 10 - MAP / SET / WEAKMAP / WEAKSET
// Topics: Map, Set, Object↔Map conversion, Set operations, WeakMap, WeakSet
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
        '<div class="task-title">🗺️ Map — Better Keyed Storage</div>' +
        '<pre><code>const m = new Map();\n' +
        'm.set("name", "Priya");\n' +
        'm.set(42, "the answer");\n' +
        'm.set(true, "a boolean key");\n\n' +
        'const userObj = { id: 1 };\n' +
        'm.set(userObj, "value associated with userObj");\n\n' +
        'console.log(m.get("name"));     // "Priya"\n' +
        'console.log(m.size);            // 4\n' +
        'console.log(m.has(42));         // true\n\n' +
        'for (const [key, value] of m) {\n' +
        '  console.log(key, value);\n' +
        '}</code></pre>' +
        '<span class="badge">✓ Map keys can be ANY type — Object keys are only strings/symbols</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔄 Object ↔ Map Conversion</div>' +
        '<pre><code>const obj = { name: "Priya", city: "Jaipur" };\n\n' +
        '// Object → Map\n' +
        'const map = new Map(Object.entries(obj));\n' +
        'console.log(map.get("name"));    // "Priya"\n\n' +
        '// Map → Object\n' +
        'const back = Object.fromEntries(map);\n' +
        'console.log(back);               // { name: "Priya", city: "Jaipur" }\n\n' +
        '// Map iteration\n' +
        'map.forEach((value, key) => console.log(key, "=", value));</code></pre>' +
        '<span class="badge">✓ Object.entries/fromEntries enable easy Map↔Object conversion</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">✅ Set — Unique Values</div>' +
        '<pre><code>const s = new Set();\n' +
        's.add("a");\n' +
        's.add("b");\n' +
        's.add("a");                      // duplicate — ignored\n\n' +
        'console.log(s.size);             // 2\n' +
        'console.log(s.has("a"));         // true\n\n' +
        '// Deduplicate array\n' +
        'const arr = [1, 2, 2, 3, 4, 4, 5];\n' +
        'const uniq = [...new Set(arr)];\n' +
        'console.log(uniq);               // [1, 2, 3, 4, 5]</code></pre>' +
        '<span class="badge">✓ Set automatically removes duplicates</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⚡ Set Operations</div>' +
        '<pre><code>const a = new Set([1, 2, 3]);\n' +
        'const b = new Set([2, 3, 4]);\n\n' +
        '// Union — A ∪ B\n' +
        'const union = new Set([...a, ...b]);      // {1,2,3,4}\n\n' +
        '// Intersection — A ∩ B\n' +
        'const inter = new Set([...a].filter(x => b.has(x))); // {2,3}\n\n' +
        '// Difference — A − B\n' +
        'const diff = new Set([...a].filter(x => !b.has(x))); // {1}</code></pre>' +
        '<span class="badge">✓ Use Set with spread and filter for set algebra</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔮 WeakMap & WeakSet — GC-Friendly</div>' +
        '<pre><code>const wm = new WeakMap();\n' +
        'let user = { id: 1, name: "Priya" };\n' +
        'wm.set(user, { lastSeen: Date.now() });\n\n' +
        'user = null;  // last reference dropped\n' +
        '// GC will eventually remove entry from wm\n\n' +
        '// Practical: per-DOM-node metadata\n' +
        'const dataForElement = new WeakMap();\n' +
        'function attachData(el, data) {\n' +
        '  dataForElement.set(el, data);\n' +
        '}</code></pre>' +
        '<div class="warning-box">⚠️ WeakMap is NOT iterable — entries vanish when keys are garbage collected</div>' +
        '<span class="badge">✓ WeakMap prevents memory leaks when keys are DOM nodes</span>' +
        '</div>';
}

// ============================================
// TASK 1: Map vs Object
// ============================================

function mapData() {
    var results = [];
    
    results.push("=== Task 1: Map vs Object ===");
    results.push("");
    results.push("const products = new Map([");
    results.push("  ['pen', 50],");
    results.push("  ['book', 200],");
    results.push("  ['bag', 800]");
    results.push("]);");
    results.push("");
    results.push("// Iteration with for...of");
    results.push("for (const [item, price] of products) {");
    results.push("  console.log(`${item}: ₹${price}`);");
    results.push("}");
    results.push("");
    results.push("// Convert to Object");
    results.push("const obj = Object.fromEntries(products);");
    results.push("// Convert back to Map");
    results.push("const mapAgain = new Map(Object.entries(obj));");
    
    return results;
}

function mapReferenceText() {
    return mapData().join('\n');
}

function logMapOnly() {
    console.clear();
    console.log("--- Task 1: Map vs Object ---");
    console.log(mapReferenceText());
}

// ============================================
// TASK 2: Deduplicate with Set
// ============================================

function setData() {
    var results = [];
    
    results.push("=== Task 2: Deduplicate with Set ===");
    results.push("");
    results.push("const ids = [101, 102, 103, 101, 104, 102, 105];");
    results.push("const unique = [...new Set(ids)];");
    results.push("// unique = [101, 102, 103, 104, 105]");
    results.push("");
    results.push("// Mixed types test:");
    results.push("const mixed = [1, '1', 1, true, 1n];");
    results.push("const uniqueMixed = [...new Set(mixed)];");
    results.push("// 1, '1', true, 1n — all preserved because types differ!");
    
    return results;
}

function setReferenceText() {
    return setData().join('\n');
}

function logSetOnly() {
    console.clear();
    console.log("--- Task 2: Deduplicate with Set ---");
    console.log(setReferenceText());
}

// ============================================
// TASK 3: Cache with Map (Memoize)
// ============================================

function memoize(fn) {
    var cache = new Map();
    return function(n) {
        if (cache.has(n)) {
            console.log("Cache hit for " + n);
            return cache.get(n);
        }
        console.log("Computing for " + n + "...");
        var result = fn(n);
        cache.set(n, result);
        return result;
    };
}

function expensiveSquare(n) {
    return n * n;
}

function cacheData() {
    var results = [];
    
    results.push("=== Task 3: Cache with Map (Memoize) ===");
    results.push("");
    results.push("function memoize(fn) {");
    results.push("  const cache = new Map();");
    results.push("  return function(n) {");
    results.push("    if (cache.has(n)) return cache.get(n);");
    results.push("    const result = fn(n);");
    results.push("    cache.set(n, result);");
    results.push("    return result;");
    results.push("  };");
    results.push("}");
    results.push("");
    results.push("const memoSquare = memoize(expensiveSquare);");
    results.push("memoSquare(5); // computes");
    results.push("memoSquare(5); // cache hit");
    results.push("console.log(cache.size); // 1");
    
    return results;
}

function cacheReferenceText() {
    return cacheData().join('\n');
}

function logCacheOnly() {
    console.clear();
    console.log("--- Task 3: Cache with Map ---");
    console.log(cacheReferenceText());
}

// ============================================
// BONUS: WeakMap for Private Data
// ============================================

var privateData = new WeakMap();

function attachData(obj, data) {
    privateData.set(obj, data);
}

function getData(obj) {
    return privateData.get(obj);
}

function weakMapData() {
    var results = [];
    
    results.push("=== Bonus: WeakMap for Private Data ===");
    results.push("");
    results.push("const privateData = new WeakMap();");
    results.push("");
    results.push("function attachData(obj, data) {");
    results.push("  privateData.set(obj, data);");
    results.push("}");
    results.push("");
    results.push("function getData(obj) {");
    results.push("  return privateData.get(obj);");
    results.push("}");
    results.push("");
    results.push("// Why WeakMap?");
    results.push("• Keys are objects (not strings)");
    results.push("• When the object is garbage collected, the entry auto-removes");
    results.push("• Prevents memory leaks — perfect for DOM node metadata");
    results.push("• Cannot iterate — intentional for privacy");
    
    return results;
}

function weakMapReferenceText() {
    return weakMapData().join('\n');
}

function logWeakMapOnly() {
    console.clear();
    console.log("--- Bonus: WeakMap for Private Data ---");
    console.log(weakMapReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. Tag Counter with Map:");
    results.push("   function countTags(posts) {");
    results.push("     const tagCount = new Map();");
    results.push("     posts.forEach(post => {");
    results.push("       post.tags.forEach(tag => {");
    results.push("         tagCount.set(tag, (tagCount.get(tag) || 0) + 1);");
    results.push("       });");
    results.push("     });");
    results.push("     return tagCount;");
    results.push("   }");
    results.push("");
    results.push("2. Set Operations:");
    results.push("   function union(a, b) { return new Set([...a, ...b]); }");
    results.push("   function intersection(a, b) {");
    results.push("     return new Set([...a].filter(x => b.has(x)));");
    results.push("   }");
    results.push("   function difference(a, b) {");
    results.push("     return new Set([...a].filter(x => !b.has(x)));");
    results.push("   }");
    results.push("");
    results.push("3. Map to sorted array:");
    results.push("   const sorted = [...ageMap.entries()].sort((a, b) => a[1] - b[1]);");
    results.push("");
    results.push("4. DOM click tracker with WeakMap:");
    results.push("   const clickCounts = new WeakMap();");
    results.push("   function trackClick(btn) {");
    results.push("     const count = (clickCounts.get(btn) || 0) + 1;");
    results.push("     clickCounts.set(btn, count);");
    results.push("     console.log(`Clicked ${count} times`);");
    results.push("   }");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/map-set");
    results.push("• https://javascript.info/weakmap-weakset");
    
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
    map: logMapOnly,
    set: logSetOnly,
    cache: logCacheOnly,
    weakmap: logWeakMapOnly,
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
    // Task 1 Demo: Map
    var mapBtn = document.getElementById('run-map-demo');
    var mapResult = document.getElementById('map-result');
    
    if (mapBtn && mapResult) {
        mapBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Map Demo ===");
            output.push("");
            
            var products = new Map([
                ["pen", 50],
                ["book", 200],
                ["bag", 800]
            ]);
            
            output.push("Products Map:");
            for (var [item, price] of products) {
                output.push("  " + item + ": ₹" + price);
            }
            
            output.push("");
            output.push("products.has('pen'): " + products.has("pen"));
            output.push("products.get('book'): ₹" + products.get("book"));
            output.push("products.size: " + products.size);
            
            output.push("");
            output.push("Converting to Object:");
            var obj = Object.fromEntries(products);
            output.push("  " + JSON.stringify(obj));
            
            output.push("");
            output.push("Converting back to Map:");
            var mapAgain = new Map(Object.entries(obj));
            output.push("  Size: " + mapAgain.size);
            
            mapResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: Set
    var setBtn = document.getElementById('run-set-demo');
    var setResult = document.getElementById('set-result');
    
    if (setBtn && setResult) {
        setBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Set Demo ===");
            output.push("");
            
            var ids = [101, 102, 103, 101, 104, 102, 105];
            output.push("Original IDs: [" + ids.join(", ") + "]");
            
            var unique = [...new Set(ids)];
            output.push("Unique IDs: [" + unique.join(", ") + "]");
            output.push("Unique count: " + unique.length);
            
            output.push("");
            output.push("Mixed types test:");
            var mixed = [1, "1", 1, true, 1n];
            output.push("Original: [" + mixed.join(", ") + "]");
            var uniqueMixed = [...new Set(mixed)];
            output.push("Unique: [" + uniqueMixed.join(", ") + "]");
            output.push("");
            output.push("Note: 1, '1', true, 1n are all different types!");
            
            setResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: Memoize with Map
    var cacheBtn = document.getElementById('run-cache-demo');
    var cacheResult = document.getElementById('cache-result');
    
    if (cacheBtn && cacheResult) {
        cacheBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Memoize with Map Demo ===");
            output.push("");
            
            var computeLog = [];
            var loggingSquare = function(n) {
                computeLog.push("computing " + n + "^2");
                return n * n;
            };
            
            var memoSquare = memoize(loggingSquare);
            
            output.push("First call memoSquare(5):");
            var r1 = memoSquare(5);
            output.push("  Result: " + r1);
            output.push("");
            
            output.push("Second call memoSquare(5):");
            var r2 = memoSquare(5);
            output.push("  Result: " + r2);
            output.push("");
            
            output.push("Call memoSquare(10):");
            var r3 = memoSquare(10);
            output.push("  Result: " + r3);
            output.push("");
            
            output.push("Third call memoSquare(5):");
            var r4 = memoSquare(5);
            output.push("  Result: " + r4);
            output.push("");
            
            output.push("Computations performed:");
            for (var i = 0; i < computeLog.length; i++) {
                output.push("  " + computeLog[i]);
            }
            
            cacheResult.textContent = output.join('\n');
        });
    }
    
    // Bonus Demo: WeakMap
    var weakMapBtn = document.getElementById('run-weakmap-demo');
    var weakMapResult = document.getElementById('weakmap-result');
    
    if (weakMapBtn && weakMapResult) {
        weakMapBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== WeakMap for Private Data Demo ===");
            output.push("");
            
            var btn1 = { id: "button1", name: "Click Me" };
            var btn2 = { id: "button2", name: "Submit" };
            
            attachData(btn1, { clicks: 0, lastClicked: null });
            attachData(btn2, { clicks: 0, lastClicked: null });
            
            var data1 = getData(btn1);
            data1.clicks = 5;
            data1.lastClicked = Date.now();
            
            var data2 = getData(btn2);
            data2.clicks = 3;
            data2.lastClicked = Date.now();
            
            output.push("Button 1 metadata:");
            output.push("  clicks: " + getData(btn1).clicks);
            output.push("  lastClicked: " + new Date(getData(btn1).lastClicked).toLocaleTimeString());
            output.push("");
            
            output.push("Button 2 metadata:");
            output.push("  clicks: " + getData(btn2).clicks);
            output.push("  lastClicked: " + new Date(getData(btn2).lastClicked).toLocaleTimeString());
            output.push("");
            
            output.push("Why WeakMap?");
            output.push("  • Metadata is attached to objects without modifying them");
            output.push("  • When btn1/btn2 are garbage collected, metadata auto-removes");
            output.push("  • Prevents memory leaks — perfect for DOM elements");
            
            weakMapResult.textContent = output.join('\n');
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
    var outMap = document.getElementById('outMap');
    var outSet = document.getElementById('outSet');
    var outCache = document.getElementById('outCache');
    var outWeakMap = document.getElementById('outWeakMap');
    var outPractice = document.getElementById('outPractice');
    
    if (outMap) outMap.textContent = mapReferenceText();
    if (outSet) outSet.textContent = setReferenceText();
    if (outCache) outCache.textContent = cacheReferenceText();
    if (outWeakMap) outWeakMap.textContent = weakMapReferenceText();
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
    console.log("🔥 ADVANCED DAY 10: Map / Set / WeakMap / WeakSet 🔥");
    console.log("");
    console.log("Class Work topics:");
    console.log("• Map — any key type, insertion order, size property");
    console.log("• Object ↔ Map conversion (Object.entries/fromEntries)");
    console.log("• Set — unique values, deduplication");
    console.log("• Set operations: union, intersection, difference");
    console.log("• WeakMap — GC-friendly, object keys only, not iterable");
    console.log("• WeakSet — same but for values");
    console.log("");
    console.log("💡 Open each task to see explanations and run live demos!");
    console.log("🎮 Click the buttons to see Map/Set/WeakMap in action!");
});