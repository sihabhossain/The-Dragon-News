import React from "react";
import { ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const Rightnav = () => {
  return (
    <div className="mt-5">
      <h4>Login With</h4>

      <button type="button" class="btn btn-outline-primary mb-2">
        <FaGoogle /> Login With Google
      </button>
      <button type="button" class="btn btn-outline-secondary">
        <FaGithub /> Login With Github
      </button>

      <div className="mt-5">
        <h4>Find Us On</h4>

        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook /> FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img className="text-center  w-100 rounded mt-3" src={bg} alt="" />
        <h5 className=" ">Create an Amazing Newspaper</h5>
        <p className="">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
      </div>
    </div>
  );
};

export default Rightnav;
