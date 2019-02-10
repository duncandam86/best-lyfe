import React from "react";
import DropDownComponent from "../DropDownComponent";
import "./style.scss";

function HabitsComponent(props) {
  return (
    <div>
      <div id="habits">
        <DropDownComponent />
        <img src="../images/AddButton.png" />
      </div>
        <div id="habits-body">
          <div id ="habits-header">
          <h2>Workout
          {/* {props.Habit} */}
          </h2>
          <h3>
            edit
            </h3>
            </div>
          <hr />      

          <h3>Progress:</h3>
          <figure>

          </figure>

          <h3>Name:</h3>
          <p>Workout
                  {/* {props.Name} */}
          </p>

          <h3>Frequency:</h3>
          <p>Mon, Wed, Fri, Sun
                 {/* {props.Frequency} */}

          </p>

          <h3>Comments:</h3>
          <p>Mix of Legs, Arms, Cardio, Chest/Back
                 {/* {props.Comments} */}

          </p>

          <button id="complete">
            Complete
          </button>

        </div>
    </div>
  );
}

export default HabitsComponent;
