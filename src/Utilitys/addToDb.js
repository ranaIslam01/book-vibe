const geStoreBook = ( ) => {
  const storedBookSTR = localStorage.getItem("readList");
  if(storedBookSTR ){
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  }else{
    return [];
  }
}

const addToStoreDB = (id) => {
    const storeBookData = geStoreBook();
    if(storeBookData.includes(id)){
      alert("Book is already exist");
    } else{
      storeBookData.push(id);
      const data = JSON.stringify(storeBookData);
      localStorage.setItem("readList",data)
    }
}

export{addToStoreDB,geStoreBook};