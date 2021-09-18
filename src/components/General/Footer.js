/* eslint-disable jsx-a11y/anchor-is-valid */
import './FooterStyle.css';

import { makeStyles } from '@material-ui/core/styles';

import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    position: 'relative',
    overflow: 'hidden',
    marginTop: '6em',
    padding: '2em 0 ',
  },
  link: {
    fontSize: '1.25em',
    color: '#fff',
    '&:hover': {
      color: theme.palette.info.main,
    },
  },
  copylight: {
    color: '#fff',
    fontSize: '1em',
    '&:hover': {
      color: theme.palette.info.main,
    },
  },
}));

const Footer = () => {
  return (
    <footer className="container-fluid bg-grey py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 ">
                <div className="logo-part">
                  <h2>Logo</h2>
                  <p>Lyon</p>
                </div>
              </div>
              <div className="col-md-6 px-4">
                <h6>Nous suivre</h6>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true" />
                  <span> Facebook</span>
                </a>
                <br />
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true" />
                  <span> Instragram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 px-4">
                <h6>Générales</h6>
                <div className="row ">
                  <div className="col-md-6">
                    <ul>
                      <li>
                        {' '}
                        <a href="#">Qui sommes-nous ?</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#"> Help</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#"> Contact</a>{' '}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 px-4">
                    <ul>
                      <li>
                        {' '}
                        <a href="#"> Paiments</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#"> Livraison</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#"> Mentions légales</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#"> CGV</a>{' '}
                      </li>
                      <li>
                        {' '}
                        <a href="#"> Politiques de confidentialité</a>{' '}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <h6> Newsletter</h6>
                <form className="form-footer my-3">
                  <input
                    type="text"
                    placeholder="search here...."
                    name="search"
                  />
                  <input type="button" value="Go" />
                </form>
                <p>That's technology limitation of LCD monitors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
