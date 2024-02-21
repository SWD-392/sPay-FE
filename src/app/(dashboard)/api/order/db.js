const db = [
  {
    OrderID: "1234567890",
    WalletID: "9876543210",
    Description: "Purchase of item X",
    Date: "2024-02-04T13:49:00+07:00",
    DepositID: "5555555555",
    StoreWithDrawID: "null",
    Status: "Pending",
  },
  {
    OrderID: "0987654321",
    WalletID: "1234567890",
    Description: "Payment for service Y",
    Date: "2024-02-03T14:20:00+07:00",
    DepositID: "6666666666",
    StoreWithDrawID: "12345",
    Status: "Completed",
  },
  {
    OrderID: "9999999999",
    WalletID: "0123456789",
    Description: "Top-up",
    Date: "2024-02-02T11:30:00+07:00",
    DepositID: "null",
    StoreWithDrawID: "null",
    Status: "Successful",
  },
  {
    OrderID: "8888888888",
    WalletID: "9012345678",
    Description: "Refund for order Z",
    Date: "2024-02-01T18:15:00+07:00",
    DepositID: "null",
    StoreWithDrawID: "54321",
    Status: "Processed",
  },
  {
    OrderID: "7777777777",
    WalletID: "7890123456",
    Description: "Transfer to another wallet",
    Date: "2024-01-31T10:00:00+07:00",
    DepositID: "null",
    StoreWithDrawID: "null",
    Status: "Completed",
  },
];

export default db;