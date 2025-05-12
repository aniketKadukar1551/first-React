import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError ()

    return (
        <section>
            <h2>Oops!!!</h2>
            <p>{err.status}: {err.statusText}</p>
        </section>
    )
}

export default Error
