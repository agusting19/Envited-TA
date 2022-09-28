import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createEvent } from "../../redux/actions";
import styles from "./createEvent.module.css";

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
    <div className={styles.container}>
      <div className={styles.titles}>
        <p>Create your</p>
        <h2 className={styles.title}>Awesome event</h2>
      </div>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          onChange={onChange}
          className={styles.form__input}
        />
        <input
          type="text"
          name="hostName"
          placeholder="Host Name"
          onChange={onChange}
          className={styles.form__input}
        />
        <input
          type="date"
          name="startDate"
          onChange={onChange}
          className={styles.form__input}
        />
        <input
          type="date"
          name="endDate"
          onChange={onChange}
          className={styles.form__input}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={onChange}
          className={styles.form__input}
        />
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={onChange}
          className={styles.form__input}
        />
        <button>Show Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
