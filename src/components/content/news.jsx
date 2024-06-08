import React from "react";
import "./news.css";

function News() {
  const newsList = [
    { id: "0", date: "June 7th, 2024", title: "News", desc: "Some news" },
    { id: "1", date: "June 7th, 2024", title: "More news", desc: "Another news" },
    { id: "3", date: "June 8th, 2024", title: "Page dev", desc: "Progress" },
  ];

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
