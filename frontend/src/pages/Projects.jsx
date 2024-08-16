import React, { useState, useRef, useEffect } from "react";
import styles from "/src/Css/page.module.css";
import cross from "/src/assets/cross.svg";
import { googlecolor, data } from "/src/TeamData/ProjectData.js";
import MorProjects from "../components/ProjectPageComponents/MorProjects";
import pc from "/src/assets/Projectcard.svg";
import img from "/src/assets/project.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const getUpdatedStyles = (color) => ({
  backgroundColor: color,
});

function Project() {
  const [display, setdisplay] = useState(false);
  const [num, setnum] = useState(0);
  const [datan, setdatan] = useState(0);
  const [color, setcolor] = useState(googlecolor[num]);
  const desc = useRef();
  const [projectdata, setdata] = useState(data[num]);
  useEffect(() => {
    //do something
    setdata(data[datan]);
  }, [datan]);

  const handleNextCard = () => {
    const nextIndex = (num + 1) % googlecolor.length;
    const dataindex = (datan + 1) % data.length;
    setdatan(dataindex);
    console.log(num + "num");
    setnum(nextIndex);
    setcolor(googlecolor[nextIndex]);
  };

  return (
    <>
      <div className={styles.main} style={getUpdatedStyles(color)}>
        <Navbar />
        {!display ? (
          <Card
            setdisplay={setdisplay}
            onNextCard={handleNextCard}
            color={color}
            datan={datan}
          />
        ) : null}
        {display ? (
          <ProjectDesc
            setdisplay={setdisplay}
            desc1={projectdata.desc1}
            desc2={projectdata.desc2}
            name={projectdata.Name}
            stats={projectdata.ProjectStat[0]}
            color={color}
            getUpdatedStyles={getUpdatedStyles}
          />
        ) : null}
        <Footer />
      </div>
    </>
  );
}

export default Project;

function Stats({ stats }) {
  return (
    <div className="flex gap-x-[45px] mt-[28px]">
      <div>
        <h3 className="font-bold text-[50px]">{stats.Members}</h3>
        <p className="font-semibold text-[20px]">Members</p>
      </div>
      <div>
        <h3 className="font-bold text-[50px]">{stats.Projects}</h3>
        <p className="font-semibold text-[20px]">Projects</p>
      </div>
      <div>
        <h3 className="font-bold text-[50px]">{stats.Departments}</h3>
        <p className="font-semibold text-[20px]">Departments</p>
      </div>
    </div>
  );
}

function Title({ content }) {
  return <h2 className={styles.name}>{content}</h2>;
}

function ProjectDesc({ setdisplay, desc1, desc2, name, stats, color }) {
  return (
    <div id="container1" className={styles.container1}>
      <div className={styles.crossf}>
        <img
          src={cross}
          alt=""
          className="p-3 bg-[#f5f5f5] rounded-full mt-[20px] self-start"
          onClick={() => setdisplay(false)}
        />
        <div className={styles.full}>
          <div className="flex items-start bg-slate-700 w-fit">
            <img src={img} alt="" className={styles.photo} />
          </div>
          <p className={styles.tl} style={getUpdatedStyles(color)}>
            Tl;DR
          </p>
          <Title content={name} />
          <div className={styles.desc}>
            <p>{desc1}</p>
            <p>{desc2}</p>
          </div>
          <p className="mt-4 font-bold text-[20px]">Project Stats</p>
          <Stats stats={stats} />
        </div>
      </div>

      <div className="w-[90%]">
        <p className="bg-black text-white w-fit rounded-full px-7 py-3 text-[18px] font-semibold">
          More
        </p>
        <Title content={"More Projects"} />
        <p className={styles.more}>
          Have a look at other projects made by GDSC Thapar
        </p>
        <div className="flex justify-between">
          <MorProjects color={color} getUpdatedStyles={getUpdatedStyles} />
          <MorProjects color={color} getUpdatedStyles={getUpdatedStyles} />
          <MorProjects color={color} getUpdatedStyles={getUpdatedStyles} />
        </div>
      </div>
    </div>
  );
}

function Card({ setdisplay, onNextCard, color, datan }) {
  return (
    <ProejctCard
      onNextCard={onNextCard}
      color={color}
      datan={datan}
      setdisplay={setdisplay}
    />
  );
}

function ProejctCard({ onNextCard, color, datan, setdisplay }) {
  return (
    <div
      id="box-card"
      className="flex w-full flex-col items-center justify-center gap-32 p-8 mt-10 mb-[40px] md:flex-row "
    >
      <button
        className="border-b-[3px] border-b-black text-2xl font-semibold"
        onClick={() => setdisplay(true)}
      >
        Open Card!
      </button>
      <div className="relative">
        <div
          id="card"
          className="relative z-20 flex h-[417px] w-[290px] rotate-0 flex-col justify-center gap-[20px] rounded-2xl bg-[#f5f5f5] p-[20px] border-[1px]"
        >
          <button
            className="bg-[#ea4335] h-[30px] w-[90px] rounded-full text-white text-[15px] font-semibold"
            style={getUpdatedStyles(color)}
          >
            TL;DR
          </button>
          <h1 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <div className="flex h-[250px] w-[250px] items-center justify-center">
            <img className="rounded-lg " src={pc} alt="" />
          </div>
        </div>
        <div className="absolute left-[10px] top-[10px] z-10 h-[417px] w-[290px] rotate-[10deg] rounded-2xl bg-[#f5f5f5] border-[1px]"></div>
        <div className="absolute left-[20px] top-[20px] z-0 h-[417px] w-[290px] rotate-[20deg] rounded-2xl bg-[#f5f5f5] border-[1px]"></div>
      </div>
      <button
        className="border-b-[3px] border-b-black text-2xl font-semibold"
        onClick={onNextCard}
      >
        {datan === 6 ? "Start Over!" : "Next Card!"}
      </button>
    </div>
  );
}
