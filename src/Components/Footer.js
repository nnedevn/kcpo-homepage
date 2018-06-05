import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div id="footer-nav">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <h4>Information for
                            <span className="pull-right fa fa-plus visible-xs"></span>
                        </h4>
                        <ul className="list-unstyled collapse in">                            
                            <li><a href="/audience/residents">Residents</a> </li>
                            <li><a href="/audience/businesses">Businesses</a> </li>
                            <li><a href="/audience/employees/careers">Job seekers</a> </li>
                            <li><a href="/audience/volunteers">Volunteers</a> </li>
                            <li><a href="/audience/employees">King County employees</a> </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h4>Do more online
                            <span className="pull-right fa fa-plus visible-xs"></span>
                        </h4>
                        <ul className="list-unstyled collapse in"> 
                            <li><a href="/tools/trip-planner">Trip Planner</a></li>
                            <li><a href="/depts/finance-business-operations/treasury/property-tax.aspx">Property tax information &amp; payment</a></li>
                            <li><a href="/tools/inmate-lookup">Jail inmate look up</a></li>
                            <li><a href="/tools/parcel-viewer">Parcel viewer or iMap</a></li>
                            <li><a href="/tools/public-records">Public records</a></li>                               
                            <li><a href="/how-do-i.aspx#do-more-online-tab"><em>More online tools...</em></a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h4>
                            Get help <span className="pull-right fa fa-plus visible-xs"></span>
                        </h4>
                        <ul className="list-unstyled collapse in"> 
							<li><a href="/tools/contact-us">Contact us <span className="fa fa-envelope"></span></a></li>
                            <li><a href="/elected/executive/customer-service">Customer service</a> </li>
							<li><a href="/about/contact-us/phone-directory.aspx">Phone list</a></li>
							<li><a href="/tools/staff-directory">Employee directory</a> </li>
                   
                            <li><a href="/tools/subscribe-to-alerts">Subscribe to alerts <span className="fa fa-exclamation-triangle"></span></a></li>
                            
                        </ul>
                    </div>
                   <div className="col-sm-3">
                        <h4>
                            Languages<span className="pull-right fa fa-plus visible-xs"></span>
                        </h4>
                        <ul className="list-unstyled collapse in"> 
							<li><a href="/languages/spanish">En Español</a></li>
                            
                        </ul>
                    </div>                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
