import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import { getCompanies } from "../../lib/dataSource";
import CompanyCard from "../../components/CompanyCard";
import SearchBox from "../../components/SearchBox";
import FilterBar from "../../components/FilterBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Email from "../../components/Email";

export default function CompaniesPage() {
    const router = useRouter();

    const PAGE_SIZE = 9;
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    
    // Use state for filters instead of router query to prevent page reload
    const [filters, setFilters] = useState({
        search: "",
        categories: [], // Changed to array for multi-select
        state: "",
        rating: "",
        sort: ""
    });

    // Initialize filters from URL on mount
    useEffect(() => {
        const { search, category, state, rating, sort } = router.query;
        setFilters({
            search: search || "",
            categories: category ? (Array.isArray(category) ? category : [category]) : [],
            state: state || "",
            rating: rating || "",
            sort: sort || ""
        });
    }, []);

    // Update URL when filters change (without reloading)
    useEffect(() => {
        const query = {};
        if (filters.search) query.search = filters.search;
        if (filters.categories && filters.categories.length > 0) {
            query.category = filters.categories.join(',');
        }
        if (filters.state) query.state = filters.state;
        if (filters.rating) query.rating = filters.rating;
        if (filters.sort) query.sort = filters.sort;

        // Update URL without navigation
        const url = new URL(window.location.href);
        Object.keys(query).forEach(key => url.searchParams.set(key, query[key]));
        // Remove params that are empty
        ['search', 'category', 'state', 'rating', 'sort'].forEach(key => {
            if (!query[key]) url.searchParams.delete(key);
        });
        window.history.replaceState({}, '', url.toString());
    }, [filters]);

    // Get filtered companies
    const companies = getCompanies(filters);

    // Reset pagination on filter change
    useEffect(() => {
        setVisibleCount(PAGE_SIZE);
    }, [filters.search, filters.categories, filters.state, filters.rating, filters.sort]);

    // Initialize template scripts when component mounts or updates
    useEffect(() => {
        // Initialize all scripts needed for the page
        const initTemplateScripts = () => {
            if (typeof window !== "undefined") {
                // First, reveal animations if available
                if (window.RevealAnim && typeof window.RevealAnim.init === "function") {
                    window.RevealAnim.init();
                }
                
                // Then initialize all components (this handles the hamburger menu)
                if (window.initComponents && typeof window.initComponents === "function") {
                    window.initComponents();
                }
            }
        };

        // Initialize immediately for page reloads
        initTemplateScripts();

        // Also wait for fonts to be ready, then initialize again
        const timer = setTimeout(() => {
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(() => {
                    initTemplateScripts();
                });
            } else {
                initTemplateScripts();
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []); // Run once on mount (including after page reload)

    // Apply custom navbar background color for companies page only
    useEffect(() => {
        const header = document.querySelector('.js-header');
        
        if (header) {
            // Save original styles
            const originalHeaderBg = header.style.backgroundColor;
            
            // Set custom color for companies page
            header.style.backgroundColor = '#12357a';
            
            // Cleanup: restore original when leaving the page
            return () => {
                header.style.backgroundColor = originalHeaderBg;
            };
        }
    }, []);

    const visibleCompanies = companies.slice(0, visibleCount);

    /* ---------------- SEO LOGIC ---------------- */

    const titleParts = [];

    if (filters.search) titleParts.push(`"${filters.search}"`);
    if (filters.categories && filters.categories.length > 0) {
        titleParts.push(filters.categories.join(" & "));
    }
    if (filters.state) titleParts.push(filters.state);
    if (filters.rating) titleParts.push(`${filters.rating}+ Star`);

    const baseTitle = "Browse Party Characters & Party Rentals";
    const siteTitle =
        "USA Party Characters & Party Rentals Directory";

    const title =
        titleParts.length > 0
            ? `${baseTitle} – ${titleParts.join(" • ")} | ${siteTitle}`
            : `${baseTitle} | ${siteTitle}`;

    const description =
        titleParts.length > 0
            ? `Browse party characters and party rentals for ${titleParts.join(
                ", "
            )} across the USA.`
            : "Browse party characters and party rentals including superheroes, princesses, mascots, and event rentals across the USA.";

    /* ------------------------------------------- */

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <main className="main-content ">
                <div className="header-margin"></div>
                <Header />

                <section className="pt-40 pb-40 bg-light-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <h1 className="text-30 fw-600">Find Your Perfect Party Entertainment</h1>
                                </div>

                                <div className="mt-30">
                                    <SearchBox 
                                        initialValue={filters.search} 
                                        onSearch={(value) => setFilters(prev => ({ ...prev, search: value }))}
                                        fullWidth={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="layout-pt-md layout-pb-lg">
                    <div className="container">
                        <div className="row y-gap-30">
                            <div className="col-xl-3 col-lg-4 lg:d-none">
                                <FilterBar 
                                    filters={filters}
                                    onFilterChange={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))}
                                />
                            </div>

                            <div className="col-xl-9 col-lg-8">
                                <div className="row y-gap-10 justify-between items-center">
                                    <div className="col-auto">
                                        <div className="text-18">
                                            <span className="fw-500">{companies.length} companies</span> found
                                        </div>
                                    </div>

                                    <div className="col-auto">
                                        <div className="row x-gap-20 y-gap-20">
                                            <div className="col-auto d-none lg:d-block">
                                                <button 
                                                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                                                    className="button -blue-1 h-40 px-20 rounded-100 bg-blue-1-05 text-15 text-blue-1"
                                                >
                                                    <i className="icon-up-down text-14 mr-10"></i>
                                                    Filter
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-30"></div>

                                <div className="row y-gap-30">
                                    {companies.length === 0 && (
                                        <div className="col-12">
                                            <p className="text-center text-18">No companies found</p>
                                        </div>
                                    )}

                                    {visibleCompanies.map((company) => (
                                        <CompanyCard
                                            key={company.id}
                                            company={company}
                                        />
                                    ))}
                                </div>

                                {visibleCount < companies.length && (
                                    <div className="border-top-light mt-30 pt-30">
                                        <div className="row x-gap-10 y-gap-20 justify-center">
                                            <div className="col-auto">
                                                <button
                                                    onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                                                    className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                                                >
                                                    Load More <div className="icon-arrow-top-right ml-15"></div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mobile Filter Popup */}
                <div className={`filterPopup bg-white ${isFilterOpen ? '-is-active' : ''}`}>
                    <aside className="sidebar -mobile-filter">
                        <div onClick={() => setIsFilterOpen(false)} className="-icon-close">
                            <i className="icon-close"></i>
                        </div>

                        <FilterBar 
                            filters={filters}
                            onFilterChange={(key, value) => {
                                setFilters(prev => ({ ...prev, [key]: value }));
                            }}
                        />
                    </aside>
                </div>

                {/* Email newsletter section */}
                <Email />

                {/* Footer */}
                <Footer />
            </main>
        </>
    );
}
