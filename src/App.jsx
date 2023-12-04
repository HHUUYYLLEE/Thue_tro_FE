import useRouteElement from './useRouteElement'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import BGM from './components/BGM'
function App() {
  const routeElement = useRouteElement()

  return (
    <div>
      <BGM />
      {routeElement}
      {/* <ToastContainer /> */}
    </div>
  )
}

export default App
