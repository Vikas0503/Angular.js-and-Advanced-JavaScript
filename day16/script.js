// ============================================
// ADVANCED DAY 4 - PROTOTYPES & PROTOTYPE CHAIN
// Topics: [[Prototype]], Object.create, prototype chain, hasOwnProperty vs in, constructor functions
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
        '<div class="task-title">🔗 Every Object Has a Prototype</div>' +
        '<pre><code>const user = { name: "Priya" };\n' +
        '// Every object literal\'s prototype is Object.prototype\n' +
        'console.log(Object.getPrototypeOf(user) === Object.prototype); // true\n\n' +
        '// user has no .toString() of its own — but it can call one!\n' +
        'console.log(user.toString()); // "[object Object]"\n' +
        '// toString lives on Object.prototype\n\n' +
        '// At the END of the chain: null\n' +
        'console.log(Object.getPrototypeOf(Object.prototype)); // null</code></pre>' +
        '<div class="chain-viz">' +
        '<div class="proto-level">📦 user { name: "Priya" }</div>' +
        '<div class="proto-level">⬇ [[Prototype]]</div>' +
        '<div class="proto-level">📦 Object.prototype { toString, hasOwnProperty, ... }</div>' +
        '<div class="proto-level">⬇ [[Prototype]]</div>' +
        '<div class="proto-level">🔚 null</div>' +
        '</div>' +
        '<span class="badge">✓ Every object has a hidden [[Prototype]] link to another object</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📦 Object.create</div>' +
        '<pre><code>const animal = {\n' +
        '  eat() { console.log(`${this.name} is eating`); }\n' +
        '};\n\n' +
        '// dog inherits from animal\n' +
        'const dog = Object.create(animal);\n' +
        'dog.name = "Bruno";\n' +
        'dog.eat(); // "Bruno is eating" ← method found on animal\n\n' +
        'console.log(dog.hasOwnProperty("name")); // true ← own\n' +
        'console.log(dog.hasOwnProperty("eat")); // false ← inherited</code></pre>' +
        '<span class="badge">✓ Object.create() creates a new object with a specific prototype</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⛓️ The Prototype Chain & Property Lookup</div>' +
        '<pre><code>const grandparent = { lastName: "Sharma" };\n' +
        'const parent = Object.create(grandparent);\n' +
        'parent.firstName = "Priya";\n' +
        'const child = Object.create(parent);\n' +
        'child.age = 5;\n\n' +
        '// READ — walks up the chain\n' +
        'console.log(child.age);        // 5 ← own\n' +
        'console.log(child.firstName); // "Priya" ← from parent\n' +
        'console.log(child.lastName);  // "Sharma" ← from grandparent\n\n' +
        '// WRITE — creates an own property; prototype untouched\n' +
        'child.firstName = "Anaya";\n' +
        'console.log(child.firstName); // "Anaya" ← own now shadows parent\'s\n' +
        'console.log(parent.firstName); // "Priya" ← unchanged</code></pre>' +
        '<span class="badge">✓ Read walks up chain; Write creates own property</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔍 hasOwnProperty vs in</div>' +
        '<pre><code>const animal = { eat() {} };\n' +
        'const dog = Object.create(animal);\n' +
        'dog.bark = () => console.log("woof");\n\n' +
        'console.log(dog.hasOwnProperty("bark"));   // true — own\n' +
        'console.log(dog.hasOwnProperty("eat"));    // false — inherited\n' +
        'console.log("bark" in dog);                // true — found on dog\n' +
        'console.log("eat" in dog);                 // true — found on animal\n' +
        'console.log("toString" in dog);            // true — found on Object.prototype</code></pre>' +
        '<span class="badge">✓ hasOwnProperty = own only; in = anywhere in chain</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🏗️ Constructor Functions (Pre-ES6)</div>' +
        '<pre><code>function User(name, city) {\n' +
        '  this.name = name;\n' +
        '  this.city = city;\n' +
        '}\n\n' +
        'User.prototype.greet = function() {\n' +
        '  console.log(`Hi, I\'m ${this.name} from ${this.city}`);\n' +
        '};\n\n' +
        'const a = new User("Priya", "Jaipur");\n' +
        'const b = new User("Aarav", "Mumbai");\n' +
        'a.greet(); // "Hi, I\'m Priya from Jaipur"\n\n' +
        '// Inheritance\n' +
        'function Admin(name, city, level) {\n' +
        '  User.call(this, name, city);\n' +
        '  this.level = level;\n' +
        '}\n' +
        'Admin.prototype = Object.create(User.prototype);\n' +
        'Admin.prototype.constructor = Admin;</code></pre>' +
        '<span class="badge">✓ Methods go on prototype to save memory; this is the OLD way</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⚠️ Don\'t Modify Built-in Prototypes</div>' +
        '<pre><code>// DON\'T do this (in real code)\n' +
        'Array.prototype.last = function() {\n' +
        '  return this[this.length - 1];\n' +
        '};\n\n' +
        'const fruits = ["apple", "mango", "banana"];\n' +
        'console.log(fruits.last()); // "banana"\n\n' +
        '// SAFER alternative — free function\n' +
        'function last(arr) { return arr[arr.length - 1]; }</code></pre>' +
        '<div class="warning-box">⚠️ Modifying built-in prototypes can cause conflicts with libraries and future ECMAScript versions!</div>' +
        '<span class="badge">✓ Prefer utility functions over monkey-patching built-ins</span>' +
        '</div>';
}

// ============================================
// TASK 1: Inspect a Prototype Chain
// ============================================

function inspectData() {
    var results = [];
    
    results.push("=== Task 1: Inspect a Prototype Chain ===");
    results.push("");
    results.push("const arr = [1, 2, 3];");
    results.push("");
    results.push("Object.getPrototypeOf(arr) → Array.prototype");
    results.push("Object.getPrototypeOf(Array.prototype) → Object.prototype");
    results.push("Object.getPrototypeOf(Object.prototype) → null");
    results.push("");
    results.push("THE CHAIN:");
    results.push("  [1, 2, 3]");
    results.push("      ↓ [[Prototype]]");
    results.push("  Array.prototype (push, pop, map, filter, etc.)");
    results.push("      ↓ [[Prototype]]");
    results.push("  Object.prototype (toString, hasOwnProperty, etc.)");
    results.push("      ↓ [[Prototype]]");
    results.push("  null (end of chain)");
    
    return results;
}

function inspectReferenceText() {
    return inspectData().join('\n');
}

function logInspectOnly() {
    emitConsoleAnswer(inspectReferenceText());
}

// ============================================
// TASK 2: Build with Object.create
// ============================================

function inspectData() {
    var results = [];
    
    results.push("=== Task 1: Inspect a Prototype Chain ===");
    results.push("");
    results.push("const arr = [1, 2, 3];");
    results.push("");
    results.push("Object.getPrototypeOf(arr) → Array.prototype");
    results.push("Object.getPrototypeOf(Array.prototype) → Object.prototype");
    results.push("Object.getPrototypeOf(Object.prototype) → null");
    results.push("");
    results.push("THE CHAIN:");
    results.push("  [1, 2, 3]");
    results.push("      ↓ [[Prototype]]");
    results.push("  Array.prototype (push, pop, map, filter, etc.)");
    results.push("      ↓ [[Prototype]]");
    results.push("  Object.prototype (toString, hasOwnProperty, etc.)");
    results.push("      ↓ [[Prototype]]");
    results.push("  null (end of chain)");
    
    return results;
}

function inspectReferenceText() {
    return inspectData().join('\n');
}

function logInspectOnly() {
    emitConsoleAnswer(inspectReferenceText());
}

// ============================================
// TASK 2: Build with Object.create
// ============================================

function createData() {
    var results = [];
    
    results.push("=== Task 2: Build with Object.create ===");
    results.push("");
    results.push("const vehicle = {");
    results.push("  start() { console.log(`${this.name} is starting`); }");
    results.push("};");
    results.push("");
    results.push("const car = Object.create(vehicle);");
    results.push("car.name = 'Tata Nexon';");
    results.push("");
    results.push("const bike = Object.create(vehicle);");
    results.push("bike.name = 'Royal Enfield';");
    results.push("");
    results.push("car.start(); // 'Tata Nexon is starting'");
    results.push("bike.start(); // 'Royal Enfield is starting'");
    results.push("");
    results.push("PROPERTY CHECKS:");
    results.push("  car.hasOwnProperty('name') → true (own property)");
    results.push("  car.hasOwnProperty('start') → false (inherited)");
    results.push("  'start' in car → true (found in prototype)");
    
    return results;
}

function createReferenceText() {
    return createData().join('\n');
}

function logCreateOnly() {
    emitConsoleAnswer(createReferenceText());
}

// ============================================
// TASK 3: Constructor Function Inheritance
// ============================================

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return "Hi, I'm " + this.name;
};

function Student(name, school) {
    Person.call(this, name);
    this.school = school;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
    return this.name + " studies at " + this.school;
};

function constructorData() {
    var results = [];
    
    results.push("=== Task 3: Constructor Function Inheritance ===");
    results.push("");
    results.push("function Person(name) {");
    results.push("  this.name = name;");
    results.push("}");
    results.push("");
    results.push("Person.prototype.greet = function() {");
    results.push("  return `Hi, I'm ${this.name}`;");
    results.push("};");
    results.push("");
    results.push("function Student(name, school) {");
    results.push("  Person.call(this, name); // borrow Person's constructor");
    results.push("  this.school = school;");
    results.push("}");
    results.push("");
    results.push("// Link prototypes");
    results.push("Student.prototype = Object.create(Person.prototype);");
    results.push("Student.prototype.constructor = Student;");
    results.push("");
    results.push("Student.prototype.study = function() {");
    results.push("  return `${this.name} studies at ${this.school}`;");
    results.push("};");
    results.push("");
    results.push("const student = new Student('Riya', 'IIT Delhi');");
    results.push("student.greet(); // 'Hi, I'm Riya'");
    results.push("student.study(); // 'Riya studies at IIT Delhi'");
    
    return results;
}

function constructorReferenceText() {
    return constructorData().join('\n');
}

function logConstructorOnly() {
    emitConsoleAnswer(constructorReferenceText());
}

// ============================================
// BONUS: hasOwnProperty vs in
// ============================================

function hasOwnData() {
    var results = [];
    
    results.push("=== Bonus: hasOwnProperty vs in ===");
    results.push("");
    results.push("const dog = Object.create({ species: 'Canis' });");
    results.push("dog.name = 'Bruno';");
    results.push("");
    results.push("dog.hasOwnProperty('name') → true (name is directly on dog)");
    results.push("dog.hasOwnProperty('species') → false (species is on prototype)");
    results.push("'name' in dog → true (found on dog)");
    results.push("'species' in dog → true (found on prototype)");
    results.push("'toString' in dog → true (found on Object.prototype)");
    results.push("");
    results.push("RULE OF THUMB:");
    results.push("  • hasOwnProperty → checks ONLY own properties");
    results.push("  • in → checks ENTIRE prototype chain");
    results.push("  • Use hasOwnProperty when you need to know if property belongs directly to object");
    results.push("  • Use in when you need to know if property exists anywhere in chain");
    
    return results;
}

function hasOwnReferenceText() {
    return hasOwnData().join('\n');
}

function logHasOwnOnly() {
    emitConsoleAnswer(hasOwnReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. Three-level chain with Object.create:");
    results.push("   const tool = { use() { return 'Using tool'; } };");
    results.push("   const vehicle = Object.create(tool);");
    results.push("   vehicle.drive = function() { return 'Driving vehicle'; };");
    results.push("   const car = Object.create(vehicle);");
    results.push("   car.honk = function() { return 'Beep beep!'; };");
    results.push("");
    results.push("2. Shape and Circle constructors:");
    results.push("   function Shape(name) { this.name = name; }");
    results.push("   Shape.prototype.describe = function() {");
    results.push("     return 'Shape: ' + this.name;");
    results.push("   };");
    results.push("   function Circle(name, radius) {");
    results.push("     Shape.call(this, name);");
    results.push("     this.radius = radius;");
    results.push("   }");
    results.push("   Circle.prototype = Object.create(Shape.prototype);");
    results.push("   Circle.prototype.area = function() {");
    results.push("     return Math.PI * this.radius * this.radius;");
    results.push("   };");
    results.push("");
    results.push("3. Built-in prototype methods (String.prototype):");
    results.push("   • startsWith(), endsWith(), includes()");
    results.push("   • padStart(), padEnd()");
    results.push("   • trimStart(), trimEnd()");
    results.push("   • repeat(), replaceAll()");
    results.push("");
    results.push("4. chainOf() function:");
    results.push("   function chainOf(obj) {");
    results.push("     const chain = [];");
    results.push("     let current = obj;");
    results.push("     while (current !== null) {");
    results.push("       chain.push(current);");
    results.push("       current = Object.getPrototypeOf(current);");
    results.push("     }");
    results.push("     return chain;");
    results.push("   }");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/prototype-inheritance");
    results.push("• https://javascript.info/function-prototype");
    
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
    inspect: logInspectOnly,
    create: logCreateOnly,
    constructor: logConstructorOnly,
    hasown: logHasOwnOnly,
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
    // Task 1 Demo: Inspect prototype chain
    var inspectBtn = document.getElementById('run-inspect-demo');
    var inspectResult = document.getElementById('inspect-result');
    
    if (inspectBtn && inspectResult) {
        inspectBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Inspecting Array Prototype Chain ===");
            output.push("");
            
            var arr = [1, 2, 3];
            output.push("const arr = [1, 2, 3];");
            output.push("");
            
            var level1 = Object.getPrototypeOf(arr);
            output.push("Level 1 (Array.prototype):");
            output.push("  " + (level1.constructor ? level1.constructor.name : 'null'));
            output.push("");
            
            var level2 = Object.getPrototypeOf(level1);
            output.push("Level 2 (Object.prototype):");
            output.push("  " + (level2.constructor ? level2.constructor.name : 'null'));
            output.push("");
            
            var level3 = Object.getPrototypeOf(level2);
            output.push("Level 3:");
            output.push("  " + level3);
            output.push("");
            
            output.push("CHAIN:");
            output.push("  [1, 2, 3] → Array.prototype → Object.prototype → null");
            
            inspectResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: Object.create
    var createBtn = document.getElementById('run-create-demo');
    var createResult = document.getElementById('create-result');
    
    if (createBtn && createResult) {
        createBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Object.create Demo ===");
            output.push("");
            
            var vehicle = {
                start: function() {
                    return this.name + " is starting";
                }
            };
            
            var car = Object.create(vehicle);
            car.name = "Tata Nexon";
            
            var bike = Object.create(vehicle);
            bike.name = "Royal Enfield";
            
            output.push("vehicle.start() method exists on prototype");
            output.push("");
            output.push("car.start(): " + car.start());
            output.push("bike.start(): " + bike.start());
            output.push("");
            output.push("Property checks:");
            output.push("  car.hasOwnProperty('name'): " + car.hasOwnProperty('name'));
            output.push("  car.hasOwnProperty('start'): " + car.hasOwnProperty('start'));
            output.push("  'start' in car: " + ('start' in car));
            
            createResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: Constructor inheritance
    var constructorBtn = document.getElementById('run-constructor-demo');
    var constructorResult = document.getElementById('constructor-result');
    
    if (constructorBtn && constructorResult) {
        constructorBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Constructor Function Inheritance Demo ===");
            output.push("");
            
            function Person(name) {
                this.name = name;
            }
            Person.prototype.greet = function() {
                return "Hi, I'm " + this.name;
            };
            
            function Student(name, school) {
                Person.call(this, name);
                this.school = school;
            }
            Student.prototype = Object.create(Person.prototype);
            Student.prototype.constructor = Student;
            Student.prototype.study = function() {
                return this.name + " studies at " + this.school;
            };
            
            var student = new Student("Riya", "IIT Delhi");
            
            output.push("student.greet(): " + student.greet());
            output.push("student.study(): " + student.study());
            output.push("");
            output.push("Prototype chain:");
            output.push("  student → Student.prototype → Person.prototype → Object.prototype → null");
            output.push("");
            output.push("student instanceof Person: " + (student instanceof Person));
            output.push("student instanceof Student: " + (student instanceof Student));
            
            constructorResult.textContent = output.join('\n');
        });
    }
    
    // Bonus Demo: hasOwnProperty vs in
    var hasOwnBtn = document.getElementById('run-hasown-demo');
    var hasOwnResult = document.getElementById('hasown-result');
    
    if (hasOwnBtn && hasOwnResult) {
        hasOwnBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== hasOwnProperty vs in Demo ===");
            output.push("");
            
            var dog = Object.create({ species: "Canis" });
            dog.name = "Bruno";
            
            output.push("const dog = Object.create({ species: 'Canis' });");
            output.push("dog.name = 'Bruno';");
            output.push("");
            output.push("dog.hasOwnProperty('name'): " + dog.hasOwnProperty('name'));
            output.push("  → true (name is directly on dog)");
            output.push("");
            output.push("dog.hasOwnProperty('species'): " + dog.hasOwnProperty('species'));
            output.push("  → false (species is on prototype)");
            output.push("");
            output.push("'name' in dog: " + ('name' in dog));
            output.push("  → true (found on dog)");
            output.push("");
            output.push("'species' in dog: " + ('species' in dog));
            output.push("  → true (found on prototype)");
            output.push("");
            output.push("'toString' in dog: " + ('toString' in dog));
            output.push("  → true (found on Object.prototype)");
            
            hasOwnResult.textContent = output.join('\n');
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
    var outInspect = document.getElementById('outInspect');
    var outCreate = document.getElementById('outCreate');
    var outConstructor = document.getElementById('outConstructor');
    var outHasOwn = document.getElementById('outHasOwn');
    var outPractice = document.getElementById('outPractice');
    
    if (outInspect) outInspect.textContent = inspectReferenceText();
    if (outCreate) outCreate.textContent = createReferenceText();
    if (outConstructor) outConstructor.textContent = constructorReferenceText();
    if (outHasOwn) outHasOwn.textContent = hasOwnReferenceText();
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