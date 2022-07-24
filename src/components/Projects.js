import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/blog_animal1.jpg";
import projImg2 from "../assets/img/blog_animal2.jpg";
import projImg3 from "../assets/img/blog_animal3.jpg";
import projImg4 from "../assets/img/blog_animal4.jpg";
import projImg5 from "../assets/img/blog_animal5.jpg";
import projImg6 from "../assets/img/blog_animal6.jpg";
import projImg7 from "../assets/img/blog_animal7.jpg";
import projImg8 from "../assets/img/blog_animal8.jpg";
import projImg9 from "../assets/img/blog_animal9.jpg";
import projImg10 from "../assets/img/blog_animal10.jpg";
import projImg11 from "../assets/img/blog_animal11.jpg";
import projImg12 from "../assets/img/blog_anime1.jpg";
import projImg13 from "../assets/img/blog_anime2.jpg";
import projImg14 from "../assets/img/blog_anime3.jpg";
import projImg15 from "../assets/img/blog_anime4.jpg";
import projImg16 from "../assets/img/blog_anime5.png";
import projImg17 from "../assets/img/blog_anime6.jpg";
import projImg18 from "../assets/img/blog_anime7.jpg";
import projImg19 from "../assets/img/blog_anime8.jpg";
import projImg20 from "../assets/img/blog_anime9.jpg";
import projImg21 from "../assets/img/blog_anime10.jpg";
import projImg22 from "../assets/img/blog_game1.webp";
import projImg23 from "../assets/img/blog_game2.jpg";
import projImg24 from "../assets/img/blog_game3.jpg";
import projImg25 from "../assets/img/blog_game4.jpg";
import projImg26 from "../assets/img/blog_game5.jpg";
import projImg27 from "../assets/img/blog_game6.jpg";
import projImg28 from "../assets/img/blog_game7.webp";
import projImg29 from "../assets/img/blog_game8.jpg";
import projImg30 from "../assets/img/blog_game9.jpg";
import projImg31 from "../assets/img/blog_game10.jpg";
import projImg32 from "../assets/img/blog_game11.webp";
import projImg33 from "../assets/img/blog_game13.jpg";
import projImg34 from "../assets/img/blog_game112.jpg";
import projImg35 from "../assets/img/blog_infinity1.jpg";
import projImg36 from "../assets/img/blog_infinity2.jpg";
import projImg37 from "../assets/img/blog_infinity3.jpg";
import projImg38 from "../assets/img/blog_infinity4.jpg";
import projImg39 from "../assets/img/blog_infinity5.jpg";
import projImg40 from "../assets/img/blog_infinity6.jpg";
import projImg41 from "../assets/img/blog_infinity7.jpg";
import projImg42 from "../assets/img/blog_infinity8.jpg";
import projImg43 from "../assets/img/blog_infinity9.jpg";
import projImg44 from "../assets/img/blog_infinity10.jpg";
import projImg45 from "../assets/img/blog_infinity11.jpg";
import projImg46 from "../assets/img/blog_infinity12.jpg";
import projImg47 from "../assets/img/blog_logo1.jpeg";
import projImg48 from "../assets/img/blog_logo2.jpg";
import projImg49 from "../assets/img/blog_logo3.jpg";
import projImg50 from "../assets/img/blog_logo4.jpg";
import projImg51 from "../assets/img/blog_logo5.jpg";
import projImg52 from "../assets/img/blog_logo6.jpg";
import projImg53 from "../assets/img/blog_logo7.jpg";
import projImg54 from "../assets/img/blog_logo8.jpg";
import projImg55 from "../assets/img/blog_logo9.jpg";
import projImg56 from "../assets/img/blog_logo10.jpg";
import projImg57 from "../assets/img/blog_logo11.jpg";
import projImg58 from "../assets/img/blog_logo12.jpg";
import projImg59 from "../assets/img/blog_vehicle1.jpg";
import projImg60 from "../assets/img/blog_vehicle2.jpg";
import projImg61 from "../assets/img/blog_vehicle3.jpg";
import projImg62 from "../assets/img/blog_vehicle4.jpg";
import projImg63 from "../assets/img/blog_vehicle5.jpg";
import projImg64 from "../assets/img/blog_vehicle6.jpg";
import projImg65 from "../assets/img/blog_vehicle7.webp";
import projImg66 from "../assets/img/blog_vehicle8.jpg";
import projImg67 from "../assets/img/blog_vehicle9.jpg";
import projImg68 from "../assets/img/blog_vehicle10.jpg";
import projImg69 from "../assets/img/blog_vehicle11.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { CodeSlash } from 'react-bootstrap-icons';
import { Activity } from 'react-bootstrap-icons';
import { Bookmarks } from 'react-bootstrap-icons';
import { Check2All } from 'react-bootstrap-icons';
import { Controller } from 'react-bootstrap-icons';
import { Command } from 'react-bootstrap-icons';
import { CloudDownload } from 'react-bootstrap-icons';

export const Projects = () => {

  const projects = [
    {
      title: "Logo",
      description: "โลโก้",
      imgUrl: projImg56,
    },
    {
      title: "Logo",
      description: "โลโก้",
      imgUrl: projImg57,
    },
    {
      title: "Logo",
      description: "โลโก้",
      imgUrl: projImg58,
    },
    {
      title: "Vehical",
      description: "Car",
      imgUrl: projImg59,
    },
    {
      title: "Animal",
      description: "Chameleon",
      imgUrl: projImg2,
    },
    {
      title: "Animal",
      description: "White Tiger",
      imgUrl: projImg3,
    },
    {
      title: "Animal",
      description: "Macaw Parrot",
      imgUrl: projImg4,
    },
    {
      title: "Animal",
      description: "Raccoon",
      imgUrl: projImg5,
    },
    {
      title: "Animal",
      description: "Dog",
      imgUrl: projImg6,
    },
    {
      title: "Animal",
      description: "Flamingo",
      imgUrl: projImg7,
    },
    {
      title: "Animal",
      description: "Elephant",
      imgUrl: projImg8,
    },
    {
      title: "Animal",
      description: "Turtle",
      imgUrl: projImg9,
    },
    {
      title: "Animal",
      description: "Python",
      imgUrl: projImg10,
    },
    {
      title: "Animal",
      description: "Koala",
      imgUrl: projImg11,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg12,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg13,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg14,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg15,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg16,
    },
    {
      title: "Game",
      description: "FreeFire",
      imgUrl: projImg32,
    },
    {
      title: "Game",
      description: "Dota2",
      imgUrl: projImg33,
    },
    {
      title: "Game",
      description: "Pubg",
      imgUrl: projImg34,
    },
    {
      title: "Infinity",
      description: "अनंतता",
      imgUrl: projImg35,
    },
    {
      title: "Infinity",
      description: "अनंतता",
      imgUrl: projImg36,
    },
    {
      title: "Infinity",
      description: "अनंतता",
      imgUrl: projImg37,
    },
    {
      title: "Infinity",
      description: "अनंतता",
      imgUrl: projImg38,
    },
    {
      title: "Infinity",
      description: "अनंतता",
      imgUrl: projImg39,
    },
    {
      title: "Infinity",
      description: "अनंतता",
      imgUrl: projImg40,
    },
    {
      title: "Infinity",
      description: "अनंतता",
      imgUrl: projImg41,
    },
    {
      title: "Infinity",
      description: "अनंतता",
      imgUrl: projImg42,
    },
    {
      title: "Infinity",
      description: "अनंतता",
      imgUrl: projImg43,
    },
    {
      title: "Infinity",
      description: "अनंतता",
      imgUrl: projImg44,
    },
    {
      title: "Infinity",
      description: "अनंतता",
      imgUrl: projImg45,
    },
    {
      title: "Game",
      description: "FortNite",
      imgUrl: projImg22,
    },
    {
      title: "Game",
      description: "FortNite",
      imgUrl: projImg23,
    },
    {
      title: "Game",
      description: "FortNite",
      imgUrl: projImg24,
    },
    {
      title: "Game",
      description: "Clash of Clans",
      imgUrl: projImg25,
    },
    {
      title: "Game",
      description: "Clash of Clans",
      imgUrl: projImg26,
    },
    {
      title: "Infinity",
      description: "अनंतता",
      imgUrl: projImg46,
    },
    {
      title: "Logo",
      description: "โลโก้",
      imgUrl: projImg47,
    },
    {
      title: "Logo",
      description: "โลโก้",
      imgUrl: projImg48,
    },
    {
      title: "Logo",
      description: "โลโก้",
      imgUrl: projImg49,
    },
    {
      title: "Logo",
      description: "โลโก้",
      imgUrl: projImg50,
    },
    {
      title: "Animal",
      description: "Deer",
      imgUrl: projImg1,
    },
    {
      title: "Logo",
      description: "โลโก้",
      imgUrl: projImg51,
    },
    {
      title: "Logo",
      description: "โลโก้",
      imgUrl: projImg52,
    },
    {
      title: "Logo",
      description: "โลโก้",
      imgUrl: projImg53,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg19,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg20,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg21,
    },
    {
      title: "Game",
      description: "Clash of Clans",
      imgUrl: projImg27,
    },
    {
      title: "Logo",
      description: "โลโก้",
      imgUrl: projImg54,
    },
    {
      title: "Logo",
      description: "โลโก้",
      imgUrl: projImg55,
    },
  
    {
      title: "Vehical",
      description: "Car",
      imgUrl: projImg60,
    },
    {
      title: "Vehical",
      description: "Car",
      imgUrl: projImg61,
    },
    {
      title: "Vehical",
      description: "Car",
      imgUrl: projImg62,
    },
    {
      title: "Vehical",
      description: "Car",
      imgUrl: projImg63,
    },
    {
      title: "Vehical",
      description: "Car",
      imgUrl: projImg64,
    },
    {
      title: "Vehical",
      description: "Bicycle",
      imgUrl: projImg65,
    },
    {
      title: "Vehical",
      description: "Bicycle",
      imgUrl: projImg66,
    },
    {
      title: "Vehical",
      description: "Van",
      imgUrl: projImg67,
    },
    {
      title: "Vehical",
      description: "Van",
      imgUrl: projImg68,
    },
    {
      title: "Vehical",
      description: "Car",
      imgUrl: projImg69,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg17,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg18,
    },
    {
      title: "Game",
      description: "Dota2",
      imgUrl: projImg28,
    },
    {
      title: "Game",
      description: "Dota2",
      imgUrl: projImg29,
    },
    {
      title: "Game",
      description: "Dota2",
      imgUrl: projImg30,
    },
    {
      title: "Game",
      description: "FreeFire",
      imgUrl: projImg31,
    },

  ];

  const projects2 = [
    {
      title: "Game",
      description: "FortNite",
      imgUrl: projImg22,
    },
    {
      title: "Game",
      description: "FortNite",
      imgUrl: projImg23,
    },
    {
      title: "Game",
      description: "FortNite",
      imgUrl: projImg24,
    },
    {
      title: "Game",
      description: "Clash of Clans",
      imgUrl: projImg25,
    },
    {
      title: "Game",
      description: "Clash of Clans",
      imgUrl: projImg26,
    },
    {
      title: "Game",
      description: "Clash of Clans",
      imgUrl: projImg27,
    },
    {
      title: "Game",
      description: "Dota2",
      imgUrl: projImg28,
    },
    {
      title: "Game",
      description: "Dota2",
      imgUrl: projImg29,
    },
    {
      title: "Game",
      description: "Dota2",
      imgUrl: projImg30,
    },
    {
      title: "Game",
      description: "FreeFire",
      imgUrl: projImg31,
    },
    {
      title: "Game",
      description: "FreeFire",
      imgUrl: projImg32,
    },
    {
      title: "Game",
      description: "Dota2",
      imgUrl: projImg33,
    },
    {
      title: "Game",
      description: "Pubg",
      imgUrl: projImg34,
    },
  ];

  const projects3 = [
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg12,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg13,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg14,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg15,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg16,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg17,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg18,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg19,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg20,
    },
    {
      title: "Anime",
      description: "日本動畫片",
      imgUrl: projImg21,
    },

  ];

  return (
    <section className="project" id="blog">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Blog <Activity sizr="30" /></h2>
                <p>With beautiful 4k pictures and blog posts <Bookmarks size="25" /></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">



                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All <Check2All size="25" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Game <Controller size="25" /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Anime <Command size="25" /></Nav.Link>
                    </Nav.Item>
                  </Nav>


                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                   
                   
                   
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>



                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>



                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>



                  </Tab.Content>
                </Tab.Container>
                <a class="btn" href="" target="_blanck">Download Blog &nbsp; <CloudDownload size="25" /></a>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
