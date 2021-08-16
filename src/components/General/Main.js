/* eslint-disable import/no-extraneous-dependencies */
import { useLocation } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Screen } from 'react-tiger-transition';
import RdvPage from '../../screens/RdvPage';
import SurMesurePage from '../../screens/SurMesurePage';
import HomePage from '../../screens/HomePage';
import PricesPage from '../../screens/PricesPage';

const useStyles = makeStyles({
  main: {
    background: '#FFFAEC',
    color: '#fff',
  },
});

export default function Main() {
  const location = useLocation();
  const classes = useStyles();

  return (
    <>
      <main className={classes.main}>
        <Route exact path="/">
          <Screen>
            <HomePage />
          </Screen>
        </Route>
        <Route exact path="/surmesure">
          <Screen>
            <SurMesurePage />
          </Screen>
        </Route>
        <Route exact path="/rendezvous">
          <Screen>
            <RdvPage />
          </Screen>
        </Route>
        <Route exact path="/tarifs">
          <Screen>
            <PricesPage />
          </Screen>
        </Route>
      </main>
    </>
  );
}
