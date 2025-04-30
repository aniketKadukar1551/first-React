import { useState } from "react"

const UserInfo = ({name, location, contact}) => {
    const [count] = useState(0)

    return (
        <div>
            <h2>count: {count}</h2>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: {contact}</h2>
        </div>
    )
}

export default UserInfo
