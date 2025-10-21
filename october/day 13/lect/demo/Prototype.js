function Customer(task,status){
    this.task = task;
    this.status = status;
    this.running = function(){
        console.log(this.task , this.status);
    }
}
function CustomerPrototype(proto){
    this.proto = proto;
    this.clone = function(){
        let customer = new Customer();
        customer.task = proto.task;
        customer.status = proto.status
        return customer;
    }
}
let customer = new Customer("running","in progress");
let proto = new CustomerPrototype(customer);
let clonedCustomer =proto.clone();
clonedCustomer.running()
