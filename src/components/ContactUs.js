import React from "react";

const ContactUs = () => {
  return (
    <div className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  m-auto w-2/4 mt-20 rounded-xl flex flex-col justify-center">
      <h1
        className=" text-center text-2xl m-10 font-medium
      "
      >
        Contact Us
      </h1>
      <form>
        <input
          className="border border-black m-2 p-2 rounded-lg"
          placeholder="Name"
        ></input>

        <input
          className="border border-black m-2 p-2 rounded-lg"
          placeholder="Jonh@gmail.com"
        ></input>

        <button className="bg-red-600 w-40 h-8 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
