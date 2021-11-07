import i18n from '../../services/i18n';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Example = () => {
  const { t } = useTranslation();
  const location = useLocation();
  console.log(location);
  console.log('exam', i18n.language);

  return (
    <>
      <h2>Example</h2>
      <p>{t('message')}</p>
    </>
  );
};

export default Example;
