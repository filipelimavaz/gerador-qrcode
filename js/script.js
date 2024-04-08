const container = document.querySelector(".container")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeImg = document.querySelector("#qr-code img")

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value
    
    if(!qrCodeInputValue) return

    qrCodeBtn.innerHTML = "Gerando código..."
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active")
        qrCodeBtn.innerHTML = "Gerar QR Code"
    })
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode()
})

qrCodeInput.addEventListener("keydown", (event) => {
    if(event.code = "Enter") {
        generateQrCode()
    }
})

qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active")
        qrCodeBtn.innerHTML = "Gerar QR Code"
    }
})