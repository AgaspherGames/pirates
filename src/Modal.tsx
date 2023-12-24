import React, { useRef } from "react";
import { createPortal } from "react-dom";
interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  className,
  isOpen,
  close,
  style,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  function onClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      close();
    }
  }

  if (!isOpen) return "";

  return createPortal(
    <div
      onClick={onClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <div style={style} ref={modalRef} className={className}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
