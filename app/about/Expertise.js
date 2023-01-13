"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "./data";
import {
  IoCaretBackOutline,
  IoCaretForwardOutline,
  IoStar,
} from "react-icons/io5";

const Expertise = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <VerticalTimeline>
        {Experience.map((item) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(21, 24, 31)" }}
            date={item.date}
            iconStyle={{ background: "rgb(21, 24, 31)", color: "#fbc40e" }}
            icon={item.iconsSrc}
            key={item.id}
          >
            <h3 className="vertical-timeline-element-title text-white font-bold flex items-center space-x-2">
              <IoStar className="text-primary mr-2" />
              {item.location}
            </h3>
            <h4 className="vertical-timeline-element-subtitle flex items-center space-x-2">
              <IoCaretForwardOutline className="text-pome mr-1" />
              {item.title}
              <IoCaretBackOutline className="text-pome" />
            </h4>
            <p className="text-sm text-left">{`- ${item.description}`}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Expertise;
