import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  actors: string;
  actor: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  actors: '/actors',
  actor: '/actors/:id',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'actor'> {
  actor: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  actor: (id) => generatePath(switchRoutes.actor, { id }),
};
