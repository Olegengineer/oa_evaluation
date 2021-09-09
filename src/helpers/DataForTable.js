export const fakeTableData = {
  columnData: ['Invoice #', 'Customer', 'Invoice Date', 'Revenue', 'Cost of Goods', 'Gross Margin'],
  rowData: new Array(30).fill('').map((item, idx) => ({
    id: idx,
    invoice: `Invoice ${idx + 1}`,
    customer: `Customer ${idx + 1}`,
    invoiceDate: new Date(2021, 8, 12),
    revenue: 700,
    costOfGoods: 400,
    grossMargin: 200
  })),
};