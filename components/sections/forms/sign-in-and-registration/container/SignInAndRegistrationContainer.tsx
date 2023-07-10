import getData from "@/utils/firebase/firestore/getData";
import Simple from "../variants/Simple";
import { SimpleProps } from "@/interfaces";
import { parseSimple } from "@/utils/parsers/forms/sign-in-and-registration/parseSimple.parser";

export const SignInAndRegistrationContainer = async ({ section }: { section: string }) => {
  const content = await getData('sections', section);
  // const parsedContent: HeroContainerProps = parseHeroContainer(content);

  if (!content?.component) {
    return null;
  }

  switch (section) {
    case 'sign-in-and-registration-simple':
      const parsedContent: SimpleProps = parseSimple(content);
      console.log("parsedContent", parsedContent)
      return <Simple {...parsedContent} />;

    default:
      return null;
  }
};
