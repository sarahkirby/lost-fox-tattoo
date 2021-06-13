import Head from 'next/head';

import COLORS from 'styles/colors';

const Meta = () => {
  const SITE_NAME = 'Lost Fox Tattoo';
  const SITE_DESCRIPTION = 'Contemporary tattoo studio in Kings Cross';
  const SITE_URL = 'TBC';
  return (
    <Head>
      <title key="title">{SITE_NAME}</title>
      <meta key="x-ua" httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width,initial-scale=1"
      />
      <meta key="author" name="author" content="Sarah Kirby" />
      <meta
        key="description"
        name="description"
        content="Contemporary tattoo studio in Kings Cross"
      />

      <meta key="og.locale" property="og:locale" content="en-gb" />
      <meta key="og.type" property="og:type" content="website" />
      <meta key="og.site_name" property="og:site_name" content="" />

      <meta key="og.title" property="og:title" content={SITE_NAME} />
      <meta key="og.url" property="og:url" content={SITE_URL} />
      <meta
        key="og.description"
        property="og:description"
        content={SITE_DESCRIPTION}
      />

      <meta
        key="twitter.card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter.title" name="twitter:title" content={SITE_NAME} />
      <meta
        key="twitter.description"
        name="twitter:description"
        content={SITE_DESCRIPTION}
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="256x256"
        href="/favicon/android-chrome-512x512.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color={COLORS.black}
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content={COLORS.black} />
      <meta name="msapplication-TileImage" href="/favicon/mstile-150x150.png" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content={COLORS.black} />
    </Head>
  );
};

export default Meta;
