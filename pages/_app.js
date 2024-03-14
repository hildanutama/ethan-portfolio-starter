import '../styles/globals.css';

import Layout from '../components/Layout';
import Transition from '../components/Transition';
import Head from 'next/head';

import { useRouter } from 'next/router';

import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
    <Head>
        <title>Hildan Utama Portfolio</title>
        <link rel="icon" href="/LOG.svg" />
      </Head>
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'> 
          <Transition/>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
    </>
  );
}

export default MyApp;
