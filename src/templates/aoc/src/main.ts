import { output_to_file } from "./lib/util";
import { part1, part2 } from "./solve";

(function main() {
    const sol_1 = part1();
    console.log(sol_1);
    output_to_file(sol_1);

    console.log("-".repeat(16));

    const sol_2 = part2();
    console.log(sol_2);
    output_to_file(sol_2);
})();
