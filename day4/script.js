// ============================================
// DAY 3 - HOMEWORK: Operators & Expressions
// Grading System, Day Type, Truthy/Falsy, Guard Clauses
// ============================================

// ----- Helper Functions -----
function goBack() {
    window.location.href = '../index.html';
}

function lines(...parts) {
    return parts.join('\n');
}

// ============================================
// TASK 1: Grading System (if/else if/else)
// ============================================

function gradingData() {
    const results = [];
    
    // Test case 1: marks = 72
    let marks = 72;
    let grade1 = getGrade(marks);
    results.push(`Test 1: marks = ${marks} → Grade: ${grade1}`);
    
    // Test case 2: marks = 95
    marks = 95;
    let grade2 = getGrade(marks);
    results.push(`Test 2: marks = ${marks} → Grade: ${grade2}`);
    
    // Test case 3: marks = 50
    marks = 50;
    let grade3 = getGrade(marks);
    results.push(`Test 3: marks = ${marks} → Grade: ${grade3}`);
    
    // Test case 4: marks = 75
    marks = 75;
    let grade4 = getGrade(marks);
    results.push(`Test 4: marks = ${marks} → Grade: ${grade4}`);
    
    // Bonus test: invalid marks
    marks = 105;
    let grade5 = getGrade(marks);
    results.push(`Bonus: marks = ${marks} → ${grade5}`);
    
    marks = -10;
    let grade6 = getGrade(marks);
    results.push(`Bonus: marks = ${marks} → ${grade6}`);
    
    return { title: 'Task 1: Grading System', body: results };
}

function getGrade(marks) {
    // Bonus: check for invalid marks first
    if (marks < 0 || marks > 100) {
        return "Invalid marks";
    }
    
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else {
        return "F";
    }
}

function gradingReferenceText() {
    return gradingData().body.join('\n');
}

function logGradingOnly() {
    console.clear();
    console.log("--- Task 1: Grading System (if/else if/else) ---");
    console.log(gradingReferenceText());
    console.log("\n--- Explanation ---");
    console.log("The function checks marks in descending order:");
    console.log("90+ → A, 75–89 → B, 60–74 → C, below 60 → F");
    console.log("Bonus: Invalid marks (<0 or >100) are caught first.");
}

// ============================================
// TASK 2: Day Type with switch
// ============================================

function dayTypeData() {
    const results = [];
    
    function getDayType(day) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                return "Weekday";
            case "Saturday":
            case "Sunday":
                return "Weekend";
            default:
                return "Invalid day";
        }
    }
    
    const testDays = ["Wednesday", "Monday", "Saturday", "Holiday"];
    
    for (let day of testDays) {
        results.push(`day = "${day}" → ${getDayType(day)}`);
    }
    
    return { title: 'Task 2: Day Type (switch)', body: results };
}

function dayTypeReferenceText() {
    return dayTypeData().body.join('\n');
}

function logDayTypeOnly() {
    console.clear();
    console.log("--- Task 2: Day Type with switch ---");
    console.log(dayTypeReferenceText());
    console.log("\n--- Explanation ---");
    console.log("Fall-through groups Monday-Friday into Weekday case.");
    console.log("Saturday & Sunday fall into Weekend case.");
    console.log("Any other value triggers the default case.");
}

// ============================================
// TASK 3: Truthy / Falsy Detective
// ============================================

function truthyData() {
    const results = [];
    
    function checkTruthy(value, label) {
        if (value) {
            return `${label} → TRUTHY`;
        } else {
            return `${label} → FALSY`;
        }
    }
    
    results.push("=== Predictions vs Reality ===");
    results.push("");
    
    const testValues = [
        { value: 0, label: "0" },
        { value: "0", label: '"0"' },
        { value: "", label: '"" (empty string)' },
        { value: " ", label: '" " (single space)' },
        { value: null, label: "null" },
        { value: undefined, label: "undefined" },
        { value: NaN, label: "NaN" },
        { value: [], label: "[] (empty array)" },
        { value: {}, label: "{} (empty object)" },
        { value: "false", label: '"false"' }
    ];
    
    for (let item of testValues) {
        results.push(checkTruthy(item.value, item.label));
    }
    
    results.push("");
    results.push("=== The 6 Falsy Values in JavaScript ===");
    results.push("1. false");
    results.push("2. 0");
    results.push("3. '' or \"\" (empty string)");
    results.push("4. null");
    results.push("5. undefined");
    results.push("6. NaN");
    results.push("");
    results.push("Everything else is TRUTHY including:");
    results.push("- '0' (string with zero)");
    results.push("- ' ' (string with space)");
    results.push("- [] (empty array)");
    results.push("- {} (empty object)");
    results.push("- 'false' (string with word false)");
    
    return { title: 'Task 3: Truthy / Falsy Detective', body: results };
}

function truthyReferenceText() {
    return truthyData().body.join('\n');
}

function logTruthyOnly() {
    console.clear();
    console.log("--- Task 3: Truthy / Falsy Detective ---");
    console.log(truthyReferenceText());
}

// ============================================
// BONUS: Guard Clauses Refactor
// ============================================

function guardData() {
    const results = [];
    
    // Original nested version (for reference)
    function canCommentOriginal(user) {
        if (user) {
            if (!user.isBanned) {
                if (user.age >= 13) {
                    return "Comment allowed";
                }
            }
        }
        return "Comment not allowed";
    }
    
    // Refactored version with guard clauses
    function canCommentRefactored(user) {
        // Guard clause 1: check if user exists
        if (!user) {
            return "Comment not allowed: User does not exist";
        }
        
        // Guard clause 2: check if user is banned
        if (user.isBanned) {
            return "Comment not allowed: User is banned";
        }
        
        // Guard clause 3: check minimum age
        if (user.age < 13) {
            return "Comment not allowed: User is under 13";
        }
        
        // All checks passed
        return "Comment allowed";
    }
    
    results.push("=== Original Nested Version ===");
    results.push("");
    
    // Test cases for original
    const testUser1 = { isBanned: false, age: 16 };
    const testUser2 = { isBanned: true, age: 20 };
    const testUser3 = null;
    const testUser4 = { isBanned: false, age: 10 };
    
    results.push(`Valid user (age 16, not banned): ${canCommentOriginal(testUser1)}`);
    results.push(`Banned user (age 20, banned): ${canCommentOriginal(testUser2)}`);
    results.push(`Null user: ${canCommentOriginal(testUser3)}`);
    results.push(`Underage user (age 10, not banned): ${canCommentOriginal(testUser4)}`);
    
    results.push("");
    results.push("=== Refactored Version with Guard Clauses ===");
    results.push("");
    
    results.push(`Valid user (age 16, not banned): ${canCommentRefactored(testUser1)}`);
    results.push(`Banned user (age 20, banned): ${canCommentRefactored(testUser2)}`);
    results.push(`Null user: ${canCommentRefactored(testUser3)}`);
    results.push(`Underage user (age 10, not banned): ${canCommentRefactored(testUser4)}`);
    
    results.push("");
    results.push("=== Why Guard Clauses are Better ===");
    results.push("• Flatter code structure (less nesting)");
    results.push("• Each invalid condition is handled immediately");
    results.push("• Easier to read and maintain");
    results.push("• Clear early returns for edge cases");
    results.push("• The 'happy path' remains at the bottom");
    
    return { title: 'Bonus: Guard Clauses Refactor', body: results };
}

function guardReferenceText() {
    return guardData().body.join('\n');
}

function logGuardOnly() {
    console.clear();
    console.log("--- Bonus: Guard Clauses Refactor ---");
    console.log(guardReferenceText());
}

// ============================================
// CONSOLE LOGGERS MAPPING
// ============================================

const consoleLoggers = {
    grading: logGradingOnly,
    daytype: logDayTypeOnly,
    truthy: logTruthyOnly,
    guard: logGuardOnly
};

// ============================================
// ACCORDION FUNCTIONALITY
// ============================================

function wireAccordions() {
    const cards = document.querySelectorAll('.stack-layout .expandable-card');
    
    cards.forEach((card) => {
        const header = card.querySelector('.card-header');
        const content = card.querySelector('.card-content');
        const icon = card.querySelector('.toggle-icon');
        
        if (!header || !content || !icon) return;
        
        header.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasOpen = content.classList.contains('expanded');
            const open = content.classList.toggle('expanded');
            icon.textContent = open ? '▲' : '▼';
            
            // When opening a card, run its corresponding console logger
            if (open && !wasOpen) {
                const key = card.getAttribute('data-log-task');
                const fn = key && consoleLoggers[key];
                if (fn) fn();
            }
        });
        
        header.style.cursor = 'pointer';
    });
}

// ============================================
// INITIALIZE PAGE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Set reference text for each task
    const outGrading = document.getElementById('outGrading');
    const outDayType = document.getElementById('outDayType');
    const outTruthy = document.getElementById('outTruthy');
    const outGuard = document.getElementById('outGuard');
    
    if (outGrading) outGrading.textContent = gradingReferenceText();
    if (outDayType) outDayType.textContent = dayTypeReferenceText();
    if (outTruthy) outTruthy.textContent = truthyReferenceText();
    if (outGuard) outGuard.textContent = guardReferenceText();
    
    // Set up accordion functionality
    wireAccordions();
    
    // Console welcome message
    console.log("=== Day 3 Homework Ready ===");
    console.log("Click on any task header to see its output in the console!");
    console.log("");
    console.log("Available tasks:");
    console.log("• Task 1: Grading System (if/else if/else)");
    console.log("• Task 2: Day Type (switch statement)");
    console.log("• Task 3: Truthy / Falsy Detective");
    console.log("• Bonus: Guard Clauses Refactor");
});

// Make functions available globally for console testing
window.goBack = goBack;
window.getGrade = getGrade;
window.getDayType = (day) => {
    switch (day) {
        case "Monday": case "Tuesday": case "Wednesday": case "Thursday": case "Friday":
            return "Weekday";
        case "Saturday": case "Sunday":
            return "Weekend";
        default:
            return "Invalid day";
    }
};
window.canCommentRefactored = (user) => {
    if (!user) return "Comment not allowed: User does not exist";
    if (user.isBanned) return "Comment not allowed: User is banned";
    if (user.age < 13) return "Comment not allowed: User is under 13";
    return "Comment allowed";
};