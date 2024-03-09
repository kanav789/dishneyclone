import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Recommennds from "./Recommennds";

import Originals from "./Originals";
import Trendings from "./Trending";
import { db } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { getDocs, collection } from "firebase/firestore";

import { selectUserName } from "../features/user/userSlice";

import { setMovies } from "../features/movie/movieSlice";
function Home() {
  const [recommend, setrecommend] = useState([]);
  const [dishney, setdishney] = useState([]);
  const [trending, settrending] = useState([]);
  const [original, setoriginal] = useState([]);

  const dispatch = useDispatch();

  //
  //
  //
  const userName = useSelector(selectUserName);

  //
  //
  //
  useEffect(() => {
    const fetchMovies = async () => {
      if (userName) {
        const movielist = collection(db, "movies");
        const snapshot = await getDocs(movielist);
        const moviearr = snapshot.docs.map((doc) => doc.data());

        const recommendMovies = moviearr.filter(
          (movie) => movie.type === "recommend"
        );
        const newDishneyMovies = moviearr.filter(
          (movie) => movie.type === "new"
        );
        const trendingMovies = moviearr.filter(
          (movie) => movie.type === "trending"
        );
        const originalMovies = moviearr.filter(
          (movie) => movie.type === "original"
        );

        // Set state for each type of movies
        setrecommend(recommendMovies);
        setdishney(newDishneyMovies);
        settrending(trendingMovies);
        setoriginal(originalMovies);

        dispatch(
          setMovies({
            recommend: recommendMovies,
            new: newDishneyMovies,
            trending: trendingMovies,
            original: originalMovies,
          })
        );
      } else {
        console.log("Please login");
      }
    };

    fetchMovies();
  }, [userName, dispatch]);
  //

  //

  //

  return (
    <>
      <Container>
        <ImageSlider />
        <Viewers />
        <Recommennds />
        {/* <NewDishney /> */}
        <Originals />
        <Trendings />
      </Container>
    </>
  );
}
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("../../public/images/home-background.png") center center /
      cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
