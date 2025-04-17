// app/layout.js

import ClientWrapper from "./components/ClientWrapper";

// import Preloader from "./components/Preloader";
export const metadata = {
  title: "Proshield - Cyber Security Services",
  description: "Proshield - Cyber Security Services HTML Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="Awaiken" />

        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.png"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />

        {/* Stylesheets */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/slicknav.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link rel="stylesheet" href="/css/custom.css" />
      </head>
      <body>
        {/* <Preloader/> */}
       <ClientWrapper> {children}</ClientWrapper>

        {/* Scripts */}
        <script src="/js/jquery-3.7.1.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/validator.min.js"></script>
        <script src="/js/jquery.slicknav.js"></script>
        <script src="/js/swiper-bundle.min.js"></script>
        <script src="/js/jquery.waypoints.min.js"></script>
        <script src="/js/jquery.counterup.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/SmoothScroll.js"></script>
        <script src="/js/parallaxie.js"></script>
        <script src="/js/gsap.min.js"></script>
        <script src="/js/magiccursor.js"></script>
        <script src="/js/SplitText.js"></script>
        <script src="/js/ScrollTrigger.min.js"></script>
        <script src="/js/jquery.mb.YTPlayer.min.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/function.js"></script>
      </body>
    </html>
  );
}
