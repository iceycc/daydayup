/**
 * title: 个人中心
 * Routes:
 *   - ./PrivateRoute.js
 */
import styles from './profile.css';
// history.push goBack go(-1)
import router from 'umi/router';
export default function() {
  return (
    <div className={styles.normal}>
      <button onClick={()=>router.goBack()}>返回上一个路由</button>
      <h1>个人中心</h1>
    </div>
  );
}
