import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import FeaturedCompanyCard from './FeaturedCompanyCard';
import { getCompanies } from '../lib/dataSource';

export default function FeaturedCompanies() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [companies, setCompanies] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const swiperRef = useRef(null);

  // Get all unique categories from companies
  const allCompanies = getCompanies();
  const categories = ['All', ...Array.from(new Set(allCompanies.flatMap(c => c.categories)))];

  // Filter companies based on selected category
  useEffect(() => {
    let filtered = allCompanies.filter(c => c.featured);

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(c => c.categories.includes(selectedCategory));
    }

    // Limit to only 10 featured cards
    setCompanies(filtered.slice(0, 10));
  }, [selectedCategory]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isDropdownOpen && !e.target.closest('.dropdown-wrapper')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  // Initialize Swiper ONCE when component mounts
  useEffect(() => {
    if (typeof window === 'undefined' || !window.Swiper) return;

    // Wait for DOM update
    const timer = setTimeout(() => {
      const swiperEl = document.querySelector('.js-featured-slider');
      if (!swiperEl || swiperRef.current) return; // Don't recreate if already exists

      swiperRef.current = new window.Swiper(swiperEl, {
        speed: 600,
        watchSlidesVisibility: true,
        loop: false,
        preloadImages: false,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,

        // Base config for screens below 575px
        width: 250,
        spaceBetween: 10,
        slidesPerView: 1,

        breakpoints: {
          1199: { slidesPerView: 4, width: null, spaceBetween: 30 },
          991: { slidesPerView: 3, width: null, spaceBetween: 30 },
          767: { slidesPerView: 2, width: null, spaceBetween: 30 },
          575: { slidesPerView: 2, width: null, spaceBetween: 30 },
        },

        lazy: {
          loadPrevNext: true,
        },

        navigation: {
          prevEl: '.js-featured-prev',
          nextEl: '.js-featured-next',
        },

        pagination: {
          el: '.js-featured-pag',
          bulletClass: 'pagination__item',
          bulletActiveClass: 'is-active',
          bulletElement: 'div',
          clickable: true
        },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy(true, true);
      }
    };
  }, []); // Only run once on mount

  // Update swiper when companies change
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.update) {
      setTimeout(() => {
        swiperRef.current.update();
        swiperRef.current.slideTo(0, 0); // Go to first slide without animation
      }, 50);
    }
  }, [companies]);

  return (
    <>
      {/* Custom CSS for responsive navigation and dropdown fix */}
      <style jsx>{`
        /* Navigation buttons visible at all screen sizes */
        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 4px;
          border: none;
          background-color: #000000;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-button:hover {
          background-color: #3554D1;
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Responsive navigation buttons for mobile */
        @media (max-width: 574px) {
          .nav-button {
            width: 32px !important;
            height: 32px !important;
            font-size: 10px !important;
          }

          .pagination-container {
            justify-content: center !important;
            margin-top: 30px !important;
          }
        }

        /* Responsive navigation buttons for tablets and below 767px */
        @media (max-width: 767px) {
          .nav-button {
            width: 32px !important;
            height: 32px !important;
            font-size: 10px !important;
          }

          .pagination-container {
            margin-top: 50px !important;
          }
        }

        /* More spacing for medium screens around 790px */
        @media (min-width: 768px) and (max-width: 991px) {
          .pagination-container {
            margin-top: 60px !important;
          }
        }

        /* Desktop spacing */
        @media (min-width: 992px) {
          .pagination-container {
            margin-top: 50px !important;
          }
        }

        /* Dropdown fixes */
        .dropdown-wrapper {
          position: relative;
        }

        /* Default dropdown width for desktop */
        .dropdown-button {
          min-width: 180px;
        }

        .dropdown-menu {
          min-width: 180px;
        }

        /* Full width dropdown below 768px (including 575-767px range) */
        @media (max-width: 767px) {
          .dropdown-wrapper {
            width: 100%;
          }

          .dropdown-button {
            width: 100% !important;
            min-width: 100% !important;
          }

          .dropdown-menu {
            width: 100% !important;
            min-width: 100% !important;
            left: 0;
            right: 0;
          }
        }

        .dropdown-button {
          cursor: pointer;
          user-select: none;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin-top: 5px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          min-width: 180px;
          max-width: 100%;
          z-index: 1000;
          display: none;
        }

        .dropdown-menu.active {
          display: block;
        }

        .dropdown-item {
          padding: 12px 15px;
          cursor: pointer;
          transition: background-color 0.2s;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .dropdown-item:hover {
          background-color: #f3f4f6;
        }

        .dropdown-item.selected {
          background-color: #EFF6FF;
          color: #3554D1;
          font-weight: 600;
        }
      `}</style>

      <section className="layout-pt-md layout-pb-md">
        <div data-anim="slide-up delay-1" className="container">
          <div className="row y-gap-10 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Featured Companies</h2>
                <p className="sectionTitle__text mt-5 sm:mt-0">
                  Discover top-rated party character and rental companies
                </p>
              </div>
            </div>

            <div className="col-md-auto col-12">
              <div className="dropdown-wrapper">
                <div
                  className="dropdown-button d-flex items-center rounded-4 border-light justify-between text-16 fw-500 px-20 h-50 text-14"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  style={{ cursor: 'pointer', minWidth: '180px' }}
                >
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{selectedCategory}</span>
                  <i className="icon icon-chevron-sm-down text-7 ml-10"></i>
                </div>

                <div className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
                  <div className="text-14">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className={`dropdown-item ${selectedCategory === category ? 'selected' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSelectedCategory(category);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden pt-40 sm:pt-20 js-featured-slider"
          >
            {companies.length > 0 ? (
              <>
                <div className="swiper-wrapper">
                  {companies.map((company) => (
                    <div className="swiper-slide" key={company.id}>
                      <FeaturedCompanyCard company={company} />
                    </div>
                  ))}
                </div>

                {/* Navigation and Pagination */}
                <div className="d-flex x-gap-15 items-center justify-center sm:justify-start pagination-container">
                  <div className="col-auto">
                    <button className="nav-button js-featured-prev">
                      <i className="icon icon-chevron-left text-12"></i>
                    </button>
                  </div>

                  <div className="col-auto">
                    <div className="pagination -dots text-border js-featured-pag"></div>
                  </div>

                  <div className="col-auto">
                    <button className="nav-button js-featured-next">
                      <i className="icon icon-chevron-right text-12"></i>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-40">
                <p className="text-18 text-light-1">No featured companies found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
