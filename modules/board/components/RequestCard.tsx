import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { BsThreeDots } from 'react-icons/bs';

import { ITask } from '@/common/types/board';

interface RquestCardProps {
  item: ITask;
  index: number;
}

export default function RquestCard({ item, index }: RquestCardProps) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {provided => (
        <div
          className="p-5 shadow-[rgba(13,_38,_76,_0.15)_0px_7px_10px] space-y-2 rounded-xl bg-white dark:bg-neutral-800"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex justify-between items-center">
            <span>helo</span>
            <button aria-label="Action">
              <BsThreeDots />
            </button>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.task}</p>
        </div>
      )}
    </Draggable>
  );
}
