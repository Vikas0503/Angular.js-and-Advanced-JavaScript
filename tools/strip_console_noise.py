"""
Remove decorative / explanatory console.log lines from day*/script.js.
Keeps logs that print reference data, loop outputs, and demo results.
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def strip_explanation_blocks(text: str) -> str:
    """Remove --- Explanation --- and following console.log string lines until a non-matching line."""
    lines = text.splitlines(keepends=True)
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if re.search(r'console\.log\([\'"]\\n?--- Explanation ---[\'"]\)', line):
            i += 1
            while i < len(lines):
                n = lines[i]
                if not re.match(r"^\s*console\.log\(", n):
                    break
                # drop prose explanation logs (single string literal argument)
                if re.match(
                    r'^\s*console\.log\(\s*["\']([^"\']|\\["\'])*["\']\s*\)\s*;\s*$',
                    n,
                ):
                    i += 1
                    continue
                break
            continue
        out.append(line)
        i += 1
    return "".join(out)


def apply_regexes(text: str) -> str:
    patterns = [
        # Task / practice / bonus headers
        r"^\s*console\.log\([`'\"].*--- (?:Task|Bonus|Practice Tasks).*---[`'\"]\);\s*\n",
        r'^\s*console\.log\(`--- \$\{title\} ---`\);\s*\n',
        # Ready / welcome banners
        r"^\s*console\.log\([`'\"].*===.*Ready.*===[`'\"]\);\s*\n",
        r"^\s*console\.log\([`'\"].*=== Day [^`'\"]+===[`'\"]\);\s*\n",
        r"^\s*console\.log\([`'\"]--- Homework Outputs ---[`'\"]\);\s*\n",
        r"^\s*console\.log\([`'\"]🔥[^`'\"]+🔥[`'\"]\);\s*\n",
        r"^\s*console\.log\([`'\"]ADVANCED[^`'\"]+[`'\"]\);\s*\n",
        # Topic / tip lines (emoji or bullet lists)
        r"^\s*console\.log\([`'\"][^`'\"]*[📘📚💡🎮🔥][^`'\"]*[`'\"]\);\s*\n",
        r"^\s*console\.log\([`'\"]Class Work topics:[`'\"]\);\s*\n",
        r"^\s*console\.log\([`'\"]•[^`'\"]*[`'\"]\);\s*\n",
        # Spacers
        r'^\s*console\.log\([`\'"][`\'"]\);\s*\n',
        # Section labels before classroom demos
        r'^\s*console\.log\([`\'"]\\n=== Classroom[^`\'"]+[`\'"]\);\s*\n',
        r'^\s*console\.log\([`\'"]for\.\.\.of with fruits:[`\'"]\);\s*\n',
        r'^\s*console\.log\([`\'"]\\nfor loop with name[^`\'"]+[`\'"]\);\s*\n',
        r'^\s*console\.log\([`\'"]\\nfor loop with Object\.keys\(\):[`\'"]\);\s*\n',
        r'^\s*console\.log\([`\'"]\\nMultiplication Table of 7:[`\'"]\);\s*\n',
        # Table title inside window helpers (keep rows)
        r'^\s*console\.log\([`\'"]=== Multiplication Table of [`\'"] \+ num \+ [`\'"] ===[`\'"]\);\s*\n',
        r'^\s*console\.log\("=== Multiplication Table of " \+ num \+ " ==="\);\s*\n',
    ]
    for p in patterns:
        text = re.sub(p, "", text, flags=re.MULTILINE)
    return text


def main() -> None:
    changed = []
    for path in sorted(ROOT.glob("day*/script.js")):
        raw = path.read_text(encoding="utf-8")
        text = strip_explanation_blocks(raw)
        text = apply_regexes(text)
        if text != raw:
            path.write_text(text, encoding="utf-8")
            changed.append(path.relative_to(ROOT))
    # Root dashboard
    sp = ROOT / "script.js"
    if sp.exists():
        raw = sp.read_text(encoding="utf-8")
        text = re.sub(
            r"^\s*console\.log\([^)]+\);\s*\n",
            "",
            raw,
            flags=re.MULTILINE,
        )
        if text != raw:
            sp.write_text(text, encoding="utf-8")
            changed.append(sp.relative_to(ROOT))
    for c in changed:
        print("updated", c)


if __name__ == "__main__":
    main()
