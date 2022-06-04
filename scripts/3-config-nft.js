import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xE1cA64F7421F64eD94d1574b965C8af9a9D6F72a");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "A piece of an experiment that could inevitably turn reality",
        description: "This NFT is your single entity in SimulationDAO",
        image: readFileSync("scripts/assets/inevitable.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();

