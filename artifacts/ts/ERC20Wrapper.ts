export const ERC20Wrapper = 
{
  "contractName": "ERC20Wrapper",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a723058205fc5c7c9aed64ee7d9ec612426f41b1c6aa0ced1e71f95b97676d3304350dbd30029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a723058205fc5c7c9aed64ee7d9ec612426f41b1c6aa0ced1e71f95b97676d3304350dbd30029",
  "sourceMap": "1008:3394:48:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "1008:3394:48:-;;;;;;;;",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\nimport { CommonMath } from \"./CommonMath.sol\";\nimport { IERC20 } from \"./IERC20.sol\";\n\n\n/**\n * @title ERC20Wrapper\n * @author Set Protocol\n *\n * This library contains functions for interacting wtih ERC20 tokens, even those not fully compliant.\n * For all functions we will only accept tokens that return a null or true value, any other values will\n * cause the operation to revert.\n */\nlibrary ERC20Wrapper {\n\n    // ============ Constants ============\n\n    string constant INVALID_RETURN_TRANSFER = \"Transferred token does not return null or true on successful transfer.\";\n    /* solium-disable-next-line max-len */\n    string constant INVALID_RETURN_TRANSFERFROM = \"Transferred token does not return null or true on successful transferFrom.\";\n    string constant INVALID_RETURN_APPROVE = \"Approved token does not return null or true on successful approve.\";\n\n    // ============ Internal Functions ============\n\n    function balanceOf(\n        address _tokenAddress,\n        address _ownerAddress\n    )\n        internal\n        view\n        returns (uint256)\n    {\n        return IERC20(_tokenAddress).balanceOf(_ownerAddress);\n    }\n\n    function allowance(\n        address _tokenAddress,\n        address _tokenOwner,\n        address _spender\n    )\n        internal\n        view\n        returns (uint256)\n    {\n        return IERC20(_tokenAddress).allowance(_tokenOwner, _spender);\n    }\n\n    function transfer(\n        address _tokenAddress,\n        address _to,\n        uint256 _quantity\n    )\n        internal\n    {\n        IERC20(_tokenAddress).transfer(_to, _quantity);\n\n        require(\n            checkSuccess(),\n            INVALID_RETURN_TRANSFER\n        );\n    }\n\n    function transferFrom(\n        address _tokenAddress,\n        address _from,\n        address _to,\n        uint256 _quantity\n    )\n        internal\n    {\n        IERC20(_tokenAddress).transferFrom(_from, _to, _quantity);\n\n        require(\n            checkSuccess(),\n            INVALID_RETURN_TRANSFERFROM\n        );\n    }\n\n    function approve(\n        address _tokenAddress,\n        address _spender,\n        uint256 _quantity\n    )\n        internal\n    {\n        IERC20(_tokenAddress).approve(_spender, _quantity);\n\n        require(\n            checkSuccess(),\n            INVALID_RETURN_APPROVE\n        );\n    }\n\n    function ensureAllowance(\n        address _token,\n        address _owner,\n        address _spender,\n        uint256 _quantity\n    )\n        internal\n    {\n        uint currentAllowance = allowance(_token, _owner, _spender);\n        if (currentAllowance < _quantity) {\n            approve(\n                _token,\n                _spender,\n                CommonMath.maxUInt256()\n            );\n        }\n    }\n\n    // ============ Private Functions ============\n\n    /**\n     * Checks the return value of the previous function up to 32 bytes. Returns true if the previous\n     * function returned 0 bytes or 1.\n     */\n    function checkSuccess(\n    )\n        private\n        pure\n        returns (bool)\n    {\n        // default to failure\n        uint256 returnValue = 0;\n\n        assembly {\n            // check number of bytes returned from last function call\n            switch returndatasize\n\n            // no bytes returned: assume success\n            case 0x0 {\n                returnValue := 1\n            }\n\n            // 32 bytes returned\n            case 0x20 {\n                // copy 32 bytes into scratch space\n                returndatacopy(0x0, 0x0, 0x20)\n\n                // load those bytes into returnValue\n                returnValue := mload(0x0)\n            }\n\n            // not sure what was returned: dont mark as success\n            default { }\n        }\n\n        // check if returned value is one or nothing\n        return returnValue == 1;\n    }\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/ERC20Wrapper.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/ERC20Wrapper.sol",
    "exportedSymbols": {
      "ERC20Wrapper": [
        5200
      ]
    },
    "id": 5201,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5026,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:48"
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/CommonMath.sol",
        "file": "./CommonMath.sol",
        "id": 5028,
        "nodeType": "ImportDirective",
        "scope": 5201,
        "sourceUnit": 5025,
        "src": "622:46:48",
        "symbolAliases": [
          {
            "foreign": 5027,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/IERC20.sol",
        "file": "./IERC20.sol",
        "id": 5030,
        "nodeType": "ImportDirective",
        "scope": 5201,
        "sourceUnit": 5245,
        "src": "669:38:48",
        "symbolAliases": [
          {
            "foreign": 5029,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ERC20Wrapper\n@author Set Protocol\n * This library contains functions for interacting wtih ERC20 tokens, even those not fully compliant.\nFor all functions we will only accept tokens that return a null or true value, any other values will\ncause the operation to revert.",
        "fullyImplemented": true,
        "id": 5200,
        "linearizedBaseContracts": [
          5200
        ],
        "name": "ERC20Wrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 5033,
            "name": "INVALID_RETURN_TRANSFER",
            "nodeType": "VariableDeclaration",
            "scope": 5200,
            "src": "1080:114:48",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5031,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1080:6:48",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "5472616e7366657272656420746f6b656e20646f6573206e6f742072657475726e206e756c6c206f722074727565206f6e207375636365737366756c207472616e736665722e",
              "id": 5032,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1122:72:48",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_6a28e8cd70cea460f64d888906c14b1e15dd90824bd08d495b1878c7147754b3",
                "typeString": "literal_string \"Transferred token does not return null or true on successful transfer.\""
              },
              "value": "Transferred token does not return null or true on successful transfer."
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 5036,
            "name": "INVALID_RETURN_TRANSFERFROM",
            "nodeType": "VariableDeclaration",
            "scope": 5200,
            "src": "1243:122:48",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5034,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1243:6:48",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "5472616e7366657272656420746f6b656e20646f6573206e6f742072657475726e206e756c6c206f722074727565206f6e207375636365737366756c207472616e7366657246726f6d2e",
              "id": 5035,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1289:76:48",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_4aa4f2ff21e6312a79f309b1750981deb687adeae13f742ac475b55c58e95666",
                "typeString": "literal_string \"Transferred token does not return null or true on successful transferFrom.\""
              },
              "value": "Transferred token does not return null or true on successful transferFrom."
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 5039,
            "name": "INVALID_RETURN_APPROVE",
            "nodeType": "VariableDeclaration",
            "scope": 5200,
            "src": "1371:109:48",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5037,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1371:6:48",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "417070726f76656420746f6b656e20646f6573206e6f742072657475726e206e756c6c206f722074727565206f6e207375636365737366756c20617070726f76652e",
              "id": 5038,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1412:68:48",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_99d0dda7a6d81737bc992be9cf35fe1c1e8501bdd21bd0dfe88583241e132c2f",
                "typeString": "literal_string \"Approved token does not return null or true on successful approve.\""
              },
              "value": "Approved token does not return null or true on successful approve."
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5055,
              "nodeType": "Block",
              "src": "1687:70:48",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5052,
                        "name": "_ownerAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5043,
                        "src": "1736:13:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5049,
                            "name": "_tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5041,
                            "src": "1711:13:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5048,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5244,
                          "src": "1704:6:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$5244_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 5050,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1704:21:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$5244",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5051,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5209,
                      "src": "1704:31:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 5053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1704:46:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5047,
                  "id": 5054,
                  "nodeType": "Return",
                  "src": "1697:53:48"
                }
              ]
            },
            "documentation": null,
            "id": 5056,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5041,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5056,
                  "src": "1568:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5040,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1568:7:48",
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
                  "id": 5043,
                  "name": "_ownerAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5056,
                  "src": "1599:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5042,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1599:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1558:68:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5046,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5056,
                  "src": "1674:7:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1674:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1673:9:48"
            },
            "scope": 5200,
            "src": "1540:217:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5075,
              "nodeType": "Block",
              "src": "1934:78:48",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5071,
                        "name": "_tokenOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5060,
                        "src": "1983:11:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5072,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5062,
                        "src": "1996:8:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5068,
                            "name": "_tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5058,
                            "src": "1958:13:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5067,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5244,
                          "src": "1951:6:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$5244_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 5069,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1951:21:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$5244",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5070,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "allowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5218,
                      "src": "1951:31:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view external returns (uint256)"
                      }
                    },
                    "id": 5073,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1951:54:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5066,
                  "id": 5074,
                  "nodeType": "Return",
                  "src": "1944:61:48"
                }
              ]
            },
            "documentation": null,
            "id": 5076,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5063,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5058,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5076,
                  "src": "1791:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5057,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1791:7:48",
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
                  "id": 5060,
                  "name": "_tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5076,
                  "src": "1822:19:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5059,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1822:7:48",
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
                  "id": 5062,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5076,
                  "src": "1851:16:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5061,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1851:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1781:92:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5065,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5076,
                  "src": "1921:7:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5064,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1921:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1920:9:48"
            },
            "scope": 5200,
            "src": "1763:249:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5099,
              "nodeType": "Block",
              "src": "2142:156:48",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5089,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5080,
                        "src": "2183:3:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5090,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5082,
                        "src": "2188:9:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5086,
                            "name": "_tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5078,
                            "src": "2159:13:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5085,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5244,
                          "src": "2152:6:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$5244_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 5087,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2152:21:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$5244",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5088,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5225,
                      "src": "2152:30:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256) external"
                      }
                    },
                    "id": 5091,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2152:46:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5092,
                  "nodeType": "ExpressionStatement",
                  "src": "2152:46:48"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 5094,
                          "name": "checkSuccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5199,
                          "src": "2230:12:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                            "typeString": "function () pure returns (bool)"
                          }
                        },
                        "id": 5095,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2230:14:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5096,
                        "name": "INVALID_RETURN_TRANSFER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5033,
                        "src": "2258:23:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5093,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        7258,
                        7259
                      ],
                      "referencedDeclaration": 7259,
                      "src": "2209:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 5097,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2209:82:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5098,
                  "nodeType": "ExpressionStatement",
                  "src": "2209:82:48"
                }
              ]
            },
            "documentation": null,
            "id": 5100,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5083,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5078,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5100,
                  "src": "2045:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5077,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2045:7:48",
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
                  "id": 5080,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5100,
                  "src": "2076:11:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5079,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2076:7:48",
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
                  "id": 5082,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 5100,
                  "src": "2097:17:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5081,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2097:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2035:85:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5084,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2142:0:48"
            },
            "scope": 5200,
            "src": "2018:280:48",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5126,
              "nodeType": "Block",
              "src": "2455:171:48",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5115,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5104,
                        "src": "2500:5:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5116,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5106,
                        "src": "2507:3:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5117,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5108,
                        "src": "2512:9:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5112,
                            "name": "_tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5102,
                            "src": "2472:13:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5111,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5244,
                          "src": "2465:6:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$5244_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 5113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2465:21:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$5244",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5114,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5234,
                      "src": "2465:34:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256) external"
                      }
                    },
                    "id": 5118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2465:57:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5119,
                  "nodeType": "ExpressionStatement",
                  "src": "2465:57:48"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 5121,
                          "name": "checkSuccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5199,
                          "src": "2554:12:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                            "typeString": "function () pure returns (bool)"
                          }
                        },
                        "id": 5122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2554:14:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5123,
                        "name": "INVALID_RETURN_TRANSFERFROM",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5036,
                        "src": "2582:27:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5120,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        7258,
                        7259
                      ],
                      "referencedDeclaration": 7259,
                      "src": "2533:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 5124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2533:86:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5125,
                  "nodeType": "ExpressionStatement",
                  "src": "2533:86:48"
                }
              ]
            },
            "documentation": null,
            "id": 5127,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5102,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5127,
                  "src": "2335:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5101,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2335:7:48",
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
                  "id": 5104,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5127,
                  "src": "2366:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5103,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2366:7:48",
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
                  "id": 5106,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5127,
                  "src": "2389:11:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5105,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2389:7:48",
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
                  "id": 5108,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 5127,
                  "src": "2410:17:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5107,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2410:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2325:108:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5110,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2455:0:48"
            },
            "scope": 5200,
            "src": "2304:322:48",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5150,
              "nodeType": "Block",
              "src": "2760:159:48",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5140,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5131,
                        "src": "2800:8:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5141,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5133,
                        "src": "2810:9:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5137,
                            "name": "_tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5129,
                            "src": "2777:13:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5136,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5244,
                          "src": "2770:6:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$5244_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 5138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2770:21:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$5244",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5139,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5243,
                      "src": "2770:29:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 5142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2770:50:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5143,
                  "nodeType": "ExpressionStatement",
                  "src": "2770:50:48"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 5145,
                          "name": "checkSuccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5199,
                          "src": "2852:12:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                            "typeString": "function () pure returns (bool)"
                          }
                        },
                        "id": 5146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2852:14:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5147,
                        "name": "INVALID_RETURN_APPROVE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5039,
                        "src": "2880:22:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5144,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        7258,
                        7259
                      ],
                      "referencedDeclaration": 7259,
                      "src": "2831:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 5148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2831:81:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5149,
                  "nodeType": "ExpressionStatement",
                  "src": "2831:81:48"
                }
              ]
            },
            "documentation": null,
            "id": 5151,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5129,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5151,
                  "src": "2658:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5128,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2658:7:48",
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
                  "id": 5131,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5151,
                  "src": "2689:16:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5130,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2689:7:48",
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
                  "id": 5133,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 5151,
                  "src": "2715:17:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5132,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2715:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2648:90:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5135,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2760:0:48"
            },
            "scope": 5200,
            "src": "2632:287:48",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5183,
              "nodeType": "Block",
              "src": "3078:256:48",
              "statements": [
                {
                  "assignments": [
                    5163
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5163,
                      "name": "currentAllowance",
                      "nodeType": "VariableDeclaration",
                      "scope": 5184,
                      "src": "3088:21:48",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5162,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3088:4:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5169,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5165,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5153,
                        "src": "3122:6:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5166,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5155,
                        "src": "3130:6:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5167,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5157,
                        "src": "3138:8:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5164,
                      "name": "allowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5076,
                      "src": "3112:9:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address,address) view returns (uint256)"
                      }
                    },
                    "id": 5168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3112:35:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3088:59:48"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 5170,
                      "name": "currentAllowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5163,
                      "src": "3161:16:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 5171,
                      "name": "_quantity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5159,
                      "src": "3180:9:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3161:28:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 5182,
                  "nodeType": "IfStatement",
                  "src": "3157:171:48",
                  "trueBody": {
                    "id": 5181,
                    "nodeType": "Block",
                    "src": "3191:137:48",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 5174,
                              "name": "_token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5153,
                              "src": "3230:6:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 5175,
                              "name": "_spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5157,
                              "src": "3254:8:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 5176,
                                  "name": "CommonMath",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5024,
                                  "src": "3280:10:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$5024_$",
                                    "typeString": "type(library CommonMath)"
                                  }
                                },
                                "id": 5177,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "maxUInt256",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 5023,
                                "src": "3280:21:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$__$returns$_t_uint256_$",
                                  "typeString": "function () pure returns (uint256)"
                                }
                              },
                              "id": 5178,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3280:23:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 5173,
                            "name": "approve",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5151,
                            "src": "3205:7:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 5179,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3205:112:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5180,
                        "nodeType": "ExpressionStatement",
                        "src": "3205:112:48"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 5184,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "ensureAllowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5153,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 5184,
                  "src": "2959:14:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5152,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2959:7:48",
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
                  "id": 5155,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5184,
                  "src": "2983:14:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5154,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2983:7:48",
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
                  "id": 5157,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5184,
                  "src": "3007:16:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3007:7:48",
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
                  "id": 5159,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 5184,
                  "src": "3033:17:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5158,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3033:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2949:107:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5161,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3078:0:48"
            },
            "scope": 5200,
            "src": "2925:409:48",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5198,
              "nodeType": "Block",
              "src": "3633:767:48",
              "statements": [
                {
                  "assignments": [
                    5190
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5190,
                      "name": "returnValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 5199,
                      "src": "3673:19:48",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5189,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3673:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5192,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 5191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3695:1:48",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3673:23:48"
                },
                {
                  "externalReferences": [
                    {
                      "returnValue": {
                        "declaration": 5190,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4169:11:48",
                        "valueSize": 1
                      }
                    },
                    {
                      "returnValue": {
                        "declaration": 5190,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3911:11:48",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 5193,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    switch returndatasize()\n    case 0x0 {\n        returnValue := 1\n    }\n    case 0x20 {\n        returndatacopy(0x0, 0x0, 0x20)\n        returnValue := mload(0x0)\n    }\n    default {\n    }\n}",
                  "src": "3707:669:48"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 5194,
                      "name": "returnValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5190,
                      "src": "4377:11:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 5195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4392:1:48",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "4377:16:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5188,
                  "id": 5197,
                  "nodeType": "Return",
                  "src": "4370:23:48"
                }
              ]
            },
            "documentation": "Checks the return value of the previous function up to 32 bytes. Returns true if the previous\nfunction returned 0 bytes or 1.",
            "id": 5199,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "checkSuccess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5185,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3569:7:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5187,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5199,
                  "src": "3623:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5186,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3623:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3622:6:48"
            },
            "scope": 5200,
            "src": "3548:852:48",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          }
        ],
        "scope": 5201,
        "src": "1008:3394:48"
      }
    ],
    "src": "597:3806:48"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/ERC20Wrapper.sol",
    "exportedSymbols": {
      "ERC20Wrapper": [
        5200
      ]
    },
    "id": 5201,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5026,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:48"
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/CommonMath.sol",
        "file": "./CommonMath.sol",
        "id": 5028,
        "nodeType": "ImportDirective",
        "scope": 5201,
        "sourceUnit": 5025,
        "src": "622:46:48",
        "symbolAliases": [
          {
            "foreign": 5027,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/IERC20.sol",
        "file": "./IERC20.sol",
        "id": 5030,
        "nodeType": "ImportDirective",
        "scope": 5201,
        "sourceUnit": 5245,
        "src": "669:38:48",
        "symbolAliases": [
          {
            "foreign": 5029,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ERC20Wrapper\n@author Set Protocol\n * This library contains functions for interacting wtih ERC20 tokens, even those not fully compliant.\nFor all functions we will only accept tokens that return a null or true value, any other values will\ncause the operation to revert.",
        "fullyImplemented": true,
        "id": 5200,
        "linearizedBaseContracts": [
          5200
        ],
        "name": "ERC20Wrapper",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 5033,
            "name": "INVALID_RETURN_TRANSFER",
            "nodeType": "VariableDeclaration",
            "scope": 5200,
            "src": "1080:114:48",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5031,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1080:6:48",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "5472616e7366657272656420746f6b656e20646f6573206e6f742072657475726e206e756c6c206f722074727565206f6e207375636365737366756c207472616e736665722e",
              "id": 5032,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1122:72:48",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_6a28e8cd70cea460f64d888906c14b1e15dd90824bd08d495b1878c7147754b3",
                "typeString": "literal_string \"Transferred token does not return null or true on successful transfer.\""
              },
              "value": "Transferred token does not return null or true on successful transfer."
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 5036,
            "name": "INVALID_RETURN_TRANSFERFROM",
            "nodeType": "VariableDeclaration",
            "scope": 5200,
            "src": "1243:122:48",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5034,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1243:6:48",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "5472616e7366657272656420746f6b656e20646f6573206e6f742072657475726e206e756c6c206f722074727565206f6e207375636365737366756c207472616e7366657246726f6d2e",
              "id": 5035,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1289:76:48",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_4aa4f2ff21e6312a79f309b1750981deb687adeae13f742ac475b55c58e95666",
                "typeString": "literal_string \"Transferred token does not return null or true on successful transferFrom.\""
              },
              "value": "Transferred token does not return null or true on successful transferFrom."
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 5039,
            "name": "INVALID_RETURN_APPROVE",
            "nodeType": "VariableDeclaration",
            "scope": 5200,
            "src": "1371:109:48",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5037,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1371:6:48",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "417070726f76656420746f6b656e20646f6573206e6f742072657475726e206e756c6c206f722074727565206f6e207375636365737366756c20617070726f76652e",
              "id": 5038,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1412:68:48",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_99d0dda7a6d81737bc992be9cf35fe1c1e8501bdd21bd0dfe88583241e132c2f",
                "typeString": "literal_string \"Approved token does not return null or true on successful approve.\""
              },
              "value": "Approved token does not return null or true on successful approve."
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5055,
              "nodeType": "Block",
              "src": "1687:70:48",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5052,
                        "name": "_ownerAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5043,
                        "src": "1736:13:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5049,
                            "name": "_tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5041,
                            "src": "1711:13:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5048,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5244,
                          "src": "1704:6:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$5244_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 5050,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1704:21:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$5244",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5051,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5209,
                      "src": "1704:31:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 5053,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1704:46:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5047,
                  "id": 5054,
                  "nodeType": "Return",
                  "src": "1697:53:48"
                }
              ]
            },
            "documentation": null,
            "id": 5056,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5041,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5056,
                  "src": "1568:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5040,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1568:7:48",
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
                  "id": 5043,
                  "name": "_ownerAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5056,
                  "src": "1599:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5042,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1599:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1558:68:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5046,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5056,
                  "src": "1674:7:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1674:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1673:9:48"
            },
            "scope": 5200,
            "src": "1540:217:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5075,
              "nodeType": "Block",
              "src": "1934:78:48",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5071,
                        "name": "_tokenOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5060,
                        "src": "1983:11:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5072,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5062,
                        "src": "1996:8:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5068,
                            "name": "_tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5058,
                            "src": "1958:13:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5067,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5244,
                          "src": "1951:6:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$5244_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 5069,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1951:21:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$5244",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5070,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "allowance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5218,
                      "src": "1951:31:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address) view external returns (uint256)"
                      }
                    },
                    "id": 5073,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1951:54:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5066,
                  "id": 5074,
                  "nodeType": "Return",
                  "src": "1944:61:48"
                }
              ]
            },
            "documentation": null,
            "id": 5076,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5063,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5058,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5076,
                  "src": "1791:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5057,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1791:7:48",
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
                  "id": 5060,
                  "name": "_tokenOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5076,
                  "src": "1822:19:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5059,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1822:7:48",
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
                  "id": 5062,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5076,
                  "src": "1851:16:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5061,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1851:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1781:92:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5065,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5076,
                  "src": "1921:7:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5064,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1921:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1920:9:48"
            },
            "scope": 5200,
            "src": "1763:249:48",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5099,
              "nodeType": "Block",
              "src": "2142:156:48",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5089,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5080,
                        "src": "2183:3:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5090,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5082,
                        "src": "2188:9:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5086,
                            "name": "_tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5078,
                            "src": "2159:13:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5085,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5244,
                          "src": "2152:6:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$5244_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 5087,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2152:21:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$5244",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5088,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5225,
                      "src": "2152:30:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256) external"
                      }
                    },
                    "id": 5091,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2152:46:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5092,
                  "nodeType": "ExpressionStatement",
                  "src": "2152:46:48"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 5094,
                          "name": "checkSuccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5199,
                          "src": "2230:12:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                            "typeString": "function () pure returns (bool)"
                          }
                        },
                        "id": 5095,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2230:14:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5096,
                        "name": "INVALID_RETURN_TRANSFER",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5033,
                        "src": "2258:23:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5093,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        7258,
                        7259
                      ],
                      "referencedDeclaration": 7259,
                      "src": "2209:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 5097,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2209:82:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5098,
                  "nodeType": "ExpressionStatement",
                  "src": "2209:82:48"
                }
              ]
            },
            "documentation": null,
            "id": 5100,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5083,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5078,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5100,
                  "src": "2045:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5077,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2045:7:48",
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
                  "id": 5080,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5100,
                  "src": "2076:11:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5079,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2076:7:48",
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
                  "id": 5082,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 5100,
                  "src": "2097:17:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5081,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2097:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2035:85:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5084,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2142:0:48"
            },
            "scope": 5200,
            "src": "2018:280:48",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5126,
              "nodeType": "Block",
              "src": "2455:171:48",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5115,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5104,
                        "src": "2500:5:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5116,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5106,
                        "src": "2507:3:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5117,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5108,
                        "src": "2512:9:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5112,
                            "name": "_tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5102,
                            "src": "2472:13:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5111,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5244,
                          "src": "2465:6:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$5244_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 5113,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2465:21:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$5244",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5114,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5234,
                      "src": "2465:34:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256) external"
                      }
                    },
                    "id": 5118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2465:57:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5119,
                  "nodeType": "ExpressionStatement",
                  "src": "2465:57:48"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 5121,
                          "name": "checkSuccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5199,
                          "src": "2554:12:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                            "typeString": "function () pure returns (bool)"
                          }
                        },
                        "id": 5122,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2554:14:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5123,
                        "name": "INVALID_RETURN_TRANSFERFROM",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5036,
                        "src": "2582:27:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5120,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        7258,
                        7259
                      ],
                      "referencedDeclaration": 7259,
                      "src": "2533:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 5124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2533:86:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5125,
                  "nodeType": "ExpressionStatement",
                  "src": "2533:86:48"
                }
              ]
            },
            "documentation": null,
            "id": 5127,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5102,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5127,
                  "src": "2335:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5101,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2335:7:48",
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
                  "id": 5104,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5127,
                  "src": "2366:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5103,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2366:7:48",
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
                  "id": 5106,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5127,
                  "src": "2389:11:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5105,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2389:7:48",
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
                  "id": 5108,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 5127,
                  "src": "2410:17:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5107,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2410:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2325:108:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5110,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2455:0:48"
            },
            "scope": 5200,
            "src": "2304:322:48",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5150,
              "nodeType": "Block",
              "src": "2760:159:48",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5140,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5131,
                        "src": "2800:8:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5141,
                        "name": "_quantity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5133,
                        "src": "2810:9:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5137,
                            "name": "_tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5129,
                            "src": "2777:13:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 5136,
                          "name": "IERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5244,
                          "src": "2770:6:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IERC20_$5244_$",
                            "typeString": "type(contract IERC20)"
                          }
                        },
                        "id": 5138,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2770:21:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20_$5244",
                          "typeString": "contract IERC20"
                        }
                      },
                      "id": 5139,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5243,
                      "src": "2770:29:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 5142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2770:50:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5143,
                  "nodeType": "ExpressionStatement",
                  "src": "2770:50:48"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 5145,
                          "name": "checkSuccess",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5199,
                          "src": "2852:12:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$__$returns$_t_bool_$",
                            "typeString": "function () pure returns (bool)"
                          }
                        },
                        "id": 5146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2852:14:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5147,
                        "name": "INVALID_RETURN_APPROVE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5039,
                        "src": "2880:22:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5144,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        7258,
                        7259
                      ],
                      "referencedDeclaration": 7259,
                      "src": "2831:7:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 5148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2831:81:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5149,
                  "nodeType": "ExpressionStatement",
                  "src": "2831:81:48"
                }
              ]
            },
            "documentation": null,
            "id": 5151,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5134,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5129,
                  "name": "_tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 5151,
                  "src": "2658:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5128,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2658:7:48",
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
                  "id": 5131,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5151,
                  "src": "2689:16:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5130,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2689:7:48",
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
                  "id": 5133,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 5151,
                  "src": "2715:17:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5132,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2715:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2648:90:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5135,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2760:0:48"
            },
            "scope": 5200,
            "src": "2632:287:48",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5183,
              "nodeType": "Block",
              "src": "3078:256:48",
              "statements": [
                {
                  "assignments": [
                    5163
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5163,
                      "name": "currentAllowance",
                      "nodeType": "VariableDeclaration",
                      "scope": 5184,
                      "src": "3088:21:48",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5162,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3088:4:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5169,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5165,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5153,
                        "src": "3122:6:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5166,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5155,
                        "src": "3130:6:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5167,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5157,
                        "src": "3138:8:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5164,
                      "name": "allowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5076,
                      "src": "3112:9:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address,address,address) view returns (uint256)"
                      }
                    },
                    "id": 5168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3112:35:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3088:59:48"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 5170,
                      "name": "currentAllowance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5163,
                      "src": "3161:16:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 5171,
                      "name": "_quantity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5159,
                      "src": "3180:9:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3161:28:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 5182,
                  "nodeType": "IfStatement",
                  "src": "3157:171:48",
                  "trueBody": {
                    "id": 5181,
                    "nodeType": "Block",
                    "src": "3191:137:48",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 5174,
                              "name": "_token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5153,
                              "src": "3230:6:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 5175,
                              "name": "_spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5157,
                              "src": "3254:8:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 5176,
                                  "name": "CommonMath",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5024,
                                  "src": "3280:10:48",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_CommonMath_$5024_$",
                                    "typeString": "type(library CommonMath)"
                                  }
                                },
                                "id": 5177,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "maxUInt256",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 5023,
                                "src": "3280:21:48",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$__$returns$_t_uint256_$",
                                  "typeString": "function () pure returns (uint256)"
                                }
                              },
                              "id": 5178,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3280:23:48",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 5173,
                            "name": "approve",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5151,
                            "src": "3205:7:48",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 5179,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3205:112:48",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5180,
                        "nodeType": "ExpressionStatement",
                        "src": "3205:112:48"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 5184,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "ensureAllowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5153,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 5184,
                  "src": "2959:14:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5152,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2959:7:48",
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
                  "id": 5155,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5184,
                  "src": "2983:14:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5154,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2983:7:48",
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
                  "id": 5157,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5184,
                  "src": "3007:16:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3007:7:48",
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
                  "id": 5159,
                  "name": "_quantity",
                  "nodeType": "VariableDeclaration",
                  "scope": 5184,
                  "src": "3033:17:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5158,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3033:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2949:107:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5161,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3078:0:48"
            },
            "scope": 5200,
            "src": "2925:409:48",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5198,
              "nodeType": "Block",
              "src": "3633:767:48",
              "statements": [
                {
                  "assignments": [
                    5190
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5190,
                      "name": "returnValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 5199,
                      "src": "3673:19:48",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5189,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3673:7:48",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5192,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 5191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3695:1:48",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3673:23:48"
                },
                {
                  "externalReferences": [
                    {
                      "returnValue": {
                        "declaration": 5190,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4169:11:48",
                        "valueSize": 1
                      }
                    },
                    {
                      "returnValue": {
                        "declaration": 5190,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "3911:11:48",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 5193,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    switch returndatasize()\n    case 0x0 {\n        returnValue := 1\n    }\n    case 0x20 {\n        returndatacopy(0x0, 0x0, 0x20)\n        returnValue := mload(0x0)\n    }\n    default {\n    }\n}",
                  "src": "3707:669:48"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 5194,
                      "name": "returnValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5190,
                      "src": "4377:11:48",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 5195,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4392:1:48",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "4377:16:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5188,
                  "id": 5197,
                  "nodeType": "Return",
                  "src": "4370:23:48"
                }
              ]
            },
            "documentation": "Checks the return value of the previous function up to 32 bytes. Returns true if the previous\nfunction returned 0 bytes or 1.",
            "id": 5199,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "checkSuccess",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5185,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3569:7:48"
            },
            "payable": false,
            "returnParameters": {
              "id": 5188,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5187,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5199,
                  "src": "3623:4:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5186,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3623:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3622:6:48"
            },
            "scope": 5200,
            "src": "3548:852:48",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "private"
          }
        ],
        "scope": 5201,
        "src": "1008:3394:48"
      }
    ],
    "src": "597:3806:48"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-27T04:20:39.836Z"
}