export const ExchangeHandler = 
{
  "contractName": "ExchangeHandler",
  "abi": [],
  "bytecode": "0x605a602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a265627a7a72305820fb510abcb6419cf6073e47b58b7b055da986a33bf157b3b2f4639bc2dcf604386c6578706572696d656e74616cf50037",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a265627a7a72305820fb510abcb6419cf6073e47b58b7b055da986a33bf157b3b2f4639bc2dcf604386c6578706572696d656e74616cf50037",
  "sourceMap": "945:1398:20:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "945:1398:20:-;;;;;;;;",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\npragma experimental \"ABIEncoderV2\";\n\nimport { LibBytes } from \"../../external/0x/LibBytes.sol\";\nimport { SafeMath } from \"zeppelin-solidity/contracts/math/SafeMath.sol\";\n\n\n/**\n * @title ExchangeHandler\n * @author Set Protocol\n *\n * This library contains functions and structs to assist with parsing exchange orders data\n */\nlibrary ExchangeHandler {\n    using LibBytes for bytes;\n    using SafeMath for uint256;\n\n    // ============ Structs ============\n\n    struct ExchangeHeader {\n        uint8 exchange;\n        uint8 orderCount;\n        address makerTokenAddress;\n        uint256 makerTokenAmount;\n        uint256 totalOrdersLength;\n    }\n\n    // ============ Internal Functions ============\n\n    /**\n     * Function to convert bytes into ExchangeHeader\n     *\n     * @param _headerData      Bytes representing the order body information\n     * @return ExchangeHeader  Struct containing data for a batch of exchange orders\n     */\n    function parseExchangeHeader(\n        bytes _headerData,\n        uint256 _offset\n    )\n        internal\n        pure\n        returns (ExchangeHeader memory)\n    {\n        ExchangeHeader memory header;\n\n        uint256 headerDataStart = _headerData.contentAddress().add(_offset);\n\n        assembly {\n            mstore(header,          mload(headerDataStart))            // exchange\n            mstore(add(header, 32), mload(add(headerDataStart, 32)))   // orderCount\n            mstore(add(header, 64), mload(add(headerDataStart, 64)))   // makerTokenAddress\n            mstore(add(header, 96), mload(add(headerDataStart, 96)))   // makerTokenAmount\n            mstore(add(header, 128), mload(add(headerDataStart, 128))) // totalOrdersLength\n        }\n\n        return header;\n    }\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/lib/ExchangeHandler.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/lib/ExchangeHandler.sol",
    "exportedSymbols": {
      "ExchangeHandler": [
        3799
      ]
    },
    "id": 3800,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3751,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:20"
      },
      {
        "id": 3752,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "621:35:20"
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/LibBytes.sol",
        "file": "../../external/0x/LibBytes.sol",
        "id": 3754,
        "nodeType": "ImportDirective",
        "scope": 3800,
        "sourceUnit": 4529,
        "src": "658:58:20",
        "symbolAliases": [
          {
            "foreign": 3753,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 3756,
        "nodeType": "ImportDirective",
        "scope": 3800,
        "sourceUnit": 6518,
        "src": "717:73:20",
        "symbolAliases": [
          {
            "foreign": 3755,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ExchangeHandler\n@author Set Protocol\n * This library contains functions and structs to assist with parsing exchange orders data",
        "fullyImplemented": true,
        "id": 3799,
        "linearizedBaseContracts": [
          3799
        ],
        "name": "ExchangeHandler",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 3759,
            "libraryName": {
              "contractScope": null,
              "id": 3757,
              "name": "LibBytes",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4528,
              "src": "981:8:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LibBytes_$4528",
                "typeString": "library LibBytes"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "975:25:20",
            "typeName": {
              "id": 3758,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "994:5:20",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "id": 3762,
            "libraryName": {
              "contractScope": null,
              "id": 3760,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6517,
              "src": "1011:8:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6517",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1005:27:20",
            "typeName": {
              "id": 3761,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1024:7:20",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "ExchangeHandler.ExchangeHeader",
            "id": 3773,
            "members": [
              {
                "constant": false,
                "id": 3764,
                "name": "exchange",
                "nodeType": "VariableDeclaration",
                "scope": 3773,
                "src": "1112:14:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 3763,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "1112:5:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 3766,
                "name": "orderCount",
                "nodeType": "VariableDeclaration",
                "scope": 3773,
                "src": "1136:16:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 3765,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "1136:5:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 3768,
                "name": "makerTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 3773,
                "src": "1162:25:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 3767,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1162:7:20",
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
                "id": 3770,
                "name": "makerTokenAmount",
                "nodeType": "VariableDeclaration",
                "scope": 3773,
                "src": "1197:24:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3769,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1197:7:20",
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
                "id": 3772,
                "name": "totalOrdersLength",
                "nodeType": "VariableDeclaration",
                "scope": 3773,
                "src": "1231:25:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3771,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1231:7:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "ExchangeHeader",
            "nodeType": "StructDefinition",
            "scope": 3799,
            "src": "1080:183:20",
            "visibility": "public"
          },
          {
            "body": {
              "id": 3797,
              "nodeType": "Block",
              "src": "1721:620:20",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3783,
                      "name": "header",
                      "nodeType": "VariableDeclaration",
                      "scope": 3798,
                      "src": "1731:28:20",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ExchangeHeader_$3773_memory_ptr",
                        "typeString": "struct ExchangeHandler.ExchangeHeader"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 3782,
                        "name": "ExchangeHeader",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 3773,
                        "src": "1731:14:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ExchangeHeader_$3773_storage_ptr",
                          "typeString": "struct ExchangeHandler.ExchangeHeader"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3784,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1731:28:20"
                },
                {
                  "assignments": [
                    3786
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3786,
                      "name": "headerDataStart",
                      "nodeType": "VariableDeclaration",
                      "scope": 3798,
                      "src": "1770:23:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3785,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1770:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3793,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3791,
                        "name": "_offset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3777,
                        "src": "1829:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "id": 3787,
                            "name": "_headerData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3775,
                            "src": "1796:11:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 3788,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "contentAddress",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4395,
                          "src": "1796:26:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) pure returns (uint256)"
                          }
                        },
                        "id": 3789,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1796:28:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3790,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6516,
                      "src": "1796:32:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 3792,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1796:41:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1770:67:20"
                },
                {
                  "externalReferences": [
                    {
                      "header": {
                        "declaration": 3783,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1878:6:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3786,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1901:15:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3783,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1965:6:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3786,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1988:15:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3783,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2050:6:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3786,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2073:15:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3783,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2142:6:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3783,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2233:6:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3786,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2165:15:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3786,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2257:15:20",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 3794,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    mstore(header, mload(headerDataStart))\n    mstore(add(header, 32), mload(add(headerDataStart, 32)))\n    mstore(add(header, 64), mload(add(headerDataStart, 64)))\n    mstore(add(header, 96), mload(add(headerDataStart, 96)))\n    mstore(add(header, 128), mload(add(headerDataStart, 128)))\n}",
                  "src": "1848:479:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3795,
                    "name": "header",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3783,
                    "src": "2328:6:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ExchangeHeader_$3773_memory_ptr",
                      "typeString": "struct ExchangeHandler.ExchangeHeader memory"
                    }
                  },
                  "functionReturnParameters": 3781,
                  "id": 3796,
                  "nodeType": "Return",
                  "src": "2321:13:20"
                }
              ]
            },
            "documentation": "Function to convert bytes into ExchangeHeader\n     * @param _headerData      Bytes representing the order body information\n@return ExchangeHeader  Struct containing data for a batch of exchange orders",
            "id": 3798,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseExchangeHeader",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3775,
                  "name": "_headerData",
                  "nodeType": "VariableDeclaration",
                  "scope": 3798,
                  "src": "1598:17:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3774,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1598:5:20",
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
                  "id": 3777,
                  "name": "_offset",
                  "nodeType": "VariableDeclaration",
                  "scope": 3798,
                  "src": "1625:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3776,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1625:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1588:58:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3780,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3798,
                  "src": "1694:14:20",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ExchangeHeader_$3773_memory_ptr",
                    "typeString": "struct ExchangeHandler.ExchangeHeader"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 3779,
                    "name": "ExchangeHeader",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 3773,
                    "src": "1694:14:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ExchangeHeader_$3773_storage_ptr",
                      "typeString": "struct ExchangeHandler.ExchangeHeader"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1693:23:20"
            },
            "scope": 3799,
            "src": "1560:781:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 3800,
        "src": "945:1398:20"
      }
    ],
    "src": "597:1747:20"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/core/lib/ExchangeHandler.sol",
    "exportedSymbols": {
      "ExchangeHandler": [
        3799
      ]
    },
    "id": 3800,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3751,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:20"
      },
      {
        "id": 3752,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "621:35:20"
      },
      {
        "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/LibBytes.sol",
        "file": "../../external/0x/LibBytes.sol",
        "id": 3754,
        "nodeType": "ImportDirective",
        "scope": 3800,
        "sourceUnit": 4529,
        "src": "658:58:20",
        "symbolAliases": [
          {
            "foreign": 3753,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 3756,
        "nodeType": "ImportDirective",
        "scope": 3800,
        "sourceUnit": 6518,
        "src": "717:73:20",
        "symbolAliases": [
          {
            "foreign": 3755,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ExchangeHandler\n@author Set Protocol\n * This library contains functions and structs to assist with parsing exchange orders data",
        "fullyImplemented": true,
        "id": 3799,
        "linearizedBaseContracts": [
          3799
        ],
        "name": "ExchangeHandler",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 3759,
            "libraryName": {
              "contractScope": null,
              "id": 3757,
              "name": "LibBytes",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4528,
              "src": "981:8:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LibBytes_$4528",
                "typeString": "library LibBytes"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "975:25:20",
            "typeName": {
              "id": 3758,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "994:5:20",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            }
          },
          {
            "id": 3762,
            "libraryName": {
              "contractScope": null,
              "id": 3760,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6517,
              "src": "1011:8:20",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$6517",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1005:27:20",
            "typeName": {
              "id": 3761,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1024:7:20",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "canonicalName": "ExchangeHandler.ExchangeHeader",
            "id": 3773,
            "members": [
              {
                "constant": false,
                "id": 3764,
                "name": "exchange",
                "nodeType": "VariableDeclaration",
                "scope": 3773,
                "src": "1112:14:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 3763,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "1112:5:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 3766,
                "name": "orderCount",
                "nodeType": "VariableDeclaration",
                "scope": 3773,
                "src": "1136:16:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                },
                "typeName": {
                  "id": 3765,
                  "name": "uint8",
                  "nodeType": "ElementaryTypeName",
                  "src": "1136:5:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 3768,
                "name": "makerTokenAddress",
                "nodeType": "VariableDeclaration",
                "scope": 3773,
                "src": "1162:25:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 3767,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1162:7:20",
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
                "id": 3770,
                "name": "makerTokenAmount",
                "nodeType": "VariableDeclaration",
                "scope": 3773,
                "src": "1197:24:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3769,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1197:7:20",
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
                "id": 3772,
                "name": "totalOrdersLength",
                "nodeType": "VariableDeclaration",
                "scope": 3773,
                "src": "1231:25:20",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 3771,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1231:7:20",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "ExchangeHeader",
            "nodeType": "StructDefinition",
            "scope": 3799,
            "src": "1080:183:20",
            "visibility": "public"
          },
          {
            "body": {
              "id": 3797,
              "nodeType": "Block",
              "src": "1721:620:20",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3783,
                      "name": "header",
                      "nodeType": "VariableDeclaration",
                      "scope": 3798,
                      "src": "1731:28:20",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ExchangeHeader_$3773_memory_ptr",
                        "typeString": "struct ExchangeHandler.ExchangeHeader"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 3782,
                        "name": "ExchangeHeader",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 3773,
                        "src": "1731:14:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_ExchangeHeader_$3773_storage_ptr",
                          "typeString": "struct ExchangeHandler.ExchangeHeader"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3784,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1731:28:20"
                },
                {
                  "assignments": [
                    3786
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3786,
                      "name": "headerDataStart",
                      "nodeType": "VariableDeclaration",
                      "scope": 3798,
                      "src": "1770:23:20",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 3785,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1770:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3793,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3791,
                        "name": "_offset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3777,
                        "src": "1829:7:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "expression": {
                            "argumentTypes": null,
                            "id": 3787,
                            "name": "_headerData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3775,
                            "src": "1796:11:20",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 3788,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "contentAddress",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4395,
                          "src": "1796:26:20",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$returns$_t_uint256_$bound_to$_t_bytes_memory_ptr_$",
                            "typeString": "function (bytes memory) pure returns (uint256)"
                          }
                        },
                        "id": 3789,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1796:28:20",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 3790,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "add",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6516,
                      "src": "1796:32:20",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 3792,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1796:41:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1770:67:20"
                },
                {
                  "externalReferences": [
                    {
                      "header": {
                        "declaration": 3783,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1878:6:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3786,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1901:15:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3783,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1965:6:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3786,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "1988:15:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3783,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2050:6:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3786,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2073:15:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3783,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2142:6:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "header": {
                        "declaration": 3783,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2233:6:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3786,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2165:15:20",
                        "valueSize": 1
                      }
                    },
                    {
                      "headerDataStart": {
                        "declaration": 3786,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "2257:15:20",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 3794,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    mstore(header, mload(headerDataStart))\n    mstore(add(header, 32), mload(add(headerDataStart, 32)))\n    mstore(add(header, 64), mload(add(headerDataStart, 64)))\n    mstore(add(header, 96), mload(add(headerDataStart, 96)))\n    mstore(add(header, 128), mload(add(headerDataStart, 128)))\n}",
                  "src": "1848:479:20"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3795,
                    "name": "header",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 3783,
                    "src": "2328:6:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ExchangeHeader_$3773_memory_ptr",
                      "typeString": "struct ExchangeHandler.ExchangeHeader memory"
                    }
                  },
                  "functionReturnParameters": 3781,
                  "id": 3796,
                  "nodeType": "Return",
                  "src": "2321:13:20"
                }
              ]
            },
            "documentation": "Function to convert bytes into ExchangeHeader\n     * @param _headerData      Bytes representing the order body information\n@return ExchangeHeader  Struct containing data for a batch of exchange orders",
            "id": 3798,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "parseExchangeHeader",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3775,
                  "name": "_headerData",
                  "nodeType": "VariableDeclaration",
                  "scope": 3798,
                  "src": "1598:17:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3774,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1598:5:20",
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
                  "id": 3777,
                  "name": "_offset",
                  "nodeType": "VariableDeclaration",
                  "scope": 3798,
                  "src": "1625:15:20",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3776,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1625:7:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1588:58:20"
            },
            "payable": false,
            "returnParameters": {
              "id": 3781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3780,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 3798,
                  "src": "1694:14:20",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_ExchangeHeader_$3773_memory_ptr",
                    "typeString": "struct ExchangeHandler.ExchangeHeader"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 3779,
                    "name": "ExchangeHeader",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 3773,
                    "src": "1694:14:20",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ExchangeHeader_$3773_storage_ptr",
                      "typeString": "struct ExchangeHandler.ExchangeHeader"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1693:23:20"
            },
            "scope": 3799,
            "src": "1560:781:20",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 3800,
        "src": "945:1398:20"
      }
    ],
    "src": "597:1747:20"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-25T17:34:39.497Z"
}