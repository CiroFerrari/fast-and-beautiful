import HeroContainer from "./page-sections/hero-sections/container/HeroContainer";

export const DynamicSection = ({ section }: any) => {
  console.log("Seccion", section)

  switch (section) {
    case 'hero-section-simple-centered':
      return <HeroContainer section={section} />

    default:
      return null;
  };
};
