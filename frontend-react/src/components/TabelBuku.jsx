import React from "react";

function TabelBuku(){
    return (
        <div>
            <h4>Tabel Buku</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Judul</th>
                        <th>Pengarang</th>
                        <th className="col-3">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Laskar Pelangi</td>
                        <td>Andrea Hirata</td>
                        <td>
                            <button className="btn btn-sm btn-warning mx-2" >Edit</button>
                            <button className="btn btn-sm btn-danger" >Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabelBuku;