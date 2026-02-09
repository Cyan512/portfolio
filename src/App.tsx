import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeProvider} from "@/providers/theme-provider.tsx";
import {AppRouter} from "@/router/app-router.tsx";

const basename = import.meta.env.VITE_BASENAME || ''

function App() {

    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <Router basename={basename}>
                <AppRouter/>
            </Router>
        </ThemeProvider>
    )
}

export default App
