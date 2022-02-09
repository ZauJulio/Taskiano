import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Logo from '../components/Logo';
import Particles from '../components/pages/Root/Particles';

import styles from '../styles/root.module.scss';

const Root: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Particles />

      <div className={styles.logo}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <h1 className={styles.logoText}>TASKIANO</h1>

        <button
          className={styles.loginBtn}
          onClick={() => router.push('/login')}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Root;
