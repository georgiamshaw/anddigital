const test = require("tape");
const solution = require("./SolutionAND.js");

test("Input containing only integers", t => {
  const actual = "236";
  const expected = ["632", "623", "362", "326", "263", "236"];
  t.deepEqual(solution(actual), expected, "Returns all permutations");
  t.end();
});

test("Input containing integers and letters", t => {
  const actual = "A 3B2 C6D";
  const expected = ["632", "623", "362", "326", "263", "236"];
  t.deepEqual(
    solution(actual),
    expected,
    "Returns all permutations and filters out letters"
  );
  t.end();
});

test("Input containing only letters", t => {
  const actual = "ABC";
  const expected = "This input does not contain any integers";
  t.deepEqual(solution(actual), expected, "Returns an error message");
  t.end();
});
