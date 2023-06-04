"use client";


import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";


const Board = () => {
  

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div>
            {/* rendering blocks */}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;