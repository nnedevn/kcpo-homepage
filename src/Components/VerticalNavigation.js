import React from "react";
import styles from "../App.css";

class VerticalNavigation extends React.Component {
  render() {
    return (
      <aside className="aside">
        <h3>Sticky Sidebar</h3>
        <ul>
          <a href="#"><li>Link 1</li></a>
          <a href="#"><li>Link 1</li></a>
          <a href="#"><li>Link 1</li></a>
          <a href="#"><li>Link 1</li></a>
          <a href="#"><li>Link 1</li></a>
        </ul>
      </aside>
    );
  }
}
export default VerticalNavigation;
