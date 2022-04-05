import React from "react";
import { Link } from "react-router-dom";

import "./css/SingleQuiz.css";
import QuizDetail from "./QuizDetail";
function SingleQuiz({ quiz }) {

  return (
    <div className="col-lg-4 col-md-6 card-quiz" >
                        <div className="cardFeature">
                          
                            <h5 className="font-title--xs text-primary">  {quiz.title}</h5>
                            <h5 className="font-title--xs">{`level :  ${quiz.level}`}</h5>

                            <p>
                                 {quiz.description}
                            </p>


                        </div>
                    </div>
    
  );
}

export default SingleQuiz;
