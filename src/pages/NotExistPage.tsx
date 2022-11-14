import { useNavigate } from 'react-router-dom';
import styles from '../styles/notExistPage.module.css';

function NotExistPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <p className={styles.title}>해당 페이지가 존재하지 않습니다.</p>
      <button
        className={styles.btn}
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
}

export default NotExistPage;
