import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Footer from './Footer'
import Lecture1 from "../assets/lecture1.mp4";
import Lecture2 from "../assets/lecture2.mp4";
import Lecture3 from "../assets/lecture3.mp4";
import Lecture4 from "../assets/lecture4.mp4";
import Lecture5 from "../assets/lecture5.mp4";
import Lecture6 from "../assets/lecture6.mp4";
import Lecture7 from "../assets/lecture7.mp4";
import Lecture8 from "../assets/lecture8.mp4";
import Lecture9 from "../assets/lecture9.mp4";
import Lecture10 from "../assets/lecture10.mp4";
import Lecture11 from "../assets/lecture11.mp4";
import Lecture12 from "../assets/lecture12.mp4";
import Lecture13 from "../assets/lecture13.mp4";
import Lecture14 from "../assets/lecture14.mp4";
import Lecture15 from "../assets/lecture15.mp4";
import Lecture16 from "../assets/lecture16.mp4";
import Lecture17 from "../assets/lecture17.mp4";
import Lecture18 from "../assets/lecture18.mp4";
import Lecture19 from "../assets/lecture19.mp4";
import Lecture20 from "../assets/lecture20.mp4";
import Lecture21 from "../assets/lecture21.mp4";
import Lecture22 from "../assets/lecture22.mp4";
import InnerNavmenu from "./InnerNav";
export const lectures = [
  {
    id: 1,
    title: "Allergic Rhinitus",
    src: Lecture1,
  },
  {
    id: 2,
    title: "Appendicitus",
    src: Lecture2,
  },
  {
    id: 3,
    title: "Asthma",
    src: Lecture3,
  },
  {
    id: 4,
    title: "Backache",
    src: Lecture4,
  },
  {
    id: 5,
    title: "Bedwetting",
    src: Lecture5,
  },
  {
    id: 6,
    title: "Breast lump",
    src: Lecture6,
  },
  {
    id: 7,
    title: "Cervical spondylosis",
    src: Lecture7,
  },
  {
    id: 8,
    title: "Diarrhoea",
    src: Lecture8,
  },
  {
    id: 9,
    title: "Dysmenorrhea",
    src: Lecture9,
  },
  {
    id: 10,
    title: "Fever",
    src: Lecture10,
  },
  {
    id: 11,
    title: "Fissure, Fistula & Piles",
    src: Lecture11,
  },
  {
    id: 12,
    title: "Gangrene, Cellulitus & Erysipelas",
    src: Lecture12,
  },
  {
    id: 13,
    title: "Hairfall",
    src: Lecture13,
  },
  {
    id: 14,
    title: "Hoarsness",
    src: Lecture14,
  },
  {
    id: 15,
    title: "Rheumatism",
    src: Lecture15,
  },
  {
    id: 16,
    title: "Migraine",
    src: Lecture16,
  },
  {
    id: 17,
    title: "Nasal polyp, Sinusitus & Epistaxis",
    src: Lecture17,
  },
  {
    id: 18,
    title: "Neck glands",
    src: Lecture18,
  },
  {
    id: 19,
    title: "Obesity",
    src: Lecture19,
  },
  {
    id: 20,
    title: "Ovarian Pathologies",
    src: Lecture20,
  },
  {
    id: 21,
    title: "Renal Claculi, Cystitis & UTI",
    src: Lecture21,
  },
  {
    id: 22,
    title: "Tonsilitus, Toothache & Urticaria",
    src: Lecture22,
  },
];
function ClinicalClasses() {
  return (
    <div>
    <InnerNavmenu/>
      <div className="h2-center">
        <h2>30 Days 30 Clinical Classes</h2>
      </div>
      <video src=""></video>
      <Card>
        <Card.Body>
          <Card.Title>About the Course</Card.Title>
          The curriculum is based on years of experiences of Dr.E.S.Khan both in
          teaching and running successful private practice in heart of Kolkata
          and its suburbs since he graduated from National Institute of
          Homoeopathy in 2015.{" "}
        </Card.Body>
        <Card.Body>
          Where he discusses common clinical conditions encountered in daily
          practice. Though the name suggests 30 clinical conditions are
          discussed in this course but over the time this happened to be updated
          to include more than 30 conditions, and there are plans to update it
          with more clinical cases in the future, which you can access for free.
        </Card.Body>
      </Card>
      <Accordion>
        {lectures.map((lecture) => (
          <Accordion.Item eventKey={lecture.id.toString()} key={lecture.id}>
            <Accordion.Header>
              <Link to={`/lecture/${lecture.id}`}>{lecture.title}</Link>
            </Accordion.Header>
            <Accordion.Body>30 Days 30 Clinical Classes</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Footer/>
    </div>
  );
}

export default ClinicalClasses;
