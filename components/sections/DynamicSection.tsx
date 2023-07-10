import { SignInAndRegistrationContainer } from "./forms/sign-in-and-registration/container/SignInAndRegistrationContainer";
import HeroContainer from "./page-sections/hero-sections/container/HeroContainer";

export const DynamicSection = ({ section }: any) => {
  console.log("Seccion", section)

  switch (section) {
    case 'hero-section-simple-centered':
      return <HeroContainer section={section} />

    case 'sign-in-and-registration-simple':
      return <SignInAndRegistrationContainer section={section} />

    default:
      return null;
  };
};
