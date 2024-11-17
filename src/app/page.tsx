import Image from "next/image";


export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-100">
      <div className="grid h-full w-full grid-cols-8 grid-rows-10 gap-3 py-10 px-40 m-32 ">
        
        <div className="col-span-2 row-span-5 rounded-xl bg-Yellow-100 flex items-center justify-center">
          <div className="m-5">
            <p className="font-semibold text-2xl tracking-tighter leading-5 font-sans">
              Create and schedule content <span className="text-Purple-500 italic">quicker.</span>
            </p>
            <Image
              alt="create-post image"
              src="/assets/images/illustration-create-post.jpg"
              height={50}
              width={100}
              className="pt-4"
            />
          </div>
        </div>

        
        <div className="col-span-4 row-span-4 rounded-xl bg-Purple-500 flex flex-col items-center justify-center">
          <div className="m-10 text-center">
            <h1 className="text-4xl text-white md:text-3xl font-semibold">
              Social Media <span className="text-yellow-400">10x</span> <span className="italic">Faster</span> with AI
            </h1>
            <div className="flex flex-col items-center pt-3">
              <Image
                alt="5 stars"
                src="/assets/images/illustration-five-stars.jpg"
                height={140}
                width={150}
              />
              <p className="text-white text-xs">Over 4,000 5-star reviews</p>
            </div>
          </div>
        </div>

        
        <div className="col-span-2 row-span-7 rounded-xl bg-Purple-100 flex flex-col justify-start py-2 overflow-hidden">
          <h2 className="font-semibold text-xl tracking-tighter leading-5 my-3 pl-7">
            Schedule to social media.
          </h2>
          <Image
            alt="illustration schedule posts"
            src="/assets/images/illustration-schedule-posts.jpg"
            className="h-full translate-x-[15%]"
            height={500}
            width={1200}
          />
          <p className="text-black font-normal text-xs my-3 pl-7 pr-4 tracking-tighter leading-3">
            Optimize post timings to publish content at the perfect time for your audience.
          </p>
        </div>

        
        <div className="col-span-2 row-span-3 rounded-xl bg-White relative overflow-hidden py-4 pl-4">
          <Image
            alt="illustration multiple platforms"
            src="/assets/images/illustration-multiple-platforms.jpg"
            className="h-10 w-full"
            height={500}
            width={500}
          />
          <p className="font-semibold text-lg tracking-tighter leading-5 pt-1">
            Manage multiple accounts and platforms.
          </p>
        </div>

        
        <div className="col-span-2 row-span-3 rounded-xl bg-Yellow-500 px-3">
          <p className="font-semibold text-lg tracking-tighter leading-5 py-2">
            Maintain a consistent posting schedule.
          </p>
          <Image
            src="/assets/images/illustration-consistent-schedule.jpg"
            alt="illustration consistent schedule"
            height={500}
            width={500}
          />
        </div>

        
        <div className="col-span-2 row-span-5 rounded-xl bg-Yellow-500 flex flex-col items-center justify-between p-3">
          <p className="font-semibold text-2xl tracking-tighter leading-5">
            Write your content using AI.
          </p>
          <Image
            src="/assets/images/illustration-ai-content.jpg"
            alt="illustration AI content"
            height={150}
            width={150}
          />
        </div>

        
        <div className="col-span-2 row-span-3 rounded-xl bg-White flex flex-col items-center justify-between p-3">
          <p className="text-4xl text-black font-semibold text-center">{">"}56%</p>
          <p className="text-black font-normal text-xs">faster audience growth</p>
          <Image
            src="/assets/images/illustration-audience-growth.jpg"
            alt="illustration audience growth"
            height={100}
            width={120}
            className="h-10"
          />
        </div>

        
        <div className="col-span-4 row-span-3 rounded-xl bg-Purple-500 flex items-center p-3">
          <Image
            src="/assets/images/illustration-grow-followers.jpg"
            alt="illustration grow followers"
            height={130}
            width={130}
          />
          <p className="font-normal text-white text-2xl tracking-tighter leading-5 ml-4">
            Grow followers with non-stop content.
          </p>
        </div>
      </div>
    </div>
  );
}
