import { makeStyles, createTheme } from '@material-ui/core/styles';
import { Fade, Link } from '@material-ui/core';
import normalDress from '../../images/eye-for-ebony-QhoDs-dFIdE-unsplash.jpg';
import kidsDress from '../../images/mieke-campbell-TTRpTEY2Q6o-unsplash.jpg';
import partyDress from '../../images/samson-ejim-CPNPcCAeuaI-unsplash.jpg';

const useStyles = makeStyles({
  categorySection: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxHeight: '100vh',
  },

  category: {
    margin: 5,
    width: 640 * 0.6,
    height: 480 * 0.6,
    border: '1px solid blue',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kidCategory: {
    margin: 5,
    width: 640*0.9,
    height: 480*0.6,
    border: '1px solid yellow',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  description: {
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
  },
});
export default function CategoriesSelect() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.categorySection}>
        <div className={classes.category}>
          {' '}
          <p className={classes.description}>quotidien</p>{' '}
          <img
            className={classes.image}
            src={normalDress}
            alt="all day dress"
          />{' '}
        </div>
        <div className={classes.category}>
          {' '}
          <p className={classes.description}>fête/mariages</p>{' '}
          <img className={classes.image} src={partyDress} alt="all day dress" />{' '}
        </div>
        <div className={classes.kidCategory}>
          {' '}
          <p className={classes.description}>enfants</p>{' '}
          <img className={classes.image} src={kidsDress} alt="all day dress" />{' '}
        </div>
      </div>
    </>
  );
}
