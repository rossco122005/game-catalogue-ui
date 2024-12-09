import { Link } from "react-router"

function NotFoundPage() {
    return (
        <div className="flex flex-col gap-2">
            <h1>404 Not Found</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFoundPage