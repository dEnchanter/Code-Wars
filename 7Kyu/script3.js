function addLetters(letters) {
    return String.fromCharCode((letters.reduce((a,b) => {
        return a + b.charCodeAt(0)-96, 0
    })))
}