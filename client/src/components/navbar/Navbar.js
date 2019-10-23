import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  menuItems: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '1%',
    marginRight: '1%',
  },

  appBar: {
    backgroundColor: '#F5F5F5',
  },

  leftGroup: {
    display: 'flex',
    flexDirection: 'row',
    color: '#7BAD2C',
  },

  title: {
    marginLeft: '10px',
  },

  buttons: {
    color: '#7BAD2C',
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        fill="#7BAD2C"
        d="M17.6642802,17.7193774 L13.9340078,13.4941634 L15.3642023,13.4941634 C15.7849027,13.4941634 16.1570428,13.2607004 16.3344747,12.884358 C16.5119066,12.5089494 16.4535409,12.0784436 16.181323,11.7614008 L12.5332296,7.51750973 L13.882179,7.51750973 C14.3070817,7.51750973 14.6899611,7.26770428 14.8561868,6.88202335 C15.0205447,6.50241245 14.943035,6.06070039 14.6582101,5.75766537 L9.50941634,0.272217899 C9.22785992,-0.0289494163 8.70256809,-0.0289494163 8.42054475,0.272217899 L3.27128405,5.75766537 C2.98645914,6.06070039 2.90941634,6.50241245 3.07330739,6.88202335 C3.23953307,7.26770428 3.62287938,7.51750973 4.0477821,7.51750973 L5.39673152,7.51750973 L1.74817121,11.7623346 C1.47688716,12.0789105 1.4185214,12.5089494 1.59548638,12.8848249 C1.77291829,13.2607004 2.14459144,13.4941634 2.56575875,13.4941634 L3.99595331,13.4941634 L0.265680934,17.7193774 C-0.0144747082,18.0364202 -0.0779766537,18.4706615 0.0994552529,18.8521401 C0.274552529,19.2280156 0.659766537,19.4708171 1.08046693,19.4708171 L7.47081712,19.4708171 L7.47081712,20.6124514 L6.05649805,22.8723735 C5.80809339,23.3691829 6.16949416,23.9537743 6.72466926,23.9537743 L11.2052918,23.9537743 C11.7604669,23.9537743 12.1218677,23.3691829 11.873463,22.8723735 L10.459144,20.6124514 L10.459144,19.4708171 L16.8494942,19.4708171 C17.2701946,19.4708171 17.6554086,19.2280156 17.8305058,18.8521401 C18.0079377,18.4706615 17.9444358,18.0364202 17.6642802,17.7193774 Z"
      />
    </SvgIcon>
  );
}

const Navbar = () => {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.menuItems}>
            <div className={classes.leftGroup}>
              <HomeIcon
                color="primary"
                style={{ width: '20px', height: '35px' }}
                viewBox="0 0 20 30"
              />
              <Typography variant="h6" className={classes.title}>
                Deforestation Dashboard
              </Typography>
            </div>

            <div>
              <Button
                className={classes.buttons}
                containerElement={<Link to="/" />}
                linkButton={true}
              >
                Log out{' '}
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.menuItems}>
          <div className={classes.leftGroup}>
            <HomeIcon
              color="primary"
              style={{ width: '20px', height: '35px' }}
              viewBox="0 0 20 30"
            />
            <Typography variant="h6" className={classes.title}>
              Deforestation Dashboard
            </Typography>
          </div>

          <div>
            <Button
              className={classes.buttons}
              containerElement={<Link to="/signUpPage" />}
              linkButton={true}
            >
              Sign up{' '}
            </Button>

            <Button
              className={classes.buttons}
              containerElement={<Link to="/logInPage" />}
              linkButton={true}
            >
              Log in{' '}
            </Button>

            <Button
              className={classes.buttons}
              containerElement={<Link to="/" />}
              linkButton={true}
            >
              Log out{' '}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
