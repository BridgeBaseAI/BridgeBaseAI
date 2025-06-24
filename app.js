function analyzeInput() {
  const input = document.getElementById("userInput").value.trim();
  const output = document.getElementById("outputBox");

  output.innerHTML = "⏳ Analyzing... please wait...";

  if (input.startsWith("0x")) {
    analyzeWallet(input, output);
  } else {
    analyzeGithub(input, output);
  }
}
