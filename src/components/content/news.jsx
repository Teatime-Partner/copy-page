import React from "react";
import "./news.css";

//create a function to create new list item when news are added
function News() {
  //news array object
  const newsList = [
    { id: "0", date: "June 7th, 2024", title: "News", desc: "Some news" },
    { id: "1", date: "June 7th, 2024", title: "More news", desc: "Another news" },
    { id: "3", date: "June 8th, 2024", title: "Page dev", desc: "Progress" },
  ];
  //cycle through the array
  const listNews = newsList.map((l) => {
    return (
      <span className="basicList">
        <li key={l.id} id="newsLine">
          <strong>[{l.date}]</strong> {l.title} - {l.desc}
        </li>
      </span>
    );
  });
  return <div className="news">{listNews}</div>;
}

export default News;
