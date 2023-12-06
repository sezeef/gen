import { Command } from "commander";
import path from "node:path";
import { __dirname } from "./lib/paths";
import fs from "node:fs";


// <arg> = required
// [arg] = optional

export function makeAOCCommand() {
    return new Command('aoc')
        .description("Generate Advent-of-Code Template")
        // TODO: add name validator
        .option("-n, --name <project_name>", "Name of the Project Directory")
        .action(({name}) => {
            // TODO: read curr_dir and generate correct name
            if (!name) name = "day-00";

            const template_path = path.join(__dirname, "..", "src", "templates", "aoc");
            const curr_dir = process.cwd();
            fs.mkdirSync(path.join(curr_dir, name));
            create_and_populate(template_path, name, curr_dir);

        });
}

function create_and_populate(t_path: string, d_name: string, curr_dir: string) {
    const files_to_create = fs.readdirSync(t_path);

    console.log("Generating Advent-of-Code Template...");

    files_to_create.forEach(file => {
        const og_file_path = path.join(t_path, file);

        const stats = fs.statSync(og_file_path);
        if (stats.isFile()) {
            const content = fs.readFileSync(og_file_path, "utf-8");
            //! Hacky shit
            if (file === ".npmignore") file = ".gitignore";
            const write_path = path.join(curr_dir, d_name, file);
            fs.writeFileSync(write_path, content, "utf-8");
        } else if (stats.isDirectory()) {
            fs.mkdirSync(path.join(curr_dir, d_name, file));
            create_and_populate(
                path.join(t_path, file),
                path.join(d_name, file),
                curr_dir
            );
        }
    });
}
