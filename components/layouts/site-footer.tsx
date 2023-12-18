"use client";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";

export default function SiteFooter({ webInfo }: any) {
  return (
    <footer
      className="bg-white dark:bg-[#040D12] mx-auto 2xl:container max-w-full -mt-6  rounded-lg"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-2 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="space-y-8">
            <div className="flex">
              <div className="">
                <span className="sr-only">{webInfo.websiteInfo.title}</span>
                <Image
                  className="h-20 w-auto rounded-md"
                  src={webInfo.websiteInfo.logo}
                  alt={webInfo.websiteInfo.title}
                  width={384}
                  height={127}
                />
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 pl-1 pt-4 font-semibold">
                  {webInfo.websiteInfo.tagLine}
                </p>
              </div>
            </div>

            <div className="flex space-x-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.facebook.com/${webInfo.websiteInfo.facebookUrl}`}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(107, 114, 128, 1)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://instagram.com/${webInfo.websiteInfo.instagramUrl}`}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(107, 114, 128, 1)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
                  <circle cx="11.994" cy="11.979" r="3.003"></circle>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/${webInfo.websiteInfo.twitterUrl}`}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(107, 114, 128, 1)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.youtube.com/${webInfo.websiteInfo.youtubeUrl}`}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Youtube</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(107, 114, 128, 1)",
                    transform: "",
                    msFilter: "",
                  }}
                >
                  <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-1 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0 space-y-4 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">
                <div className="">
                  সম্পাদক
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {webInfo.websiteInfo.headEditor}
                  </div>
                </div>
                <div className="">
                  নির্বাহী সম্পাদক
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    {webInfo.websiteInfo.editorAdmin}
                  </div>
                </div>
                <div className="">
                  বার্তা সম্পাদক{" "}
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {webInfo.websiteInfo.editorNews}
                  </div>
                </div>
              </div>
              <div className="mt-10 md:mt-0 space-y-4 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">
                <div className="">
                  ঠিকানা
                  <div className="text-sm  font-normal text-gray-500 dark:text-gray-400">
                    {webInfo.websiteInfo.address}
                  </div>
                </div>
                <div className="">
                  ফোন নম্বর
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    {webInfo.websiteInfo.contact1}
                  </div>
                </div>
                <div className="">
                  ইমেইল{" "}
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {webInfo.websiteInfo.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between  mt-10 md:mt-0 lg:space-y-0 space-y-4">
            <Link href={"/contact"}>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400 hover:text-gray-600 dark:hover:text-white">
                যোগাযোগ
              </h3>
            </Link>
            <Link href={"/terms-and-conditions"}>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400 hover:text-gray-600 dark:hover:text-white">
                শার্তাবলি ও নীতিমালা
              </h3>
            </Link>
            <Link href={"/privacy-and-policy"}>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400 hover:text-gray-600 dark:hover:text-white">
                গোপনিয়তা নীতি
              </h3>
            </Link>
            <Link href={"/advertisement"}>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400 hover:text-gray-600 dark:hover:text-white">
                বিজ্ঞাপন
              </h3>
            </Link>
            <Link href={"/about"}>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400 hover:text-gray-600 dark:hover:text-white">
                আমাদের সম্পর্কে{" "}
              </h3>
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-between mt-16 border-t border-gray-900/10 dark:border-gray-900/60 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            2023 {webInfo.websiteInfo.copyrightText} সর্বস্বত্ব সংরক্ষিত
          </p>
          <p className=" text-xs leading-5 text-gray-500 ">
            Developed By{" "}
            <a href="#">
              <span className="font-bold hover:text-black dark:hover:text-white">
                TECHSAND
              </span>
            </a>
          </p>
          <div className="hidden lg:block">
            {" "}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
