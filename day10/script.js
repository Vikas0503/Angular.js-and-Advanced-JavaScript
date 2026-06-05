// ============================================
// DAY 10 - DOM MANIPULATION
// Class Work: Selecting elements, modifying styles, classList, creating elements
// Homework: Select and change text, toggle theme, build list, create cards
// ============================================

// ----- Helper Functions -----
function goBack() {
    window.location.href = '../index.html';
}

// ============================================
// CLASS WORK CONTENT
// ============================================

// These will be populated when the DOM is ready
let classWorkOutput = "";

function buildClassWorkHTML() {
    return '<div class="task">' +
        '<div class="task-title">🔍 Selecting Elements</div>' +
        '<pre><code>// By ID — fast, returns ONE element or null\n' +
        'const title = document.getElementById("title");\n\n' +
        '// By class — returns a live HTMLCollection (array-like)\n' +
        'const buttons = document.getElementsByClassName("btn");\n\n' +
        '// MODERN — querySelector uses CSS selectors\n' +
        '// Returns the FIRST match, or null\n' +
        'const heading = document.querySelector("h1");\n' +
        'const firstBtn = document.querySelector(".btn");\n' +
        'const idMatch = document.querySelector("#title");\n' +
        'const nested = document.querySelector("nav a.active");\n\n' +
        '// querySelectorAll — returns ALL matches as a NodeList\n' +
        'const allBtns = document.querySelectorAll(".btn");\n' +
        'allBtns.forEach(b =&gt; console.log(b.textContent));</code></pre>' +
        '<span class="badge">✓ querySelector and querySelectorAll are the most versatile</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🎨 Modifying Styles</div>' +
        '<pre><code>const title = document.querySelector("#title");\n\n' +
        '// Direct style — quick and dirty\n' +
        'title.style.color = "red";\n' +
        'title.style.backgroundColor = "yellow";   // camelCase!\n' +
        'title.style.fontSize = "32px";\n\n' +
        '// classList — preferred\n' +
        'title.classList.add("highlight");\n' +
        'title.classList.remove("dim");\n' +
        'title.classList.toggle("active");\n' +
        'console.log(title.classList.contains("active"));</code></pre>' +
        '<span class="badge">✓ classList is preferred over direct style manipulation</span>' +
        '</div>' +
        
        '<div class="task">' +
        '<div class="task-title">🗑️ Removing Elements</div>' +
        '<pre><code>// Remove an element from its parent — clean\n' +
        'const li = document.querySelector("#todo-1");\n' +
        'li.remove();\n\n' +
        '// Remove all children\n' +
        'const list = document.querySelector("#todo-list");\n' +
        'list.innerHTML = "";       // quick way</code></pre>' +
        '<span class="badge">✓ .remove() is the modern way to delete elements</span>' +
        '</div>';
}

// ============================================
// TASK 1: Select and Change Text
// ============================================

function selectChangeData() {
    var results = [];
    
    results.push("=== Task 1: Select and Change Text ===");
    results.push("1. Using document.querySelector('#demo-title') to grab the element");
    results.push("2. Changed textContent to 'Hello, Student!'");
    results.push("3. Changed style.color to 'crimson'");
    results.push("4. Bonus: Changed style.fontFamily to 'Georgia, serif'");
    results.push("");
    results.push("The changes are visible in the live demo area above!");
    
    return results;
}

function selectChangeReferenceText() {
    return selectChangeData().join('\n');
}

function logSelectChangeOnly() {
    emitConsoleAnswer(selectChangeReferenceText());
}

// ============================================
// TASK 2: Toggle Dark Theme Class
// ============================================

function darkThemeData() {
    var results = [];
    
    results.push("=== Task 2: Toggle Dark Theme Class ===");
    results.push("1. Using document.body.classList.toggle('dark-theme-demo')");
    results.push("2. The class toggles on/off each time the button is clicked");
    results.push("3. Bonus: classList.contains() checks if class exists");
    results.push("");
    results.push("Click the 'Toggle Theme' button in the live demo to see it in action!");
    
    return results;
}

function darkThemeReferenceText() {
    return darkThemeData().join('\n');
}

function logDarkThemeOnly() {
    emitConsoleAnswer(darkThemeReferenceText());
}

// ============================================
// TASK 3: Build a List Dynamically
// ============================================

function buildListData() {
    var results = [];
    var names = ["Priya", "Aarav", "Riya", "Kabir"];
    
    results.push("=== Task 3: Build a List Dynamically ===");
    results.push("Names array: [" + names.join(", ") + "]");
    results.push("");
    results.push("For each name:");
    results.push("  - Create <li> element with createElement('li')");
    results.push("  - Set textContent to name (Bonus: with index number)");
    results.push("  - Add class 'name-item' using classList.add()");
    results.push("  - Append to #demo-names-list using appendChild()");
    results.push("");
    results.push("Click the 'Build Names List' button in the live demo to see it!");
    
    return results;
}

function buildListReferenceText() {
    return buildListData().join('\n');
}

function logBuildListOnly() {
    emitConsoleAnswer(buildListReferenceText());
}

// ============================================
// TASK 4: Build a Product Card
// ============================================

function cardData() {
    var results = [];
    var product = { name: "Laptop", price: 60000, brand: "Dell" };
    
    results.push("=== Bonus: Build a Product Card ===");
    results.push("Product object: { name: 'Laptop', price: 60000, brand: 'Dell' }");
    results.push("");
    results.push("Steps:");
    results.push("  1. Create <div class='product-card'> using createElement()");
    results.push("  2. Create <h3> for product name, set textContent");
    results.push("  3. Create <p> for brand, set textContent");
    results.push("  4. Create <span> for price, format as '₹60000'");
    results.push("  5. Append all children to the card div");
    results.push("  6. Append card to #demo-cards container");
    results.push("");
    results.push("Click the 'Build Product Card' button in the live demo to see it!");
    
    return results;
}

function cardReferenceText() {
    return cardData().join('\n');
}

function logCardOnly() {
    emitConsoleAnswer(cardReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    var results = [];
    
    results.push("=== Practice Tasks Solutions ===");
    results.push("");
    results.push("1. Changing paragraph text:");
    results.push("   - First: textContent = 'Plain text'");
    results.push("   - Second: innerHTML = '<strong>Bold text</strong>'");
    results.push("   - Third: textContent = 'Back to plain'");
    results.push("");
    results.push("2. Adding 'even' class to even-indexed list items:");
    results.push("   - Use querySelectorAll to get all list items");
    results.push("   - Loop through with forEach, check if index % 2 === 0");
    results.push("   - Use classList.add('even') for those items");
    results.push("");
    results.push("3. Creating a button programmatically:");
    results.push("   - const btn = document.createElement('button')");
    results.push("   - btn.textContent = 'Click me'");
    results.push("   - btn.id = 'myButton'");
    results.push("   - btn.className = 'custom-btn'");
    results.push("   - document.body.appendChild(btn)");
    results.push("");
    results.push("4. Building 3 product cards from array:");
    results.push("   - Use map() or forEach to iterate over products");
    results.push("   - For each product, create card using same pattern as Task 4");
    results.push("   - Append each card to container");
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/dom-nodes");
    results.push("• https://javascript.info/searching-elements-dom");
    
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
    selectchange: logSelectChangeOnly,
    darktheme: logDarkThemeOnly,
    buildlist: logBuildListOnly,
    card: logCardOnly,
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
    // Task 1 Demo: Select and Change Text
    var demoTitle = document.getElementById('demo-title');
    if (demoTitle) {
        demoTitle.textContent = "Hello, Student!";
        demoTitle.style.color = "crimson";
        demoTitle.style.fontFamily = "Georgia, serif";
    }
    
    // Task 2 Demo: Toggle Dark Theme on the card
    var themeBtn = document.getElementById('theme-demo-btn');
    var demoCard = document.getElementById('hwTask2');
    if (themeBtn && demoCard) {
        themeBtn.addEventListener('click', function() {
            demoCard.classList.toggle('dark-theme-demo');
            console.log("Dark theme class present: " + demoCard.classList.contains('dark-theme-demo'));
        });
    }
    
    // Task 3 Demo: Build Names List
    var buildListBtn = document.getElementById('build-list-btn');
    var namesList = document.getElementById('demo-names-list');
    var namesArray = ["Priya", "Aarav", "Riya", "Kabir"];
    
    if (buildListBtn && namesList) {
        buildListBtn.addEventListener('click', function() {
            // Clear existing list
            namesList.innerHTML = "";
            // Build new list
            for (var i = 0; i < namesArray.length; i++) {
                var li = document.createElement('li');
                var indexNumber = i + 1;
                li.textContent = indexNumber + ". " + namesArray[i];
                li.classList.add('name-item');
                namesList.appendChild(li);
            }
            console.log("List built with " + namesArray.length + " names");
        });
    }
    
    // Task 4 Demo: Build Product Card
    var buildCardBtn = document.getElementById('build-card-btn');
    var cardsContainer = document.getElementById('demo-cards');
    var product = { name: "Laptop", price: 60000, brand: "Dell" };
    
    if (buildCardBtn && cardsContainer) {
        buildCardBtn.addEventListener('click', function() {
            // Clear existing cards
            cardsContainer.innerHTML = "";
            // Create card
            var cardDiv = document.createElement('div');
            cardDiv.className = 'product-card';
            
            var nameHeading = document.createElement('h3');
            nameHeading.textContent = product.name;
            
            var brandPara = document.createElement('p');
            brandPara.textContent = "Brand: " + product.brand;
            
            var priceSpan = document.createElement('span');
            priceSpan.textContent = "₹" + product.price;
            
            cardDiv.appendChild(nameHeading);
            cardDiv.appendChild(brandPara);
            cardDiv.appendChild(priceSpan);
            cardsContainer.appendChild(cardDiv);
            
            console.log("Product card built for: " + product.name);
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
    
    // Set reference text for each homework task
    var outSelectChange = document.getElementById('outSelectChange');
    var outDarkTheme = document.getElementById('outDarkTheme');
    var outBuildList = document.getElementById('outBuildList');
    var outCard = document.getElementById('outCard');
    var outPractice = document.getElementById('outPractice');
    
    if (outSelectChange) outSelectChange.textContent = selectChangeReferenceText();
    if (outDarkTheme) outDarkTheme.textContent = darkThemeReferenceText();
    if (outBuildList) outBuildList.textContent = buildListReferenceText();
    if (outCard) outCard.textContent = cardReferenceText();
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

// ============================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ============================================

window.goBack = goBack;
window.toggleClassWork = toggleClassWork;