// The following is the function where the solution shall be written

function solution(input) {
  const hasNumber = /\d/;
  if (!hasNumber.test(input)) {
    return "This input does not contain any integers";
  }

  const filteredInput = input.replace(/[^\d.-]/g, "");

  if (filteredInput.length < 2) return filteredInput;

  let answerArray = [];

  for (let i = 0; i < filteredInput.length; i++) {
    let digit = filteredInput[i];

    if (filteredInput.indexOf(digit) !== i) continue;

    const remainingArray =
      filteredInput.slice(0, i) +
      filteredInput.slice(i + 1, filteredInput.length);

    for (const subArray of solution(remainingArray))
      answerArray.push(digit + subArray);
  }
  return answerArray.sort((a, b) => b - a);
}

module.exports = solution;

console.log(solution("326")); // expected ouput 632,623,362,326,263,236
console.log(solution("A 3B2 C6D")); // expected ouput 632,623,362,326,263,236
console.log(solution("ABC")); // expected output "This input does not contain any integers"
