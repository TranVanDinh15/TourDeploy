const postDataLocal=(data)=>{
    // Đẩy Kết quả tìm kiếm lên localStorage
  localStorage.setItem('searchValue',JSON.stringify(data))
}
export {postDataLocal}