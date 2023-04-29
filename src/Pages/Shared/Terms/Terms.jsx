import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, totam
        doloremque? Atque placeat tempore culpa nesciunt vitae sed recusandae
        deleniti magnam obcaecati, cupiditate a pariatur eaque! Cum voluptatum
        quia neque dolores. Deserunt neque aperiam eius, perferendis quam sed
        itaque, dicta blanditiis temporibus nesciunt recusandae voluptas, cum
        nostrum optio accusantium aut.
      </p>
      <p>
        Go Back To <Link to="/register">Register</Link>{" "}
      </p>
    </div>
  );
};

export default Terms;
