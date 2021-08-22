const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
function FileListPlugin() {}
FileListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    // 在生成文件中，创建一个头部字符串：
    var filelist = 'In this build:\n\n';

    // 遍历所有编译过的资源文件，
    // 对于每个文件名称，都添加一行内容。
    for (var filename in compilation.assets) {
      filelist += ('- '+ filename +'\n');
    }

    // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    };

    callback();
  });
};
function ConsoleLogOnBuildWebpackPlugin(name) {
  this.name = name
}
ConsoleLogOnBuildWebpackPlugin.prototype.apply = function (compiler) {
  compiler.hooks.run.tap(pluginName, compilation => {
    console.log(this.name + "webpack 构建过程开始！");
  });
}

function HelloAsyncPlugin(options) {}
HelloAsyncPlugin.prototype.apply = function(compiler) {
  compiler.plugin("emit", function(compilation, callback) {

    // 做一些异步处理……
    setTimeout(function() {
      console.log("Done with async work...");
      let filelist = 'HelloAsyncPlugin Done with async work...'
      compilation.assets['HelloAsyncPlugin.md'] = {
        source: function() {
          return filelist;
        },
        size: function() {
          return filelist.length;
        }
      };
    callback();
    }, 1000);
  });
};
module.exports = {
  ConsoleLogOnBuildWebpackPlugin,
  FileListPlugin,
  HelloAsyncPlugin 
}