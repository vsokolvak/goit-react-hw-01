import style from "./TransactionHistory.module.css";

// items - масив об'єктів транзакцій
// items.id — унікальний ідентифікатор транзакції
// items.type — тип транзакції
// items.amount - сума транзакції
// items.currency - тип валюти
// use <TransactionHistory items={} />

function TransactionHistory({ items }) {
  return (
    <table className={style.container}>
      <thead className={style.thead}>
        <tr>
          <th className={style.headText}>Type</th>
          <th className={style.headText}>Amount</th>
          <th className={style.headText}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={style.bodyText}>{type}</td>
              <td className={style.bodyText}>{amount}</td>
              <td className={style.bodyText}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;