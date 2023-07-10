import { HeroContainerProps } from "@/interfaces";

export const parseHeroContainer = (data: any): HeroContainerProps => {

  return {
    component: data?.component || '',
    logo: {
      src: data?.logo?.src || '',
      alt: data?.logo?.alt || '',
      width: data?.logo?.width || 0,
      height: data?.logo?.height || 0,
    },
    companyName: data?.companyName || '',
    navigation: data?.navigation || [],
    login: data?.login || {},
    title: data?.title || '',
    content: data?.content || '',
    ctaBanner: data?.ctaBanner || {},
    ctaButtonOne: data?.ctaButtonOne || {},
    ctaButtonTwo: data?.ctaButtonTwo || {},
  };
};
