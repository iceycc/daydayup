function hasOwnProperty(obj,prop){
    return Object.prototype.hasOwnProperty.call(obj,prop);
}

module.exports = {
    has:hasOwnProperty
}
