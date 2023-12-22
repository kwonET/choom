import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { selectFile } from "../utils/util";
import VideoPlayer from "../components/VideoPlayer";
import styled from "styled-components";
const Show = () => {
  const [fileList, setFileList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const layItem = window.localStorage.getItem("lay");

      const layObj = JSON.parse(layItem);
      const layFiles = layObj.select.map(
        (ele) => selectFile("lay", layObj.emotion, ele) + ".mp4"
      );

      setFileList((prevFileList) => [
        ...new Set([...prevFileList, ...layFiles]),
      ]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const standItem = window.localStorage.getItem("stand");
      const standObj = JSON.parse(standItem);
      const standFiles = standObj.select.map(
        (ele) => selectFile("stand", standObj.emotion, ele) + ".mp4"
      );

      setFileList((prevFileList) => [
        ...new Set([...prevFileList, ...standFiles]),
      ]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const sitItem = window.localStorage.getItem("sit");
      const sitObj = JSON.parse(sitItem);
      const sitFiles = sitObj.select.map(
        (ele) => selectFile("sit", sitObj.emotion, ele) + ".mp4"
      );

      setFileList((prevFileList) => [
        ...new Set([...prevFileList, ...sitFiles]),
      ]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const moveItem = window.localStorage.getItem("move");
      const moveObj = JSON.parse(moveItem);
      const moveFiles = moveObj.select.map(
        (ele) => selectFile("move", moveObj.emotion, ele) + ".mp4"
      );

      setFileList((prevFileList) => [
        ...new Set([...prevFileList, ...moveFiles]),
      ]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(fileList);
  }, [fileList]);
  //   return <VideoPlayer videos={fileList} />;
  return (
    <WholeWrapper>
      <Wrapper>
        {fileList.map((video) => (
          <Video autoPlay loop muted width="500">
            <source src={`video/` + `${video}`} type="video/mp4" />
          </Video>
        ))}
      </Wrapper>
    </WholeWrapper>
  );
};

export default Show;
const Video = styled.video``;
const Wrapper = styled.div`
  display: grid;

  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
`;
const WholeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
