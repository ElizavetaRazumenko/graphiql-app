export type AvailableLanguages = 'english' | 'french';

export type Localization = Record<AvailableLanguages, PageTextData>;

export interface PageTextData {
  header: Header;
  welcomePage: WelcomePage;
  loginPage: LoginPageData;
  registrationPage: RegistrationPage;
  mainPage: MainPage;
  documentation: Documentation;
  errorBoundary: ErrorBoundary;
}

interface Header {
  login: string;
  registration: string;
  mainPage: string;
  logoutText: string;
}

interface WelcomePage {
  title: string;
  subscription_1: string;
  subscription_2: string;
  subscription_3: string;
  about_member_1: MemberInfo;
  about_member_2: MemberInfo;
  about_member_3: MemberInfo;
}

interface MemberInfo {
  name: string;
  description: string;
}

interface LoginPageData {
  title: string;
  email: string;
  password: string;
  submit: string;
  schemaErrorMessages: LoginSchemaErrorMessages;
}

interface RegistrationPage
  extends Omit<LoginPageData, 'schemaErrorMessages'>,
    PasswordStrength {
  name: string;
  passwordRepeat: string;
  schemaErrorMessages: RegisterSchemaErrorMessages;
}

export interface LoginSchemaErrorMessages {
  requiredEmail: string;
  incorrectEmail: string;
  requiredPass: string;
}

export interface RegisterSchemaErrorMessages extends LoginSchemaErrorMessages {
  requiredName: string;
  uppercaseFirstLetter: string;
  oneNumInPass: string;
  oneLetterInPass: string;
  oneCharInPass: string;
  minCharNum: string;
  requiredConfirmPass: string;
  passwordMismatch: string;
}

interface PasswordStrength {
  passwordStrengthText: string;
  grades: string[];
}
interface MainPage {
  queryEditor: string;
  changeEndpoint: string;
  acceptEndpoint: string;
  variables: string;
  headers: string;
  errorsMessages: MainPageErrors;
  schemaErrorMessages: GraphQLSchemaErrorMessage;
}

export interface MainPageErrors {
  notSupportCORS: string;
  errorWhileCheckingCORS: string;
  unknownCORSerror: string;
  notSupportGraphQL: string;
  errorWhileCheckingGraphQL: string;
  unknownGraphQLerror: string;
  notAllowedHeaders: string;
  somethingWentWrong: string;
}

export interface GraphQLSchemaErrorMessage {
  requiredURL: string;
  invalidURL: string;
  requiredQuery: string;
  invalidQuery: string;
  invalidHeaders: string;
  invalidVariables: string;
}

interface Documentation {
  title: string;
  schemaParts: SchemaPart[];
}

interface SchemaPart {
  name: string;
  title: string;
}
interface ErrorBoundary {
  errorMessage: string;
}
