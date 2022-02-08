import styles from './styles.module.scss';
import {FaGithub}  from 'react-icons/fa';
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const IsUserLoggedIn  = true;

  return IsUserLoggedIn ? (
    
    <button type="button"
    className={styles.signInButton}>
    <FaGithub color="#04d361"/>
      Raimundo Junior
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>

  ) : (
    
    <button type="button"
    className={styles.signInButton}>
    <FaGithub color="var(--yellow-500)"/>
      Sign In With Github
    </button>
  )

}