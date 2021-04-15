import { GetStaticProps } from 'next';
import Head from 'next/head';

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>etsafafsa</time>
            <strong>gfdshfgnbdfn</strong>
            <p>gdfaghsdfgsdfg</p>
          </a>
          <a href="">
            <time>etsafafsa</time>
            <strong>gfdshfgnbdfn</strong>
            <p>gdfaghsdfgsdfg</p>
          </a>
          <a href="">
            <time>etsafafsa</time>
            <strong>gfdshfgnbdfn</strong>
            <p>gdfaghsdfgsdfg</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  
  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'pos')
  ], {
    fetch: ['pos.title', 'pos.content'],
    pageSize: 100,
  })

  return {
    props: {

    }
  }
}