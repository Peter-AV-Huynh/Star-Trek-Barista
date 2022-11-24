const finish = document.getElementsByClassName("fa-thumbs-up");
const trash = document.getElementsByClassName("fa-trash-o");

Array.from(finish).forEach(function(element) {
  element.addEventListener('click', function(){

    const orderID = this.parentNode.parentNode.id
    fetch('order-finish', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        '_id': orderID
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const orderID = this.parentNode.parentNode.id
        console.log("Order id",orderID)
        fetch('coffeeOrderForm', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            '_id': orderID,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

// Array.from(finish).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const orderID = this.parentNode.parentNode.id
//         console.log("Order id",orderID)
//         fetch('order-finish', {
//           method: 'put',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             '_id': orderID,
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });


// document.querySelector('.completedOrder').addEventListener('click', completedOrder)

// function completedOrder(){
//   Array.from(orders)
// }


















// const synth = window.speechSynthesis;
// const yellName = document.querySelectorAll('.fa-thumbs-up')

// Array.from(yellName).forEach(name => {
//   name.addEventListener('click', run)

// })

// function run(event) {
//   const customerName = document.querySelector('.customerName').innerText
//   let target = event.target
//   console.log("this is the target", target)
//   console.log("this is the parent of the target", target.parentNode)
//   console.log("this is the parent of the parent of the target", target.parentNode.parentNode)
//   target.parentNode.parentNode[1].innerText
// //   // console.log(customerName)
// //   // const fMidName = document.querySelector('#firstMiddle').innerText
// //   // const lMidName = document.querySelector('#lastMiddle').value
// //   // const lName = document.querySelector('#lastName').value

//   const yellText =  `${customerName}`

//   // document.querySelector('#placeToYell').innerText = yellText

//   let yellThis = new SpeechSynthesisUtterance(yellText);

//   synth.speak(yellThis);
// }
