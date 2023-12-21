import { useState } from 'react';
import { uppercase } from '../utils';
import CrossIcon from './../assets/iconed.svg?react';

const Modal = ({
  setactiveelement,
  activeelement,
  setElements,
  closeModal,
}) => {
  const [elementData, setElementData] = useState({
    text: activeelement.text ?? '',
    x: activeelement.x ?? '',
    y: activeelement.y ?? '',
    fontSize: activeelement.fontSize ?? '',
    fontWeight: activeelement.fontWeight ?? '',
  });

  const savedata = () => {
    if (activeelement.isNew) {
      setElements((prev) => [...prev, { ...activeelement, ...elementData }]);
    } else {
      setElements((prev) =>
        prev.map((element) =>
          activeelement.id === element.id
            ? { ...activeelement, ...elementData }
            : element,
        ),
      );
    }

    setactiveelement({});
    closeModal();
  };

  return (
    <div className="w-screen h-screen absolute flex items-center justify-center bg-slate-500/30 backdrop-blur-sm">
      <div className="w-[424px] h-5/6 bg-white rounded">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold text-gray-900 ">
            Edit {uppercase(activeelement.type)}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-500 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
            data-Modal-toggle="crud-Modal"
            onClick={closeModal}
          >
            <CrossIcon />
            <span className="sr-only">Close Modal</span>
          </button>
        </div>
        <div className="px-6 py-5 overflow-y-auto h-3/4">
          <div className="flex flex-col mb-6">
            <label htmlFor="text">Text</label>
            <input
              id="text"
              type="text"
              placeholder="Type here"
              className="px-2 py-3 border"
              autoFocus
              value={elementData.text}
              onChange={(e) =>
                setElementData((prev) => ({ ...prev, text: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="x">X</label>
            <input
              id="x"
              type="number"
              placeholder="Type here"
              className="px-2 py-3 border"
              value={elementData.x}
              onChange={(e) =>
                setElementData((prev) => ({ ...prev, x: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="y">Y</label>
            <input
              id="y"
              type="number"
              placeholder="Type here"
              className="px-2 py-3 border"
              value={elementData.y}
              onChange={(e) =>
                setElementData((prev) => ({ ...prev, y: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="fontSize">Font Size</label>
            <input
              id="fontSize"
              type="number"
              placeholder="Type here"
              className="px-2 py-3 border"
              value={elementData.fontSize}
              onChange={(e) =>
                setElementData((prev) => ({
                  ...prev,
                  fontSize: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="fontWeight">Font Weight</label>
            <input
              id="fontWeight"
              type="number"
              placeholder="Type here"
              className="px-2 py-3 border"
              value={elementData.fontWeight}
              onChange={(e) =>
                setElementData((prev) => ({
                  ...prev,
                  fontWeight: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <button
          className="py-2 px-4 bg-[#0044C1] text-white my-3 ml-6"
          onClick={savedata}
        >
          Save 
        </button>
      </div>
    </div>
  );
};

export default Modal;
