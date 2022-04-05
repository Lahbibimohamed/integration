import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import cookie from "js-cookie";
import SingleQuiz from "./SingleQuiz";

import quizes from "./api/quizes";

function TeacherQuiz() {
      const [teacherquiz, setTeacherquiz] = useState([]);

    const userData = useSelector((state) => state.userReducer);
  const userId = cookie.get("id");
  console.log("🚀 ~ file: AllQuizes.js ~ line 13 ~ AllQuizes ~ userId", userId)
  
    const retreiveQuizes = async () => {
        const response = await quizes.get(`/teacher-quiz/${userId}`);
        return response.data;
      };
      useEffect(() => {
        const getAllQuizes = async () => {
          const AllQuizes = await retreiveQuizes();
          if (AllQuizes) setTeacherquiz(AllQuizes);
        };
        getAllQuizes();
      }, []);
    return (  <div className="main">
        {teacherquiz.map((quiz) => (
        <SingleQuiz key={quiz._id} quiz={quiz} />
      ))}
    </div> );
}

export default TeacherQuiz;