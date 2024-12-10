function showNextVisual() {
  const speechBubble = document.querySelector('.speech-bubble');
  
  speechBubble.innerHTML = `
    <p>First and foremost, he wanted to tell you that he loves you very much!</p>
    <p>Well, I can tell. He even made this for you, and I think he sacrificed his sleep for this.</p>
    <p>That idiot really overdid things again...</p>
  `;

  const image = document.querySelector('.d2');
  image.src = 'd10.gif';
  
  const button = document.querySelector('.next-button');
  button.setAttribute('onclick', 'showThirdVisual()');
  button.textContent = 'Press Here';
}

function showThirdVisual() {
  const speechBubble = document.querySelector('.speech-bubble');
  
  speechBubble.innerHTML = `
    <p>Ahem, please forget about what I said to master... I don't want to get fired... </p>
    <p>In any case, I will be showing you his schedule. He told me that he's having a hard time balancing his schedule now that you've come to his life. That sounded super cringe, but I guess he really loves you that he even made time for you.</p>
    <p>If you break up with him, I'll sue your parents!</p>
  `;

  const image = document.querySelector('.d2');
  image.src = 'd3.gif';
  
  const button = document.querySelector('.next-button');
  button.setAttribute('onclick', 'window.location.href="schedule.html"');
  button.textContent = 'Proceed to Schedule!';
}
