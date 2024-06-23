import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import StarGrid from "@/components/StarGrid";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <div>
      <StarGrid />
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="relative">
          <PrismicRichText field={slice.primary.heading} />
          <PrismicRichText field={slice.primary.body} />
          <ButtonLink field={slice.primary.button_link}>
            <>{slice.primary.button_label}</>
          </ButtonLink>
          <PrismicNextImage field={slice.primary.image} />
        </div>
      </Bounded>
    </div>
  );
};

export default Hero;
