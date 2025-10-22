function Node(name){
    this.children = [];
    this.name = name;
}
Node.prototype = {
    add:function(child){
        this.children.push(child);
    },
    remove:function(child){
        let index = this.children.indexOf(child);
        this.children.splice(index,1)
    },
    getChild:function(i){
        return this.children[i]
    }
}

function Traverse(indent,node){
    console.log(Array(indent++).join("--")+node.name);
    for(let i=0;i<node.children.length;i++){
        Traverse(indent,node.getChild(i))
    }
}

let tree = new Node("tree");
let left = new Node("left")
let right = new Node("right")
let leftleft = new Node("leftleft")
let leftright = new Node("leftright")

tree.add(left);
tree.add(right)
left.add(leftleft)
left.add(leftright)
tree.remove(left)
Traverse(1,tree)
