import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../../redux/actions";

const CreateEvent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formInput, setFormInput] = useState({
    eventName: "",
    hostName: "",
    startDate: "",
    endDate: "",
    location: "",
    photo: "",
  });

  const onChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
    dispatch(createEvent(formInput));
    navigate("/event");
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
