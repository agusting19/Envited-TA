import { useState } from "react";

const CreateEvent = () => {
  const [formInput, setFormInput] = useState({
    eventName: "",
    hostName: "",
    startDate: "",
    endDate: "",
    location: "",
    photo: "",
  });

  const onChange = (e) => {
    setFormInput({ ...formInput, [e.event.name]: e.event.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Create Event</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="eventName" onChange={onChange} />
        <input type="text" name="hostName" onChange={onChange} />
        <input type="date" name="startDate" onChange={onChange} />
        <input type="date" name="endDate" onChange={onChange} />
        <input type="text" name="location" onChange={onChange} />
        <input type="file" name="photo" onChange={onChange} />
        <button>Show Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
