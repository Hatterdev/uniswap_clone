export const GOERLI_ID = 5;
export const KOVAN_ID = 42;
export const MAINNET_ID = 1;
export const RINKEBY_ID = 4;
export const ROPSTEN_ID = 3;
export const VITRA_ID = 350;

const commonContracts = {
  factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  router01: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
  router02: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
};

export default {
  [GOERLI_ID]: {
    pairs: {
      "DAI-WETH": "0x8F609d85ebC64316B0B2f9E53c11b4e48B7A06d2",
    },
    tokens: {
      DAI: "0x697Ed3E98aaeCFa3121F536251F9D500de159dBa",
      WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    },
    ...commonContracts,
  },
  [KOVAN_ID]: {
    pairs: {
      "DAI-WETH": "0xB10cf58E08b94480fCb81d341A63295eBb2062C2",
    },
    tokens: {
      DAI: "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa",
      WETH: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
    },
    ...commonContracts,
  },
  [MAINNET_ID]: {
    pairs: {
      "BAT-WETH": "0xB6909B960DbbE7392D405429eB2b3649752b4838",
      "COMP-WETH": "0xCFfDdeD873554F362Ac02f8Fb1f02E5ada10516f",
      "DAI-WETH": "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11",
      // ...
    },
    tokens: {
      AMPL: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
      BAT: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
      // ...
    },
    ...commonContracts,
  },
  [RINKEBY_ID]: {
    pairs: {
      "DAI-WETH": "0x8B22F85d0c844Cf793690F6D9DFE9F11Ddb35449",
    },
    tokens: {
      DAI: "0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735",
      WETH: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    },
    ...commonContracts,
  },
  [ROPSTEN_ID]: {
    pairs: {
      "DAI-WETH": "0x1c5DEe94a34D795f9EEeF830B68B80e44868d316",
    },
    tokens: {
      DAI: "0xaD6D458402F60fD3Bd25163575031ACDce07538D",
      WETH: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    },
    ...commonContracts,
  },
  [VITRA_ID]: {
    pairs: {
      // Adicionar pares específicos de VITRA, se houver
    },
    tokens: {
      VITRA: "0x...", // Adicionar o endereço do contrato do token VITRA, se disponível
    },
    rpc: "https://vitrachain-rpc.com",
    ...commonContracts,
  },
};
