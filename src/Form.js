import React from "react";
import './Form.css';

export default function Form () {
return (
    <div className="Form">
      <form className="mb-3">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              class="form-control btn btn-primary shadow-sm"
              id="search-button"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Use Location"
              className="form-control btn btn-success shadow-sm"
              id="current-location-button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
