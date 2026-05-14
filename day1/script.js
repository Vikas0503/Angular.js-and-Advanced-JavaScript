function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, (m) =>
        m === '&' ? '&amp;' : m === '<' ? '&lt;' : '&gt;'
    );
}

function captureLogs(fn) {
    const originalLog = console.log;
    const logs = [];
    console.log = (...args) => {
        logs.push(args.map(String).join(' '));
        originalLog.apply(console, args);
    };
    fn();
    console.log = originalLog;
    return logs;
}

function area(length, width) {
    return length * width;
}

const areaArrow = (length, width) => length * width;

const greet = (name = 'Guest') => `Hello, ${name}!`;

function buildClassWorkHTML() {
    const areaLines = [
        'area(5, 3)  → ' + area(5, 3),
        'area(10, 4) → ' + area(10, 4),
        'area(7, 7)  → ' + area(7, 7),
        '',
        '✨ Bonus: areaArrow(8, 6) → ' + areaArrow(8, 6),
    ];
    const greetLines = [
        'greet("Priya") → ' + greet('Priya'),
        'greet("Aarav") → ' + greet('Aarav'),
        'greet()        → ' + greet(),
        'greet(null)   → ' + greet(null),
    ];
    const areaLogs = captureLogs(() => {
        area(5, 3);
        area(10, 4);
        area(7, 7);
        areaArrow(8, 6);
    });
    const greetLogs = captureLogs(() => {
        greet('Priya');
        greet('Aarav');
        greet();
        greet(null);
    });

    return `
        <div class="task-block">
            <div class="task-title">📐 Task 1: area() function & arrow function</div>
            <pre class="code-block"><code>function area(length, width) {
    return length * width;
}

const areaArrow = (length, width) => length * width;

area(5, 3);   // 15
areaArrow(8, 6); // 48</code></pre>
            <div class="output-label">📤 Output:</div>
            <div class="output-console">${areaLines.join('\n')}</div>
            <div class="inline-badge">✓ logs: ${areaLogs.join(' | ')}</div>
        </div>
        <div class="task-block">
            <div class="task-title">👋 Task 2: greet() with default parameter</div>
            <pre class="code-block"><code>const greet = (name = "Guest") => \`Hello, \${name}!\`;

greet("Priya");   // Hello, Priya!
greet("Aarav");   // Hello, Aarav!
greet();          // Hello, Guest!</code></pre>
            <div class="output-label">📤 Output:</div>
            <div class="output-console">${greetLines.join('\n')}</div>
            <div class="inline-badge">💡 logs: ${greetLogs.join(' ; ')}</div>
        </div>
        <div class="task-block">
            <div class="task-title">🧩 Function Expressions & Composition</div>
            <pre class="code-block"><code>const add = function(a, b) { return a + b; };
console.log(add(5, 3));        // 8
console.log(add(add(1, 2), add(3, 4))); // 10</code></pre>
            <div class="output-console">add(5,3) → 8<br>add(add(1,2), add(3,4)) → 10</div>
        </div>
    `;
}

function buildHomeworkHTML() {
    return `
        <div class="task-block">
            <div class="task-title">🏠 Homework 1: Extend area() with validation</div>
            <pre class="code-block"><code>function safeArea(l, w) {
    if (typeof l !== 'number' || typeof w !== 'number') return 'Invalid input';
    return l * w;
}
console.log(safeArea(4, '5')); // Invalid input
console.log(safeArea(7, 8));   // 56</code></pre>
            <div class="output-console">✓ safeArea(7,8) → 56<br>✓ safeArea(4, '5') → Invalid input</div>
        </div>
        <div class="task-block">
            <div class="task-title">🚀 Bonus: Arrow function + map</div>
            <pre class="code-block"><code>const numbers = [2, 4, 6, 8];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [4, 8, 12, 16]</code></pre>
            <div class="output-console">doubled array: [4, 8, 12, 16]</div>
        </div>
    `;
}

/** Only one panel open at a time; clicking the open panel closes it. */
function toggleExclusivePanel(activeContent, activeIcon, allPanels) {
    const opening = !activeContent.classList.contains('expanded');
    allPanels.forEach(({ content, icon }) => {
        content.classList.remove('expanded');
        if (icon) icon.textContent = '▼';
    });
    if (opening) {
        activeContent.classList.add('expanded');
        if (activeIcon) activeIcon.textContent = '▲';
    }
}

function goBack() {
    window.location.href = '../index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const classWorkContainer = document.getElementById('classWorkTasksContainer');
    const homeworkContainer = document.getElementById('homeworkTasksContainer');
    if (classWorkContainer) classWorkContainer.innerHTML = buildClassWorkHTML();
    if (homeworkContainer) homeworkContainer.innerHTML = buildHomeworkHTML();

    const classWorkContent = document.getElementById('classWorkContent');
    const classWorkIcon = document.getElementById('classWorkIcon');
    const homeworkContent = document.getElementById('homeworkContent');
    const homeworkIcon = document.getElementById('homeworkIcon');

    const panels = [
        { content: classWorkContent, icon: classWorkIcon },
        { content: homeworkContent, icon: homeworkIcon },
    ].filter((p) => p.content);

    const bind = (headerId, content, icon) => {
        const header = document.getElementById(headerId);
        if (!header || !content) return;
        header.style.cursor = 'pointer';
        header.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleExclusivePanel(content, icon, panels);
        });
    };

    bind('classWorkHeader', classWorkContent, classWorkIcon);
    bind('homeworkHeader', homeworkContent, homeworkIcon);
});
