// fetch("http://swapi.dev/api/planets/1/")
//   .then(response => response.json())
//   .then(myJson => {
//     document.body.innerHTML =
//       "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
//   })


// console.log("He hallo, ik ben eerste")
// setTimeout(function () { console.log("He hallo, ik ben tweede"); }, 2000);
// console.log("He hallo, ik ben derde") 

// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' },
// ];

// function getPostst() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// createPost({ title: 'Post Three', body: 'This is post three' }, getPostst);

const huiswerkMaken = (vak, callback) => {
    console.log(`Ok, ok, ik ga nu mijn  ${vak} huiswerk maken`);
    // callback()
    setTimeout(function () {
        callback()
    }, 2000)
}

const klaarMetHuiswerk = () => {
    console.log('Kijk Paps/Mams, ik ben klaar met mijn huiswerk!');
}

huiswerkMaken('wiskunde', klaarMetHuiswerk);
