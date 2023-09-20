import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import RatingCard from "../Components/RatingCard";
import Background from "../images/background.jpg";
import ad from "../images/ad.png";
import { Link } from "react-router-dom";
import buses from "../images/buses.jpg";
import SearchInput from "../Components/SearchInput";
import { useDispatch } from "react-redux";
import { setFromTo } from "../state/actions/fromTo";
import moment from "moment";

const Home_Page = (props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [day, setDay] = useState("");
  const data = ["Mumbai", "Pune", "Delhi", "Chennai", "Banglore"];
  const [cities, setCities] = useState(data);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    setCities(data.filter((val) => val !== from && val !== to));
  }, [from, to]);

  const handleClick = async () => {
    if (from === "" || to === "" || fromDate === "") {
      alert("Please fill the given fields");
    } else {
      props.setAuthentication(true);
      await setFromTo(dispatch, {
        From: from,
        To: to,
        FromDate: fromDate,
        ToDate: toDate,
        Day: day,
      });
    }
  };

  const handleDate = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    if (selectedDate < today.setDate(today.getDate() - 1)) {
      return;
    }
    setSelectedDate(selectedDate);

    setFromDate(moment(e.target.value));
    setToDate(moment(e.target.value).add(1, "days"));
    setDay(moment(e.target.value).format("dddd"));
  };
  const cardDetails = [
    {
      title: "2000+",
      description: "bus collection",
      imageURL: buses,
    },
    {
      title: "20 Million",
      description: "happy customers globally",
      imageURL: "https://image.emojipng.com/645/3039645.jpg",
    },
    {
      title: "5000+",
      description: "tickets book everyday",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUqjpYRNuYwypwqkCHVCrpTtRN_ij7b960Tw&usqp=CAU",
    },
  ];

  return (
    <div>
      <div
        className="bg-cover bg-center h-[80vh]"
        style={{ backgroundImage: `url(${Background}) ` }}
      >
        <div className="flex-col flex items-center">
          <div className="flex flex-col md:flex-row justify-center items-center pt-[15vh] h-[65vh] rounded-xl ">
            <div className="border-2 pr-6 py-8 rounded-l-xl text-left pl-10 bg-white">
              <SearchInput setVal={setFrom} data={cities} placeholder="From" />
            </div>
            <div className="border-2 pr-6 py-8 text-left pl-8 bg-white">
              <SearchInput setVal={setTo} data={cities} placeholder="To" />
            </div>
            <div className="border-2 pr-6 py-8 pl-8  bg-white">
              <input
                type="date"
                name="date"
                value={selectedDate.toISOString().slice(0, 10)}
                onChange={handleDate}
                className="w-80 form-control relative flex-auto min-w-0 block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Travel-Date"
              />
            </div>
            <div className="border-2 pr-4 py-3 pl-5 rounded-r-xl bg-white">
            <button
            onClick={handleClick}
            className="text-white bg-[#991b1b] mt-3 p-4 text-3xl rounded-xl px-16 mb-3 "
          >
            {!from || !to || !fromDate ? "Search" : ""}
            {from && to && fromDate && <Link to="/availablebus">Search</Link>}
          </button>

            </div>
          </div>
        </div>
      </div>
      <br/>
      <div
        className="bg-cover bg-center m-6 h-[15vh]"
        style={{ backgroundImage: `url(${ad}) ` }}
      ></div>
      <div className="font-bold text-center py-10 text-2xl">
        Travel with world's largest bus service
      </div>
      <div className="flex items-center flex-col m-5  md:flex-row md:justify-center ">
        {cardDetails.map((cardDetail, id) => (
          <Card
            key={id}
            title={cardDetail.title}
            description={cardDetail.description}
            imageURL={cardDetail.imageURL}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Home_Page;
