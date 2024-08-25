/**
 * javascript에는 7개의 데이터 타입 있음
 * 6개의 primitive type
 * 1개의 object 타입
 * 
 * Primitive Type
 * 1) Number (숫자)
 * 2) String (문지열)
 * 3) Boolean (불리언, 참과 거짓)
 * 4) undefined (정의 되지 않은 상태)
 * 5) null
 * 6) Symbol
 * 
 * 7) Object (객체)
 * - Function
 * - Array
 * - Object
 */

const age = 32;
const temperature = -10;
const pi = 3.14

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);

const infinity = Infinity;
const nInfinity = -Infinity;

console.log('---------------');

/**
 * String 타입
 */

const codeFactory = '코드 팩토리';
console.log(codeFactory);

const ive = "'이이브' 안유진";
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Charactoer
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */
const iveYujin = '아이브\n안유진';
const iveWonYoung = '아이브\t장원영';

const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);

const groupName = '아이브';
console.log(`${groupName} 안유진`);

/** 
 * Boolean Type
 */
const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);

/**
 * undefined
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때
 * 사용된다.
 * 근데 null type을 typeof하면 object라고 나옴
 * 이건 개발자가 인정한 버그 맞음
 * 레거시 코드가 너무 많아서 안고치고 있는것 ㅇㅇ
 */

let init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용한다
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('2');

console.log(symbol1 === symbol2);

/**
 * Object 타입
 * 
 * Map
 * 키 : 밸류 쌍으로 이루어져 있다.
 * key : value pair
 */

const dictionary = {
    red : '빨간색',
    orange : '주황색',
    yellow : '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);

console.log(typeof dictionary);

/**
 * Array 타입
 * 값을 리스트로 나열할 수 있는 타입이다.
 */
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembersArray);
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

/** 
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시한다. (C)
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 '추론'한다.
 * Javascript -> Dynamic Typing
 */