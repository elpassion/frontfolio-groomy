const routes = {
  HOME: () => '/',
  VENUE: id => `/venues/${id}`,
};

export function getRoutePath(routeName, ...rest) {
  return routes[routeName](rest);
}
