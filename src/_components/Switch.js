import React from "react";

const Switch = () => {
  return (
    <div class="switch-wrapper">
      <div class="sun"></div>
      <div class="toggle-wrapper">
        <input id="switch" type="checkbox" />
        <label for="switch" id="toggle">
          Toggle
        </label>
      </div>
      <div class="moon"></div>
    </div>
  );
};

export default Switch