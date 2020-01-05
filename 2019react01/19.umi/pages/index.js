
import styles from './index.css';
//umi是一个集成的环境，里面集成了react全家桶
//import {Link} from 'react-router-dom';
import Link from 'umi/link';
export default function() {
  return (
    <div className={styles.normal}>
      <h1>首页</h1>
      <Link to="/profile">个人中心</Link>
    </div>
  );
}
