## mobx
- [mobx中文文档](https://cn.mobx.js.org/)
## create-react-app配置装饰器
- [关于最新create-react-app使用react-app-rewired2.x添加webpack配置](https://www.cnblogs.com/zyl-Tara/p/10635033.html)
- [react-app-rewired](https://github.com/timarney/react-app-rewired/) + [customize-cra](https://github.com/arackaf/customize-cra)
    ```js
    const { override, addDecoratorsLegacy } = require("customize-cra");
    module.exports = override(
        addDecoratorsLegacy()
    );
    ```