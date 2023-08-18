function main() {
  console.log("hi");
  let variable = 5;
  console.log(variable);
}
main(); //node deploy.js in terminal and it will run line by line
//synchronous -solidity: every line of code is executed line wise and until current line gets executed then only next line will be executed so there is a wait
//asynchronous-javascript: js can be async , that is while a code is getting executed we can just not wait for it finish and can execute some other code too

// synch exa-
// 1-Put popcorn in microwave -> Promise-now here in js we have promise functiuons which has three state - pending,Fulfilled,rejected ,so here lets say we need to put a popcorn in a wave hence this finction will return a promise and will go through these three stages , once done fulfilled so this function takes time execute
// 2-Wait for popcorn to finish
// 3-now,Pour drinks for everyone

// async
// 1-Put popcorn in microwave - again a promise
// 2-now,Pour drinks for everyone while popcorn is in wave
// 3- wait for popcorn to finish

// setup movie night:
// 1Cook popcorn
// 2Pour Drinks
// 3Then only Start Movie

async function setUpMovieNight() {
  await cookPopcorn(); //we can only start movie when cook opcornand drinks poured, therefore also these are promise functions too , hence we will use await keyword comes with asyunc functions , using this await , we will wait for this function to return a promise stage and then move on with the next line of code
  await pourDrinks(); //all this is helpful while contract deployment , we need to wait for contract deployment and then work with contracts so await used there as well
  startMovie(); //all above steps done now start movie ,so wheievr a await think its  promise based function and we dont wanna move on since it takes time to execute and return a status
}
function cookPopcorn() {
  return Promise(/*some code here*/);
}
main()
  .then(() => ProcessingInstruction.exit(0))
  .catch((error) => {
    //this function is basiucally writtted catch the error in async functions , here main() if async function main()
    console.error(error);
    process.exit(1);
  });
