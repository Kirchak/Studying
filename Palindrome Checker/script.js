const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkForPalindrome = input => {
  const firstInput = input;

  if(input === ''){
    alert('Please input a value');
    return;
  }

  result.replaceChildren();

  const lowerCaseString = input.replace(/[^A-Za-z0-9]/gi, '')
  .toLowerCase();
  
  let resultMessage = `<strong>${firstInput}</strong> ${
    lowerCaseString === [...lowerCaseString].reverse()
    .join('') ? 'is' : 'is not'
  } a palindrome.`;

  //with help from freeCodeCamp added this
  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMessage;
  result.appendChild(pTag);

  result.classList.remove('hidden');
};

checkButton.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});