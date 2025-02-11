import "../Index.css";
export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols ">
            <div className="hero-content">
              <p>This is a paragraph </p>
              <h1>Welcome to heading</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
                incidunt esse laudantium sapiente illo nemo asperiores accusamus
                adipisci quasi culpa? Fugiat, rerum minus? Inventore excepturi
                hic molestiae quisquam exercitationem maxime dolore architecto,
                similique accusantium tenetur.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn "> Learn More</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/registration-img.jpg"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
