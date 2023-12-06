import { readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const __dirname = dirname(fileURLToPath(import.meta.url));

// TODO: path-to-templates-dir optional flag
export function fetchTemplates(path?: string): string[] {
    try {
        if (path) return readdirSync(path);
        return readdirSync(join(__dirname, "..", "src", "templates"));
    } catch (err) {
        console.error("Error: Could not find \"templates\" directory");
        process.exit(1);
    }
}
