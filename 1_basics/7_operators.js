/**
 * Operators 연산자
 * 
 * 산술 연산자
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 3);

let number = 1;
number++;
console.log(number);

/**
 * 연산자의 위치
 */

let result = 1;
console.log(result);

result = number++;
// ++를 뒤에 붙이면 = 연산자가 먼저 실행되고 ++가 실행된다.
// ++를 앞에 붙이면 ++로 증가 먼저 시키고 = 연산자 실행
// 현실세계에서는 보통 뒤에 ++을 붙임
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */

let sample = '99'
console.log(+sample);
console.log(typeof +sample);
// string 숫자 앞에 + 붙여주면 잠시 number 타입으로 바뀜
// string 타입 글자 앞에 + 붙이면 NaN 타입이 됨

/**
 * 할당 연산자
 */
number = 100
console.log(number);

number += 10;
console.log(number);

/**
 * 비교 연산자
 * 1) 값의 비교 - 사실상 잘 안쓰는 기능
 *  => == 처럼 두개 사용
 * 2) 값과 타입의 비교 - 자주 쓰이는 기능
 *  => === 처럼 세개 사용
 */

console.log(5 == '5');
console.log(5 === '5');

console.log(5 != '5');
console.log(5 !== '5');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 >= 1);
console.log(100 <= 1);

/**
 * 삼항 조건 연산자 (ternary operator) 
 * true이면 왼쪽 실행, false이면 오른쪽 실행
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

/**
 * 논리 연산자
 */
console.log(true && true);
console.log(true && false);

console.log(true || true);
console.log(true || fasle);
console.log(false || false);

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);

/** 
 * 단축 평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했울 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */

console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');

/** 
 * 지수 연산자
 */
console.log(2**2);
console.log(10 ** 3);

/**
 * null 연산자
 */
let name;
console.log(name);

name = name ?? 'code factory';
console.log(name);

name = name ?? 'ive';
console.log(name);

let name2;
name2 ??= 'code factory';
console.log(name2);

