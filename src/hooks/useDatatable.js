import { useState, useEffect } from "react";
import Papa from "papaparse";

async function getData(filename) {
  const response = await fetch(`data/${filename}.csv`);
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder("utf-8");
  const csv = await decoder.decode(result.value);
  let data = Papa.parse(csv).data;

  const headerRow = data[0];
  data = data.map((row) => {
    return headerRow.reduce((acc, cv, index) => {
      acc[cv] = row[index];
      return acc;
    }, {});
  });
  return data;
}

function useDatatable(filename, defaultValue = []) {
  const [headers, setHeaders] = useState(defaultValue);
  const [rows, setRows] = useState(defaultValue);

  const formulaires = {
    11063: "Campagne de dons",
    10508: "Abonnements",
    11550: "Commande de numéro",
  };

  function traitementData(data) {
    data.forEach((row) => {
      row["simpay_form_id (metadata)"] =
        formulaires[row["simpay_form_id (metadata)"]];

      row["Amount"] = row["Amount"].replace(/\,00$/, "") + "€";
      row["Converted Amount"] =
        row["Converted Amount"].replace(/\,00$/, "") + "€";
    });
  }

  useEffect(() => {
    async function updateDatatable() {
      const data = await getData(filename);
      traitementData(data);
      setHeaders(Object.keys(data[0]));
      setRows(data.slice(1));
    }
    updateDatatable();
  }, []);

  return [headers, rows];
}

export default useDatatable;
