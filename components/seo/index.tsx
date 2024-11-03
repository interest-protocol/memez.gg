import Head from 'next/head';
import { FC } from 'react';

const SEO: FC = () => (
  <Head>
    <title>MEMEZ.GG</title>
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@memezdotgg" />
    <meta property="twitter:title" content="MEMEZ.GG" />
    <meta property="twitter:description" content="Good Game" />
    <meta property="twitter:image" content="/memezbanner.png" />
    <meta property="og:title" content="MEMEZ.GG" />
    <meta property="og:description" content="Good game" />
    <meta property="og:image" content="/memezbanner.png" />
    <link rel="icon" type="image/x-icon" href="/icon.webp" />
  </Head>
);

export default SEO;
