import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer = () =>{
    return (
        <Box mt={8}>
            <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
                Finaru Poroject
            </Link>{' '}
            {new Date().getFullYear()}
            {/* {'. Built with '}
            <Link color="inherit" href="https://material-ui.com/">
                Material-UI.
            </Link> */}
            </Typography>
        </Box>
      );
}

export default Footer