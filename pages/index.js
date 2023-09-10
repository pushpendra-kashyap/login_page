export default function Login() {
  const login = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    console.log(event.target.password.value);
  };

  return (
    <div className="bg-slate-200">
      <div className="flex justify-center p-20">
        <div className="bg-blue-600/50 h-[500px] w-[500px] flex justify-center items-center rounded-lg">
          <form
            draggable="true"
            onSubmit={login}
            className="flex flex-col gap-3"
          >
            <h1 className="flex justify-center text-xl -mt-10 mb-10 text-white">
              Login Page
            </h1>
            <div className="flex flex-col gap-0.5">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter the name....."
                className="px-4 py-3 rounded-md w-full border border-transparent outline-none focus:outline-none focus:border-red-400"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter the password....."
                className="px-4 py-3 rounded-md w-full border border-transparent outline-none focus:outline-none focus:border-red-400"
              />
            </div>
            {/* <div className=" flex justify-center"> */}
            <button
              type="submit"
              className="mt-3 h-12 w-full bg-red-800 text-lg text-white rounded-md hover:bg-slate-600"
            >
              Login
            </button>
            {/* </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}
