
import { MdSchool } from "react-icons/md"
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {motion} from "framer-motion";
const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:0.5}}
      className='my-20 text-center text-4xl'>Education</motion.h1>
      <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "10px solid  white" }}
            date="2017 - 2018"
            iconStyle={{ background: "#c084fc", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title text-purple-400">10th</h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-900">
              Fatima Convent School,Ghaziabad
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "10px solid  white" }}
            date="2019 - 2020"
            iconStyle={{ background: "#c084fc", color: "#fff" }}
            icon={<MdSchool className="" />}
          >
            <h3 className="vertical-timeline-element-title  text-purple-400">12th</h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-900">
            Fatima Convent School,Ghaziabad
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "white" }}
            contentArrowStyle={{ borderRight: "10px solid  white" }}
            date="2021 - 2025"
            iconStyle={{ background: "#c084fc", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title text-purple-400">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-900">
             JSS Academy of Technical Education,Noida
            </h4>
          </VerticalTimelineElement> 
        </VerticalTimeline>
    </div>
  )
}

export default Education
