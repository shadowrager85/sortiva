import { useState } from "react";

const SignUp = () =>
{
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",

    })
}
const [pending, setPending] = useState(false);
export default  function RegisterPage() {
    return (
        <div className="register flex flex-col justify-center items-center  w-96 h-96 p-2  ml-96 mt-10">
            <h1 className="text-4xl font-semibold">Welcome</h1>
            <p className="mb-4">Create an account</p>
            <form action="" className="flex flex-col gap-4 border-gray-900 border-2 rounded-2xl p-10 w-96 h-96">
                <input type="text" disabled={pending} value={form.name} onChange={(e) => setForm({...form, name:e.target.value})} placeholder="Username" className="border-2 border-gray-300 p-2 rounded" />
                <input type="email" disabled={pending} value={form.email} onChange={(e) => setForm({...form, email:e.target.value})} placeholder="Email" className="border-2 border-gray-300 p-2 rounded" />
                <input type="password" disabled={pending} value={form.password} onChange={(e) => setForm({...form, password:e.target.value})} placeholder="Password" className="border-2 border-gray-300 p-2 rounded" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded ">Register</button>
                <p className="mt-4 ml-8">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
            </form>
        </div>
    );
}