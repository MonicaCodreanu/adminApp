import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";

function Single() {
  const { userId } = useParams();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const userDetails = async (id) => {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUserData(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    userDetails();
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            {userData ? (
              <div className="item">
                <img src={userData.img} alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">{userData.fullName}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{userData.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">{userData.phone}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Adress:</span>
                    <span className="itemValue">{userData.address}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country</span>
                    <span className="itemValue">{userData.country}</span>
                  </div>
                </div>
              </div>
            ) : (
              "Loading"
            )}
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
}

export default Single;
