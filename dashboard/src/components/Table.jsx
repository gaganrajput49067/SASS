import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useEffect, useState } from "react";
import "./Table.scss"; // Enhanced custom styles

const Table = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = [
      {
        customerName: "John Doe",
        orderNumber: "ORD001",
        amount: 250.75,
        status: "Completed",
      },
      {
        customerName: "Jane Smith",
        orderNumber: "ORD002",
        amount: 120.5,
        status: "Pending",
      },
      {
        customerName: "Alice Williams",
        orderNumber: "ORD003",
        amount: 340.2,
        status: "Cancelled",
      },
      {
        customerName: "David Brown",
        orderNumber: "ORD004",
        amount: 500.0,
        status: "Completed",
      },
      {
        customerName: "Emily Davis",
        orderNumber: "ORD005",
        amount: 80.99,
        status: "Pending",
      },
      {
        customerName: "Emily Davis",
        orderNumber: "ORD06",
        amount: 80.9,
        status: "Pending",
      },
      {
        customerName: "Alisa Davis",
        orderNumber: "ORD007",
        amount: 80.99,
        status: "Pending",
      },
    ];
    setOrders(data);
  }, []);

  const feedbacks = [
    {
      customer: "John Doe",
      rating: 5,
      comment: "Excellent service and timely delivery! The product quality exceeded my expectations, and the packaging was secure. I will definitely order again.",
    },
    {
      customer: "Jane Smith",
      rating: 4,
      comment: "Good experience overall, but the order took a bit longer than expected. Customer support was responsive and kept me updated throughout the process.",
    },
    {
      customer: "David Brown",
      rating: 3,
      comment: "The service was average. While the product was as described, there was a delay in delivery, and the customer support team was difficult to reach.",
    },
  ];

  return (
    <div className="table-feedback-container">
      <div className="table-section card">
        <h2>Orders Overview</h2>
        <DataTable
          value={orders}
          showGridlines
          className="styled-datatable"
          responsiveLayout="scroll"
        >
          <Column field="customerName" header="Customer Name"></Column>
          <Column field="orderNumber" header="Order Number"></Column>
          <Column
            field="amount"
            header="Amount"
            body={(rowData) => `$${rowData.amount.toFixed(2)}`}
          ></Column>
          <Column
            field="status"
            header="Status"
            body={(rowData) => (
              <span className={`status-tag ${rowData.status.toLowerCase()}`}>
                {rowData.status}
              </span>
            )}
          ></Column>
        </DataTable>
      </div>
      <div className="feedback-section card">
        <h2>Customer Feedback</h2>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="feedback-card">
            <h3>{feedback.customer}</h3>
            <p>
              <strong>Rating:</strong> {feedback.rating} / 5
            </p>
            <p>{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
