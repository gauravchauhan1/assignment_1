import React from "react";
import "../styles/sidebar.css";
const Sidebar = () => {
  const item = [
    "Dashboard",
    "Tactics Vault",
    "Teams",
    "Schedule Generator",
    "Weekly Training Plans",
    "Team Metrics",
    "Customizations",
  ];
  return (
    <div>
      <div className="brand">
        <div>
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            style={{ width: "50px" }}
            alt="Avatar"
          />
        </div>
        <h3>Logobrand</h3>
      </div>
      <div class="section ">
        <div class="item ">
          <div class="icon">
            <i class="fa fa-brands fa fa-pied-piper"></i>
          </div>
          <div class="text">Dashboard</div>
        </div>

        <div class="item ">
          <div class="icon">
            <i class="fa fa-solid fa fa-clipboard"></i>
          </div>
          <div class="text">Tactics Vault</div>
        </div>

        <div class="item ">
          <div class="icon">
            <i class="fa fa-solid fa fa-people-group"></i>
          </div>
          <div class="text">Teams</div>
        </div>

        <div class="item ">
          <div class="icon">
            <i class="fa-solid fa-clipboard"></i>
          </div>
          <div class="text">Schedule Generator</div>
        </div>

        <div class="item ">
          <div class="icon">
            <i class="fa fa-solid fa fa-calendar-days"></i>
          </div>
          <div class="text">Teams</div>
        </div>

        <div class="item ">
          <div class="icon">
            <i class="fa fa-solid fa fa-calendar-days"></i>
          </div>
          <div class="text">Weekly Training Plans</div>
        </div>

        <div class="item ">
          <div class="icon">
            <i class="fa-solid fa-chart-line"></i>
          </div>
          <div class="text">Team Metrics</div>
        </div>

        <div class="item ">
          <div class="icon">
            <i class="fa-solid fa-gear"></i>
          </div>
          <div class="text">Customizations</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
