import React, { memo, useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { FaUserCircle } from 'react-icons/fa';

import styles from './styles.module.scss';

interface ITopbar {
  className?: string;
}

function TopbarFC(props: ITopbar) {
  const [search, setSearch] = useState('');
  const [useImg, setUseImg] = useState(true);

  const user = useAuth((ctx) => ctx.user);
  const signOut = useAuth((ctx) => ctx.signOut);
  const deleteAccount = useAuth((ctx) => ctx.deleteAccount);

  return (
    <div className={`${styles.topbarContainer} ${props.className ?? ''}`}>
      <input
        type="text"
        value={search}
        placeholder="pesquisar"
        className={styles.searchBar}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={styles.userAvatar}>
        {user?.avatar && useImg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user?.avatar}
            alt="user_avatar"
            onError={() => setUseImg(false)}
          />
        ) : (
          <FaUserCircle onClick={signOut} />
        )}

        <div className={styles.userOptionsOverlay}>
          <div className={styles.userInfo}>
            <div className={styles.userName}>{user?.username}</div>
            <div className={styles.userEmail}>{user?.email}</div>
          </div>

          <div className={styles.options}>
            <button className={styles.deleteAccount} onClick={deleteAccount}>
              Apagar conta
            </button>

            <button className={styles.signOut} onClick={signOut}>
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Topbar = memo(TopbarFC);
export default Topbar;
