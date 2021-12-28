import React, { useState, useEffect } from "react";
import { Button, Flex, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";
import { Section, Box, ListNav } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { designWorks1 } from "../../data";
import Card from "../../components/Card";
import Hudaldaa from "../../components/Card/hudaldaa";
import Companies from "../../components/Card/companies";
import Slider from "../../components/Slider";
import Slider2 from "../../components/Slider/company-slider";
import Slider3 from "../../components/Slider/news-slider";
import Partners from "../../components/Slider/PartnerSlider";
import SocialButton from "../../components/SocialButton/SocialButton";
import imgHeader from "../../assets/image/webp/head.svg";
import innerImg from "../../assets/image/png/huree2.png";
import LogoImg from "../../assets/image/jpg/logo.jpg";
import { Center } from "@chakra-ui/layout";
import { backgroundSize, justifyItems, left } from "styled-system";
import { alignItems } from "styled-system";
import { ceil } from "lodash";
import { useMediaQuery } from "react-responsive";

const company = [
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
];
const medee = [
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
];
const cards = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
const Works = ({ data }) => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 901 });
    return isDesktop ? children : null;
  };

  const Portrait = ({ children }) => {
    const Portrait = useMediaQuery({ maxWidth: 900 });
    return Portrait ? children : null;
  };
  console.log("Data ", data);
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("*");

  useEffect(() => {
    setItems(designWorks1);
  }, []);

  const filterBy = (cat) => {
    if (cat === "*") {
      setActiveLink("*");
      setItems(designWorks1);
    } else {
      const filteredItems = designWorks1.filter((item) => {
        return item.categories.indexOf(cat) !== -1;
      });
      setActiveLink(cat);
      setItems(filteredItems);
    }
  };

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <>
      <div style={{ backgroundColor: "#e6e6e6" }}>
        {/* <!-- Works Area --> */}
        <div
          style={{
            maxWidth: "1920px",
            justifyContent: "evenly",
          }}
        >
          <div className="container ">
            <h1 className="product-title">БҮТЭЭГДЭХҮҮН</h1>
            {/* <Flex> */}

            <Slider comps={data} length={5} />
            {/* </Flex> */}
          </div>
        </div>
        <div className="sda flex flex-col items-center justify-center my-20 relative">
          {/* <div
              id="innerImgBG"
              className="relative"
              style={{ backgroundImage: `url(${innerImg})` }}
            >
              <div className="absolute left-0 top-0 w-full h-full bg-black opacity-25"></div>
              <div style={{ top: "50%" }} className="absolute left-0 right-0 mx-auto w-3/4 h-auto">
                <div className="w-full h-full bg-blue-600 opacity-70"></div>
                <div id="scrollBarHide" className="h-96 relative">
                  <p className="text-white font-medium z-20">
                    Just use overflow: auto. Since your content by default just breaks to the next
                    line when it cannot fit on the current line, a horizontal scrollbar won't be
                    created (unless it's on an element that has word-wrapping disabled). For the
                    vertical bar,it will allow the content to expand up to the height you have
                    specified. If it exceeds that height, it will show a vertical scrollbar to view
                    the rest of the content, but will not show a scrollbar if it does not exceed the
                    height. Just use overflow: auto. Since your content by default just breaks to
                    the next line when it cannot fit on the current line, a horizontal scrollbar
                    won't be created (unless it's on an element that has word-wrapping disabled).
                    For the vertical bar,it will allow the content to expand up to the height you
                    have specified. If it exceeds that height, it will show a vertical scrollbar to
                    view the rest of the content, but will not show a scrollbar
                  </p>
                </div>
              </div>
            </div> */}

          <img style={{ filter: " brightness(50%)" }} src={innerImg} />
          <div id="innerImgText" className="w-4/5 h-1/4">
            <p
              style={{ lineHeight: "1.8", textShadow: "1px 1px #000" }}
              className="text-white text-xl"
            >
              created (unless it's on an element that has word-wrapping disabled). For the vertical
              bar,it will allow the content to expand up to the height you have specified. If it
              exceeds that height, it will show a vertical scrollbar to view the rest of the
              content, but will not show a scrollbar if it does not exceed the height. Just use
              overflow: auto. Since your content by default just breaks to the next line when it
              cannot fit on the current line, a horizontal scrollbar won't be created (unless it's
              on an element that has word-wrapping disabled). For the vertical bar,it will allow the
              content to expand up to the height you have specified. If it exceeds that height, it
              will show a vertical scrollbar to view the rest of the content, but will not show a
              scrollbar created (unless it's on an element that has word-wrapping disabled). For the
              vertical bar,it will allow the content to expand up to the height you have specified.
              If it exceeds that height, it will show a vertical scrollbar to view the rest of the
              content, but will not show a scrollbar if it does not exceed the height. Just use
              overflow: auto. Since your content by default just breaks to the next line when it
              cannot fit on the current line, a horizontal scrollbar won't be created (unless it's
              on an element that has word-wrapping disabled). For the vertical bar,it will allow the
              content to expand up to the height you have specified. If it exceeds that height, it
              will show a vertical scrollbar to view the rest of the content, but will not show a
              scrollbar
            </p>
          </div>
        </div>
        <style jsx>{`
          ::-webkit-scrollbar {
            width: 10px;
          }

          /* Track */
          ::-webkit-scrollbar-track {
            background: #d4d4d4;
            border-radius: 3px;
          }

          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: #696969;
            border-radius: 3px;
          }

          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          #innerImgText {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow-y: auto;
          }
          #scrollBarHide {
            overflow-y: auto;
          }

          #scrollBarHide::-webkit-scrollbar {
            opacity: 0.8;
          }
          #innerImgBG {
            background-size: contain;
            background-repeat: no-repeat;
            width: 100%;
            height: 0;
            padding-top: 50%; /* (img-height / img-width * container-width) */
            position: relative;
          }
          .our-p {
            color: white;
          }
          .our-h2 {
            color: white;
            font-size: 20px;
          }
          .sda {
            position: relative;
          }
          .product-title {
            color: #4a77fa;
            font-size: 18px;
            margin-left: 40px;
          }
          .news-title {
            color: #4a77fa;
            font-size: 18px;
            margin-left: 40px;
            text-align: center;
          }
          .medee-container {
            display: flex;
            align-items: center;

            justify-content: center;
          }
          .our-background {
            position: absolute;
            background-color: #0d6af2;
            opacity: 0.7;
            text-align: center;
            height: 180px;
            border-radius: 50px;
            width: 80%;
          }
        `}</style>
        <h1 className="news-title">МЭДЭЭ МЭДЭЭЛЭЛ</h1>
        <Center>
          <div className="medee-container container ">
            {/* <News />
          <News />
          <News /> */}
            <Slider3 comps={medee} length={3} />
          </div>
        </Center>

        {/*end*/}
        <h1 className="news-title">ХУДАЛДАА ҮЙЛЧИЛГЭЭ</h1>
        <div className="container ">
          <div className="row  flex">
            <div className="col-sm-12 col-md-10">
              <Center>
                <div className="hudaldaa flex">
                  <div className="col-sm-12 col-md-3">
                    <Hudaldaa />
                  </div>
                  <div className="col-sm-12 col-md-3">
                    <Hudaldaa />
                  </div>
                  <div className="col-sm-12 col-md-3">
                    <Hudaldaa />
                  </div>
                  <div className="col-sm-12 col-md-3">
                    <Hudaldaa />
                  </div>
                </div>
              </Center>
            </div>
            <div className="col-sm-12 col-md-2">
              <iframe
                width="450"
                height="300"
                src="https://www.youtube.com/embed/gWX88YvGDaM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center bg-white pt-8">
          <h1 className="text-blue-500 text-lg border-b-2 border-blue-500 text-center">
            ХАМТЫН АЖИЛЛАГАА
          </h1>
          <Partners comps={company} />
        </div>

        <SocialButton />
      </div>
    </>
  );
};
export default Works;
