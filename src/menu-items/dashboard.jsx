// assets
import {
  DashboardOutlined,
  TruckOutlined,
  BarChartOutlined,
  FileDoneOutlined,
  UserOutlined,
  LineChartOutlined,
  DollarOutlined
} from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  TruckOutlined,
  BarChartOutlined,
  FileDoneOutlined,
  UserOutlined,
  LineChartOutlined,
  DollarOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'dashboard',
      title: 'Fleet',
      type: 'collapse',
      icon: icons.TruckOutlined,
      breadcrumbs: false,
      children: [
        {
          id: 'fleet-list',
          title: 'Fleet List',
          type: 'item',
          url: '/fleet',
          // icon: icons.TruckOutlined,
          breadcrumbs: false
        },
        {
          id: 'replacementschedule',
          title: 'Replacement Schedule',
          type: 'item',
          url: '/replacement-schedule',
          icon: icons.ScheduleOutlined,
          breadcrumbs: false
        },
        {
          id: 'maintenanceanalysis',
          title: 'Maintenance Analysis',
          type: 'item',
          url: '/maintenance-analysis',
          icon: icons.CarOutlined,
          breadcrumbs: false
        },
        {
          id: 'fuelanalysis',
          title: 'Fuel Analysis',
          type: 'item',
          url: '/fuel-analysis',
          icon: icons.FilterOutlined,
          breadcrumbs: false
        },
        {
          id: 'funding',
          title: 'Funding/New Vehicle',
          type: 'item',
          url: '/funding-new-vehicle',
          icon: icons.FundViewOutlined,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'analysis',
      title: 'Analysis Result',
      type: 'item',
      url: '/analysis-result',
      icon: icons.BarChartOutlined,
      breadcrumbs: false
    },
    {
      id: 'fuel',
      title: 'Fuel Price',
      type: 'item',
      url: '/fuel-price',
      icon: icons.DollarOutlined,
      breadcrumbs: false
    },
    {
      id: 'fuelEconomy',
      title: 'Fuel Economy',
      type: 'item',
      url: '/fuel-economy',
      icon: icons.LineChartOutlined,
      breadcrumbs: false
    },
    {
      id: 'reports',
      title: 'Reports',
      type: 'item',
      url: '/reports',
      icon: icons.FileDoneOutlined,
      breadcrumbs: false
    },
    {
      id: 'admin',
      title: 'Admin',
      type: 'collapse',
      icon: icons.UserOutlined,
      breadcrumbs: false,
      children: [
        {
          id: 'managecompanies',
          title: 'Manage Companies',
          type: 'item',
          url: '/manage-companies',
          // icon: icons.BankOutlined,
          breadcrumbs: false
        },
        {
          id: 'managedealer',
          title: 'Manage Dealer',
          type: 'item',
          url: '/manage-dealer',
          // icon: icons.UserOutlined,
          breadcrumbs: false
        },
        {
          id: 'manageuser',
          title: 'Manage User',
          type: 'item',
          url: '/manage-user',
          // icon: icons.UsergroupAddOutlined,
          breadcrumbs: false
        },
        {
          id: 'managevehicle',
          title: 'Manage Vehicle',
          type: 'item',
          url: '/manage-vehicle',
          // icon: icons.KeyOutlined,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default dashboard;
