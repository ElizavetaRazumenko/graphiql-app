export type AvailableLanguages = 'english' | 'french';

export type Localization = Record<AvailableLanguages, PageTextData>;

export interface PageTextData {
  welcomePage: {
    title: string;
    subscription_1: string;
    subscription_2: string;
    subscription_3: string;
    about_member_1: MemberInfo;
    about_member_2: MemberInfo;
    about_member_3: MemberInfo;
  };
  loginPage: LoginPageData;
  registrationPage: RegistrationPage;
  mainPage: MainPage;
  errorBoundary: ErrorBoundary;
}

interface MemberInfo {
  name: string;
  description: string;
}

interface LoginPageData {
  email: string;
  password: string;
  submit: string;
}

interface RegistrationPage extends LoginPageData {
  name: string;
  passwordRepeat: string;
}

interface MainPage {
  queryEditor: string;
  variables: string;
  headers: string;
}

interface ErrorBoundary {
  errorMessage: string;
}
