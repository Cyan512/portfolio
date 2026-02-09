import * as React from "react"
import {Button} from "@/ui/atoms/button"
import {CiCloudMoon, CiCloudSun} from "react-icons/ci";
import {useTheme} from "@/hooks/use-theme"

interface ModeToggleProps {
    variant?: "outline" | "ghost" | "default"
}

export function ModeToggle({variant = "outline"}: ModeToggleProps) {
    const {theme, setTheme} = useTheme()
    const [isDarkMode, setIsDarkMode] = React.useState(false)

    React.useEffect(() => {
        const updateMode = () => {
            if (theme === "dark") setIsDarkMode(true)
            else if (theme === "light") setIsDarkMode(false)
            else setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches)
        }

        updateMode()

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        mediaQuery.addEventListener("change", updateMode)
        return () => mediaQuery.removeEventListener("change", updateMode)
    }, [theme])

    const handleToggle = () => {
        setTheme(isDarkMode ? "light" : "dark")
    }

    return (
        <Button
            variant={variant}
            size="icon"
            onClick={handleToggle}
            className="cursor-pointer mode-toggle-button relative overflow-hidden"
        >
            {/* Show the icon for the mode you can switch TO */}
            {isDarkMode ? (
                <CiCloudSun className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100"/>
            ) : (
                <CiCloudMoon className="h-[1.2rem] w-[1.2rem] transition-transform duration-300 rotate-0 scale-100"/>
            )}
            <span className="sr-only">
                Switch to {isDarkMode ? "light" : "dark"} mode
            </span>
        </Button>
    )
}
