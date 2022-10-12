import React from "react";

function About() {
  return (
    <div className="container">
    <h1 className="my-4" style={{fontSize:"55px",fontWeight:"bold", color:"greenyellow" }}>Meet Our Team</h1>
      <div className="row featurette my-4">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Emma Christensen
            <h6 className="text-muted">ASSOCIATE GENERAL MANAGER</h6>
          </h2>
          <p className="lead">
            Emma has over 10 years of experience creating food and cooking
            content for both web and print and another 5 years within the print
            publishing industry. She joined the Simply Recipes team in 2016 as
            Managing Editor and is the former Recipe Editor for Kitchn. In her
            career, she has been an editor, a writer, a recipe developer, a
            photographer, and a video producer.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto img-fluid"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            style={{ width: "500px", height: "400px" }}
            src="../Images/about-1.jpg"
            data-holder-rendered="true"
          />
        </div>
      </div>
      <div className="row featurette my-4 ">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">
            Andy Christensen
            <h6 className="text-muted">FOUNDER</h6>
          </h2>
          <p className="lead">
            Andy is the founder for Simply Recipes. Before joining Simply
            Recipes, he served as Senior Art Director at Fantasy Flight Games,
            and previously Managing Art Director. He worked as a Marketing
            Assistant for Nomad Press/Nomad Communications, as well as
            illustrated several of their educational children’s books. Andy
            discovered his love of food and cooking while working as a line cook
            for Zanzibar Restaurant and Pub, where they created dishes inspired
            from regional flavors around the world.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="featurette-image img-fluid mx-auto img-fluid"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            style={{ width: "500px", height: "400px" }}
            src="../Images/about-2.jpg"
            data-holder-rendered="true"
          />
        </div>
      </div>
      <div className="row featurette my-4">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Eric Handelsman
            <h6 className="text-muted">DOTDASH MEREDITH FOOD + DRINK</h6>
          </h2>
          <p className="lead">
            Eric is the senior vice president of Dotdash Meredith's Food + Drink
            group. Before joining Dotdash Meredith in 2013, Eric spent 10 years
            working in lifestyle media at Condé Nast, where he led operations
            and finance for various brands including Epicurious, Gourmet, and
            Brides.com. Prior to Conde Nast, he worked in the business
            department at the New York Press, as well as in commercial and TV
            production.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto img-fluid"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            style={{ width: "500px", height: "400px" }}
            src="../Images/about-3.jpg"
            data-holder-rendered="true"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
