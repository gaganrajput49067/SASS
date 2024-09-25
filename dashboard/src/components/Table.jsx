import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import "./Table.scss"; // Import your custom styles

const Table = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Hardcoded data
    const data = [
      {
        candidateName: "John Doe",
        jobName: "Frontend Developer",
        rating: 4.5,
        appliedDate: "2023-09-01",
      },
      {
        candidateName: "Jane Smith",
        jobName: "Backend Developer",
        rating: 4.7,
        appliedDate: "2023-09-05",
      },
      
      {
        candidateName: "Alice Williams",
        jobName: "Data Scientist",
        rating: 4.9,
        appliedDate: "2023-09-15",
      },
      {
        candidateName: "David Brown",
        jobName: "DevOps Engineer",
        rating: 4.3,
        appliedDate: "2023-09-20",
      },
      {
        candidateName: "Emily Davis",
        jobName: "UI/UX Designer",
        rating: 4.8,
        appliedDate: "2023-09-25",
      },
      {
        candidateName: "Chris Wilson",
        jobName: "Mobile Developer",
        rating: 4.4,
        appliedDate: "2023-09-27",
      },
      {
        candidateName: "Chris Wilson",
        jobName: "Mobile Developer",
        rating: 4.4,
        appliedDate: "2023-09-27",
      },
      {
        candidateName: "Chris Wilson",
        jobName: "Mobile Developer",
        rating: 4.4,
        appliedDate: "2023-09-27",
      },
    ];
    setProducts(data);
  }, []);

  return (
    <div className="custom-table card">
      <DataTable value={products} showGridlines className="styled-datatable">
        <Column field="candidateName" header="CandidateName"></Column>
        <Column field="jobName" header="JobName"></Column>
        <Column field="rating" header="Rating"></Column>
        <Column field="appliedDate" header="AppliedDate"></Column>
      </DataTable>
    </div>
  );
};

export default Table;
