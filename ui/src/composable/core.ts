import { ComponentInstance, getCurrentInstance as getVM } from '@vue/composition-api';
import { Store } from 'vuex';
import VueRouter, { Route } from 'vue-router';

export function getCurrentInstance(): ComponentInstance {
  const instance = getVM();
  if (!instance) {
    throw new Error('Invalid. Composition API must be used inside Vue instance setup');
  }
  return instance.proxy;
}

export function useStore<T>(): Store<T> {
  return getCurrentInstance().$store;
}

export function useRouter(): VueRouter {
  return getCurrentInstance().$router;
}

export function useRoute(): Route {
  return getCurrentInstance().$route;
}
