
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");

    const FAVORITE_FOOD = process.env.FAVORITE_FOOD;
    console.log(`My favorite food is ${FAVORITE_FOOD}`);
    await sleep(5000);
  }
}

main();
