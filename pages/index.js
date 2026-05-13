import Link from "next/link";
import Head from "next/head";
import SearchBox from "../components/SearchBox"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Email from '../components/Email'
import DestinationCard from "../components/DestinationCard";
import CustomersCard from "../components/CustomersCard";
import ServicesCard from "../components/ServicesCard";
import FeaturedCompanies from "../components/FeaturedCompanies";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          USA Party Characters & Party Rentals Directory | Find Event Entertainers
        </title>
        <meta
          name="description"
          content="Browse and discover party character companies including superheroes, princesses, mascots, and party rentals across the United States."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <main className="main-content">
        <Header />
        <div className="content-wrapper js-content-wrapper">

          {/* Hero Section with Template Styling */}
          <section data-anim-wrap className="masthead -type-1 z-5">
            {/* Background Image with Overlay */}
            <div data-anim-child="fade" className="masthead__bg">
              {/* <img src="/images/masthead-bg.webp" alt="Party characters background" /> */}
            </div>

            <div className="container">
              <div className="row justify-center">
                <div className="col-auto">

                  {/* Title + subtitle with animations */}
                  <div className="text-center hero">
                    <h1 data-anim-child="slide-up delay-4" className="text-60 lg:text-40 md:text-30 text-white">
                      USA Party Characters & Party Rentals
                    </h1>

                    <p data-anim-child="slide-up delay-5" className="text-white mt-10 md:mt-10">
                      Find the best princess, superhero, mascot, and party rental companies across the USA.
                    </p>
                  </div>

                  {/* CATEGORY TABS with animation */}
                  <div data-anim-child="slide-up delay-6" className="tabs -underline mt-60 js-tabs text-white">
                    <div className="hero tabs__controls d-flex x-gap-30 y-gap-20 justify-center sm:justify-start js-tabs-controls">

                      <Link
                        href="/companies?category=Princess"
                        className="tabs__button text-15 fw-500 text-white pb-4"
                      >
                        Princess
                      </Link>

                      <Link
                        href="/companies?category=Superhero"
                        className="tabs__button text-15 fw-500 text-white pb-4"
                      >
                        Superhero
                      </Link>

                      <Link
                        href="/companies?category=Mascot"
                        className="tabs__button text-15 fw-500 text-white pb-4"
                      >
                        Mascot
                      </Link>

                      <Link
                        href="/companies?category=Party Rentals"
                        className="tabs__button text-15 fw-500 text-white pb-4"
                      >
                        Party Rentals
                      </Link>

                    </div>

                    {/* SEARCH BOX with proper template styling */}
                    <div className="tabs__content mt-20 md:mt-20 js-tabs-content">
                      <div className="tabs__pane -tab-item-1 is-tab-el-active">
                        <div className="mainSearch -w-900 bg-white  py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100">
                          <SearchBox />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Featured Companies Section - New Template-Styled Component */}
        <FeaturedCompanies />

        <ServicesCard />
        <CustomersCard />
        {/* <DestinationCard /> */}
        <Email />
        <Footer />
      </main>
    </>
  );
}
