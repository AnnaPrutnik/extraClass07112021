import { useTranslation } from 'react-i18next';
import i18n from '../../services/i18n';
// import { useLocation } from 'react-router';

const HomePage = () => {
  const { t } = useTranslation();
//   const { state } = useLocation();

  const handleChange = e => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
    // console.dir(i18n);
    // state?.handleChangeLang(e.target.value);
  };

  return (
    <>
      <select
        name="select"
        onChange={handleChange}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="ru">Russian</option>
      </select>
      <h1> HomePage</h1>
      <p>{t('title')}</p>
    </>
  );
};

export default HomePage;
