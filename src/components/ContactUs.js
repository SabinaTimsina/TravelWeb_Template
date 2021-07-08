import React from "react";

function ContactUs() {
  return (
    <div className="service_clr">
      <div className=" text-center my-5 pt-5">
        <h1 className="display-4 text-capitalize">Contact Us</h1>
        <hr className="w-25 mx-auto" />
      </div>
      {/* form Started */}
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-10 col-md-8 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="pe-4">Gender</label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineCheckbox1">
                    Female
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2">
                    Male
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleDataList" class="form-label">
                  Select City
                </label>
                <input
                  class="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Type to search..."
                />
                <datalist id="datalistOptions">
                  <option value="San Francisco" />
                  <option value="New York" />
                  <option value="Seattle" />
                  <option value="Los Angeles" />
                  <option value="Chicago" />
                </datalist>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-outline"
                data-toggle="tooltip"
                data-placement="right"
                title="Who Am I"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center text-white mt-5">
        <p>@Copyright ShuklaGandaki Panchii House</p>
      </div>
    </div>
  );
}

export default ContactUs;
