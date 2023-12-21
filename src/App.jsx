import { useState } from 'react';
import Sections from './components/Sections';
import PlayArea from './components/PlayArea';
import Modal from './components/Modal';
import use_Box from './hooks/use_Box';
import usestorage from './hooks/usestorage';

function App() {
  const [activeelement, setactiveelement] = useState({});
  const [elements, setElements] = usestorage('elements', []);
  const { isModalOpen, openModal, closeModal } = use_Box();

  return (
    <main className="flex justify-between relative">
      <PlayArea
        setactiveelement={setactiveelement}
        activeelement={activeelement}
        setElements={setElements}
        elements={elements}
        openModal={openModal}
      />
      <Sections elements={elements} setElements={setElements} />
      {isModalOpen && (
        <Modal
          setactiveelement={setactiveelement}
          activeelement={activeelement}
          setElements={setElements}
          closeModal={closeModal}
        />
      )}
    </main>
  );
}

export default App;
