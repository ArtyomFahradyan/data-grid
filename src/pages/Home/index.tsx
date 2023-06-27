import React, { CSSProperties, useState } from "react";
import { useCSVReader } from "react-papaparse";
import { CSVLink } from "react-csv";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { CsvReader, AcceptedFile, TableWrapper } from "./styles";

const styles = {
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
      {data.length ? (
        <TableWrapper>
          <CSVLink className="downloadbtn" filename="my-file.csv" data={data}>
            Export to CSV
          </CSVLink>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {data.map((row: string[], i) => (
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
        </TableWrapper>
      ) : null}
    </>
  );
}

export default Home;
