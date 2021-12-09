require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember million hidden clip bottom genuine'; 
let testAccounts = [
"0xd901710a9a220476747f01ace671911fc4ed43027a92a7c1fbf8801eaa54a47b",
"0x02937b68d53e0dcbcddafca48b0fa12e97eca7d2f46938e2e26e52ccdf18f9e0",
"0x2ce4134f8273b6ad12f01fa40e0a702d4bfdf58aa8e75e17a4cfba7a9a936deb",
"0xd2aadd8415c6e4d8a98b64125015db9d437724a6bb9e2a7d32af911d1a132e70",
"0x1e31ab25a7d3c194106124ee526815f3366fc8a2924b6b9837447f2272425fad",
"0xc462d43a132bf16e433eee5c510bcb705185f057978abd40f9592ce5c6c888ea",
"0x44ae2a2b5ca74f9db215ab37e89f1094abfca3942f99940a34259abf7eba792e",
"0x27e58c83f91789c4ac9926657f0de16df643f9716f7be4f2b0192c5a7bac69fc",
"0x6bda136362fc982f6185468e212436595aa7375c31f9bd373abce21057e3c727",
"0x902687f52e9cbfd3feec1c5bbab115fcce23c770df5e7c5f075e0dd7176a71df"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


