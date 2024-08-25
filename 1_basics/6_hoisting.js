/**
 * Hoisting
 */

console.log(name);
var name = 'code factory';
console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * let과 const도 Hoisting이 된다.
 * 그러나 var과는 다르게 Hoisting 현상을 막아주는 로직 있음
*/

console.log(yujin);