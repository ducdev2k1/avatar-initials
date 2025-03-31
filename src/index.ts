import { App } from 'vue';
import AvatarInitials from './AvatarInitials.vue';

export default {
  install(app: App) {
    app.component('AvatarInitials', AvatarInitials);
  },
};

export { AvatarInitials };
