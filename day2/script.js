// ============================================
    // DAY 2 - VARIABLES & DATA TYPES
    // All code from your classroom and homework
    // ============================================

    // ----- Helper: Toggle function for independent cards -----
    function toggleCard(contentElement, iconElement) {
        const isExpanded = contentElement.classList.contains('show');
        
        if (isExpanded) {
            contentElement.classList.remove('show');
            iconElement.textContent = '▼';
        } else {
            contentElement.classList.add('show');
            iconElement.textContent = '▲';
        }
    }

    // ----- Back to Dashboard -----
    function goBack() {
        window.location.href = '../index.html';
    }

    // ============================================
    // CLASS WORK CONTENT (Based on your provided code)
    // ============================================
    
    // Capture outputs from the classroom code
    let classWorkOutputs = [];
    
    // Helper to capture console.log outputs
    let capturedLogs = [];
    function captureLog(message) {
        capturedLogs.push(message);
    }
    
    // Reset and run classroom code
    function runClassWorkCode() {
        capturedLogs = [];
        
        // Console.log examples
        captureLog("console.log(\"Hello JavaScript\") → Hello JavaScript");
        captureLog("console.log(42) → 42");
        captureLog("console.log(3.14) → 3.14");
        captureLog("console.log(true) → true");
        captureLog("console.log(\"Name:Rahul\",\"Age:25\") → Name:Rahul Age:25");
        
        // const variable
        const name = "john";
        captureLog(`const name = "john"; console.log(name) → ${name}`);
        
        // let variable - can be reassigned
        let score = 0;
        captureLog(`let score = 0 → ${score}`);
        score = 10;
        captureLog(`score = 10 → ${score}`);
        score = score + 5;
        captureLog(`score = score + 5 → ${score}`);
        
        // undefined variable
        let city;
        captureLog(`let city; (undefined) → ${city}`);
        city = "kochi";
        captureLog(`city = "kochi" → ${city}`);
        
        return capturedLogs;
    }
    
    const classWorkLogs = runClassWorkCode();
    
    const classWorkHTML = `
        <div class="task">
            <div class="task-title">📝 console.log() - Printing to Console</div>
            <pre><code>console.log("Hello JavaScript");
console.log(42);
console.log(3.14);
console.log(true);
console.log("Name:Rahul","Age:25");</code></pre>
            <div class="output">${classWorkLogs.slice(0, 5).join('\n')}</div>
            <span class="badge">✓ console.log() prints values to browser console</span>
        </div>
        
        <div class="task">
            <div class="task-title">🔒 const - Constant Variables (cannot be reassigned)</div>
            <pre><code>const name = "john";
console.log(name);</code></pre>
            <div class="output">${classWorkLogs[5]}</div>
            <span class="badge">⚠️ const variables cannot be changed after declaration</span>
        </div>
        
        <div class="task">
            <div class="task-title">🔄 let - Mutable Variables</div>
            <pre><code>let score = 0;
score = 10;
score = score + 5;
console.log(score);</code></pre>
            <div class="output">${classWorkLogs[6]}\n${classWorkLogs[7]}\n${classWorkLogs[8]}</div>
            <span class="badge">✓ let allows reassignment and updates</span>
        </div>
        
        <div class="task">
            <div class="task-title">❓ undefined - Variables without value</div>
            <pre><code>let city;
console.log(city);   // undefined
city = "kochi";
console.log(city);   // kochi</code></pre>
            <div class="output">${classWorkLogs[9]}\n${classWorkLogs[10]}</div>
            <span class="badge">💡 undefined means variable declared but not assigned</span>
        </div>
    `;
    
    // ============================================
    // HOMEWORK CONTENT (typeof, variables, string methods)
    // ============================================
    
    // Run homework code to capture outputs
    let homeworkOutputs = [];
    
    function runHomeworkCode() {
        const results = [];
        
        // Variables declaration
        const firstName = "john wick";
        const age = 24;
        const isApproved = true;
        const number = null;
        let city;
        
        results.push(`const firstName = "john wick" → ${firstName} (${typeof firstName})`);
        results.push(`const age = 24 → ${age} (${typeof age})`);
        results.push(`const isApproved = true → ${isApproved} (${typeof isApproved})`);
        results.push(`const number = null → ${number} (${typeof number})`);
        results.push(`let city; → ${city} (${typeof city})`);
        
        // String methods demo
        const myName = "    john wick   ";
        const trimmed = myName.trim();
        const upper = myName.toUpperCase();
        const length = myName.length;
        const includes = myName.includes("gouri");
        
        results.push(`--- String Methods ---`);
        results.push(`myName = "${myName}"`);
        results.push(`.trim() → "${trimmed}"`);
        results.push(`.toUpperCase() → "${upper}"`);
        results.push(`.length → ${length}`);
        results.push(`.includes("gouri") → ${includes}`);
        
        return results;
    }
    
    const homeworkResults = runHomeworkCode();
    
    const homeworkHTML = `
        <div class="task">
            <div class="task-title">📊 Variables & typeof Operator</div>
            <pre><code>const firstName = "john wick";
const age = 24;
const isApproved = true;
const number = null;
let city;

console.log(typeof firstName);  // string
console.log(typeof age);        // number
console.log(typeof isApproved); // boolean
console.log(typeof number);     // object (historical JS quirk)
console.log(typeof city);       // undefined</code></pre>
            <div class="output">${homeworkResults.slice(0, 5).join('\n')}</div>
            <span class="badge">📌 typeof returns the data type of a variable</span>
        </div>
        
        <div class="task">
            <div class="task-title">🔍 typeof with Different Data Types</div>
            <pre><code>typeof "john wick"   // "string"
typeof 24            // "number"  
typeof true          // "boolean"
typeof null          // "object" (this is a known bug in JS)
typeof undefined     // "undefined"</code></pre>
            <div class="output">String: "john wick" → string
Number: 24 → number
Boolean: true → boolean
Null: null → object
Undefined: undefined → undefined</div>
        </div>
        
        <div class="task">
            <div class="task-title">✂️ String Methods - trim(), toUpperCase(), length, includes()</div>
            <pre><code>const myName = "    john wick   ";
console.log(myName.trim());           // "john wick"
console.log(myName.toUpperCase());    // "    JOHN WICK   "
console.log(myName.trim().toUpperCase().length);  // 9
console.log(myName.includes("gouri")); // false</code></pre>
            <div class="output">${homeworkResults.slice(6).join('\n')}</div>
            <span class="badge">💡 String methods chain together!</span>
        </div>
        
        <div class="task">
            <div class="task-title">🎯 Challenge: Method Chaining</div>
            <pre><code>const myName = "    john wick   ";
myName.trim().toUpperCase().length
// Step 1: trim() → "john wick"
// Step 2: toUpperCase() → "JOHN WICK"  
// Step 3: length → 9</code></pre>
            <div class="output">myName.trim().toUpperCase().length = ${(function() {
                const myName = "    john wick   ";
                return myName.trim().toUpperCase().length;
            })()}</div>
            <span class="badge">⭐ Methods execute from left to right!</span>
        </div>
    `;
    
    // ============================================
    // GALLERY OUTPUTS
    // ============================================
    
    function getTypeofExamples() {
        return `typeof "hello" → "string"
typeof 42 → "number"
typeof true → "boolean"
typeof undefined → "undefined"
typeof null → "object" (JavaScript quirk!)`;
    }
    
    function getStringMethodOutput() {
        const myName = "    john wick   ";
        return `Original: "${myName}"
.trim(): "${myName.trim()}"
.toUpperCase(): "${myName.toUpperCase()}"
.length: ${myName.length}
.includes("gouri"): ${myName.includes("gouri")}
.trim().toUpperCase().length: ${myName.trim().toUpperCase().length}`;
    }
    
    // ============================================
    // INITIALIZE PAGE
    // ============================================
    
    document.addEventListener('DOMContentLoaded', function() {
        // Insert content into cards
        const classWorkTasks = document.getElementById('classWorkTasks');
        const homeworkTasks = document.getElementById('homeworkTasks');
        
        if (classWorkTasks) classWorkTasks.innerHTML = classWorkHTML;
        if (homeworkTasks) homeworkTasks.innerHTML = homeworkHTML;
        
        // Set gallery outputs
        const typeofOutput = document.getElementById('typeofOutput');
        const stringOutput = document.getElementById('stringOutput');
        
        if (typeofOutput) typeofOutput.textContent = getTypeofExamples();
        if (stringOutput) stringOutput.textContent = getStringMethodOutput();
        
        // ----- SETUP INDEPENDENT EXPAND/COLLAPSE -----
        // Each card works independently
        
        const classWorkHeader = document.getElementById('classWorkHeader');
        const classWorkContent = document.getElementById('classWorkContent');
        const classWorkIcon = document.getElementById('classWorkIcon');
        
        const homeworkHeader = document.getElementById('homeworkHeader');
        const homeworkContent = document.getElementById('homeworkContent');
        const homeworkIcon = document.getElementById('homeworkIcon');
        
        // Class Work toggle (only affects Class Work)
        if (classWorkHeader && classWorkContent && classWorkIcon) {
            classWorkHeader.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleCard(classWorkContent, classWorkIcon);
            });
            classWorkHeader.style.cursor = 'pointer';
        }
        
        // Homework toggle (only affects Homework)
        if (homeworkHeader && homeworkContent && homeworkIcon) {
            homeworkHeader.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleCard(homeworkContent, homeworkIcon);
            });
            homeworkHeader.style.cursor = 'pointer';
        }
        
        // Both start collapsed
        if (classWorkContent) classWorkContent.classList.remove('show');
        if (homeworkContent) homeworkContent.classList.remove('show');
        if (classWorkIcon) classWorkIcon.textContent = '▼';
        if (homeworkIcon) homeworkIcon.textContent = '▼';
        
        // Console logs for demonstration (matching your original code)
        console.log("=== Day 2 - Variables & Data Types ===");
        console.log("Hello JavaScript");
        console.log(42);
        console.log(3.14);
        console.log(true);
        console.log("Name:Rahul", "Age:25");
        
        const name = "john";
        console.log(name);
        
        let score = 0;
        score = 10;
        score = score + 5;
        console.log(score);
        
        let city;
        console.log(city);
        city = "kochi";
        console.log(city);
        
        // Homework console logs
        console.log("--- Homework Outputs ---");
        const firstName = "john wick";
        const age = 24;
        const isApproved = true;
        const number = null;
        let city2;
        
        console.log(firstName);
        console.log(typeof firstName);
        console.log(age);
        console.log(typeof age);
        console.log(isApproved);
        console.log(typeof isApproved);
        console.log(number);
        console.log(typeof number);
        console.log(city2);
        console.log(typeof city2);
        
        const myName = "    john wick   ";
        console.log(myName.trim().toUpperCase().length);
        console.log(myName.includes("gouri"));
    });
    
// Make goBack available for the inline back button
window.goBack = goBack;
