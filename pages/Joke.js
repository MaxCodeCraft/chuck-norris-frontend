import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const calendar = <FontAwesomeIcon icon={faCalendar} />;
const trash = <FontAwesomeIcon icon={faTrash} />;

function Joke(props) {
  return (
    <div className="jokeLine w-full flex items-center justify-between py-1">
      <span className="jokeSentence w-2/3">{props.value}</span>
      <div className="calendarDate">
        <span>{calendar}</span>
        <span className="pl-2">{props.date}</span>
      </div>
      <div className="trash text-red-500 hover:cursor-pointer">{trash}</div>
    </div>
  );
}

export default Joke;
