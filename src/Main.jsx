import React from "react";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="row g-3">
          <div className="col-md-3 col-xs-12">
            <div className="list-filter p-3">Filter</div>
          </div>
          <div className="col-md-9 col-xs-12">
            <div className="row g-3 mb-3">
              <div className="col-8">
                <input
                  type="text"
                  id="search-input"
                  className="form-control w-100"
                />
              </div>
              <div className="col-4">
                <button id="search-button" className="btn btn-primary w-100">
                  Search
                </button>
              </div>
            </div>
            <div className="row g-3" id="product-list"></div>
            <button id="add-more-button" className="btn btn-primary">
              Add more
            </button>
          </div>
        </div>
      </div>
      <div className="back-to-top">Top</div>
    </div>
  );
};

export default Main;
