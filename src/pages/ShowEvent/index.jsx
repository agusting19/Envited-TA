import { useSelector } from "react-redux";

const ShowEvent = () => {
  const formData = useSelector((state) => state.event.eventCreated);

  console.log(formData);

  return (
    <div>
      <p>
        {formData?.eventName ? formData.eventName : "No event name entered"}
      </p>
      <p>{formData?.hostName ? formData.hostName : "No host name entered"}</p>
      <p>
        {formData?.startDate ? formData.startDate : "No start date entered"}
      </p>
      <p>{formData?.endDate ? formData.endDate : "No end date entered"}</p>
      <p>{formData?.location ? formData.location : "No location entered"}</p>
      <p>{formData?.photo ? formData.photo : "No photo uploaded"}</p>
    </div>
  );
};

export default ShowEvent;
