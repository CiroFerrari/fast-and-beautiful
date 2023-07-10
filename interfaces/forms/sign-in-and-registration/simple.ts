export type SimpleProps = {
  component: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  emailInput: {
    label: string;
    placeholder: string;
  }
  passwordInput: {
    label: string;
    placeholder: string;
    forgotPassword: {
      label: string;
      href: string;
    }
  }
  submitButton: {
    text: string;
    variant: string;
  }
  signUpContent: {
    text: string;
    link: {
      label: string;
      href: string;
    }
  }
};
