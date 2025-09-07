import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Discover unique places to stay, from cozy cabins to luxury villas. Your next adventure starts here."
        />
        <meta name="keywords" content="travel, accommodation, vacation rental, airbnb, hotels" />
      </Head>
      <body className="antialiased font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
