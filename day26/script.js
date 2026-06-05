// ============================================
// ADVANCED DAY 14 - DESIGN PATTERNS
// Topics: Module Pattern, Observer (Pub/Sub), Factory, Singleton, ES6 Proxy
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
        '<div class="task-title">📦 Module Pattern</div>' +
        '<pre><code>// CLASSIC closure-based module (pre-ES6)\n' +
        'const counter = (function () {\n' +
        '  let count = 0;                    // private\n' +
        '  function increment() { count++; }\n' +
        '  function get()       { return count; }\n' +
        '  return { increment, get };\n' +
        '})();\n\n' +
        'counter.increment();\n' +
        'console.log(counter.get());         // 1\n' +
        'console.log(counter.count);         // undefined — private!\n\n' +
        '// MODERN ES-module equivalent\n' +
        '// counter.js:\n' +
        '//   let count = 0;\n' +
        '//   export function increment() { count++; }\n' +
        '//   export function get() { return count; }</code></pre>' +
        '<span class="badge">✓ Modules bundle code and hide internals via closures or ES modules</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📡 Observer (Pub/Sub)</div>' +
        '<pre><code>function createEmitter() {\n' +
        '  const listeners = new Map();\n' +
        '  return {\n' +
        '    on(event, callback) {\n' +
        '      if (!listeners.has(event)) listeners.set(event, new Set());\n' +
        '      listeners.get(event).add(callback);\n' +
        '    },\n' +
        '    off(event, callback) { listeners.get(event)?.delete(callback); },\n' +
        '    emit(event, ...args) {\n' +
        '      listeners.get(event)?.forEach(cb => cb(...args));\n' +
        '    }\n' +
        '  };\n' +
        '}\n\n' +
        'const bus = createEmitter();\n' +
        'bus.on("user:signup", user => console.log(user.email));\n' +
        'bus.emit("user:signup", { id: 1, email: "priya@example.com" });</code></pre>' +
        '<span class="badge">✓ Observer pattern: subject notifies many subscribers</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🏭 Factory Pattern</div>' +
        '<pre><code>function createUser(name, role = "user") {\n' +
        '  return {\n' +
        '    name,\n' +
        '    role,\n' +
        '    greet() { return "Hi, I\\\'m " + this.name + " (" + this.role + ")"; }\n' +
        '  };\n' +
        '}\n\n' +
        'const u1 = createUser("Priya");\n' +
        'const u2 = createUser("Aarav", "admin");\n' +
        'console.log(u1.greet()); // "Hi, I\\\'m Priya (user)"</code></pre>' +
        '<span class="badge">✓ Factory pattern: functions that return objects</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">💎 Singleton Pattern</div>' +
        '<pre><code>// Classic singleton class\n' +
        'class Logger {\n' +
        '  static #instance = null;\n' +
        '  constructor() {\n' +
        '    if (Logger.#instance) return Logger.#instance;\n' +
        '    Logger.#instance = this;\n' +
        '    this.logs = [];\n' +
        '  }\n' +
        '  log(msg) { this.logs.push(msg); console.log(msg); }\n' +
        '}\n\n' +
        '// MODERN equivalent — export instance\n' +
        '// logger.js:\n' +
        '//   class Logger { ... }\n' +
        '//   export default new Logger();</code></pre>' +
        '<span class="badge">✓ Singleton ensures exactly one instance; ES modules give this for free</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🪄 ES6 Proxy</div>' +
        '<pre><code>const target = { name: "Priya", age: 25 };\n' +
        'const handler = {\n' +
        '  get(obj, prop) { console.log("reading " + prop); return obj[prop]; },\n' +
        '  set(obj, prop, value) {\n' +
        '    if (prop === "age" && typeof value !== "number") {\n' +
        '      throw new TypeError("age must be a number");\n' +
        '    }\n' +
        '    console.log("setting " + prop + " = " + value);\n' +
        '    obj[prop] = value;\n' +
        '    return true;\n' +
        '  }\n' +
        '};\n' +
        'const user = new Proxy(target, handler);</code></pre>' +
        '<span class="badge">✓ Proxy intercepts object operations — enables reactivity</span>' +
        '</div>';
}

// ============================================
// TASK 1: Tiny EventEmitter (Observer Pattern)
// ============================================

function createEmitter() {
    var listeners = new Map();
    
    return {
        on: function(event, callback) {
            if (!listeners.has(event)) {
                listeners.set(event, new Set());
            }
            listeners.get(event).add(callback);
        },
        off: function(event, callback) {
            var callbacks = listeners.get(event);
            if (callbacks) {
                callbacks.delete(callback);
            }
        },
        emit: function(event) {
            var args = Array.prototype.slice.call(arguments, 1);
            var callbacks = listeners.get(event);
            if (callbacks) {
                callbacks.forEach(function(cb) {
                    cb.apply(null, args);
                });
            }
        }
    };
}

function emitterData() {
    var results = [];
    
    results.push("=== Task 1: Tiny EventEmitter (Observer Pattern) ===");
    results.push("");
    results.push("function createEmitter() {");
    results.push("  const listeners = new Map();");
    results.push("  return {");
    results.push("    on(event, cb) { ... },");
    results.push("    off(event, cb) { ... },");
    results.push("    emit(event, ...args) { ... }");
    results.push("  };");
    results.push("}");
    results.push("");
    results.push("// Usage:");
    results.push("const bus = createEmitter();");
    results.push("bus.on('hello', () => console.log('Listener A'));");
    results.push("bus.on('hello', () => console.log('Listener B'));");
    results.push("bus.emit('hello'); // Both fire");
    results.push("bus.off('hello', listenerA);");
    results.push("bus.emit('hello'); // Only B fires");
    
    return results;
}

function emitterReferenceText() {
    return emitterData().join('\n');
}

function logEmitterOnly() {
    emitConsoleAnswer(emitterReferenceText());
}

// ============================================
// TASK 2: User Factory (Factory Pattern)
// ============================================

function createUser(name, role) {
    var userRole = (role === undefined) ? "user" : role;
    return {
        name: name,
        role: userRole,
        canEdit: function() {
            return this.role === "admin";
        }
    };
}

function factoryData() {
    var results = [];
    
    results.push("=== Task 2: User Factory (Factory Pattern) ===");
    results.push("");
    results.push("function createUser(name, role = 'user') {");
    results.push("  return {");
    results.push("    name,");
    results.push("    role,");
    results.push("    canEdit() { return this.role === 'admin'; }");
    results.push("  };");
    results.push("}");
    results.push("");
    results.push("// Usage:");
    results.push("const defaultUser = createUser('Priya');");
    results.push("const admin = createUser('Aarav', 'admin');");
    results.push("defaultUser.canEdit(); // false");
    results.push("admin.canEdit(); // true");
    
    return results;
}

function factoryReferenceText() {
    return factoryData().join('\n');
}

function logFactoryOnly() {
    emitConsoleAnswer(factoryReferenceText());
}

// ============================================
// TASK 3: Module-Singleton Cache
// ============================================

function createCache() {
    var storage = new Map();
    
    return {
        set: function(key, value) {
            storage.set(key, value);
        },
        get: function(key) {
            return storage.get(key);
        },
        has: function(key) {
            return storage.has(key);
        },
        size: function() {
            return storage.size;
        }
    };
}

function cacheData() {
    var results = [];
    
    results.push("=== Task 3: Module-Singleton Cache ===");
    results.push("");
    results.push("function createCache() {");
    results.push("  const storage = new Map();");
    results.push("  return { set, get, has, size };");
    results.push("}");
    results.push("");
    results.push("// Independent caches (factory pattern):");
    results.push("const cache1 = createCache();");
    results.push("const cache2 = createCache();");
    results.push("// cache1.set('a', 1); cache2.get('a') -> undefined");
    results.push("");
    results.push("// Singleton via ES module:");
    results.push("// cache.js -> export default createCache();");
    results.push("// Every import gets the SAME instance!");
    
    return results;
}

function cacheReferenceText() {
    return cacheData().join('\n');
}

function logCacheOnly() {
    emitConsoleAnswer(cacheReferenceText());
}

// ============================================
// BONUS: Reactive Counter with Proxy
// ============================================

function reactive(obj, onChange) {
    return new Proxy(obj, {
        set: function(target, prop, value) {
            target[prop] = value;
            onChange(prop, value);
            return true;
        },
        get: function(target, prop) {
            return target[prop];
        }
    });
}

function proxyData() {
    var results = [];
    
    results.push("=== Bonus: Reactive Counter with Proxy ===");
    results.push("");
    results.push("function reactive(obj, onChange) {");
    results.push("  return new Proxy(obj, {");
    results.push("    set(target, prop, value) {");
    results.push("      target[prop] = value;");
    results.push("      onChange(prop, value);");
    results.push("      return true;");
    results.push("    }");
    results.push("  });");
    results.push("}");
    results.push("");
    results.push("// Usage:");
    results.push("const state = reactive({ count: 0 }, (key, val) => {");
    results.push("  console.log(key + ' -> ' + val);");
    results.push("});");
    results.push("");
    results.push("state.count = 1; // logs 'count -> 1'");
    results.push("state.count = 5; // logs 'count -> 5'");
    
    return results;
}

function proxyReferenceText() {
    return proxyData().join('\n');
}

function logProxyOnly() {
    emitConsoleAnswer(proxyReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. once() method for EventEmitter:");
    results.push("   once(event, fn) {");
    results.push("     const wrapper = function(...args) {");
    results.push("       fn.apply(null, args);");
    results.push("       this.off(event, wrapper);");
    results.push("     };");
    results.push("     this.on(event, wrapper);");
    results.push("   }");
    results.push("");
    results.push("2. TTL Cache Factory:");
    results.push("   function createTTLCache(ttl) {");
    results.push("     const cache = new Map();");
    results.push("     return {");
    results.push("       set(key, value) {");
    results.push("         cache.set(key, { value: value, expires: Date.now() + ttl });");
    results.push("       },");
    results.push("       get(key) {");
    results.push("         const entry = cache.get(key);");
    results.push("         if (entry && entry.expires > Date.now()) return entry.value;");
    results.push("         cache.delete(key);");
    results.push("         return undefined;");
    results.push("       }");
    results.push("     };");
    results.push("   }");
    results.push("");
    results.push("3. Array Debugging Proxy:");
    results.push("   const debugArray = new Proxy(arr, {");
    results.push("     get(target, prop) { console.log('read ' + prop); return target[prop]; },");
    results.push("     set(target, prop, val) { console.log('write ' + prop + ' = ' + val); target[prop] = val; return true; },");
    results.push("     deleteProperty(target, prop) { console.log('delete ' + prop); delete target[prop]; return true; }");
    results.push("   });");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/proxy");
    results.push("• https://refactoring.guru/design-patterns");
    
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
    emitter: logEmitterOnly,
    factory: logFactoryOnly,
    cache: logCacheOnly,
    proxy: logProxyOnly,
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
    // Task 1 Demo: EventEmitter
    var emitterBtn = document.getElementById('run-emitter-demo');
    var emitterResult = document.getElementById('emitter-result');
    
    if (emitterBtn && emitterResult) {
        emitterBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== EventEmitter Demo ===");
            output.push("");
            
            var bus = createEmitter();
            var logs = [];
            
            function logA() { logs.push("Listener A fired"); }
            function logB() { logs.push("Listener B fired"); }
            
            bus.on("hello", logA);
            bus.on("hello", logB);
            
            output.push("First emit (two listeners):");
            logs = [];
            bus.emit("hello");
            output.push("  " + logs.join(", "));
            output.push("");
            
            output.push("After removing Listener A:");
            bus.off("hello", logA);
            logs = [];
            bus.emit("hello");
            output.push("  " + logs.join(", "));
            
            emitterResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: Factory
    var factoryBtn = document.getElementById('run-factory-demo');
    var factoryResult = document.getElementById('factory-result');
    
    if (factoryBtn && factoryResult) {
        factoryBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== User Factory Demo ===");
            output.push("");
            
            var defaultUser = createUser("Priya");
            var adminUser = createUser("Aarav", "admin");
            
            output.push("Default user (role='user'):");
            output.push("  name: " + defaultUser.name);
            output.push("  role: " + defaultUser.role);
            output.push("  canEdit: " + defaultUser.canEdit());
            output.push("");
            
            output.push("Admin user (role='admin'):");
            output.push("  name: " + adminUser.name);
            output.push("  role: " + adminUser.role);
            output.push("  canEdit: " + adminUser.canEdit());
            
            factoryResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: Cache
    var cacheBtn = document.getElementById('run-cache-demo');
    var cacheResult = document.getElementById('cache-result');
    
    if (cacheBtn && cacheResult) {
        cacheBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Cache Factory Demo ===");
            output.push("");
            
            var cache1 = createCache();
            var cache2 = createCache();
            
            cache1.set("key", "value from cache1");
            
            output.push("Independent caches:");
            output.push("  cache1.has('key'): " + cache1.has("key"));
            output.push("  cache1.get('key'): " + cache1.get("key"));
            output.push("  cache2.has('key'): " + cache2.has("key"));
            output.push("  cache2.get('key'): " + cache2.get("key"));
            output.push("");
            output.push("✅ Two separate createCache() calls produce INDEPENDENT caches.");
            output.push("");
            output.push("💡 To create a singleton cache, export a single instance from an ES module:");
            output.push("   // cache.js");
            output.push("   const cache = createCache();");
            output.push("   export default cache;");
            
            cacheResult.textContent = output.join('\n');
        });
    }
    
    // Bonus Demo: Proxy
    var proxyBtn = document.getElementById('run-proxy-demo');
    var proxyResult = document.getElementById('proxy-result');
    
    if (proxyBtn && proxyResult) {
        proxyBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Reactive Proxy Demo ===");
            output.push("");
            
            var changeLogs = [];
            var state = reactive({ count: 0 }, function(key, val) {
                changeLogs.push(key + " -> " + val);
            });
            
            output.push("state.count = 1;");
            state.count = 1;
            output.push("state.count = 2;");
            state.count = 2;
            output.push("state.count = 5;");
            state.count = 5;
            output.push("");
            output.push("Change log:");
            for (var i = 0; i < changeLogs.length; i++) {
                output.push("  " + changeLogs[i]);
            }
            output.push("");
            output.push("✅ Proxy traps every property set!");
            output.push("   This is how Vue 3 reactivity works under the hood.");
            
            proxyResult.textContent = output.join('\n');
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
    var outEmitter = document.getElementById('outEmitter');
    var outFactory = document.getElementById('outFactory');
    var outCache = document.getElementById('outCache');
    var outProxy = document.getElementById('outProxy');
    var outPractice = document.getElementById('outPractice');
    
    if (outEmitter) outEmitter.textContent = emitterReferenceText();
    if (outFactory) outFactory.textContent = factoryReferenceText();
    if (outCache) outCache.textContent = cacheReferenceText();
    if (outProxy) outProxy.textContent = proxyReferenceText();
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
