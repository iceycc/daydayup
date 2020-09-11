let page = 'signin';
let JS = `
import styles from './index.css';
export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page ${page}</h1>
    </div>
  );
}
`
let Css = `
.normal {
    background: #79F2EC;
  }
`
let fs = require('fs');
fs.mkdirSync(`./pages/${page}`);
fs.writeFileSync(`./pages/${page}/index.js`,JS);
fs.writeFileSync(`./pages/${page}/index.css`,Css);