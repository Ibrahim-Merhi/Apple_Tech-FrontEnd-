import React from "react";
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Question from '../Question&Answer/Question/Question'
import Answer from '../Question&Answer/Answer/Answer'
export default function QuestionAnswer() {


  return (
    <div>
      <Navbar />
      <Banner 
      backgroundImage="url(assets/img/bg-gift2.jpg)"
      title="Latest Blog Posts"
      paragraph="Read and get updated on how we progress."
      />
      <Question />
      <Answer />
      </div>
  );
}
