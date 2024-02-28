function save() {
    const pName = document.querySelector('#pName').value;
    const pPrice = document.querySelector('#pPrice').value;
    const pDesc = document.querySelector('#pDesc').value;
    const pImage = document.querySelector('#pImage');


    var reader = new FileReader();
    // console.log(pImage.files[0])
    reader.readAsDataURL(pImage.files[0])
    reader.addEventListener('load', () => {
        const product = {
            pName,
            pPrice,
            pDesc,
            image: reader.result
        }
        const productData = localStorage.getItem('productList')
        let productList = productData == null ? [] : JSON.parse(productData);
        productList.push(product)
        localStorage.setItem('productList', JSON.stringify(productList))
        location.reload()
    })

}

function show() {
    var showImg = document.querySelector('#showImg');
    const data = JSON.parse(localStorage.getItem('productList'));
    console.log(data[3].image)
    showImg.innerHTML = `<img src="${data[3].image}" width="100%">`
}
show()