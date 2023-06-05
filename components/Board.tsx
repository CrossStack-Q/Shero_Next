"use client";


import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";


const Board = () => {
   const [board,getBoard] = useBoardStore((state) => [state.board,state.getBoard]);

  useEffect(()=> {
    getBoard();
  }, [getBoard])

  console.log(board);
  

  return (
    <DragDropContext >
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div>
            {/* rendering blocks okay */}
            {Array.from(board.columns.entries()).map(([id,column],index) => (
              <div
              {...provided.droppableProps}
              ref={provided.innerRef }
              >
                <Column key={id} id={id} todos={column.todos} index={index} />
              </div>
            ))}
            Hello
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;