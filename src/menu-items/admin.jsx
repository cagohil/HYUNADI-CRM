import {
  DashboardOutlined,
  TruckOutlined,
  BarChartOutlined,
  FileDoneOutlined,
  UserOutlined,
  LineChartOutlined,
  DollarOutlined,
  BankOutlined,
  UsergroupAddOutlined,
  CarOutlined,
  KeyOutlined
} from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  TruckOutlined,
  BarChartOutlined,
  FileDoneOutlined,
  UserOutlined,
  LineChartOutlined,
  DollarOutlined,
  BankOutlined,
  UsergroupAddOutlined,
  CarOutlined,
  KeyOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const admin = {
  id: 'admin',
  title: 'Admin',
  type: 'group',
  children: [
    {
      id: 'managecompanies',
      title: 'Manage Companies',
      type: 'item',
      url: '/admin',
      icon: icons.BankOutlined,
      breadcrumbs: false
    },
    {
      id: 'managedealer',
      title: 'Manage Dealer',
      type: 'item',
      url: '/admin',
      icon: icons.UserOutlined,
      breadcrumbs: false
    },
    {
      id: 'manageuser',
      title: 'Manage User',
      type: 'item',
      url: '/admin',
      icon: icons.UsergroupAddOutlined,
      breadcrumbs: false
    },
    {
      id: 'managevehicle',
      title: 'Manage Vehicle',
      type: 'item',
      url: '/admin',
      icon: icons.KeyOutlined,
      breadcrumbs: false
    }
  ]
};

export default admin;
