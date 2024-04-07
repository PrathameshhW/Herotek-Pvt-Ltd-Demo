import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { PhoneInput } from "react-international-phone";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { BACKEND_BASE_URL } from "../utils/Contants";

const Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const body = {
    name: name,
    email: email,
    phone: phone,
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      if (name !== "" && email !== "" && phone !== "") {
        setIsLoading(true);

        axios
          .post(`${BACKEND_BASE_URL}/register`, body)
          .then((res) => {
            if (res.status === 200) {
              localStorage.setItem("_id", res.data.userData._id);
              localStorage.setItem("user", JSON.stringify(res.data.userData));
              setIsLoading(false);
              toast.success(res.data.message);
              navigate("/dashboard");
            }
          })
          .catch((err) => {
            if (err.response.status === 400) setIsLoading(false);
            toast.error(err.response.data.message);
          });
      } else {
        setIsLoading(false);
        toast.error("Please enter the details");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
        <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Hello Herotek Private Limited
        </h4>
        <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Nice to meet you! I'm Prathamesh!!
        </p>
        <form
          className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-6 mb-1">
            <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Your Name
            </h6>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                placeholder="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Your Email
            </h6>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@mail.com"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
            </div>
            <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
              Phone
            </h6>
            <div className="relative h-11 w-full">
              <PhoneInput
                className="w-full"
                value={phone}
                name="phone"
                defaultCountry="in"
                onChange={(value) => setPhone(value)}
              />
            </div>
          </div>
          <button
            className="mt-6 text-lg flex items-center justify-center  w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20"
            type="submit"
            onClick={handleSubmit}
          >
            {isLoading ? (
              <ColorRing
                height="28"
                width="28"
                ariaLabel="color-ring-loading"
                wrapperClass="color-ring-wrapper"
                colors={["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]}
              />
            ) : (
              "Submit"
            )}
          </button>
          <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
            Checkout my portfolio at{" "}
            <a
              href="https://www.prathamesh.codes"
              target="_blank"
              className="font-medium text-blue-600 underline"
            >
              prathamesh.codes
            </a>
          </p>
        </form>
      </div>{" "}
    </div>
  );
};

export default Form;
