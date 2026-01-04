export function getModifierClass(highlightedText) {
    if (highlightedText === "HTML") {
        return "is-html";
    }

    if (highlightedText === "SCSS") {
        return "is-scss";
    }

    if (highlightedText === "JavaScript") {
        return "is-js";
    }

    if (highlightedText === "React") {
        return "is-react";
    }

    if (highlightedText === "Structure" || highlightedText === "структура") {
        return "is-structure";
    }
}
