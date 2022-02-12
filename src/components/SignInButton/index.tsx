import styles from './styles.module.scss';
import {FaGithub}  from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react'; //next-auth/client was renamed to next-auth/react in v4

export function SignInButton() {
  const { data: session} = useSession() //se o usuario tem uma sessão ativa ou não

  return session ? (
    
    <button type="button"
    className={styles.signInButton} 
    onClick= {() => signOut()}
    >
    <FaGithub color="#04d361"/>
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>

  ) : (
    
    <button type="button"
    className={styles.signInButton}
    onClick={() => signIn('github')}
    >
    <FaGithub color="var(--yellow-500)"/>
      Sign In With Github
    </button>
  )

}