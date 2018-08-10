export const StandardToken = 
{
  "contractName": "StandardToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506106b3806100206000396000f30060806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009257806318160ddd146100ca57806323b872dd146100f1578063661884631461011b57806370a082311461013f578063a9059cbb14610160578063d73dd62314610184578063dd62ed3e146101a8575b600080fd5b34801561009e57600080fd5b506100b6600160a060020a03600435166024356101cf565b604080519115158252519081900360200190f35b3480156100d657600080fd5b506100df610235565b60408051918252519081900360200190f35b3480156100fd57600080fd5b506100b6600160a060020a036004358116906024351660443561023b565b34801561012757600080fd5b506100b6600160a060020a03600435166024356103b2565b34801561014b57600080fd5b506100df600160a060020a03600435166104a2565b34801561016c57600080fd5b506100b6600160a060020a03600435166024356104bd565b34801561019057600080fd5b506100b6600160a060020a036004351660243561059e565b3480156101b457600080fd5b506100df600160a060020a0360043581169060243516610637565b336000818152600260209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60015490565b6000600160a060020a038316151561025257600080fd5b600160a060020a03841660009081526020819052604090205482111561027757600080fd5b600160a060020a03841660009081526002602090815260408083203384529091529020548211156102a757600080fd5b600160a060020a0384166000908152602081905260409020546102d0908363ffffffff61066216565b600160a060020a038086166000908152602081905260408082209390935590851681522054610305908363ffffffff61067416565b600160a060020a03808516600090815260208181526040808320949094559187168152600282528281203382529091522054610347908363ffffffff61066216565b600160a060020a03808616600081815260026020908152604080832033845282529182902094909455805186815290519287169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35060019392505050565b336000908152600260209081526040808320600160a060020a03861684529091528120548083111561040757336000908152600260209081526040808320600160a060020a038816845290915281205561043c565b610417818463ffffffff61066216565b336000908152600260209081526040808320600160a060020a03891684529091529020555b336000818152600260209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b6000600160a060020a03831615156104d457600080fd5b336000908152602081905260409020548211156104f057600080fd5b33600090815260208190526040902054610510908363ffffffff61066216565b3360009081526020819052604080822092909255600160a060020a03851681522054610542908363ffffffff61067416565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b336000908152600260209081526040808320600160a060020a03861684529091528120546105d2908363ffffffff61067416565b336000818152600260209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b60008282111561066e57fe5b50900390565b8181018281101561068157fe5b929150505600a165627a7a72305820cd62eb8550a5aa03614c8f0b2549e19deaf37326d11efece3c7bc1607594a4300029",
  "deployedBytecode": "0x60806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009257806318160ddd146100ca57806323b872dd146100f1578063661884631461011b57806370a082311461013f578063a9059cbb14610160578063d73dd62314610184578063dd62ed3e146101a8575b600080fd5b34801561009e57600080fd5b506100b6600160a060020a03600435166024356101cf565b604080519115158252519081900360200190f35b3480156100d657600080fd5b506100df610235565b60408051918252519081900360200190f35b3480156100fd57600080fd5b506100b6600160a060020a036004358116906024351660443561023b565b34801561012757600080fd5b506100b6600160a060020a03600435166024356103b2565b34801561014b57600080fd5b506100df600160a060020a03600435166104a2565b34801561016c57600080fd5b506100b6600160a060020a03600435166024356104bd565b34801561019057600080fd5b506100b6600160a060020a036004351660243561059e565b3480156101b457600080fd5b506100df600160a060020a0360043581169060243516610637565b336000818152600260209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60015490565b6000600160a060020a038316151561025257600080fd5b600160a060020a03841660009081526020819052604090205482111561027757600080fd5b600160a060020a03841660009081526002602090815260408083203384529091529020548211156102a757600080fd5b600160a060020a0384166000908152602081905260409020546102d0908363ffffffff61066216565b600160a060020a038086166000908152602081905260408082209390935590851681522054610305908363ffffffff61067416565b600160a060020a03808516600090815260208181526040808320949094559187168152600282528281203382529091522054610347908363ffffffff61066216565b600160a060020a03808616600081815260026020908152604080832033845282529182902094909455805186815290519287169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a35060019392505050565b336000908152600260209081526040808320600160a060020a03861684529091528120548083111561040757336000908152600260209081526040808320600160a060020a038816845290915281205561043c565b610417818463ffffffff61066216565b336000908152600260209081526040808320600160a060020a03891684529091529020555b336000818152600260209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b6000600160a060020a03831615156104d457600080fd5b336000908152602081905260409020548211156104f057600080fd5b33600090815260208190526040902054610510908363ffffffff61066216565b3360009081526020819052604080822092909255600160a060020a03851681522054610542908363ffffffff61067416565b600160a060020a038416600081815260208181526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b336000908152600260209081526040808320600160a060020a03861684529091528120546105d2908363ffffffff61067416565b336000818152600260209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b60008282111561066e57fe5b50900390565b8181018281101561068157fe5b929150505600a165627a7a72305820cd62eb8550a5aa03614c8f0b2549e19deaf37326d11efece3c7bc1607594a4300029",
  "sourceMap": "334:3779:50:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;334:3779:50;;;;;;;",
  "deployedSourceMap": "334:3779:50:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1814:188;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1814:188:50;-1:-1:-1;;;;;1814:188:50;;;;;;;;;;;;;;;;;;;;;;;;;371:83:46;;8:9:-1;5:2;;;30:1;27;20:12;5:2;371:83:46;;;;;;;;;;;;;;;;;;;;726:470:50;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;726:470:50;-1:-1:-1;;;;;726:470:50;;;;;;;;;;;;3679:431;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3679:431:50;-1:-1:-1;;;;;3679:431:50;;;;;;;1131:99:46;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1131:99:46;-1:-1:-1;;;;;1131:99:46;;;;;608:321;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;608:321:46;-1:-1:-1;;;;;608:321:46;;;;;;;2926:296:50;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2926:296:50;-1:-1:-1;;;;;2926:296:50;;;;;;;2321:153;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2321:153:50;-1:-1:-1;;;;;2321:153:50;;;;;;;;;;1814:188;1901:10;1881:4;1893:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;1893:29:50;;;;;;;;;;;:38;;;1942;;;;;;;1881:4;;1893:29;;1901:10;;1942:38;;;;;;;;-1:-1:-1;1993:4:50;1814:188;;;;:::o;371:83:46:-;437:12;;371:83;:::o;726:470:50:-;832:4;-1:-1:-1;;;;;854:17:50;;;;846:26;;;;;;-1:-1:-1;;;;;896:15:50;;:8;:15;;;;;;;;;;;886:25;;;878:34;;;;;;-1:-1:-1;;;;;936:14:50;;;;;;:7;:14;;;;;;;;951:10;936:26;;;;;;;;926:36;;;918:45;;;;;;-1:-1:-1;;;;;988:15:50;;:8;:15;;;;;;;;;;;:27;;1008:6;988:27;:19;:27;:::i;:::-;-1:-1:-1;;;;;970:15:50;;;:8;:15;;;;;;;;;;;:45;;;;1037:13;;;;;;;:25;;1055:6;1037:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;1021:13:50;;;:8;:13;;;;;;;;;;;:41;;;;1097:14;;;;;:7;:14;;;;;1112:10;1097:26;;;;;;;:38;;1128:6;1097:38;:30;:38;:::i;:::-;-1:-1:-1;;;;;1068:14:50;;;;;;;:7;:14;;;;;;;;1083:10;1068:26;;;;;;;;:67;;;;1146:28;;;;;;;;;;;1068:14;;1146:28;;;;;;;;;;;-1:-1:-1;1187:4:50;726:470;;;;;:::o;3679:431::-;3826:10;3785:4;3818:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3818:29:50;;;;;;;;;;3857:27;;;3853:164;;;3902:10;3926:1;3894:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3894:29:50;;;;;;;;;:33;3853:164;;;3980:30;:8;3993:16;3980:30;:12;:30;:::i;:::-;3956:10;3948:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3948:29:50;;;;;;;;;:62;3853:164;4036:10;4058:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4027:61:50;;4058:29;;;;;;;;;;;4027:61;;;;;;;;;4036:10;4027:61;;;;;;;;;;;-1:-1:-1;4101:4:50;;3679:431;-1:-1:-1;;;3679:431:50:o;1131:99:46:-;-1:-1:-1;;;;;1209:16:46;1187:7;1209:16;;;;;;;;;;;;1131:99::o;608:321::-;671:4;-1:-1:-1;;;;;691:17:46;;;;683:26;;;;;;742:10;733:8;:20;;;;;;;;;;;723:30;;;715:39;;;;;;793:10;784:8;:20;;;;;;;;;;;:32;;809:6;784:32;:24;:32;:::i;:::-;770:10;761:8;:20;;;;;;;;;;;:55;;;;-1:-1:-1;;;;;838:13:46;;;;;;:25;;856:6;838:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;822:13:46;;:8;:13;;;;;;;;;;;;:41;;;;874:33;;;;;;;822:13;;883:10;;874:33;;;;;;;;;;-1:-1:-1;920:4:46;608:321;;;;:::o;2926:296:50:-;3089:10;3027:4;3081:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3081:29:50;;;;;;;;;;:46;;3115:11;3081:46;:33;:46;:::i;:::-;3049:10;3041:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3041:29:50;;;;;;;;;;;;:87;;;3139:61;;;;;;3041:29;;3139:61;;;;;;;;;;;-1:-1:-1;3213:4:50;2926:296;;;;:::o;2321:153::-;-1:-1:-1;;;;;2444:15:50;;;2420:7;2444:15;;;:7;:15;;;;;;;;:25;;;;;;;;;;;;;2321:153::o;1042:110:44:-;1100:7;1122:6;;;;1115:14;;;;-1:-1:-1;1142:5:44;;;1042:110::o;1214:123::-;1293:5;;;1311:6;;;;1304:14;;;;1214:123;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./BasicToken.sol\";\nimport \"./ERC20.sol\";\n\n\n/**\n * @title Standard ERC20 token\n *\n * @dev Implementation of the basic standard token.\n * https://github.com/ethereum/EIPs/issues/20\n * Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol\n */\ncontract StandardToken is ERC20, BasicToken {\n\n  mapping (address => mapping (address => uint256)) internal allowed;\n\n\n  /**\n   * @dev Transfer tokens from one address to another\n   * @param _from address The address which you want to send tokens from\n   * @param _to address The address which you want to transfer to\n   * @param _value uint256 the amount of tokens to be transferred\n   */\n  function transferFrom(\n    address _from,\n    address _to,\n    uint256 _value\n  )\n    public\n    returns (bool)\n  {\n    require(_to != address(0));\n    require(_value <= balances[_from]);\n    require(_value <= allowed[_from][msg.sender]);\n\n    balances[_from] = balances[_from].sub(_value);\n    balances[_to] = balances[_to].add(_value);\n    allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);\n    emit Transfer(_from, _to, _value);\n    return true;\n  }\n\n  /**\n   * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.\n   * Beware that changing an allowance with this method brings the risk that someone may use both the old\n   * and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this\n   * race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:\n   * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n   * @param _spender The address which will spend the funds.\n   * @param _value The amount of tokens to be spent.\n   */\n  function approve(address _spender, uint256 _value) public returns (bool) {\n    allowed[msg.sender][_spender] = _value;\n    emit Approval(msg.sender, _spender, _value);\n    return true;\n  }\n\n  /**\n   * @dev Function to check the amount of tokens that an owner allowed to a spender.\n   * @param _owner address The address which owns the funds.\n   * @param _spender address The address which will spend the funds.\n   * @return A uint256 specifying the amount of tokens still available for the spender.\n   */\n  function allowance(\n    address _owner,\n    address _spender\n   )\n    public\n    view\n    returns (uint256)\n  {\n    return allowed[_owner][_spender];\n  }\n\n  /**\n   * @dev Increase the amount of tokens that an owner allowed to a spender.\n   * approve should be called when allowed[_spender] == 0. To increment\n   * allowed value is better to use this function to avoid 2 calls (and wait until\n   * the first transaction is mined)\n   * From MonolithDAO Token.sol\n   * @param _spender The address which will spend the funds.\n   * @param _addedValue The amount of tokens to increase the allowance by.\n   */\n  function increaseApproval(\n    address _spender,\n    uint256 _addedValue\n  )\n    public\n    returns (bool)\n  {\n    allowed[msg.sender][_spender] = (\n      allowed[msg.sender][_spender].add(_addedValue));\n    emit Approval(msg.sender, _spender, allowed[msg.sender][_spender]);\n    return true;\n  }\n\n  /**\n   * @dev Decrease the amount of tokens that an owner allowed to a spender.\n   * approve should be called when allowed[_spender] == 0. To decrement\n   * allowed value is better to use this function to avoid 2 calls (and wait until\n   * the first transaction is mined)\n   * From MonolithDAO Token.sol\n   * @param _spender The address which will spend the funds.\n   * @param _subtractedValue The amount of tokens to decrease the allowance by.\n   */\n  function decreaseApproval(\n    address _spender,\n    uint256 _subtractedValue\n  )\n    public\n    returns (bool)\n  {\n    uint256 oldValue = allowed[msg.sender][_spender];\n    if (_subtractedValue > oldValue) {\n      allowed[msg.sender][_spender] = 0;\n    } else {\n      allowed[msg.sender][_spender] = oldValue.sub(_subtractedValue);\n    }\n    emit Approval(msg.sender, _spender, allowed[msg.sender][_spender]);\n    return true;\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
    "exportedSymbols": {
      "StandardToken": [
        5982
      ]
    },
    "id": 5983,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5737,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:50"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
        "file": "./BasicToken.sol",
        "id": 5738,
        "nodeType": "ImportDirective",
        "scope": 5983,
        "sourceUnit": 5627,
        "src": "26:26:50",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "./ERC20.sol",
        "id": 5739,
        "nodeType": "ImportDirective",
        "scope": 5983,
        "sourceUnit": 5704,
        "src": "53:21:50",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5740,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5703,
              "src": "360:5:50",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$5703",
                "typeString": "contract ERC20"
              }
            },
            "id": 5741,
            "nodeType": "InheritanceSpecifier",
            "src": "360:5:50"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5742,
              "name": "BasicToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5626,
              "src": "367:10:50",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BasicToken_$5626",
                "typeString": "contract BasicToken"
              }
            },
            "id": 5743,
            "nodeType": "InheritanceSpecifier",
            "src": "367:10:50"
          }
        ],
        "contractDependencies": [
          5626,
          5703,
          5735
        ],
        "contractKind": "contract",
        "documentation": "@title Standard ERC20 token\n * @dev Implementation of the basic standard token.\nhttps://github.com/ethereum/EIPs/issues/20\nBased on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol",
        "fullyImplemented": true,
        "id": 5982,
        "linearizedBaseContracts": [
          5982,
          5626,
          5703,
          5735
        ],
        "name": "StandardToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5749,
            "name": "allowed",
            "nodeType": "VariableDeclaration",
            "scope": 5982,
            "src": "383:66:50",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 5748,
              "keyType": {
                "id": 5744,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "392:7:50",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "383:49:50",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueType": {
                "id": 5747,
                "keyType": {
                  "id": 5745,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "412:7:50",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "403:28:50",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 5746,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "423:7:50",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5834,
              "nodeType": "Block",
              "src": "840:356:50",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 5765,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 5761,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5753,
                          "src": "854:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 5763,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "869:1:50",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 5762,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "861:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 5764,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "861:10:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "854:17:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5760,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6000,
                        6001
                      ],
                      "referencedDeclaration": 6000,
                      "src": "846:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5766,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "846:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5767,
                  "nodeType": "ExpressionStatement",
                  "src": "846:26:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5773,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 5769,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5755,
                          "src": "886:6:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 5770,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5543,
                            "src": "896:8:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 5772,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 5771,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5751,
                            "src": "905:5:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "896:15:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "886:25:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5768,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6000,
                        6001
                      ],
                      "referencedDeclaration": 6000,
                      "src": "878:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "878:34:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5775,
                  "nodeType": "ExpressionStatement",
                  "src": "878:34:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5784,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 5777,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5755,
                          "src": "926:6:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 5778,
                              "name": "allowed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5749,
                              "src": "936:7:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 5780,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 5779,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5751,
                              "src": "944:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "936:14:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 5783,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 5781,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5997,
                              "src": "951:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 5782,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "951:10:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "936:26:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "926:36:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5776,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6000,
                        6001
                      ],
                      "referencedDeclaration": 6000,
                      "src": "918:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5785,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "918:45:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5786,
                  "nodeType": "ExpressionStatement",
                  "src": "918:45:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5796,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 5787,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5543,
                        "src": "970:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5789,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5788,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5751,
                        "src": "979:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "970:15:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 5794,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5755,
                          "src": "1008:6:50",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 5790,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5543,
                            "src": "988:8:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 5792,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 5791,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5751,
                            "src": "997:5:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "988:15:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5793,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5419,
                        "src": "988:19:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 5795,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "988:27:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "970:45:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5797,
                  "nodeType": "ExpressionStatement",
                  "src": "970:45:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 5798,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5543,
                        "src": "1021:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5800,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5799,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5753,
                        "src": "1030:3:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1021:13:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 5805,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5755,
                          "src": "1055:6:50",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 5801,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5543,
                            "src": "1037:8:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 5803,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 5802,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5753,
                            "src": "1046:3:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1037:13:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5804,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5443,
                        "src": "1037:17:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 5806,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1037:25:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1021:41:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5808,
                  "nodeType": "ExpressionStatement",
                  "src": "1021:41:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5824,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 5809,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5749,
                          "src": "1068:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 5813,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 5810,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5751,
                          "src": "1076:5:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1068:14:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5814,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5811,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5997,
                          "src": "1083:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5812,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1083:10:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1068:26:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 5822,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5755,
                          "src": "1128:6:50",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 5815,
                              "name": "allowed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5749,
                              "src": "1097:7:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 5817,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 5816,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5751,
                              "src": "1105:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1097:14:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 5820,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 5818,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5997,
                              "src": "1112:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 5819,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1112:10:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1097:26:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5821,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5419,
                        "src": "1097:30:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 5823,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1097:38:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1068:67:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5825,
                  "nodeType": "ExpressionStatement",
                  "src": "1068:67:50"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5827,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5751,
                        "src": "1155:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5828,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5753,
                        "src": "1162:3:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5829,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5755,
                        "src": "1167:6:50",
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
                      "id": 5826,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5734,
                      "src": "1146:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 5830,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1146:28:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5831,
                  "nodeType": "EmitStatement",
                  "src": "1141:33:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 5832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1187:4:50",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 5759,
                  "id": 5833,
                  "nodeType": "Return",
                  "src": "1180:11:50"
                }
              ]
            },
            "documentation": "@dev Transfer tokens from one address to another\n@param _from address The address which you want to send tokens from\n@param _to address The address which you want to transfer to\n@param _value uint256 the amount of tokens to be transferred",
            "id": 5835,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5751,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5835,
                  "src": "753:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5750,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "753:7:50",
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
                  "id": 5753,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5835,
                  "src": "772:11:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5752,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "772:7:50",
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
                  "id": 5755,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5835,
                  "src": "789:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5754,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "789:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "747:60:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 5759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5758,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5835,
                  "src": "832:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5757,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "832:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "831:6:50"
            },
            "scope": 5982,
            "src": "726:470:50",
            "stateMutability": "nonpayable",
            "superFunction": 5685,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5862,
              "nodeType": "Block",
              "src": "1887:115:50",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5851,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 5844,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5749,
                          "src": "1893:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 5848,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 5845,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5997,
                            "src": "1901:3:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5846,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1901:10:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1893:19:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5849,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5847,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5837,
                        "src": "1913:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1893:29:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5850,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5839,
                      "src": "1925:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1893:38:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5852,
                  "nodeType": "ExpressionStatement",
                  "src": "1893:38:50"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5854,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5997,
                          "src": "1951:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1951:10:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5856,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5837,
                        "src": "1963:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5857,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5839,
                        "src": "1973:6:50",
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
                      "id": 5853,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5702,
                      "src": "1942:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 5858,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1942:38:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5859,
                  "nodeType": "EmitStatement",
                  "src": "1937:43:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 5860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1993:4:50",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 5843,
                  "id": 5861,
                  "nodeType": "Return",
                  "src": "1986:11:50"
                }
              ]
            },
            "documentation": "@dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.\nBeware that changing an allowance with this method brings the risk that someone may use both the old\nand the new allowance by unfortunate transaction ordering. One possible solution to mitigate this\nrace condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:\nhttps://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n@param _spender The address which will spend the funds.\n@param _value The amount of tokens to be spent.",
            "id": 5863,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5837,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5863,
                  "src": "1831:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5836,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1831:7:50",
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
                  "id": 5839,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5863,
                  "src": "1849:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5838,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1849:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1830:34:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 5843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5842,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5863,
                  "src": "1881:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5841,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1881:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1880:6:50"
            },
            "scope": 5982,
            "src": "1814:188:50",
            "stateMutability": "nonpayable",
            "superFunction": 5694,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5878,
              "nodeType": "Block",
              "src": "2431:43:50",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 5872,
                        "name": "allowed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5749,
                        "src": "2444:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(address => uint256))"
                        }
                      },
                      "id": 5874,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5873,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5865,
                        "src": "2452:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2444:15:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 5876,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 5875,
                      "name": "_spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5867,
                      "src": "2460:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2444:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5871,
                  "id": 5877,
                  "nodeType": "Return",
                  "src": "2437:32:50"
                }
              ]
            },
            "documentation": "@dev Function to check the amount of tokens that an owner allowed to a spender.\n@param _owner address The address which owns the funds.\n@param _spender address The address which will spend the funds.\n@return A uint256 specifying the amount of tokens still available for the spender.",
            "id": 5879,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5865,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5879,
                  "src": "2345:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5864,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2345:7:50",
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
                  "id": 5867,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5879,
                  "src": "2365:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2365:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2339:47:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 5871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5870,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5879,
                  "src": "2420:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5869,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2420:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2419:9:50"
            },
            "scope": 5982,
            "src": "2321:153:50",
            "stateMutability": "view",
            "superFunction": 5674,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5920,
              "nodeType": "Block",
              "src": "3035:187:50",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5904,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 5888,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5749,
                          "src": "3041:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 5892,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 5889,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5997,
                            "src": "3049:3:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5890,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3049:10:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3041:19:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5893,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5891,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5881,
                        "src": "3061:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3041:29:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 5901,
                              "name": "_addedValue",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5883,
                              "src": "3115:11:50",
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
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 5894,
                                  "name": "allowed",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5749,
                                  "src": "3081:7:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                  }
                                },
                                "id": 5897,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 5895,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 5997,
                                    "src": "3089:3:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 5896,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3089:10:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3081:19:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 5899,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 5898,
                                "name": "_spender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5881,
                                "src": "3101:8:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3081:29:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 5900,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5443,
                            "src": "3081:33:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 5902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3081:46:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 5903,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3073:55:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3041:87:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5905,
                  "nodeType": "ExpressionStatement",
                  "src": "3041:87:50"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5907,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5997,
                          "src": "3148:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5908,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3148:10:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5909,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5881,
                        "src": "3160:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 5910,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5749,
                            "src": "3170:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 5913,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 5911,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5997,
                              "src": "3178:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 5912,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3178:10:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3170:19:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 5915,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 5914,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5881,
                          "src": "3190:8:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3170:29:50",
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
                      "id": 5906,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5702,
                      "src": "3139:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 5916,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3139:61:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5917,
                  "nodeType": "EmitStatement",
                  "src": "3134:66:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 5918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3213:4:50",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 5887,
                  "id": 5919,
                  "nodeType": "Return",
                  "src": "3206:11:50"
                }
              ]
            },
            "documentation": "@dev Increase the amount of tokens that an owner allowed to a spender.\napprove should be called when allowed[_spender] == 0. To increment\nallowed value is better to use this function to avoid 2 calls (and wait until\nthe first transaction is mined)\nFrom MonolithDAO Token.sol\n@param _spender The address which will spend the funds.\n@param _addedValue The amount of tokens to increase the allowance by.",
            "id": 5921,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "increaseApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5881,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5921,
                  "src": "2957:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5880,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2957:7:50",
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
                  "id": 5883,
                  "name": "_addedValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 5921,
                  "src": "2979:19:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5882,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2979:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2951:51:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 5887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5886,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5921,
                  "src": "3027:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5885,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3027:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3026:6:50"
            },
            "scope": 5982,
            "src": "2926:296:50",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5980,
              "nodeType": "Block",
              "src": "3793:317:50",
              "statements": [
                {
                  "assignments": [
                    5931
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5931,
                      "name": "oldValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 5981,
                      "src": "3799:16:50",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5930,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3799:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5938,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 5932,
                        "name": "allowed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5749,
                        "src": "3818:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(address => uint256))"
                        }
                      },
                      "id": 5935,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5933,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5997,
                          "src": "3826:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5934,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3826:10:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3818:19:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 5937,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 5936,
                      "name": "_spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5923,
                      "src": "3838:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3818:29:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3799:48:50"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5941,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 5939,
                      "name": "_subtractedValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5925,
                      "src": "3857:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 5940,
                      "name": "oldValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5931,
                      "src": "3876:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3857:27:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 5964,
                    "nodeType": "Block",
                    "src": "3940:77:50",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 5962,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 5952,
                                "name": "allowed",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5749,
                                "src": "3948:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 5956,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 5953,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5997,
                                  "src": "3956:3:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 5954,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3956:10:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3948:19:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 5957,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 5955,
                              "name": "_spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5923,
                              "src": "3968:8:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3948:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 5960,
                                "name": "_subtractedValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5925,
                                "src": "3993:16:50",
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
                                "id": 5958,
                                "name": "oldValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5931,
                                "src": "3980:8:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 5959,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 5419,
                              "src": "3980:12:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 5961,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3980:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3948:62:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5963,
                        "nodeType": "ExpressionStatement",
                        "src": "3948:62:50"
                      }
                    ]
                  },
                  "id": 5965,
                  "nodeType": "IfStatement",
                  "src": "3853:164:50",
                  "trueBody": {
                    "id": 5951,
                    "nodeType": "Block",
                    "src": "3886:48:50",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 5949,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 5942,
                                "name": "allowed",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5749,
                                "src": "3894:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 5946,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 5943,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5997,
                                  "src": "3902:3:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 5944,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3902:10:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3894:19:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 5947,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 5945,
                              "name": "_spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5923,
                              "src": "3914:8:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3894:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 5948,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3926:1:50",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3894:33:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5950,
                        "nodeType": "ExpressionStatement",
                        "src": "3894:33:50"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5967,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5997,
                          "src": "4036:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4036:10:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5969,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5923,
                        "src": "4048:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 5970,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5749,
                            "src": "4058:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 5973,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 5971,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5997,
                              "src": "4066:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 5972,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4066:10:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4058:19:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 5975,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 5974,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5923,
                          "src": "4078:8:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4058:29:50",
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
                      "id": 5966,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5702,
                      "src": "4027:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 5976,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4027:61:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5977,
                  "nodeType": "EmitStatement",
                  "src": "4022:66:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 5978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4101:4:50",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 5929,
                  "id": 5979,
                  "nodeType": "Return",
                  "src": "4094:11:50"
                }
              ]
            },
            "documentation": "@dev Decrease the amount of tokens that an owner allowed to a spender.\napprove should be called when allowed[_spender] == 0. To decrement\nallowed value is better to use this function to avoid 2 calls (and wait until\nthe first transaction is mined)\nFrom MonolithDAO Token.sol\n@param _spender The address which will spend the funds.\n@param _subtractedValue The amount of tokens to decrease the allowance by.",
            "id": 5981,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "decreaseApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5926,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5923,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5981,
                  "src": "3710:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5922,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3710:7:50",
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
                  "id": 5925,
                  "name": "_subtractedValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 5981,
                  "src": "3732:24:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5924,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3732:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3704:56:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 5929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5928,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5981,
                  "src": "3785:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5927,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3785:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3784:6:50"
            },
            "scope": 5982,
            "src": "3679:431:50",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 5983,
        "src": "334:3779:50"
      }
    ],
    "src": "0:4114:50"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
    "exportedSymbols": {
      "StandardToken": [
        5982
      ]
    },
    "id": 5983,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5737,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:50"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
        "file": "./BasicToken.sol",
        "id": 5738,
        "nodeType": "ImportDirective",
        "scope": 5983,
        "sourceUnit": 5627,
        "src": "26:26:50",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "./ERC20.sol",
        "id": 5739,
        "nodeType": "ImportDirective",
        "scope": 5983,
        "sourceUnit": 5704,
        "src": "53:21:50",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5740,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5703,
              "src": "360:5:50",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$5703",
                "typeString": "contract ERC20"
              }
            },
            "id": 5741,
            "nodeType": "InheritanceSpecifier",
            "src": "360:5:50"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5742,
              "name": "BasicToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5626,
              "src": "367:10:50",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BasicToken_$5626",
                "typeString": "contract BasicToken"
              }
            },
            "id": 5743,
            "nodeType": "InheritanceSpecifier",
            "src": "367:10:50"
          }
        ],
        "contractDependencies": [
          5626,
          5703,
          5735
        ],
        "contractKind": "contract",
        "documentation": "@title Standard ERC20 token\n * @dev Implementation of the basic standard token.\nhttps://github.com/ethereum/EIPs/issues/20\nBased on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol",
        "fullyImplemented": true,
        "id": 5982,
        "linearizedBaseContracts": [
          5982,
          5626,
          5703,
          5735
        ],
        "name": "StandardToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5749,
            "name": "allowed",
            "nodeType": "VariableDeclaration",
            "scope": 5982,
            "src": "383:66:50",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(address => uint256))"
            },
            "typeName": {
              "id": 5748,
              "keyType": {
                "id": 5744,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "392:7:50",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "383:49:50",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(address => uint256))"
              },
              "valueType": {
                "id": 5747,
                "keyType": {
                  "id": 5745,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "412:7:50",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "403:28:50",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 5746,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "423:7:50",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5834,
              "nodeType": "Block",
              "src": "840:356:50",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 5765,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 5761,
                          "name": "_to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5753,
                          "src": "854:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 5763,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "869:1:50",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 5762,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "861:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 5764,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "861:10:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "854:17:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5760,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6000,
                        6001
                      ],
                      "referencedDeclaration": 6000,
                      "src": "846:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5766,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "846:26:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5767,
                  "nodeType": "ExpressionStatement",
                  "src": "846:26:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5773,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 5769,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5755,
                          "src": "886:6:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 5770,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5543,
                            "src": "896:8:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 5772,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 5771,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5751,
                            "src": "905:5:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "896:15:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "886:25:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5768,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6000,
                        6001
                      ],
                      "referencedDeclaration": 6000,
                      "src": "878:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "878:34:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5775,
                  "nodeType": "ExpressionStatement",
                  "src": "878:34:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5784,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 5777,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5755,
                          "src": "926:6:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 5778,
                              "name": "allowed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5749,
                              "src": "936:7:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 5780,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 5779,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5751,
                              "src": "944:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "936:14:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 5783,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 5781,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5997,
                              "src": "951:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 5782,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "951:10:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "936:26:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "926:36:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5776,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6000,
                        6001
                      ],
                      "referencedDeclaration": 6000,
                      "src": "918:7:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5785,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "918:45:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5786,
                  "nodeType": "ExpressionStatement",
                  "src": "918:45:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5796,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 5787,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5543,
                        "src": "970:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5789,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5788,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5751,
                        "src": "979:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "970:15:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 5794,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5755,
                          "src": "1008:6:50",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 5790,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5543,
                            "src": "988:8:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 5792,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 5791,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5751,
                            "src": "997:5:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "988:15:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5793,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5419,
                        "src": "988:19:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 5795,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "988:27:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "970:45:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5797,
                  "nodeType": "ExpressionStatement",
                  "src": "970:45:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 5798,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5543,
                        "src": "1021:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5800,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5799,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5753,
                        "src": "1030:3:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1021:13:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 5805,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5755,
                          "src": "1055:6:50",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 5801,
                            "name": "balances",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5543,
                            "src": "1037:8:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 5803,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 5802,
                            "name": "_to",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5753,
                            "src": "1046:3:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1037:13:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5804,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5443,
                        "src": "1037:17:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 5806,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1037:25:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1021:41:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5808,
                  "nodeType": "ExpressionStatement",
                  "src": "1021:41:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5824,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 5809,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5749,
                          "src": "1068:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 5813,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 5810,
                          "name": "_from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5751,
                          "src": "1076:5:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1068:14:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5814,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5811,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5997,
                          "src": "1083:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5812,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1083:10:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1068:26:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 5822,
                          "name": "_value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5755,
                          "src": "1128:6:50",
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
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 5815,
                              "name": "allowed",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5749,
                              "src": "1097:7:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                              }
                            },
                            "id": 5817,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 5816,
                              "name": "_from",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5751,
                              "src": "1105:5:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1097:14:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 5820,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 5818,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5997,
                              "src": "1112:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 5819,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1112:10:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1097:26:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5821,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sub",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5419,
                        "src": "1097:30:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 5823,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1097:38:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1068:67:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5825,
                  "nodeType": "ExpressionStatement",
                  "src": "1068:67:50"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5827,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5751,
                        "src": "1155:5:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5828,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5753,
                        "src": "1162:3:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5829,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5755,
                        "src": "1167:6:50",
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
                      "id": 5826,
                      "name": "Transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5734,
                      "src": "1146:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 5830,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1146:28:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5831,
                  "nodeType": "EmitStatement",
                  "src": "1141:33:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 5832,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1187:4:50",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 5759,
                  "id": 5833,
                  "nodeType": "Return",
                  "src": "1180:11:50"
                }
              ]
            },
            "documentation": "@dev Transfer tokens from one address to another\n@param _from address The address which you want to send tokens from\n@param _to address The address which you want to transfer to\n@param _value uint256 the amount of tokens to be transferred",
            "id": 5835,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5751,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5835,
                  "src": "753:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5750,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "753:7:50",
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
                  "id": 5753,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5835,
                  "src": "772:11:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5752,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "772:7:50",
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
                  "id": 5755,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5835,
                  "src": "789:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5754,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "789:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "747:60:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 5759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5758,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5835,
                  "src": "832:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5757,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "832:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "831:6:50"
            },
            "scope": 5982,
            "src": "726:470:50",
            "stateMutability": "nonpayable",
            "superFunction": 5685,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5862,
              "nodeType": "Block",
              "src": "1887:115:50",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5851,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 5844,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5749,
                          "src": "1893:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 5848,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 5845,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5997,
                            "src": "1901:3:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5846,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1901:10:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1893:19:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5849,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5847,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5837,
                        "src": "1913:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1893:29:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5850,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5839,
                      "src": "1925:6:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1893:38:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5852,
                  "nodeType": "ExpressionStatement",
                  "src": "1893:38:50"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5854,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5997,
                          "src": "1951:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1951:10:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5856,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5837,
                        "src": "1963:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5857,
                        "name": "_value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5839,
                        "src": "1973:6:50",
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
                      "id": 5853,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5702,
                      "src": "1942:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 5858,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1942:38:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5859,
                  "nodeType": "EmitStatement",
                  "src": "1937:43:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 5860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1993:4:50",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 5843,
                  "id": 5861,
                  "nodeType": "Return",
                  "src": "1986:11:50"
                }
              ]
            },
            "documentation": "@dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.\nBeware that changing an allowance with this method brings the risk that someone may use both the old\nand the new allowance by unfortunate transaction ordering. One possible solution to mitigate this\nrace condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:\nhttps://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n@param _spender The address which will spend the funds.\n@param _value The amount of tokens to be spent.",
            "id": 5863,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5837,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5863,
                  "src": "1831:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5836,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1831:7:50",
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
                  "id": 5839,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5863,
                  "src": "1849:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5838,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1849:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1830:34:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 5843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5842,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5863,
                  "src": "1881:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5841,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1881:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1880:6:50"
            },
            "scope": 5982,
            "src": "1814:188:50",
            "stateMutability": "nonpayable",
            "superFunction": 5694,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5878,
              "nodeType": "Block",
              "src": "2431:43:50",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 5872,
                        "name": "allowed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5749,
                        "src": "2444:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(address => uint256))"
                        }
                      },
                      "id": 5874,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5873,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5865,
                        "src": "2452:6:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2444:15:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 5876,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 5875,
                      "name": "_spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5867,
                      "src": "2460:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2444:25:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5871,
                  "id": 5877,
                  "nodeType": "Return",
                  "src": "2437:32:50"
                }
              ]
            },
            "documentation": "@dev Function to check the amount of tokens that an owner allowed to a spender.\n@param _owner address The address which owns the funds.\n@param _spender address The address which will spend the funds.\n@return A uint256 specifying the amount of tokens still available for the spender.",
            "id": 5879,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5865,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5879,
                  "src": "2345:14:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5864,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2345:7:50",
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
                  "id": 5867,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5879,
                  "src": "2365:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2365:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2339:47:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 5871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5870,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5879,
                  "src": "2420:7:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5869,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2420:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2419:9:50"
            },
            "scope": 5982,
            "src": "2321:153:50",
            "stateMutability": "view",
            "superFunction": 5674,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5920,
              "nodeType": "Block",
              "src": "3035:187:50",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5904,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 5888,
                          "name": "allowed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5749,
                          "src": "3041:7:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                          }
                        },
                        "id": 5892,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 5889,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5997,
                            "src": "3049:3:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5890,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3049:10:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3041:19:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5893,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5891,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5881,
                        "src": "3061:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3041:29:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 5901,
                              "name": "_addedValue",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5883,
                              "src": "3115:11:50",
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
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 5894,
                                  "name": "allowed",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5749,
                                  "src": "3081:7:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(address => uint256))"
                                  }
                                },
                                "id": 5897,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 5895,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 5997,
                                    "src": "3089:3:50",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 5896,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3089:10:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "3081:19:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                  "typeString": "mapping(address => uint256)"
                                }
                              },
                              "id": 5899,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 5898,
                                "name": "_spender",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5881,
                                "src": "3101:8:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3081:29:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 5900,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "add",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 5443,
                            "src": "3081:33:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 5902,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3081:46:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 5903,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3073:55:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3041:87:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5905,
                  "nodeType": "ExpressionStatement",
                  "src": "3041:87:50"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5907,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5997,
                          "src": "3148:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5908,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3148:10:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5909,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5881,
                        "src": "3160:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 5910,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5749,
                            "src": "3170:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 5913,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 5911,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5997,
                              "src": "3178:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 5912,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3178:10:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3170:19:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 5915,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 5914,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5881,
                          "src": "3190:8:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3170:29:50",
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
                      "id": 5906,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5702,
                      "src": "3139:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 5916,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3139:61:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5917,
                  "nodeType": "EmitStatement",
                  "src": "3134:66:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 5918,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3213:4:50",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 5887,
                  "id": 5919,
                  "nodeType": "Return",
                  "src": "3206:11:50"
                }
              ]
            },
            "documentation": "@dev Increase the amount of tokens that an owner allowed to a spender.\napprove should be called when allowed[_spender] == 0. To increment\nallowed value is better to use this function to avoid 2 calls (and wait until\nthe first transaction is mined)\nFrom MonolithDAO Token.sol\n@param _spender The address which will spend the funds.\n@param _addedValue The amount of tokens to increase the allowance by.",
            "id": 5921,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "increaseApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5884,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5881,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5921,
                  "src": "2957:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5880,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2957:7:50",
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
                  "id": 5883,
                  "name": "_addedValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 5921,
                  "src": "2979:19:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5882,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2979:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2951:51:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 5887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5886,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5921,
                  "src": "3027:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5885,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3027:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3026:6:50"
            },
            "scope": 5982,
            "src": "2926:296:50",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5980,
              "nodeType": "Block",
              "src": "3793:317:50",
              "statements": [
                {
                  "assignments": [
                    5931
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5931,
                      "name": "oldValue",
                      "nodeType": "VariableDeclaration",
                      "scope": 5981,
                      "src": "3799:16:50",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5930,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3799:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5938,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 5932,
                        "name": "allowed",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5749,
                        "src": "3818:7:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                          "typeString": "mapping(address => mapping(address => uint256))"
                        }
                      },
                      "id": 5935,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5933,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5997,
                          "src": "3826:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5934,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3826:10:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3818:19:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 5937,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 5936,
                      "name": "_spender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5923,
                      "src": "3838:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3818:29:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3799:48:50"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5941,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 5939,
                      "name": "_subtractedValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5925,
                      "src": "3857:16:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 5940,
                      "name": "oldValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5931,
                      "src": "3876:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3857:27:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 5964,
                    "nodeType": "Block",
                    "src": "3940:77:50",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 5962,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 5952,
                                "name": "allowed",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5749,
                                "src": "3948:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 5956,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 5953,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5997,
                                  "src": "3956:3:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 5954,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3956:10:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3948:19:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 5957,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 5955,
                              "name": "_spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5923,
                              "src": "3968:8:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3948:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 5960,
                                "name": "_subtractedValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5925,
                                "src": "3993:16:50",
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
                                "id": 5958,
                                "name": "oldValue",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5931,
                                "src": "3980:8:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 5959,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 5419,
                              "src": "3980:12:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 5961,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3980:30:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3948:62:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5963,
                        "nodeType": "ExpressionStatement",
                        "src": "3948:62:50"
                      }
                    ]
                  },
                  "id": 5965,
                  "nodeType": "IfStatement",
                  "src": "3853:164:50",
                  "trueBody": {
                    "id": 5951,
                    "nodeType": "Block",
                    "src": "3886:48:50",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 5949,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 5942,
                                "name": "allowed",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5749,
                                "src": "3894:7:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(address => uint256))"
                                }
                              },
                              "id": 5946,
                              "indexExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 5943,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5997,
                                  "src": "3902:3:50",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 5944,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3902:10:50",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3894:19:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 5947,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 5945,
                              "name": "_spender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5923,
                              "src": "3914:8:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3894:29:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 5948,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3926:1:50",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3894:33:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5950,
                        "nodeType": "ExpressionStatement",
                        "src": "3894:33:50"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 5967,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5997,
                          "src": "4036:3:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 5968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4036:10:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5969,
                        "name": "_spender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5923,
                        "src": "4048:8:50",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 5970,
                            "name": "allowed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5749,
                            "src": "4058:7:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(address => uint256))"
                            }
                          },
                          "id": 5973,
                          "indexExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 5971,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5997,
                              "src": "4066:3:50",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 5972,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4066:10:50",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4058:19:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 5975,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 5974,
                          "name": "_spender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5923,
                          "src": "4078:8:50",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4058:29:50",
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
                      "id": 5966,
                      "name": "Approval",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5702,
                      "src": "4027:8:50",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 5976,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4027:61:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5977,
                  "nodeType": "EmitStatement",
                  "src": "4022:66:50"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 5978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4101:4:50",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 5929,
                  "id": 5979,
                  "nodeType": "Return",
                  "src": "4094:11:50"
                }
              ]
            },
            "documentation": "@dev Decrease the amount of tokens that an owner allowed to a spender.\napprove should be called when allowed[_spender] == 0. To decrement\nallowed value is better to use this function to avoid 2 calls (and wait until\nthe first transaction is mined)\nFrom MonolithDAO Token.sol\n@param _spender The address which will spend the funds.\n@param _subtractedValue The amount of tokens to decrease the allowance by.",
            "id": 5981,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "decreaseApproval",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5926,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5923,
                  "name": "_spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 5981,
                  "src": "3710:16:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5922,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3710:7:50",
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
                  "id": 5925,
                  "name": "_subtractedValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 5981,
                  "src": "3732:24:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5924,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3732:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3704:56:50"
            },
            "payable": false,
            "returnParameters": {
              "id": 5929,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5928,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5981,
                  "src": "3785:4:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5927,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3785:4:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3784:6:50"
            },
            "scope": 5982,
            "src": "3679:431:50",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 5983,
        "src": "334:3779:50"
      }
    ],
    "src": "0:4114:50"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-08-10T03:42:05.801Z"
}