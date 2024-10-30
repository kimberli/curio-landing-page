export default function Logo({ className = "" }) {
    return (
        <img
            src="/curio_dark.svg"
            alt="Curio Logo"
            className={`w-64 h-auto ${className}`}
        />
    )
} 