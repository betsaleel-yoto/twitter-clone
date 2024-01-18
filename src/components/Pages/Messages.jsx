import Nav from "../Nav";

function Messages() {
  return (
    <>
      <div className="Nav_Box1_Box2">
        <Nav />
        <div className="MBox1">
          <div className="Messages_Icons">
            <h3>Messages</h3>
            <div className="M_Icon">
              <img src="../src/Icons/Settings.svg" alt="" />
              <img src="../src/Icons/Messages.svg" alt="" />
            </div>

            <h1>Welcome to your Inbox!</h1>
            <p>
              Drop a line, share posts and more with private conversations
              between you and others on x
            </p>
            <button type="button">Write a message</button>
          </div>
        </div>

        <div className="MBox2">
          <h1>Select a message</h1>

          <p>
            Choose from your existing conversations, start a new one, or just
            keep swimming
          </p>

          <button type="button">New message</button>
        </div>
      </div>
    </>
  );
}

export default Messages;
