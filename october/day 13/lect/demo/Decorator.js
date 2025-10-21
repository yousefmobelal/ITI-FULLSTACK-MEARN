function User(name){
    this.name = name;
    this.display = function(){
        console.log(this.name);
    }
}

function UserDecorator(user,address){
    this.user = user;
    this.name = user.name;
    this.address = address;
    this.run = function(){
        console.log(this.name , this.address);
    }
}

let user1 = new User("ali");
user1.display()
let decorteduser = new UserDecorator(user1,"cairo");
decorteduser.run()