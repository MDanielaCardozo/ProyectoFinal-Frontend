import React from "react";
import "./Paginacion.css";

const Pagination = ({ productosPorPagina, totalDeProductos, paginar }) => {
  const numerosPaginas = [];

  for (let i = 1; i <= Math.ceil(totalDeProductos / productosPorPagina); i++) {
    numerosPaginas.push(i);
  }

  return (
    <nav className="w-100 d-flex justify-content-center">
      <ul className="pagination">
        {numerosPaginas.map((numero) => (
          <li key={numero} className="page-item">
            <a
              onClick={() => paginar(numero)}
              className="page-link linkPaginacion"
            >
              {numero}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
