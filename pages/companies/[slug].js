import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { getCompanyBySlug } from "../../lib/dataSource";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Email from "../../components/Email";


export default function CompanyDetailPage() {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) return null;

    const company = getCompanyBySlug(slug);

    if (!company) return <p>Company not found</p>;

    // Form state
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};

        const emailRegex = /\S+@\S+\.\S+/;

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(form.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!form.message.trim()) {
            newErrors.message = "Message is required";
        } else if (form.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        alert("Quote request submitted!");
        setForm({
            name: "",
            email: "",
            message: "",
        });
        setErrors({});
    }

    // Initialize template scripts when component mounts
    useEffect(() => {
        const initTemplateScripts = () => {
            if (typeof window !== "undefined") {
                if (window.RevealAnim && typeof window.RevealAnim.init === "function") {
                    window.RevealAnim.init();
                }

                if (window.initComponents && typeof window.initComponents === "function") {
                    window.initComponents();
                }
            }
        };

        initTemplateScripts();

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
    }, []);

    // Apply custom navbar background color
    useEffect(() => {
        const header = document.querySelector('.js-header');

        if (header) {
            const originalHeaderBg = header.style.backgroundColor;
            header.style.backgroundColor = '#12357a';

            return () => {
                header.style.backgroundColor = originalHeaderBg;
            };
        }
    }, []);

    return (
        <>
            <Head>
                <title>
                    {company.name} | USA Party Characters & Party Rentals Directory
                </title>

                <meta
                    name="description"
                    content={`${company.name} offers ${company.categories.join(
                        ", "
                    )} services in ${company.city}, ${company.state}.`}
                />

                <meta
                    property="og:title"
                    content={company.name}
                />

                <meta
                    property="og:description"
                    content={`${company.name} offers ${company.categories.join(
                        ", "
                    )} services in ${company.city}, ${company.state}.`}
                />

                <meta
                    property="og:url"
                    content={`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${router.asPath}`}
                />

                <meta
                    property="og:image"
                    content={`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${company.images[0]}`}
                />
            </Head>

            <main className="main-content">
                <div className="header-margin"></div>
                <Header />

                {/* Breadcrumb Section */}
                <section className="py-10 d-flex items-center bg-light-2">
                    <div className="container">
                        <div className="row y-gap-10 items-center justify-between">
                            <div className="col-auto">
                                <div className="row x-gap-10 y-gap-5 items-center text-14 text-light-1">
                                    <div className="col-auto">
                                        <div className="">Home</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="">{'>'}</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="">Companies</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="">{'>'}</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-dark-1">{company.name}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-auto">
                                <a href="/companies" className="text-14 text-blue-1 underline">All Companies</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Header and Gallery Section */}
                <section className="pt-40">
                    <div className="container">
                        <div className="row y-gap-20 justify-between items-end">
                            <div className="col-auto">
                                <div className="row x-gap-20 items-center">
                                    <div className="col-auto">
                                        <h1 className="text-30 sm:text-25 fw-600">{company.name}</h1>
                                    </div>
                                </div>

                                <div className="row x-gap-20 y-gap-20 items-center">
                                    <div className="col-auto">
                                        <div className="d-flex items-center text-15 text-light-1">
                                            <i className="icon-location-2 text-16 mr-5"></i>
                                            {company.city}, {company.state}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-auto">
                                <div className="row x-gap-15 y-gap-15 items-center">
                                    <div className="col-auto">
                                        <div className="d-flex items-center">
                                            <div className="text-14 text-right mr-10">
                                                <div className="lh-15 fw-500">Rating</div>
                                                <div className="lh-15 text-light-1">{company.review_count} reviews</div>
                                            </div>

                                            <div className="size-40 flex-center bg-blue-1 rounded-4">
                                                <div className="text-14 fw-600 text-white">{company.rating}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-auto">
                                        <a href={`tel:${company.phone}`} className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
                                            Contact Now <div className="icon-arrow-top-right ml-15"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Grid - Using company images */}
                        <div className="galleryGrid -type-1 pt-30">
                            <div className="galleryGrid__item relative d-flex">
                                <Image
                                    src={company.images[0]}
                                    alt={company.name}
                                    width={800}
                                    height={600}
                                    className="rounded-4"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />

                                <div className="absolute px-20 py-20 col-12 d-flex justify-end">
                                    <button className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1">
                                        <i className="icon-heart text-16"></i>
                                    </button>
                                </div>
                            </div>

                            {company.images[1] && (
                                <div className="galleryGrid__item">
                                    <Image
                                        src={company.images[1]}
                                        alt={company.name}
                                        width={400}
                                        height={300}
                                        className="rounded-4"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            )}

                            {company.images[0] && (
                                <div className="galleryGrid__item">
                                    <Image
                                        src={company.images[0]}
                                        alt={company.name}
                                        width={400}
                                        height={300}
                                        className="rounded-4"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            )}

                            {company.images[1] && (
                                <div className="galleryGrid__item">
                                    <Image
                                        src={company.images[1]}
                                        alt={company.name}
                                        width={400}
                                        height={300}
                                        className="rounded-4"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            )}

                            {company.images[0] && (
                                <div className="galleryGrid__item relative d-flex">
                                    <Image
                                        src={company.images[0]}
                                        alt={company.name}
                                        width={400}
                                        height={300}
                                        className="rounded-4"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Company Details Section */}
                <section className="pt-30 mb-40">
                    <div className="container">
                        <div className="row y-gap-30">
                            <div className="col-xl-8">
                                <div className="row y-gap-40">
                                    <div className="col-12">
                                        <h3 className="text-22 fw-500">Company Highlights</h3>
                                        <div className="row y-gap-20 pt-30">
                                            {company.categories.map((category, index) => (
                                                <div key={index} className="col-lg-3 col-6">
                                                    <div className="text-center">
                                                        <i className="icon-star text-24 text-blue-1"></i>
                                                        <div className="text-15 lh-1 mt-10">{category}</div>
                                                    </div>
                                                </div>
                                            ))}

                                            <div className="col-lg-3 col-6">
                                                <div className="text-center">
                                                    <i className="icon-location-2 text-24 text-blue-1"></i>
                                                    <div className="text-15 lh-1 mt-10">{company.city}</div>
                                                </div>
                                            </div>


                                            <div className="col-lg-3 col-6">
                                                <div className="text-center">
                                                    <i className="icon-check text-24 text-blue-1"></i>
                                                    <div className="text-15 lh-1 mt-10">Verified Business</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="overview" className="col-12">
                                        <h3 className="text-22 fw-500 pt-40 border-top-light">About {company.name}</h3>
                                        <p className="text-dark-1 text-15 mt-20">
                                            {company.description}
                                        </p>
                                    </div>

                                    <div className="col-12">
                                        <h3 className="text-22 fw-500 pt-40 border-top-light">Services Offered</h3>
                                        <div className="row y-gap-10 pt-20">
                                            {company.categories.map((category, index) => (
                                                <div key={index} className="col-md-6">
                                                    <div className="d-flex x-gap-15 y-gap-15 items-center">
                                                        <i className="icon-check"></i>
                                                        <div className="text-15">{category} Entertainment</div>
                                                    </div>
                                                </div>
                                            ))}

                                            <div className="col-md-6">
                                                <div className="d-flex x-gap-15 y-gap-15 items-center">
                                                    <i className="icon-check"></i>
                                                    <div className="text-15">Birthday Parties</div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="d-flex x-gap-15 y-gap-15 items-center">
                                                    <i className="icon-check"></i>
                                                    <div className="text-15">Special Events</div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="d-flex x-gap-15 y-gap-15 items-center">
                                                    <i className="icon-check"></i>
                                                    <div className="text-15">Professional Service</div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="d-flex x-gap-15 y-gap-15 items-center">
                                                    <i className="icon-check"></i>
                                                    <div className="text-15">Customizable Packages</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="px-24 py-20 rounded-4 bg-green-1">
                                            <div className="row x-gap-20 y-gap-20 items-center">
                                                <div className="col-auto">
                                                    <div className="flex-center size-60 rounded-full bg-white">
                                                        <i className="icon-star text-yellow-1 text-30"></i>
                                                    </div>
                                                </div>

                                                <div className="col-auto">
                                                    <h4 className="text-18 lh-15 fw-500">This company is highly rated!</h4>
                                                    <div className="text-15 lh-15">{company.review_count} satisfied customers have reviewed this business.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <h3 className="text-22 fw-500 pt-40 border-top-light">Contact Information</h3>
                                        <div className="row y-gap-20 pt-20">
                                            <div className="col-md-6">
                                                <div className="d-flex x-gap-15 y-gap-15 items-center">
                                                    <i className="icon-phone text-20"></i>
                                                    <div className="text-15">
                                                        <strong>Phone:</strong> <a href={`tel:${company.phone}`}>{company.phone}</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="d-flex x-gap-15 y-gap-15 items-center">
                                                    <i className="icon-globe text-20"></i>
                                                    <div className="text-15">
                                                        <strong>Website:</strong> <a href={company.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="d-flex x-gap-15 y-gap-15 items-center">
                                                    <i className="icon-location-2 text-20"></i>
                                                    <div className="text-15">
                                                        <strong>Location:</strong> {company.city}, {company.state}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quote Request Sidebar */}
                            <div className="col-xl-4">
                                <div className="ml-50 lg:ml-0">
                                    <div className="px-30 py-30 border-light rounded-4 shadow-4">
                                        <div className="d-flex items-center justify-between">
                                            <div className="">
                                                <span className="text-20 fw-500">Request a Quote</span>
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubmit} noValidate className="row y-gap-20 pt-30">
                                            <div className="col-12">
                                                <div className="form-input">
                                                    <input
                                                        className="text-black"
                                                        type="text"
                                                        name="name"
                                                        placeholder=" "
                                                        value={form.name}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="lh-1 text-16 text-light-1">Your Name</label>
                                                </div>
                                                {errors.name && <p className="text-red-1 text-14 mt-5">{errors.name}</p>}
                                            </div>

                                            <div className="col-12">
                                                <div className="form-input">
                                                    <input
                                                        className="text-black"
                                                        type="email"
                                                        name="email"
                                                        placeholder=" "
                                                        value={form.email}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="lh-1 text-16 text-light-1">Your Email</label>
                                                </div>
                                                {errors.email && <p className="text-red-1 text-14 mt-5">{errors.email}</p>}
                                            </div>

                                            <div className="col-12">
                                                <div className="form-input">
                                                    <textarea
                                                        className="text-black"
                                                        name="message"
                                                        placeholder=" "
                                                        value={form.message}
                                                        onChange={handleChange}
                                                        maxLength={1000}
                                                        rows={5}
                                                    ></textarea>
                                                    <label className="lh-1 text-16 text-light-1">Event Details</label>
                                                </div>
                                                <small className="text-light-1">{form.message.length}/1000</small>
                                                {errors.message && <p className="text-red-1 text-14 mt-5">{errors.message}</p>}
                                            </div>

                                            <div className="col-12">
                                                <button type="submit" className="button h-60 px-24 -dark-1 bg-blue-1 text-white w-100">
                                                    Submit Request <div className="icon-arrow-top-right ml-15"></div>
                                                </button>
                                            </div>
                                        </form>

                                        <div className="text-14 text-light-1 mt-20">
                                            By submitting this form, you agree to be contacted by {company.name}.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Destination Card Section */}
                <Email />

                {/* Footer */}
                <Footer />
            </main>
        </>
    );
}
