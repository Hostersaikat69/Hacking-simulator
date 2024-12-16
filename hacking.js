const addItem = async (item)=> {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}
const randomDelay  = () => {
    return new Promise((resolve, reject)=> {
        timeout = 1 + Math.random()*6;
        setTimeout(()=> {
            resolve();
        },timeout * 1000)
    })
}

async function main() {
    let t = setInterval(()=> {
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 1)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }
    }, 100)
    
    let text = ["initializing Hacking",
        "Reading your files",
        "Password files Detected",
        "Sending all Passwords and personal files to server",
        "cleaning up"];
    
    for (const item of text) {
        await addItem(item)
    }

    await randomDelay();
    clearInterval(t);
}

main()
