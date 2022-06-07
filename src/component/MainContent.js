import React from "react";
function MainContent() {
  const date = new Date(2022, 6, 5, 10);
  const hours = date.getHours();
  let daytime;
  // console.log(hours);
  const styles = {
    fontSize: 10,
    color: "#ff0033",
  };
  if (hours > 12) {
    daytime = "afternoon";
    styles.color = "#09050b";
    styles.backgroundColor = "#88aabb";
  } else {
    daytime = "morning";
    styles.color = "#000fff";
    styles.backgroundColor = "#5588bb";
  }
  return (
    <ul>
      <li style={styles}>Good,{daytime}</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
export default MainContent;
