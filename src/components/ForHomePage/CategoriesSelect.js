import { makeStyles, createTheme } from '@material-ui/core/styles';
import { Fade, Link } from '@material-ui/core';
import normalDress from '../../images/eye-for-ebony-QhoDs-dFIdE-unsplash.jpg';
import kidsDress from '../../images/mieke-campbell-TTRpTEY2Q6o-unsplash.jpg';
import partyDress from '../../images/samson-ejim-CPNPcCAeuaI-unsplash.jpg';

const useStyles = makeStyles({
  categorySection: {
    margin: '10em 0 10em 0',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxHeight: '100%',
    width: '100%',
  },

  category: {
    margin: 15,
    width: 1080 * 0.5,
    height: 1080,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kidCategory: {
    margin: 15,
    width: 210 * 1.5,
    height: 440 * 1.5,
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
    color: '#2A0800',
    width: 170,
    height: 68,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: '20px 10px',
    display: 'block',
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
        <div className={classes.category}>
          {' '}
          <p className={classes.description}>enfants</p>{' '}
          <img className={classes.image} src={kidsDress} alt="all day dress" />{' '}
        </div>
      </div>
    </>
  );
}
