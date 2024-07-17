import { useEffect } from 'react';

import * as RNLocalize from 'react-native-localize';

import i18n from '@/language/i18n';

const useLocales = () => {
  useEffect(() => {
    const locale = RNLocalize.getLocales()[0].languageCode;
    i18n.changeLanguage(locale);
  }, []);
};

export default useLocales;
