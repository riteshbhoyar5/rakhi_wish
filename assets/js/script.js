
document.addEventListener('DOMContentLoaded',function(){

    // Create floating flowers

    function createFlowers(){

        const container = document.getElementById('flowers-container')

        const colors = ['#ff9a9e','#fad0c4','#a18cd1','#fbc2eb','#84fab0']

        for(let i = 0; i < 20; i++){

            const petal = document.createElement('div')

            petal.className = "flower-petal"

            // Random properties

            const size = Math.random() * 15 + 5

            const left = Math.random() * 100

            const animationDuration = Math.random() * 10 + 5

            const delay = Math.random() * 5

            const colorIndex = Math.floor(Math.random() * colors.length)

            const zIndex = Math.floor(Math.random() * 5)

            // Apply Styles

            petal.style.width = `${size}px`

            petal.style.height = `${size}px`

            petal.style.left = `${left}vw`

            petal.style.animationDuration = `${animationDuration}s`

            petal.style.animationDelay = `${delay}s`

            petal.style.background = colors[colorIndex]

            petal.style.zIndex = zIndex

            container.appendChild(petal)

        }

    }

    // Special wish button

    document.getElementById('wishbtn').addEventListener('click',function(){

        const sWish = document.getElementById('specialWish')

        sWish.classList.toggle('hidden')

        // fireworks for celebration

        if(sWish.classList.contains('hidden') === false){
            
            createfireworks(15)
        
        }

    })

    // fireworks effect

    function createfireworks(count){

        for(let i = 0; i < count; i++){

            setTimeout(() =>{

                const firework = document.createElement('div')

                firework.className = 'firework'

                // Random Properties

                const colors = ['#ff9a9e' ,'#fad0c4','#a18cd1','#fbc2eb','#84fab0']

                const colorIndex = Math.floor(Math.random() * colors.length)

                const translateX = (Math.random() - 0.5) * 200

                const translateY = (Math.random() - 0.5) * 200

                firework.style.setProperty('--firework-color',colors[colorIndex])

                firework.style.setProperty('--firework-translate',`${translateX}px`)

                firework.style.setProperty('--firework-translate-2',`${translateY}px`)

                firework.style.left = `${Math.random() * 100}vw`

                firework.style.top = `${Math.random() * 100}vh`

                document.body.appendChild(firework)

                // Remove After Animation

                setTimeout(() =>{
                    firework.remove()
                },3000)

            }, i*200)

        }

    }

    // Initialize
    createFlowers()

    // firework
    setTimeout(() =>{
        createfireworks(8)
    },2000)

})

