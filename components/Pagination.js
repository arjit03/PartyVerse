export default function Pagination({ onLoadMore }) {
    return (
        <button onClick={onLoadMore}>
            Load More
        </button>
    );
}
