fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => {
    // استبدل "AE" برمز دولتك (مثلاً "EG" لمصر) إذا كنت تريد تغيير التقييد
    if (data.country_code !== "EG") {
      document.body.innerHTML = 
        "<h2 style='text-align:center;margin-top:50px;'>🚫 هذا المحتوى غير متاح في بلدك</h2>";
    }
  })
  .catch(err => console.error(err));
