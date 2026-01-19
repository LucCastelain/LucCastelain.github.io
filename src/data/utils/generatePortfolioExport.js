import portfolioDataEn from "../portfolio.data.en.ts";
import fs from "fs";

function toCamelCase(str) {
    return str
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .split(" ")
        .map((word, index) =>
            index === 0
                ? word.charAt(0).toLowerCase() + word.slice(1)
                : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("");
}

let output = "";

portfolioDataEn.projects.forEach((project) => {
    const prefix = toCamelCase(project.title);

    output += `// ------------------ ${project.title} ------------------ //\n`;
    output += `export const ${prefix}_title = ${JSON.stringify(project.title)};\n`;
    output += `export const ${prefix}_description = ${JSON.stringify(
        project.description || ""
    )};\n\n`;

    if (Array.isArray(project.keypoints)) {
        project.keypoints.forEach((kp, index) => {
            const i = index + 1;
            output += `export const ${prefix}_keypoint${i}_title = ${JSON.stringify(
                kp.title || ""
            )};\n`;
            output += `export const ${prefix}_keypoint${i}_description = ${JSON.stringify(
                kp.description || ""
            )};\n\n`;
        });
    }
});

fs.writeFileSync("portfolio.exports.js", output);
console.log("✅ portfolio.exports.js generated");
