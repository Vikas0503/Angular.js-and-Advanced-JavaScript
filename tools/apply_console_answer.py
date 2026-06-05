"""
Wire console-answer.js into day3–day26 and route reference logs through emitConsoleAnswer.
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

DAY3_LOGS = [
    (
        """function logArithmeticOnly() {
    console.clear();
    const { title, body } = arithmeticData();
    body.forEach((line) => console.log(line));
}""",
        """function logArithmeticOnly() {
    emitConsoleAnswer(arithmeticReferenceText());
}""",
    ),
    (
        """function logEqualityOnly() {
    console.clear();
    const { title, body } = equalityData();
    body.forEach((line) => console.log(line));
}""",
        """function logEqualityOnly() {
    emitConsoleAnswer(equalityReferenceText());
}""",
    ),
    (
        """function logAccessOnly() {
    console.clear();
    const { title, body } = accessData();
    body.forEach((line) => console.log(line));
}""",
        """function logAccessOnly() {
    emitConsoleAnswer(accessReferenceText());
}""",
    ),
    (
        """function logTernaryOnly() {
    console.clear();
    const { title, body } = ternaryData();
    body.forEach((line) => console.log(line));
}""",
        """function logTernaryOnly() {
    emitConsoleAnswer(ternaryReferenceText());
}""",
    ),
    (
        """function logRectangleOnly() {
    console.clear();
    const { title, body } = rectangleData();
    body.forEach((line) => console.log(line));
}""",
        """function logRectangleOnly() {
    emitConsoleAnswer(rectangleReferenceText());
}""",
    ),
]

CLEAR_LOG_RE = re.compile(
    r"console\.clear\(\);\s*\r?\n\s*console\.log\(([^;]+)\);\s*",
    re.MULTILINE,
)


def patch_html(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    if "console-answer.js" in text:
        return False
    for old in ('<script src="script.js"></script>', '<script src="script.js" />'):
        if old in text:
            insert = '<script src="../console-answer.js"></script>\n' + old
            text = text.replace(old, insert, 1)
            path.write_text(text, encoding="utf-8")
            return True
    return False


def patch_script(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    orig = text

    if path.parent.name == "day3":
        for a, b in DAY3_LOGS:
            text = text.replace(a, b)

    text, _n = CLEAR_LOG_RE.subn(lambda m: f"emitConsoleAnswer({m.group(1)});\n", text)
    if text != orig:
        path.write_text(text, encoding="utf-8")
        return True
    return False


def remove_day5_startup_logs() -> None:
    p = ROOT / "day5" / "script.js"
    if not p.exists():
        return
    t = p.read_text(encoding="utf-8")
    block = """    wireAccordions();

    for (let f of fruits) console.log(f);

    for (let i = 0; i < name.length; i++) console.log(name[i]);
    const studentKeys = Object.keys(student);
    for (let k = 0; k < studentKeys.length; k++) {
        console.log(studentKeys[k], ":", student[studentKeys[k]]);
    }
    for (let i = 1; i <= 10; i++) {
        console.log(7 + " * " + i + " = " + (7 * i));
    }
"""
    if block in t:
        t = t.replace(block, "    wireAccordions();\n")
        p.write_text(t, encoding="utf-8")


def main() -> None:
    html_changed = []
    for i in range(3, 27):
        hp = ROOT / f"day{i}" / "index.html"
        if hp.exists() and patch_html(hp):
            html_changed.append(hp.relative_to(ROOT))

    js_changed = []
    for i in range(3, 27):
        sp = ROOT / f"day{i}" / "script.js"
        if not sp.exists():
            continue
        if patch_script(sp):
            js_changed.append(sp.relative_to(ROOT))

    remove_day5_startup_logs()

    print("HTML:", len(html_changed), "scripts:", len(js_changed))


if __name__ == "__main__":
    main()
