import { useState } from 'react';

const use_Box = (defaultOpen = false) => {
  const [isModalOpen, setIsModalOpen] = useState(defaultOpen);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, openModal, closeModal };
};

export default use_Box;
