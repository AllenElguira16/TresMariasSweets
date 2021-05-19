import { createApp } from 'vue';

import router from './pages/router';
import store from './store';

const app = createApp({
  template: `
    <Suspense>
      <template #default>
        <router-view/>
      </template>
      <template #fallback>
        <span>Loading... pls wait</span>
      </template>
    </Suspense>
  `,
});

app.use(store);
app.use(router);

app.mount('#app');
