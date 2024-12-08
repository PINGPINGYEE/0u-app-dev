import React, { useState } from "react";
import "../css/Profile.css"; // Profile 페이지 스타일 파일

function Profile() {
  const [isEditing, setIsEditing] = useState(false); // 편집 모드 상태
  const [nickname, setNickname] = useState("theworldsaver"); // 닉네임 상태

  const handleEditClick = () => {
    setIsEditing(true); // 편집 모드 활성화
  };

  const handleSaveClick = () => {
    setIsEditing(false); // 편집 모드 비활성화
  };

  const handleInputChange = (e) => {
    setNickname(e.target.value); // 닉네임 상태 업데이트
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <button className="back-button">←</button>
        <h1 className="header-title">Profile</h1>
      </header>
      <div className="profile-info">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile Avatar"
          className="profile-avatar"
        />
        <div className="profile-details">
          <h2 className="profile-name">
            {isEditing ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={nickname}
                  onChange={handleInputChange}
                  className="edit-input"
                />
                <button onClick={handleSaveClick} className="save-button">
                  완료
                </button>
              </div>
            ) : (
              <>
                {nickname}{" "}
                <span className="edit-icon" onClick={handleEditClick}>
                  ✏️
                </span>
              </>
            )}
          </h2>
          <p className="profile-username">@theworldsaver</p>
          <p className="profile-group">312그루 &nbsp;{'>'}</p>
        </div>
      </div>
      <div className="profile-options">
        <ProfileOption label="SAVINGS" value="57P &nbsp;&nbsp;&nbsp;>" />
        <ProfileOption label="PURCHASE HISTORY" value="2 &nbsp;&nbsp;&nbsp;>" />
        <ProfileOption label="REGISTRATION HISTORY" value="7 &nbsp;&nbsp;&nbsp;>" />
        <ProfileOption label="GENDER" value="Male &nbsp;&nbsp;&nbsp;>" />
        <ProfileOption label="BIRTHDAY" value="01-07-2002 &nbsp;&nbsp;&nbsp;>" />
        <ProfileOption label="EMAIL" value="example@gmail.com &nbsp;&nbsp;&nbsp;>" />
        <ProfileOption label="PHONE NUMBER" value="(+82) 1012345678 &nbsp;&nbsp;&nbsp;>" />
        <ProfileOption label="CHANGE PASSWORD" value="•••••••••••••• &nbsp;&nbsp;&nbsp;>" />
        <ProfileOption label="CERTIFICATION" value="Complete &nbsp;&nbsp;&nbsp;>" />
      </div>
    </div>
  );
}

function ProfileOption({ label, value }) {
  return (
    <div className="profile-option">
      <span className="option-label">{label}</span>
      <span className="option-value">{value}</span>
    </div>
  );
}

export default Profile;
