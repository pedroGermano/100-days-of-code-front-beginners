fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Pedro',
  }),
})
.then((res) => res.json())
.then(data => console.log(data))


  // .then((res) => {
  //   console.log(res)
  //   if (res.ok){
  //     console.log('success')
  //   } else {
  //     console.log('error')
  //   }
  // })

  // .then((data) => console.log(data.data))
  // .catch((err) => console.log(err))