const randomTexts = [
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Surely not?",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Don't be so cold!",
    "Wouldn't you consider",
    "Is that your final answer",
    "Your breaking my heart ;(",
    "Change of heart?",
    "You might regret this",
    "Give it another thought!",
  ];

  let shrinkCount = 0;

  function shrinkNo() {

    shrinkCount += 5;

    document.getElementById("yesBtn").classList.add("enlarge");
    document.getElementById("noBtn").classList.remove("shrink");
    
    document.getElementById("noBtn").style.transform = `scale(${0.8 - (shrinkCount / 100)})`;
    document.getElementById("yesBtn").style.transform = `scale(${1.5 + (shrinkCount / 100)})`;

    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    const randomText = randomTexts[randomIndex];
    
    document.getElementById("noBtn").innerHTML = randomText;
    document.getElementById("randomText").innerHTML = randomText;
  }