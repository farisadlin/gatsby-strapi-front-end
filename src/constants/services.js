import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
import { DiDatabase } from "react-icons/di"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I have experience building websites using HTML, CSS, JavaScript, ReactJS, Node.JS, GatsbyJS, GraphQL, and SASS.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `I have an excellent fundamental concept of UI/UX. I can make it work for you`,
  },
  {
    id: 3,
    icon: <DiDatabase className="service-icon" />,
    title: "Data Structures & Algorithms",
    text: `As coming from a master's graduate IT background, I have a good grasp of fundamental concepts of DSA.`,
  },
]
