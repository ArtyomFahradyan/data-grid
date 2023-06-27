import React, { CSSProperties, useState } from "react";
import { useCSVReader } from "react-papaparse";
import { Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { CsvReader, AcceptedFile, TableWrapper } from "./styles";

const styles = {
  progressBarBackgroundColor: {
    backgroundColor: "red",
  } as CSSProperties,
};
function Home() {
  const [columns, setColumns] = useState<any[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const { CSVReader } = useCSVReader();

  const csvToDataGrid = (data: Array<string[]>) => {
    const columns = data[0].map((data) => ({
      field: data,
      headerName: data.toUpperCase(),
      width: 150,
    }));
    setColumns(columns);

    data.shift();
    const rows = data?.map((data, i) => {
      const obj: Record<string, string | number> = { id: i };
      columns.forEach((column, i) => {
        obj[column.field] = data[i];
      });

      return obj;
    });
    if (rows) {
      setRows(rows);
    }
  };

  return (
    <>
      <CSVReader
        onUploadAccepted={(results: any) => {
          csvToDataGrid(results.data);
        }}
      >
        {({
          getRootProps,
          acceptedFile,
          ProgressBar,
          getRemoveFileProps,
        }: any) => (
          <>
            <CsvReader>
              <Button variant="contained" type="button" {...getRootProps()}>
                Browse file
              </Button>
              <AcceptedFile>{acceptedFile && acceptedFile.name}</AcceptedFile>
              <Button variant="contained" {...getRemoveFileProps()}>
                Remove
              </Button>
            </CsvReader>
            <ProgressBar style={styles.progressBarBackgroundColor} />
          </>
        )}
      </CSVReader>
      {rows.length ? (
        <TableWrapper>
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
          />
        </TableWrapper>
      ) : null}
    </>
  );
}

export default Home;
