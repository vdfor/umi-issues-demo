import React from 'react';
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>这是PageOne页面，点击浏览器回退按钮，回退到IndexPage，查看控制台会发现IndexPage的useEffect先于onRouteChange执行</h1>
    </div>
  );
}
