import fs from "fs";

/**
 * Replace this function with:
 * - DeepL
 * - Google Translate
 * - OpenAI
 * - Your own dictionary
 */
/**
 * Google Translate implementation
 * Docs: https://cloud.google.com/translate/docs/reference/rest/v2/translate
 */
async function translate(text, targetLang) {
    const res = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                q: text,
                target: targetLang,
                format: "text",
            }),
        }
    );

    const json = await res.json();

    if (!json.data || !json.data.translations?.length) {
        throw new Error(
            `Google Translate error: ${JSON.stringify(json)}`
        );
    }

    return json.data.translations[0].translatedText;
}

async function translateFile({
                                 inputFile,
                                 outputFile,
                                 targetLang,
                             }) {
    const source = fs.readFileSync(inputFile, "utf8");

    // Match ONLY string literals: "..."
    const stringRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;

    const translations = new Map();

    for (const match of source.matchAll(stringRegex)) {
        const original = match[1];

        // Skip empty strings
        if (!original.trim()) continue;

        if (!translations.has(original)) {
            translations.set(
                original,
                await translate(original, targetLang)
            );
        }
    }

    let translatedSource = source;

    for (const [original, translated] of translations.entries()) {
        const escapedOriginal = original.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        translatedSource = translatedSource.replace(
            new RegExp(`"${escapedOriginal}"`, "g"),
            `"${translated}"`
        );
    }

    fs.writeFileSync(outputFile, translatedSource);
    console.log(`✅ Translated file written to ${outputFile}`);
}

// ---------- CONFIG ----------
translateFile({
    inputFile: "../data-en.ts",
    outputFile: "./data-fr.ts",
    targetLang: "fr",
});
