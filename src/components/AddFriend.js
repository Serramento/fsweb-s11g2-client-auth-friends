import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const initialValue = {
  friendName: "",
  friendEmail: "",
};

function AddFriend() {
  const [friendForm, setFriendForm] = useState(initialValue);

  const { addingFriend } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addingFriend(friendForm);
    setFriendForm(initialValue);
  };

  const handleChange = (e) => {
    setFriendForm({ ...friendForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="AddFriend">
      <h1>ADD FRIEND</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="friendName">FRIEND NAME</label>
          <input
            type="text"
            value={friendForm.friendName}
            onChange={handleChange}
            name="friendName"
            id="friendName"
          />
        </div>
        <div>
          <label htmlFor="friendEmail">FRIEND EMAIL</label>
          <input
            type="text"
            value={friendForm.friendEmail}
            onChange={handleChange}
            name="friendEmail"
            id="friendEmail"
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default AddFriend;
