import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Company`.
 */
export type CompanyProps = SliceComponentProps<Content.CompanySlice>;

/**
 * Component for "Company" Slices.
 */
const Company = async ({ slice }: CompanyProps): Promise<JSX.Element> => {
  const client = createClient();
  const companyDetails = await Promise.all(
    slice.primary.workzone.map(async (item) => {
      if (isFilled.contentRelationship(item.work_experience)) {
        return await client.getByID<Content.WorkExperienceDocument>(
          item.work_experience.id,
        );
      }
    }),
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl">
        <PrismicText field={slice.primary.heading} />
      </h2>
      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="mt-20 grid gap-16">
        {companyDetails.map((company, index) =>
          company ? (
            <div
              key={company.id}
              className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-3 md:gap-8"
            >
              {/* Conditional rendering to alternate columns */}
              {index % 2 === 0 ? (
                <>
                  {/* Text in the left column */}
                  <div className="col-span-1 flex flex-col justify-center gap-4">
                    <h3 className="text-4xl">
                      <PrismicText field={company.data.company} />
                    </h3>
                    <div className="max-w-md">
                      <PrismicRichText field={company.data.description} />
                    </div>
                    <PrismicNextLink
                      document={company}
                      className="after:absolute after:inset-0 hover:underline"
                    >
                      Read About My <PrismicText field={company.data.company} />{" "}
                      Experience
                    </PrismicNextLink>
                  </div>
                  {/* Logo in the center column */}
                  <PrismicNextImage
                    field={company.data.logo_image}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="col-span-1 mx-auto rounded-xl max-h-44 max-w-44"
                  />
                  {/* Empty right column */}
                  <div className="col-span-1"></div>
                </>
              ) : (
                <>
                  {/* Empty left column */}
                  <div className="col-span-1"></div>
                  {/* Logo in the center column */}
                  <PrismicNextImage
                    field={company.data.logo_image}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="col-span-1 mx-auto rounded-xl max-h-44 max-w-44"
                  />
                  {/* Text in the right column */}
                  <div className="col-span-1 flex flex-col justify-center gap-4">
                    <h3 className="text-4xl">
                      <PrismicText field={company.data.company} />
                    </h3>
                    <div className="max-w-md">
                      <PrismicRichText field={company.data.description} />
                    </div>
                    <PrismicNextLink
                      document={company}
                      className="after:absolute after:inset-0 hover:underline"
                    >
                      Read About My <PrismicText field={company.data.company} />{" "}
                      Experience
                    </PrismicNextLink>
                  </div>
                </>
              )}
            </div>
          ) : null,
        )}
      </div>
    </Bounded>
  );
};

export default Company;
