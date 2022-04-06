import React, { useState } from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


function AddTicket() {

    let createTicketRequest = {
        ticketName: "",
        ticketDescription:"",
        ticketType:"",
        priority:"",
        stepsToReproduce:"",
        applicationName:""
    }

  const [inputData, setInputData] = useState(createTicketRequest);


    const handleForm = (event) => {
        const { name, value } = event.target;
        setInputData((prevInputData) => ({
          ...prevInputData,
          error: false,
          [name]: value,
        }));
      };

    const createTicket = (event) => {
        event.preventDefault();

        const ticketDetails = {
            ticketName: inputData.ticketName,
            ticketDescription: inputData.ticketDescription,
            ticketType: inputData.ticketType,
            priority: inputData.priority,
            stepsToReproduce: inputData.stepsToReproduce,
            applicationName: inputData.applicationName,
            regressions: inputData.regressions
        }

        axios.post("http://localhost:8080/api/v1/ticket/create", ticketDetails).then(
            (response) => {
              toast.success("Ticket successfully created", {
                position: "top-right",
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            },
            (error) => {
                console.log(error.data.message);
                console.log(error);
            }
        )
    }



  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Create Ticket</h3>
                </div>
                <form onSubmit={createTicket}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="ticketName">Ticket Name</label>
                      <input
                        type="text"
                        name="ticketName"
                        required
                        className="form-control"
                        id="ticketName"
                        placeholder="Enter Ticket Name"
                        value={inputData.ticketName}
                        onChange={handleForm}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ticketDescription">
                        Ticket Description
                      </label>
                      <input
                        type="text"
                        name="ticketDescription"
                        required
                        className="form-control"
                        id="ticketDescription"
                        placeholder="Ticket Description"
                        value={inputData.ticketDescription}
                        onChange={handleForm}

                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ticketType">Ticket Type</label>
                      <select onChange={handleForm} className="form-control" name="ticketType" value={inputData.ticketType}>
                          <option value="bug">Bug</option>
                          <option value="feature">Feature</option>
                          <option value="escaltion">Escalation</option>
                          <option value="supportTicket">Support Ticket</option>
                        </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="priority">Priority</label>
                      <select onChange={handleForm} className="form-control" name="priority" value={inputData.priority}>
                          <option value="urgent">Urgent</option>
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </select>
                    </div>
                    {inputData.ticketType === 'feature' ? "" : <div className="form-group">
                      <label htmlFor="stepsToReproduce">
                        Steps To Reproduce
                      </label>
                      <input
                        type="text"
                        name="stepsToReproduce"
                        required
                        className="form-control"
                        id="stepsToReproduce"
                        placeholder="Steps to reproduce bug"
                        value={inputData.stepsToReproduce}
                        onChange={handleForm}
                      />
                    </div>}
                    <div className="form-group">
                      <label htmlFor="applicationName">Application Name</label>
                      <input
                        type="text"
                        name="applicationName"
                        required
                        className="form-control"
                        id="applicationName"
                        placeholder="Application Name"
                        value={inputData.applicationName}
                        onChange={handleForm}
                      />
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="isRegression"
                        name="regressions"
                        value={inputData.regressions}
                        onChange={handleForm}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="isRegression"
                      >
                        Regression
                      </label>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddTicket;
