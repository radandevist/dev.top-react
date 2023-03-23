import { Provider as ReduxProvider } from "react-redux"
import { persistor, store } from "./redux/store"
import { AppRoutes } from "./AppRoutes"
import { PersistGate } from "redux-persist/integration/react"

export function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </ReduxProvider>
  )
}
