import { useAuth } from 'hooks/useAuth';
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation';
import { UserMenu } from '../UserMenu';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
