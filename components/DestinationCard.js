export default function DestinationCard() {
    return (
        <>
            {/* Inline scoped styles to override main.css line 13232 */}
            <style jsx>{`
                /* Override the justify-content center from main.css at max-width 575px */
                @media (max-width: 575px) {
                    .destination-card-section .tabs__controls {
                        justify-content: flex-start !important;
                    }
                }
                    .destination-card-section .tabs__button {
                         color: #000000 !important;
                            }
            `}</style>

            <section className="layout-pt-md layout-pb-lg destination-card-section">
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Destinations we love</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
                            </div>
                        </div>
                    </div>

                    <div className="tabs -pills pt-40 js-tabs">
                        <div className="tabs__controls d-flex js-tabs-controls">

                            <div>
                                <button className="tabs__button fw-500 text-15 px-30 py-15 rounded-4 js-tabs-button is-tab-el-active" data-tab-target=".-tab-item-1">Regions</button>
                            </div>

                            <div>
                                <button className="tabs__button fw-500 text-15 px-30 py-15 rounded-4 js-tabs-button " data-tab-target=".-tab-item-2">Cities</button>
                            </div>

                            <div>
                                <button className="tabs__button fw-500 text-15 px-30 py-15 rounded-4 js-tabs-button " data-tab-target=".-tab-item-3">Places of interest</button>
                            </div>

                        </div>

                        <div className="tabs__content pt-30 js-tabs-content">

                            <div className="tabs__pane -tab-item-1 is-tab-el-active">
                                <div className="row y-gap-20">

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Hawai</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Istanbul</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">San Diego</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Phuket</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Reykjavik</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Santorini</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Los Angeles</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">İbiza</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Boston</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Florence</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Mykonos</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">London</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Paris</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Dubai</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Krakow</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Jersey</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Prag</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Amsterdam</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Rome</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Miami</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className="tabs__pane -tab-item-2 ">
                                <div className="row y-gap-20">

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Hawai</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Istanbul</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">San Diego</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Phuket</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Reykjavik</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Santorini</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Los Angeles</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">İbiza</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Boston</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Florence</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Mykonos</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">London</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Paris</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Dubai</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Krakow</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Jersey</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Prag</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Amsterdam</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Rome</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Miami</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className="tabs__pane -tab-item-3 ">
                                <div className="row y-gap-20">

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Hawai</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Istanbul</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">San Diego</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Phuket</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Reykjavik</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Santorini</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Los Angeles</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">İbiza</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Boston</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Florence</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Mykonos</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">London</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Paris</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Dubai</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Krakow</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Jersey</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Prag</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Amsterdam</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Rome</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                    <div className="w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                        <a href="#" className="d-block">
                                            <div className="text-15 fw-500">Miami</div>
                                            <div className="text-14 text-light-1">12,683 properties</div>
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
