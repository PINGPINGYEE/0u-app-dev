import React, { useState } from "react";
import "../css/ProductRegistration.css"; // ProductRegistration 페이지 스타일 파일

function ProductRegistration() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [startDate, setStartDate] = useState(""); // 대여 시작일
  const [endDate, setEndDate] = useState(""); // 대여 종료일

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0])); // 이미지 미리보기 URL 설정
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !price || !description || !image || !startDate || !endDate) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    alert("상품이 등록되었습니다!");
    // 여기에 서버로 데이터를 전송하는 코드 추가
  };

  return (
    <div className="product-registration-container">
      <header className="registration-header">
        <h1 className="header-title">Product Registration</h1>
      </header>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">상품명</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => handleInputChange(e, setProductName)}
            placeholder="상품명을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">가격 (₩)</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => handleInputChange(e, setPrice)}
            placeholder="가격을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">설명</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => handleInputChange(e, setDescription)}
            placeholder="상품 설명을 입력하세요"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="startDate">대여 시작일</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => handleInputChange(e, setStartDate)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">대여 종료일</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => handleInputChange(e, setEndDate)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">이미지 업로드</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && <img src={image} alt="미리보기" className="image-preview" />}
        </div>
        <button type="submit" className="submit-button">
          등록하기
        </button>
      </form>
    </div>
  );
}

export default ProductRegistration;
