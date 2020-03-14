
const { override, addDecoratorsLegacy } = require("customize-cra");
module.exports = {
    webpack:override(
        addDecoratorsLegacy()
    )
}