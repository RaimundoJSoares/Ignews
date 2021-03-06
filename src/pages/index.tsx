import { GetStaticProps } from 'next'
import Head from 'next/head'
import { stripe } from '../components/services/stripe';
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({product}: HomeProps ) {
  return (
    <>
    <Head>
      <title>Home | ig.news</title>
    </Head>
    <main className={styles.contentContainer}>
      <section className={styles.hero}>
        <span>👏 Hey, Welcome</span>
        <h1>News about the <span>React </span>World</h1>
        <p>Get the access to all publications <br/>
        <span>for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId}/>
      </section>
      <img src="/images/avatar.svg" alt="avatar" />
    </main>
    </>
  )
}
export const getStaticProps : GetStaticProps = async () => {
  const  price = await stripe.prices.retrieve('price_1KRksYKs7Tu9g7COghBJk3ii')

    const product = {
      priceId : price.id,
      amount: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount/100),
    }

  return {
    props: {
      product,
    }, revalidate : 60 * 60 * 24  //24 horas
  }
}