import { useEffect, useState } from "react"

export const useInternetStatus = () => {
    const [status, setStatus] = useState(true)

    useEffect(() => {
        addEventListener("online", () => {
            setStatus(true)
        })

        addEventListener("offline", () => {
            setStatus(false)
        })
    }, [])

    return status
}
