import React, { lazy } from 'react';
import { Suspense } from 'react';
import { Switch, useLocation } from 'react-router';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../ViewsAnimate.css';
import PrivateRoute from '../../routes/PrivateRoute';
import { Ripple } from 'react-spinners-css';

// views
const DashboardPage = lazy(() => import('../DashboardPage/DashboardPage'));
const StatsPage = lazy(() => import('../StatsPage/StatsPage'));
const UserPage = lazy(() => import('../UserPage/UserPage'));
const CurrencyPage = lazy(() => import('../CurrencyPage/CurrencyPage'));

function MainPageMobile() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="page">
        <SideBar />
        <div className="content">
          <Suspense
            fallback={
              <Ripple
                color="#fffefe"
                size="60"
                style={{
                  position: 'absolute',
                  top: '70%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            }
          >
            <TransitionGroup>
              <CSSTransition
                timeout={500}
                classNames="view"
                key={location.key}
                unmountOnExit
              >
                <Switch location={location}>
                  <PrivateRoute path="/" exact component={DashboardPage} />
                  <PrivateRoute path="/stats" exact component={StatsPage} />
                  <PrivateRoute path="/user" exact component={UserPage} />
                  <PrivateRoute
                    path="/currency"
                    exact
                    component={CurrencyPage}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default MainPageMobile;
