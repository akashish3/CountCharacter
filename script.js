        let input = document.getElementById("input-text");
        let count = document.getElementById("count");
        let wordCount = document.getElementById("word-count");
        let selectedCount = document.getElementById("selected-count");
        let warning = document.getElementById("warning");
        let toggleDarkMode = document.getElementById("toggle-dark-mode");

        function debounce(func, wait) {
        let timeout;
        return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
        };
       }

        input.addEventListener("input", debounce(() => {
        const currentLength = input.value.length;
        count.textContent = currentLength;
        wordCount.textContent = (input.value.match(/\b\w+\b/g) || []).length;
        warning.style.display = currentLength > 200 ? "block" : "none";
        }, 300));

        input.addEventListener("mouseup", () => {
            let selection = window.getSelection().toString();
            selectedCount.textContent = selection.length;
        });

        toggleDarkMode.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            document.querySelector('.container').classList.toggle("dark-mode");
            document.querySelector('.box').classList.toggle("dark-mode");
            input.classList.toggle("dark-mode");
        });
