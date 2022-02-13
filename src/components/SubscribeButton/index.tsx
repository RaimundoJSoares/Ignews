import { useSession, signIn } from 'next-auth/react';
import styles from './styles.module.scss'

interface SubscribeButton {
  priceId: string;
}

export function SubscribeButton({priceId}: SubscribeButton) {
  const { data: session } = useSession();


  function handleSubscribe() {
    if (!session) {
      signIn('github')
      return;
    }

    //se estiver logado, faremos a criação da logou session
}
  return(
    <button
    type='button'
    className={styles.subscribeButton}
    onClick={h}
    >
      Subscribe Now
    </button>
  )
}