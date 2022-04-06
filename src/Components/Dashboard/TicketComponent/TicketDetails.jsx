import React from 'react'

function TicketDetails() {
  return (
    <div className="content-wrapper">
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="invoice p-3 mb-3">
                <div className="row">
                  <div className="col-12">
                    <h4>
                      DT-23445 : Add Routing functionality for the application
                      <small className="float-right">Created Date: 2/10/2014</small>
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                      <strong>Ticket Type :</strong> Feature<br /> 
                      <strong>Ticket Name :</strong> Add Routing Functinality<br /> 
                      <strong>Ticket Desciption :</strong><br /> 

                      795 Folsom Ave, Suite 600<br />
                      San Francisco, CA 94107<br />
                      Phone: (804) 123-5432<br />
                      Email: info@almasaeedstudio.com  <br/>
                      <strong>Priority :</strong> High<br />
                      
                      
                      <strong>Assign To :</strong> Shubham Gaigawale<br />
                  </div>
                  <div className="col-sm-4">
                  <strong>Application Name :</strong>Ticket Managment System<br /> 
                    <strong>Steps to Reproduce :</strong><br /> 
                      795 Folsom Ave, Suite 600<br />
                      San Francisco, CA 94107<br />
                      Phone: (555) 539-1037<br />
                      Email: john.doe@example.com
                  </div>
                  <div className="col-sm-4">
                    <br />
                    <strong>Status :</strong> In Development<br />
                    <strong>Is Active :</strong> True<br />
                    <strong>Is Regression :</strong> False<br />
                  </div>
                </div>
              
                <div className="row no-print">
                  <div className="col-12">
                    <button type="button" className="btn btn-success float-right">Mark As Complete</button>
                    <button type="button" className="btn btn-primary float-right" style={{ marginRight: 5 }}>
                      Non-reproducable
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TicketDetails