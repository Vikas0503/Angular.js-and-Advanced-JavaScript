function goBack() {
    window.location.href = '../index.html';
}

function lines(...parts) {
    return parts.join('\n');
}

/* ----- Task 1: Arithmetic ----- */
function arithmeticData() {
    const a = 17;
    const b = 5;
    const body = [
        '// Predictions: a+b=22, a-b=12, a*b=85, a/b=3.4, a%b=2, a**b=1419857',
        `a + b  → ${a + b}`,
        `a - b  → ${a - b}`,
        `a * b  → ${a * b}`,
        `a / b  → ${a / b}`,
        `a % b  → ${a % b}`,
        `a ** b → ${a ** b}`,
        '',
        `42 is ${42 % 2 === 0 ? 'even' : 'odd'}`,
    ];
    return { title: 'Task 1: Arithmetic', body };
}

function arithmeticReferenceText() {
    return arithmeticData().body.join('\n');
}

function logArithmeticOnly() {
    console.clear();
    const { title, body } = arithmeticData();
    console.log(`--- ${title} ---`);
    body.forEach((line) => console.log(line));
}

/* ----- Task 2: Equality ----- */
function equalityData() {
    const body = [
        `5 == "5"           → ${5 == '5'}`,
        `5 === "5"          → ${5 === '5'}`,
        `0 == false         → ${0 == false}`,
        `0 === false        → ${0 === false}`,
        `null == undefined  → ${null == undefined}`,
        `null === undefined → ${null === undefined}`,
    ];
    return { title: 'Task 2: Equality', body };
}

function equalityReferenceText() {
    return equalityData().body.join('\n');
}

function logEqualityOnly() {
    console.clear();
    const { title, body } = equalityData();
    console.log(`--- ${title} ---`);
    body.forEach((line) => console.log(line));
}

/* ----- Task 3: Access ----- */
function accessData() {
    const age = 19;
    const fmt = (hasLicense, hasCar) => {
        const canDrive = age >= 18 && hasLicense;
        const canTravel = hasLicense || hasCar;
        return lines(
            `hasLicense=${hasLicense}, hasCar=${hasCar}`,
            `(a) can drive  (age>=18 && hasLicense) → ${canDrive}`,
            `(b) can travel (hasLicense || hasCar)   → ${canTravel}`,
        );
    };
    const block1 = fmt(true, false);
    const block2 = fmt(false, false);
    const text = lines(
        '— Initial —',
        block1,
        '',
        '— After flipping hasLicense to false —',
        block2,
        '',
        'What changes? canDrive becomes false; canTravel becomes false (no car).',
    );
    return { title: 'Task 3: Access control', body: text.split('\n') };
}

function accessReferenceText() {
    return accessData().body.join('\n');
}

function logAccessOnly() {
    console.clear();
    const { title, body } = accessData();
    console.log(`--- ${title} ---`);
    body.forEach((line) => console.log(line));
}

/* ----- Bonus: Ternary & nullish ----- */
function ternaryData() {
    const age = 19;
    const mood = age >= 18 ? 'adult' : 'minor';
    let username = null;
    const display = username ?? 'Guest';
    const display2 = username || 'Guest';
    const body = [
        `mood (age=${age}) → ${mood}`,
        `display  (username ?? 'Guest') → ${display}`,
        `display2 (username || 'Guest') → ${display2}`,
        `Same for null? → ${display === display2} (both "Guest" when username is null)`,
        '',
        'Try username = "";  ?? keeps "";  || becomes "Guest"',
    ];
    return { title: 'Bonus: Ternary & nullish', body };
}

function ternaryReferenceText() {
    return ternaryData().body.join('\n');
}

function logTernaryOnly() {
    console.clear();
    const { title, body } = ternaryData();
    console.log(`--- ${title} ---`);
    body.forEach((line) => console.log(line));
}

/* ----- Rectangle area ----- */
function rectangleData() {
    function area(length, width) {
        return length * width;
    }
    const areaArrow = (length, width) => length * width;
    const body = [
        'area(5, 3)  → ' + area(5, 3),
        'area(10, 4) → ' + area(10, 4),
        'area(7, 7)  → ' + area(7, 7),
        '',
        'Bonus: areaArrow(8, 6) → ' + areaArrow(8, 6),
    ];
    return { title: 'Rectangle area', body };
}

function rectangleReferenceText() {
    return rectangleData().body.join('\n');
}

function logRectangleOnly() {
    console.clear();
    const { title, body } = rectangleData();
    console.log(`--- ${title} ---`);
    body.forEach((line) => console.log(line));
}

const consoleLoggers = {
    arithmetic: logArithmeticOnly,
    equality: logEqualityOnly,
    access: logAccessOnly,
    ternary: logTernaryOnly,
    rectangle: logRectangleOnly,
};

function wireAccordions() {
    document.querySelectorAll('.stack-layout .expandable-card').forEach((card) => {
        const header = card.querySelector('.card-header');
        const content = card.querySelector('.card-content');
        const icon = card.querySelector('.toggle-icon');
        if (!header || !content || !icon) return;

        header.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasOpen = content.classList.contains('expanded');
            const open = content.classList.toggle('expanded');
            icon.textContent = open ? '▲' : '▼';

            if (open && !wasOpen) {
                const key = card.getAttribute('data-log-task');
                const fn = key && consoleLoggers[key];
                if (fn) fn();
            }
        });
        header.style.cursor = 'pointer';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const set = (id, text) => {
        const n = document.getElementById(id);
        if (n) n.textContent = text;
    };

    set('outArithmetic', arithmeticReferenceText());
    set('outEquality', equalityReferenceText());
    set('outAccess', accessReferenceText());
    set('outTernary', ternaryReferenceText());
    set('outRectangle', rectangleReferenceText());

    wireAccordions();
});

window.goBack = goBack;
