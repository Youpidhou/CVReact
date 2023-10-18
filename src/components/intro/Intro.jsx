import React from "react"
const Intro = ({ Name, Desc, Buttons }) => (
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">{Name}</h1>
          <p class="lead text-body-secondary">{Desc}</p>
          <p>{Buttons}</p>
        </div>
      </div>
    </section>
  );
  export default Intro;
  