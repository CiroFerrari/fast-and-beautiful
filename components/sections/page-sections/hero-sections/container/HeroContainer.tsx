import getData from "@/utils/firebase/firestore/getData";
import { parseHeroContainer } from "@/utils/firebase/parsers";
import { HeroContainerProps } from "@/interfaces";
import SimpleCentered from "../variants/SimpleCentered";

export default async function HeroContainer({ section }: { section: string }) {
  const content = await getData('sections', 'hero-section-simple-centered');
  const parsedContent: HeroContainerProps = parseHeroContainer(content);
  console.log(parsedContent)

  if (!parsedContent?.component) {
    return null;
  }

  switch (section) {
    case 'hero-section-simple-centered':
      return <SimpleCentered {...parsedContent} />;

    default:
      return null;
  }

};
