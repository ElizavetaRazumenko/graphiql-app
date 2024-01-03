import { Localization } from './types';

const localization: Localization = {
  english: {
    header: {
      login: 'Login',
      registration: 'Registration',
      mainPage: 'Main Page',
      logoutText: 'Logout',
    },
    welcomePage: {
      title: 'Welcome to our final project GraphiQL',
      subscription_1:
        'We are very pleased to have taken part in this course and reached the finals. Team unity, perseverance and determination helped us overcome all difficulties and problems. And now we are proud to present our project to your attention. Enjoy!',
      subscription_2:
        'Our project was written using React + Vite and meets all the criteria specified in the conditions for completing this task',
      subscription_3: 'And now a little about the team members:',
      about_member_1: {
        name: 'Elizaveta Razumenko',
        description:
          'I graduated from BNTU with a degree in engineering, I have always loved exact sciences, but I also have many creative hobbies. Front-end development has helped me realize myself in both directions - analytical and creative; I am inspired by what I do. And I hope this hobby will become the main occupation of my life',
      },
      about_member_2: {
        name: 'Vitali Piadus',
        description:
          'Per Sir Arthur C. Clarke, any sufficiently advanced technology is indistinguishable from magic. So let me consider myself as an IT wizard 😊. My ultimate goal is to enlighten the world with the most advanced magic and bring satisfaction and happiness to every user. Bugs shall not pass!',
      },
      about_member_3: {
        name: 'Alexei Shmulevtsov',
        description:
          'I graduated from the Minsk College of Business in Minsk, I have been doing programming for more than a year, I like different sports and a lot of tea. I’m not sitting still, trying to get into the IT. I hope to become a first-class developer and a good person in the near future!',
      },
    },
    loginPage: {
      title: 'Login',
      email: 'Email',
      password: 'Password',
      submit: 'Submit',
      requiredEmail: 'Email is required',
      incorrectEmail: 'Please enter correct email',
      requiredPass: 'Password is required',
    },
    registrationPage: {
      title: 'Registration',
      name: 'Name',
      email: 'Email',
      password: 'Password',
      passwordRepeat: 'Password repeat',
      submit: 'Submit',
      requiredEmail: 'Email is required',
      incorrectEmail: 'Please enter correct email',
      requiredPass: 'Password is required',
      passwordStrengthText: 'password strength',
      grades: ['very weak', 'weak', 'medium', 'good', 'strong', 'very strong'],
    },
    mainPage: {
      queryEditor: 'Query editor',
      changeEndpoint: 'Change Endpoint',
      acceptEndpoint: 'Accept Endpoint',
      variables: 'Variables',
      headers: 'Headers',
      errorsMessages: {
        notSupportCORS: 'Entered endpoint does not support CORS',
        errorWhileCheckingCORS:
          'An error occurred while checking CORS support:',
        unknownCORSerror:
          'An unknown error occurred while checking CORS support',
        notSupportGraphQL:
          'Entered endpoint does not support Graph QL requests',
        errorWhileCheckingGraphQL:
          'An error occurred while checking GraphQL support:',
        unknownGraphQLerror:
          'An unknown error occurred while checking GraphQL support',
        notAllowedHeaders: 'headers are not allowed for the specified endpoint',
        somethingWentWrong: 'Something went wrong, please try again',
      },
    },
    documentation: {
      title:
        'A GraphQL schema provides a root type for each kind of operation.',
      schemaParts: [
        { name: 'queryType', title: 'Query Type' },
        { name: 'types', title: 'Types' },
        { name: 'mutationType', title: 'Mutation Type' },
        { name: 'subscriptionType', title: 'Subscription Type' },
        { name: 'directives', title: 'Directives' },
      ],
    },
    errorBoundary: {
      errorMessage: 'Oops! Something went wrong',
    },
  },
  french: {
    header: {
      login: 'Se connecter',
      registration: 'Inscription',
      mainPage: "Page d'accueil",
      logoutText: 'Se déconnecter',
    },
    welcomePage: {
      title: 'Bienvenue dans notre projet final Graphiql',
      subscription_1:
        "Nous sommes très heureux d'avoir participé à ce cours et avons atteint la finale. L'unité d'équipe, la persévérance et la détermination nous ont aidés à surmonter toutes les difficultés et toutes les problèmes. Et maintenant, nous sommes fiers de présenter notre projet à votre attention. Apprécier!",
      subscription_2:
        "Notre projet a été rédigé à l'aide de React + Vite et répond à tous les critères spécifiés dans les conditions pour accomplir cette tâche",
      subscription_3: "Et maintenant un peu sur les membres de l'équipe:",
      about_member_1: {
        name: 'Elizaveta Razumenko',
        description:
          "Je suis diplômé du BNTU avec un diplôme d'ingénieur, j'ai toujours aimé les sciences exactes, mais j'ai aussi de nombreux loisirs créatifs. Le développement front-end m'a aidé à me réaliser dans les deux sens : analytique et créatif ; Je suis inspiré par ce que je fais. Et j'espère que ce passe-temps deviendra l'occupation principale de ma vie",
      },
      about_member_2: {
        name: 'Vitali Piadus',
        description:
          "Selon Sir Arthur C. Clarke, toute technologie suffisamment avancée ne peut être distinguée de la magie. Alors laissez-moi me considérer comme un sorcier informatique 😊. Mon objectif ultime est d'éclairer le monde avec la magie la plus avancée et d'apporter satisfaction et bonheur à chaque utilisateur. Les bugs ne passeront pas !",
      },
      about_member_3: {
        name: 'Alexei Shmulevtsov',
        description:
          "Je suis diplômé du Minsk College of Business à Minsk, je fais de la programmation depuis plus d'un an, j'aime différents sports et beaucoup de thé. Je ne reste pas assis à essayer de me lancer dans l'informatique. J'espère devenir un développeur de premier ordre et une bonne personne dans un avenir proche !",
      },
    },
    loginPage: {
      title: 'Se connecter',
      email: 'E-mail',
      password: 'Password',
      submit: 'Soumettre',
      requiredEmail: "L'e-mail est requis",
      incorrectEmail: "Veuillez saisir l'e-mail correct",
      requiredPass: 'Mot de passe requis',
    },
    registrationPage: {
      title: 'Inscription',
      name: 'Nome',
      email: 'Email',
      password: 'Password',
      passwordRepeat: 'Répéter le mot de passe',
      submit: 'Soumettre',
      requiredEmail: "L'e-mail est requis",
      incorrectEmail: "Veuillez saisir l'e-mail correct",
      requiredPass: 'Mot de passe requis',
      passwordStrengthText: 'fiabilité du mot de passe',
      grades: [
        'très faible',
        'faible',
        'moyenne',
        'bien',
        'forte',
        'très fort',
      ],
    },
    mainPage: {
      queryEditor: 'Éditeur de requêtes',
      changeEndpoint: 'Modifier le point de terminaison',
      acceptEndpoint: 'Accepter le point de terminaison',
      variables: 'Variables',
      headers: 'En-têtes',
      errorsMessages: {
        notSupportCORS:
          'Le point de terminaison saisi ne prend pas en charge CORS',
        errorWhileCheckingCORS:
          "Une erreur s'est produite lors de la vérification de la prise en charge de CORS :",
        unknownCORSerror:
          "Une erreur inconnue s'est produite lors de la vérification du support CORS",
        notSupportGraphQL:
          'Le point de terminaison saisi ne prend pas en charge les requêtes Graph QL',
        errorWhileCheckingGraphQL:
          "Une erreur s'est produite lors de la vérification de la prise en charge de GraphQL :",
        unknownGraphQLerror:
          "Une erreur inconnue s'est produite lors de la vérification de la prise en charge de GraphQL",
        notAllowedHeaders:
          'les en-têtes ne sont pas autorisés pour le point de terminaison spécifié',
        somethingWentWrong: "Une erreur s'est produite. Veuillez réessayer",
      },
    },
    documentation: {
      title:
        "Un schéma GraphQL fournit un type racine pour chaque type d'opération.",
      schemaParts: [
        { name: 'queryType', title: 'Type de requête' },
        { name: 'types', title: 'Les types' },
        { name: 'mutationType', title: 'Type de mutation' },
        { name: 'subscriptionType', title: "Type d'abonnement" },
        { name: 'directives', title: 'Directives' },
      ],
    },
    errorBoundary: {
      errorMessage: "Oops! Quelque chose s'est mal passé",
    },
  },
};

export default localization;
