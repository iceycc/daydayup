let tree = {
    value: 'A',//0
    left: {
        value: 'B',//1
        left: {
            value: 'D',//2
        },
        right: {
            value: 'E'//2
        }
    },
    right: {
        value: 'C',//1
        left: {
            value: 'F',//2
        },
        right: {
            value: 'G'//2
        }
    }
}
let depth = -1;//深度也被称层级
function traverse(node) {
    depth++;
    if (node) {
        console.log(depth, node.value);//0
        traverse(node.left);
        traverse(node.right);
    }
    depth--;
}
function exec() {
    traverse(node);
}
//A B D E C F G
