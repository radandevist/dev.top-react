import { Provider as ReduxProvider } from "react-redux"
import { AppRoutes } from "./AppRoutes"
import { store } from "./redux/store"

export function App() {
  return (
    // Wrap the route with the providers here
    <ReduxProvider store={store}>
      <AppRoutes />
    </ReduxProvider>
  )
}
