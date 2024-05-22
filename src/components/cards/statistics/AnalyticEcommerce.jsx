import PropTypes from 'prop-types';

// material-ui
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';

// assets
import RiseOutlined from '@ant-design/icons/RiseOutlined';
import FallOutlined from '@ant-design/icons/FallOutlined';
import { Link } from 'react-router-dom';
import Truck from 'assets/images/Fleet-List.gif'

const iconSX = { fontSize: '0.75rem', color: 'inherit', marginLeft: 0, marginRight: 0 };

export default function AnalyticEcommerce({ color = 'primary', title, count, percentage, isLoss, extra, path, icon }) {
  return (
    <>
      <Link style={{ textDecoration: "none" }} to={path}
      >
        <MainCard contentSX={{ p: 2.25 }} sx={{ '&:hover': { backgroundColor: '#76aeef1a', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px' } }}>
          <Stack spacing={0.5}>
            <Grid container alignItems="center">
              {percentage && (
                <Grid item>
                  <img src={`${icon}`} alt="" width="90" style={{ marginLeft: '40px', marginRight: '50px' }} />
                  {/* <Chip
                    variant="combined"
                    color={color}
                    icon={isLoss ? <FallOutlined style={iconSX} /> : <RiseOutlined style={iconSX} />}
                    label={`${percentage}%`}
                    sx={{ ml: 1.25, pl: 1 }}
                    size="small"
                  /> */}
                </Grid>
              )}
              <Grid item>
                <Typography variant="h6" color="text.secondary" style={{ marginBottom: "10px" }}>
                  {title}
                </Typography>
                <Typography variant="h4" color="inherit">
                  {count}
                </Typography>
                <Box sx={{ pt: 2.25 }}>
                  <Typography variant="caption" color="text.secondary">
                    You made an extra{' '}
                    <Typography variant="caption" sx={{ color: `${color || 'primary'}.main` }}>
                      {extra}
                    </Typography>{' '}
                    this year
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </MainCard>
      </Link>
    </>
  );
}

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.string,
  path: PropTypes.string,
  icon: PropTypes.string
};
