// ============================================
// ADVANCED DAY 5 - CLASSES & OOP
// Topics: Class syntax, getters/setters, extends/super, static methods, private fields, custom errors
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
        '<div class="task-title">🏗️ Class Syntax Basics</div>' +
        '<pre><code>class User {\n' +
        '  constructor(name, city) {\n' +
        '    this.name = name;\n' +
        '    this.city = city;\n' +
        '  }\n' +
        '  greet() {\n' +
        '    console.log(`Hi, I\'m ${this.name} from ${this.city}`);\n' +
        '  }\n' +
        '}\n\n' +
        'const a = new User("Priya", "Jaipur");\n' +
        'const b = new User("Aarav", "Mumbai");\n' +
        'a.greet(); // "Hi, I\'m Priya from Jaipur"\n\n' +
        'console.log(typeof User); // "function"\n' +
        'console.log(a.greet === b.greet); // true (shared)</code></pre>' +
        '<span class="badge">✓ Classes are syntactic sugar over constructor functions</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔧 Getters and Setters</div>' +
        '<pre><code>class Product {\n' +
        '  constructor(name, priceInPaise) {\n' +
        '    this.name = name;\n' +
        '    this._priceInPaise = priceInPaise;\n' +
        '  }\n' +
        '  get priceInRupees() {\n' +
        '    return this._priceInPaise / 100;\n' +
        '  }\n' +
        '  set priceInRupees(rupees) {\n' +
        '    if (rupees < 0) throw new Error("Price cannot be negative");\n' +
        '    this._priceInPaise = rupees * 100;\n' +
        '  }\n' +
        '}\n\n' +
        'const p = new Product("Notebook", 5000);\n' +
        'console.log(p.priceInRupees); // 50 (getter)\n' +
        'p.priceInRupees = 100; // setter</code></pre>' +
        '<span class="badge">✓ Getters/setters look like properties but run code behind the scenes</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🌳 extends and super</div>' +
        '<pre><code>class Animal {\n' +
        '  constructor(name) { this.name = name; }\n' +
        '  speak() { console.log(`${this.name} makes a sound`); }\n' +
        '}\n\n' +
        'class Dog extends Animal {\n' +
        '  constructor(name, breed) {\n' +
        '    super(name); // MUST call super before using this\n' +
        '    this.breed = breed;\n' +
        '  }\n' +
        '  speak() {\n' +
        '    super.speak(); // call parent method\n' +
        '    console.log(`${this.name} barks!`);\n' +
        '  }\n' +
        '}\n\n' +
        'const d = new Dog("Bruno", "Labrador");\n' +
        'd.speak();</code></pre>' +
        '<span class="badge">✓ super() calls parent constructor; super.method() calls parent method</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📊 static Methods</div>' +
        '<pre><code>class MathUtils {\n' +
        '  static gst(amount, rate = 18) {\n' +
        '    return amount * (rate / 100);\n' +
        '  }\n' +
        '}\n\n' +
        'console.log(MathUtils.gst(1000)); // 180\n\n' +
        'class User {\n' +
        '  constructor(name) { this.name = name; }\n' +
        '  static fromEmail(email) {\n' +
        '    const name = email.split("@")[0];\n' +
        '    return new User(name);\n' +
        '  }\n' +
        '}\n\n' +
        'const u = User.fromEmail("priya@example.com");\n' +
        'console.log(u.name); // "priya"</code></pre>' +
        '<span class="badge">✓ Static methods belong to the class, not instances</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🔒 Private Fields with #</div>' +
        '<pre><code>class BankAccount {\n' +
        '  #balance; // private field\n' +
        '  constructor(initial) { this.#balance = initial; }\n' +
        '  deposit(amt) { this.#balance += amt; }\n' +
        '  get balance() { return this.#balance; }\n' +
        '}\n\n' +
        'const acc = new BankAccount(1000);\n' +
        'acc.deposit(500);\n' +
        'console.log(acc.balance); // 1500\n' +
        '// console.log(acc.#balance); // SyntaxError! Private field</code></pre>' +
        '<span class="badge">✓ # fields are truly private — enforced by the language</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">⚠️ Custom Error Classes</div>' +
        '<pre><code>class AppError extends Error {\n' +
        '  constructor(message, code) {\n' +
        '    super(message);\n' +
        '    this.name = this.constructor.name;\n' +
        '    this.code = code;\n' +
        '  }\n' +
        '}\n\n' +
        'class ValidationError extends AppError {\n' +
        '  constructor(field, message) {\n' +
        '    super(message, "VALIDATION_FAILED");\n' +
        '    this.field = field;\n' +
        '  }\n' +
        '}\n\n' +
        'try {\n' +
        '  throw new ValidationError("age", "Must be positive");\n' +
        '} catch (e) {\n' +
        '  if (e instanceof ValidationError) {\n' +
        '    console.log(`[${e.code}] ${e.field}: ${e.message}`);\n' +
        '  }\n' +
        '}</code></pre>' +
        '<span class="badge">✓ Extend Error to create meaningful custom error types</span>' +
        '</div>';
}

// ============================================
// TASK 1: Rectangle Class with Getter
// ============================================

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    get area() {
        return this.width * this.height;
    }
    
    scale(factor) {
        this.width *= factor;
        this.height *= factor;
    }
}

function rectangleData() {
    var results = [];
    
    results.push("=== Task 1: Rectangle Class with Getter ===");
    results.push("");
    results.push("class Rectangle {");
    results.push("  constructor(width, height) {");
    results.push("    this.width = width;");
    results.push("    this.height = height;");
    results.push("  }");
    results.push("  get area() { return this.width * this.height; }");
    results.push("  scale(factor) {");
    results.push("    this.width *= factor;");
    results.push("    this.height *= factor;");
    results.push("  }");
    results.push("}");
    results.push("");
    results.push("const rect = new Rectangle(2, 3);");
    results.push("rect.area → 6");
    results.push("rect.scale(2);");
    results.push("rect.area → 24");
    
    return results;
}

function rectangleReferenceText() {
    return rectangleData().join('\n');
}

function logRectangleOnly() {
    emitConsoleAnswer(rectangleReferenceText());
}

// ============================================
// TASK 2: Employee & Manager Inheritance
// ============================================

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
    describe() {
        return this.name + " earns ₹" + this.salary + "/month";
    }
}

class Manager extends Employee {
    constructor(name, salary, team) {
        super(name, salary);
        this.team = team;
    }
    
    describe() {
        var parentDesc = super.describe();
        return parentDesc + "\n  Leads team of " + this.team.length + ": [" + this.team.join(", ") + "]";
    }
}

function inheritanceData() {
    var results = [];
    
    results.push("=== Task 2: Employee & Manager Inheritance ===");
    results.push("");
    results.push("class Employee {");
    results.push("  constructor(name, salary) {");
    results.push("    this.name = name; this.salary = salary;");
    results.push("  }");
    results.push("  describe() { return `${this.name} earns ₹${this.salary}/month`; }");
    results.push("}");
    results.push("");
    results.push("class Manager extends Employee {");
    results.push("  constructor(name, salary, team) {");
    results.push("    super(name, salary);");
    results.push("    this.team = team;");
    results.push("  }");
    results.push("  describe() {");
    results.push("    const parentDesc = super.describe();");
    results.push("    return parentDesc + `\\n  Leads team of ${this.team.length}`;");
    results.push("  }");
    results.push("}");
    results.push("");
    results.push("const m = new Manager('Riya', 80000, ['Priya', 'Aarav', 'Anaya']);");
    results.push("m.describe();");
    
    return results;
}

function inheritanceReferenceText() {
    return inheritanceData().join('\n');
}

function logInheritanceOnly() {
    emitConsoleAnswer(inheritanceReferenceText());
}

// ============================================
// TASK 3: Counter with Private Field
// ============================================

class Counter {
    #count = 0;
    
    inc() {
        this.#count++;
        return this.#count;
    }
    
    dec() {
        if (this.#count <= 0) {
            throw new Error("Cannot decrement below zero");
        }
        this.#count--;
        return this.#count;
    }
    
    get value() {
        return this.#count;
    }
}

function privateData() {
    var results = [];
    
    results.push("=== Task 3: Counter with Private Field ===");
    results.push("");
    results.push("class Counter {");
    results.push("  #count = 0;");
    results.push("");
    results.push("  inc() { this.#count++; return this.#count; }");
    results.push("  dec() {");
    results.push("    if (this.#count <= 0) throw new Error('Cannot decrement below zero');");
    results.push("    this.#count--;");
    results.push("    return this.#count;");
    results.push("  }");
    results.push("  get value() { return this.#count; }");
    results.push("}");
    results.push("");
    results.push("// Private field is NOT accessible from outside");
    results.push("// counter.#count → SyntaxError!");
    
    return results;
}

function privateReferenceText() {
    return privateData().join('\n');
}

function logPrivateOnly() {
    emitConsoleAnswer(privateReferenceText());
}

// ============================================
// BONUS: Custom ValidationError Class
// ============================================

class ValidationError extends Error {
    constructor(field, message) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateUser(user) {
    if (!user.name || user.name.trim() === "") {
        throw new ValidationError("name", "Name is required");
    }
    if (user.age === undefined || user.age === null || user.age < 0) {
        throw new ValidationError("age", "Age must be a positive number");
    }
    return "User is valid";
}

function errorData() {
    var results = [];
    
    results.push("=== Bonus: Custom ValidationError Class ===");
    results.push("");
    results.push("class ValidationError extends Error {");
    results.push("  constructor(field, message) {");
    results.push("    super(message);");
    results.push("    this.name = 'ValidationError';");
    results.push("    this.field = field;");
    results.push("  }");
    results.push("}");
    results.push("");
    results.push("function validateUser({ name, age }) {");
    results.push("  if (!name) throw new ValidationError('name', 'Name is required');");
    results.push("  if (age < 0) throw new ValidationError('age', 'Age must be positive');");
    results.push("}");
    results.push("");
    results.push("try { validateUser({ name: '', age: 25 }); }");
    results.push("catch (e) { e.field === 'name' }");
    results.push("");
    results.push("try { validateUser({ name: 'Riya', age: -5 }); }");
    results.push("catch (e) { e.field === 'age' }");
    
    return results;
}

function errorReferenceText() {
    return errorData().join('\n');
}

function logErrorOnly() {
    emitConsoleAnswer(errorReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. Vehicle, Car, Bike inheritance:");
    results.push("   class Vehicle { start() { return 'Vehicle starting'; } }");
    results.push("   class Car extends Vehicle {");
    results.push("     constructor(brand, doors) { super(); this.brand = brand; this.doors = doors; }");
    results.push("     start() { return super.start() + ' → Car ' + this.brand; }");
    results.push("   }");
    results.push("");
    results.push("2. Static counter tracking:");
    results.push("   class Counter {");
    results.push("     static #totalCount = 0;");
    results.push("     constructor() { Counter.#totalCount++; }");
    results.push("     static get total() { return Counter.#totalCount; }");
    results.push("   }");
    results.push("");
    results.push("3. Temperature class with private #celsius:");
    results.push("   class Temperature {");
    results.push("     #celsius = 0;");
    results.push("     constructor(celsius) { this.#celsius = celsius; }");
    results.push("     get celsius() { return this.#celsius; }");
    results.push("     set celsius(value) {");
    results.push("       if (value < -273.15) throw new Error('Below absolute zero');");
    results.push("       this.#celsius = value;");
    results.push("     }");
    results.push("     get fahrenheit() { return this.#celsius * 9/5 + 32; }");
    results.push("   }");
    results.push("");
    results.push("4. Custom ValidationError extends Error:");
    results.push("   class ValidationError extends Error {");
    results.push("     constructor(message) {");
    results.push("       super(message);");
    results.push("       this.name = 'ValidationError';");
    results.push("     }");
    results.push("   }");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/class");
    results.push("• https://javascript.info/private-protected-properties-methods");
    
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
    rectangle: logRectangleOnly,
    inheritance: logInheritanceOnly,
    private: logPrivateOnly,
    error: logErrorOnly,
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
    // Task 1 Demo: Rectangle
    var rectBtn = document.getElementById('run-rectangle-demo');
    var rectResult = document.getElementById('rectangle-result');
    
    if (rectBtn && rectResult) {
        rectBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Rectangle Demo ===");
            output.push("");
            
            var rect = new Rectangle(2, 3);
            output.push("const rect = new Rectangle(2, 3);");
            output.push("rect.area: " + rect.area);
            output.push("");
            output.push("rect.scale(2);");
            rect.scale(2);
            output.push("rect.area (after scale): " + rect.area);
            output.push("");
            output.push("Width: " + rect.width + ", Height: " + rect.height);
            
            rectResult.textContent = output.join('\n');
        });
    }
    
    // Task 2 Demo: Inheritance
    var inheritBtn = document.getElementById('run-inheritance-demo');
    var inheritResult = document.getElementById('inheritance-result');
    
    if (inheritBtn && inheritResult) {
        inheritBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Employee & Manager Inheritance Demo ===");
            output.push("");
            
            var mgr = new Manager("Riya", 80000, ["Priya", "Aarav", "Anaya"]);
            output.push("const mgr = new Manager('Riya', 80000, ['Priya', 'Aarav', 'Anaya']);");
            output.push("");
            output.push("mgr.describe():");
            output.push(mgr.describe());
            output.push("");
            output.push("mgr instanceof Manager: " + (mgr instanceof Manager));
            output.push("mgr instanceof Employee: " + (mgr instanceof Employee));
            
            inheritResult.textContent = output.join('\n');
        });
    }
    
    // Task 3 Demo: Private Counter
    var privateBtn = document.getElementById('run-private-demo');
    var privateResult = document.getElementById('private-result');
    
    if (privateBtn && privateResult) {
        privateBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== Private Counter Demo ===");
            output.push("");
            
            var counter = new Counter();
            output.push("const counter = new Counter();");
            output.push("");
            output.push("counter.inc(): " + counter.inc());
            output.push("counter.inc(): " + counter.inc());
            output.push("counter.inc(): " + counter.inc());
            output.push("counter.value: " + counter.value);
            output.push("");
            output.push("counter.dec(): " + counter.dec());
            output.push("counter.value: " + counter.value);
            output.push("");
            output.push("Testing decrement below zero:");
            try {
                counter.dec(); // Should work (count becomes 1)
                output.push("counter.dec(): " + counter.value);
                counter.dec(); // Should throw (count becomes 0)
                output.push("counter.dec(): " + counter.value);
                counter.dec(); // Should throw
            } catch (err) {
                output.push("❌ Error caught: " + err.message);
            }
            
            privateResult.textContent = output.join('\n');
        });
    }
    
    // Bonus Demo: ValidationError
    var errorBtn = document.getElementById('run-error-demo');
    var errorResult = document.getElementById('error-result');
    
    if (errorBtn && errorResult) {
        errorBtn.addEventListener('click', function() {
            var output = [];
            output.push("=== ValidationError Demo ===");
            output.push("");
            
            output.push("Test 1: Missing name");
            try {
                validateUser({ age: 25 });
            } catch (err) {
                if (err instanceof ValidationError) {
                    output.push("  Caught ValidationError:");
                    output.push("    field: " + err.field);
                    output.push("    message: " + err.message);
                    output.push("    name: " + err.name);
                }
            }
            
            output.push("");
            output.push("Test 2: Negative age");
            try {
                validateUser({ name: "Riya", age: -5 });
            } catch (err) {
                if (err instanceof ValidationError) {
                    output.push("  Caught ValidationError:");
                    output.push("    field: " + err.field);
                    output.push("    message: " + err.message);
                    output.push("    name: " + err.name);
                }
            }
            
            output.push("");
            output.push("Test 3: Valid user");
            try {
                var result = validateUser({ name: "Priya", age: 25 });
                output.push("  Result: " + result);
            } catch (err) {
                output.push("  Unexpected error: " + err.message);
            }
            
            errorResult.textContent = output.join('\n');
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
    var outRectangle = document.getElementById('outRectangle');
    var outInheritance = document.getElementById('outInheritance');
    var outPrivate = document.getElementById('outPrivate');
    var outError = document.getElementById('outError');
    var outPractice = document.getElementById('outPractice');
    
    if (outRectangle) outRectangle.textContent = rectangleReferenceText();
    if (outInheritance) outInheritance.textContent = inheritanceReferenceText();
    if (outPrivate) outPrivate.textContent = privateReferenceText();
    if (outError) outError.textContent = errorReferenceText();
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