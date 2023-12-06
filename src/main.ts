#!/usr/bin/env node

import { Command } from "commander";
import { makeAOCCommand } from "./aoc";

(function main() {
    const program = new Command();
    program.addCommand(makeAOCCommand());
    program.parse(process.argv);
})();
