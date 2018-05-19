/*

 var basicMath = {
  add:function(num1, num2) {
    console.log(num1 + num2);
  },
	multiply:function(num1, num2) {
  		console.log(num1 * num2);
	},
	division:function(num1, num2) {
  	console.log(num1 / num2);
		}
};

var a = 2;
var b = 3;
basicMath.add(a,b);
basicMath.multiply(a,b);
basicMath.division(a,b);

*/

// 8.01 consolevid

/*

function complexMath(num1, num2){
  num1 *= 7;
  num2 /= 2;
  num1 += num2;
  console.log(num1 * num2);
};
complexMath(2, 3);
*/

var newObject = {};
function addValues(obj, val1, val2) {
  obj.val1 = val1;
  obj.val2 = val2;
  return obj;
}

console.log(addValues(newObject, "Hi", "There."));
