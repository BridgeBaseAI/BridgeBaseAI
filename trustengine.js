function setExample(value) {
  document.getElementById('userInput').value = value;
}

function generatePrompt() {
  const input = document.getElementById('userInput').value.trim();
  if (!input) {
    alert("Please enter a GitHub username or wallet address.");
    return;
  }

  let prompt = "";

  if (input.startsWith("0x")) {
    prompt = `
You are a Web3 trust agent AI. Analyze the Ethereum wallet below.

Address: ${input}

Step 1: Based on known on-chain behaviors (NFT activity, DeFi txs, token swaps, age of wallet, gas usage patterns, wallet frequency), make educated assumptions about:
- Trustworthiness
- Suspicious or healthy behavior
- Possible user intent (trader, dev, scammer, etc)

Step 2: Assign a trust score from 0 to 100.
Step 3: Summarize the reasoning in clear, simple English (1 paragraph max).
Step 4: Suggest if this user is suitable to hire, invest in, or collaborate with.

Start now.
    `;
  } else {
    prompt = `
You are an AI assistant analyzing open-source developer reputation.

GitHub Username: ${input}

Step 1: Look at number of public repos, stars, recent commits, contribution activity, followers, and project types.
Step 2: Estimate overall dev experience and professionalism.
Step 3: Assign a trust score from 0 to 100.
Step 4: Output a 3-sentence summary in plain English explaining the score.

End with: "Would you trust this dev to contribute to your smart contract project?"

Start now.
    `;
  }

  document.getElementById('output').innerHTML = `
    <strong>Trust Score:</strong> —<br />
    <em>Run the prompt below in ChatGPT for your AI analysis.</em>
  `;

  document.getElementById('promptBox').innerHTML = `
    <strong>GPT Prompt:</strong><br/>
    <textarea rows="12" style="width:100%;margin-top:0.5rem;">${prompt.trim()}</textarea>
  `;
}
