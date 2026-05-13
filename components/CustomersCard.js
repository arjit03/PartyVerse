'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomersCard() {
    const sliderRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !sliderRef.current) return;

        const initializeSlider = () => {
            if (window.Swiper) {
                const slider = new window.Swiper('.js-testimonials-slider-3', {
                    speed: 800,
                    cardsEffect: { slideShadows: true },
                    grabCursor: true,
                    lazy: { loadPrevNext: true },
                    scrollbar: { el: '.js-scrollbar', draggable: true },
                });

                const pagination = document.querySelector('.js-testimonials-slider-pag');
                if (pagination && slider) {
                    const current = pagination.querySelector('.js-current');
                    const all = pagination.querySelector('.js-all');

                    if (all && current) {
                        all.innerHTML = `0${slider.slides.length}`;
                        slider.on('slideChangeTransitionEnd', () => {
                            current.innerHTML = `0${slider.realIndex + 1}`;
                        });
                    }
                }

                return slider;
            }
        };

        const timer = setTimeout(initializeSlider, 100);
        return () => clearTimeout(timer);
    }, [mounted]);

    // Don't render slider content until client-side
    if (!mounted) {
        return (
            <section className="layout-pt-lg layout-pb-lg bg-blue-2">
                <div className="container">
                    <div className="row y-gap-40 justify-between">
                        <div className="col-xl-5 col-lg-6">
                            <h2 className="text-30">What our customers are<br /> saying us?</h2>
                            <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.</p>

                            <div className="row y-gap-30 pt-60 lg:pt-40">
                                <div className="col-sm-5 col-6">
                                    <div className="text-30 lh-15 fw-600">13m+</div>
                                    <div className="text-light-1 lh-15">Happy People</div>
                                </div>

                                <div className="col-sm-5 col-6">
                                    <div className="text-30 lh-15 fw-600">4.88</div>
                                    <div className="text-light-1 lh-15">Overall rating</div>

                                    <div className="d-flex x-gap-5 items-center pt-10">
                                        <div className="icon-star text-blue-1 text-10"></div>
                                        <div className="icon-star text-blue-1 text-10"></div>
                                        <div className="icon-star text-blue-1 text-10"></div>
                                        <div className="icon-star text-blue-1 text-10"></div>
                                        <div className="icon-star text-blue-1 text-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="layout-pt-lg layout-pb-lg bg-blue-2">
            <div data-anim-wrap className="container">
                <div className="row y-gap-40 justify-between">
                    <div data-anim-child="slide-up delay-1" className="col-xl-5 col-lg-6">
                        <h2 className="text-30">What our customers are<br /> saying us?</h2>
                        <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo.</p>

                        <div className="row y-gap-30 pt-60 lg:pt-40">
                            <div className="col-sm-5 col-6">
                                <div className="text-30 lh-15 fw-600">13m+</div>
                                <div className="text-light-1 lh-15">Happy People</div>
                            </div>

                            <div className="col-sm-5 col-6">
                                <div className="text-30 lh-15 fw-600">4.88</div>
                                <div className="text-light-1 lh-15">Overall rating</div>

                                <div className="d-flex x-gap-5 items-center pt-10">
                                    <div className="icon-star text-blue-1 text-10"></div>
                                    <div className="icon-star text-blue-1 text-10"></div>
                                    <div className="icon-star text-blue-1 text-10"></div>
                                    <div className="icon-star text-blue-1 text-10"></div>
                                    <div className="icon-star text-blue-1 text-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-anim-child="slide-up delay-2" className="col-lg-6">
                        <div
                            ref={sliderRef}
                            className="overflow-hidden js-testimonials-slider-3"
                            data-scrollbar
                        >
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="row items-center x-gap-30 y-gap-20">
                                        <div className="col-auto">
                                            <img src="/img/avatars/1.png" data-src="/img/avatars/1.png" alt="image" className="js-lazy" />
                                        </div>

                                        <div className="col-auto">
                                            <h5 className="text-16 fw-500">Annette Black</h5>
                                            <div className="text-15 text-light-1 lh-15">UX / UI Designer</div>
                                        </div>
                                    </div>

                                    <p className="text-18 fw-500 text-dark-1 mt-30 sm:mt-20">The place is in a great location in Gumbet. The area is safe and beautiful. The apartment was comfortable and the host was kind and responsive to our requests.</p>
                                </div>

                                <div className="swiper-slide">
                                    <div className="row items-center x-gap-30 y-gap-20">
                                        <div className="col-auto">
                                            <img src="/img/avatars/1.png" data-src="/img/avatars/1.png" alt="image" className="js-lazy" />
                                        </div>

                                        <div className="col-auto">
                                            <h5 className="text-16 fw-500">John Smith</h5>
                                            <div className="text-15 text-light-1 lh-15">Travel Blogger</div>
                                        </div>
                                    </div>

                                    <p className="text-18 fw-500 text-dark-1 mt-30 sm:mt-20">Amazing experience! The booking process was seamless and the customer service was outstanding. Will definitely use this service again for my next trip.</p>
                                </div>

                                <div className="swiper-slide">
                                    <div className="row items-center x-gap-30 y-gap-20">
                                        <div className="col-auto">
                                            <img src="/img/avatars/1.png" data-src="/img/avatars/1.png" alt="image" className="js-lazy" />
                                        </div>

                                        <div className="col-auto">
                                            <h5 className="text-16 fw-500">Sarah Johnson</h5>
                                            <div className="text-15 text-light-1 lh-15">Marketing Manager</div>
                                        </div>
                                    </div>

                                    <p className="text-18 fw-500 text-dark-1 mt-30 sm:mt-20">Highly recommend! Found the perfect vacation rental for our family. The photos matched reality and everything was as described. Great value for money.</p>
                                </div>

                            </div>

                            <div className="d-flex items-center mt-60 sm:mt-20 js-testimonials-slider-pag">
                                <div className="text-dark-1 fw-500 js-current">01</div>
                                <div className="slider-scrollbar bg-border ml-20 mr-20 w-max-300 js-scrollbar"></div>
                                <div className="text-dark-1 fw-500 js-all">03</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
