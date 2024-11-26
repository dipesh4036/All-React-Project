import React, { useState } from "react";

const Herosection = () => {
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [usermess, setusermess] = useState("");
  const [callnum, setcallnum] = useState(false);
  const [submit, setsubmit] = useState(false);
  const info = () => {
    setsubmit(!submit);
  };
  const call = () => {
    setcallnum(!callnum);
  };
  return (
    <div className="w-full p-6 md:p-12">
      <h1 className="text-3xl md:text-5xl mb-5 text-center md:text-left">
        CONTACT US
      </h1>
      <p className="font-medium w-full md:w-[80%] text-center md:text-left mb-10">
        LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>

      <div className="flex flex-col md:flex-row gap-10 md:gap-32">
        <div className="left w-full md:w-[50%] p-5 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-black text-white rounded-md p-2 w-full md:w-[47%] h-10">
              VIA SUPPORT CHAT
            </button>
            <button
              onClick={call}
              className="bg-black text-white rounded-md p-2 w-full md:w-[47%] h-10"
            >
              VIA CALL
            </button>
          </div>
          <h1
            className={`text-xl font-semibold ${
              callnum === false ? "hidden" : ""
            }`}
          >
            +91 9876543210
          </h1>
          <button className="text-black border-2 border-black rounded-md p-2 w-full h-10">
            VIA EMAIL FORM
          </button>

          <div className="flex flex-col gap-4 ">
            <label className="text-left text-sm" htmlFor="name">
              Name
            </label>
            <input
              className="text-black border-2 border-black w-full p-2 rounded-md"
              type="text"
              id="name"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />

            <label className="text-left text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="text-black border-2 border-black w-full p-2 rounded-md"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={useremail}
              onChange={(e) => setuseremail(e.target.value)}
            />

            <label className="text-left text-sm" htmlFor="message">
              Message
            </label>
            <textarea
              className="text-black border-2 border-black w-full p-2 rounded-md h-36"
              id="message"
              placeholder="Type your message"
              value={usermess}
              onChange={(e) => setusermess(e.target.value)}
            ></textarea>
          </div>

          <button
            value={submit}
            onChange={(e) => setsubmit(e.target.value)}
            onClick={info}
            className="bg-black text-white rounded-md p-2 w-full md:w-64 h-10 mt-2"
          >
            SUBMIT
          </button>
        </div>

        <div className="right w-full md:w-[40%] flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            className="w-full max-w-md object-cover rounded-md"
            src="https://imgs.search.brave.com/KBI1xfhrlrAKS0p-Y4j8VTVIKHTYGBkhiQxWbOU3QIs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3Lzg0LzYwLzg5/LzM2MF9GXzc4NDYw/ODk3MV9qdVJpVGFi/WEh1ZGI5OG9ZSWN1/b0REbUhIdnpDa3Bu/RS5qcGc"
            alt="Contact Us"
          />
        </div>
      </div>
      <div
        className={`text-xl font-semibold space-x-5 ${
          submit === false ? "hidden" : ""
        }`}
      >
        <div className="ml-5">name : {username}</div>
        <div>email : {useremail}</div>
        <div>text : {usermess}</div>
      </div>
    </div>
  );
};

export default Herosection;
