// let template = `
// <ul>
//   <% for(let i=0; i < data.supplies.length; i++) { %>
//     <li><%= data.supplies[i] %></li>
//   <% } %>
// </ul>
// `;

function compile(template){
  const evalExpr = /<%=(.+?)%>/g;
  const expr = /<%([\s\S]+?)%>/g;

  template = template
    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    .replace(expr, '`); \n $1 \n  echo(`');
  template = 'echo(`' + template + '`);';

  let script =
  `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

  return script;
}

// const parse = eval(compile(template))

// function parse(data) {
//   let output = "";

//   function echo(html) {
//     output += html;
//   }

//   echo(`
// <ul>
// `);
//   for (let i = 0; i < data.supplies.length; i++) {
//     echo(`
//   <li>`);
//     echo(data.supplies[i]);
//     echo(`</li>
// `);
//   }
//   echo(`
// </ul>
// `);

//   return output;
// }
