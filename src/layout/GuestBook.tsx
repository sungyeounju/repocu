import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import Title from "../component/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
} from "./../firebase-config.js";
import moment from "moment";
import btnClose from "../assets/ico/btn_close_40.png";
import btnEdit from "../assets/ico/btn_edit.png";
import icoFrom from "../assets/ico/img_from.png";
import bgGuest01 from "../assets/ico/bg_guestbook01.png";
import bgGuest02 from "../assets/ico/bg_guestbook02.png";
interface GuestbookEntry {
  id: string;
  nickname: string;
  content: string;
  password: string;
  date: string;
}

function GuestBook() {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [deletePassword, setDeletePassword] = useState({}); // 삭제용 비밀번호 상태

  // // 방명록 데이터 불러오기
  const fetchEntries = async () => {
    const querySnapshot = await getDocs(collection(db, "guestbook"));
    const data: GuestbookEntry[] = querySnapshot.docs.map((doc) => {
      const docData = doc.data();
      const entry = {
        id: doc.id,
        nickname: docData.nickname,
        content: docData.content,
        password: docData.password,
        date: docData.date
          ? docData.date.toDate
            ? moment(docData.date.toDate()).format("YYYY. M. D")
            : docData.date
          : "", // Timestamp 형식 처리
      };

      return entry;
    });
    setEntries(data);
  };

  // // 방명록 작성
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nickname || !content || !password)
      return alert("모든 항목을 입력해주세요!");

    const newDate = new Date();
    const date = moment(newDate).format("YYYY. M. D");

    await addDoc(collection(db, "guestbook"), {
      nickname,
      content,
      password,
      date, // 날짜 필드 추가
    });
    setNickname("");
    setContent("");
    setPassword("");
    fetchEntries();
    closeModal();
  };

  // // 방명록 삭제
  const handleDelete = async (id) => {
    if (!deletePassword[id]) return alert("비밀번호를 입력하세요.");

    const entry = entries.find((item) => item.id === id);
    if (!entry) return alert("데이터를 찾을 수 없습니다.");
    if (entry.password !== deletePassword[id])
      return alert("비밀번호가 일치하지 않습니다.");

    await deleteDoc(doc(db, "guestbook", id));
    fetchEntries();
    closeModalPassWord();
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [selectedEntry, setSelectedEntry] = useState<GuestbookEntry | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 특정 SwiperSlide의 모달 열기
  const openModalPassWord = (entry: GuestbookEntry) => {
    setSelectedEntry(entry); // 현재 클릭한 entry 저장
    setIsModalOpen(true); // 모달 열기
  };

  // 모달 닫기
  const closeModalPassWord = () => {
    setIsModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <>
      <Title title={"GUSET BOOK"} />
      <InnerBook>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          spaceBetween={20}
        >
          {entries.map((entry) => (
            <SwiperSlide key={entry.id}>
              <strong className="txt-cont">{entry.content}</strong>
              <span className="tit-name">{entry.nickname}</span>
              <span className="txt-date">{entry.date}</span>
              <button
                className="screen-out btn-del"
                onClick={() => openModalPassWord(entry)}
              >
                삭제
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </InnerBook>
      <BtnWrite onClick={openModal}>방명록 작성하기</BtnWrite>
      <Popup className={modalOpen ? "openModal popup" : "popup"}>
        <Dim />
        <InnerForm>
          <Title title={"GUSET BOOK"} />
          <Form onSubmit={handleSubmit}>
            <FormItem>
              <input
                type="text"
                placeholder="이름을 입력하세요"
                value={nickname}
                maxLength={10}
                onChange={(e) => setNickname(e.target.value)}
              />
              <span className="txt-all">
                <span className="txt-num">{nickname.length}</span>/10
              </span>
            </FormItem>
            <FormItem>
              <textarea
                placeholder="내용을 입력하세요"
                value={content}
                maxLength={50}
                onChange={(e) => setContent(e.target.value)}
              />
              <span className="txt-all">
                <span className="txt-num">{content.length}</span>/50
              </span>
            </FormItem>
            <FormItem>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                maxLength={10}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="txt-all">
                <span className="txt-num">{password.length}</span>/10
              </span>
            </FormItem>
            <BtnApply
              type="submit"
              className={nickname && content && password ? "active" : ""}
            >
              등록하기
            </BtnApply>
          </Form>
          <BtnClose onClick={closeModal} className="screen-out">
            닫기
          </BtnClose>
        </InnerForm>
      </Popup>
      {isModalOpen && selectedEntry && (
        <Popup className="open-password">
          <Dim />
          <InnerForm className="inner-password">
            <Title title={"DELETE A MESSAGE"} />
            <Form>
              <span className="txt-password">
                작성자만 글을
                <br />
                삭제하실 수 있습니다
              </span>
              <FormItem>
                <input
                  type="password"
                  placeholder="비밀번호 입력"
                  onChange={(e) =>
                    setDeletePassword({
                      ...deletePassword,
                      [selectedEntry.id]: e.target.value,
                    })
                  }
                />
              </FormItem>
            </Form>
            <BtnDel
              className={deletePassword[selectedEntry?.id] ? "active" : ""}
              onClick={() => handleDelete(selectedEntry.id)}
            >
              삭제
            </BtnDel>
            <BtnClose onClick={closeModalPassWord} className="screen-out">
              닫기
            </BtnClose>
          </InnerForm>
        </Popup>
      )}
    </>
  );
}
export default GuestBook;
const InnerBook = styled.div`
  margin-top: 60px;
  .swiper-slide {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 250px;
    height: 186px;
    padding: 0 50px;
    background-size: 100%;
    background-repeat: no-repeat;
    &: nth-child(odd) {
      background-image: url(${bgGuest01});
    }
    &: nth-child(even) {
      background-image: url(${bgGuest02});
    }
  }
  .txt-cont {
    display: block;
    font-size: 13px;
  }
  .tit-name {
    display: flex;
    margin-top: 5px;
    font-size: 10px;
    &:before {
      display: inline-block;
      width: 22px;
      height: 14px;
      margin-right: 3px;
      background: url(${icoFrom}) center/100% no-repeat;
      content: "";
    }
  }
  .txt-date {
    position: relative;
    display: block;
    margin-top: 8px;
    font-size: 9px;
    font-weight: 500;
    font-family: "Montserrat", serif;
  }
  .btn-del {
    position: absolute;
    right: 45px;
    bottom: 16px;
    width: 24px;
    height: 24px;
    background: url(${btnEdit}) 0/100% no-repeat;
  }
`;
const Popup = styled.div`
  display: none;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 99;
  &.openModal {
    display: block;
  }
  &.open-password {
    display: block;
  }
`;
const Dim = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.8;
`;
const InnerForm = styled.div`
  overflow: hidden;
  position: absolute;
  left: calc(50% - 167px);
  top: calc(50% - 205px);
  z-index: 999;
  width: 335px;
  height: 410px;
  background-color: #fff;
  border-radius: 6px;
  h2 {
    margin: 30px 0 40px;
  }
  &.inner-password {
    height: 310px;
    h2 {
      margin-bottom: 0;
    }
    .txt-password {
      display: block;
      margin: 10px 0 30px;
      font-size: 16px;
    }
  }
`;
const BtnWrite = styled.button`
  width: 150px;
  height: 42px;
  margin-top: 50px;
  border-radius: 100px;
  border: 1px solid #baae9f;
  font-size: 14px;
`;
const BtnApply = styled.button`
  margin-top: 28px;
  height: 60px;
  width: 100%;
  color: #9e9a9a;
  font-size: 16px;
  background-color: #d7d7d7;
  &.active {
    background-color: #baae9f;
    color: #fff;
  }
`;
const BtnDel = styled(BtnApply)`
  margin-top: 32px;
`;
const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: url(${btnClose}) 0/100% no-repeat;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormItem = styled.div`
  position: relative;
  width: 295px;
  input,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #d7d7d7;
    border-radius: 2px;
    resize: none;
    font-size: 14px;
    box-sizing: border-box;
  }
  textarea {
    height: 88px;
  }
  + div {
    margin-top: 8px;
  }
  .txt-all {
    position: absolute;
    right: 12px;
    bottom: 15px;
    font-size: 11px;
    color: #9e9a9a;
    .txt-num {
      color: #191919;
    }
  }
`;
