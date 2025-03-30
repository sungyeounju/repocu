import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import * as S from "./styled";
import Title from "../../../layout/sketch/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
} from "../../../firebase-config.js";
import moment from "moment";
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
    const querySnapshot = await getDocs(collection(db, "sketchbook"));
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

    await addDoc(collection(db, "sketchbook"), {
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

    await deleteDoc(doc(db, "sketchbook", id));
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
      <S.Wrapper data-aos="fade-up">
        <Title title={"Guset Book"} />
        <S.InnerBook>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
          >
            {Array.from({ length: Math.ceil(entries.length / 3) }).map(
              (_, slideIndex) => {
                const items = entries.slice(slideIndex * 3, slideIndex * 3 + 3); // 3개씩 자르기
                return (
                  <SwiperSlide key={slideIndex}>
                    {items.map((item) => (
                      <div className="item-card" key={item.id}>
                        <span className="tit-name">
                          <span className="txt-from">From.</span>{" "}
                          {item.nickname}
                        </span>
                        <strong className="txt-cont">{item.content}</strong>
                        <span className="txt-date">{item.date}</span>
                        <button
                          className="screen-out btn-del"
                          onClick={() => openModalPassWord(item)}
                        >
                          삭제
                        </button>
                      </div>
                    ))}
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </S.InnerBook>
        <S.BtnWrite onClick={openModal}>방명록 작성하기</S.BtnWrite>
        <S.Popup className={modalOpen ? "openModal popup" : "popup"}>
          <S.Dim />
          <S.InnerForm>
            <Title title={"GUSET BOOK"} />
            <S.Form onSubmit={handleSubmit}>
              <S.FormItem>
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
              </S.FormItem>
              <S.FormItem>
                <textarea
                  placeholder="내용을 입력하세요"
                  value={content}
                  maxLength={50}
                  onChange={(e) => setContent(e.target.value)}
                />
                <span className="txt-all">
                  <span className="txt-num">{content.length}</span>/50
                </span>
              </S.FormItem>
              <S.FormItem>
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
              </S.FormItem>
              <S.BtnApply
                type="submit"
                className={nickname && content && password ? "active" : ""}
              >
                등록하기
              </S.BtnApply>
            </S.Form>
            <S.BtnClose onClick={closeModal} className="screen-out">
              닫기
            </S.BtnClose>
          </S.InnerForm>
        </S.Popup>
        {isModalOpen && selectedEntry && (
          <S.Popup className="open-password">
            <S.Dim />
            <S.InnerForm className="inner-password">
              <Title title={"DELETE A MESSAGE"} />
              <S.Form>
                <span className="txt-password">
                  작성자만 글을
                  <br />
                  삭제하실 수 있습니다
                </span>
                <S.FormItem>
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
                </S.FormItem>
              </S.Form>
              <S.BtnDel
                className={deletePassword[selectedEntry?.id] ? "active" : ""}
                onClick={() => handleDelete(selectedEntry.id)}
              >
                삭제
              </S.BtnDel>
              <S.BtnClose onClick={closeModalPassWord} className="screen-out">
                닫기
              </S.BtnClose>
            </S.InnerForm>
          </S.Popup>
        )}
      </S.Wrapper>
    </>
  );
}
export default GuestBook;
