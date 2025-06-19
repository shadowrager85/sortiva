 
export default function LoginPage() {
  return (
    <>

    <div className="login flex flex-col justify-center items-center  w-96 h-96 p-2  ml-96 mt-10">
    <h1 className="text-4xl font-semibold">Welcome</h1>
        <p className="mb-4">Login to your account</p>
        <form className="flex flex-col gap-4 border-gray-900 border-2 rounded-2xl p-10 w-96 h-96">
          <input type="text" placeholder="Username" className="border-2 border-gray-300 p-2 rounded" />
          <input type="password" placeholder="Password" className="border-2 border-gray-300 p-2 rounded" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded"><a href="/dashboard">Login</a></button>
          <p className="mt-4 ml-8">Dont have an account <a href="/register" className="text-blue-500">Register</a></p>
        </form>
    </div>
    </>
  );
}