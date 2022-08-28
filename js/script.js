//Business Logic
function wordCounter(text) {
    // to check for empty string
    if (text.trim().length === 0){
        return 0;
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function(element) {
        // logis to check for number
        if (!Number(element)){

      wordCount++;
    }
    });
    return wordCount;
  }