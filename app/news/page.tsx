import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import MostViewed from "@/components/mostViewed";
import RelatedNews from "@/components/relatedNews";
import Author from "@/components/layouts/author";
import Breadcrumb from "@/components/breadcrumb";
export default function Page() {
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4  pb-4">
      <Breadcrumb/>
      <div
        role="list"
        className="grid grid-cols-1 md:px-4 px-4 gap-x-2 gap-y-2 lg:grid-cols-7 xl:gap-x-2"
      >
        <div className="hidden lg:block col-span-2">
          <div>
          <Author/>
          <MostViewed />
          </div>
        </div>
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 lg:px-4 col-start-auto col-span-4 ">
          {/* <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p> */}
          <h1 className="mt-2 pb-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl text-center ">
          5 Reasons Why You Should Eat More Fruit Every Day
          </h1>
          <p className="mt-6 text-xl leading-8 dark:text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="mt-6 max-w-2xl dark:text-gray-400">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
              From beginner to expert in 3 hours
            </h2>
            <p className="mt-6 dark:text-gray-400">
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
              consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
              vitae interdum mauris enim, consequat vulputate nibh. Maecenas
              pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
              cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
              ipsum eu a sed convallis diam.
            </p>

            <p className="mt-6 dark:text-gray-400">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
          </div>
          <figure className="mt-16">
            <Image 
            src={"https://plus.unsplash.com/premium_photo-1694166713270-da1164385b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"}
             alt=""
             height={240}
             width={640}
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            />
            
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                aria-hidden="true"
              />
              Faucibus commodo massa rhoncus, volutpat.
            </figcaption>
          </figure>
          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
              Everything you need to get up and running
            </h2>
            <p className="mt-6 dark:text-gray-400">
              Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
              varius orci dapibus volutpat cras. In amet eu ridiculus leo
              sodales cursus tristique. Tincidunt sed tempus ut viverra
              ridiculus non molestie. Gravida quis fringilla amet eget dui
              tempor dignissim. Facilisis auctor venenatis varius nunc, congue
              erat ac. Cras fermentum convallis quam.
            </p>
            <p className="mt-8">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
          </div>
        </div>
        <div className="col-span-1">
       <div>
       <div className="lg:hidden"><Author/></div>
       <RelatedNews />
       </div>
        </div>
      </div>
      <div className="lg:hidden">
        <MostViewed />
      </div>
    </div>
  );
}
