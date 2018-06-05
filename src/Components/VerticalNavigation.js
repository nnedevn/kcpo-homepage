import React from "react";

class VerticalNavigation extends React.Component {
  render() {
    return (
      <aside className="aside">
        <a href="">
          <h3>Prosecuting Attorney</h3>
        </a>
        <ul>
          <a
            className="list-group-item "
            title="Contact Us"
            href="https://www.kingcounty.gov/depts/prosecutor/contact-us.aspx"
          >
            Contact Us{" "}
          </a>
          <a
            className="list-group-item "
            title="How to . . . "
            href="https://www.kingcounty.gov/depts/prosecutor/how-to.aspx"
          >
            How to . . .{" "}
          </a>
          <a
            className="list-group-item "
            title="Jobs and Volunteer Information"
            href="https://www.kingcounty.gov/depts/prosecutor/jobs.aspx"
          >
            Jobs / Volunteer{" "}
          </a>
          <a
            className="list-group-item "
            title="Profiles"
            href="https://www.kingcounty.gov/depts/prosecutor/profiles-new.aspx"
          >
            Profiles{" "}
          </a>
          <a
            className="list-group-item "
            title="Protection Orders"
            href="https://www.kingcounty.gov/depts/prosecutor/protection-orders.aspx"
          >
            Protection Orders{" "}
          </a>
          <a
            className="collapsed list-group-item"
            title="News / Media Center"
            href="https://www.kingcounty.gov#"
            data-toggle="collapse"
            data-target="#side-nav-collapse-54C65D8C0B7E4BA28D476730E62C600C"
          >
            News / Media Center <i className="fa fa-plus pull-right" />
          </a>
          <div
            className="list-group collapse"
            id="side-nav-collapse-54C65D8C0B7E4BA28D476730E62C600C"
          >
            <a
              className="list-group-item "
              title="News Releases from the Prosecuting Attorney"
              href="https://www.kingcounty.gov/depts/prosecutor/news-media-center/news.aspx"
            >
              News{" "}
            </a>
            <a
              className="list-group-item "
              title="Videos"
              href="https://www.kingcounty.gov/depts/prosecutor/news-media-center/videos.aspx"
            >
              Videos{" "}
            </a>
            <a
              className="list-group-item "
              title="Newsletter: The Prosecutor's Post"
              href="https://www.kingcounty.gov/depts/prosecutor/news-media-center/newsletter.aspx"
            >
              Newsletter: The Prosecutor's Post{" "}
            </a>
            <a
              className="list-group-item "
              title="Reports"
              href="https://www.kingcounty.gov/depts/prosecutor/news-media-center/reports.aspx"
            >
              Reports{" "}
            </a>
          </div>
          <a
            className="collapsed list-group-item"
            title="Victim / Community Services"
            href="https://www.kingcounty.gov#"
            data-toggle="collapse"
            data-target="#side-nav-collapse-1AB5229641C148DFA50593428963D9B3"
          >
            Victim / Community Services <i className="fa fa-plus pull-right" />
          </a>
          <div
            className="list-group collapse"
            id="side-nav-collapse-1AB5229641C148DFA50593428963D9B3"
          >
            <a
              className="list-group-item "
              title="Domestic Violence"
              href="https://www.kingcounty.gov/depts/prosecutor/victim-community-support/domestic-violence.aspx"
            >
              Domestic Violence{" "}
            </a>
            <a
              className="list-group-item "
              title="Elder and Vulnerable Adult Abuse"
              href="https://www.kingcounty.gov/depts/prosecutor/victim-community-support/elder-abuse.aspx"
            >
              Elder / Vulnerable Adult Abuse{" "}
            </a>
            <a
              className="list-group-item "
              title="Victim Assistance"
              href="https://www.kingcounty.gov/depts/prosecutor/victim-community-support/victim-assistance.aspx"
            >
              Victim Assistance{" "}
            </a>
          </div>
          <a
            className="collapsed list-group-item"
            title="Youth Programs"
            href="https://www.kingcounty.gov#"
            data-toggle="collapse"
            data-target="#side-nav-collapse-A25BB1F4B20D46738C8E8042E42559FD"
          >
            Youth Programs <i className="fa fa-plus pull-right" />
          </a>
          <div
            className="list-group collapse"
            id="side-nav-collapse-A25BB1F4B20D46738C8E8042E42559FD"
          >
            <a
              className="list-group-item "
              title="Choose 180"
              href="https://www.kingcounty.gov/depts/prosecutor/youth-programs/choose-180.aspx"
            >
              Choose 180 Youth Workshop{" "}
            </a>
            <a
              className="list-group-item "
              title="Family Intervention and Restorative Services FIRS"
              href="https://www.kingcounty.gov/depts/prosecutor/youth-programs/firs.aspx"
            >
              Family Intervention and Restorative Services (FIRS){" "}
            </a>
            <a
              className="list-group-item "
              title="Juvenile Court"
              href="https://www.kingcounty.gov/depts/prosecutor/youth-programs/juvenile-court.aspx"
            >
              Juvenile Court{" "}
            </a>
            <a
              className="list-group-item "
              title="Kids' Court"
              href="https://www.kingcounty.gov/depts/prosecutor/youth-programs/kids-court.aspx"
            >
              Kids' Court{" "}
            </a>
            <a
              className="list-group-item "
              title="Teen Court"
              href="https://www.kingcounty.gov/depts/prosecutor/youth-programs/teen-court.aspx"
            >
              Teen Court{" "}
            </a>
            <a
              className="list-group-item "
              title="Truancy Intervention "
              href="https://www.kingcounty.gov/depts/prosecutor/youth-programs/truancy.aspx"
            >
              Truancy Intervention{" "}
            </a>
          </div>
          <a
            className="list-group-item "
            title="Child Support / Family Support"
            href="https://www.kingcounty.gov/depts/prosecutor/child-support.aspx"
          >
            Child and Family Support{" "}
          </a>
          <a
            className="list-group-item "
            title="Civil Division Overview"
            href="https://www.kingcounty.gov/depts/prosecutor/civil-division.aspx"
          >
            Civil Division{" "}
          </a>
          <a
            className="list-group-item "
            title="Criminal Division Overview"
            href="https://www.kingcounty.gov/depts/prosecutor/criminal-overview.aspx"
          >
            Criminal Division
          </a>
        </ul>
      </aside>
    );
  }
}
export default VerticalNavigation;
