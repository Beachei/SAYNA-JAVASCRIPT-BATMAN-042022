
//PART 3

// PART 4
const btt = document.querySelector(".btt")
const brr = document.querySelector(".brr")
const lolipo = document.querySelector(".lolipop")
btt.addEventListener("click", () => {
    lolipo.classList.add("anim")
    lolipo.classList.remove("animr")
 })
 brr.addEventListener("click", () => { 
     lolipo.classList.add("animr")
     lolipo.classList.remove("anim")
 })
 const by = document.querySelector(".by")
 by.addEventListener("click", () => {
     document.querySelector(".link")
  })

  //footer
  const soc = document.querySelector(".soc")
  const yesa = document.querySelector(".!")
  const yesb = document.querySelector(".§")
  soc.addEventListener("mousemove",() => { 
      yesa.classList.add("nope")
      yesb.classList.add("yes")
  })
 