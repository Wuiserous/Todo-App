import { useState } from "react"

export default function fakeComponent() {
    const [component, setComponent] = useState(null)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmaail] = useState('')
    const [password, setPassword] = useState('')
    return <div>
        welcome to my fake components!

        <div>
           <input type="text"  placeholder="Enter your name" />
        </div>
    </div>
}