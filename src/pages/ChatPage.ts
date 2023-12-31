import {Art} from '../components/Art/Art';
import {AddProject} from '../components/addProject/AddProject';
import {AddCategory} from '../components/addCategory/AddCategory';
import {Chat} from '../components/chat/Chat';
import {EditProject} from '../components/editProject/EditProject';
import {Toolbar} from '../components/toolbar/Toolbar';
// import {$} from '../core/Dom';
import {Page} from '../core/Page';

export class ChatPage extends Page {
  storeSub:any;
  art: any;
  constructor(param = '') {
    super(param);
    this.storeSub = null;
  }
  getRoot() {
    this.art = new Art({
      components: [Toolbar, Chat, EditProject, AddProject, AddCategory],
    });
    return this.art.getRoot();
  }
  afterRender() {
    this.art.init();
  }
  destroy() {
    this.art.destroy();
  }
}