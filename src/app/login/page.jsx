export default function Login() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-20 text-3xl font-bold text-white">
        Insert your credentials
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-80 rounded-md border-2 border-gray-300 bg-white p-2 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="w-80 rounded-md border-2 border-gray-300 bg-white p-2 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <button type="submit" className="rounded-md bg-blue-500 p-2 text-white">
          Login
        </button>
      </form>
    </div>
  );
}
