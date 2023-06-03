import React from 'react'
import {DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  return (
    
    <DragDropContext>
        <Droppable droppableId='board' direction='horizontal' type='column'>
            {(provided) => (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto" >

                </div>
            ) }

        </Droppable>
    </DragDropContext>
  )
}

export default Board