import { AnimatePresence } from 'framer-motion';
import React, { FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import GameListPage from '@pages/GameListPage/GameListPage';
import MainPage from '@pages/MainPage/MainPage';
import NotFound from '@pages/NotFound/NotFound';
import ToCurrenciesPage from '@pages/ToCurrenciesPage/ToCurrenciesPage';

/**
 * Root component of application routes.
 *
 * @param {boolean} pageTransitions      determines whether animated page
 *                                       transitions will be enabled.
 * @constructor
 */
const AppRoutes: FC<{
  pageTransitions?: boolean;
}> = ({ pageTransitions }) => {
  const location = useLocation();

  /**
   * This component contains all application routes.
   *
   * Add new routes here.
   *
   * @constructor
   */
  const RoutesNode: FC<unknown> = () => {
    return (
      <Routes location={location} key={location.pathname}>
        <Route path={'*'} element={<NotFound />} />

        <Route path={'/index.html'} element={<MainPage />} />

        <Route path={'/games'} element={<GameListPage />} />

        <Route path={'/to-currencies'} element={<ToCurrenciesPage />} />
      </Routes>
    );
  };

  return pageTransitions ? (
    <AnimatePresence>
      <RoutesNode key={location.pathname} />
    </AnimatePresence>
  ) : (
    <RoutesNode />
  );
};

export default AppRoutes;
