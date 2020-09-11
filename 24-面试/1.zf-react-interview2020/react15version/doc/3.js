function deepSync(dir) {
    console.log(dir);
    fs.readdirSync(dir).forEach(file => {
        let child = path.join(dir, file);
        let stat = fs.statSync(child);
        if (stat.isDirectory()) {
            deepSync(child);
        } else {
            console.log(child);
        }
    });
}

let tree = {
    value: 'A',
    left: {
        value: 'B',
        left: {
            value: 'D',

        },
        right: {
            value: 'E'
        }
    },
    right: {
        value: 'C',
        left: {
            value: 'F',

        },
        right: {
            value: 'G'
        }
    }
}
let depth = 0;
function visit(tree) {
    depth++;
    if (tree) {
        console.log(depth, tree.value);
        visit(tree.left);
        visit(tree.right);
    }
    depth--;
}
visit(tree);
console.log(depth);
