import React, { useState } from "react";

interface GridFigureProps {
  images: {
    src: string;
    alt: string;
    title: string;
  }[];
}

const FigureGrid: React.FC<GridFigureProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div style={styles.gridContainer}>
        {images.map((img, index) => (
          <div
            key={index}
            style={styles.figureBox}
            onClick={() => openModal(index)}
          >
            <h4 style={styles.title}>{img.title}</h4>
            <img src={img.src} alt={img.alt} style={styles.image} />
          </div>
        ))}
      </div>

      {isOpen && (
        <div style={styles.modal} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h4 style={styles.modalTitle}>{images[currentIndex].title}</h4>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              style={styles.modalImage}
            />
            <div style={styles.navButtons}>
              <button onClick={prevImage} style={styles.arrowBtn}>
                ⟵
              </button>
              <button onClick={nextImage} style={styles.arrowBtn}>
                ⟶
              </button>
            </div>
            <button style={styles.closeButton} onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  gridContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  figureBox: {
    flex: "1 1 calc(25% - 20px)",
    maxWidth: "300px",
    minWidth: "200px",
    boxSizing: "border-box" as const,
    textAlign: "center" as const,
    cursor: "pointer",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold" as const,
    marginBottom: "10px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  modal: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    position: "relative" as const,
    maxWidth: "90%",
    maxHeight: "90%",
    textAlign: "center" as const,
  },
  modalImage: {
    maxWidth: "100%",
    maxHeight: "80vh",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  modalTitle: {
    color: "#fff",
    marginBottom: "10px",
    fontSize: "18px",
  },
  navButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  arrowBtn: {
    fontSize: "24px",
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
  closeButton: {
    position: "absolute" as const,
    top: "10px",
    right: "10px",
    fontSize: "28px",
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
};

export default FigureGrid;
