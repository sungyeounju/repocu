import * as S from "./styled";
import Title from "../../../layout/sketch/Title";

function Calendar({ data }) {
  return (
    <>
      <S.Wrapper data-aos="fade-up">
        <Title title="Calendar" />
        <S.Month>{data.calender.month}</S.Month>
        <S.InnerDate>
          <li>
            <span className="txt-date">{data.calender.week1}</span>
            <span className="txt-day">{data.calender.day1}</span>
          </li>
          <li className="active">
            <span className="txt-date">{data.calender.week2}</span>
            <span className="txt-day">{data.calender.day2}</span>
          </li>
          <li>
            <span className="txt-date">{data.calender.week3}</span>
            <span className="txt-day">{data.calender.day3}</span>
          </li>
        </S.InnerDate>
        <S.TxtDesc>{data.calender.text}</S.TxtDesc>
      </S.Wrapper>
    </>
  );
}
export default Calendar;
