class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

class MaleIdolModel extends IdolModel {
    sing() {
        return `${this.name}이 노래를 부릅니다.`
    }
}

const yujin = new FemaleIdolModel('안유진', 2003);
console.log(yujin);

const jimi = new MaleIdolModel('지미', 1995);
console.log(jimi);

console.log(yujin.dance());
console.log(yujin.name);    //상속된 constructor
console.log(jimi.sing());
console.log(jimi.year);

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);
console.log(cf.name);
console.log(yujin instanceof IdolModel);
console.log(jimi instanceof FemaleIdolModel)    //같은 레벨의 자식 클래스끼리는 서로 상관 없음
console.log(cf instanceof MaleIdolModel);   // 부모클래스는 자식클래스의 인스턴스가 아님