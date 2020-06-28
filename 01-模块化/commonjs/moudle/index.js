let wrap = function (script) {
  return Module.wrapper[0] + script + Module.wrapper[1];
};

const wrapper = [
  "(function (exports, require, module, __filename, __dirname) { ",
  "\n});",
];
