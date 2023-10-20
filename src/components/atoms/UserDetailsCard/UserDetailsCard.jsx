import React from "react";
import "./UserDetailsCard.scss";

const RenderList = ({ listData }) => {
  const formatedData = Object.entries(listData);
  return (
    <>
      {formatedData.map((item, index) => {
        return <h3 key={index}>{`${item[0]} : ${item[1]}`}</h3>;
      })}
    </>
  );
};

const UserDetailsCard = ({ userDetails }) => {
  return (
    <div className="user-detail-card-parent">
      <div className="detail-card-chid1">
        <RenderList
          listData={{
            Name: userDetails.name,
            UserName: userDetails.username,
            CatchPhrase: userDetails.company.catchPhrase,
          }}
        />
      </div>
      <div className="detail-card-chid2">
        <RenderList
          listData={{
            Address: `${userDetails.address.street}, ${userDetails.address.suits}, ${userDetails.address.city}`,
            Email: userDetails.email,
          }}
        />
      </div>
    </div>
  );
};

export default UserDetailsCard;
