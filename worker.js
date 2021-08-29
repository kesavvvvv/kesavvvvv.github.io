
// addEventListener is directly accessible in worker file
addEventListener("message", event => {
    // extract person passed from main thread from event object
    let person = event.data
    registerMember(person)
  })
  
  function registerMember(member) {
    // generating membership card takes some amount of time
    var click = 0
    console.log('inside worker')
    // mouseClick(() => {
    //     click = 1
    // })
    // send result back to the main thread
    if(click == 1) {
        postMessage(true)
        close()
    }
  }