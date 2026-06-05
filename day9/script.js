// ============================================
// DAY 9 - TEMPLATE LITERALS & DESTRUCTURING
// Class Work: Template literals, array destructuring, object destructuring, rest parameters
// Homework: Template builder, destructuring, rest params, spread operator
// ============================================

// ----- Helper Functions -----
function goBack() {
    window.location.href = '../index.html';
}

// ============================================
// CLASS WORK CONTENT
// ============================================

// Topic 1: Template Literals
const personName = "Priya";
const personAge = 24;
const msg1 = "Hello, " + personName + ". You are " + personAge + " years old.";
const msg2 = "Hello, " + personName + ". You are " + personAge + " years old.";
const address = "MI Road\nJaipur 302001\nRajasthan";
const totalAmount = 1180;
const summary = "Total " + (totalAmount >= 1000 ? "qualifies" : "doesn't qualify") + " for free shipping.";
const taxed = "Final price: ₹" + (1000 * 1.18).toFixed(2);

// Topic 2: Array Destructuring
const colors = ["red", "green", "blue"];
const firstColor = colors[0];
const secondColor = colors[1];
const thirdColor = colors[2];

// Topic 3: Object Destructuring (nested, rename, default, rest)
const userObject = {
    name1: "Aarav",
    age: 22,
    address: {
        city: "Jaipur",
        pincode: "302001"
    }
};

const nestedCity = userObject.address.city;
const userNameValue = userObject.name1;
const defaultPhone = "N/A";
const restProperties = { age: userObject.age, address: userObject.address };

function greetFunction(obj) {
    return obj.name1 + " is " + obj.age;
}

function showInfoFunction(obj) {
    var nameVal = (obj && obj.name1 !== undefined) ? obj.name1 : "Guest";
    var roleVal = (obj && obj.role !== undefined) ? obj.role : "User";
    return roleVal + ": " + nameVal;
}

// Build class work output as strings
var classWorkOutput = "";
classWorkOutput = classWorkOutput + "=== Topic 1: Template Literals ===\n";
classWorkOutput = classWorkOutput + "msg1: " + msg1 + "\n";
classWorkOutput = classWorkOutput + "msg2: " + msg2 + "\n";
classWorkOutput = classWorkOutput + "address:\n" + address + "\n";
classWorkOutput = classWorkOutput + "summary: " + summary + "\n";
classWorkOutput = classWorkOutput + "taxed: " + taxed + "\n\n";

classWorkOutput = classWorkOutput + "=== Topic 2: Array Destructuring ===\n";
classWorkOutput = classWorkOutput + "colors array: [" + colors.join(", ") + "]\n";
classWorkOutput = classWorkOutput + "firstColor: " + firstColor + "\n";
classWorkOutput = classWorkOutput + "secondColor: " + secondColor + "\n";
classWorkOutput = classWorkOutput + "thirdColor: " + thirdColor + "\n\n";

classWorkOutput = classWorkOutput + "=== Topic 3: Object Destructuring ===\n";
classWorkOutput = classWorkOutput + "Nested city: " + nestedCity + "\n";
classWorkOutput = classWorkOutput + "Renamed name: " + userNameValue + ", phone: " + defaultPhone + "\n";
classWorkOutput = classWorkOutput + "Rest object: " + JSON.stringify(restProperties) + "\n";
classWorkOutput = classWorkOutput + "greet(user): " + greetFunction(userObject) + "\n";
classWorkOutput = classWorkOutput + "showInfo(): " + showInfoFunction(null) + "\n";
classWorkOutput = classWorkOutput + "showInfo({ name1: 'Riya' }): " + showInfoFunction({ name1: "Riya" }) + "\n";
classWorkOutput = classWorkOutput + "showInfo({ name1: 'spiderman', role: 'world saviour' }): " + showInfoFunction({ name1: "spiderman", role: "world saviour" }) + "\n";
classWorkOutput = classWorkOutput + "showInfo({ name1: 'batman', role: 'save America' }): " + showInfoFunction({ name1: "batman", role: "save America" }) + "\n";

function buildClassWorkHTML() {
    return '<div class="task">' +
        '<div class="task-title">📝 Template Literals</div>' +
        '<pre><code>const name = "Priya";\n' +
        'const age = 24;\n\n' +
        '// Old way (concatenation)\n' +
        'const msg1 = "Hello, " + name + ". You are " + age + " years old.";\n\n' +
        '// Template literal (modern way)\n' +
        'const msg2 = `Hello, ${name}. You are ${age} years old.`;\n\n' +
        '// Multi-line strings\n' +
        'const address = `MI Road\n' +
        'Jaipur 302001\n' +
        'Rajasthan`;\n\n' +
        '// Expressions inside ${}\n' +
        'const total = 1180;\n' +
        'const summary = `Total ${total >= 1000 ? "qualifies" : "doesn\'t qualify"} for free shipping.`;\n\n' +
        '// Method calls inside ${}\n' +
        'const taxed = `Final price: ₹${(1000 * 1.18).toFixed(2)}`;</code></pre>' +
        '<div class="output">' + classWorkOutput.split('\n').slice(0, 6).join('\n') + '</div>' +
        '<span class="badge">✓ Template literals use backticks and ${} for interpolation</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">📦 Array Destructuring</div>' +
        '<pre><code>const colors = ["red", "green", "blue"];\n' +
        'const [first, second] = colors;\n' +
        'console.log(first);  // "red"\n' +
        'console.log(second); // "green"\n\n' +
        '// Skip elements with commas\n' +
        'const [primary, , tertiary] = colors;\n' +
        'console.log(primary);   // "red"\n' +
        'console.log(tertiary);  // "blue"</code></pre>' +
        '<div class="output">' + classWorkOutput.split('\n').slice(7, 11).join('\n') + '</div>' +
        '<span class="badge">✓ Array destructuring unpacks values into variables</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🎯 Object Destructuring (Deep)</div>' +
        '<pre><code>const user = {\n' +
        '    name1: "Aarav",\n' +
        '    age: 22,\n' +
        '    address: { city: "Jaipur", pincode: "302001" }\n' +
        '};\n\n' +
        '// Nested destructuring\n' +
        'const { address: { city } } = user;\n\n' +
        '// Rename + default\n' +
        'const { name1: userName, phone = "N/A" } = user;\n\n' +
        '// Rest with objects\n' +
        'const { name1, ...rest } = user;\n\n' +
        '// In function parameters\n' +
        'const greet = ({ name1, age }) => `${name1} is ${age}`;</code></pre>' +
        '<div class="output">' + classWorkOutput.split('\n').slice(11).join('\n') + '</div>' +
        '<span class="badge">✓ Object destructuring extracts properties into variables</span>' +
        '</div>';
}

// ============================================
// TASK 1: Template Literal Sentence Builder
// ============================================

function templateData() {
    var results = [];
    var item = "Laptop";
    var price = 60000;
    var tax = 0.18;
    
    var gstAmount = price * tax;
    var totalPrice = price + gstAmount;
    var sentence = item + " costs ₹" + price + " + ₹" + gstAmount + " GST = ₹" + totalPrice + ".";
    results.push("=== Single-line Template Literal ===");
    results.push(sentence);
    
    var multiline = "Item: " + item + "\n" +
                    "Base Price: ₹" + price + "\n" +
                    "GST (18%): ₹" + gstAmount + "\n" +
                    "Total: ₹" + totalPrice;
    results.push("\n=== Bonus: Multiline Version ===");
    results.push(multiline);
    
    results.push("\n=== Template Literal Features Demonstrated ===");
    results.push("• String interpolation: ${variable}");
    results.push("• Expression evaluation: ${price * tax}");
    results.push("• Multi-line strings without \\n (using backticks)");
    
    return results;
}

function templateReferenceText() {
    return templateData().join('\n');
}

function logTemplateOnly() {
    emitConsoleAnswer(templateReferenceText());
}

// ============================================
// TASK 2: Array + Object Destructuring
// ============================================

function destructureData() {
    var results = [];
    
    var scores = [88, 75, 92, 60, 45];
    var top = scores[0];
    var second = scores[1];
    var others = scores.slice(2);
    
    results.push("=== Array Destructuring ===");
    results.push("Original array: [" + scores.join(", ") + "]");
    results.push("top (first): " + top);
    results.push("second: " + second);
    results.push("others (rest): [" + others.join(", ") + "]");
    
    var userObj = { name: "Anaya", age: 21, address: { city: "Jaipur", pincode: "302001" } };
    var nameValue = userObj.name;
    var userAge = userObj.age;
    var cityValue = userObj.address.city;
    
    results.push("\n=== Object Destructuring ===");
    results.push("Original object: " + JSON.stringify(userObj, null, 2));
    results.push("name: " + nameValue);
    results.push("userAge (renamed from age): " + userAge);
    results.push("city (nested): " + cityValue);
    
    results.push("\n=== Destructuring Syntax Summary ===");
    results.push("Array: const [first, second, ...rest] = array;");
    results.push("Object: const { prop: newName } = object;");
    results.push("Nested: const { parent: { child } } = object;");
    results.push("Default: const { missing = 'default' } = object;");
    
    return results;
}

function destructureReferenceText() {
    return destructureData().join('\n');
}

function logDestructureOnly() {
    emitConsoleAnswer(destructureReferenceText());
}

// ============================================
// TASK 3: Rest Parameters
// ============================================

function sumAll() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    return total;
}

function joinNames(separator) {
    var names = [];
    for (var i = 1; i < arguments.length; i++) {
        names.push(arguments[i]);
    }
    var result = "";
    for (var j = 0; j < names.length; j++) {
        result = result + names[j];
        if (j < names.length - 1) {
            result = result + separator;
        }
    }
    return result;
}

function restParamsData() {
    var results = [];
    
    results.push("=== sumAll() - Rest Parameters ===");
    results.push("sumAll(1, 2, 3) = " + sumAll(1, 2, 3));
    results.push("sumAll(10, 20, 30, 40) = " + sumAll(10, 20, 30, 40));
    results.push("sumAll() = " + sumAll());
    
    results.push("\n=== joinNames() - Rest Parameters ===");
    results.push("joinNames(', ', 'Priya', 'Aarav', 'Riya') = " + joinNames(", ", "Priya", "Aarav", "Riya"));
    results.push("joinNames(' - ', 'Apple', 'Banana', 'Cherry') = " + joinNames(" - ", "Apple", "Banana", "Cherry"));
    
    results.push("\n=== Rest Parameters Explanation ===");
    results.push("• Rest parameters collect remaining arguments into an array");
    results.push("• Syntax: function name(...args) { }");
    results.push("• Works with any number of arguments");
    results.push("• Must be the last parameter in the function definition");
    
    return results;
}

function restParamsReferenceText() {
    return restParamsData().join('\n');
}

function logRestParamsOnly() {
    emitConsoleAnswer(restParamsReferenceText());
}

// ============================================
// TASK 4: Bonus - Spread to Merge Settings
// ============================================

function spreadData() {
    var results = [];
    
    var defaults = { theme: "light", lang: "en", notifications: true };
    var userPrefs = { theme: "dark", fontSize: 16 };
    
    var merged = {};
    for (var key in defaults) {
        if (defaults.hasOwnProperty(key)) {
            merged[key] = defaults[key];
        }
    }
    for (var key in userPrefs) {
        if (userPrefs.hasOwnProperty(key)) {
            merged[key] = userPrefs[key];
        }
    }
    
    results.push("=== Original Objects ===");
    results.push("defaults: " + JSON.stringify(defaults));
    results.push("userPrefs: " + JSON.stringify(userPrefs));
    
    results.push("\n=== Merged Settings (user preferences override defaults) ===");
    results.push(JSON.stringify(merged));
    
    function applyPrefs(defaultsObj, prefsObj) {
        var result = {};
        for (var key in defaultsObj) {
            if (defaultsObj.hasOwnProperty(key)) {
                result[key] = defaultsObj[key];
            }
        }
        for (var key in prefsObj) {
            if (prefsObj.hasOwnProperty(key)) {
                result[key] = prefsObj[key];
            }
        }
        return result;
    }
    
    results.push("\n=== Bonus: applyPrefs() Function ===");
    var newDefaults = { theme: "system", lang: "fr", volume: 50 };
    var newPrefs = { theme: "light", volume: 80 };
    var merged2 = applyPrefs(newDefaults, newPrefs);
    results.push("New defaults: " + JSON.stringify(newDefaults));
    results.push("New prefs: " + JSON.stringify(newPrefs));
    results.push("Merged result: " + JSON.stringify(merged2));
    
    results.push("\n=== Spread Operator vs Object.assign() ===");
    results.push("// Using spread (modern):");
    results.push("const merged = { ...defaults, ...userPrefs };");
    results.push("");
    results.push("// Using Object.assign (older):");
    results.push("const merged = Object.assign({}, defaults, userPrefs);");
    
    return results;
}

function spreadReferenceText() {
    return spreadData().join('\n');
}

function logSpreadOnly() {
    emitConsoleAnswer(spreadReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    var person = { first: "Priya", last: "Sharma", city: "Jaipur" };
    var intro = person.first + " " + person.last + " from " + person.city;
    results.push("=== 1. Template Literal with Object ===");
    results.push(intro);
    
    var numbers = [1, 2, 3, 4, 5, 6];
    var head = numbers[0];
    var tail = numbers.slice(1);
    results.push("\n=== 2. Array Destructuring (head & tail) ===");
    results.push("Original: [" + numbers.join(", ") + "]");
    results.push("head: " + head);
    results.push("tail: [" + tail.join(", ") + "]");
    
    function multiply() {
        var product = 1;
        if (arguments.length === 0) return 0;
        for (var i = 0; i < arguments.length; i++) {
            product = product * arguments[i];
        }
        return product;
    }
    results.push("\n=== 3. multiply() with Rest Parameters ===");
    results.push("multiply(2, 3, 4) = " + multiply(2, 3, 4));
    results.push("multiply(5, 10) = " + multiply(5, 10));
    results.push("multiply() = " + multiply());
    
    var original = { a: 1, b: 2, c: 3 };
    var updated = {};
    for (var key in original) {
        if (original.hasOwnProperty(key)) {
            updated[key] = original[key];
        }
    }
    updated.b = 99;
    results.push("\n=== 4. Object Spread without Mutation ===");
    results.push("Original: " + JSON.stringify(original));
    results.push("Updated (b changed to 99): " + JSON.stringify(updated));
    results.push("Original unchanged: " + JSON.stringify(original));
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/template-literals");
    results.push("• https://javascript.info/destructuring-assignment");
    
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
    template: logTemplateOnly,
    destructure: logDestructureOnly,
    restparams: logRestParamsOnly,
    spread: logSpreadOnly,
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
// INITIALIZE PAGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    var classWorkTasks = document.getElementById('classWorkTasks');
    if (classWorkTasks) {
        classWorkTasks.innerHTML = buildClassWorkHTML();
    }
    
    var outTemplate = document.getElementById('outTemplate');
    var outDestructure = document.getElementById('outDestructure');
    var outRestParams = document.getElementById('outRestParams');
    var outSpread = document.getElementById('outSpread');
    var outPractice = document.getElementById('outPractice');
    
    if (outTemplate) outTemplate.textContent = templateReferenceText();
    if (outDestructure) outDestructure.textContent = destructureReferenceText();
    if (outRestParams) outRestParams.textContent = restParamsReferenceText();
    if (outSpread) outSpread.textContent = spreadReferenceText();
    if (outPractice) outPractice.textContent = practiceReferenceText();
    
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
    
    wireAccordions();
});

// ============================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ============================================

window.goBack = goBack;
window.toggleClassWork = toggleClassWork;
window.sumAll = sumAll;
window.joinNames = joinNames;
window.multiply = function() {
    var product = 1;
    if (arguments.length === 0) return 0;
    for (var i = 0; i < arguments.length; i++) {
        product = product * arguments[i];
    }
    return product;
};
window.applyPrefs = function(defaultsObj, prefsObj) {
    var result = {};
    for (var key in defaultsObj) {
        if (defaultsObj.hasOwnProperty(key)) {
            result[key] = defaultsObj[key];
        }
    }
    for (var key in prefsObj) {
        if (prefsObj.hasOwnProperty(key)) {
            result[key] = prefsObj[key];
        }
    }
    return result;
};