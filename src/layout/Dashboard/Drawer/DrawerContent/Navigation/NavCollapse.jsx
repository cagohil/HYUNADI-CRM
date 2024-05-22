import PropTypes from 'prop-types';
import { useState } from 'react';
import { List, Collapse, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

// project import
import NavItem from './NavItem';

export default function NavCollapse({ item, level }) {
  const [open, setOpen] = useState(false);
  const textColor = 'text.primary';

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick} sx={{ pl: level * 3 }}>
        {item.icon && <ListItemIcon  sx={{ pr: level * 1.7, fontSize: 17, pl: level * 0.5, color: textColor}} >{<item.icon />}</ListItemIcon>}
        <ListItemText primary={item.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children.map((child) => (
            <NavItem key={child.id} item={child} level={level + 1} />
          ))}
        </List>
      </Collapse>
    </>
  );
}

NavCollapse.propTypes = {
  item: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired
};
