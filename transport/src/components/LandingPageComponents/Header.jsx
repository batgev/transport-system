import {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import useAuthStore from "../../Store/authStore"

const Header = () => {
  const {setActiveDashboard} = useAuthStore()
    const nav = [{id:"01",text:"HOME"},
        {id:"02",text:"ABOUT US"},
       
        {id:"03",text:"FLEET"},
        {id:"04",text:"CONTACT US"}
    ]

    const [mobileSideBarToggle,setMobileSideBarToggle] = useState(false)

const [currentDashboard,setCurrentDashboard] = useState("HOME");

  return (
    <header className="  w-full flex flex-col ">
      <div className="flex justify-between w-full shadow p-6 bg-[#0c1120] text-white">
        <div>
          <div className="absolute flex items-center gap-2 ">
            <img
              src="logo.png"
              alt=""
              className="object-cover rounded-full h-18 w-18 border-2 border-[#C9A84C]"
            />
            <span className=" flex flex-col text-2xl italic">
              <span className="">
                JO<span className="text-[#C9A84C] ">JMO</span>
              </span>
              <span className="text-sm ">
                <span className="text-shadow-2xs text-shadow-black">
                  {" "}
                  BLANK
                </span>
                <span className="text-[#C9A84C] ">LINK</span>
              </span>
            </span>
          </div>
        </div>
        <div className="md:hidden" onClick={() => setMobileSideBarToggle(true)}>
          <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer" />
        </div>
        <ul
          className={`${mobileSideBarToggle ? "flex flex-col  absolute z-10 right-2 rounded-md transition-all duration-75 ease-in-out p-4 w-38 gap-4 bg-[#06080F]" : "hidden  md:flex"} md:w-[60%] md:gap-16 md:justify-end `}
        >
          <span
            className={`md:hidden text-red-500 `}
            onClick={() => {
              setMobileSideBarToggle(false);
            }}
          >
            X
          </span>
          {nav.map((item) => (
            <li
              key={item.id}
              className={`${currentDashboard === item.text ? "text-cyan-500" : ""} cursor-pointer`}
              onClick={() => {
                setActiveDashboard(item.text);
                setMobileSideBarToggle(false);
                setCurrentDashboard(item.text);
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header
