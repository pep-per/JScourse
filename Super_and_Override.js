class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    sayHello(){
        return `안녕하세요 ${this.name}입니다.`
    }
}

class FemaleIdolModel extends IdolModel{
    part;

    constructor(name, year, part){  //생성자 Override(재정의)
        super(name, year);    //부모 클래스의 생성자
        this.part = part;        
    }
    sayHello(){ //함수 Override
        return `${super.sayHello()} ${this.part}를 맡고 있습니다.` 
        //다른 OOP 언어와 달리, 부모 클래스 프로퍼티를 불러올 떄 super 사용불가(생성자만 허용)
        //부모 클래스 함수를 불러올때는 super 사용가능
    }
}

const yujin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yujin);
const wonyoung = new IdolModel('장원영', 2003);
console.log(wonyoung);
console.log(wonyoung.sayHello());
console.log(yujin.sayHello());
