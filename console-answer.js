/**
 * Console output: show answers / results only (same idea as day 15 reference screenshots).
 * Drops banners, comments, doc links, bullets, embedded “practice” code samples, and step labels.
 */
(function (global) {
    'use strict';

    function normalizeValue(value) {
        var text = String(value).trim();
        var quoted;

        text = text.replace(/\s*\([^)]*(binding|mode|works|computes|cache|unchanged|updated|fixed|different|loaded)[^)]*\)\s*$/i, '');
        text = text.replace(/\s+[\u2013\u2014-]\s+.*$/g, '');
        text = text.replace(/;\s*$/g, '');

        quoted = text.match(/^(['"])(.*)\1$/);
        if (quoted) return quoted[2];

        return text.trim();
    }

    function hasArrow(t) {
        return (
            t.indexOf('\u2192') !== -1 ||
            t.indexOf('\u2190') !== -1 ||
            t.indexOf('\u2194') !== -1 ||
            t.indexOf('->') !== -1
        );
    }

    function arrowValue(t) {
        var parts = t.split(/\u2192|\u2190|\u2194|->/);
        if (parts.length < 2) return '';
        return normalizeValue(parts[parts.length - 1]);
    }

    function inlineConsoleValue(t) {
        var match = t.match(/console\.log\([^)]*\)\s*;?\s*\/\/\s*(.+)$/);
        if (!match) return '';
        return normalizeValue(match[1]);
    }

    function labeledOutputValue(t) {
        var match = t.match(/^(?:Output|Result|Unique|Total|Time|Cache size|Count|Final|First|Second|Third)\s*:?\s+(.+)$/i);
        if (!match) return '';
        return normalizeValue(match[1]);
    }

    function isMultiplicationLine(t) {
        return /\b(\d+\s*[*x]\s*\d+\s*=\s*\d+)/i.test(t);
    }

    function looksLikeEmbeddedCode(line, t) {
        if (/^(function|return|const|let|var|class|if\s|else\b|for\s|while\s|switch\s|case\s|new\s|Promise|Math\.|setTimeout|setInterval|fetchData|async\s|await\s|try\s|catch\s|throw\s|import\s|export\s)/.test(t)) {
            return true;
        }
        if (/^(\.then|\.catch|\.finally)\b/.test(t)) return true;
        if (/^[a-zA-Z_$][\w$]*\.[a-zA-Z_$][\w$]*\s*=/.test(t)) return true;
        if (/^\s{3,}(function|return|const|let|var|if\s|for\s|while\s|new\s|Promise|Math\.|setTimeout|fetchData|\.then|\.catch|async\s)/.test(line)) {
            return true;
        }
        if (/^\s*console\.log\(/i.test(t)) return true;
        if (/^\s*[\]\});,]+;?\s*$/.test(t) || /^\s*}\s*$/.test(t)) return true;
        return false;
    }

    function emitConsoleAnswer(text) {
        if (text == null) return;
        console.clear();

        if (Array.isArray(text)) {
            text.forEach(function (value) {
                console.log(value);
            });
            return;
        }

        String(text).split(/\r?\n/).forEach(function (line) {
            var t = line.trim();
            if (!t) return;

            var directConsoleValue = inlineConsoleValue(t);
            if (directConsoleValue) {
                console.log(directConsoleValue);
                return;
            }

            if (hasArrow(t)) {
                var value = arrowValue(t);
                if (value) console.log(value);
                return;
            }
            if (isMultiplicationLine(t)) {
                console.log(t);
                return;
            }

            var outputValue = labeledOutputValue(t);
            if (outputValue && !looksLikeEmbeddedCode(line, t)) {
                console.log(outputValue);
                return;
            }

            if (t.indexOf('//') === 0) return;
            if (t.length >= 6 && t.slice(0, 3) === '===' && t.slice(-3) === '===') return;
            if (t.length >= 7 && t.slice(0, 3) === '---' && t.slice(-3) === '---') return;
            if (/javascript\.info/i.test(t)) return;
            if (/^https?:\/\//i.test(t)) return;
            if (/Read:\s*/i.test(t)) return;
            if (/click (any |on |the )?(task|homework|button)/i.test(t)) return;
            if (/in the live demo/i.test(t)) return;
            if (/^Steps?:/i.test(t)) return;
            if (/^Using /i.test(t)) return;
            if (/^Why\??$/i.test(t)) return;
            if (/^(Why|THE BUG|FIX|DIFFERENCES|FUNCTION DECLARATION|FUNCTION EXPRESSION|ARROW FUNCTION|Benefits|Note|Snippet|Setup|Expected|Code|Example|Solution|Rules?):/i.test(t)) return;
            if (/^(THE BUG|FIX\s+\d+|FUNCTION DECLARATION|FUNCTION EXPRESSION|CONST ARROW)\b/i.test(t)) return;
            if (/^The class /i.test(t)) return;
            if (/^For each /i.test(t)) return;
            if (/^Executing:/i.test(t)) return;
            if (/^\d+\.\s/i.test(t)) return;
            if (/^Click /i.test(t)) return;
            if (/^The changes are visible/i.test(t)) return;
            if (/live demo( area)? to see/i.test(t)) return;
            if (/^  - /.test(line)) return;
            if (/^  [0-9]+\.\s/.test(line)) return;
            if (/^What changes\?/i.test(t)) return;
            if (/^Everything else is TRUTHY/i.test(t)) return;
            if (/^(\*|\u2022|\u00B7|â)/.test(t)) return;
            if (/^===? The \d+ Falsy/i.test(t)) return;
            if (/^Try username/i.test(t)) return;
            if (/^[\u2014\u2013-] .+ [\u2014\u2013-]$/.test(t) && !hasArrow(t)) return;
            if (/^canDrive becomes|^canTravel becomes/i.test(t)) return;
            if (/^Why Guard/i.test(t)) return;
            if (/^(Original|Refactored) Nested/i.test(t)) return;
            if (/📖|Recommended Reading/i.test(t)) return;
            if (/^[•\u2022\u00B7]\s?/.test(t)) {
                var restBullet = t.replace(/^[•\u2022\u00B7]\s*/, '').trim();
                if (/^https?:/i.test(restBullet)) return;
                if (restBullet.length > 52) return;
                if (restBullet) console.log(restBullet);
                return;
            }
            if (/^-\s/.test(t) && !hasArrow(t)) return;
            if (
                /^[1-6]\.\s/.test(t) &&
                !hasArrow(t) &&
                /^(false|0|null|undefined|NaN|'|"|''|""|\[\]|\{)/i.test(t.replace(/^[1-6]\.\s/, ''))
            ) {
                console.log(normalizeValue(t.replace(/^[1-6]\.\s/, '')));
                return;
            }
            if (/^\d+\.\s/.test(t) && /:\s*$/.test(t)) return;
            if (/^[(){}\[\];,|`'\s]+$/.test(t)) return;

            if (looksLikeEmbeddedCode(line, t)) return;

            console.log(t);
        });
    }

    global.emitConsoleAnswer = emitConsoleAnswer;
})(typeof window !== 'undefined' ? window : globalThis);
