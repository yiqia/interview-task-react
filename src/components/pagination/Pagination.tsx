import NextIcon from "../icons/NextIcon";
import PreviousIcon from "../icons/PreviousIcon";
import "./Pagination.scss";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (callback: (prevPage: number) => number) => void;
}

const ICON_COLOR = {
  grey: "rgba(0, 0, 0, 0.2)",
  black: "#000",
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="pagination">
      <PreviousIcon
        color={currentPage === 1 ? ICON_COLOR.grey : ICON_COLOR.black}
        onClick={handlePrevious}
      />
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <NextIcon
        color={currentPage === totalPages ? ICON_COLOR.grey : ICON_COLOR.black}
        onClick={handleNext}
      />
    </div>
  );
};

export default Pagination;
