import SidebarChatItem from './SidebarChatItem';

const Sidevar = () => {
  const chats = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
  return (
    <div className="inbox_chat">
      {chats.map((e) => (
        <SidebarChatItem key={e} />
      ))}

      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
};

export default Sidevar;
