import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { JsonToExcel } from "react-json-to-excel";
import { toast } from "react-toastify";
import excelFileHandler from "../../helpers/excelFile";
import { excelFileAll } from "../../helpers/excelFile";
import { excelFileSerils } from "../../helpers/excelFile";
import getToken from "../../helpers/getToken";
import httpRequest from "../../helpers/httpReq";
import Border from "../Border/Border";
import Container from "../Container/Container";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import classes from "./SearchPanel.module.css";

function SearchPanel() {
  const serialRef = useRef();
  const noSerialRef = useRef();
  const storeId = useRef();
  const startingDate = useRef();
  const endDate = useRef();
  const storeId2 = useRef();
  const startingDate2 = useRef();
  const endDate2 = useRef();
  const token = getToken();
  const [showMoadl, setShowMoadl] = useState(false);
  const [modalJsx, setModalJsx] = useState([]);
  const [userDetails, setUserDetails] = useState("");
  const [data, setData] = useState([]);
  const [NoSerialData, setNoSerialData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isLoading2, setIsloading2] = useState(false);
  const [isLoading3, setIsloading3] = useState(false);
  const [isLoading4, setIsloading4] = useState(false);
  const [excelFile, setExcelFile] = useState(false);
  const [excelFile2, setExcelFile2] = useState(false);

  const [exData, setExdata] = useState();
  const [exSerialData, setExSerialData] = useState();

  const modalHandler = (data, date, id, username) => {
    setShowMoadl((state) => !state);
    setUserDetails({ date, id, username });
    setModalJsx(data);
  };

  const handleClickBackDrop = () => setShowMoadl((state) => !state);

  const serialHandler = async () => {
    const id = serialRef.current.value;
    if (!id) return;
    try {
      setIsloading((state) => !state);
      const res = await httpRequest(
        "GET",
        `/order/get-user-serial-orders/${id}`,
        token
      );
      const data = res.data.data.reverse();
      data.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      setData(data);
    } catch (err) {
      toast(err.response.data.message);
      setData([]);
    }
    setIsloading((state) => !state);
  };

  const noSerialHandler = async () => {
    const id = noSerialRef.current.value;
    if (!id) return;
    try {
      setIsloading2((state) => !state);
      const res = await httpRequest(
        "GET",
        `/order/get-user-no-serial-orders/${id}`,
        token
      );
      const data = res.data.data.reverse();
      data.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      setNoSerialData(data);
    } catch (err) {
      toast(err.response.data.message);
      setNoSerialData([]);
    }
    setIsloading2((state) => !state);
  };

  const getExcelFileHandler = async (e) => {
    e.preventDefault();
    setExcelFile(false);
    setIsloading3(true);
    const searchInfo = {
      id: storeId.current.value,
      startingDate: startingDate.current.value,
      endDate: endDate.current.value,
    };

    if (searchInfo.id) {
      try {
        const res = await httpRequest(
          "POST",
          "/order/aggregate-user-no-serial",
          token,
          searchInfo
        );

        const user = {
          "שם הטכנאי": res.data.user[0].name,
          חודש: `${searchInfo.startingDate} - ${searchInfo.endDate}`,
        };

        const orders = excelFileHandler(res);
        if (Object.getOwnPropertyNames(orders).length <= 0) {
          setIsloading3(false);
          return;
        }
        const data = { ...user, ...orders };
        setExdata([data]);
        setExcelFile(true);
      } catch (err) {
        console.log(err);
        toast("invalid data");
      }
    }

    if (!searchInfo.id) {
      try {
        const res = await httpRequest(
          "POST",
          "/order/aggregate-all-no-serial",
          token,
          searchInfo
        );

        const orders = excelFileAll(res);

        if (orders.length <= 0) {
          setIsloading3(false);
          return;
        }
        setExdata(orders);
        setExcelFile(true);
      } catch (err) {
        console.log(err);
        toast("invalid data all");
      }
    }
    setIsloading3(false);
  };

  const getExcelFileHandlerSerials = async (e) => {
    e.preventDefault();
    setExcelFile2(false);
    setIsloading4(true);
    const searchInfo = {
      id: storeId2.current.value,
      startingDate: startingDate2.current.value,
      endDate: endDate2.current.value,
    };

    try {
      const res = await httpRequest(
        "POST",
        "/order/get-excel-sheet-serial",
        token,
        searchInfo
      );

      const user = {
        "שם הטכנאי": res.data.user[0].name,
        חודש: `${searchInfo.startingDate} - ${searchInfo.endDate}`,
      };

      const orders = excelFileSerils(res);
      if (orders.serials === "") {
        setIsloading4(false);
        return;
      }
      const data = { ...user, ...orders };

      setExSerialData([data]);
      setExcelFile2(true);
    } catch (err) {
      console.log(err);
      toast("invalid data");
    }

    setIsloading4(false);
  };

  return (
    <Container>
      {showMoadl && (
        <Modal handleClick={handleClickBackDrop}>
          <h5>הזמנה עבור : {userDetails.username} </h5>
          <h5>מחסן טכנאי : {userDetails.id}</h5>
          <h5>תאריך : {userDetails.date}</h5>
          {modalJsx.map((list, index) => {
            return (
              <div className={classes.modal_style} key={index}>
                <div>- {list.name} </div>
                <div>
                  &nbsp;
                  <span role="img" aria-label="arrow img">
                    ⬅️
                  </span>
                  &nbsp;
                </div>
                <div> ( {list.value} )</div>
              </div>
            );
          })}
        </Modal>
      )}
      <div className={classes.box}>
        <div className={classes.search_files__box}>
          <div className={classes.n__box}>
            <span className={classes.t1}>לחפש הזמנות לא סריאלי לפי תאריך</span>
            <div className={classes.search_files}>
              <form onSubmit={getExcelFileHandler}>
                <div className="form-group">
                  <label htmlFor="store-id">מספר מחסן</label>
                  <input
                    ref={storeId}
                    type="number"
                    className="form-control"
                    id="store-id"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="start-date">תאריך התחלה מ</label>
                  <input
                    ref={startingDate}
                    type="date"
                    className="form-control"
                    id="start-date"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="end-date">עד תאריך</label>
                  <input
                    ref={endDate}
                    type="date"
                    className="form-control"
                    id="end-date"
                  />
                </div>
                <br />
                <div className={classes.ex_box}>
                  <button type="submit" className={classes.btnStyle2}>
                    חפש
                  </button>
                  {isLoading3 ? (
                    <Loading />
                  ) : (
                    excelFile && (
                      <JsonToExcel
                        title="קובץ אקסל"
                        data={exData}
                        fileName="הזמנות, ציוד שחור "
                        btnClassName={classes.excel}
                      />
                    )
                  )}
                </div>
              </form>
              <br />
            </div>
          </div>
          <div className={classes.s__box}>
            <span className={classes.t1}>לחפש הזמנות סריאלי לפי תאריך</span>
            <div className={classes.search_files}>
              <form onSubmit={getExcelFileHandlerSerials}>
                <div className="form-group">
                  <label htmlFor="store-id">מספר מחסן</label>
                  <input
                    ref={storeId2}
                    type="number"
                    className="form-control"
                    id="store-id"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="start-date">תאריך התחלה מ</label>
                  <input
                    ref={startingDate2}
                    type="date"
                    className="form-control"
                    id="start-date"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="end-date">עד תאריך</label>
                  <input
                    ref={endDate2}
                    type="date"
                    className="form-control"
                    id="end-date"
                  />
                </div>
                <br />
                <div className={classes.ex_box}>
                  <button type="submit" className={classes.btnStyle2}>
                    חפש
                  </button>
                  {isLoading4 ? (
                    <Loading />
                  ) : (
                    excelFile2 && (
                      <JsonToExcel
                        title="קובץ אקסל"
                        data={exSerialData}
                        fileName="excel-sheet-serial"
                        btnClassName={classes.excel}
                      />
                    )
                  )}
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
        <Border></Border>
        <>
          ההזמנות ממוינות לפי תאריך ההזמנה , החל מההזמנה האחרונה , (סדר יורד)
          <div className={classes.sizeRocket}>
            <span role="img" aria-label="emoj2i">
              💥 🗓
            </span>
          </div>
        </>
        <span className={classes.t1}>לחפש הזמנות סריאלי </span>
        <div className={classes.search_input}>
          <input
            placeholder="חיפוש לפי מספר מחסן"
            type="number"
            ref={serialRef}
          />{" "}
          &nbsp;
          <button onClick={serialHandler}>
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className={classes.serial_box}>
          {isLoading ? (
            <Loading />
          ) : (
            data.map((order, index) => {
              return (
                <div key={index} className={classes.line}>
                  <div>תאריך : {order.date}</div>
                  <div>
                    <button
                      onClick={() => {
                        modalHandler(
                          order.order,
                          order.date,
                          order.id,
                          order.username
                        );
                      }}
                      className={
                        order.orederStatus === "pending"
                          ? classes.pending
                          : classes.btnStyle
                      }
                    >
                      פרטי הזמנה
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <Border />
        <span className={classes.t1}>לחפש הזמנות לא סריאלי</span>
        <div className={classes.search_input}>
          <input
            placeholder="חיפוש לפי מספר מחסן"
            type="number"
            ref={noSerialRef}
          />
          &nbsp;
          <button onClick={noSerialHandler}>
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className={classes.serial_box}>
          {isLoading2 ? (
            <Loading />
          ) : (
            NoSerialData.map((order, index) => {
              return (
                <div key={index} className={classes.line}>
                  <div>תאריך : {order.date}</div>
                  <div>
                    <button
                      onClick={() => {
                        modalHandler(
                          order.order,
                          order.date,
                          order.id,
                          order.username
                        );
                      }}
                      className={classes.btnStyle}
                    >
                      פרטי הזמנה
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <br />
        <Border />
      </div>
      <br />
    </Container>
  );
}

export default SearchPanel;
