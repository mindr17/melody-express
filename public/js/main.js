$(document).ready(function() {
  let currentFloor = 2;
  let currentFlat = 1;
  let usCurrentFlat = 1;
  let floorPath = $(".home-image path");
  let counterUp = $(".counter-up");
  let modalFeedback = $('.modal-feedback');
  let counterDown = $(".counter-down");
  let modal = $(".modal");
  let modalCloseButton = $(".modal-close-button");
  let modalFeedbackCloseButton = $(".modal-feedback-close-button");
  let viewFlatsButton = $(".view-flats");
  let order = $(".order");
  let flatPath = $(".modal-dialog path");
  let flatLink = $(".flat-item a");

  // Квартиры
  flatPath.on("mouseover", function() {
    let currentFlatOrder = $(this).attr("data-flat") - 1;
    $(`.flat-link:eq(${currentFlatOrder})`).addClass("flat-link-mouseover");
  });
  flatPath.on("mouseout", function() {
    $('.flat-link').removeClass('flat-link-mouseover');
  });
  
  flatLink.on("mouseover", function() {
    currentFlat = +$(this).attr("data-flat-link");
    let usCurrentFlat = currentFlat.toLocaleString('en-US', {minimumIntegerDigits: 2,
      useGroupping: false });
    $(`[data-flat=${usCurrentFlat}]`).addClass("flat-path-mouseover");
  });
  flatLink.on("mouseout", function() {
    $(`.flats path`).removeClass("flat-path-mouseover");
  });

  // flatPath.on("click", toggleModalFeedback); // при клике на квартиру вызываем модальное окно с формой
  
  //Сохраняем номер выбранной квартиры в глобальную переменную
  let flatNumberToSend = 0;
  flatPath.on("click", function() {
    flatNumberToSend = $(this).attr("data-flat");
    toggleModalFeedback();
  });
  flatLink.on("click", function() {
    flatNumberToSend = $(this).attr("data-flat-link");
    toggleModalFeedback();
  });
  modalFeedbackCloseButton.on("click", toggleModalFeedback); // при клике на крестик закрываем модальное окно
  
  // Axios POST
  document.querySelector('.order').addEventListener("click", function(e) {
    e.preventDefault();
    let formData = new FormData(document.querySelector('form'));  
    $.post("http://localhost:3000/handle", 
      { 
        "name": formData.get("name"),
        "phone": formData.get("name"),
        "flatNumber": flatNumberToSend, 
      }, (data, status) => {

        if (status === 'success')
          alert(`Login success\n${data}`);
        else
          alert("Login denied");
      });
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3000/handle',
    //     data: formData,
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     }
    // })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // toggleModalFeedback();
  });

  // JQ POST

  // document.querySelector('.order').addEventListener("click", function(e) {
  //   e.preventDefault();
  //   let fd = new FormData(document.querySelector('form'));
  //   fd.append('flatNumber', flatNumberToSend);
  //   $.ajax({
  //     url: 'http://localhost:3000/handle',
  //     data: fd,
  //     processData: false,
  //     contentType: false,
  //     type: 'POST',
  //     success: function(data){
  //       alert(data);
  //     }
  //   });
  // });

  // Этажи
  floorPath.on("mouseover", function() {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function() {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
      useGroupping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  counterDown.on("click", function() {
    if (currentFloor > 02) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
      useGroupping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  function toggleModal() {
    modal.toggleClass("is-open");
  };
  
  function toggleModalFeedback() {
    modalFeedback.toggleClass("is-open");
  }
});

// $(".flat-link").on("mouseover", () => {
//   console.log($(this).index());
// });

// Ajax
// order.on("click", function(e) {
//   // e.preventDefault(); // Запрещаем отправку формы из html
//   // let formData = $('form').serialize();
//   // let request = new XMLHttpRequest();
//   // request.open("POST", "php/save.php");
//   // request.send(formData);
//   // alert(`Вы отправили следующие данные: ${formData}`);
//   toggleModalFeedback();
// });
  // $('.order').on("click", function(e) {


  
  //   .then(function(response) {
  //   console.log('Ответ сервера успешно получен!');
  // })
      
  // order.on("click", function(e) {
  //   // Запрещаем стандартную отправку формы из html
  //   e.preventDefault();
    
  //   // Получаем данные из формы
  //   let formData = new FormData(document.querySelector('form'));

  //   // Парсим объект
  //   let object = {};
  //   formData.forEach((value, key) => object[key] = value);
  //   formData = JSON.stringify(object); 

  //   // Отправляем данные на сервер
  //   let request = new XMLHttpRequest();
  //   request.open("GET", "php/welcome.php");
  //   request.send(formData);
    
  //   alert(`Вы отправили следующие данные: ${formData}`);
  //   toggleModalFeedback();
  // });


  // FOR PHP

  // Axios POST
  // document.querySelector('.order').addEventListener("click", function(e) {
  //   e.preventDefault();
  //   let formData = new FormData(document.querySelector('form'));
  //   formData.append('flatNumber', flatNumberToSend);
  //   console.log(formData.get("name"));
  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:3000/handle',
  //       data: formData,
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8"
  //       }
  //   })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  //   // toggleModalFeedback();
  // });

  // JQ POST

  // document.querySelector('.order').addEventListener("click", function(e) {
  //   e.preventDefault();
  //   let fd = new FormData(document.querySelector('form'));
  //   fd.append('flatNumber', flatNumberToSend);
  //   $.ajax({
  //     url: 'http://localhost:3000/handle',
  //     data: fd,
  //     processData: false,
  //     contentType: false,
  //     type: 'POST',
  //     success: function(data){
  //       alert(data);
  //     }
  //   });
  // });


  // JQ express
    // document.querySelector('.order').addEventListener("click", function(e) {
    // e.preventDefault();
    // let formData = new FormData(document.querySelector('form'));  
    // $.post("http://localhost:3000/handle", 
    //   { 
    //     "name": formData.get("name"),
    //     "phone": formData.get("name"),
    //     "flatNumber": flatNumberToSend, 
    //   }, (data, status) => {

    //     if (status === 'success')
    //       alert(`Login success\n${data}`);
    //     else
    //       alert("Login denied");
    //   });
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3000/handle',
    //     data: formData,
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     }
    // })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // toggleModalFeedback();
  // });