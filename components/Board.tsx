"use client";


import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";


const Board = () => {
  

  return (
    <DragDropContext >
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div>
            {/* rendering blocks okay */}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;