
const textarea = document.getElementById("messages");
const charCount = document.getElementById("charCount");
const maxLength = 250;


textarea.addEventListener("input", () => {
    const length = textarea.value.length;
    charCount.textContent = maxLength - length;

    if (length > maxLength) {
      charCount.style.color = "red";
      charCount.textContent = "You have exceeded" + maxLength + length + "characters !";
    } else {
      charCount.style.color = "black";
    }
  });
