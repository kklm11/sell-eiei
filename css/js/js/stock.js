const API_URL = "https://script.google.com/macros/s/AKfycbwhTVRhzjXh3dy8vd9yeERa6LmejqcpbUx1QopMD2345Vx2GOvaK4ahxbT0TUH6bk9D8w/exec";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    if (data.length > 0) {
      document.getElementById("stock").textContent =
        `พร้อมใช้งาน ${data[0].stock} แอค`;
    }
  })
  .catch(err => {
    console.error(err);
    document.getElementById("stock").textContent =
      "ไม่สามารถโหลดสต็อกได้";
  });
