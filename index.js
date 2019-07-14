function reqListener () {
    const data = this.responseText
  }
  
  const oReq = new XMLHttpRequest()
  oReq.addEventListener("load", reqListener)
  oReq.open("GET", "https://codersuk-test.s3-eu-west-1.amazonaws.com/data.json")
  oReq.send()

  const parsedData = JSON.parse(data)
  console.log(data)