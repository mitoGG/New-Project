if (!username) {
    document.querySelector("input[name='username']").classList.add("invalid");
} else {
    document.querySelector("input[name='username']").classList.remove("invalid");
}