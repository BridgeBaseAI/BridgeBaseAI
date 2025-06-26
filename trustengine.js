
  <!-- JS Logic -->
  <script>
    function setExample(value) {
      document.getElementById('userInput').value = value;
    }

    function generatePrompt() {
      const input = document.getElementById('userInput').value.trim();
      const trust = Math.floor(Math.random() * 40) + 60;
      const trustEl = document.getElementById("trustValue");
      const fill = document.getElementById("scoreFill");
      const gptMsg = document.getElementById("gptMsg");
      const promptBox = document.getElementById("promptBox");
      const copyBtn = document.getElementById("copyBtn");

      if (!input) {
        alert("Please enter a GitHub username or wallet address.");
        return;
      }

      // Animate score bar
      fill.style.width = "0%";
      let current = 0;
      const anim = setInterval(() => {
        if (current >= trust) clearInterval(anim);
        else {
          current++;
          fill.style.width = current + "%";
          trustEl.textContent = current;
        }
      }, 15);

      // Build prompt
      let prompt = "";
      if (input.startsWith("0x")) {
        prompt = `You are a Web3 trust agent AI. Analyze the Ethereum wallet below.\n\nAddress: ${input}\n\nStep 1: Based on known on-chain behaviors (NFT activity, DeFi txs, token swaps, age of wallet, gas usage patterns, wallet frequency), make educated assumptions about:\n- Trustworthiness\n- Suspicious or healthy behavior\n- Possible user intent (trader, dev, scammer, etc)\n\nStep 2: Assign a trust score from 0 to 100.\nStep 3: Summarize the reasoning in clear, simple English (1 paragraph max).\nStep 4: Suggest if this user is suitable to hire, invest in, or collaborate with.`;
      } else {
        prompt = `You are an AI assistant analyzing open-source developer reputation.\n\nGitHub Username: ${input}\n\nStep 1: Look at number of public repos, stars, recent commits, contribution activity, followers, and project types.\nStep 2: Estimate overall dev experience and professionalism.\nStep 3: Assign a trust score from 0 to 100.\nStep 4: Output a 3-sentence summary in plain English explaining the score.\n\nEnd with: \"Would you trust this dev to contribute to your smart contract project?\"`;
      }

      gptMsg.textContent = "Run this prompt in ChatGPT to receive your AI analysis.";
      promptBox.innerHTML = `<strong>GPT Prompt:</strong><br/><textarea id="gptPrompt" rows="6" style="width:100%;margin-top:0.5rem;">${prompt}</textarea>`;
      copyBtn.style.display = 'inline-block';
    }

    function copyPrompt() {
      const text = document.getElementById("gptPrompt");
      text.select();
      document.execCommand("copy");
      alert("Prompt copied to clipboard ✅");
    }
  </script>
