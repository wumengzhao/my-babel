const babel = require('@babel/core')
const types = require('@babel/types')
const code = `const fn = (a, b) => { return a + b }` // const fn = function(a, b) { return a + b }
// 箭头函数转普通函数
const arrowFnPlugin = {
  // 访问者模式
  visitor: {
    // 当访问到某个路径的时候进行匹配
    ArrowFunctionExpression(path) {
      // 拿到节点然后替换节点
      const node = path.node
      // 拿到函数的参数
      let params = path.node.params;
      let blockStatement = path.node.body;
      let func = types.functionExpression(null, params, blockStatement, false, false)
      // 替换原来的函数
      path.replaceWith(func);
    },
  },
}
const r = babel.transform(code, {
  plugins: [arrowFnPlugin],
})
console.log('r.code', r.code); // const fn = function (a, b) { return a + b; };
