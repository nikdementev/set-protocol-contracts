export const ITransactions = 
{
  "contractName": "ITransactions",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "salt",
          "type": "uint256"
        },
        {
          "name": "signerAddress",
          "type": "address"
        },
        {
          "name": "data",
          "type": "bytes"
        },
        {
          "name": "signature",
          "type": "bytes"
        }
      ],
      "name": "executeTransaction",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2018 ZeroEx Intl.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\npragma solidity ^0.4.24;\n\ncontract ITransactions {\n\n    /// @dev Executes an exchange method call in the context of signer.\n    /// @param salt Arbitrary number to ensure uniqueness of transaction hash.\n    /// @param signerAddress Address of transaction signer.\n    /// @param data AbiV2 encoded calldata.\n    /// @param signature Proof of signer transaction by signer.\n    function executeTransaction(\n        uint256 salt,\n        address signerAddress,\n        bytes data,\n        bytes signature\n    )\n        external;\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/ITransactions.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/ITransactions.sol",
    "exportedSymbols": {
      "ITransactions": [
        4252
      ]
    },
    "id": 4253,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4240,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "579:24:31"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 4252,
        "linearizedBaseContracts": [
          4252
        ],
        "name": "ITransactions",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@dev Executes an exchange method call in the context of signer.\n @param salt Arbitrary number to ensure uniqueness of transaction hash.\n @param signerAddress Address of transaction signer.\n @param data AbiV2 encoded calldata.\n @param signature Proof of signer transaction by signer.",
            "id": 4251,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "executeTransaction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4242,
                  "name": "salt",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "991:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4241,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "991:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4244,
                  "name": "signerAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "1013:21:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4243,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1013:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4246,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "1044:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4245,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1044:5:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4248,
                  "name": "signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "1064:15:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4247,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1064:5:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "981:104:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 4250,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1102:0:31"
            },
            "scope": 4252,
            "src": "954:149:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 4253,
        "src": "605:500:31"
      }
    ],
    "src": "579:527:31"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/Exchange/interfaces/ITransactions.sol",
    "exportedSymbols": {
      "ITransactions": [
        4252
      ]
    },
    "id": 4253,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4240,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "579:24:31"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 4252,
        "linearizedBaseContracts": [
          4252
        ],
        "name": "ITransactions",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "@dev Executes an exchange method call in the context of signer.\n @param salt Arbitrary number to ensure uniqueness of transaction hash.\n @param signerAddress Address of transaction signer.\n @param data AbiV2 encoded calldata.\n @param signature Proof of signer transaction by signer.",
            "id": 4251,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "executeTransaction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4242,
                  "name": "salt",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "991:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4241,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "991:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4244,
                  "name": "signerAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "1013:21:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4243,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1013:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4246,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "1044:10:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4245,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1044:5:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 4248,
                  "name": "signature",
                  "nodeType": "VariableDeclaration",
                  "scope": 4251,
                  "src": "1064:15:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 4247,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1064:5:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "981:104:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 4250,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1102:0:31"
            },
            "scope": 4252,
            "src": "954:149:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 4253,
        "src": "605:500:31"
      }
    ],
    "src": "579:527:31"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-10T03:42:05.768Z"
}