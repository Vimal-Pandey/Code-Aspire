import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/remixicon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
// Navbar CSS
import "../styles/navbar.css";
// Footer CSS
import "../styles/footer.css";
// Globals CSS
import "../styles/globals.css";
// Responsive CSS
import "../styles/responsive.css";

import Head from "next/head";
import ScrollToTop from "@/components/Layout/ScrollToTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>
          Code Aspire 
        </title>
        <meta 
          name="viewport" 
          content="initial-scale=1.0, width=device-width" 
        />
        <meta name="keywords" content="webdesign,website,web design,kanpur,mobile,ios,android,startup,india,noida,vector microstock,design,logo,illustrations,application,business,card,business card,web development,web design india,web development india,web design usa,web design kanpur,web development kanpur,web design company,web development in the uk,illustration design,stock images,agency,web design in the uk,e-commerce,specialists uk,corporate internet services india,internet consultant india,content,management india,designers india,application development leeds,database development,design services,usability,accessibility,web development leeds,india web site design,web solutions,website design,website solutions,leeds website development,india web,website build,ria,flex,flash,actionscript,actionscript3,as2,as3,ajax,html,dhtml,css,xhtml,mysql,sql java,asp,.net,server,consultants,web agency,web development agency,html5,css3,iphone,blackberry,symfony,joomla,php,crm,cms,wordpress,ex-yahoo,adobe,rich internet application,web application,flash animation,adobe flash,adobe flex,air,adobe air,microformats,semantic,markup,ebook,publishing,print,media,ffmpeg,video,transcoding,technologist">
      </Head>

      <Component {...pageProps} />

      <ScrollToTop />
    </>
  );
}

export default MyApp;
