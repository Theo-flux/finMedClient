class Route {
  path: string;

  title: string;

  description: string;

  constructor(path: string, title: string, description: string) {
    this.path = path;
    this.title = title;
    this.description = description;
  }
}

class Routes {
  // landing
  HOME = new Route('/', 'Home', 'Home page.');
  ABOUT = new Route('/about', 'About', 'About page.');
}

const ROUTES = new Routes();

export default ROUTES;
