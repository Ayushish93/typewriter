const sentence = "hello there from lighthouse labs";
let delay = 0;
const sentanceWithNewLine = sentence + "\n";     // added newline character at the end of sentence
for (const char of sentanceWithNewLine) {
    delay = delay + 50;
    setTimeout(() => {
        process.stdout.write(char);
    }, delay); 

}




