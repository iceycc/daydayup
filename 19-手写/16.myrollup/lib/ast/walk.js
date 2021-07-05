function walk(ast, { enter, leave }) {
    visit(ast, null, enter, leave)
}
function visit(node, parent, enter, leave) {
    if (enter) {
        enter.call(null, node, parent)
    }
    let keys = Object.keys(node).filter(key => typeof node[key] === 'object');
    keys.forEach(key => {
        let value = node[key];
        if (Array.isArray(value)) {
            value.forEach(val => {
                visit(val, node, enter, leave);
            });
        } else if (value && value.type) {
            visit(value, node, enter, leave);
        }
    });
    if (leave) {
        leave(node, parent)
    }
}

module.exports = walk
