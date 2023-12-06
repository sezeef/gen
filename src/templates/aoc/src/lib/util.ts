import fs from "node:fs";
import path from "node:path";

export function read_file (file_name: "test-input-1" | "test-input-2" | "prod-input",input_path?: string) {
    const in_path = input_path ?? path.join("..", "data", file_name);
    return fs.readFileSync(in_path, "utf-8");
}

export function output_to_file(output: string) {}
