import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
// const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
// const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const Fleet = Loadable(lazy(() => import('pages/fleet/FleetList')));
const AnalysisResult = Loadable(lazy(() => import('pages/extra-pages/AnalysisResult')));
const FuelPrice = Loadable(lazy(() => import('pages/extra-pages/FuelPrice')));
const FuelEconomy = Loadable(lazy(() => import('pages/extra-pages/FuelEconomy')));
const Reports = Loadable(lazy(() => import('pages/extra-pages/Reports')));
const Admin = Loadable(lazy(() => import('pages/extra-pages/Admin')));

const ManageVehicle = Loadable(lazy(() => import('pages/admin/ManageVehicle')));
const ManageDealer = Loadable(lazy(() => import('pages/admin/ManageDealer')));
const ManageUser = Loadable(lazy(() => import('pages/admin/ManageUser')));
const ManageCompanies = Loadable(lazy(() => import('pages/admin/ManageCompanies')));

const FleetList = Loadable(lazy(() => import('pages/fleet/FleetList')));
const FuelAnalysis = Loadable(lazy(() => import('pages/fleet/FuelAnalysis')));
const FundingNewVehicle = Loadable(lazy(() => import('pages/fleet/FundingNewVehicle')));
const MaintenanceAnalysis = Loadable(lazy(() => import('pages/fleet/MaintenanceAnalysis')));
const ReplacementSchedule = Loadable(lazy(() => import('pages/fleet/ReplacementSchedule')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'reports',
      element: <Reports />
    },
    {
      path: 'fleet',
      element: <Fleet />
    },
    {
      path: 'analysis-result',
      element: <AnalysisResult />
    },
    {
      path: 'fuel-price',
      element: <FuelPrice />
    },
    {
      path: 'fuel-economy',
      element: <FuelEconomy />
    },
    {
      path: 'admin',
      element: <Admin />
    },
    {
      path: 'manage-vehicle',
      element: <ManageVehicle />
    },
    {
      path: 'manage-dealer',
      element: <ManageDealer />
    },
    {
      path: 'manage-user',
      element: <ManageUser />
    },
    {
      path: 'manage-companies',
      element: <ManageCompanies />
    },

    {
      path: 'fleet-list',
      element: <FleetList />
    },
    {
      path: 'fuel-analysis',
      element: <FuelAnalysis />
    },
    {
      path: 'funding-new-vehicle',
      element: <FundingNewVehicle />
    },
    {
      path: 'maintenance-analysis',
      element: <MaintenanceAnalysis />
    },
    {
      path: 'replacement-schedule',
      element: <ReplacementSchedule />
    }
  ]
};

export default MainRoutes;
