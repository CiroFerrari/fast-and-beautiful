export type HeroContainerProps = {
  component: string;
  title: string;
  content: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  companyName: string;
  navigation: {
    name: string;
    href: string;
  }[];
  login: {
    text: string;
    href: string;
  };
  ctaBanner: {
    text: string;
    linkText: string;
    linkAction: string;
  };
  ctaButtonOne: {
    text: string;
    variant: string;
    action: string;
  };
  ctaButtonTwo: {
    text: string;
    variant: string;
    action: string;
  };
};
