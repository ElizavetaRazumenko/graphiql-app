import { ReactNode, createContext, useState } from 'react';
import { AvailableLanguages, PageTextData } from './types';
import localization from './localization';

interface LocalizationContextType {
  currentLanguage: AvailableLanguages;
  currentLocalization: PageTextData;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<AvailableLanguages>>;
}

interface LocalizationContextProps {
  children: ReactNode;
}

export const localizationContext = createContext<LocalizationContextType>(
  {} as LocalizationContextType,
);

const LocalizationContext = (props: LocalizationContextProps) => {
  const [currentLanguage, setCurrentLanguage] =
    useState<AvailableLanguages>('english');

  const value = {
    currentLanguage,
    currentLocalization: localization[currentLanguage],
    setCurrentLanguage,
  };

  return (
    <localizationContext.Provider value={value}>
      {props.children}
    </localizationContext.Provider>
  );
};

export default LocalizationContext;
