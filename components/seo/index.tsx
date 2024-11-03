import Head from 'next/head';
import { FC } from 'react';

const SEO: FC = () => (
  <Head>
    <title>MEMEZ.GG</title>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@memezdotgg" />
    <meta name="twitter:title" content="MEMEZ.GG" />
    <meta name="twitter:description" content="Good Game" />
    <meta name="twitter:image" content="/memezbanner.jpeg" />
    <meta name="og:title" content="MEMEZ.GG" />
    <meta name="og:image" content="/memezbanner.jpeg" />
    <meta name="og:description" content="Good Game" />
    <link rel="icon" type="image/x-icon" href="/icon.webp" />
  </Head>
);

export default SEO;
