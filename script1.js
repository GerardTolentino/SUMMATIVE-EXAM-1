function myself(firstname,lastname,age,subject)
{   this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.subject=subject;
    this.introduce= function introduce(){
        console.log(`Hello, I am ${this.firstname} ${this.lastname} `)
    }
    this.enrolled=function enrolled(){
        console.log(`I am enrolled in ${this.subject}`)
    }

}

let myself1= new myself("Gerard","Tolentino",22,"ISC2609");
myself1.introduce();
myself1.enrolled();
