import Logs from "../../../components/logs";
import SendCard from "../../../components/sendMoneyCard";

const page = async () => {
  return (
    <div>
      <SendCard></SendCard>
      <Logs></Logs>
    </div>
  );
};

export default page;
