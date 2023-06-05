"use client";


import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";


const Board = () => {
   const getBoard = useBoardStore((state) => state.getBoard);

  useEffect(()=> {
    getBoard();
  }, [getBoard])
  

  return (
    <h1>
      Anurag
    </h1>
    // <DragDropContext >
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => (
    //       <div>
    //         {/* rendering blocks okay */}
    //         Hello
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>
  );
};

export default Board;