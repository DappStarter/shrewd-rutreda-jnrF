require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift rice still mixture grace cart equal gentle'; 
let testAccounts = [
"0xb0d02f972948550f5bfd22a60c8b20fba965cc381c2e8331b9aed4a32c267188",
"0x0858a81d3bfbdb1ca57ccef0090454c740c8f49b8b9b9671caa5e3474b2b28c0",
"0xddca470aee229baade1f159e83be6fec5087e57aa331b064576cc6f47b590afe",
"0x718294e12fbe2d1d7a34adbf85da9ba70afdb786a19825766a8145c9eb13f245",
"0xaeb57d2271fab833f50b1893cd4a6edaf5c295d937c8d5675776328ba2d17968",
"0x21571603db408d6a5ea3802ef52b9a68c87ac9e368b469dce38a95ab1ca34c5a",
"0x3993c9cda38ae154542da5c262b40333ceed2faed26c9297ee58756be47d83b3",
"0xe01930a15c2450de8a8342618768e0dcc1d905421ec4fe2947e5a64a71f0e3ef",
"0x48a70d3235a244daeaf2a9ec80baefe575cb14a0b5f00ff7a62b24414b1066e4",
"0x3646c4973219131355c0b57e0348e8ab39a578c269239ac7c397fc01038f49d6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

