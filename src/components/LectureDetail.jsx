import React from "react";
import '../App.css'
import { useParams } from "react-router-dom";
import {lectures} from './ClinicalClasses'

function LectureDetail() {
  const { id } = useParams();
  const lecture = lectures.find((lecture) => lecture.id === parseInt(id));

  if (!lecture) {
    return <div>Lecture not found</div>;
  }

  return (
    <div>
      <h1>{lecture.title}</h1>
      <div className="video-container">
        <video
          className="responsive-video"
          controls
          controlsList="nodownload"
        >
          <source src={lecture.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default LectureDetail;
