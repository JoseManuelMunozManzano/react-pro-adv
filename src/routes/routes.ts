import { LazyExoticComponent } from 'react';

import { lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[];
}

// Lazy Load por componentes

export const routes: Route[] = [
  {
    path: '/lazyload',
    component: lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout')),
    name: 'LazyLoading Nested',
  },
  // Si seleccionamos en el menú de la aplicación No Lazy Loading y recargamos, entonces en la pestaña Network no veremos el chunk
  // LazyLayout.chunk.js
  {
    path: '/no-lazy',
    component: NoLazy,
    name: 'No Lazy Loading',
  },
];
