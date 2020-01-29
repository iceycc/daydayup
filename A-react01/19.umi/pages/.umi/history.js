// create history
const history = require('umi/_createHistory').default({
  basename: window.routerBase,
});
window.g_history = history;
export default history;
