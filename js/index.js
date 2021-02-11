//Immediately Invoked Function Expression
(function () {

    //selecting the list wrapper i.e. <ul>
    const btnList = document.querySelector('.toggle-btns')

    //click event listener
    btnList.addEventListener('click', (e) => {

        //using event.target 
        var blkId = e.target.getAttribute('data-target')

        var blkToEnable = document.querySelector(blkId)
       
        //toggling the class selected
        blkToEnable.classList.toggle('selected')

    })
    
})();

// $('#run').on('click', function () {
//     var str = '<html><body>~ht</body><style>~cs</style><script>~js</ script></html>';

//     str = str.replace('~ht', $('#html').val());
//     str = str.replace('~cs', $('#css').val());
//     str = str.replace('~js', $('#js').val());

//     $('iframe').attr('srcdoc', str);
// });

// const getBlobURL = (code, type) => {
//     const blob = new Blob([code], { type })
//     return URL.createObjectURL(blob)
// }
// const getGeneratedPageURL = ({ html, css, js }) => {
    
//     const cssURL = getBlobURL(css, 'text/css')
//     const jsURL = getBlobURL(js, 'text/javascript')

//     const source = `
//     <html>
//       <head>
//         ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
//         ${js && `<script src="${jsURL}"></script>`}
//       </head>
//       <body>
//         ${html || ''}
//       </body>
//     </html>
//   `

//     return getBlobURL(source, 'text/html')
// }


// const url = getGeneratedPageURL({
//     html: htm,
//     css: cs,
//     js: jss
// })

// const iframe = document.querySelector('iframe')
// iframe.src = url

function getValues(){

    //getting values of textboxes for compilation
    const html = document.querySelector('#html').value
    const css = document.querySelector('#css').value
    const js = document.querySelector('#js').value

    if (!html) {
        alert('Cannot run empty html')
        //return null
    }
    else{
        const codes = { html, css, js }
        return codes
    }
}

var run = document.querySelector('#run')
run.addEventListener('click', () => {
    const values = getValues()

    console.log(values);
})

