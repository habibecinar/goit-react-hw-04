function LoadMore({ onLoadMore, disabled }) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <button 
        onClick={onLoadMore} 
        disabled={disabled} 
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          transition: "background-color 0.3s ease"
        }}
      >
        Load More
      </button>
    </div>
  );
}
export default LoadMore;