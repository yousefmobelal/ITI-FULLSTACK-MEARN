function Employee(){
    this.getEmp = function(type){
        if(type === "fullTime"){
            return "100$ per hour"
        }else{
            return "70$ per hour"
        }
    }
}

function ProxyEmployee(){
    let emp = new Employee();
    let EmpCache = {};
    return{
        getEmp:function(type){
            if(!EmpCache[type]){
                EmpCache[type] = emp.getEmp(type);
            }
            console.log(EmpCache[type]);
            return EmpCache[type];
        }
    }
}

let proxy = new ProxyEmployee();
proxy.getEmp("fullTime")
proxy.getEmp("partTime")