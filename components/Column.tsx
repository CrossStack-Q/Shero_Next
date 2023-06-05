import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import ToDoCard from './ToDoCard';

type Props = {
    id: TypedColumn,
    todos : Todo[],
    index: number,
}


const idToColumnText: {
    [Key in TypedColumn]: string;
} = {
    todo: "To Do",
    inProgress: "In Progress",
    done: "Done",
}

function Column({id, todos , index}: Props) {
  return (
    <Draggable draggableId={id} index={index} >
        {(provided) => (
            <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} >

            <Droppable droppableId={index.toString()} type="card" >
                {(provided,snapshot) => (
                    <div 
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`p-2 rounded-2xl shadow-sm ${
                        snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                      }`}
                    >
                        <h2 className="flex justify-between font-bold text-xl p-2">
                  {idToColumnText[id]}
                  <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm font-normal">
                    {/* {!searchString
                      ? todos.length
                      : todos.filter((todo) =>
                          todo.title
                            .toLocaleLowerCase()
                            // .includes(searchString.toLocaleLowerCase())
                        ).length}{" "} */}
                        {todos.length}
                  </span>
                </h2>

                <div className="space-y-2">
                  {todos.map((todo, index) => {
                    // if (
                    //   searchString &&
                    //   !todo.title
                    //     .toLowerCase()
                    //     .includes(searchString.toLocaleLowerCase())
                    // )
                    //   return null;

                    return (
                      <Draggable
                        key={todo.$id}
                        draggableId={todo.$id}
                        index={index}
                      >
                        {(provided) => (
                          <ToDoCard
                            todo={todo}
                            index={index}
                            id={id}
                            innerRef={provided.innerRef}
                            draggableProps={provided.draggableProps}
                            dragHandleProps={provided.dragHandleProps}
                          />
                        )}
                      </Draggable>
                    );
                  })}

                  {provided.placeholder}

                  <div className="flex items-end justify-end p-2">
                    <button
                    //   onClick={handleAddTodo}
                    onClick={()=>{}}
                      className="text-green-500 hover:text-green-600"
                    >
                      <PlusCircleIcon className="w-10 h-10" />
                    </button>
                  </div>
                </div>

                    </div>
                )}

            </Droppable>

               
            </div>
        )}
    </Draggable>
  )
}

export default Column