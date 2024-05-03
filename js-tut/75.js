//short syntax


const user1={
    name:"harshit",
    age:8,
    about(){
        console.log(this.name,this.age);
    }
}
user1.about()