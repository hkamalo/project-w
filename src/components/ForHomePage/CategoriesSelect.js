import { makeStyles, createTheme } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Fade, Link } from '@material-ui/core';
import normalDress from '../../images/eye-for-ebony-QhoDs-dFIdE-unsplash.jpg';
import kidsDress from '../../images/mieke-campbell-TTRpTEY2Q6o-unsplash.jpg';
import partyDress from '../../images/samson-ejim-CPNPcCAeuaI-unsplash.jpg';

const images = [
  {
    url: normalDress,
    title: 'Quotidien',
    width: '100%',
  },
  {
    url: partyDress,
    title: 'Soirée',
    width: '100%',
  },
  {
    url: kidsDress,
    title: 'Enfant',
    width: '100%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    border: 'none',
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    border: '0px',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
    transition: 'border 0.25s',
    '&::before, &::after': {
      // Set border to invisible, so we don't see a 4px border on a 0x0 element before the transition starts
      border: '2px solid transparent',
      width: 0,
      height: 0,
    },
    // This covers the top & right borders (expands right, then down)
    '&::before': {
      top: 0,
      left: 0,
    },
    // And this the bottom & left borders (expands left, then up)
    '&::after': {
      bottom: 0,
      right: 0,
    },
    '&:hover': {
      color: theme.palette.common.white,
    },
    // Hover styles
    '&:hover::before, &:hover::after': {
      width: '100%',
      height: '100%',
    },
    '&:hover::before': {
      borderTopColor: theme.palette.common.white, // Make borders visible
      borderRightColor: theme.palette.common.white,
      transition:
        '"width 0.25s ease-out", "height 0.25s ease-out 0.25s"',// And then height
    },
   '&:hover::after': {
      borderBottomColor: theme.palette.common.white, // Make borders visible
      borderLeftColor: theme.palette.common.white,
      transition:
        '"border-color 0s ease-out 0.5s", "width 0.25s ease-out 0.5s", "height 0.25s ease-out 0.75s"' // And finally height
    }

  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity 3s'),
  },
}));

// const useStyles = makeStyles({
//   categorySection: {
//     margin: '10em 0 10em 0',
//     display: 'flex',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     maxHeight: '100%',
//     width: '100%',

//   },

//   category: {
//     margin: 15,
//     width: 1080 * 0.5,
//     height: 1080,
//     textAlign: 'center',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   kidCategory: {
//     margin: 15,
//     width: 210 * 1.5,
//     height: 440 * 1.5,
//     textAlign: 'center',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   description: {
//     position: 'absolute',
//     textAlign: 'center',
//     color: '#2A0800',
//     width: 170,
//     height: 68,
//     backgroundColor: 'rgba(255,255,255)',
//     padding: '20px 10px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     fontFamily: 'Quicksand, sans-serif',
//     fontSize: 24,
//   },
// });

export default function CategoriesSelect() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );

  // return (
  //   <>
  //     <div className={classes.categorySection}>
  //       <div className={classes.category}>
  //         {' '}
  //         <p className={classes.description}>Quotidien</p>{' '}
  //         <img
  //           className={classes.image}
  //           src={normalDress}
  //           alt="all day dress"
  //         />{' '}
  //       </div>
  //       <div className={classes.category}>
  //         {' '}
  //         <p className={classes.description}>Soirée</p>{' '}
  //         <img className={classes.image} src={partyDress} alt="all day dress" />{' '}
  //       </div>
  //       <div className={classes.category}>
  //         {' '}
  //         <p className={classes.description}>Enfant</p>{' '}
  //         <img className={classes.image} src={kidsDress} alt="all day dress" />{' '}
  //       </div>
  //     </div>
  //   </>
  // );
}
