import { useEffect } from 'react';

const PlayArea = ({
  setactiveelement,
  activeelement,
  setElements,
  elements,
  openModal,
}) => {
  const drag = (e) => e.preventDefault();

  const handleClick = (e, element) => {
    e.stopPropagation();
    const newElement = { ...element, isNew: false };
    setactiveelement(newElement);
  };

  const handleKeyDown = (e, element) => {
    if (e.key === 'Enter') {
      openModal();
    }

    if (e.key === 'Delete') {
      setElements((prev) =>
        prev.filter((each) => each.id !== activeelement.id),
      );
    }
  };

  const handleOnDrop = (e) => {
    const elementType = e.dataTransfer.getData('BlockElement');
    const elementId = e.dataTransfer.getData('BlockElementId');

    const x = e.screenX;
    const y = e.screenY - 120; // pointer is pointing the top-left of the selected element

    const newElement = {
      isNew: true,
      x,
      y,
      className: '',
    };

    if (elementType === 'button' || activeelement.type === 'button')
      newElement['className'] =
        'bg-[#0044C1] hover:bg-slate-600 text-white py-3 px-3';
    else if (elementType === 'input' || activeelement.type === 'input')
      newElement['className'] = 'bg-white';

    if (elementId) {
      newElement['isNew'] = false;
      setactiveelement({ ...activeelement, ...newElement });
    } else {
      newElement['type'] = elementType;
      newElement['id'] = new Date().toISOString();
      setactiveelement(newElement);
    }

    openModal();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeelement]);

  return (
    <div
      className="h-screen w-full bg-[#F3F3F3] flex-1 relative"
      onDrop={handleOnDrop}
      onDragOver={drag}
      onClick={() => {
        setactiveelement({});
      }}
    >
      {elements.map((eachElement) => {
        const { type, text = 'some text', id } = eachElement;
        const DynamicElement = type;

        const will_handle_drag = (event) => {
          setactiveelement(eachElement);
          event.dataTransfer.setData(
            'BlockElementId',
            eachElement.id.toString(),
          );
        };

        const customStyle = {
          position: 'absolute',
          top: eachElement.y,
          left: eachElement.x,
          fontSize: `${eachElement.fontSize ?? 16}px`,
          fontWeight: eachElement.fontWeight ?? 400,
        };

        if (type === 'input')
          return (
            <DynamicElement
              type="text"
              key={id}
              id={id}
              placeholder="Enter text here"
              className="border-solid border-2 px-3"
              style={customStyle}
              draggable
              onDragStart={will_handle_drag}
              onClick={(e) => handleClick(e, eachElement)}
            />
          );
        return (
          <DynamicElement
            key={id}
            id={id}
            className={`${eachElement.className} ${
              activeelement.id === eachElement.id
                ? 'border-solid border-2 border-red-500'
                : ''
            }`}
            style={customStyle}
            draggable
            onDragStart={will_handle_drag}
            onClick={(e) => handleClick(e, eachElement)}
          >
            {text}
          </DynamicElement>
        );
      })}
    </div>
  );
};

export default PlayArea;
