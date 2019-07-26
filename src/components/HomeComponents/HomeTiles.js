import React from "react";
import "../../styles/Home.css";
function HomeTiles({ item }) {
  return (
    <section id="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {item.map(item => (
                <div key={item.recipe_id} className="col-lg-6 col-md-6">
                  <aside>
                    <img
                      src={item.image_url}
                      className="img-responsive"
                      alt={item.title}
                    />

                    <div className="content-title">
                      <div className="text-center">
                        <h3>
                          <a href="javascript:void(0)">{item.title}</a>
                        </h3>
                      </div>
                    </div>
                    <div className="content-footer">
                      <span style={{ fontSize: "16px", color: "#fff" }}>
                        {item.publisher}
                      </span>
                    </div>
                  </aside>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTiles;
