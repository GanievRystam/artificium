import {$} from '../Dom';
import {ActiveRoute} from './ActiveRoute';

export class Router {
    $placeholder:any;
    page:any;
    routes:any;
    constructor(selector:string, routes:any) {
      if (!selector) {
        throw new Error('Selector is not provided in Router');
      }
      this.$placeholder = $(selector);
      this.routes = routes;
      this.page = null;
      this.changePageHandler = this.changePageHandler.bind(this);
      this.init();
    }
    init() {
      window.addEventListener('hashchange', this.changePageHandler);
      this.changePageHandler();
    }
    changePageHandler() {
      if (this.page) {
        this.page.destroy();
      }
      const Page = ActiveRoute.path.includes('chat') ? this.routes.chat : this.routes.auth;
      this.page = new Page(ActiveRoute.param);
      this.$placeholder.clear();
      this.$placeholder.append(this.page.getRoot());
      this.page.afterRender();
    }
    destroy() {
      window.removeEventListener('hashchange', this.changePageHandler);
    }
}