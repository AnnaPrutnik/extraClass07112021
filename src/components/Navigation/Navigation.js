import { NavLink } from 'react-router-dom';
import RoutesEx from '../Routes/RoutesEx';
import i18n from '../../services/i18n';

const Navigation = () => {
  //   const [lang, setLang] = useState(() => i18n.language);

  //   const handleChangeLang = value => {
  //     setLang(value);
  //   };
  return (
    <>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            };
          }}
        >
          HomePage
        </NavLink>
        <NavLink
          to={`/example/${i18n.language}`}
          state={i18n.language}
          style={({ isActive }) => {
            return {
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            };
          }}
        >
          Example
        </NavLink>
      </nav>
      <RoutesEx />
    </>
  );
};

export default Navigation;
