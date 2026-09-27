import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedPage: number) => void;
}
const PaginateComponent =
  (ReactPaginate as unknown as { default: typeof ReactPaginate }).default ||
  ReactPaginate;
export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  return (
    <PaginateComponent
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={selected => onPageChange(selected.selected + 1)}
      containerClassName={css.pagination}
      activeClassName={css.active}
      disabledClassName={css.disabled}
      previousLabel="<"
      nextLabel=">"
    />
  );
}
