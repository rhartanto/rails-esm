export default function utils() {
  //
  console.log('bar');
}

export const CountTableRows = (tableId) => {
  const table = document.getElementById(tableId);
  return table?.tBodies[0]?.rows?.length || 0;
};

export const sum = (a, b) => {
  return a + b;
}
