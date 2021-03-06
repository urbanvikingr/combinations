// Example: node runner.js projects=14 elements=2 set="abcdefghijklmn".
const combinations = require("./combinations");

let set,
  total = 0;

// Input from user
const args = process.argv.slice(2);

args.forEach(arg => {
  const index = arg.indexOf("=");
  const key = arg.slice(0, index);
  const value = arg.slice(index + 1);

  // if (key === "elements" && !isNaN(value)) {
  //   elements = value;
  // }
  // if (key === "projects" && !isNaN(value)) {
  //   projects = value;
  // }
  if (key === "set") {
    if (isNaN(value)) {
      set = Array.from(value);
    } else {
      set = Array.from(value, d => Number(d));
    }
  }
});

if (set) {
  console.log("****************************************");

  for (let r = 0; r < set.length; r++) {
    const results = combinations(set, r);
    total = total + results.length;
    console.log(
      "r = " + r + "  n = " + set.length + "  combinations = ",
      results.length
    );
  }

  console.log("total combinations: ", total);
  console.log("****************************************");
} else {
  console.log("****************************************");
  console.log("set is required");
  console.log("****************************************");
}
