import React, { CSSProperties, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { CSVLink } from "react-csv";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useCSVReader } from "react-papaparse";

const styles = {
  csvReader: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  } as CSSProperties,
  browseFile: {
    width: "20%",
  } as CSSProperties,
  acceptedFile: {
    border: "1px solid #ccc",
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: "80%",
  } as CSSProperties,
  remove: {
    borderRadius: 0,
    padding: "0 20px",
  } as CSSProperties,
  progressBarBackgroundColor: {
    backgroundColor: "red",
  } as CSSProperties,
};
function Home() {
  const [data, setData] = useState([]);
  const { CSVReader } = useCSVReader();

  return (
    <>
      <CSVReader
        onUploadAccepted={(results: any) => {
          // eslint-disable-next-line no-console
          console.log(results);
          setData(results.data);
        }}
      >
        {({
          getRootProps,
          acceptedFile,
          ProgressBar,
          getRemoveFileProps,
        }: any) => (
          <>
            <div style={styles.csvReader}>
              <button
                type="button"
                {...getRootProps()}
                style={styles.browseFile}
              >
                Browse file
              </button>
              <div style={styles.acceptedFile}>
                {acceptedFile && acceptedFile.name}
              </div>
              <button {...getRemoveFileProps()} style={styles.remove}>
                Remove
              </button>
            </div>
            <ProgressBar style={styles.progressBarBackgroundColor} />
          </>
        )}
      </CSVReader>
      {data.length ? (
        <CSVLink className="downloadbtn" filename="my-file.csv" data={data}>
          Export to CSV
        </CSVLink>
      ) : null}
      {data.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {data.map((row: any, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {row.map((item: string, i: number) => (
                    <TableCell key={item + i} component="th" scope="row">
                      {item}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
}

export default Home;
