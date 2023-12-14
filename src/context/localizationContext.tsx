import { ReactNode, createContext } from 'react';
import { Localization } from './types';
import localization from '../utils/utils';

interface LocalizationContextProps {
  children: ReactNode;
}

const localizationContext = createContext<Localization | null>(null);

const LocalizationContext = (props: LocalizationContextProps) => {
  return (
    <localizationContext.Provider value={localization}>
      {props.children}
    </localizationContext.Provider>
  );
};

export default LocalizationContext;
