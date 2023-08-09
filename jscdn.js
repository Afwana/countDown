document.addEventListener("DOMContentLoaded", function () {
    const dispbtn = document.getElementById("dispbtn")
    const formDisplay = document.getElementById("formDisplay")
    const setbtn = document.getElementById("setbtn")

    dispbtn.addEventListener("click", function () {
        formDisplay.style.display = "block"
    })
    setbtn.addEventListener("click", function () {
        formDisplay.style.display = "none"
        function CountDown() {
            const countDownDate = document.getElementById('ucdate').value
            const cdDate = new Date(countDownDate).getTime()

            if (isNaN(cdDate)) {
                alert("Invalid Date Format")
            }

            const now = new Date().getTime()
            const distance = cdDate - now

            if (distance <= 0) {
                document.getElementById("days").innerHTML = "00"
                document.getElementById("hours").innerHTML = "00"
                document.getElementById("minutes").innerHTML = "00"
                document.getElementById("seconds").innerHTML = "00"

                // const showbtn = document.getElementById("showbtn")
                const afterCountDown = document.getElementById("afterCountDown")

                // showbtn.addEventListener('click', function () {

                    // get name from input and dispaly 
                    const urName = document.getElementById('uname').value
                    var brhName = urName

                    // get birth date from input and calculate age 
                    const dob = document.getElementById('udate').value
                    const birthDate = new Date(dob)
                    const today = new Date();

                    age = Date.now() - birthDate.getTime()
                    ageYear = new Date(age)
                    ageYear = Math.abs(ageYear.getUTCFullYear() - 1970)

                    // video play
                    const usex = document.getElementById('usex').value.toLowerCase()
                    var anmSex = usex
                    if (anmSex === 'male') {
                        document.getElementById("afterCountDown").innerHTML = `
                            <h1 class="text-center"> Hii, ${brhName} </h1>
                            <p class="text-center">Its Your ${ageYear} Birthday !!!</p>
                            <video width="300px" src="./Animations/child-boy-dancing-cartoon-animationalpha-channel-transparent-background-SBV-307350454-preview.mp4" autoplay  muted class="boydance"></video>
                         `
                        }
                        else {
                        document.getElementById("afterCountDown").innerHTML = `
                            <h1 class="text-center"> Hii, ${brhName} </h1>
                            <p class="text-center">Its Your ${ageYear} Birthday !!!</p>
                            <video width="300px" height="250px" src="./Animations/girl-dancing-cartoon-animationalpha-channe-SBV-312146768-preview.mp4" autoplay loop muted class="girldance"></video>
                        `
                        }
                    // })
            }
            else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24))
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("days").innerHTML = days
                document.getElementById("hours").innerHTML = hours
                document.getElementById("minutes").innerHTML = minutes
                document.getElementById("seconds").innerHTML = seconds
            }
        }
        setInterval(CountDown, 1000)
    })
})

