const subject=["국어","영어","수학","웹프"];
class Student{
    id;
    name;
    score;
    rank;
    constructor(id,name,score){
        this.id=id;
        this.name=name;
        this.score=score;
    }
    getGrade(score){
        switch(parseInt(score)/10){
            case 10:
            case 9:
                return "A";
            case 8:
                return "B";
            case 7:
                return "C";
            default:
                return "F";

        }
    }
    printScore(){
        document.write(`<h3>학번: $(this.id} 이름: $(this.name}<h3>`);
        for (let i=0;i<subject.length;i++){
            document.write(
                `${subject[i]} | ${this.score[i]} |  ${this.getGrade(this.score[i])}<br>`
            )
        }
    }
}



function drawtitle(){
    let star=true;
    for(let i=0;i<5;i++){
        for(let j=0; j<51;j++){
            if(i==2){
                document.write("<h1> SEIS 대선린서비스 </h1>");
                star=!star;
                break;
            }
            else if(star){
                document.write("*");
            }
            else{
                document.write("&nbsp");
            }
            star=!star;
        }
        document.write("<br>");
    }
}
class ScoreTable{
    studnetList=[];
    drawTable(){
        document.write(this.studnetList[0].id+""+this.studnetList[0].name);
        for(let i=0;i<this.studnetList[0].score.length;i++){
            document.write(this.studnetList[0].score[i]+"%nbsp");
        }
    }

}
let table=ScoreTable;
let student1=new Student(15,"정가빈",[100,100,100,100]);
table.studnetList.push(student1)
console.log(student1);
student1.printScore();
let isTeacher=confirm("");

drawtitle();
if (isTeacher){
    table.drawTable;
}
else{
    let stuId=prompt("학번입력");
    if(parseInt(stuId)==student1.id){
        student1.printScore();
    }
}
