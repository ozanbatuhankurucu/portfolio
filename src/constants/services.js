import React from "react"
import { FaCode, FaSketch, FaAndroid, FaApple } from "react-icons/fa"
import { SiServerless } from "@react-icons/all-files/si/SiServerless"

export default [
  {
    id: 1,
    icons: [<FaCode key="1" className="service-icon" />],
    title: "Web Development",
    text: `I build and maintenance websites. The work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.`,
  },
  {
    id: 2,
    icons: [<SiServerless key="1" className="service-icon" />],
    title: "Serverless",
    text: `A serverless provider allows users to write and deploy code without the hassle of worrying about the underlying infrastructure. Since I concentrate on the Front-end, I am more interested in serverless technologies.`,
  },
  {
    id: 3,
    icons: [
      <FaApple key="1" className="service-icon" />,
      <FaAndroid key="2" className="service-icon android" />,
    ],
    title: "Mobile App Development",
    text: `ReactNative is the best option for me because it includes everything to consolidate the technologies I use in my professional business life and allows me to develop cross-platform applications.`,
  },
]
