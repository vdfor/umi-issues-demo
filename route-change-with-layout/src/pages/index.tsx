import React, {useEffect} from 'react';
import { history } from 'umi';
import styles from './index.less';

export default () => {
  useEffect(() => {
    console.log('index page useEffect 执行');
  }, []);
  
  return (
    <div>
      <h1 onClick={() => history.push('/page-one')} className={styles.title}>这是IndexPage，点击跳转到PageOne</h1>
    </div>
  );
}
