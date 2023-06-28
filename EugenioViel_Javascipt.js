/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's
let nftCount = 0;
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(id, name, rarity) {
  const nft = {
    id: id,
    name: name,
    rarity: rarity
  };
  nftCount++;
  return nft;
}

// create an "array" to hold your NFTs
const nfts = [];

// create a "loop" that will go through the "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("\nID: " + nfts[i].id);
    console.log("Name: " + nfts[i].name);
    console.log("Rarity: " + nfts[i].rarity);
   
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal NFTs Minted: " + nftCount);
}

// call your functions below this line
const nft1 = mintNFT("NFT 1", "Raiden Shougun", "S+");
nfts.push(nft1);
const nft2 = mintNFT("NFT 2", "Lux", "A");
nfts.push(nft2);
const nft3 = mintNFT("NFT 3", "Hanabi", "B");
nfts.push(nft3);
const nft4 = mintNFT("NFT 4", "Maggie", "C");
nfts.push(nft4);

listNFTs();
getTotalSupply();