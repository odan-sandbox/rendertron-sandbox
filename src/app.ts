import { Rendertron } from "rendertron";

async function main(): Promise<void> {
  console.log("poyo");
  const rendertron = new Rendertron();
  await rendertron.initialize();
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
