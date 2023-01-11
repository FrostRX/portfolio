import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-blue-700 text-xl tracking-wide uppercase">{`<Contact/>`}</p>
        <h2 className=" text-3xl py-3">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400"
                      type="text"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400"
                      type="text"
                      {...register("gmail", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm">Message</label>
                  <textarea
                    maxLength={4000}
                    onChange={() => console.log("TEST")}
                    className="border-2 resize-none rounded-lg p-3 h-[180px] flex border-gray-400"
                    type="text"
                    {...register("msg", {
                      required: true,
                    })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-16 mt-5 font-bold shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-blue-700 to-blue-600 text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
