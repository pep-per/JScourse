/**
 * Getter 역할
 * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
 * 2) private한 값을 반환할 때
 */

class IdolModel{
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
     }
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }
    //현대 immutable 프로그래밍에서 사용하지 않음
    set setName(name){
        this.name= name;
    }
}
const yujin = new IdolModel('안유진', 2003);
console.log(yujin);
console.log(yujin.nameAndYear);

yujin.setName = '장원영';   //우변에 오는 값이 setter 파라미터로 입력됨
console.log(yujin);

class IdolModel2{
    #name;  //private. ES7 지원 엔진에서 가능
    year;
    constructor(name, year){
        this.#name = name;
        this.year = year;
    }
    get name(){
        return this.#name;
    }
    set name(name){
        this.#name = name;
    }
}
const yujin2 = new IdolModel2('안유진', 2003);
console.log(yujin2);
console.log(yujin2.name);   //getter로 private property를 가져올 수 있다

yujin2.name = '코드팩토리';
console.log(yujin2.name);
