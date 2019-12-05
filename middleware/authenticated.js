export default function({ store, route, redirect }) {
  if (!store.getters.isAuthenticated && route.name !== 'home') {
    redirect('/home')
  }
  if (store.getters.isAuthenticated && route.name === 'home') {
    redirect('/')
  }
}
