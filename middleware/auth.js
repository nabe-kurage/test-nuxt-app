import Cookies from 'universal-cookie'

export default ({ req, route, redirect }) => {
  console.log(`route.path`)
  console.log(route.path)
  if (['/'].includes(route.path)) {
    return
  }

  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookies.get('credential')
  console.log(`credential`)
  console.log(credential)

  if (credential && route.path ==='/login') {
    return redirect('/')
  }

  if (!credential && route.path ==='/authed-route') {
    return  redirect('/')
  }
}
