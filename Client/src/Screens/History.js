import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useStore from "../useStore";
import axios from "axios";
import quizTypes from "../JSON/quizTypes.json";
import { Card, Empty, Select, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Popper from "../Components/Popper";

const { Option } = Select;

const History = () => {
 const { user } = useStore();
 const [types, setTypes] = useState([]);
 const [filteredData, setFilteredData] = useState([]);
 const [loading, setLoading] = useState(true);
 const [showPopper, setShowPopper] = useState(true);

 useEffect(() => {
  setTypes(["All", ...quizTypes.quizTypes]);
 }, []);

 const fetchAllHistory = useMutation({
  mutationFn: () =>
   axios.get(`http://localhost:5002/api/users/getQuizData/${user.user_id}`),
  onSuccess: (data) => {
   setFilteredData(data.data.map((item) => item.quizInfo).flat());
   setLoading(false);
  },
 });

 const fetchHistoryByType = useMutation({
  mutationFn: (quizType) =>
   axios.get(
    `http://localhost:5002/api/users/getQuizDataByCat/${user.user_id}/`,
    { params: { quizType } }
   ),
  onSuccess: (data) => {
   setFilteredData(data.data);
   setLoading(false);
  },
 });

 useEffect(() => {
  fetchAllHistory.mutate();
 }, []);

 const handleFilterChange = (value) => {
  setLoading(true);
  if (value === "All") {
   fetchAllHistory.mutate();
  } else {
   fetchHistoryByType.mutate(value);
  }
 };

 return (
  <HistoryWrapper>
   {user.isLogged ? (
    <SelectWrapper>
     <Select
      defaultValue="All"
      style={{ width: 200 }}
      onChange={handleFilterChange}
     >
      {types.map((type) => (
       <Option key={type} value={type}>
        {type}
       </Option>
      ))}
     </Select>
    </SelectWrapper>
   ) : (
    <Popper open={showPopper} setOpen={setShowPopper} />
   )}
   {loading && user.isLogged ? (
    <Loader>
     <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    </Loader>
   ) : (
    <CardList>
     {filteredData.map((quiz, index) => (
      <StyledCard key={quiz._id}>
       <h4>{index + 1}</h4>
       <h3>{quiz.quizType}</h3>
       <p>Difficulty: {quiz.difficulty}</p>
       <p>Correct Answers: {quiz.correct_answers}</p>
       <p>Score: {quiz.score}</p>
       <p>Total Questions: {quiz.totalQuestions}</p>
       <p>Type: {quiz.type === "boolean" ? "True/False" : quiz.type}</p>
      </StyledCard>
     ))}
    </CardList>
   )}
   {!filteredData.length && !loading && (
    <Empty
     description="No history found"
     image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
   )}
  </HistoryWrapper>
 );
};

export default History;

const HistoryWrapper = styled.div`
 padding: 20px;
 background-color: #f5f5f5;
 min-height: 100vh;
 border-radius: 15px;
 margin-top: 1rem;
`;

const SelectWrapper = styled.div`
 margin-bottom: 20px;
 text-align: center;
`;

const CardList = styled.div`
 display: flex;
 flex-direction: column;
 gap: 15px;
`;

const StyledCard = styled(Card)`
 background: #fff;
 border-radius: 8px;
 padding: 15px;
 box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
 transition: background-color 0.3s ease;
 border-left: 5px solid white;

 h3 {
  margin-bottom: 8px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
 }

 p {
  margin-bottom: 6px;
  font-size: 14px;
  color: #555;
 }
 h4 {
  color: #333;
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top: 10px;
  right: 20px;
 }

 &:hover {
  background-color: #f0f0f0;
 }
`;

const Loader = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 min-height: 50vh;
`;
