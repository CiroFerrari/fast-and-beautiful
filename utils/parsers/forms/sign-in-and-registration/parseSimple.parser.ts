import { SimpleProps } from "@/interfaces";

export const parseSimple = (data: any): SimpleProps => {

  return {
    component: data?.component || '',
    logo: {
      src: data?.logo?.src || '',
      alt: data?.logo?.alt || '',
      width: data?.logo?.width || 0,
      height: data?.logo?.height || 0,
    },
    title: data?.title || '',
    emailInput: {
      label: data?.emailInput?.label || '',
      placeholder: data?.emailInput?.placeholder || '',
    },
    passwordInput: {
      label: data?.passwordInput?.label || '',
      placeholder: data?.passwordInput?.placeholder || '',
      forgotPassword: {
        label: data?.passwordInput?.forgotPassword?.label || '',
        href: data?.passwordInput?.forgotPassword?.href || '',
      }
    },
    submitButton: {
      text: data?.submitButton?.text || '',
      variant: data?.submitButton?.variant || '',
    },
    signUpContent: {
      text: data?.signUpContent?.text || '',
      link: {
        label: data?.signUpContent?.link?.label || '',
        href: data?.signUpContent?.link?.href || '',
      }
    },
  };
};
