// material-ui
import MainLogo from '../../assets/images/logo.svg';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  return (
    <>
      <img src={MainLogo} alt="logo" width="140" />
    </>
  );
};

export default Logo;
