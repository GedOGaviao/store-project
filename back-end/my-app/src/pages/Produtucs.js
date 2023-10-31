import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Produtucs() {


    useEffect(() => {
       	
        axios.get(`http://localhost:3000/api/produtcs`).then(res => {
        console.log(res);
        });

    }, [])

  return (
    <div className="container mt-15">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Produtucs List
                <Link to="/" className="btn btn-primary float-end">Add Produtuc</Link>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Tel Forcedor</th>
                    <th>Email Forcedor</th>
                    <th>Editar</th>
                    <th>Deletar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th></th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtucs;
