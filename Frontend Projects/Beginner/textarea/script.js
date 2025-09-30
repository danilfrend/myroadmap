const textArea = document.getElementById('userInput');
const charCount = document.getElementById('charCount');
const maxLength = 250;

textArea.addEventListener('input', function() {
    const currentLength = textArea.value.length;
    
    charCount.textContent = `${currentLength} / ${maxLength}`;

    if(currentLength >= maxLength) {
        textArea.classList.add('limit-reached');
        charCount.classList.add('limit-reached');
    }
    else {
        charCount.classList.remove('limit-reached');
        textArea.classList.remove('limit-reached');
    }
});