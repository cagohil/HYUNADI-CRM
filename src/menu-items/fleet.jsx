import {
  DashboardOutlined,
  TruckOutlined,
  BarChartOutlined,
  FileDoneOutlined,
  UserOutlined,
  LineChartOutlined,
  DollarOutlined,
  ScheduleOutlined,
  CarOutlined,
  FilterOutlined,
  FundViewOutlined
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
  ScheduleOutlined,
  CarOutlined,
  FilterOutlined,
  FundViewOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const fleet = {
  id: 'authentication',
  title: 'Fleet',
  type: 'group',
  children: [
    {
      id: 'fleet',
      title: 'Fleet List',
      type: 'item',
      url: '/fleet',
      icon: icons.TruckOutlined,
      breadcrumbs: false
    },
    {
      id: 'replacementschedule',
      title: 'Replacement Schedule',
      type: 'item',
      url: '/fleet',
      icon: icons.ScheduleOutlined,
      breadcrumbs: false
    },
    {
      id: 'maintenanceanalysis',
      title: 'Maintenance Analysis',
      type: 'item',
      url: '/fleet',
      icon: icons.CarOutlined,
      breadcrumbs: false
    },
    {
      id: 'fuelanalysis',
      title: 'Fuel Analysis',
      type: 'item',
      url: '/fleet',
      icon: icons.FilterOutlined,
      breadcrumbs: false
    },
    {
      id: 'funding',
      title: 'Funding/New Vehicle',
      type: 'item',
      url: '/fleet',
      icon: icons.FundViewOutlined,
      breadcrumbs: false
    }
  ]
};

export default fleet;
