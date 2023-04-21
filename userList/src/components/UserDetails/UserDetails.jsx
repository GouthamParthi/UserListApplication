import { useEffect, useState } from "react";
import { fetchUsers } from "../../Api/Api";
import SquareLoading from "../Animation/SquareLoading";
import Card from "../Card/Card";
import styles from "./UserDetails.module.css";
import AddNewUser from "../AddNewUser/AddNewUser";
function UserDetails({ searchValue }) {
  const [userList, setUserList] = useState([]);
  const [filterUserlist, setFilterUserlist] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [showmodal, setShowModal] = useState(false);
  const rowPerpage = 10;
  let endIndex = (pageNumber + 1) * rowPerpage;
  let startIndex = endIndex - rowPerpage;
  let maxPage = userList ? Math.floor(userList.length / rowPerpage) : 0;
  const handleNavigation = (e) => {
    const { name } = e.target;
    if (name === "Previous" && pageNumber > 0) {
      setPageNumber((currentPage) => currentPage - 1);
    } else if (name === "Next" && pageNumber < maxPage) {
      setPageNumber((currentPage) => currentPage + 1);
    }
  };
  const handlemodal = () => {
    setShowModal((prevState) => {
      return !prevState;
    });
  };
  const handleAddNew = (e, formData) => {
    e.preventDefault();
    const findDuplicate = userList.filter((user) => {
      return user.FirstNameLastName === formData.FirstNameLastName;
    });
    if (findDuplicate.length > 0) {
      alert("You can't add duplicate user");
    } else {
      const formDatawithId = { ...formData, ID: userList.length + 1 };
      const copyOfUserList = [...userList, formDatawithId];
      localStorage.setItem("userList", JSON.stringify(copyOfUserList));
      setUserList(copyOfUserList);
    }
  };
  const handleModal = (userId, present) => {
    const joinedModal = userList.map((user) => {
      if (user.ID === userId) {
        return { ...user, modalOn: present };
      } else {
        return { ...user, modalOn: present ? !present : present };
      }
    });
    setFilterUserlist(joinedModal);
  };
  useEffect(() => {
    if (searchValue.length === 0) {
      setFilterUserlist(userList);
    } else {
      const filterSearch = userList.filter((user) => {
        return user.FirstNameLastName.toLowerCase().indexOf(searchValue) !== -1;
      });
      setFilterUserlist(filterSearch);
    }
  }, [searchValue]);
  useEffect(() => {
    let localUserList = JSON.parse(localStorage.getItem("userList"));
    if (localUserList) {
      setUserList(localUserList);
      setFilterUserlist(localUserList);
    } else {
      const handleFetchUser = async () => {
        const data = await fetchUsers(pageNumber);
        setUserList(data);
        setFilterUserlist(data);
        localStorage.setItem("userList", JSON.stringify(data));
      };
      handleFetchUser();
    }
  }, []);
  return (
    <>
      <AddNewUser
        handleAddNewUser={handleAddNew}
        show={showmodal}
        handlemodal={handlemodal}
      />
      <div className={styles.users}>
        <div className={styles.userDetails}>
          {userList.length !== 0 ? (
            <>
              {filterUserlist.slice(startIndex, endIndex).map((user, index) => {
                return (
                  <div className={styles.userNames} key={index}>
                    <h4
                      onMouseEnter={() => {
                        handleModal(user.ID, true);
                      }}
                      onMouseLeave={() => {
                        handleModal(user.ID, false);
                      }}
                    >
                      {user.FirstNameLastName}
                    </h4>
                    {user.modalOn ? <Card user={user} /> : null}
                  </div>
                );
              })}

              <div className={styles.navButtons}>
                <button
                  className={
                    pageNumber !== 0 ? styles.button : styles.buttonDisabled
                  }
                  name="Previous"
                  onClick={handleNavigation}
                >
                  Previous
                </button>
                <button
                  className={
                    pageNumber < maxPage ? styles.button : styles.buttonDisabled
                  }
                  name="Next"
                  onClick={handleNavigation}
                >
                  Next
                </button>
                <button
                  className={styles.button}
                  name="AddNew"
                  onClick={handlemodal}
                >
                  Add New
                </button>
              </div>
            </>
          ) : (
            <SquareLoading className={styles.squareLoad} />
          )}
        </div>
      </div>
    </>
  );
}

export default UserDetails;
