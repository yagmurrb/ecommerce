import React from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  console.log(errors);

  return (
    <div className="min-h-screen bg-gray-100  flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name*
              </label>

              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  {...register("Name", { required: true, max: 50, min: 3 })}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border"
                  placeholder="Name"
                />
                {errors.Name && (
                  <p className="text-red-500 text-xs mt-1">
                    Name is required and should be at least 3 characters long
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary-color-2"
              >
                Email address *
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  {...register("Email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/i,
                  })}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border"
                  placeholder=" john.doe@example.com"
                />
                {errors.Email && (
                  <p className="text-danger-color text-xs mt-1">
                    Email is required and should be valid
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password*
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  {...register("Password", {
                    required: true,
                    pattern:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]{8,}$/i,
                  })}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border"
                  placeholder="Password"
                />
                {errors.Password && (
                  <p className="text-danger-color text-xs mt-1">
                    Password is required and should contain at least 8
                    characters including one letter, one number, and one special
                    character
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role*
              </label>
              <div className="mt-1">
                <select
                  id="role"
                  {...register("Role", { required: true })}
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                    errors.Role ? "border-red-500" : "border-gray-300"
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.Role && (
                  <p className="text-danger-color text-xs mt-1">
                    Role is required
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-color hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
