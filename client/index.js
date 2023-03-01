const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  const leaf = "Traci McDermott";
  const index = niceList.findIndex((n) => n === leaf);
  const merkleTree = new MerkleTree(niceList);
  const proof = merkleTree.getProof(index);
  console.log("proof", proof);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof: proof,
    leaf: leaf,
  });

  console.log({ gift });
}

main();
