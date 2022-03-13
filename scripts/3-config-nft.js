import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xB05bebA8f23e6B71D0197329f722D89F9B66351F",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Clams",
        description: "This NFT will help you feed walruses and enter Walrus Dao!",
        image: readFileSync("scripts/assets/clams.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()