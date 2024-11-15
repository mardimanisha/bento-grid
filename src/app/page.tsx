

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-100">
      <div className="grid h-full w-full grid-cols-12 grid-rows-10 gap-3 p-20 xl:m-64 lg:m-32 md:m-16">
        <div className="col-span-3 row-span-5 rounded-xl bg-Yellow-100"></div>
        <div className="col-span-6 row-span-4 rounded-xl bg-Purple-500"></div>
        <div className="col-span-3 row-span-7 rounded-xl bg-Purple-100"></div>
        <div className="col-span-3 row-span-3 rounded-xl bg-White"></div>
        <div className="col-span-3 row-span-3 rounded-xl bg-Yellow-500"></div>
        <div className="col-span-3 row-span-5 rounded-xl bg-Yellow-500"></div>
        <div className="col-span-3 row-span-3 rounded-xl bg-White"></div>
        <div className="col-span-6 row-span-3 rounded-xl bg-Purple-500"></div>
      </div>
    </div>
  );
}
