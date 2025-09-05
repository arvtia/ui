import { Children } from "react";
import { motion, percent } from "framer-motion";
import { useState } from "react";
import StorageBarChart from "./Charts";

export const filesData = [
  {
    name: 'Video',
    icons: 'bi bi-camera-video',
    lastModified: '18 feb',
    filesCount: '2890'
  },
  {
    name: 'Photos',
    icons: 'bi bi-image',
    lastModified: '12 mar',
    filesCount: '1540'
  },
  {
    name: 'Documents',
    icons: 'bi bi-file-earmark-text',
    lastModified: '28 jan',
    filesCount: '980'
  }
]

export function MainGrid() {
  return (
    <BendoGrid>
      <Grids className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  divid-x divide-y py-10">
        <CardsWithIn className="cols-1">
          <Card1/>
        </CardsWithIn>
        <CardsWithIn  className="cols-1 ">
          <Card2/>
        </CardsWithIn>
        <CardsWithIn className="cols-1">
          {/* <FolderStack/> */}
          <Card3/>
        </CardsWithIn>
        <CardsWithIn className="cols-1 row-span-2">
          <Card4/> 
        </CardsWithIn>
      </Grids>
    </BendoGrid>
  );
}

export function BendoGrid({ children }) {
  return (
    <div className="max-w-7xl mx-auto p-5 bg-neutral-200">
      {children}
    </div>
  );
}

export function CardsWithIn({ children, className = "" }) {
  return (
    <div className={`p-2 bg-neutral-200 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeading ( props) {
  return(
    <>
      <p className={`text-2xl text-neutral-700 font-semibold w-full`}>
        {props.children}
      </p>
    </>
  )
}

export function Description (props) {
  return(
    <>
      <p className="text-sm text-neutral-600 dark:bg-neutral-200">
        {props.children}
      </p>
    </>
  )
}

export function Grids({ children, className = "" }) {
  return (
    <div
      className={`grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 row ${className}`}
    >
      {children}
    </div>
  );
}



export function Card1(){
   return(
      <>
          <div className="relative rounded-lg bg-white p-4 flex gap-4 items-center">
            <div className="size-10 rounded-md shadow-md bg-indigo-400"></div>
            <div className="flex flex-col">
              <CardHeading>Contact with Us</CardHeading>
              <Description>Join us in this dynamic and grow together</Description>
            </div>
            <div className="absolute font-bold border border-neutral-200 right-3 top-3  px-1  rounded-md shadow-md bg-neutral-200 text-neutral-800">
              <i className="bi bi-x"></i>
            </div>
          </div>
      </>
   )
}

export function Card2 () {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      <div className="bg-white p-6 rounded-md space-y-6">
        <div className="flex gap-2 bg-neutral-50 rounded-md outline-dashed shadow-sm w-full outline-2 p-1 ">
          <button
            type="button"
            className="text-center rounded-md w-full cursor-pointer shadow transition-all p-2
              bg-indigo-500 text-white
              hover:shadow-lg hover:bg-indigo-600
              focus:outline-dashed focus:outline-2 focus:outline-indigo-500
              active:shadow-[0_0_10px_2px_rgba(99,102,241,0.5)]"
          >
            Upload
          </button>
          <button
            className="text-center rounded-md w-full cursor-pointer shadow transition-all p-2
              bg-neutral-100 text-indigo-500
              hover:shadow-lg hover:bg-indigo-100
              focus:outline-dashed focus:outline-2 focus:outline-indigo-500
              active:shadow-[0_0_10px_2px_rgba(99,102,241,0.3)]"
          >
            Download
          </button>
        </div>
        {/* input drag and drop */}
        <div>
          <div
            className="relative items-center w-full h-48 rounded-md outline-dashed outline-2 outline-indigo-500 cursor-grabbing"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            style={{ overflow: "hidden" }}
          >
            <div className="p-2 justify-center items-center flex flex-col w-full h-full">
              <i className="bi-cloud-arrow-up text-4xl text-indigo-500"></i>
              <p className="w-40 text-center text-sm text-neutral-600">Drag & drop or click to choose file</p>
            </div>
            {show && (
              <motion.div
                className="pointer-events-none absolute z-10 px-2 py-1 bg-indigo-500 text-white text-xs rounded shadow"
                initial={false}
                animate={{ left: cursor.x, top: cursor.y }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                office-report.pdf
              </motion.div>
            )}  
          </div>
          
          <div className="flex flex-wrap justify-between pt-2">
            <p className="text-sm text-neutral-500 font-semibold">
              Supported formats: XLS, XLSL 
            </p>
            <p className="text-sm text-neutral-500 font-semibold">
              Max: 24 MB
            </p>
          </div>
        </div>
        {/*  another section below */}
        <div className="space-y-3">
          <div className="p-4 bg-neutral-200 rounded-md">
            <div className="flex flex-wrap gap-4">
              <div className="p-2 bg-neutral-50 rounded-md">
                <div className="size-11 bg-indigo-500 rounded-md shadow-sm shadow-neutral-500"></div>
              </div>
              <div className="flex-col items-start flex-1 relative">
                <p className="font-semibold text-md text-neutral-800">
                  file_format.png
                </p>
                <span className="text-sm font-semibold text-neutral-500">16 Mb</span>
                <i className="bi bi-x absolute right-0 top-0 text-lg"></i>
              </div>
            </div>
            {/* upload progress bar */}
            <div className="flex flex-row gap-2 w-full items-center pt-3">
              <div className="w-full bg-neutral-300 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-neutral-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: "72%" }}
                ></div>
              </div>
              <p className="text-md font-semibold text-neutral-500 text-right">72%</p>
            </div>
          </div>

          {/* anothoer file */}
          <div className="p-4 rounded-md bg-neutral-200">
            <div className="flex flex-wrap justify-between ">
              <div className="flex gap-3">
                <div className="px-2 py-2 bg-white rounded-md">
                  <div className="size-8 rounded-md shadow-md bg-indigo-400"></div>
                </div>
                <div>
                  <p className="text-md text-neutral-800 font-semibold">
                    data.xls
                  </p>
                  <p className="text-neutral-500 font-semibold text-sm">16 Mb</p>
                </div>
              </div>
              <div className="ml-auto gap-3 flex h-full items-center my-auto">
                <div className=" rounded-md cursor-pointer">
                  <i className="bi bi-download text-neutral-600 bg-neutral-100 px-2 py-1 rounded-md"></i>
                </div>
                <div className=" rounded-md cursor-pointer">
                  <i className="bi bi-trash text-neutral-600 bg-neutral-100 px-2 py-1 rounded-md"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Card3(){
  return(
    <>
      <div className=" w-full h-fit">
        <img src="assests/images/folderui.png" alt="folder ui" className="" />
      </div>
    </>
  )
}

export function Card4(){
  return(
    <>
      <StorageBarChart/>
    </>
  )
}