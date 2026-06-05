// ============================================
// DAY 7 - ARRAY METHODS
// Class Work: filter, find, some, every
// Homework: Cart Manipulation, Filter Scores, Map GST, Reduce Expenses
// ============================================

// ----- Helper Functions -----
function goBack() {
    window.location.href = '../index.html';
}

// ============================================
// CLASS WORK CONTENT
// ============================================

// Classroom code examples
const scoring = [76, 45, 18, 56, 99, 84];
const pass = scoring.filter(function(n) {
    return n >= 50;
});
const firstFail = scoring.find(function(n) {
    return n < 30;
});
const hasAbove90 = scoring.some(function(n) {
    return n > 90;
});
const allAbove60 = scoring.every(function(n) {
    return n > 60;
});

let classWorkOutput = "";
classWorkOutput += "=== Classroom Array Methods Examples ===\n";
classWorkOutput += "Original array: [" + scoring.join(", ") + "]\n\n";
classWorkOutput += "filter(n => n >= 50): [" + pass.join(", ") + "]\n";
classWorkOutput += "find(n => n < 30): " + firstFail + "\n";
classWorkOutput += "some(n => n > 90): " + hasAbove90 + "\n";
classWorkOutput += "every(n => n > 60): " + allAbove60 + "\n";

function buildClassWorkHTML() {
    return `
        <div class="task">
            <div class="task-title">🔍 filter() - Create new array with elements that pass a test</div>
            <pre><code>const scoring = [76, 45, 18, 56, 99, 84];
const pass = scoring.filter(n => n >= 50);
console.log(pass);  // [76, 56, 99, 84]</code></pre>
            <div class="output">filter result: [76, 56, 99, 84]</div>
            <span class="badge">✓ filter returns a NEW array, original unchanged</span>
        </div>
        
        <div class="task">
            <div class="task-title">🎯 find() - Returns first element that passes the test</div>
            <pre><code>const firstFail = scoring.find(n => n < 30);
console.log(firstFail);  // 18</code></pre>
            <div class="output">find result: 18</div>
            <span class="badge">✓ find returns the FIRST match, not an array</span>
        </div>
        
        <div class="task">
            <div class="task-title">✅ some() - Checks if ANY element passes the test</div>
            <pre><code>console.log(scoring.some(n => n > 90));  // true (99 > 90)</code></pre>
            <div class="output">some result: true</div>
            <span class="badge">✓ some returns true/false, stops at first match</span>
        </div>
        
        <div class="task">
            <div class="task-title">📊 every() - Checks if ALL elements pass the test</div>
            <pre><code>console.log(scoring.every(n => n > 60));  // false (45, 18 are not > 60)</code></pre>
            <div class="output">every result: false</div>
            <span class="badge">✓ every returns true only if ALL elements pass</span>
        </div>
    `;
}

// ============================================
// TASK 1: Cart Manipulation
// ============================================

function cartData() {
    const results = [];
    
    // Step 1: Create initial cart
    const cart = ["bread", "milk", "eggs"];
    results.push("=== Step 1: Initial Cart ===");
    results.push("cart = [" + cart.join(", ") + "]");
    
    // Step 2: push and unshift
    cart.push("butter");
    results.push("\n=== Step 2: After push('butter') ===");
    results.push("cart = [" + cart.join(", ") + "]");
    
    cart.unshift("rice");
    results.push("\n=== Step 3: After unshift('rice') ===");
    results.push("cart = [" + cart.join(", ") + "]");
    
    // Step 4: pop
    const removed = cart.pop();
    results.push("\n=== Step 4: After pop() ===");
    results.push("Removed item: " + removed);
    results.push("cart = [" + cart.join(", ") + "]");
    
    // Step 5: splice
    const spliced = cart.splice(1, 1);
    results.push("\n=== Step 5: After splice(1, 1) ===");
    results.push("Removed item at index 1: " + spliced[0]);
    results.push("cart = [" + cart.join(", ") + "]");
    
    results.push("\n=== Summary of Methods ===");
    results.push("• push() - adds to END of array");
    results.push("• unshift() - adds to START of array");
    results.push("• pop() - removes from END, returns removed item");
    results.push("• splice(index, count) - removes 'count' items starting at 'index'");
    
    return results;
}

function cartReferenceText() {
    return cartData().join('\n');
}

function logCartOnly() {
    emitConsoleAnswer(cartReferenceText());
}

// ============================================
// TASK 2: Filter Passing Scores
// ============================================

function scoresData() {
    const results = [];
    const scores = [88, 42, 75, 60, 91, 39, 55, 70];
    
    results.push("=== Original Scores ===");
    results.push("scores = [" + scores.join(", ") + "]");
    
    // filter passing scores (>= 60)
    const passing = scores.filter(function(n) {
        return n >= 60;
    });
    results.push("\n=== filter: Passing Scores (>= 60) ===");
    results.push("[" + passing.join(", ") + "]");
    
    // find first failing score
    const firstFailing = scores.find(function(n) {
        return n < 60;
    });
    results.push("\n=== find: First Failing Score ===");
    results.push(firstFailing);
    
    // every - check if ALL scores are passing
    const allPassing = scores.every(function(n) {
        return n >= 60;
    });
    results.push("\n=== every: Are ALL scores passing? ===");
    results.push(allPassing);
    
    // bonus: some - check if ANY score is above 90
    const anyAbove90 = scores.some(function(n) {
        return n > 90;
    });
    results.push("\n=== Bonus: some() - Is ANY score above 90? ===");
    results.push(anyAbove90);
    
    results.push("\n=== Method Explanations ===");
    results.push("• filter() - creates new array with elements that pass the test");
    results.push("• find() - returns first element that passes the test");
    results.push("• every() - returns true if ALL elements pass the test");
    results.push("• some() - returns true if ANY element passes the test");
    
    return results;
}

function scoresReferenceText() {
    return scoresData().join('\n');
}

function logScoresOnly() {
    emitConsoleAnswer(scoresReferenceText());
}

// ============================================
// TASK 3: Map Prices with GST
// ============================================

function gstData() {
    const results = [];
    const prices = [100, 250, 500, 1200, 80];
    
    results.push("=== Original Prices ===");
    results.push("prices = [" + prices.join(", ") + "]");
    
    // Map with 18% GST added
    const withGST = prices.map(function(price) {
        return price + (price * 18 / 100);
    });
    results.push("\n=== map: Prices with 18% GST added ===");
    results.push("[" + withGST.map(function(p) {
        return Math.round(p * 100) / 100;
    }).join(", ") + "]");
    
    // Bonus: rounded to 2 decimal places
    const withGSTRounded = prices.map(function(price) {
        let gstAmount = price * 18 / 100;
        let total = price + gstAmount;
        return Math.round(total * 100) / 100;
    });
    results.push("\n=== Bonus: Rounded to 2 decimal places ===");
    results.push("[" + withGSTRounded.join(", ") + "]");
    
    results.push("\n=== Original array unchanged ===");
    results.push("original prices = [" + prices.join(", ") + "]");
    
    results.push("\n=== Method Explanation ===");
    results.push("• map() creates a NEW array by applying a function to each element");
    results.push("• Original array remains unchanged");
    results.push("• GST formula: price + (price * 18 / 100)");
    
    return results;
}

function gstReferenceText() {
    return gstData().join('\n');
}

function logGSTOnly() {
    emitConsoleAnswer(gstReferenceText());
}

// ============================================
// TASK 4: Reduce to Total & Highest
// ============================================

function reduceData() {
    const results = [];
    const expenses = [250, 800, 120, 50, 1500, 75];
    
    results.push("=== Expenses Array ===");
    results.push("expenses = [" + expenses.join(", ") + "]");
    
    // Reduce to calculate total
    const total = expenses.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
    results.push("\n=== reduce: Total Expenses ===");
    results.push("Total = " + total);
    
    // Reduce to find highest expense
    const highest = expenses.reduce(function(acc, curr) {
        if (curr > acc) {
            return curr;
        } else {
            return acc;
        }
    }, expenses[0]);
    results.push("\n=== reduce: Highest Expense ===");
    results.push("Highest = " + highest);
    
    // Bonus: filter + reduce to total only expenses above 100
    const above100 = expenses.filter(function(expense) {
        return expense > 100;
    });
    const totalAbove100 = above100.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
    results.push("\n=== Bonus: filter + reduce (expenses above 100) ===");
    results.push("Expenses above 100: [" + above100.join(", ") + "]");
    results.push("Total of expenses above 100: " + totalAbove100);
    
    results.push("\n=== Method Explanation ===");
    results.push("• reduce(accumulator, currentValue) - reduces array to single value");
    results.push("• filter() + reduce() can be combined for specific calculations");
    results.push("• reduce can find max by comparing each value with accumulator");
    
    return results;
}

function reduceReferenceText() {
    return reduceData().join('\n');
}

function logReduceOnly() {
    emitConsoleAnswer(reduceReferenceText());
}

// ============================================
// PRACTICE TASKS
// ============================================

function practiceData() {
    const results = [];
    
    // Task 1: Map greetings
    const names = ["Priya", "Aarav", "Riya"];
    const greetings = names.map(function(name) {
        return "Hello, " + name;
    });
    results.push("=== 1. Map to Greetings ===");
    results.push("Names: [" + names.join(", ") + "]");
    results.push("Greetings: [" + greetings.join(", ") + "]");
    
    // Task 2: Filter even numbers and sum with reduce
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenNumbers = numbers.filter(function(n) {
        return n % 2 === 0;
    });
    const sumOfEvens = evenNumbers.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
    results.push("\n=== 2. Filter even numbers + Reduce to sum ===");
    results.push("Original: [" + numbers.join(", ") + "]");
    results.push("Even numbers: [" + evenNumbers.join(", ") + "]");
    results.push("Sum of evens: " + sumOfEvens);
    
    // Task 3: Find max using Math.max and reduce
    const arr = [3, 1, 4, 1, 5, 9, 2, 6];
    const maxWithSpread = Math.max.apply(null, arr);
    const maxWithReduce = arr.reduce(function(acc, curr) {
        if (curr > acc) {
            return curr;
        } else {
            return acc;
        }
    }, arr[0]);
    results.push("\n=== 3. Find Maximum Value ===");
    results.push("Array: [" + arr.join(", ") + "]");
    results.push("Max using Math.max(...arr): " + maxWithSpread);
    results.push("Max using reduce: " + maxWithReduce);
    
    // Task 4: Average function
    function getAverage(array) {
        const sum = array.reduce(function(acc, curr) {
            return acc + curr;
        }, 0);
        return sum / array.length;
    }
    results.push("\n=== 4. Average Function ===");
    results.push("Array average of [10, 20, 30, 40, 50]: " + getAverage([10, 20, 30, 40, 50]));
    results.push("Array average of [5, 15, 25, 35]: " + getAverage([5, 15, 25, 35]));
    
    results.push("\n📖 Recommended Reading:");
    results.push("• https://javascript.info/array");
    results.push("• https://javascript.info/array-methods");
    
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
    const isExpanded = contentElement.classList.contains('show');
    
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

const consoleLoggers = {
    cart: logCartOnly,
    scores: logScoresOnly,
    gst: logGSTOnly,
    reduce: logReduceOnly,
    practice: logPracticeOnly
};

// ============================================
// ACCORDION FUNCTIONALITY for Homework Tasks
// ============================================

function wireAccordions() {
    const cards = document.querySelectorAll('.stack-layout .expandable-card');
    
    cards.forEach(function(card) {
        const header = card.querySelector('.card-header');
        const content = card.querySelector('.card-content');
        const icon = card.querySelector('.toggle-icon');
        
        if (!header || !content || !icon) return;
        
        header.addEventListener('click', function(e) {
            e.stopPropagation();
            const wasOpen = content.classList.contains('expanded');
            const open = content.classList.toggle('expanded');
            icon.textContent = open ? '▲' : '▼';
            
            // When opening a card, run its corresponding console logger
            if (open && !wasOpen) {
                const key = card.getAttribute('data-log-task');
                var fn = key && consoleLoggers[key];
                if (fn) fn();
            }
        });
        
        header.style.cursor = 'pointer';
    });
}

// ============================================
// INITIALIZE PAGE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Set Class Work content
    const classWorkTasks = document.getElementById('classWorkTasks');
    if (classWorkTasks) {
        classWorkTasks.innerHTML = buildClassWorkHTML();
    }
    
    // Set reference text for each homework task
    const outCart = document.getElementById('outCart');
    const outScores = document.getElementById('outScores');
    const outGST = document.getElementById('outGST');
    const outReduce = document.getElementById('outReduce');
    const outPractice = document.getElementById('outPractice');
    
    if (outCart) outCart.textContent = cartReferenceText();
    if (outScores) outScores.textContent = scoresReferenceText();
    if (outGST) outGST.textContent = gstReferenceText();
    if (outReduce) outReduce.textContent = reduceReferenceText();
    if (outPractice) outPractice.textContent = practiceReferenceText();
    
    // Set up Class Work expand/collapse
    const classWorkHeader = document.getElementById('classWorkHeader');
    const classWorkContent = document.getElementById('classWorkContent');
    const classWorkIcon = document.getElementById('classWorkIcon');
    
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
    
});

// ============================================
// EXPORT FUNCTIONS FOR GLOBAL ACCESS
// ============================================

window.goBack = goBack;
window.toggleClassWork = toggleClassWork;

// Expose functions for console testing
window.filterPassing = function(scores) {
    return scores.filter(function(n) { return n >= 60; });
};
window.findFirstFailing = function(scores) {
    return scores.find(function(n) { return n < 60; });
};
window.addGST = function(prices) {
    return prices.map(function(price) {
        return Math.round((price + price * 0.18) * 100) / 100;
    });
};
window.getTotal = function(expenses) {
    return expenses.reduce(function(acc, curr) { return acc + curr; }, 0);
};
window.getHighest = function(expenses) {
    return expenses.reduce(function(acc, curr) {
        return curr > acc ? curr : acc;
    }, expenses[0]);
};
window.getAverage = function(arr) {
    var sum = arr.reduce(function(acc, curr) { return acc + curr; }, 0);
    return sum / arr.length;
};