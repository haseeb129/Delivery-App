import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import {
  Main as MainLayoutAdmin,
  Minimal as MinimalLayout
} from './Admin/layouts';
import {
  Main as MainLayoutMover,
  Minimal as MinimalLayoutMover
} from './Movers/layouts';
import {
  Main1 as Main12,
  BookNow as BookNowLayout,
  Reserve as ReserveLayout,
  Contact as ContactLayout,
  ThankYou as ThankYouLayout,
  MoreInfo as MoreInfoLayout,
  FinalCost as FinalCostLayout,
  LastDetail as LastDetailLayout,
  Review as ReviewLayout,
  Help as HelpLayout,
  FinalStep as FinalStepLayout
} from './layouts';

import {
  Dashboard as DashboardView,
  BookNow as BookNowView,
  Reserve as ReserveView,
  Contact as ContactView,
  ThankYou as ThankYouView,
  MoreInfo as MoreInfoView,
  FinalCost as FinalCostView,
  LastDetail as LastDetailView,
  Review as ReviewView,
  Help as HelpView,
  FinalStep as FinalStepView
} from './views';

import {
  Dashboard as DashboardAdmin,
  Category as CategoryView,
  ProductList as ProductListView,
  StoreList as StoreListView,
  Typography as TypographyView,
  AdminCommercial as AdminCommercialView,
  Orders as OrdersView,
  Vehical as VehicalView,
  Deliveries as DeliveriesView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as AdminSignInView,
  NotFound as NotFoundView,
  FormPasswordReset as FormPasswordResetView,
  AdminResidential as AdminResidentialView
} from './Admin/views';

import {
  Dashboard as DashboardMover,
  Category as CategoryViewMover,
  ProductList as ProductListViewMover,
  StoreList as StoreListViewMover,
  Typography as TypographyViewMover,
  MoverCommercial as MoverCommercialView,
  Orders as OrdersViewMover,
  Vehical as VehicalViewMover,
  Deliveries as DeliveriesViewMover,
  Account as AccountViewMover,
  Settings as SettingsViewMover,
  SignUp as SignUpViewMover,
  SignIn as SignInViewMover,
  NotFound as NotFoundViewMover,
  FormPasswordReset as FormPasswordResetViewMover,
  MoverResidential as MoverResidentialView
} from './Movers/views';

const Routes = () => {
  return (
    <div className="main-bg">
      <Switch> 
        <Redirect exact from="/" to="/dashboard" />
        <RouteWithLayout
          component={DashboardView}
          exact
          layout={Main12}
          path="/dashboard"
        />
        <RouteWithLayout
          component={BookNowView}
          exact
          layout={BookNowLayout}
          path="/booknow"
        />
        <RouteWithLayout
          component={ReserveView}
          exact
          layout={ReserveLayout}
          path="/reserve"
        />
        <RouteWithLayout
          component={ContactView}
          exact
          layout={ContactLayout}
          path="/contact"
        />
        <RouteWithLayout
          component={ThankYouView}
          exact
          layout={ThankYouLayout}
          path="/thankyou"
        />
        <RouteWithLayout
          component={MoreInfoView}
          exact
          layout={MoreInfoLayout}
          path="/moreinfo"
        />
        <RouteWithLayout
          component={FinalCostView}
          exact
          layout={FinalCostLayout}
          path="/finalcost"
        />
        <RouteWithLayout
          component={LastDetailView}
          exact
          layout={LastDetailLayout}
          path="/lastdetail"
        />
        <RouteWithLayout
          component={ReviewView}
          exact
          layout={ReviewLayout}
          path="/review"
        />
        <RouteWithLayout
          component={FinalStepView}
          exact
          layout={FinalStepLayout}
          path="/final-step"
        />
        <RouteWithLayout
          component={HelpView}
          exact
          layout={HelpLayout}
          path="/help"
        />

        {/* --------------ADMIN  ROUTES------------------------ */}
        <RouteWithLayout
          component={DashboardAdmin}
          exact
          layout={MainLayoutAdmin}
          path="/admin/Dashboard"
        />
        <RouteWithLayout
          component={AdminResidentialView}
          exact
          layout={MainLayoutAdmin}
          path="/admin/Residential"
        />
        <RouteWithLayout
          component={AdminCommercialView}
          exact
          layout={MainLayoutAdmin}
          path="/admin/Commercial"
        />
        <RouteWithLayout
          component={ProductListView}
          exact
          layout={MainLayoutAdmin}
          path="/admin/Products"
        />
        <RouteWithLayout
          component={StoreListView}
          exact
          layout={MainLayoutAdmin}
          path="/admin/Stores"
        />
        <RouteWithLayout
          component={FormPasswordResetView}
          exact
          layout={MainLayoutAdmin}
          path="/admin/Password"
        />
        <RouteWithLayout
          component={TypographyView}
          exact
          layout={MainLayoutAdmin}
          path="/admin/Typography"
        />
        <RouteWithLayout
          component={CategoryView}
          exact
          layout={MainLayoutAdmin}
          path="/admin/Category"
        />
        <RouteWithLayout
          component={OrdersView}
          exact
          layout={MainLayoutAdmin}
          path="/admin/Orders"
        />
        <RouteWithLayout
          component={DeliveriesView}
          exact
          layout={MainLayoutAdmin}
          path="/admin/Deliveries"
        />
        <RouteWithLayout
          component={VehicalView}
          exact
          layout={MainLayoutAdmin}
          path="/admin/Vehical"
        />
        <RouteWithLayout
          component={AdminSignInView}
          exact
          layout={MinimalLayout}
          path="/admin/Signin"
        />
        <RouteWithLayout
          component={NotFoundView}
          exact
          layout={MinimalLayout}
          path="/admin/Notfound"
        />
        {/* <RouteWithLayout
            component={AccountView}
            exact
            layout={MainLayoutAdmin}
            path="/admin/Account"
          />
          <RouteWithLayout
            component={SettingsView}
            exact
            layout={MainLayoutAdmin}
            path="/admin/Settings"
          /> */}
        {/* <RouteWithLayout
            component={SignUpView}
            exact
            layout={MinimalLayout}
            path="/admin/Signup"
          /> */}

        {/* --------------Movers  ROUTES------------------------ */}
        <RouteWithLayout
          component={DashboardMover}
          exact
          layout={MainLayoutMover}
          path="/mover/Dashboard"
        />
        <RouteWithLayout
          component={MoverResidentialView}
          exact
          layout={MainLayoutMover}
          path="/mover/Residential"
        />
        <RouteWithLayout
          component={MoverCommercialView}
          exact
          layout={MainLayoutMover}
          path="/mover/Commercial"
        />
        <RouteWithLayout
          component={ProductListViewMover}
          exact
          layout={MainLayoutMover}
          path="/mover/Products"
        />
        <RouteWithLayout
          component={StoreListViewMover}
          exact
          layout={MainLayoutMover}
          path="/mover/Stores"
        />
        <RouteWithLayout
          component={FormPasswordResetViewMover}
          exact
          layout={MainLayoutMover}
          path="/mover/Password"
        />
        <RouteWithLayout
          component={TypographyViewMover}
          exact
          layout={MainLayoutMover}
          path="/mover/Typography"
        />
        <RouteWithLayout
          component={CategoryViewMover}
          exact
          layout={MainLayoutMover}
          path="/mover/Category"
        />
        <RouteWithLayout
          component={OrdersViewMover}
          exact
          layout={MainLayoutMover}
          path="/mover/Orders"
        />
        <RouteWithLayout
          component={DeliveriesViewMover}
          exact
          layout={MainLayoutMover}
          path="/mover/Deliveries"
        />
        <RouteWithLayout
          component={VehicalViewMover}
          exact
          layout={MainLayoutMover}
          path="/mover/Vehical"
        />
        <RouteWithLayout
          component={AccountViewMover}
          exact
          layout={MainLayoutMover}
          path="/mover/Account"
        />
        <RouteWithLayout
          component={SettingsViewMover}
          exact
          layout={MainLayoutMover}
          path="/mover/Settings"
        />
        <RouteWithLayout
          component={SignUpViewMover}
          exact
          layout={MinimalLayoutMover}
          path="/mover/Signup"
        />
        <RouteWithLayout
          component={SignInViewMover}
          exact
          layout={MinimalLayoutMover}
          path="/mover/Signin"
        />
        <RouteWithLayout
          component={NotFoundViewMover}
          exact
          layout={MinimalLayoutMover}
          path="/mover/Notfound"
        />
      </Switch>
    </div>
  );
};

export default Routes;
