import Link from "next/link";
import Image from "next/image";

export default function FeaturedCompanyCard({ company }) {
  return (
    <Link href={`/companies/${company.slug}`} className="hotelsCard -type-1">
      <div className="hotelsCard__image">
        <div className="cardImage ratio ratio-1:1">
          <div className="cardImage__content">
            <Image
              className="rounded-4 col-12"
              src={company.images[0]}
              alt={company.name}
              width={400}
              height={400}
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Featured badge only */}
          {company.featured && (
            <div className="cardImage__leftBadge">
              <div className="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-blue-1 text-white">
                Featured
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hotelsCard__content mt-10">
        <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
          <span>{company.name}</span>
        </h4>

        <p className="text-light-1 lh-14 text-14 mt-5">
          {company.city}, {company.state}
        </p>

        <div className="d-flex items-center mt-20">
          <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
            {company.rating}
          </div>
          <div className="text-14 text-light-1 ml-10">
            {company.review_count} reviews
          </div>
        </div>

        <div className="mt-5">
          <div className="text-14 text-blue-1 fw-500">
            {company.categories.join(', ')}
          </div>
        </div>
      </div>
    </Link>
  );
}
