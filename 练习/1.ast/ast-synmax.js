// 箭头函数
let arrowFunction = {
  "type": "Program",
  "body": [
      {
          "type": "VariableDeclaration",
          "declarations": [
              {
                  "type": "VariableDeclarator",
                  "id": {
                      "type": "Identifier",
                      "name": "sum"
                  },
                  "init": {
                      "type": "ArrowFunctionExpression",
                      "id": null,
                      "params": [
                          {
                              "type": "Identifier",
                              "name": "a"
                          },
                          {
                              "type": "Identifier",
                              "name": "b"
                          }
                      ],
                      "body": {
                          "type": "BlockStatement",
                          "body": [
                              {
                                  "type": "ReturnStatement",
                                  "argument": {
                                      "type": "BinaryExpression",
                                      "operator": "+",
                                      "left": {
                                          "type": "Identifier",
                                          "name": "a"
                                      },
                                      "right": {
                                          "type": "Identifier",
                                          "name": "b"
                                      }
                                  }
                              }
                          ]
                      },
                      "generator": false,
                      "expression": false,
                      "async": false
                  }
              }
          ],
          "kind": "let"
      }
  ],
  "sourceType": "script"
}