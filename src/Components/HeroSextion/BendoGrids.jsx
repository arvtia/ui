import { Children } from "react";
import { motion, percent } from "framer-motion";
import { useState } from "react";
import StorageBarChart from "./Charts";
import { map } from "framer-motion/client";

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
export const fileShared = [
  {
    name:"Simon Hempe",
    email:"no@reply.group.com",
    img:"assests/images/face1.jpg"
  },
  {
    name:"Nepoliana Giuh",
    email:"auposic@ingo.org",
    img:"assests/images/face2.jpg"
  },
  {
    name:"Alberta Kimber",
    email:"kiberly@notion.org",
    img:"assests/images/face3.jpg"
  }
]

export function MainGrid() {
  return (
    <BendoGrid>
      <Grids className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  divid-x divide-y py-10">
        <CardsWithIn className="cols-1">
          <Card1/>
          <Card4 className="mt-5"/> 
        </CardsWithIn>
        <CardsWithIn  className="cols-1 ">
          <Card2/>
          <Card5 className="mt-4"/>
        </CardsWithIn>
        <CardsWithIn className="cols-1">
          {/* <FolderStack/> */}
          <Card3/>
          <Card6/>
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
            <div className="size-20 rounded-md shadow-md ">
              <img src="assests/images/shiny.webp" alt="" />
            </div>
            <div className="flex flex-col w-[70%]">
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
        <div className="space-y-2">
          <div className="p-4 bg-neutral-200 rounded-md">
            <div className="flex flex-wrap gap-4">
              <div className="p-2 bg-neutral-50 rounded-md">
                <div className="size-11 bg-indigo-500 rounded-md shadow-sm shadow-neutral-500">
                  <img src="assests/images/figma.jpg" alt="" />
                </div>
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
                  <div className="size-8 rounded-md shadow-md ">
                  <img src="assests/images/xls.png" alt="" />
                  </div>
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

export function Card4({className =""}){
  return(
    <>
      <div className={`${className}`}>
        <StorageBarChart/>
      </div>
    </>
  )
}

export function Card5({className =""}) {
  return(
    <>
      <div className={` ${className} w-full h-fit bg-white rounded-md pt-5 px-5`}>
        <div className="text-3xl text-center py-4 bg-indigo-100 text-neutral-600 font-bold rounded-md">
          26,<span className="text-neutral-400 font-bold">400%</span>
        </div>
        <div className="flex justify-between gap-2 py-3 items-center">
          <div className="items-center ">
            <p className="font-bold text-neutral-600">Ready to delete</p>
            <p className="text-neutral-500 font-bold text-sm">15 files</p>
          </div>
          <button className="rounded-md ring-1 ring-red-400 px-3 py-1 text-sm text-red-600 bg-red-200">Delete</button>
        </div>
      </div>
    </>
  )
}

export function Card6() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-bold text-neutral-800">Shared Files</p>
        <button className="text-sm px-3 py-1 rounded-lg bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition">
          See all
        </button>
      </div>

      {/* List */}
      <div className="divide-y divide-neutral-200">
        {fileShared.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-3 hover:bg-neutral-50 transition rounded-lg px-2"
          >
            <div className="flex gap-3 items-center">
              {/* image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-md object-cover ring-1 ring-neutral-300"
              />
              <div>
                <p className="text-sm font-semibold text-neutral-800">
                  {item.name}
                </p>
                <p className="text-xs text-neutral-500">{item.email}</p>
              </div>
            </div>
            <i className="bi bi-chevron-right text-neutral-500"></i>
          </div>
        ))}
      </div>
      {/* copy section  */}
      <div className="w-full relative rounded-md px-2 py-2">
        <input
          type="text"
          className="w-full bg-neutral-200 h-10 rounded-lg ring-neutral-300 ring-1 pr-16" // <-- add pr-16 so text doesn't overlap button
        />
        <button
          className="h-7 px-3 absolute right-4 top-1/2 -translate-y-1/2 
                    bg-neutral-50 rounded-lg ring-1 ring-neutral-400 text-sm"
        >
          <i className="bi bi-copy"></i> Copy
        </button>
      </div>


    </div>
  );
}
