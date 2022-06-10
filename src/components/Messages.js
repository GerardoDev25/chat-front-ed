import IncomingMessage from './IncomingMessage';
import OutGoingMessage from './OutGoingMessage';
import SendMessage from './SendMessage';

const Messages = () => {
  const massages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="mesgs">
      <div className="msg_history">{massages.map((e) => (e % 2 ? <IncomingMessage key={e}/> : <OutGoingMessage key={e}/>))}</div>
      <SendMessage />
    </div>
  );
};

export default Messages;
