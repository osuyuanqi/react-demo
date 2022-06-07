import React from "react";
function Footer() {
  let firstname = "raymond",
    lastname = "yuan";
  return (
    <footer>
      <h3 className="ft">this is {`${firstname} ${lastname}`} footer</h3>
    </footer>
  );
}
export default Footer;
