// ============================================
// DAY 8 - OBJECTS & DESTRUCTURING
// Class Work: Object properties, methods with this, Object.keys/values/entries
// Homework: Student Object, Bank Account, Destructuring, Object Iteration
// ============================================

// ----- Helper Functions -----
function goBack() {
    window.location.href = '../index.html';
}

// ============================================
// CLASS WORK CONTENT
// ============================================

// Example 1: Basic object with nested properties
const user1 = {
    name: "Priya",
    age: 24,
    city: "Jaipur",
    isActive: true,
    hobbies: ["reading", "trekking"],
    address: {
        street: "MI Road",
        pincode: "302001"
    }
};

// Example 2: Object with methods using 'this'
const user2 = {
    name: "Aarav",
    age: 22,
    greet: function() {
        return "Hello, I am " + this.name;
    },
    birthday: function() {
        this.age = this.age + 1;
        return "Happy birthday! " + this.name + " is now " + this.age;
    }
};

// Example 3: Object.keys, values, entries
const user3 = { name: "Anaya", age: 21, city: "Jaipur" };
const keysResult = Object.keys(user3);
const valuesResult = Object.values(user3);
const entriesResult = Object.entries(user3);

let classWorkOutput = "";
classWorkOutput += "=== Example 1: Basic Object ===\n";
classWorkOutput += "user.name = " + user1.name + "\n";
classWorkOutput += "user.age = " + user1.age + "\n";
classWorkOutput += "user.hobbies[0] = " + user1.hobbies[0] + "\n";
classWorkOutput += "user.address.pincode = " + user1.address.pincode + "\n\n";

classWorkOutput += "=== Example 2: Object with Methods (this) ===\n";
classWorkOutput += "user2.greet() = " + user2.greet() + "\n";
classWorkOutput += "user2.birthday() = " + user2.birthday() + "\n";
classWorkOutput += "user2.age after birthday = " + user2.age + "\n\n";

classWorkOutput += "=== Example 3: Object.keys, values, entries ===\n";
classWorkOutput += "Object.keys(user3) = [" + keysResult.join(", ") + "]\n";
classWorkOutput += "Object.values(user3) = [" + valuesResult.join(", ") + "]\n";
classWorkOutput += "Object.entries(user3) = [[" + entriesResult[0].join(", ") + "], [" + entriesResult[1].join(", ") + "], [" + entriesResult[2].join(", ") + "]]\n";

function buildClassWorkHTML() {
    return `
        <div class="task">
            <div class="task-title">📦 Basic Object with Nested Properties</div>
            <pre><code>const user = {
    name: "Priya",
    age: 24,
    city: "Jaipur",
    isActive: true,
    hobbies: ["reading", "trekking"],
    address: {
        street: "MI Road",
        pincode: "302001"
    }
};</code></pre>
            <div class="output">${classWorkOutput.split('\n').slice(0, 5).join('\n')}</div>
            <span class="badge">✓ Objects can contain nested objects and arrays</span>
        </div>
        
        <div class="task">
            <div class="task-title">🎯 Object Methods with 'this'</div>
            <pre><code>const user = {
    name: "Aarav",
    age: 22,
    greet() {
        return "Hello, I am " + this.name;
    },
    birthday() {
        this.age += 1;
        return "Happy birthday! " + this.name + " is now " + this.age;
    }
};</code></pre>
            <div class="output">${classWorkOutput.split('\n').slice(5, 8).join('\n')}</div>
            <span class="badge">✓ 'this' refers to the current object</span>
        </div>
        
        <div class="task">
            <div class="task-title">🔑 Object.keys, values, entries</div>
            <pre><code>const user = { name: "Anaya", age: 21, city: "Jaipur" };
Object.keys(user);   // ["name", "age", "city"]
Object.values(user); // ["Anaya", 21, "Jaipur"]
Object.entries(user); // [["name","Anaya"], ["age",21], ["city","Jaipur"]]</code></pre>
            <div class="output">${classWorkOutput.split('\n').slice(8).join('\n')}</div>
            <span class="badge">💡 Use entries() with forEach to iterate key-value pairs</span>
        </div>
    `;
}

// ============================================
// TASK 1: Build a Student Object
// ============================================

function studentData() {
    const results = [];
    
    // Step 1: Create student object
    const student = {
        name: "Anaya",
        age: 21,
        city: "Jaipur",
        course: "B.Tech",
        marks: [85, 90, 78]
    };
    
    results.push("=== Step 1: Initial Student Object ===");
    results.push(JSON.stringify(student, null, 2));
    
    // Step 2: Log name, age, and first mark
    results.push("\n=== Step 2: Accessing Properties ===");
    results.push("student.name = " + student.name);
    results.push("student.age = " + student.age);
    results.push("student.marks[0] = " + student.marks[0]);
    
    // Step 3: Add email, update age, delete city
    student.email = "anaya@example.com";
    student.age = 22;
    delete student.city;
    
    results.push("\n=== Step 3: After Modifications ===");
    results.push("Added email: " + student.email);
    results.push("Updated age to: " + student.age);
    results.push("Deleted city property");
    
    results.push("\n=== Final Student Object ===");
    results.push(JSON.stringify(student, null, 2));
    
    results.push("\n=== Summary of Operations ===");
    results.push("• Dot notation: object.property");
    results.push("• Bracket notation: object['property']");
    results.push("• Add new property: object.newProp = value");
    results.push("• Update property: object.prop = newValue");
    results.push("• Delete property: delete object.prop");
    
    return results;
}

function studentReferenceText() {
    return studentData().join('\n');
}

function logStudentOnly() {
    console.clear();
    console.log("--- Task 1: Build a Student Object ---");
    console.log(studentReferenceText());
}

// ============================================
// TASK 2: Bank Account with Methods (this)
// ============================================

function bankData() {
    const results = [];
    
    const bankAccount = {
        holder: "Aarav",
        balance: 5000,
        
        deposit: function(amount) {
            this.balance = this.balance + amount;
            return this.balance;
        },
        
        withdraw: function(amount) {
            if (amount > this.balance) {
                return "Insufficient funds";
            }
            this.balance = this.balance - amount;
            return this.balance;
        }
    };
    
    results.push("=== Initial Bank Account ===");
    results.push("Holder: " + bankAccount.holder);
    results.push("Balance: ₹" + bankAccount.balance);
    
    results.push("\n=== Testing deposit(1000) ===");
    var newBalance = bankAccount.deposit(1000);
    results.push("After deposit: ₹" + newBalance);
    
    results.push("\n=== Testing withdraw(2000) ===");
    newBalance = bankAccount.withdraw(2000);
    results.push("After withdrawal: ₹" + newBalance);
    
    results.push("\n=== Testing withdraw(10000) ===");
    var result = bankAccount.withdraw(10000);
    results.push("Result: " + result);
    results.push("Current balance remains: ₹" + bankAccount.balance);
    
    results.push("\n=== Final Account State ===");
    results.push("Holder: " + bankAccount.holder);
    results.push("Balance: ₹" + bankAccount.balance);
    
    results.push("\n=== Explanation of 'this' ===");
    results.push("• 'this' inside methods refers to the bankAccount object");
    results.push("• this.balance accesses the balance property of the object");
    results.push("• Methods can modify object properties using 'this'");
    
    return results;
}

function bankReferenceText() {
    return bankData().join('\n');
}

function logBankOnly() {
    console.clear();
    console.log("--- Task 2: Bank Account with Methods ---");
    console.log(bankReferenceText());
}

// ============================================
// TASK 3: Destructuring Assignment
// ============================================

function destructureData() {
    const results = [];
    
    const product = { id: 101, name: "Laptop", price: 60000, brand: "Dell", stock: 5 };
    
    results.push("=== Original Product Object ===");
    results.push(JSON.stringify(product, null, 2));
    
    // Destructure name and price
    var name = product.name;
    var price = product.price;
    results.push("\n=== Destructuring name and price ===");
    results.push("name = " + name);
    results.push("price = " + price);
    
    // Destructure brand and rename to make
    var make = product.brand;
    results.push("\n=== Destructuring brand and renaming to 'make' ===");
    results.push("make = " + make);
    
    // Destructure warranty with default value
    var warranty = product.warranty !== undefined ? product.warranty : "1 year";
    results.push("\n=== Destructuring warranty with default value ===");
    results.push("warranty = " + warranty + " (default since property doesn't exist)");
    
    results.push("\n=== Destructuring Syntax Examples ===");
    results.push("// Basic destructuring:");
    results.push("const { name, price } = product;");
    results.push("");
    results.push("// Renaming: { originalName: newName }");
    results.push("const { brand: make } = product;");
    results.push("");
    results.push("// Default values:");
    results.push("const { warranty = '1 year' } = product;");
    
    return results;
}

function destructureReferenceText() {
    return destructureData().join('\n');
}

function logDestructureOnly() {
    console.clear();
    console.log("--- Task 3: Destructuring Assignment ---");
    console.log(destructureReferenceText());
}

// ============================================
// TASK 4: Bonus - Object as Iterable
// ============================================

function iterableData() {
    const results = [];
    
    // Using student object after modifications (from Task 1)
    const student = {
        name: "Anaya",
        age: 22,
        course: "B.Tech",
        marks: [85, 90, 78],
        email: "anaya@example.com"
    };
    
    results.push("=== Student Object (after Task 1 modifications) ===");
    results.push(JSON.stringify(student, null, 2));
    
    // Object.keys
    var keys = Object.keys(student);
    results.push("\n=== Object.keys() ===");
    results.push("[" + keys.join(", ") + "]");
    
    // Object.values
    var values = Object.values(student);
    results.push("\n=== Object.values() ===");
    results.push("[" + values.map(function(v) {
        if (Array.isArray(v)) return "[" + v.join(", ") + "]";
        return v;
    }).join(", ") + "]");
    
    // Object.entries with forEach
    results.push("\n=== Object.entries() with forEach ===");
    var entries = Object.entries(student);
    for (var i = 0; i < entries.length; i++) {
        var key = entries[i][0];
        var value = entries[i][1];
        if (Array.isArray(value)) {
            value = "[" + value.join(", ") + "]";
        }
        results.push(key + ": " + value);
    }
    
    // Bonus: count properties
    var propertyCount = Object.keys(student).length;
    results.push("\n=== Bonus: Property Count ===");
    results.push("Total properties: " + propertyCount);
    
    results.push("\n=== Summary of Object Methods ===");
    results.push("• Object.keys(obj) - returns array of property names");
    results.push("• Object.values(obj) - returns array of property values");
    results.push("• Object.entries(obj) - returns array of [key, value] pairs");
    results.push("• Use forEach or for...of to iterate over entries");
    
    return results;
}

function iterableReferenceText() {
    return iterableData().join('\n');
}

function logIterableOnly() {
    console.clear();
    console.log("--- Bonus: Object as Iterable ---");
    console.log(iterableReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    const results = [];
    
    // Task 1: Book object with bracket notation
    var book = {
        title: "The Midnight Library",
        author: "Matt Haig",
        year: 2020,
        pages: 288
    };
    
    var keyName = "title";
    results.push("=== 1. Book Object ===");
    results.push("Book: " + JSON.stringify(book, null, 2));
    results.push("Accessing with bracket notation using variable key: " + book[keyName]);
    
    // Task 2: Book summary method
    book.summary = function() {
        return this.title + " by " + this.author + " (" + this.year + ")";
    };
    results.push("\n=== 2. Book Summary Method ===");
    results.push("book.summary() = " + book.summary());
    
    // Task 3: Object.entries with forEach
    results.push("\n=== 3. Object.entries with forEach ===");
    var entries = Object.entries(book);
    for (var i = 0; i < entries.length; i++) {
        var key = entries[i][0];
        var value = entries[i][1];
        if (typeof value !== 'function') {
            results.push(key + ": " + value);
        }
    }
    
    // Task 4: Spread operator copy
    results.push("\n=== 4. Spread Operator Copy ===");
    var original = { a: 1, b: 2, c: 3 };
    var copy = {};
    // Manual spread using Object.assign
    for (var key in original) {
        if (original.hasOwnProperty(key)) {
            copy[key] = original[key];
        }
    }
    copy.b = 99;
    results.push("Original: " + JSON.stringify(original));
    results.push("Copy (modified): " + JSON.stringify(copy));
    results.push("Original unchanged: " + JSON.stringify(original));
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/object");
    results.push("• https://javascript.info/destructuring-assignment");
    
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
    student: logStudentOnly,
    bank: logBankOnly,
    destructure: logDestructureOnly,
    iterable: logIterableOnly,
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
            
            // When opening a card, run its corresponding console logger
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
// INITIALIZE PAGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Set Class Work content
    var classWorkTasks = document.getElementById('classWorkTasks');
    if (classWorkTasks) {
        classWorkTasks.innerHTML = buildClassWorkHTML();
    }
    
    // Set reference text for each homework task
    var outStudent = document.getElementById('outStudent');
    var outBank = document.getElementById('outBank');
    var outDestructure = document.getElementById('outDestructure');
    var outIterable = document.getElementById('outIterable');
    var outPractice = document.getElementById('outPractice');
    
    if (outStudent) outStudent.textContent = studentReferenceText();
    if (outBank) outBank.textContent = bankReferenceText();
    if (outDestructure) outDestructure.textContent = destructureReferenceText();
    if (outIterable) outIterable.textContent = iterableReferenceText();
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
    
    // Start collapsed
    if (classWorkContent) classWorkContent.classList.remove('show');
    if (classWorkIcon) classWorkIcon.textContent = '▼';
    
    // Set up homework task accordions
    wireAccordions();
    
    // Console welcome message
    console.log("=== Day 8: Objects & Destructuring Ready ===");
    console.log("");
    console.log("📘 Class Work examples:");
    console.log("• Basic object with nested properties");
    console.log("• Object methods with 'this' keyword");
    console.log("• Object.keys, Object.values, Object.entries");
    console.log("");
    console.log("📚 Homework Tasks (click to expand):");
    console.log("• Task 1: Build a Student Object");
    console.log("• Task 2: Bank Account with Methods (this)");
    console.log("• Task 3: Destructuring Assignment");
    console.log("• Bonus: Object as Iterable");
    console.log("• Practice: Additional tasks");
    console.log("");
    console.log("💡 Click on any homework task header to see its output!");
});

// ============================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ============================================

window.goBack = goBack;
window.toggleClassWork = toggleClassWork;

// Expose functions for console testing
window.createStudent = function() {
    return {
        name: "Anaya",
        age: 21,
        city: "Jaipur",
        course: "B.Tech",
        marks: [85, 90, 78]
    };
};

window.createBankAccount = function(holder, initialBalance) {
    return {
        holder: holder,
        balance: initialBalance,
        deposit: function(amount) {
            this.balance = this.balance + amount;
            return this.balance;
        },
        withdraw: function(amount) {
            if (amount > this.balance) {
                return "Insufficient funds";
            }
            this.balance = this.balance - amount;
            return this.balance;
        }
    };
};

window.destructureProduct = function() {
    var product = { id: 101, name: "Laptop", price: 60000, brand: "Dell", stock: 5 };
    var name = product.name;
    var price = product.price;
    var make = product.brand;
    var warranty = product.warranty !== undefined ? product.warranty : "1 year";
    return { name: name, price: price, make: make, warranty: warranty };
};

window.getObjectKeysValues = function(obj) {
    if (!obj) return { keys: [], values: [], entries: [] };
    return {
        keys: Object.keys(obj),
        values: Object.values(obj),
        entries: Object.entries(obj)
    };
};