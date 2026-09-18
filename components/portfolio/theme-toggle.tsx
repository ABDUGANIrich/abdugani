"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false,
    );

    if (!mounted) {
        return <span className="theme-toggle-placeholder" aria-hidden="true" />;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            className="theme-toggle"
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            title={`Switch to ${isDark ? "light" : "dark"} theme`}
        >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
    );
}
