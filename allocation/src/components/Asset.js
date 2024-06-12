import React,{useState} from "react";
import "../css/Asset.css";

const Asset = () => {
  const [row, setRow] = useState([

  ])
  const addClick = (e) => {
    // e.preventDefault();
    console.log("clicked");
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("submit");
  };
  const handleChange=(e)=>{
    console.log(e.target.value)
  }

  return (
    <>
      <div>
        <h1 className="head">Asset Handover Form</h1>
      </div>
      <div className="container">
        <h3>Handover to</h3>
        <hr />

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              className="p-1"
              onChange={handleChange}
              placeholder="Enter your first name"
            />

            <input
              type="text"
              className="p-1 m-3"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label htmlFor="name">Email</label>
            <input
              type="email"
              className="m-3"
              placeholder="Enter your email"
            />
          </div>
          <div className="d-inline-flex bd-highlight">
            <label htmlFor="empid" className="mt-3">
              Employee ID
            </label>
            <input
              type="text"
              className="m-3"
              placeholder="Enter your employee ID"
            ></input>
          </div>
          <div>
            <label htmlFor="astdesc" className="mt-3">
              Asset Description
            </label>
          </div>

          <div className="d-flex flex-column bd-highlight mb-3">
          <div className="d-flex justify-content-between">
            <div className="p-2 bd-highlight ">Asset</div>
            <div className="p-2 bd-highlight">Serial Number</div>
            <div className="p-2 bd-highlight">Quantity</div>
            <div className="p-2 bd-highlight">Accessories</div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="p-2 bd-highlight "><input type="text"/></div>
            <div className="p-2 bd-highlight"><input type="text"/></div>
            <div className="p-2 bd-highlight"><input type="text"/></div>
            <div className="p-2 bd-highlight"><input type="text"/></div>
          </div>
          </div>
        
          {/* <div className="d-inline-flex bd-highlight">
          <div>
            <label htmlFor="asset" className="mr-3">
              Asset
            </label>
            <br />
            <input
              type="text"
              className="mt-3"
              placeholder="Enter asset"
            ></input>
          </div>
          <div>
            <label htmlFor="Sumber">Serial Number</label>
            <br />
            <input
              type="number"
              className="m-3"
              placeholder="Enter serial number"
            ></input>
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <br />
            <input type="number" className="m-3"></input>
          </div>
          <div>
            <label htmlFor="accessories">Accessories</label>
            <br />
            <input type="text" className="m-3"></input>
          </div>
        </div> */}

          <br />
          <button
            type="button"
            className="btn btn-light m-3 "
            onClick={addClick}
          >
            + Add Row
          </button>
        </form>

        <form></form>
        <div>
          <h3>Handovered By</h3>
          <hr />
          <label htmlFor="name" className="d-inline-flex bd-highlight">
            Name
          </label>
          <br />
          <input type="text" className="" placeholder="Enter your first name" />
          <input
            type="text"
            className="m-3"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <label htmlFor="name">Email</label>
          <input
            type="email"
            className="m-3"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="empid">Employee ID</label>
          <input
            type="text"
            className="m-3"
            placeholder="Enter your employee ID"
          ></input>
        </div>
        <div>
          <label htmlFor="dh">Date of handover</label>
          <input
            type="date"
            className="m-3"
            placeholder="Enter your employee ID"
          ></input>
        </div>
        <div>
          <h3>Acknowledgment and Declaration by the Employee</h3>
          <hr />
          <ol>
            <li>
              I hereby acknowledge that I have received the above mentioned
              assets. I understand that this asset belong to and is my under
              possession for carrying out my office work. I hereby assure that I
              own the responsibility to care of the asset of the company to its
              fullest extend. On resignation/termination, I will immediateley
              handover this asset and its working condition to the company
            </li>
            <li>
              I will be soleby responsible for the company belonging with me.{" "}
            </li>
          </ol>
        </div>
        <div>
          <label htmlFor="signature" className="d-inline-flex bd-highlight">
            Signature of Employee
          </label>
          <input type="text" name="clear" value="" className="m-3"></input>
          <button>clear</button>
        </div>
        <hr />
        <button
          type="button"
          className="btn btn-primary m-3 "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Asset;
