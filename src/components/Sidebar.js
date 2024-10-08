import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import {
  motionComponents,
  looksComponents,
  controlComponents,
  eventsComponents,
} from "./SidebarConstants";

export default function Sidebar() {
  // State to track animations for character 1 and 2
  const [animations, setAnimations] = useState({
    char1: { steps: 10, direction: 1 }, // Character 1: Move 10 steps
    char2: { steps: 10, direction: -1 }, // Character 2: Move -10 steps
  });

  // Function to detect collision
  const detectCollision = (char1Pos, char2Pos) => {
    return Math.abs(char1Pos - char2Pos) < 50; // Assuming 50 is the collision threshold
  };

  // Function to handle dragging end (similar to hero feature's collision detection)
  const onDragEnd = (result) => {
    // Logic to handle drag events (position tracking)
    const { source, destination, draggableId } = result;
    if (!destination) return; // If dropped outside the droppable area

    let char1Pos = source.index; // Example: get character 1 position
    let char2Pos = destination.index; // Example: get character 2 position

    // Check for collision and swap animations if collided
    if (detectCollision(char1Pos, char2Pos)) {
      // Swap animations of Character 1 and Character 2
      setAnimations((prevAnimations) => ({
        char1: { ...prevAnimations.char1, direction: prevAnimations.char2.direction },
        char2: { ...prevAnimations.char2, direction: prevAnimations.char1.direction },
      }));
    }
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold mb-5 text-center border border-2 rounded text-white bg-green-400 p-2 w-auto">
        Side Bar
      </div>

      <div className="font-bold"> {"Motion"} </div>
      <Droppable droppableId="sideArea-motion" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-motion my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {motionComponents.map((x, i) => (
              <Draggable key={`${x}-sideArea`} draggableId={`${x}-sideArea`} index={i}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="my-2"
                  >
                    {getComponent(x)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <div className="font-bold"> {"Events"} </div>
      <Droppable droppableId="sideArea-events" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-events my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {eventsComponents.map((x, i) => (
              <Draggable key={`${x}-sideArea`} draggableId={`${x}-sideArea`} index={i}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="my-2"
                  >
                    {getComponent(x)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <div className="font-bold"> {"Looks"} </div>
      <Droppable droppableId="sideArea-looks" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-looks my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {looksComponents.map((x, i) => (
              <Draggable key={`${x}-sideArea`} draggableId={`${x}-sideArea`} index={i}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="my-2"
                  >
                    {getComponent(x)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <div className="font-bold"> {"Control"} </div>
      <Droppable droppableId="sideArea-control" type="COMPONENTS">
        {(provided) => (
          <ul
            className="sideArea-control my-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {controlComponents.map((x, i) => (
              <Draggable key={`${x}-sideArea`} draggableId={`${x}-sideArea`} index={i}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="my-2"
                  >
                    {getComponent(x)}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
