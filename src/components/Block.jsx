import Svgelement from './../assets/svgelement.svg?react';

const Block = ({ elementType }) => {
  const will_handle_drag = (event, type) => {
    event.dataTransfer.setData('BlockElement', type); // adding metadata to event
  };

  return (
    <li
      className="flex items-center py-3 rounded mb-2 bg-white w-full cursor-grab"
      draggable
      onDragStart={(e) => will_handle_drag(e, elementType.toLowerCase())}
    >
      <Svgelement className="w-8" />
      <p className="text-base">{elementType}</p>
    </li>
  );
};

export default Block;
