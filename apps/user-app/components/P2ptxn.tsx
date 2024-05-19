import { Card } from "@repo/ui/card";

type TransactionsType = {
  time: Date;
  amount: number;
  type: string;
  userId: number;
};

export const P2PTransactions = (transactions: TransactionsType[]) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="pt-8 pb-8 text-center">No Recent transactions</div>
      </Card>
    );
  }
  return (
    <Card title="Recent Transactions">
      <div className="pt-2">
        {transactions.map((t) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">
                {t.type === "DEBIT"
                  ? `Sent to ${t.userId}`
                  : `Received from ${t.userId}`}
              </div>

              <div className="text-xs text-slate-600">
                {t.time.toDateString()}
              </div>
            </div>
            {t.type === "DEBIT" ? (
              <div className="flex flex-col justify-center text-red-600">
                - Rs {t.amount / 100}
              </div>
            ) : (
              <div className="flex flex-col justify-center text-green-600">
                Rs {t.amount / 100}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
