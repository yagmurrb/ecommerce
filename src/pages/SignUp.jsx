import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [showStoreDetails, setShowStoreDetails] = useState(false); // Rol seçimine bağlı olarak "Store Details" bölümünün gösterilip gizlenmesi için state

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-100  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 "
              >
                Name*
              </label>

              <div className="mt-1 ">
                <input
                  type="text"
                  id="name"
                  {...register("Name", { required: true, max: 50, min: 3 })}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border focus:outline-none focus:border-indigo-500 focus:z-10   "
                  placeholder="Name"
                />
                {errors.Name && (
                  <p className="text-danger-color text-h6 mt-1">
                    Name is required and should be at least 3 characters long
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary-color-2 "
              >
                Email address *
              </label>
              <div className="mt-1 ">
                <input
                  id="email"
                  type="email"
                  {...register("Email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/i,
                  })}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border focus:outline-none focus:border-indigo-500 focus:z-10 "
                  placeholder=" john.doe@example.com"
                />
                {errors.Email && (
                  <p className="text-danger-color text-h6 mt-1">
                    Email is required and should be valid
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-secondary-text-color-2"
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
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border focus:outline-none focus:border-indigo-500 focus:z-10 md-4"
                  placeholder="Password"
                />
                {errors.Password && (
                  <p className="text-danger-color text-h6 mt-1">
                    Password is required and should contain at least 8
                    characters including one letter, one number, and one special
                    character
                  </p>
                )}
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border focus:outline-none focus:border-indigo-500 focus:z-10"
                  {...register("confirm_password", {
                    required: "Confirming your password is required",
                    validate: (value) =>
                      value === watch("password") ||
                      "Your passwords do not match!",
                  })}
                />
                {errors.confirm_password && (
                  <p className="text-alert-color">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-secondary-text-color-2"
              >
                Role*
              </label>
              <div className="mt-1">
                <select
                  id="role"
                  {...register("Role", { required: true })}
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                    errors.Role ? "border-danger-color" : "border-gray-300 "
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  onChange={(e) =>
                    setShowStoreDetails(e.target.value === "Store")
                  }
                >
                  <option value="">Select</option>
                  <option value="Custom">Custom</option>
                  <option value="Store">Store</option>
                  <option value="Admin">Admin</option>
                </select>
                {errors.Role && (
                  <p className="text-danger-color text-h6 mt-1">
                    Role is required
                  </p>
                )}
              </div>
            </div>

            {showStoreDetails && (
              <>
                <div>
                  <label
                    htmlFor="storeName"
                    className="block text-sm font-medium text-secondary-text-color-2"
                  >
                    Store Name*
                  </label>
                  <div className="mt-1">
                    <input
                      id="storeName"
                      type="text"
                      {...register("storeName", { required: true, min: 3 })}
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border focus:outline-none focus:border-indigo-500 focus:z-10 "
                      placeholder="Store Name"
                    />
                    {errors.storeName && (
                      <p className="text-danger-color text-h6 mt-1">
                        Store Name should contain at least 3 characters.
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="storePhone"
                    className="block text-sm font-medium text-secondary-text-color-2"
                  >
                    Store Phone*
                  </label>
                  <div className="mt-1">
                    <input
                      id="storePhone"
                      type="tel"
                      {...register("storePhone", {
                        required: true,
                        pattern:
                          /^((\+|00)90[\s-]?)?0?([0-9]{3})[\s-]?([0-9]{3})[\s-]?([0-9]{2})[\s-]?([0-9]{2})$/,
                      })}
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border focus:outline-none focus:border-indigo-500 focus:z-10 "
                      placeholder="Store Phone"
                    />
                    {errors.storePhone && (
                      <p className="text-danger-color text-h6 mt-1">
                        Please type a valid Turkish phone number.
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="taxNo"
                    className="block text-sm font-medium text-secondary-text-color-2"
                  >
                    Store Tax ID*
                  </label>
                  <div className="mt-1">
                    <input
                      id="taxNo"
                      type="text"
                      {...register("taxNo", {
                        required: true,
                        pattern: /^T\d{4}V\d{6}$/,
                      })}
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border focus:outline-none focus:border-indigo-500 focus:z-10 "
                      placeholder="TXXXXVXXXXXX"
                    />
                    {errors.taxNo && (
                      <p className="text-danger-color text-h6 mt-1">
                        Tax ID should match the pattern “TXXXXVXXXXXX”
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="bankAccount"
                    className="block text-sm font-medium text-secondary-text-color-2"
                  >
                    Store Bank Account*
                  </label>
                  <div className="mt-1">
                    <input
                      id="bankAccount"
                      type="text"
                      {...register("bankAccount", {
                        required: true,
                        pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{0,31}$/,
                      })}
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border focus:outline-none focus:border-indigo-500 focus:z-10 "
                      placeholder="IBAN Number"
                    />
                    {errors.bankAccount && (
                      <p className="text-danger-color text-h6 mt-1">
                        Bank Account should be a valid IBAN address.
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}

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
