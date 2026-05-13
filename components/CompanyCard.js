import Link from "next/link";
import Image from "next/image";

export default function CompanyCard({ company }) {
    return (
        <div className="col-12">
            <div className="border-top-light pt-30">
                <div className="row x-gap-20 y-gap-20">
                    <div className="col-md-auto">
                        <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                            <div className="cardImage__content">
                                <Link href={`/companies/${company.slug}`}>
                                    <Image
                                        className="rounded-4 col-12"
                                        src={company.images[0]}
                                        alt={company.name}
                                        width={250}
                                        height={250}
                                        style={{ objectFit: "cover" }}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md">
                        <h3 className="text-18 lh-16 fw-500">
                            <Link href={`/companies/${company.slug}`}>
                                {company.name}
                            </Link>
                        </h3>

                        <div className="row x-gap-10 y-gap-10 items-center pt-10">
                            <div className="col-auto">
                                <p className="text-14">
                                    {company.city}, {company.state}
                                </p>
                            </div>
                        </div>

                        <div className="text-14 lh-15 mt-20">
                            <div className="text-light-1">{company.description}</div>
                        </div>

                        {company.categories && company.categories.length > 0 && (
                            <div className="row x-gap-10 y-gap-10 pt-20">
                                {company.categories.map((cat) => (
                                    <div key={cat} className="col-auto">
                                        <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                                            {cat}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="col-md-auto text-right md:text-left">
                        <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                            <div className="col-auto">
                                <div className="text-14 lh-14 fw-500">
                                    {company.rating >= 4.5 ? "Excellent" : 
                                     company.rating >= 4.0 ? "Very Good" : 
                                     company.rating >= 3.5 ? "Good" : "Average"}
                                </div>
                                <div className="text-14 lh-14 text-light-1">
                                    {company.review_count} reviews
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
                                    {company.rating}
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <Link
                                href={`/companies/${company.slug}`}
                                className="button -md -dark-1 bg-blue-1 text-white mt-24"
                            >
                                View Details{" "}
                                <div className="icon-arrow-top-right ml-15"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
