import React from 'react'

function PaginationComponents({currentPage,setCurrentPage,totalPages}:any) {
    
  return (
     <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage((p:any) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              background: currentPage === i + 1 ? "#007bff" : "",
              color: currentPage === i + 1 ? "#fff" : "",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p:any) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
  )
}

export default PaginationComponents