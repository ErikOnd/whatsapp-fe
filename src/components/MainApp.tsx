import React from "react";
import { Row, Col, Container, Form, Image } from "react-bootstrap";
import {
  Filter,
  PeopleFill,
  Circle,
  PencilSquare,
  ChevronDown,
  CameraVideo,
  Telephone,
  Search,
  EmojiSmile,
  Paperclip,
  Mic,
} from "react-bootstrap-icons";

const MainApp = () => {
  const contacts = [
    {
      username: "JohnDoe",
      profileImage:
        "https://servnettech.com/wp-content/uploads/2022/08/c293b66e546446e8a0fa6f258c28b219.jpg",
    },
    {
      username: "JaneDoe",
      profileImage:
        "https://servnettech.com/wp-content/uploads/2022/08/c293b66e546446e8a0fa6f258c28b219.jpg",
    },
    {
      username: "BobSmith",
      profileImage:
        "https://servnettech.com/wp-content/uploads/2022/08/c293b66e546446e8a0fa6f258c28b219.jpg",
    },
  ];

  return (
    <Container fluid>
      <Row className="main-header">
        <Col className="d-flex align-items-center justify-content-end header-left">
          <Image
            src="https://servnettech.com/wp-content/uploads/2022/08/c293b66e546446e8a0fa6f258c28b219.jpg"
            alt="user-img"
            className="mr-4"
          ></Image>
          <PeopleFill
            color="rgb(84 101 111)"
            size={20}
            className="mr-4"
          ></PeopleFill>
          <Circle color="rgb(84 101 111)" size={20} className="mr-4"></Circle>
          <PencilSquare
            color="rgb(84 101 111)"
            size={20}
            className="mr-4"
          ></PencilSquare>
          <ChevronDown
            color="rgb(84 101 111)"
            size={20}
            className="mr-2"
          ></ChevronDown>
        </Col>
        <Col className="d-flex align-items-center header-right justify-content-between pl-0">
          <Col className="pl-0 text-left">
            <Image
              src="https://servnettech.com/wp-content/uploads/2022/08/c293b66e546446e8a0fa6f258c28b219.jpg"
              alt="user-img"
              className="mr-4  ml-3 align-self-start"
            ></Image>
            <h6 className="mb-0">John Doe</h6>
          </Col>
          <Col className="text-right pb-2">
            <CameraVideo
              color="rgb(84 101 111)"
              size={20}
              className="mr-4"
            ></CameraVideo>
            <Telephone
              color="rgb(84 101 111)"
              size={20}
              className="mr-4"
            ></Telephone>
            <span className="mr-4 header-seperator">|</span>
            <Search color="rgb(84 101 111)" size={20} className="mr-4"></Search>
            <ChevronDown
              color="rgb(84 101 111)"
              size={20}
              className="mr-2"
            ></ChevronDown>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="user-col">
          <Row className="search-newChat align-items-center justify-content-between">
            <Col className="pl-2">
              <Form>
                <Form.Group controlId="formSearch" className="m-0">
                  <Form.Control
                    type="text"
                    placeholder="Search or start a new chat"
                    className="search-input"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Filter
              color="rgb(134 150 160)"
              size={25}
              className="mr-3"
            ></Filter>
          </Row>
          <Row>Test</Row>
          <Row>Test</Row>
          <Row>Test</Row>
          <Row>Test</Row>
          <Row>Test</Row>
        </Col>
        <Col className="chat-col p-0">
          <Col className="chat-window ml-auto d-flex align-items-center justify-content-between">
            <EmojiSmile
              color="rgb(84 101 111)"
              size={25}
              className="mr-2 ml-2"
            ></EmojiSmile>
            <Paperclip
              color="rgb(84 101 111)"
              size={25}
              className="mr-3 ml-2"
            ></Paperclip>
            <Form className="w-100">
              <Form.Group controlId="formSearch" className="m-0">
                <Form.Control
                  type="text"
                  placeholder="Write a message"
                  className="text-input w-100"
                />
              </Form.Group>
            </Form>
            <Mic color="rgb(84 101 111)" size={25} className="mr-2 ml-3"></Mic>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default MainApp;