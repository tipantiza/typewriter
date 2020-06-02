const typewriter = (string) =>{
  let interval = 0
  for (const char of string){
    interval += 125;
    setTimeout(() => {
      process.stdout.write(char);
    }, interval)
  }
  setTimeout(() => {
    console.log()
  }, interval);
}
  
const sentence = "hello there from lighthouse labs";

typewriter(sentence);