/**
 * 1) var - 더 이상 쓰지 않는다.
 * 2) let 과
 * 3) const 를 사용함!
 * 여전히 var 키워드를 기반으로 작성된 코드가 많음
 */

var name = 'code factory';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

ive = '안유진';
console.log(ive);

// const 키워드를 사용해서 변수를 사용하면 나중에 값을 변경할 수 없다.
const newJeans = '뉴진스';
console.log(newJeans);

newJeans = 'code factory';

/**
 * 선언과 할당
 * 1) 변수를 선언하는 것
 * => var name;
 * 2) 할당
 * => var name = 'code factory';
 * 변수를 선언만 하고 할당을 안할 수도 있음
 * 선언만 하고 할당 안하고 출력해보면 undefined라고 뜸 => 정의되지 않았다는 뜻
 * 자동으로 초기값이 undefined로 할당된다.
 * const의 경우 선언만하고 할당을 안하면 오류 뜬다.
 * const 키워드는 무조건 초기화 된 채로 선언 되어야한다. => undefined로 초기값 할당 불가능함
 */