import { useSelector } from "react-redux";
import cakeImg from "../../../public/BirthdayCake.png";
import dateImg from "../../../public/icon1.png";
import LocationImg from "../../../public/icon2.png";
import styles from "./showEvent.module.css";

const ShowEvent = () => {
  const formData = useSelector((state) => state.event.eventCreated);

  console.log(formData);

  return (
    <div className={styles.container}>
      <img className={styles.img} src={cakeImg} alt="Birthday Cake" />
      <div className={styles.information}>
        <p className={styles.title}>
          {formData?.eventName ? formData.eventName : "No event name entered"}
        </p>
        <p className={styles.subtitle}>
          {formData?.hostName
            ? `Hosted by ${formData.hostName}`
            : "No host name entered"}
        </p>
        <div className={styles.datesInformation}>
          <img src={dateImg} alt="date icon" />
          <div>
            <p className={styles.datesInformation__date}>
              {formData?.startDate
                ? formData.startDate
                : "No start date entered"}
            </p>
            <p className={styles.datesInformation__date}>
              {formData?.endDate ? formData.endDate : "No end date entered"}
            </p>
          </div>
        </div>
        <div className={styles.locationInformation}>
          <img src={LocationImg} alt="Location icon" />
          <p className={styles.locationInformation__field}>
            {formData?.location ? formData.location : "No location entered"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowEvent;
