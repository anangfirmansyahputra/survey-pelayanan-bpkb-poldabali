"use client";

import axios from "axios";
import { Montserrat, Oswald } from "next/font/google";
import { useState } from "react";
import Swal from "sweetalert2";
import Footer from "./footer";

const inter = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const monserat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

const items = [
  {
    id: 3,
    title: "Sangat Puas",
    icon: "/img/sangat-puas.svg",
    color: "bg-[#0A7BFF]",
    border: "border-[#0A7BFF]",
    hover: "hover:bg-green-600",
  },
  {
    id: 2,
    title: "Puas",
    icon: "/img/puas.svg",
    color: "bg-[#3EC70B]",
    border: "border-[#3EC70B]",
    hover: "hover:bg-sky-600",
  },
  {
    id: 1,
    title: "Cukup Puas",
    icon: "/img/cukup-puas.svg",
    color: "bg-[#EFCC00]",
    border: "border-[#EFCC00]",
    hover: "hover:bg-orange-600",
  },
  {
    id: 0,
    title: "Kurang Puas",
    icon: "/img/kurang-puas.svg",
    color: "bg-[#F44336]",
    border: "border-[#F44336]",
    hover: "hover:bg-red-600",
  },
];

export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (id: number) => {
    setIsLoading(true);

    const { data } = await axios.post("/api/survey", {
      kepuasan: id,
    });

    if (data.success) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } else {
      Swal.fire({
        title: "Gagal",
        text: "Gagal mengisi survey, silahkan ulangi kembali",
        icon: "error",
        confirmButtonText: "Lanjut",
        timer: 2000,
      });
    }

    setIsLoading(false);
  };

  const handleSubmit = async (event: any) => {
    setIsLoading(true);
    event.preventDefault();

    const { data } = await axios.post("/api/login", {
      username,
      password,
    });

    if (data.success) {
      setIsLogin(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Username atau Password salah",
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      {!isLogin ? (
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Survey Kepuasan
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Username
                    </label>
                    <input
                      type="text"
                      id="email"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      placeholder="Password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <main className="flex flex-col w-full h-screen bg-[url('/img/header.png')] bg-white bg-contain bg-no-repeat">
          <div className="w-full relative flex items-center justify-center">
            {/* <img src="/img/header.png" className="w-full" /> */}
            <div className="px-[40px] pt-[48px] absolute top-0 left-0">
              <div className="flex">
                <img src="/img/Frame 9.png" alt="" />
              </div>
              <h1
                className={`text-[#EB8F00] text-[34px] font-extrabold custom-text ${inter.className}`}>
                PELAYANAN BPKB DITLANTAS POLDA BALI
              </h1>
              <h2
                className={`text-[22px] font-extrabold custom-text-white ${monserat.className}`}>
                DIREKTORAT LALU LINTAS POLDA BALI
              </h2>
            </div>
          </div>
          {success ? (
            <div className="flex-1 flex flex-col mt-32 items-center  mx-auto justify-center space-y-5 ">
              <img src="/img/success.svg" className=" mx-auto" />
              <h5 className="text-[30px] leading-[120%] tracking-[2%] font-bold text-center">
                TERKIRIM
              </h5>
              <p className="text-[#636363] w-[562px] text-center text-[26px] leading-[120%] tracking-[2%]">
                Terima Kasih Sudah Meluangkan Waktu Untuk Respon Pelayanan Kami
              </p>
            </div>
          ) : (
            <div className="flex-1 gap-10 mt-32 items-center flex flex-col justify-center">
              <div className="mx-auto bottom-[30px]">
                <div className="flex h-[150px] items-center w-[813px] justify-center relative bg-[url('/img/ribon.svg')] bg-cover">
                  <h2 className="text-white font-medium w-[400px] text-center text-3xl">
                    BAGAIMANA DENGAN PELAYANAN KAMI?
                  </h2>
                </div>
              </div>

              <div className="flex justify-center items-center gap-10">
                {items.map((item) => (
                  <div
                    onClick={() => !isLoading && handleClick(item.id)}
                    key={item.id}
                    className={`${item.color} ${item.border} active:border-white  border-[10px] shadow-lg rounded-3xl text-white px-[20px] py-[24px] flex flex-col items-center justify-center gap-5 cursor-pointer transition-colors`}>
                    <img src={item.icon} alt="emot" />
                    <h4 className="text-[22px] uppercase font-extrabold">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )}
          <Footer />
        </main>
      )}
    </>
  );
}
