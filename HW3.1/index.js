 // Примітивні типи
 const str = "Hello";
 const num = 42;
 const bigInt = 1234567890123456789012345678901234567890n;
 const bool = true;
 const und = undefined;
 const nul = null;
 const sym = Symbol('символ');

 // Об'єктні типи
 const obj = { name: "Alex" };
 const arr = [1, 2, 3];
 const func = function() {};
 const date = new Date();
 const regex = /абв/i;

 console.log("string:", typeof str);        // "string"
 console.log("number:", typeof num);        // "number"
 console.log("bigint:", typeof bigInt);     // "bigint"
 console.log("boolean:", typeof bool);      // "boolean"
 console.log("undefined:", typeof und);     // "undefined"
 console.log("null:", typeof nul);          // "object" (це відома особливість JS)
 console.log("symbol:", typeof sym);        // "symbol"

 console.log("object (звичайний):", typeof obj);     // "object"
 console.log("array:", typeof arr);                  // "object"
 console.log("function:", typeof func);              // "function"
 console.log("date:", typeof date);                  // "object"
 console.log("regexp:", typeof regex);               // "object"