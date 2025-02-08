import React from "react";
import { FakebookTitle } from "../icons";

export default function Login() {
  return (
    <>
      <div className="h-[700px] pt-20 pb-28 bg-[#f2f4f7]">
        <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between">
          <div className="flex flex-col gap-4 mt-20 basis-3/5">
            <FakebookTitle className="-ms-8 w-80" />
            <h2 className="text-[30px] leading-8 -mt-6 w-[514px] ">
              Facebook helps you connect and share with the people in your life.
            </h2>
            <p className="text-sm text-error">
              *** This is not real facebook site ***
            </p>
          </div>

          <div className="flex flex-1">
            <div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
              <form>
                <div className="card-body gap-3 p-4">
                  <input
                    type="text"
                    placeholder="E-mail or Phone number"
                    className="input input-bordered w-full"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                  />
                  <button className="btn btn-primary text-xl">Log in</button>
                  <p className="opacity-70 text-center cursor-pointer flex-grow-0">
                    Forgotten password?
                  </p>
                  <div className="divider my-0"></div>
                  <button
                    type="button"
                    className="btn btn-secondary text-lg text-white w-fit mx-auto"
                    onClick={() =>
                      document.getElementById("register-modal").showModal()
                    }
                  >
                    Create new account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <dialog id="register-modal" className="modal">
        <div className="modal-box">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={(e) => e.target.closest("dialog").close()}
          >
            ✕
          </button>
          Register Form
        </div>
      </dialog>
    </>
  );
}
