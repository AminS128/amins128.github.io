function resizeMiddle(){
    document.getElementById('main-center').style.width = Math.min(800, (document.body.clientWidth * 0.8))+ "px"
}

window.addEventListener('resize', resizeMiddle)
document.addEventListener('DOMContentLoaded', resizeMiddle)

const pages = [
    ["a particle-based simulator for echolocation", "https://amins128.github.io/echo", "Echo"],
    ["a utility for text-based display", "https://amins128.github.io/misc/typewriter.js", "typewriter.js"],
    ["a Chrome extension that detects AI images", "https://github.com/amins128/aichecker", "Hopecheck"],
    ["an AI image detector benchmarking site", "https://amins128.github.io/aichecker/bench", "aichecker/bench"],
    ["a 2D rigid-body physics library", "https://amins128.github.io/badrb", "BadRB"],
]

document.addEventListener('DOMContentLoaded', ()=>{
    let e = document.getElementById('link-container')
    pages.forEach((v)=>{
        let a = document.createElement('a')
        let s = document.createElement('span')
        let p = document.createElement('p')
        a.className = "typewriter"
        s.className = "typewriter"
        a.href = v[1]
        a.textContent = v[2]
        s.textContent = " - " + v[0]
        p.appendChild(a)
        p.appendChild(s)
        // d.innerHTML += "<br>"
        e.appendChild(p)
    })
})
