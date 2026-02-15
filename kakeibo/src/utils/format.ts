export const formatJPY = (value: number) =>
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    value,
  );

export const toMonthKey = (isoDate: string) => isoDate.slice(0, 7); // 'YYYY-MM'
``;
