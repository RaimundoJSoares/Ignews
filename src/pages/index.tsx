import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home | ig.news</title>
    </Head>
    <main>
      <section>
        <span>👏 Hey, Welcome</span>
        <h1>News about the <span>React</span>World</h1>
        <p>Get the access to all publications <br/>
        <span>for $5.00 month</span>
        </p>
      </section>
      <img src="/images/avatar.svg" alt='avatar' />
      <SubscribeButton/>
    </main>
    </>
  )
}
