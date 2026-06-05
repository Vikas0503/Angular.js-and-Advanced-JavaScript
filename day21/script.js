// ============================================
// ADVANCED DAY 9 - ADVANCED ARRAY & OBJECT PATTERNS
// Topics: Shallow vs Deep Clone, structuredClone, Object.freeze, immutable updates,
//         destructuring, computed keys, optional chaining, nullish coalescing
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
        '<div class="task-title">📦 Shallow vs Deep Clone</div>' +
        '<pre><code>const original = {\n' +
        '  name: "Priya",\n' +
        '  address: { city: "Jaipur", pin: 302001 },\n' +
        '};\n\n' +
        '// Shallow clones — share nested references\n' +
        'const shallow = { ...original };\n' +
        'shallow.address.city = "Mumbai";\n' +
        'console.log(original.address.city); // "Mumbai" ← BUG!\n\n' +
        '// Deep clone with structuredClone\n' +
        'const deep = structuredClone(original);\n' +
        'deep.address.city = "Delhi";\n' +
        'console.log(original.address.city); // "Mumbai" — unchanged</code></pre>' +
        '<span class="badge">✓ structuredClone handles Dates, Maps, Sets — JSON.stringify loses them</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔒 Object.freeze & Deep Freeze</div>' +
        '<pre><code>const config = Object.freeze({ host: "api.com", port: 8080 });\n' +
        'config.port = 9000; // silently ignored\n\n' +
        '// Shallow freeze — nested objects are still mutable!\n' +
        'const user = Object.freeze({ name: "Priya", addr: { city: "Jaipur" } });\n' +
        'user.addr.city = "Mumbai"; // SUCCEEDS!\n\n' +
        '// Deep freeze recursive function\n' +
        'function deepFreeze(obj) {\n' +
        '  Object.values(obj).forEach(v => {\n' +
        '    if (v && typeof v === "object") deepFreeze(v);\n' +
        '  });\n' +
        '  return Object.freeze(obj);\n' +
        '}</code></pre>' +
        '<span class="badge">✓ Object.freeze is shallow — use deepFreeze for complete immutability</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔄 Immutable Updates with Spread</div>' +
        '<pre><code>// Update top-level field\n' +
        'const u1 = { ...user, age: 26 };\n\n' +
        '// Update nested field — spread each level\n' +
        'const u2 = {\n' +
        '  ...user,\n' +
        '  address: { ...user.address, city: "Mumbai" },\n' +
        '};\n\n' +
        '// Add to array immutably\n' +
        'const u3 = { ...user, hobbies: [...user.hobbies, "swimming"] };\n\n' +
        '// Remove from array immutably\n' +
        'const u4 = { ...user, hobbies: user.hobbies.filter(h => h !== "trekking") };</code></pre>' +
        '<span class="badge">✓ Never mutate — always create new objects/arrays with spread</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🎯 Advanced Destructuring</div>' +
        '<pre><code>// Defaults\n' +
        'const { name, role = "user" } = { name: "Priya" };\n\n' +
        '// Rename\n' +
        'const { name: userName } = { name: "Aarav" };\n\n' +
        '// Nested destructuring\n' +
        'const { address: { city } } = user;\n\n' +
        '// Array destructuring with rest\n' +
        'const [first, second, ...rest] = [1, 2, 3, 4, 5];\n\n' +
        '// Function parameter destructuring\n' +
        'function Card({ title, subtitle = "—" }) { ... }</code></pre>' +
        '<span class="badge">✓ Destructuring simplifies extracting data from objects/arrays</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔑 Computed Keys</div>' +
        '<pre><code>const field = "city";\n' +
        'const value = "Mumbai";\n' +
        'const obj = { [field]: value };\n' +
        'console.log(obj); // { city: "Mumbai" }\n\n' +
        '// Generic update helper\n' +
        'function updateField(obj, key, value) {\n' +
        '  return { ...obj, [key]: value };\n' +
        '}</code></pre>' +
        '<span class="badge">✓ Computed keys allow dynamic property names in object literals</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🛡️ Optional Chaining + Nullish Coalescing</div>' +
        '<pre><code>const response = { user: { name: "Priya", profile: { bio: null } } };\n\n' +
        '// Safe property access — returns undefined if any step missing\n' +
        'const city = response?.user?.profile?.city;\n\n' +
        '// With fallback for null/undefined\n' +
        'const cityOrDefault = response?.user?.profile?.city ?? "Unknown";\n\n' +
        '// Safe method call\n' +
        'const upper = response?.user?.name?.toUpperCase?.();\n\n' +
        '// Safe array access\n' +
        'const first = response?.user?.tags?.[0] ?? "no tags";</code></pre>' +
        '<span class="badge">✓ ?. prevents "Cannot read property of undefined" errors</span>' +
        '</div>';
}

// ============================================
// TASK 1: Prove Shallow Clone Bug
// ============================================

function shallowData() {
    var results = [];
    
    results.push("=== Task 1: Shallow Clone Bug ===");
    results.push("");
    results.push("const orig = { name: 'Priya', addr: { city: 'Jaipur' } };");
    results.push("");
    results.push("❌ SHALLOW CLONE (spread):");
    results.push("  const copy = { ...orig };");
    results.push("  copy.addr.city = 'Mumbai';");
    results.push("  orig.addr.city → 'Mumbai' ← BUG! Original mutated!");
    results.push("");
    results.push("✅ DEEP CLONE (structuredClone):");
    results.push("  const deep = structuredClone(orig);");
    results.push("  deep.addr.city = 'Delhi';");
    results.push("  orig.addr.city → 'Jaipur' ← Unchanged!");
    
    return results;
}

function shallowReferenceText() {
    return shallowData().join('\n');
}

function logShallowOnly() {
    emitConsoleAnswer(shallowReferenceText());
}

// ============================================
// TASK 2: Immutable Nested Update
// ============================================

function immutableData() {
    var results = [];
    
    results.push("=== Task 2: Immutable Nested Update ===");
    results.push("");
    results.push("const state = {");
    results.push("  user: {");
    results.push("    name: 'Priya',");
    results.push("    prefs: { theme: 'light', lang: 'en' }");
    results.push("  }");
    results.push("};");
    results.push("");
    results.push("// Immutable update to change theme to 'dark'");
    results.push("const newState = {");
    results.push("  ...state,");
    results.push("  user: {");
    results.push("    ...state.user,");
    results.push("    prefs: { ...state.user.prefs, theme: 'dark' }");
    results.push("  }");
    results.push("};");
    results.push("");
    results.push("// Original unchanged");
    results.push("state.user.prefs.theme → 'light'");
    
    return results;
}

function immutableReferenceText() {
    return immutableData().join('\n');
}

function logImmutableOnly() {
    emitConsoleAnswer(immutableReferenceText());
}

// ============================================
// TASK 3: Update One Item in an Array
// ============================================

function arrayData() {
    var results = [];
    
    results.push("=== Task 3: Update One Item in an Array ===");
    results.push("");
    results.push("const tasks = [");
    results.push("  { id: 1, title: 'Learn JS', done: false },");
    results.push("  { id: 2, title: 'Build app', done: false }");
    results.push("];");
    results.push("");
    results.push("function toggleDone(tasks, id) {");
    results.push("  return tasks.map(task =>");
    results.push("    task.id === id ? { ...task, done: !task.done } : task");
    results.push("  );");
    results.push("}");
    results.push("");
    results.push("// Original array unchanged");
    results.push("tasks[0].done → false");
    
    return results;
}

function arrayReferenceText() {
    return arrayData().join('\n');
}

function logArrayOnly() {
    emitConsoleAnswer(arrayReferenceText());
}

// ============================================
// BONUS: Optional Chaining
// ============================================

function optionalData() {
    var results = [];
    
    results.push("=== Bonus: Safe Deep Read (Optional Chaining) ===");
    results.push("");
    results.push("const data = { user: { name: 'Priya', profile: { city: null } } };");
    results.push("");
    results.push("// Safe read with fallback");
    results.push("const city = data?.user?.profile?.city ?? 'Unknown'; // 'Unknown' (null)");
    results.push("");
    results.push("// Safe length access");
    results.push("const bioLength = data?.user?.profile?.bio?.length ?? 0; // 0");
    results.push("");
    results.push("// With empty object:");
    results.push("const empty = {};");
    results.push("empty?.user?.profile?.city ?? 'Unknown' → 'Unknown' (no crash!)");
    
    return results;
}

function optionalReferenceText() {
    return optionalData().join('\n');
}

function logOptionalOnly() {
    emitConsoleAnswer(optionalReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. Deep nested immutable update (4 levels):");
    results.push("   const deep = { level1: { level2: { level3: { level4: { value: 42 } } } } };");
    results.push("   const updated = {");
    results.push("     ...deep,");
    results.push("     level1: {");
    results.push("       ...deep.level1,");
    results.push("       level2: {");
    results.push("         ...deep.level1.level2,");
    results.push("         level3: {");
    results.push("           ...deep.level1.level2.level3,");
    results.push("           level4: { ...deep.level1.level2.level3.level4, value: 100 }");
    results.push("         }");
    results.push("       }");
    results.push("     }");
    results.push("   };");
    results.push("");
    results.push("2. deepFreeze implementation:");
    results.push("   function deepFreeze(obj) {");
    results.push("     Object.values(obj).forEach(v => {");
    results.push("       if (v && typeof v === 'object') deepFreeze(v);");
    results.push("     });");
    results.push("     return Object.freeze(obj);");
    results.push("   }");
    results.push("");
    results.push("3. structuredClone handles: Date, Map, Set, RegExp, ArrayBuffer");
    results.push("");
    results.push("4. pick(obj, keys) helper:");
    results.push("   function pick(obj, keys) {");
    results.push("     return keys.reduce((result, key) => {");
    results.push("       if (key in obj) result[key] = obj[key];");
    results.push("       return result;");
    results.push("     }, {});");
    results.push("   }");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/object-copy");
    results.push("• https://javascript.info/optional-chaining");
    
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
    shallow: logShallowOnly,
    immutable: logImmutableOnly,
    array: logArrayOnly,
    optional: logOptionalOnly,
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
    // Task 1 Demo: Shallow Clone Bug
    var shallowBtn = document.getElementById('run-shallow-demo');
    var structureBtn = document.getElementById('run-structure-demo');
    var shallowResult = document.getElementById('shallow-result');
    
    if (shallowBtn && shallowResult) {
        shallowBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Shallow Clone Bug Demo ===");
            output.push("");
            
            var orig = { name: "Priya", addr: { city: "Jaipur" } };
            output.push("const orig = { name: 'Priya', addr: { city: 'Jaipur' } };");
            output.push("");
            
            var copy = { ...orig };
            output.push("const copy = { ...orig };");
            output.push("copy.addr.city = 'Mumbai';");
            copy.addr.city = "Mumbai";
            
            output.push("");
            output.push("copy.addr.city: " + copy.addr.city);
            output.push("orig.addr.city: " + orig.addr.city);
            output.push("");
            output.push("❌ BUG! Original was mutated because spread is SHALLOW!");
            output.push("Nested objects still reference the same memory location.");
            
            shallowResult.textContent = output.join('\n');
        });
    }
    
    if (structureBtn && shallowResult) {
        structureBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== structuredClone Demo ===");
            output.push("");
            
            var orig = { name: "Priya", addr: { city: "Jaipur" } };
            output.push("const orig = { name: 'Priya', addr: { city: 'Jaipur' } };");
            output.push("");
            
            var deep = structuredClone(orig);
            output.push("const deep = structuredClone(orig);");
            output.push("deep.addr.city = 'Delhi';");
            deep.addr.city = "Delhi";
            
            output.push("");
            output.push("deep.addr.city: " + deep.addr.city);
            output.push("orig.addr.city: " + orig.addr.city);
            output.push("");
            output.push("✅ Original unchanged! structuredClone creates a true DEEP clone.");
            
            shallowResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: Immutable Nested Update
    var immutableBtn = document.getElementById('run-immutable-demo');
    var immutableResult = document.getElementById('immutable-result');
    
    if (immutableBtn && immutableResult) {
        immutableBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Immutable Nested Update Demo ===");
            output.push("");
            
            var state = {
                user: {
                    name: "Priya",
                    prefs: { theme: "light", lang: "en" }
                }
            };
            output.push("const state = { user: { name: 'Priya', prefs: { theme: 'light', lang: 'en' } } };");
            output.push("");
            
            var newState = {
                ...state,
                user: {
                    ...state.user,
                    prefs: { ...state.user.prefs, theme: "dark" }
                }
            };
            output.push("const newState = {");
            output.push("  ...state,");
            output.push("  user: {");
            output.push("    ...state.user,");
            output.push("    prefs: { ...state.user.prefs, theme: 'dark' }");
            output.push("  }");
            output.push("};");
            output.push("");
            
            output.push("newState.user.prefs.theme: " + newState.user.prefs.theme);
            output.push("state.user.prefs.theme: " + state.user.prefs.theme);
            output.push("");
            output.push("✅ Original unchanged! Each level was spread to create new objects.");
            
            immutableResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: Array Immutable Update
    var arrayBtn = document.getElementById('run-array-demo');
    var arrayResult = document.getElementById('array-result');
    
    if (arrayBtn && arrayResult) {
        arrayBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Array Immutable Update Demo ===");
            output.push("");
            
            var tasks = [
                { id: 1, title: "Learn JS", done: false },
                { id: 2, title: "Build app", done: false }
            ];
            output.push("const tasks = [");
            output.push("  { id: 1, title: 'Learn JS', done: false },");
            output.push("  { id: 2, title: 'Build app', done: false }");
            output.push("];");
            output.push("");
            
            function toggleDone(tasksArr, id) {
                return tasksArr.map(function(task) {
                    return task.id === id ? { ...task, done: !task.done } : task;
                });
            }
            
            output.push("function toggleDone(tasks, id) {");
            output.push("  return tasks.map(task =>");
            output.push("    task.id === id ? { ...task, done: !task.done } : task");
            output.push("  );");
            output.push("}");
            output.push("");
            
            var newTasks = toggleDone(tasks, 1);
            output.push("const newTasks = toggleDone(tasks, 1);");
            output.push("");
            output.push("Original tasks[0].done: " + tasks[0].done);
            output.push("New tasks[0].done: " + newTasks[0].done);
            output.push("");
            output.push("✅ Original array unchanged! map + spread creates new array with updated object.");
            
            arrayResult.textContent = output.join('\n');
        });
    }
    
    // Bonus Demo: Optional Chaining
    var optionalBtn = document.getElementById('run-optional-demo');
    var optionalResult = document.getElementById('optional-result');
    
    if (optionalBtn && optionalResult) {
        optionalBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Optional Chaining & Nullish Coalescing Demo ===");
            output.push("");
            
            var data = { user: { name: "Priya", profile: { city: null } } };
            output.push("const data = { user: { name: 'Priya', profile: { city: null } } };");
            output.push("");
            
            var city = data?.user?.profile?.city ?? "Unknown";
            output.push("data?.user?.profile?.city ?? 'Unknown' → " + city);
            output.push("");
            
            var bioLength = data?.user?.profile?.bio?.length ?? 0;
            output.push("data?.user?.profile?.bio?.length ?? 0 → " + bioLength);
            output.push("");
            
            output.push("--- Testing with empty object ---");
            var empty = {};
            output.push("const empty = {};");
            var emptyCity = empty?.user?.profile?.city ?? "Unknown";
            output.push("empty?.user?.profile?.city ?? 'Unknown' → " + emptyCity);
            output.push("");
            output.push("✅ No crash! Optional chaining returns undefined, nullish coalescing provides fallback.");
            
            optionalResult.textContent = output.join('\n');
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
    var outShallow = document.getElementById('outShallow');
    var outImmutable = document.getElementById('outImmutable');
    var outArray = document.getElementById('outArray');
    var outOptional = document.getElementById('outOptional');
    var outPractice = document.getElementById('outPractice');
    
    if (outShallow) outShallow.textContent = shallowReferenceText();
    if (outImmutable) outImmutable.textContent = immutableReferenceText();
    if (outArray) outArray.textContent = arrayReferenceText();
    if (outOptional) outOptional.textContent = optionalReferenceText();
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