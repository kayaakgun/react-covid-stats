import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((res) => setData(res.data[date]))
      .catch((error) => console.log(error));
  }, [data, date]);

  console.log(data);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-light">Türkiye Güncel Covid İstatikleri</h2>
            <input
              placeholder="GG/AA/YYYY"
              className="form-control"
              onChange={(e) => setDate(e.target.value)}
            ></input>
            <table className="table text-light">
              <thead className="text-success">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Günlük Hasta Sayısı</th>
                  <th scope="col">Toplam Hasta Sayısı</th>
                  <th scope="col">Günlük Vefat Sayısı</th>
                  <th scope="col">Toplam İyileşen Hasta Sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr className={data === undefined ? "bg-danger" : "bg-success"}>
                  <th scope="row">1</th>
                  <td>{data === undefined ? "data bekleniyor" : data.tests}</td>
                  <td>
                    {data === undefined ? "data bekleniyor" : data.patients}
                  </td>
                  <td>
                    {data === undefined
                      ? "data bekleniyor"
                      : data.totalPatients}
                  </td>
                  <td>
                    {data === undefined ? "data bekleniyor" : data.deaths}
                  </td>
                  <td>
                    {data === undefined
                      ? "data bekleniyor"
                      : data.totalRecovered}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
