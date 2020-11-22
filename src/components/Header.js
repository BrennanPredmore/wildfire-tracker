import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const Header = () => {
  return (
    <header className='header'>
      <h1>
        <Icon icon={locationIcon} /> WildFire Tracker{' '}
        <Icon icon={locationIcon} />      </h1>
        <br /> <h3>(Powered by NASA)</h3> 

    </header>
  );
};

export default Header;
