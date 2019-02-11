import React from "react";
import DropDownComponent from "../DropDownComponent";
import "./style.scss";
import { Redirect } from "react-router-dom";



function HabitsComponent(props) {
  return (
    <div>
      <div id="habits">
        <DropDownComponent />
        <img src="../../images/AddButton.png" />
      </div>
        <div id="habits-body">
          <div id ="habits-header">
              <h2>Workout
              {/* {props.Habit} */}
              </h2>
              <h3>
                <a 
                // href={"/habits/" + habit._id}
                >remove
                </a>
              </h3>
            </div>
          <hr />      

          {/* <h3>Progress:</h3>
          <figure>

          </figure> */}

          <h4>Name:</h4>
          <p>Workout
                  {/* {props.Name} */}
          </p>

          <h4>Time:</h4>
          <p>6:30am
                 {/* {props.Frequency} */}

          </p>

          <h4>Comments:</h4>
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
