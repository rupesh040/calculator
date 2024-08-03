"use client"
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Home() {
    const [value,setValue] = useState("");
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };

      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
  return (
  <>
  <div class="container ">
    <div class="calculator">
        <motion.form action="" variants={container} initial="hidden" animate="visible">
            <div className="display">
                <input type="text" value={value} variants={item}/>
            </div>
            <motion.div  variants={item}>
                <input type="button" value="AC" onClick={e => setValue("")} />
                <input type="button" value="DE" onClick={e => setValue(value.slice(0,-1))} />
                <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
            </motion.div>
            <motion.div variants={item}>
                <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
            </motion.div>
            <motion.div variants={item}>
                <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
            </motion.div>
            <motion.div variants={item}>
                <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
            </motion.div>
            <motion.div variants={item}>
                <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
                <input type="button" value="=" className="equal" onClick={e => setValue(eval(value))}/>
            </motion.div>

            <div class="circle w-52 h-52 b rounded-full absolute top-[0%] left-[-20%] translate-x-[-50%]
  translate-y-[-50%] z-[-1] bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl" ></div>
    <div class="circle w-44 h-44 b rounded-full absolute top-[100%] left-[120%] translate-x-[-50%]
  translate-y-[-50%] z-[-1] bg-gradient-to-r from-sky-500 to-indigo-500 blur-3xl" ></div>
        </motion.form>
    </div>
  <h1 className="text-[20vw] rounded-full absolute top-[70%] left-[50%] translate-x-[-50%]
  translate-y-[-50%] z-[1] opacity-40 text">Rupesh.</h1>
  </div>


  </>
  );
}
